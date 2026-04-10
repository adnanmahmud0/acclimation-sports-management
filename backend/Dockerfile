# ── Stage 1: Install all dependencies ──────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ── Stage 2: Build TypeScript ────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json tsconfig.json ./
COPY src ./src

RUN npm run build

# ── Stage 3: Production runner ───────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy compiled output from builder
COPY --from=builder /app/dist ./dist

# Create uploads directory for file storage
RUN mkdir -p uploads/image uploads/media uploads/doc

# Expose the port the app listens on
# Render sets PORT via environment variable — default 5001
EXPOSE 5001

# Health check so Render knows when the container is ready
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget -qO- http://localhost:${PORT:-5001}/ || exit 1

CMD ["node", "dist/server.js"]
