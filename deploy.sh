#!/bin/bash
cd "$(dirname "$0")"
echo "Current directory: $(pwd)"
echo "Git status:"
git status --short
echo ""
echo "Adding all changes..."
git add -A
echo ""
echo "Committing..."
git commit -m "Deploy: Vercel build fixes" --allow-empty
echo ""
echo "Pushing to origin main..."
git push origin main
echo ""
echo "Deployment push complete!"
git log --oneline -3
