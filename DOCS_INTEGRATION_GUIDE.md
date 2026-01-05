# Documentation Integration Guide

This guide explains how to configure various documentation tools to read source code from the `js`, `cs`, and `py` submodules.

## General Principles

Since the submodules are checked out into the root directory of the main repository, you can access them via relative paths.
The key is ensuring your build environment (GitHub Actions) has permissions to fetch them, which we handled in `doc-build.yml`.

## Tool-Specific Configurations

### 1. Docusaurus (JavaScript/TypeScript)

If you are using Docusaurus, you might want to show source code or generate API docs.

**Using `docusaurus-plugin-typedoc`:**

```javascript
// docusaurus.config.js
module.exports = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../js/src/index.ts'], // Adjust path to submodules
        tsconfig: '../js/tsconfig.json',
      },
    ],
  ],
};
```

### 2. Sphinx (Python)

To generate Python API docs, add the submodule path to `conf.py`.

```python
# docs/conf.py
import os
import sys
sys.path.insert(0, os.path.abspath('../py/src')) # Point to the python source root
```

### 3. DocFX (C#)

For C#, you can point `docfx.json` to the source folder.

```json
{
  "metadata": [
    {
      "src": [
        {
          "files": ["**/*.cs"],
          "src": "../cs/src"
        }
      ],
      "dest": "api"
    }
  ]
}
```

## Troubleshooting

- **File Not Found?**: Ensure `submodules: recursive` is set to `true` in your GitHub Action.
- **Permission Denied?**: Check if `SUBMODULE_UPDATE_TOKEN` has `repo` access to all submodules.
