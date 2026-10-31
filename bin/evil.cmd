@echo off
rem ================================================
rem  evil-opencode isolated launcher
rem  - main opencode (~\.config\opencode) untouched
rem  - all config/data/cache live in tools\evil-opencode
rem  - delete this folder = complete uninstall, zero residue
rem ================================================
setlocal
set EVILROOT=%~dp0..
set XDG_CONFIG_HOME=%EVILROOT%\config
set XDG_DATA_HOME=%EVILROOT%\data
set XDG_CACHE_HOME=%EVILROOT%\cache
set OPENCODE_DISABLE_CLAUDE_CODE=1
"%~dp0opencode-evil.exe" %*
