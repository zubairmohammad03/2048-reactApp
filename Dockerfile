# Use Node.js for building the app
# Use Node.js for building the app
FROM node:18 AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Run the preview server on the correct port
CMD ["npm", "run", "preview"]

