@echo off
title Entrenate te te
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "%~dp0juego.html"
) else (
    start "" "%~dp0juego.html"
)
exit

