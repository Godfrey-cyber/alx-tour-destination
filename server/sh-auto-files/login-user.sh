#!/bin/bash

BASE_URL="http://localhost:5000/api"
EMAIL="alice@example.com"
PASSWORD="123456"
USER_NAME="Alice"
USER_ROLE="borrower"	

echo -e "\n🔐 Logging in..."
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\"}")

TOKEN=$(echo $LOGIN_RESPONSE | jq -r '.token')
USER_ID=$(echo $LOGIN_RESPONSE | jq -r '.user._id')

echo "✅ Token retrieved"