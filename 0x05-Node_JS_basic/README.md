This project covers the basics of Node.js and Express.js, with a focus on building a small HTTP server. Below is a step-by-step guide to help you complete each task.

### Task 0: Executing basic JavaScript with Node.js

1. Create a file named `0-console.js`.
2. Define a function named `displayMessage` that takes a string argument and prints it to the standard output.
3. Export the function using `module.exports`.

**0-console.js**

```javascript
function displayMessage(message) {
  console.log(message);
}

module.exports = displayMessage;
```

### Task 1: Using Process stdin

1. Create a file named `1-stdin.js`.
2. Write a program that prompts the user for their name, reads the input, and prints a greeting message.

**1-stdin.js**

```javascript
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data.toString().trim()}\n`);
  process.stdout.write('This important software is now closing\n');
  process.stdin.end();
});
```

### Task 2: Reading a file synchronously with Node.js

1. Create a file named `2-read_file.js`.
2. Define a function `countStudents` that reads a CSV file and logs the number of students and their names grouped by field.

**2-read_file.js**

```javascript
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line);
    const students = lines.slice(1);
    const fields = {};

    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    console.log(`Number of students: ${students.length}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', '
        )}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
```

### Task 3: Reading a file asynchronously with Node.js

1. Create a file named `3-read_file_async.js`.
2. Define a function `countStudents` that reads a CSV file asynchronously and returns a Promise.

**3-read_file_async.js**

```javascript
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line);
    const students = lines.slice(1);
    const fields = {};

    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    console.log(`Number of students: ${students.length}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', '
        )}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
```

### Task 4: Create a small HTTP server using Node's HTTP module

1. Create a file named `4-http.js`.
2. Create an HTTP server that responds with "Hello Holberton School!" to any request.

**4-http.js**

```javascript
const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
```

### Task 5: Create a more complex HTTP server using Node's HTTP module

1. Create a file named `5-http.js`.
2. Extend the server to handle the `/students` route and respond with student data.

**5-http.js**

```javascript
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      await countStudents('database.csv');
    } catch (error) {
      res.write(error.message);
    }
    res.end();
  }
});

app.listen(1245);

module.exports = app;
```

### Task 6: Create a small HTTP server using Express

1. Create a file named `6-http_express.js`.
2. Create an Express server that responds with "Hello Holberton School!" to the root endpoint.

**6-http_express.js**

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
```

### Task 7: Create a more complex HTTP server using Express

1. Create a file named `7-http_express.js`.
2. Extend the server to handle the `/students` route and respond with student data.

**7-http_express.js**

```javascript
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    await countStudents('database.csv');
  } catch (error) {
    res.write(error.message);
  }
  res.end();
});

app.listen(1245);

module.exports = app;
```

### Task 8: Organize a complex HTTP server using Express

1. Create the necessary directories and files as specified.
2. Implement the utilities, controllers, routes, and server setup according to the instructions.

**full_server/utils.js**

```javascript
const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter((line) => line);
    const fields = {};

    lines.slice(1).forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
```

**full_server/controllers/AppController.js**

```javascript
class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
```

**full_server/controllers/StudentsController.js**

```javascript
const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase(process.argv[2]);
      res.status(200).write('This is the list of our students\n');
      for (const [field, names] of Object.entries(fields)) {
        res.write(
          `Number of students in ${field}: ${names.length}. List: ${names.join(
            ', '
          )}\n`
        );
      }
      res.end();
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(process.argv[2]);
      res.status(200).send(`List: ${fields[major].join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
```

**full_server/routes/index.js**

```javascript
const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
```

**full_server/server.js**

```javascript
const express = require('express');
const router = require('./routes/index');

const app = express();
app.use('/', router);

app.listen(1245);

module.exports = app;
```

**.babelrc**

```json
{
  "presets": ["@babel/preset-env"]
}
```

**package.json (update the dev script)**

```json
{
  "scripts": {
    "dev": "nodemon --exec babel-node --presets @babel/preset-env ./full_server/server.js ./database.csv"
  }
}
```
