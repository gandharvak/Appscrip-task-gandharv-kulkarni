# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Install deps with npm
COPY package.json package-lock.json ./
RUN npm ci

# Copy source + build
COPY . .

# Build + export (make sure your package.json has "export": "next export")
RUN npm run build && npm run export

# ---- Runtime stage (nginx) ----
FROM nginx:alpine

# Clean default nginx content & copy exported site
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
