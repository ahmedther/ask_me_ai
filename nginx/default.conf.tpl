upstream app_server {
    # This name is acutally a ip here backend means name of the express server defined in docker / docker compose yaml
    server backend:${SERVE_BACKEND};
}

server {
    # Express backend
    listen ${LISTEN_PORT_BACKEND};

    client_max_body_size 100m;
    client_body_buffer_size 100m;

    access_log /var/log/nginx/ask_me_ai_backend_access.log;
    error_log /dev/stderr;

    client_body_timeout 7200s;
    client_header_timeout 7200s;
    keepalive_timeout 7200s;
    send_timeout 7200s;

    #location /static {
    #alias /backend/static;
    #}

    location /sse {
        proxy_pass http://app_server;
        proxy_set_header Connection '';
        proxy_http_version 1.1;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_buffering off;  # Disable buffering for SSE
        proxy_cache off;      # Disable caching for SSE
    }

    location = /favicon.ico { access_log off; log_not_found off; }
}

   
server {
    # Listen for incoming connections on port 80
    listen ${LISTEN_PORT_FRONTEND};

    # Server name configuration (optional)
    # If you have a specific domain name, replace _ with your domain
    server_name localhost;

    # Root directory where the React app files are located
    root /usr/share/nginx/html;

    # Set the default index file to index.html
    index index.html;

    # Logging:
    # access_log /dev/stdout;
    access_log /var/log/nginx/frontend_access.log;
    error_log /dev/stderr;

    location / {
        # Attempt to serve the requested file directly,
        # or redirect to index.html if not found
        root /usr/share/nginx/html;
        index index.html index.htm;

        try_files $uri $uri/ /index.html;
    }

}

