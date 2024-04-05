# ui

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test ui` to execute the unit tests via [Jest](https://jestjs.io).

## storybook

created using the following steps:  
`nx add @nx/storybook`  
`nx g @nx/storybook:configuration ui`
choose @storybook/nextjs framework  

to auto generate stories:  
```bash
cd ..
nx g @nx/react:storybook-configuration ui
```

### run storybook local

```bash
cd ..
nx storybook ui
```  
