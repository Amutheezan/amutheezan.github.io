@echo off
cd /d "%~dp0"
git add _sass/_liquid-glass.scss _sass/_color-themes.scss _sass/_masthead.scss _sass/_dark-mode.scss
git add _sass/_interactions.scss _projects/2026-05-12-dvrp-ar.md
git add _data/research_interests.yml _data/navigation.yml
git add _pages/research.html _includes/item-research-tags.html
git add _layouts/single.html _layouts/talk.html
git add _publications/ _talks/ _workshops/ _projects/
git commit -m "Compact mobile controls, research interests hub, sidebar/pill/CV fixes"
git push
echo.
echo Done! Press any key to close.
pause
