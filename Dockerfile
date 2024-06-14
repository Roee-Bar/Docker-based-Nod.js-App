# nod:18.20.3-alpine3.20
FROM node@sha256:6937be95129321422103452e2883021cc4a96b63c32d7947187fcb25df84fc3f

WORKDIR /usr/src/index

COPY package*.json ./

# not realy needed because there are no dependencies
RUN npm install

COPY src ./src

CMD [ "npm", "start" ]