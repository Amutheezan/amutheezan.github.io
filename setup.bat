@echo off
echo === Jekyll Setup - amutheezan.github.io ===

:: Check for Ruby
where ruby >nul 2>&1
if errorlevel 1 (
    echo.
    echo ERROR: Ruby is not installed or not in PATH.
    echo.
    echo Please install Ruby from https://rubyinstaller.org/
    echo    - Download the recommended "Ruby+Devkit" installer
    echo    - During install, check "Add Ruby executables to your PATH"
    echo    - After install, close and reopen this window, then run setup.bat again
    echo.
    pause
    exit /b 1
)

:: Check for gem
where gem >nul 2>&1
if errorlevel 1 (
    echo.
    echo ERROR: gem is not available. Reinstall Ruby from https://rubyinstaller.org/
    echo.
    pause
    exit /b 1
)

echo Ruby found:
ruby --version

echo.
echo Installing bundler...
gem install bundler --no-document
if errorlevel 1 (
    echo ERROR: Failed to install bundler.
    pause
    exit /b 1
)

echo.
echo Installing dependencies...
bundle install
if errorlevel 1 (
    echo ERROR: bundle install failed. Check the output above for details.
    pause
    exit /b 1
)

echo.
echo Setup complete! Run serve.bat to start the local server.
pause
