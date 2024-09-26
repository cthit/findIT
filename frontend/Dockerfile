FROM node:lts-alpine

COPY . /app

workdir /app
run npm install


run npm run build
expose 3000
cmd ["npm", "run", "start"]
