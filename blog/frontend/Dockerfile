FROM node:alpine
RUN apk update && apk add --no-cache make git

WORKDIR /frontend

RUN npm i npm@latest -g && \
    npm install -g @angular/cli@8.3.19

RUN chown -R node /frontend

USER node


