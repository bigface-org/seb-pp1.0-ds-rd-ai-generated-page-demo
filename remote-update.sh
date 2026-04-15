#!/bin/bash

# ── 取得目前分支 ──────────────────────────────────
BRANCH=$(git branch --show-current 2>/dev/null)

# ── 若不在 main，直接離開 ──────────────────────
if [ "$BRANCH" != "main" ]; then
  exit 0
fi

# ── 在 main：執行 git pull ─────────────────────
echo "## Git 狀態（session 開始時自動抓取）"
echo ""
echo "- 目前分支：main"
echo ""
echo "→ 正在 pull main..."

PULL_OUTPUT=$(git pull 2>&1)
PULL_EXIT=$?

if [ $PULL_EXIT -eq 0 ]; then
  echo "✓ git pull 成功"
  echo "$PULL_OUTPUT"
else
  echo "✗ git pull 失敗"
  echo "$PULL_OUTPUT"
fi

echo ""