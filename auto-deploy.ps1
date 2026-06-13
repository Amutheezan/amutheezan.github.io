#!/usr/bin/env pwsh
# auto-deploy.ps1 — watches the repo and pushes on any file change
# Run once:  .\auto-deploy.ps1
# Stop:      Ctrl+C

$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $repoPath
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $false   # we'll poll manually for simplicity

$watchDirs = @('_sass','_includes','_pages','_layouts','_data','_publications','_talks','_workshops','_projects','assets','files','images')

Write-Host "Auto-deploy watching: $repoPath" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop.`n" -ForegroundColor DarkGray

$lastHash = ""

function Get-DirHash {
    $items = @()
    foreach ($dir in $watchDirs) {
        $full = Join-Path $repoPath $dir
        if (Test-Path $full) {
            Get-ChildItem -Recurse -File $full |
                Select-Object FullName, LastWriteTimeUtc |
                ForEach-Object { $items += "$($_.FullName)|$($_.LastWriteTimeUtc)" }
        }
    }
    ($items | Sort-Object | Out-String).GetHashCode().ToString()
}

while ($true) {
    Start-Sleep -Seconds 3
    $hash = Get-DirHash

    if ($hash -ne $lastHash -and $lastHash -ne "") {
        Write-Host "$(Get-Date -Format 'HH:mm:ss')  Changes detected — deploying..." -ForegroundColor Yellow
        Push-Location $repoPath
        git add .
        $msg = "Auto-deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
        $result = git diff --cached --quiet 2>&1
        if ($LASTEXITCODE -ne 0) {
            git commit -m $msg
            git push
            Write-Host "$(Get-Date -Format 'HH:mm:ss')  Pushed. " -ForegroundColor Green
        } else {
            Write-Host "$(Get-Date -Format 'HH:mm:ss')  Nothing to commit." -ForegroundColor DarkGray
        }
        Pop-Location
    }

    $lastHash = $hash
}
