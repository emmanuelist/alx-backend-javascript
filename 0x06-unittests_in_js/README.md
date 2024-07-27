# 0x06. Unit Tests in JavaScript

## Description
This project involves learning and implementing unit tests for JavaScript applications using Mocha, Chai, and Sinon. The focus is on understanding how to create and organize test suites, use different assertion libraries, and apply techniques like spies, stubs, hooks, and integration testing.

## Learning Objectives
By the end of this project, you should be able to:

1. **Mocha Test Suite**: Write and run tests using Mocha.
2. **Assertion Libraries**: Use Node's assert library and Chai for writing assertions.
3. **Test Suite Organization**: Organize tests using `describe` and `it` blocks.
4. **Spies**: Understand and implement spies to monitor function calls.
5. **Stubs**: Use stubs to control and test edge cases and function outputs.
6. **Hooks**: Utilize hooks (`before`, `after`, `beforeEach`, `afterEach`) for setup and teardown operations.
7. **Async Tests**: Write tests for asynchronous functions.
8. **Integration Tests**: Perform integration testing for Node.js applications, particularly with Express.

## Requirements
- All code will be executed on Ubuntu 18.04 using Node 12.x.x.
- Editors allowed: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- Include a `README.md` file at the root of the project.
- Use the `.js` file extension.
- Ensure all tests pass without warnings or errors using the command `npm test *.test.js`.

## Tasks

### 0. Basic test with Mocha and Node assertion library
- **File:** `0-calcul.js`
- **Task:** Create a function `calculateNumber(a, b)` that rounds `a` and `b` and returns their sum.
- **Test File:** `0-calcul.test.js`
- **Requirements:** Use `assert` for testing.

### 1. Combining descriptions
- **File:** `1-calcul.js`
- **Task:** Extend the previous function with a `type` parameter (`SUM`, `SUBTRACT`, `DIVIDE`).
- **Test File:** `1-calcul.test.js`
- **Requirements:** Use `assert` and organize tests with `describe`.

### 2. Basic test using Chai assertion library
- **Files:** `2-calcul_chai.js`, `2-calcul_chai.test.js`
- **Task:** Use Chai's `expect` syntax for tests.
- **Requirements:** Ensure readability and maintainability.

### 3. Spies
- **Files:** `utils.js`, `3-payment.js`, `3-payment.test.js`
- **Task:** Use Sinon spies to monitor function calls.
- **Requirements:** Verify the usage of `Utils.calculateNumber`.

### 4. Stubs
- **Files:** `4-payment.js`, `4-payment.test.js`
- **Task:** Use Sinon stubs to replace `Utils.calculateNumber` with a fixed return value.
- **Requirements:** Ensure tests are efficient and isolated.

### 5. Hooks
- **Files:** `5-payment.js`, `5-payment.test.js`
- **Task:** Use `beforeEach` and `afterEach` hooks to set up and tear down tests.
- **Requirements:** Verify console output and function calls.

### 6. Async tests with done
- **Files:** `6-payment_token.js`, `6-payment_token.test.js`
- **Task:** Test asynchronous functions using the `done` callback.
- **Requirements:** Ensure proper handling of async operations.

### 7. Skip
- **File:** `7-skip.test.js`
- **Task:** Use Mocha's `skip` feature to temporarily ignore tests.
- **Requirements:** Ensure the test suite passes by skipping failing tests.

### 8. Basic Integration testing
- **Directory:** `8-api`
- **Files:** `api.js`, `api.test.js`
- **Task:** Set up an Express server and test API endpoints.
- **Requirements:** Test HTTP status codes and response messages.

### 9. Regex integration testing
- **Directory:** `9-api`
- **Files:** `api.js`, `api.test.js`
- **Task:** Implement and test a route with parameter validation.
- **Requirements:** Ensure proper handling of valid and invalid inputs.

### 10. Deep equality & Post integration testing
- **Directory:** `10-api`
- **Files:** `api.js`, `api.test.js`
- **Task:** Add endpoints for `/available_payments` and `/login`.
- **Requirements:** Test object responses and POST requests.

## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/alx-backend-javascript.git
   cd 0x06-unittests_in_js
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run tests:**
   ```bash
   npm test
   ```

## Author
- **Your Name** - [GitHub](https://github.com/emmanuelist)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- ALX Software Engineering program for the project prompt.
- Mocha, Chai, Sinon, and Express documentation for guidance and resources.