FROM node:alpine as builder

LABEL maintainer='ahmed'

WORKDIR /frontend

COPY ./frontend /frontend

RUN npm install && \
    npm run build

FROM nginx:stable-alpine-slim

COPY --from=builder /frontend/dist /usr/share/nginx/html

COPY  ./nginx/default.conf.tpl /etc/nginx/default.conf.tpl

COPY ./nginx/nginx_run.sh /nginx_run.sh

# RUN chmod +x /nginx_run.sh

EXPOSE 80
EXPOSE 3000

CMD [ "nginx_run.sh" ]
