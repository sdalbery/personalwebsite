#!/usr/bin/env bash
set -euo pipefail

# Reclaim port 5173 if a stale dev server is still bound.
PORT_PIDS="$(lsof -ti tcp:5173 || true)"
if [ -n "${PORT_PIDS}" ]; then
  echo "Stopping existing process on :5173 (${PORT_PIDS})"
  kill -9 ${PORT_PIDS} || true
fi

echo "Starting Vite on http://localhost:5173"
npx vite --port 5173 --strictPort
