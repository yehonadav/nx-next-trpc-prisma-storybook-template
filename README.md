# nx-next-trpc-prisma-storybook-template

describe your project here...  


## Start the application

Run `npx nx dev next-app` to start the development server. Happy coding!  
see [installation requirements here](https://github.com/yehonadav/nx-next-trpc-prisma-storybook-template/tree/main/next-app)  

<br/>  
<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated using [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨  
by [Yehonadav Bar Ilan](https://www.linkedin.com/in/yehonadav-bar-ilan-09b918154/)  
check out my [dev blog](https://www.yehonadav.com/blog/setting-up-a-monorepo) for more details  


## Project Overview  

### [ui](ui/)  
stateless nextJS components, tested with storybook  

### [tests-e2e](tests/)  
e2e & integration tests automation  

### [db](db/)  
prisma schema, generated code & migrations  

### [compose](compose/)  
docker compose files for local environment setup  

### [next-app](next-app/)  
nextJS project with an app router implementation.  
the stateful components with complicated logic are defined in the app router,  
while pure ui components are imported from the ui lib.  
in the app router, under /api/trpc, we have a trpc+prisma server implementation.  

### [iac](iac/)
IaC is done using cdk and serverless framework,  
you need AWS permissions to deploy resources and stages.  

### [docs](docs/)  
provides guides, procedures and ADRs  


## tech stack

* NextJS
* tRPC
* prisma
* PostgreSQL
* styled-components
* zustand
* nx monorepo


## Important Links

[kanban board](https://example.com)  
[figma design](https://www.figma.com/file/example/proj?type=design&node-id=382-2&mode=design)  
[product requirements](https://docs.google.com/document/d/example/edit)  
[daily meetup link](https://meet.google.com/example)  
[daily calendar invite](https://calendar.app.google/example)  
[dev channel](https://discord.gg/example)  

------------------------



## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.



## Build for production

Run `npx nx build next-app` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
