@echo off
echo Starting Jekyll — amutheezan.github.io
echo Site will be at: http://localhost:4000
echo Press Ctrl+C to stop.
echo.
bundle exec jekyll serve --config _config.yml,_config.dev.yml --livereload
pause
