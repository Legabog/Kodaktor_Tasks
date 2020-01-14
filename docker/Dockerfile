FROM alpine:latest

ADD default.conf /etc/nginx/conf.d/default.conf
RUN apk add --update git nginx curl nano
WORKDIR /run/nginx
WORKDIR /data
RUN git clone https://github.com/GossJS/heroku.git .

EXPOSE 1234

CMD nginx -g 'daemon off;'