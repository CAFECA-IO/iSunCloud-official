#!/bin/bash

# 確保載入完整的環境變數（特別是 NVM 或 Node 路徑）
export PATH=$PATH:/usr/local/bin:/usr/bin:/bin
[ -s "$HOME/.nvm/nvm.sh" ] && \. "$HOME/.nvm/nvm.sh"

# 設定工作目錄
cd /workspace/iSunCloud-official/ || exit

# 檢查是否有更新
git fetch

# 比較本地和遠端分支
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse @{u})

if [ "$LOCAL" != "$REMOTE" ]; then
  echo "[$(date)] New commits detected. Pulling latest changes..."
  git pull
  
  echo "Installing dependencies..."
  npm install
  
  echo "Running build..."
  npm run build
  
  echo "Restarting application..."
  # 使用 restart 比 delete + start 更平滑，若不存在則會報錯但不影響流程
  pm2 restart iSunCloud || pm2 start npm --name iSunCloud -- run production
else
  echo "[$(date)] No new commits."
fi

# 使用 pm2 jlist 輸出 JSON 並用 grep 檢查是否已啟動
if ! pm2 list | grep -q "iSunCloud" || ! pm2 list | grep "iSunCloud" | grep -q "online"; then
  echo "Application is not running. Starting now..."
  pm2 start npm --name iSunCloud -- run production
fi
