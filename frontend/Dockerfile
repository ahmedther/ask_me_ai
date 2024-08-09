FROM node:alpine

LABEL maintainer='ahmed'

WORKDIR /frontend

COPY ./ ./

EXPOSE 3001

ENV PATH="/frontend/scripts:$PATH"

CMD [ "run.sh" ]