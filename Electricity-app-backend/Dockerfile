FROM node:14.14.0-alpine
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install --force
COPY . .
CMD ["npm", "run", "start"]
