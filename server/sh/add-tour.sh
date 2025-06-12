#!/bin/bash

BASE_URL="http://localhost:5000/api/v1"

# User login credentials
EMAIL="annenjeri@gmail.com"
PASSWORD="Anne_1234"

# 1️⃣ Login and retrieve token
echo "🔐 Logging in user..."

LOGIN_RESPONSE=$(curl -s -X POST "${BASE_URL}/auth/login-user" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\"}")

# Extract access token
ACCESS_TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.accessToken')

if [ "$ACCESS_TOKEN" == "null" ] || [ -z "$ACCESS_TOKEN" ]; then
  echo "❌ Login failed. Response: $LOGIN_RESPONSE"
  exit 1
fi

echo "✅ Login successful. Access Token acquired."

# 2️⃣ Add the destination
echo "🏨 Adding 'Savannah Breeze Lodge' destination..."

DEST_RESPONSE=$(curl -s -X POST "${BASE_URL}/destinations/add-destination" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -d "{
    \"title\": \"Savannah Breeze Lodge\",
    \"slug\": \"savannah-breeze-lodge\",
    \"description\": \"A serene getaway on the outskirts of Maasai Mara, perfect for wildlife enthusiasts.\",
    \"images\": [
      	\"https://q-xx.bstatic.com/xdata/images/hotel/max500/90419968.jpg?k=0fde0f5ab18a67957561d396d492594af5da1489feb6db46f6061a00516c3648&o=\",
		\"https://images.luxuryescapes.com/q_auto:good/an8u54dbewqv8vcb4x1\",
		\"https://cf.bstatic.com/xdata/images/hotel/max1024x768/74779777.jpg?k=4a13e1e31503c18bc34526bd5860c2bc53d7f5124f70dec581bcda20505c20d1&o=&hp=1\",
		\"https://q-xx.bstatic.com/xdata/images/hotel/max500/90419999.jpg?k=cabccd61fbce349b0e78f804588fa538f4cde6c617fe383d4eaedc70f895f5a7&o=\",
		\"https://dbijapkm3o6fj.cloudfront.net/resources/5314,1004,1,7,4,0,960,540/-2346-/20160817093927/everything-you-need-to-relax-and-recharge.jpeg\" 
    ],
    \"pricePerNight\": 120,
    \"maxGuests\": 4,
    \"category\": \"Wildlife\",
    \"location\": {
      \"country\": \"Kenya\",
      \"city\": \"Narok\",
      \"address\": \"Maasai Mara Road, Talek\",
      \"coordinates\": [35.1446, -1.4061]
    }
  }")

echo "$DEST_RESPONSE" | jq . 2>/dev/null || echo "Non-JSON response: $DEST_RESPONSE ${BASE_URL}/destinations/add-destination"