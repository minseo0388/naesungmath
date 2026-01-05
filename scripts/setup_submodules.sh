#!/bin/bash

# Ensure we are in the project root
cd "$(dirname "$0")/.." || exit

# Define the repositories and folders
declare -A SUBMODULES
SUBMODULES=(
    ["js"]="https://github.com/minseo0388/naesungmath_js"
    ["cs"]="https://github.com/minseo0388/naesungmath_cs"
    ["py"]="https://github.com/minseo0388/naesungmath_py"
)

# Function to handle existing folders
handle_existing_folder() {
    local folder=$1
    if [ -d "$folder" ]; then
        if [ -f "$folder/.git" ] || [ -d "$folder/.git" ]; then
             echo "Directory '$folder' is already a git repository or submodule. Skipping backup and add."
             return 1
        fi
        
        echo "Directory '$folder' exists. Moving to '${folder}_backup'..."
        mv "$folder" "${folder}_backup"
    fi
    return 0
}

# Add submodules
for folder in "${!SUBMODULES[@]}"; do
    repo="${SUBMODULES[$folder]}"
    
    echo "Processing '$folder' -> '$repo'..."
    
    if handle_existing_folder "$folder"; then
        echo "Adding submodule '$folder'..."
        git submodule add "$repo" "$folder"
    else
        echo "Skipping '$folder'..."
    fi
done

# Check status
echo "Submodule setup complete. Status:"
git status

# Ask to commit
read -p "Do you want to commit these changes? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git commit -m "chore: add submodules (js, cs, py)"
    echo "Changes committed."
else
    echo "Changes not committed."
fi
