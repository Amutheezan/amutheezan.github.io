@echo off
echo Starting Jekyll - amutheezan.github.io
echo Site will be at: http://localhost:4000
echo Press Ctrl+C to stop.
echo.

where bundle >nul 2>&1
if errorlevel 1 (
    echo ERROR: Ruby/Bundler not found. Please run setup.bat first.
    pause
    exit /b 1
)

bundle exec jekyll serve --config _config.yml,_config.dev.yml --livereload
pause
