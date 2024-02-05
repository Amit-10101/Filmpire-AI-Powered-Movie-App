# Use an official Node.js runtime as the base image
FROM node:20-alpine3.19 as build

# Set the working directory in the Docker image
WORKDIR /app

# Copy the package.json and package-lock.json files into the Docker image
COPY package*.json ./

# Install the application's dependencies in the Docker image
RUN npm install --only=production

# Copy the rest of the application's code into the Docker image
COPY . .

# Install vite
RUN npm install vite
COPY ./vite.config.js /app

# Accept the API key as a build argument
ARG VITE_TMDB_KEY

# Set the API key as an environment variable
ENV VITE_TMDB_KEY=$VITE_TMDB_KEY

# Build the application for production
RUN npm run build

# Use an official lightweight Node.js runtime as a second stage build
FROM node:20-alpine3.19

WORKDIR /app

# Install serve to run your application
RUN npm install -g serve

# Copy build files from build stage
COPY --from=0 /app/dist ./dist

# Instruct Docker to listen on port 5173 (you can choose any port you like)
EXPOSE 5173

# Start the application
CMD ["serve", "-s", "dist", "-l", "5173"]
