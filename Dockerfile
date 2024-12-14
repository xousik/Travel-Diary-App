# Use the official Node.js image as the base  
FROM node:18

# Set the working directory inside the container  
WORKDIR /usr/src/app  

# Copy package.json and package-lock.json to the container  
COPY package*.json ./  
COPY prisma/ /usr/src/app/prisma/  

# Install dependencies  
RUN npm install  

# Copy the app source code to the container  
COPY . .  

# Build the Next.js app  
# RUN npm run build  

# Expose the port the app will run on  
EXPOSE 3000  

# Start the app  in development mode
CMD ["npm", "run", "dev"] 
