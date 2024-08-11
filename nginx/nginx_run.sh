#!/bin/sh

#If there are any errors, it will output them and the script will exit due to the set -e command, which causes the script to stop on any error.
set -e

touch /etc/nginx/conf.d/default.conf 

envsubst < /etc/nginx/default.conf.tpl > /etc/nginx/conf.d/default.conf
sed -i 's/__HOST__/$host/g' /etc/nginx/conf.d/default.conf
sed -i 's/__REMOTE_ADDR__/$remote_addr/g' /etc/nginx/conf.d/default.conf
sed -i 's/__PROXY_ADD_X_FORWARDED_FOR__/$proxy_add_x_forwarded_for/g' /etc/nginx/conf.d/default.conf
sed -i 's/__SCHEME__/$scheme/g' /etc/nginx/conf.d/default.conf
sed -i 's/__PROXY_HOST__/$proxy_host/g' /etc/nginx/conf.d/default.conf
sed -i 's/__HTTP_ORIGIN__/$http_origin/g' /etc/nginx/conf.d/default.conf
sed -i 's/__HTTP_REFERER__/$http_referer/g' /etc/nginx/conf.d/default.conf
sed -i 's/__HTTP_COOKIE__/$http_cookie/g' /etc/nginx/conf.d/default.conf
sed -i 's/__HTTP_SET_COOKIE__/$http_set_cookie/g' /etc/nginx/conf.d/default.conf


# Test the Nginx configuration
nginx -t


# If the configuration test is successful, start Nginx
# echo "This is the IP of backend is  $VITE_API_URL on Docker"


nginx -g 'daemon off;'