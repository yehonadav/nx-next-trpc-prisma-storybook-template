## 30/3/2024

CustomerError: Artifacts base directory not found in build output, please check your buildSpec  
to fix this, I changed dist/next-app/.next to next-app/.next in the amplify.yml in artifacts.baseDirectory  
https://github.com/aws-amplify/amplify-hosting/issues/987  


## 8/3/2024

auto build trigger runs on every commit on multiple amplify apps and costs too much money.

to configure Amplify to disable automatic builds on every code commit.  
To set up, choose App settings, General, and then scroll to the Branches section that lists the connected branches.  
Select a branch, and then choose Action, Disable auto build.  
Further commits to that branch will no longer trigger a new build.

now to enable a manual build:  
https://github.com/aws-amplify/amplify-hosting/issues/599#issuecomment-1985651386

## 31/01/2024

- nice trick for libs like mui + next  
https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp   

## 30/01/2024

- added .env file to fitness app  
```
NEXT_PUBLIC_API_URL=http://localhost:4200/api
```  

- updated amplify Environment variables  
    https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/dl0pkdc23u246/settings/variables/edit  
    NEXT_PUBLIC_API_URL  https://fitness.yehonadav.com/api  All branches  
    NEXT_PUBLIC_API_URL  https://fitness-dev.yehonadav.com/api  dev  override  
    NEXT_PUBLIC_STAGE  dev  
    DB_URI  ***  


## 22/01/2024

- fix instructions for failed build on missing GLIBC  
  https://github.com/nvm-sh/nvm/issues/2972#issuecomment-1472406359  
  https://www.frontendclub.net/aws-amplify-specified-node-18-but-GLIBC-not-found-on-build/  

- amplify build yml example  
  version: 1
  applications:
    - frontend:
        phases:
          preBuild:
            commands:
              - nvm install
              - nvm use
              - export NODE_OPTIONS=--max-old-space-size=8192
              - echo "disabled-node-linker=hoisted" >> .npmrc
              # - npm ci --cache .npm --prefer-offline
              - npm install
          build:
            commands:
              - npx nx run db:prisma generate --skip-nx-cache --verbose
              - npx nx run db:prisma migrate dev --skip-nx-cache --verbose
              - npx nx run db:prisma db seed --skip-nx-cache --verbose
              - npx nx build next-app --skip-nx-cache --verbose
        artifacts:
          baseDirectory: next-app/.next
          files:
            - '**/*'
        cache:
          paths:
            - .next/cache/**/*
            - .npm/**/*
            - node_modules/**/*
        buildPath: /
      appRoot: next-app
