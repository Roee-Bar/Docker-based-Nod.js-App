# nod:18.20.3-alpine3.20 INDEX DIGEST
FROM node@sha256:6937be95129321422103452e2883021cc4a96b63c32d7947187fcb25df84fc3f

WORKDIR /usr/src/app

COPY package*.json ./

# for easier expansion in the future
RUN npm install

COPY src ./src

CMD [ "npm", "start" ]