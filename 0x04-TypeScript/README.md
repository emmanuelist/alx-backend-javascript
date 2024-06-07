# 0x04. TypeScript

## Table of Contents
- [0x04. TypeScript](#0x04-typescript)
  - [Table of Contents](#table-of-contents)
  - [Curriculum](#curriculum)
  - [Resources](#resources)
  - [Learning Objectives](#learning-objectives)
  - [Requirements](#requirements)
  - [Tasks](#tasks)
    - [Task 0: Creating an Interface for a Student](#task-0-creating-an-interface-for-a-student)
    - [Task 1: Let's Build a Teacher Interface](#task-1-lets-build-a-teacher-interface)
    - [Task 2: Extending the Teacher Class](#task-2-extending-the-teacher-class)
    - [Task 3: Printing Teachers](#task-3-printing-teachers)
    - [Task 4: Writing a Class](#task-4-writing-a-class)
    - [Task 5: Advanced Types Part 1](#task-5-advanced-types-part-1)
    - [Task 6: Creating Functions Specific to Employees](#task-6-creating-functions-specific-to-employees)
    - [Task 7: String Literal Types](#task-7-string-literal-types)
    - [Task 8: Ambient Namespaces](#task-8-ambient-namespaces)
    - [Task 9: Namespace \& Declaration Merging](#task-9-namespace--declaration-merging)
    - [Task 10: Update task\_4/js/main.ts](#task-10-update-task_4jsmaints)
    - [Task 11: Brand Convention \& Nominal Typing](#task-11-brand-convention--nominal-typing)
  - [Repository](#repository)

## Curriculum

This project aims to enhance your understanding of TypeScript, covering topics such as basic types, interfaces, classes, functions, and working with the DOM. The project also delves into advanced concepts like generic types, namespaces, and nominal typing.

**Average Completion:** 39.93%

**Specialization:** TypeScript

**Weight:** 1

**Project Deadline:** June 8, 2024, 6:00 AM

**Manual QA Review:** Required upon completion

## Resources

Read or watch:
- [TypeScript in 5 Minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Learning Objectives

By the end of this project, you should be able to explain the following concepts without external resources:
- Basic types in TypeScript
- Interfaces, Classes, and Functions
- Working with the DOM and TypeScript
- Generic types
- Using namespaces
- Merging declarations
- Using an ambient namespace to import an external library
- Basic nominal typing with TypeScript

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- All files will be transpiled on Ubuntu 18.04
- TypeScript scripts will be checked with `jest` (version 24.9.*)
- A `README.md` file at the root of the project folder is mandatory
- Code should use the `.ts` extension when possible
- The TypeScript compiler should not show any warnings or errors when compiling your code

## Tasks

### Task 0: Creating an Interface for a Student

Create an interface named `Student` with the following properties:
- `firstName`: string
- `lastName`: string
- `age`: number
- `location`: string

Create two student objects and an array `studentsList` containing these objects. Using vanilla JavaScript, render a table displaying the first name and location of each student.

### Task 1: Let's Build a Teacher Interface

Create an interface named `Teacher` with the following properties:
- `firstName`: string
- `lastName`: string
- `fullTimeEmployee`: boolean
- `yearsOfExperience` (optional): number
- `location`: string
- Any additional properties

### Task 2: Extending the Teacher Class

Create an interface named `Directors` that extends `Teacher` and adds a `numberOfReports` property.

### Task 3: Printing Teachers

Write a function `printTeacher` that accepts `firstName` and `lastName` and returns the first letter of the first name and the full last name (e.g., `J. Doe`).

### Task 4: Writing a Class

Create a `StudentClass` with:
- A constructor that accepts `firstName` and `lastName`
- A method `workOnHomework` that returns the string `Currently working`
- A method `displayName` that returns the `firstName`

### Task 5: Advanced Types Part 1

Create interfaces `DirectorInterface` and `TeacherInterface` with methods `workFromHome`, `getCoffeeBreak`, and `workDirectorTasks` or `workTeacherTasks`, respectively. Implement these interfaces in `Director` and `Teacher` classes.

Create a function `createEmployee` that returns either a `Director` or `Teacher` based on the provided salary.

### Task 6: Creating Functions Specific to Employees

Write a type predicate function `isDirector` and a function `executeWork` that calls the appropriate method based on the employee type.

### Task 7: String Literal Types

Create a string literal type `Subjects` allowing values `Math` or `History`. Write a function `teachClass` that returns `Teaching Math` or `Teaching History` based on the input.

### Task 8: Ambient Namespaces

Create an interface file and type declarations for a `crud.js` library. Write TypeScript code to insert, update, and delete rows in a simulated database.

### Task 9: Namespace & Declaration Merging

Use namespaces and declaration merging to extend interfaces and implement classes for `Cpp`, `React`, and `Java` subjects.

### Task 10: Update task_4/js/main.ts

Export constants for `Cpp`, `Java`, and `React` subjects. Create a `Teacher` object with experience in C++ and log the requirements and available teachers for each subject.

### Task 11: Brand Convention & Nominal Typing

Create `MajorCredits` and `MinorCredits` interfaces with a `credits` property and a unique `brand` identifier. Write functions `sumMajorCredits` and `sumMinorCredits` that sum the credits of two subjects.

## Repository

**GitHub repository:** [alx-backend-javascript](https://github.com/emmanuelist/alx-backend-javascript)

- **Directory:** `0x04-TypeScript`
- **Files:** 
  - `task_0/js/main.ts`
  - `task_0/package.json`
  - `task_0/.eslintrc.js`
  - `task_0/tsconfig.json`
  - `task_0/webpack.config.js`
  - `task_1/js/main.ts`
  - `task_1/webpack.config.js`
  - `task_1/tsconfig.json`
  - `task_1/package.json`
  - `task_2/js/main.ts`
  - `task_2/webpack.config.js`
  - `task_2/tsconfig.json`
  - `task_2/package.json`
  - `task_3/js/main.ts`
  - `task_3/js/interface.ts`
  - `task_3/js/crud.d.ts`
  - `task_4/package.json`
  - `task_4/tsconfig.json`
  - `task_4/js/subjects/Cpp.ts`
  - `task_4/js/subjects/Java.ts`
  - `task_4/js/subjects/React.ts`
  - `task_4/js/subjects/Subject.ts`
  - `task_4/js/subjects/Teacher.ts`
  - `task_4/js/main.ts`
  - `task_5/js/main.ts`
  - `task_5/package.json`
  - `task_5/webpack.config.js`
  - `task_5/tsconfig.json`
