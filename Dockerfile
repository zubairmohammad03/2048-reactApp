# Use Node.js as base image
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json first and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Build the React app
RUN npm run build

# Debug: List contents of /app/build
RUN ls -la /app/build || echo "Build directory not found!"

# Use Nginx to serve the app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
