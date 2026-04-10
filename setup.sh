#!/bin/bash
set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

ok()   { echo -e "${GREEN}✓ $1${NC}"; }
info() { echo -e "${YELLOW}→ $1${NC}"; }
fail() { echo -e "${RED}✗ $1${NC}"; exit 1; }

# 從 .node-version 讀取專案指定版本
NODE_REQUIRED=$(cat .node-version 2>/dev/null | tr -d '[:space:]')
if [ -z "$NODE_REQUIRED" ]; then
  fail "找不到 .node-version，請聯絡 RD。"
fi

echo ""
echo "========================================="
echo "  專案環境安裝腳本"
echo "========================================="
echo ""

# ── 1. 確認作業系統 ──────────────────────────
if [[ "$OSTYPE" != "darwin"* ]]; then
  fail "這個腳本只支援 Mac，請聯絡 RD 協助安裝。"
fi

# ── 2. 確認 nvm 是否已安裝 ───────────────────
export NVM_DIR="$HOME/.nvm"
if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  info "未偵測到 nvm，正在安裝..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  ok "nvm 安裝完成"
fi
# 載入 nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

if ! command -v nvm &> /dev/null; then
  fail "nvm 載入失敗，請重新開啟終端機後再試。"
fi

# ── 3. 安裝並切換至指定 Node 版本 ────────────
if nvm ls "$NODE_REQUIRED" | grep -q "$NODE_REQUIRED"; then
  ok "Node v${NODE_REQUIRED} 已安裝，略過"
else
  info "安裝 Node v${NODE_REQUIRED}..."
  nvm install "$NODE_REQUIRED"
fi
nvm use "$NODE_REQUIRED"
ok "Node $(node -v) 就緒"

# ── 4. 確認 yarn 是否已安裝 ──────────────────
if ! command -v yarn &> /dev/null; then
  info "未偵測到 yarn，正在安裝..."
  npm install -g yarn
  ok "yarn 安裝完成"
else
  ok "yarn $(yarn -v) 已安裝，略過"
fi

# ── 5. 安裝專案 dependencies ─────────────────
if [ ! -f "package.json" ]; then
  fail "找不到 package.json，請確認你在正確的專案資料夾裡。"
fi

info "安裝專案套件..."
yarn install
ok "套件安裝完成"

# ── 6. 完成 ──────────────────────────────────
echo ""
echo "========================================="
ok "環境安裝完成！"
echo ""
echo "  執行以下指令啟動專案："
echo ""
echo "    yarn dev"
echo ""
echo "  瀏覽器開啟 http://localhost:8080 即可預覽"
echo "========================================="
echo ""
