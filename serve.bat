@echo off
:: Re-launch inside a persistent cmd window so output stays visible after exit
if not defined IN_SUBSHELL (
  set IN_SUBSHELL=1
  cmd /k ""%~f0""
  exit
)
cd /d "%~dp0"
echo Starting Jekyll - amutheezan.github.io
echo Site will be at: http://localhost:4000
echo Press Ctrl+C to stop.
echo.

where ruby >nul 2>&1
if errorlevel 1 (
    echo ERROR: Ruby not found. Please install Ruby from https://rubyinstaller.org/
    pause
    exit /b 1
)

ruby -S bundle exec jekyll serve --config _config.yml,_config.dev.yml --livereload
pause
