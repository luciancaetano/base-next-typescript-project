FROM node:14.17.1


RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . /usr/app

RUN yarn build

EXPOSE 3000
EXPOSE 49153

CMD yarn start