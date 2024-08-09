#!/bin/sh

set -e

touch /etc/nginx/conf.d/default.conf 

envsubst < /etc/nginx/default.conf.tpl > /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'