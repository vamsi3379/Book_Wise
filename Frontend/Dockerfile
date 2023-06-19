FROM node:17-alpine3.15 AS builder

# ENV NODE_ENV=production

WORKDIR /usr/src/client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

# nginx state for serving content
FROM nginx 
EXPOSE 3000
COPY ./nginx/bookwise.conf /etc/nginx/conf.d/bookwise.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
#
# COPY ./certs/devopsbyexample.pem /etc/nginx/certs/devopsbyexample.pem
# COPY ./certs/devopsbyexample-key.pem /etc/nginx/certs/devopsbyexample-key.pem
#
COPY --from=builder /usr/src/client/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]