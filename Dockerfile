FROM node:14

WORKDIR /khambenh-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start