FROM node

WORKDIR /app1

COPY . . 

EXPOSE 4000

CMD node server.js