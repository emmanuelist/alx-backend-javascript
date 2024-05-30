# ALX Backend JavaScript: ES6 Basics

![ALX Logo](https://github.com/emmanuelist/rhythmifind/assets/72014364/205338c7-02b2-4fff-b14e-c2b9c7ff7be6)

## Table of Contents
- [Introduction](#introduction)
- [Concepts](#concepts)
- [Resources](#resources)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Setup](#setup)
- [Tasks](#tasks)

## Introduction
This project covers the basics of ECMAScript 6 (ES6), the modern standard for JavaScript. It focuses on various new features introduced in ES6 and how they improve the language and coding practices.

## Concepts
For this project, you should familiarize yourself with the following concepts:
- JavaScript Programming
- Software Linter

## Resources
Read or watch:
- [ECMAScript 6 - ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/)
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [JavaScript ES6 — Iterables and Iterators](https://dev.to/paulasantamaria/javascript-es6-iterables-and-iterators-1ldk)

## Learning Objectives
By the end of this project, you should be able to explain:
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and default function parameters
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements
### General
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A `README.md` file at the root of the project is mandatory
- Your code should use the `.js` extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint with specific rules provided
- All of your functions must be exported

## Setup
1. **Install NodeJS 12.11.x**:
    ```sh
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    nodejs -v
    # v12.11.1
    npm -v
    # 6.11.3
    ```

2. **Install Jest, Babel, and ESLint**:
    - In your project directory, use the supplied `package.json` and run `npm install`.

3. **Add Configuration Files**:
    - `babel.config.js`
    - `.eslintrc.js`

    Content for `.eslintrc.js`:
    ```js
    module.exports = {
      env: {
        browser: false,
        es6: true,
        jest: true,
      },
      extends: [
        'airbnb-base',
        'plugin:jest/all',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['jest'],
      rules: {
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
      },
      overrides:[
        {
          files: ['*.js'],
          excludedFiles: 'babel.config.js',
        }
      ]
    };
    ```

4. **Run npm install**:
    ```sh
    npm install
    ```

## Tasks
### 0. Const or let?
Refactor the given functions to use `const` and `let` appropriately.

```js
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
```

### 1. Block Scope
Modify the variables inside the function `taskBlock` to use block-scoped variables.

```js
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
```

### 2. Arrow Functions
Rewrite the function to use ES6 arrow syntax.

```js
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
```

### 3. Parameter Defaults
Condense the function using default parameters.

```js
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
```

### 4. Rest Parameter Syntax for Functions
Modify the function to return the number of arguments passed using the rest parameter syntax.

```js
export default function returnHowManyArguments(...args) {
  return args.length;
}
```

### 5. The Wonders of Spread Syntax
Concatenate two arrays and a string using the spread syntax.

```js
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
```

### 6. Take Advantage of Template Literals
Rewrite the return statement to use a template literal.

```js
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
```

### 7. Object Property Value Shorthand Syntax
Simplify the object property syntax.

```js
export default function getBudgetObject(income, gdp, capita) {
  return { income, gdp, capita };
}
```

### 8. No Need to Create Empty Objects Before Adding Properties
Use ES6 computed property names.

```js
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = (new Date()).getFullYear();
  return {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };
}
```

### 9. ES6 Method Properties
Rewrite to use ES6 method properties.

```js
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  return {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
}
```

### 10. For...of Loops
Rewrite the function using the `for...of` loop.

```js
export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    const idx = array.indexOf(value);
    array[idx] = appendString + value;
  }
  return array;
}
```

### 11. Iterator
Create a function named `createEmployeesObject`.

```js
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}
```

### 12. Let's Create a Report Object
Create a function named `createReportObject`.

```js
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
```

### 13. Iterating Through Report Objects
Write a function named `createIteratorObject`.

```js
export default function createIteratorObject(report) {
  const employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }
  return employees;
}
```

### 14. Iterate Through Object
Write a function named `iterateThroughObject`.

```js
export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.join(' | ');
}
```

## Conclusion
