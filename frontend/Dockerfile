# Use an official Node.js image as the base
FROM node:14 as build-stage

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY vue-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's source code
COPY vue-app/ ./

# Build the Vue application
RUN npm run build

# Use an official Nginx image as the final base image
FROM nginx:latest

# Copy the built files from the build-stage
COPY --from=build-stage /app/dist/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Nginx is automatically started by the base image
