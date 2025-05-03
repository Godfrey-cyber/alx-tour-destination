#!/bin/bash

BASE_URL="http://localhost:5000/api/v1/"
EMAIL="godfreyndiritu254@gmail.com"
PASSWORD="Godfrey_1"
USER_NAME="Godfrey"
USER_ROLE="admin"
# // registering a user
echo "🔐 Registering user..."
curl -s -X POST "$BASE_URL/auth/register" \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"$USER_NAME\",\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\",\"role\":\"$USER_ROLE\"}" \
  | jq .