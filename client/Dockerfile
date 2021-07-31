FROM node:16

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

RUN npm run export

CMD ["npm", "start"]

EXPOSE 3000