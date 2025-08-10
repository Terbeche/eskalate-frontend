#!/bin/bash

# Custom startup script for Heroku
echo "Starting Next.js application..."

# Set port from Heroku environment
export PORT=${PORT:-3000}

echo "Starting on port: $PORT"

# Start the Next.js application
npm start
