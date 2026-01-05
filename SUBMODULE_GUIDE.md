# GitHub Submodule Automation Guide

This guide explains how to set up the authentication required for the main repository to update its submodules automatically.

## Why do I need this?

If your submodules are **public**, the default `GITHUB_TOKEN` might be enough.
However, if any submodule is **private** or if you encounter permission errors when the action tries to push updates, you need a **Personal Access Token (PAT)**.

## Step 1: Create a Personal Access Token (PAT)

1. Go to GitHub Settings.
2. Navigate to **Developer settings** -> **Personal access tokens** -> **Tokens (classic)**.
3. Click **Generate new token (classic)**.
4. Name it something like `Naesungmath Submodule Updater`.
5. **Select Scopes**:
   - `repo` (Full control of private repositories) - **Required** if you have private repos or want to push changes.
   - `workflow` (optional, good for managing actions).
6. Click **Generate token**.
7. **Copy the token immediately**. You won't see it again.

## Step 2: Add Secret to Repository

1. Go to your **Main Repository** (`naesungmath`) on GitHub.
2. Click **Settings** -> **Secrets and variables** -> **Actions**.
3. Click **New repository secret**.
4. **Name**: `SUBMODULE_UPDATE_TOKEN` (Must match the name in the workflow file: `${{ secrets.SUBMODULE_UPDATE_TOKEN }}`).
5. **Secret**: Paste the token you copied.
6. Click **Add secret**.

## Done!

Now the `Auto Update Submodules` workflow will use your PAT to authenticate, allowing it to fetch private submodules and push updates to the main repository.
