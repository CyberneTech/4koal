FROM fabiocicerchia/nginx-lua:ubuntu

RUN apt-get update
RUN apt-get install -y git

COPY nginx.conf /etc/nginx/nginx.conf
COPY httpasswd /etc/nginx/conf/httpasswd
COPY authorization.json /etc/nginx/auth/authorization.json

RUN git clone -b master --single-branch \
    https://github.com/ConnectHolland/nginx-dynamic-acl.git /usr/nginx/extras/nginx-dynamic-acl
