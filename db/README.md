https://github.com/nrwl/nx-recipes/tree/main/nestjs-prisma#nx--nestjs--prisma

## setup

```bash
cd ..
nx run db:prisma format
nx run db:prisma generate
nx run db:prisma migrate dev
nx run db:prisma db seed
```

local .env

```
POSTGRES_USER=my-project
POSTGRES_PASSWORD=my-project
POSTGRES_DB=postgres
POSTGRES_HOST=localhost
DATABASE_URL=postgresql://my-project:my-project@localhost:5432/my-project?schema=public
```
