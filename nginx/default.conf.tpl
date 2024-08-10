upstream app_server {
    # This name is acutally a ip here backend means name of the express server defined in docker / docker compose yaml
    server backend:${SERVE_BACKEND};
}


server {
    # Express backend
    listen ${LISTEN_PORT_BACKEND};

    client_max_body_size 100m;
    client_body_buffer_size 100m;

    #access_log /var/log/nginx/ask_me_ai_backend_access.log;
    access_log /dev/stderr;
    error_log /dev/stderr;

    client_body_timeout 720s;
    client_header_timeout 720s;
    keepalive_timeout 720s;
    send_timeout 720s;

    #location /static {
    #alias /backend/static;
    #}


    

    # variables like $host needs escape from envsubt so se double __var__ and later sh cmd  sed -i 's/__var__/$var/g' filename


    location /sse {
        proxy_pass http://app_server/sse;
        proxy_set_header Host __HOST__;
        proxy_set_header X-Real-IP __REMOTE_ADDR__;
        proxy_set_header X-Forwarded-For __PROXY_ADD_X_FORWARDED_FOR__;
        proxy_set_header X-Forwarded-Proto __SCHEME__;
        proxy_set_header X-Forwarded-Host __PROXY_HOST__;
        proxy_set_header X-Forwarded-Server __HOST__;
        proxy_set_header Origin __HTTP_ORIGIN__;
        proxy_set_header Referer __HTTP_REFERER__;
        proxy_set_header Cookie __HTTP_COOKIE__;
        proxy_set_header Set-Cookie __HTTP_SET_COOKIE__;

        proxy_pass_request_headers on;

        
        

        chunked_transfer_encoding off;
        proxy_buffering off;
        proxy_cache off;
        proxy_read_timeout 24h;
    }

    location /api {
        proxy_pass http://app_server/api;
        proxy_set_header Host __HOST__;
        proxy_set_header X-Real-IP __REMOTE_ADDR__;
        proxy_set_header X-Forwarded-For __PROXY_ADD_X_FORWARDED_FOR__;
        proxy_set_header X-Forwarded-Proto __SCHEME__;
        proxy_set_header X-Forwarded-Host __PROXY_HOST__;
        proxy_set_header X-Forwarded-Server __HOST__;
        proxy_set_header Origin __HTTP_ORIGIN__;
        proxy_set_header Referer __HTTP_REFERER__;
        proxy_set_header Cookie __HTTP_COOKIE__;
        proxy_set_header Set-Cookie __HTTP_SET_COOKIE__;

        proxy_pass_request_headers on;

        
        
    }

    location / {
        proxy_pass http://app_server;
        proxy_set_header Host __HOST__;
        proxy_set_header X-Real-IP __REMOTE_ADDR__;
        proxy_set_header X-Forwarded-For __PROXY_ADD_X_FORWARDED_FOR__;
        proxy_set_header X-Forwarded-Proto __SCHEME__;
        proxy_set_header X-Forwarded-Host __PROXY_HOST__;
        proxy_set_header X-Forwarded-Server __HOST__;
        proxy_set_header Origin __HTTP_ORIGIN__;
        proxy_set_header Referer __HTTP_REFERER__;
        proxy_set_header Cookie __HTTP_COOKIE__;
        proxy_set_header Set-Cookie __HTTP_SET_COOKIE__;

        proxy_pass_request_headers on;

        
        
    }



    location = /favicon.ico {
        access_log off;
        log_not_found off;
    }
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
        index index.html index.htm;

    
    }

}

