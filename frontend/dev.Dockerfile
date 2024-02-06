FROM node:lts

WORKDIR /app


EXPOSE 3000

CMD yarn && yarn dev
