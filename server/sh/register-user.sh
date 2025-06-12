#!/bin/bash

BASE_URL="http://localhost:5000/api/v1"
EMAIL="annenjeri@gmail.com"
PASSWORD="Anne_1234"
FIRST_NAME="Anne"
LAST_NAME="Njeri"
# // registering a user
echo "🔐 Registering user..."
curl -s -X POST "$BASE_URL/auth/register-user" \
  -H "Content-Type: application/json" \
  -d "{\"firstName\":\"$FIRST_NAME\",\"lastName\":\"$LAST_NAME\",\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\"}"