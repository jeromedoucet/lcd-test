FROM node:9.11.1

RUN mkdir /lcd-test
WORKDIR /lcd-test

COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build
RUN npm link

ENTRYPOINT ["lcd-test"]
