# ─────────────────────────────────────────────────────────────────────────────
# Makefile — Acclimation Sports Management
# One-command deployment for local and AWS production
# ─────────────────────────────────────────────────────────────────────────────

.PHONY: help dev build deploy stop restart logs clean pull

COMPOSE      = docker compose
COMPOSE_PROD = docker compose -f docker-compose.yml -f docker-compose.prod.yml

# ── Default target ─────────────────────────────────────────────────────────────
help:
	@echo ""
	@echo "  Acclimation Sports Management — Docker Commands"
	@echo "  ─────────────────────────────────────────────────"
	@echo "  make dev       Start locally (backend:5001, frontend:3000)"
	@echo "  make build     Build all Docker images without starting"
	@echo "  make deploy    ★ AWS production deploy (single command)"
	@echo "  make pull      Pull latest code from git and redeploy"
	@echo "  make stop      Stop all running containers"
	@echo "  make restart   Restart all containers"
	@echo "  make logs      Tail logs from all services"
	@echo "  make clean     Remove containers, images & volumes"
	@echo ""

# ── Local development ─────────────────────────────────────────────────────────
dev:
	$(COMPOSE) up --build

# ── Build images only ─────────────────────────────────────────────────────────
build:
	$(COMPOSE_PROD) build --no-cache

# ── AWS Production deploy (the ONE command) ───────────────────────────────────
deploy:
	@echo "==> Deploying to production..."
	$(COMPOSE_PROD) up -d --build --remove-orphans
	@echo ""
	@echo "✅  Deployed! Services:"
	@echo "    http://$(shell curl -s ifconfig.me 2>/dev/null || echo 'YOUR_SERVER_IP')"
	@echo ""
	$(COMPOSE_PROD) ps

# ── Pull latest code and redeploy ────────────────────────────────────────────
pull:
	@echo "==> Pulling latest code..."
	git pull origin main
	@echo "==> Redeploying..."
	$(MAKE) deploy

# ── Stop all containers ───────────────────────────────────────────────────────
stop:
	$(COMPOSE_PROD) down

# ── Restart all containers ────────────────────────────────────────────────────
restart:
	$(COMPOSE_PROD) restart

# ── Stream logs ───────────────────────────────────────────────────────────────
logs:
	$(COMPOSE_PROD) logs -f --tail=100

# Logs for specific service: make logs-backend | make logs-frontend | make logs-nginx
logs-backend:
	$(COMPOSE_PROD) logs -f --tail=100 backend

logs-frontend:
	$(COMPOSE_PROD) logs -f --tail=100 frontend

logs-nginx:
	$(COMPOSE_PROD) logs -f --tail=100 nginx

# ── Clean everything (WARNING: deletes volumes) ───────────────────────────────
clean:
	$(COMPOSE_PROD) down -v --rmi all --remove-orphans
	@echo "⚠️  All containers, images and volumes removed."
