@echo off
cd /d "%~dp0"
(
  echo === Jekyll Serve - amutheezan.github.io ===
  echo.
  ruby -S bundle exec jekyll serve --config _config.yml,_config.dev.yml --livereload
  echo.
  echo === EXITED ===
) > serve_log.txt 2>&1
notepad serve_log.txt
