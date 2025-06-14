#!/bin/bash

BASE_URL="http://localhost:5000/api/v1"
EMAIL="jane.njeri@gmail.com"
PASSWORD="Jane_1234"

echo -e "\n🔐 Logging in..."
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/login-user" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\"}")

TOKEN=$(echo $LOGIN_RESPONSE | jq -r '.token')
USER_ID=$(echo $LOGIN_RESPONSE | jq -r '.user._id')

# echo "✅ Token retrieved"

echo "$LOGIN_RESPONSE" | jq . 2>/dev/null || echo "Non-JSON response: $LOGIN_RESPONSE"