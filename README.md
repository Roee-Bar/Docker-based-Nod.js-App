# Docker-based Node.js App

A simple Node.js HTTP server that responds with 'Hello World' message and displays the Node.js logo, containerized using Docker.

## Cloning

To clone the repository, run the following commands:

```bash
git clone https://github.com/Roee-Bar/docker-based-nodejs-app.git
cd docker-based-nodejs-app
```
## Building
To build the Docker image, run:
```
docker build -t docker-based-node .
```
## Running
To run the container, use:
```
docker run -e PORT=8000 -p 8000:8000 docker-based-node
```
The server will be accessible at http://localhost:8000.
## Development
To make changes to the application:

1. Modify the index.js file as needed.
2. Rebuild the Docker image using the build command above.
3. Run the new container to test your changes.
