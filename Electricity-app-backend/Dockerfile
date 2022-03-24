FROM node:14.14.0-alpine
WORKDIR "/Elec-app"
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
EXPOSE 80
