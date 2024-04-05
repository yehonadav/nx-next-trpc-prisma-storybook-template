# Coding Style

Code style should follow the project’s eslint configuration.

Make sure your code is linted before pushing it.

You can also build your project locally to ensure it will pass in the CI’s lint & build stage.

- This is an ongoing process, there’s a lot of broken conventions of old code, but its no excuse not to write new code the way we can love to own it. Please feel free to add more standards here.

### Naming Conventions

- We use a camelCase style for variables, and functions.
- We use PascalCase for classes, jsx components, types and interfaces.
- We use SNAKE_UPPERCASE for constants

You can find more info on the case types we use and why here:

[JavaScript Naming Conventions](https://www.robinwieruch.de/javascript-naming-conventions/)

When naming, we must use **self-descriptive** names.

It shouldn't be necessary to add a comment for additional documentation.

### Naming best practices

[Naming Things in Code](https://m.youtube.com/watch?v=-J3wNP6u5YU)

### Naming a function that is exported

we must also describe what its responsible for.

For example:

A service layer function would also describe its a service:

`export const createOrderService = () ⇒ {};`

Another example is a Rest API calling function, it should include its method type so that the caller knows its an api request:

postNewOrderApi is a good example for a Rest POST api function.

createOrder is a bad example for the same case. as you would have to dive in to the function code to realize its a rest api call.

- Functions should describe their responsibility and what they are doing
- Input parameters types should describe the function they are meant for, and the usecase of the parameters, example: params: PostNewOrderApiRequest
- Functions return types should describe the function they are meant for, and the usecase of the returned object, example: response: PostNewOrderApiResponse

### Exporting conventions

- Follow eslint exporting convention
- Don’t export something thats only meant to be used in the scope of its own file
- You can use inline exports to write less code
- Don’t do both inline and eof exports in the same file, choose one way and stick with it.
- Avoid default exports at all costs! We want 1 way to export, 1 way to import. More on that here:

[Avoid ES6 default exports](https://rajeshnaroth.medium.com/avoid-es6-default-exports-a24142978a7a)

And here:

[Avoid Export Default](https://basarat.gitbook.io/typescript/main-1/defaultisbad)

If you have a file with only 1 export, do the following workaround to avoid eslint issues:

export const example = 42;

export default {}

### Research material

[iTwin.js TypeScript Coding Guidelines - iTwin.js](https://www.itwinjs.org/learning/guidelines/typescript-coding-guidelines/)

[Best practices for Typescript coding](https://medium.com/@eshagarg1996/best-practices-for-typescript-coding-8b1ea98d02f8)

[Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)

[TypeScript Coding Style Guide?](https://stackoverflow.com/questions/31990608/typescript-coding-style-guide)
