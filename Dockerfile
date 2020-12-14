# Current Node LTS Version
FROM node:14

# Set workdir to /usr/src/app in container
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project sources
COPY . .

# Expose for convenience
EXPOSE 3000

# Start the project
CMD [ "npm", "start" ]
