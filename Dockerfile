# Base docker image
FROM node:6.10.2-slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY ./src /usr/src/app

# Expose port
EXPOSE 3000

# Command to start server
CMD [ "npm", "start" ]