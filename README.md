# docker-based-node.js-app
Node http server that responds with 'hello world' messages
## Clonning
```
git clone https://github.com/Roee-Bar/docker-based-nodejs-app.git
git cd docker-based-nodejs-app
```
## Building
```
docker build docker-based-node
```
## Running
```
doker run -e PORT=8000 -p 8000:000 docker-based-node
```
