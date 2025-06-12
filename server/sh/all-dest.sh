#!/bin/bash

BASE_URL="http://localhost:5000/api/v1/"

echo "📥 Fetching all destinations..."

RESPONSE=$(curl -s -X GET "${BASE_URL}destinations/all-destinations")

echo "$RESPONSE" | jq . 2>/dev/null || echo "Non-JSON response: $RESPONSE"
