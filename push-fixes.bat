@echo off
cd /d "%~dp0"
git add _sass/_liquid-glass.scss _projects/2026-05-12-dvrp-ar.md
git commit -m "Fix sidebar dark box and CV pipe-char table glitch"
git push
echo.
echo Done! Press any key to close.
pause
