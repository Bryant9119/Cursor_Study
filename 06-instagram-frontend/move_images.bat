@echo off
chcp 65001 >nul
cd /d "%~dp0"

if not exist "public" mkdir public

move /Y img01.png public\ 2>nul
move /Y img02.jpg public\ 2>nul
move /Y img03.jpg public\ 2>nul
move /Y img04.png public\ 2>nul
move /Y img05.jpg public\ 2>nul
move /Y img06.jpg public\ 2>nul
move /Y img07.jpg public\ 2>nul
move /Y img08.jpg public\ 2>nul
move /Y img09.jpg public\ 2>nul
move /Y img10.jpg public\ 2>nul
move /Y man.png public\ 2>nul
move /Y woman.png public\ 2>nul

echo 이미지 파일 이동 완료!
pause


