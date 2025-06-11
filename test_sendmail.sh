#!/bin/sh
set -e

# Syntax check
php -l sendmail.php

# Start PHP built-in server in background with sending disabled
export DISABLE_EMAIL_SEND=1
php -S 127.0.0.1:8080 >/tmp/php_server.log 2>&1 &
PID=$!
# Allow server to start
sleep 1

# Make POST request
curl -s -o response.json -w "%{http_code}" -X POST \
  -F "name=Test" -F "email=test@example.com" -F "message=Hello" \
  http://127.0.0.1:8080/sendmail.php > status_code.txt

kill $PID
wait $PID 2>/dev/null || true

cat status_code.txt
cat response.json

rm status_code.txt response.json
