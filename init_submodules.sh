#!/bin/bash
# Submodule Initialization Script

# Define the submodules
git submodule add https://github.com/minseo0388/naesungmath_js js
git submodule add https://github.com/minseo0388/naesungmath_cs cs
git submodule add https://github.com/minseo0388/naesungmath_py py

# Check status
git submodule status
