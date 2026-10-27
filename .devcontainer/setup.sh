#!/usr/bin/env bash
set -e

echo "========================================================"
echo "🎬 Initializing AI Video Director Codespace Environment"
echo "========================================================"

# Update and install system dependencies (ffmpeg, chromium, audio/graphics libs)
sudo apt-get update -y
sudo apt-get install -y ffmpeg chromium libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon-x11-0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libpango-1.0-0 libcairo2 libasound2

# Install bun (required for pdoom-video)
if ! command -v bun &> /dev/null; then
    echo "Installing Bun..."
    curl -fsSL https://bun.sh/install | bash
    export BUN_INSTALL="$HOME/.bun"
    export PATH="$BUN_INSTALL/bin:$PATH"
    echo 'export PATH="$HOME/.bun/bin:$PATH"' >> ~/.bashrc
fi

# Set Chrome environment variables for headless capture across engines
export CHROME_PATH="/usr/bin/chromium"
export MG_CHROME="/usr/bin/chromium"
echo 'export CHROME_PATH="/usr/bin/chromium"' >> ~/.bashrc
echo 'export MG_CHROME="/usr/bin/chromium"' >> ~/.bashrc

echo ""
echo "✅ Tools Verification:"
node -v || true
python3 --version || true
ffmpeg -version | head -n 1 || true
chromium --version || true

echo ""
echo "🎬 Ready! Run 'node scripts/direct_scene.js' to direct scenes."

