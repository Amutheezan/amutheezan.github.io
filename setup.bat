@echo off
cd /d "%~dp0"
if exist Gemfile.lock del Gemfile.lock
(
  echo === Jekyll Setup - amutheezan.github.io ===
  echo.
  echo --- Ruby version ---
  ruby --version
  echo.
  echo --- Installing bundler ---
  gem install bundler --no-document --user-install
  echo.
  echo --- Configuring bundle path ---
  ruby -S bundle config set --local path vendor/bundle
  echo.
  echo --- Installing dependencies ---
  ruby -S bundle install
  echo.
  echo === DONE ===
) > setup_log.txt 2>&1
notepad setup_log.txt
