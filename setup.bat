@echo off
echo === Jekyll Setup — amutheezan.github.io ===
echo Installing bundler...
gem install bundler --no-document
echo Installing dependencies...
bundle install
echo.
echo Setup complete! Run serve.bat to start the local server.
pause
