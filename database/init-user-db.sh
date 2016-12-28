#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "${POSTGRES_USER}" -f /postgres-init/schema.sql
psql -v ON_ERROR_STOP=1 --username "${POSTGRES_USER}" -f /postgres-init/data.sql
