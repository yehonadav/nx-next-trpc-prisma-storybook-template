# server docker (DB)

```bash
docker compose -f ./docker-compose.yml up -d
```

## stop

```bash
docker compose -f ./docker-compose.yml down
```


# PGAdmin

```bash
docker compose -f ./pgadmin-compose.yml up -d
```

go to http://localhost:5050/login
login creds are in the compose file.
to add a local db container, click on add server and enter these in the connection tab

```
host: host.docker.internal
port: 5432
user: my-project
pass: my-project
```

## stop

```bash
docker compose -f ./pgadmin-compose.yml down
```
