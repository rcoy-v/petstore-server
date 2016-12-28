FROM postgres:9
RUN mkdir -p /postgres-init
COPY init-user-db.sh /docker-entrypoint-initdb.d/
COPY schema.sql data.sql /postgres-init/
