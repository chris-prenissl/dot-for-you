#!/bin/zsh
source "$HOME/.zshrc"

npx nuxi generate
npx serve ".output/public"