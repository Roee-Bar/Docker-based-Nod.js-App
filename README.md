# Docker-based Node.js App

A simple Node.js HTTP server that responds with 'Hello World' message and displays the Node.js logo, containerized using Docker.
## Project Structure
```
docker-based-nodejs-app/
├── Dockerfile
├── package.json
├── README.md
└── src/
    ├── index.js
    └── nodejs-logo.png
```
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
docker run -d -e PORT=8000 -p 8000:8000 docker-based-node
```
## Monitoring
To check the status and resource usage of the running container, use the following command:

```bash
docker stats
```
The server will be accessible at http://localhost:8000.
## Stopping the Container
To stop the running container, you can use the following steps:

1. First, find the container ID:
```bash
docker ps --filter ancestor=docker-based-node
```
2. Then, use the container ID to stop the container:
```bash
docker stop <container_id>
```
## Development
To make changes to the application:

1. Modify the index.js file as needed.
2. Rebuild the Docker image using the build command above.
3. Run the new container to test your changes.
