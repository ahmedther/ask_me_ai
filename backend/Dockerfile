FROM node:alpine

LABEL maintainer='ahmed'

WORKDIR /backend

COPY ./ ./

# EXPOSE 3000

ENV PATH="/backend/scripts:$PATH"

CMD [ "run.sh" ]