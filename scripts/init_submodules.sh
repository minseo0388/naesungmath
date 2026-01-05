#!/bin/bash
# Submodule Initialization Script (HEAD-Tracking Mode)

# Ensure we are in the project root
cd "$(dirname "$0")/.." || exit

# Define the submodules with branch tracking (-b main)
git submodule add -b main https://github.com/minseo0388/naesungmath_js js
git submodule add -b main https://github.com/minseo0388/naesungmath_cs cs
git submodule add -b main https://github.com/minseo0388/naesungmath_py py

# Verify status
git submodule status
