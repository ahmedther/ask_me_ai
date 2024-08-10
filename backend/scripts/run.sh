#!/bin/sh


npm install

npm install -g pm2

npm run build


pm2-docker start dist/server.js




# npm run start
# apk add --no-cache git

# git clone https://github.com/ahmedther/ask_me_ai.git

# # Move the contents of the backend folder to /backend
# mv /backend/ask_me_ai/backend/* /backend/

# # Remove the ask_me_ai folder and all its contents recursively
# rm -rf /backend/ask_me_ai

# # Resolve the IP address of the Nginx container
# NGINX_IP=$(getent hosts nginx | awk '{ print $1 }')

# # Export the IP address as an environment variable
# export REACT_CLIENT_URL="http://$NGINX_IP"

# # Echo the IP address for debugging purposes
# echo "This is the IP of $REACT_CLIENT_URL on Docker"
