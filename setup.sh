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

# ── 2. 檢查 Node 是否已安裝且版本符合 ────────
MAJOR_REQUIRED=$(echo "$NODE_REQUIRED" | cut -d. -f1)

if command -v node &> /dev/null; then
  MAJOR_INSTALLED=$(node -v | sed 's/v//' | cut -d. -f1)
  if [ "$MAJOR_INSTALLED" -ge "$MAJOR_REQUIRED" ]; then
    ok "Node $(node -v) 已安裝，符合需求，略過"
  else
    info "目前 Node 版本太舊（$(node -v)），需要 v${NODE_REQUIRED}+"
    info "請前往 https://nodejs.org 下載安裝最新 LTS 版本，完成後重新執行此腳本。"
    open "https://nodejs.org"
    exit 1
  fi
else
  info "未偵測到 Node，正在開啟下載頁面..."
  info "請下載並安裝 LTS 版本，完成後重新執行此腳本。"
  open "https://nodejs.org"
  exit 1
fi

# ── 3. 安裝專案 dependencies ─────────────────
if [ ! -f "package.json" ]; then
  fail "找不到 package.json，請確認你在正確的專案資料夾裡。"
fi

info "安裝專案套件..."
npm install
ok "套件安裝完成"

# ── 4. 完成 ──────────────────────────────────
echo ""
echo "========================================="
ok "環境安裝完成！"
echo ""
echo "  執行以下指令啟動專案："
echo ""
echo "    npm run dev"
echo ""
echo "  瀏覽器開啟 http://localhost:5173 即可預覽"
echo "========================================="
echo ""