export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'input',
        name: 'cattegory',
        message: 'What is your component cattegory?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{lowerCase cattegory}}/{{lowerCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase cattegory}}/{{lowerCase name}}/{{lowerCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase cattegory}}/{{lowerCase name}}/{{lowerCase name}}.spec.tsx',
        templateFile: 'templates/spec.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase cattegory}}/{{lowerCase name}}/{{lowerCase name}}.stories.ts',
        templateFile: 'templates/stories.ts.hbs',
      },
      {

        type: 'add',
        path: '../src/components/{{lowerCase cattegory}}/{{lowerCase name}}/{{lowerCase name}}.mock.ts',
        templateFile: 'templates/mock.ts.hbs',
      },
    ],
  })
}
