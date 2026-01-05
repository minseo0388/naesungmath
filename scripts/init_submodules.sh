#!/bin/bash
# Submodule Initialization Script

# Ensure we are in the project root
cd "$(dirname "$0")/.." || exit

# Define the submodules
git submodule add https://github.com/minseo0388/naesungmath_js js
git submodule add https://github.com/minseo0388/naesungmath_cs cs
git submodule add https://github.com/minseo0388/naesungmath_py py

# Check status
git submodule status
