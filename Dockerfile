# FROM node:18-alpine

# WORKDIR /app

# COPY . .

# RUN yarn install

# CMD ["yarn", "start"]

# EXPOSE 3000


FROM node:18-alpine as build

WORKDIR /app

COPY . /app

RUN npm install && npm run build 

FROM nginx:latest

EXPOSE 3000

COPY --from=build /app/build /usr/share/nginx/html