# Use the official Node.js image
FROM node:14

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app
CMD [ "npm", "start" ]