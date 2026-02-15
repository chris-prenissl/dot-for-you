#!/bin/zsh
source "$HOME/.zshrc"
HTML="/var/www/html"
FAVICON_PATH="$HTML/favicon.ico"
ICON_PATH="$HTML/icon.png"

npx nuxi generate
rbpl "sudo rm -rf ${HTML}"
scp -r dist snake@raspberrypi.local:~
rbpl "sudo mv dist ${HTML}"
rbpl "sudo chmod 644 ${FAVICON_PATH}" "${ICON_PATH}"
rbpl "sudo systemctl reload nginx"