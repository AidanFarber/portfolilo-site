FROM alpine:3.20
RUN apk update && apk add \
    git \
    nginx \
    npm \
    react

EXPOSE 443
