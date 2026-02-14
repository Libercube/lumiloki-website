#!/usr/bin/env bash
# 清理本地开发产生的临时文件（截图、构建产物、日志等）

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SCREENSHOT_DIR="/tmp/lumiloki-screenshots"

deleted=0

# 1. 清理截图目录
if [ -d "$SCREENSHOT_DIR" ]; then
  count=$(find "$SCREENSHOT_DIR" -type f | wc -l)
  rm -rf "$SCREENSHOT_DIR"
  deleted=$((deleted + count))
  echo "✓ 已清理截图目录: $SCREENSHOT_DIR ($count 个文件)"
else
  echo "- 截图目录不存在，跳过"
fi

# 2. 清理构建产物
if [ -d "$PROJECT_DIR/dist" ]; then
  rm -rf "$PROJECT_DIR/dist"
  echo "✓ 已清理构建产物: dist/"
  deleted=$((deleted + 1))
else
  echo "- dist/ 不存在，跳过"
fi

# 3. 清理 Vite 临时文件
for f in /tmp/vite-*.log; do
  [ -f "$f" ] && rm -f "$f" && deleted=$((deleted + 1))
done

echo ""
echo "清理完成，共移除 $deleted 个文件/目录"
