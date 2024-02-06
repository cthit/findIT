FROM node:lts-alpine

COPY . /app

workdir /app
run yarn install


run yarn build
expose 3000
cmd ["yarn", "start"]
