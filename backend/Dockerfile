FROM node:alpine

LABEL maintainer='ahmed'

WORKDIR /backend

COPY ./ ./

# EXPOSE 3000
RUN npm install && \
    npm install -g pm2 && \
    npm run build && \
    rm -rf ./node_modules ./src


ENV PATH="/backend/scripts:$PATH"

CMD [ "run.sh" ]