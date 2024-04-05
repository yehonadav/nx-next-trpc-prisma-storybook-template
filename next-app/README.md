## pre requisites

- install node js (.nvmrc version)
- install npm (.npmrc version)
- install docker latest version
- initiate docker compose (instructions in compose/readme)
- setup prisma (instructions in [db/readme](https://github.com/yehonadav/next-app/tree/main/db))

create `.env` file

```
POSTGRES_USER=next-app
POSTGRES_PASSWORD=next-app
POSTGRES_DB=postgres
POSTGRES_HOST=localhost
DATABASE_URL=postgresql://next-app:next-app@localhost:5432/next-app?schema=public

NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_STAGE=dev
```

## start

```bash
cd ..
nx dev next-app
```

http://localhost:3000  
http://localhost:3000/api/hello  
http://localhost:3000/trpcCheck

[production link](https://app.next-app.io/)
