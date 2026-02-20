# Step 1: Build the React application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite project
RUN npm run build

# Step 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the build output from the builder stage to Nginx's default HTML folder
# Vite builds to the "dist" folder by default
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration to handle React Router (SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
