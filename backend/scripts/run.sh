#!/bin/sh


npm install

npm install -g pm2

npm run build

pm2-docker start dist/server.js

# apk add --no-cache git

# git clone https://github.com/ahmedther/ask_me_ai.git

# # Move the contents of the backend folder to /backend
# mv /backend/ask_me_ai/backend/* /backend/

# # Remove the ask_me_ai folder and all its contents recursively
# rm -rf /backend/ask_me_ai

