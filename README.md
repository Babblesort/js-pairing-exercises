# js-pairing-exercises

Javascript pairing exercises

This repo provides an easy to use starting point for working through some Javascript pairing exercises. The repo includes a set of tests that require implementation work to get passing. The excercises are focused on reading from a provided mock api and then sorting, transforming, and merging the data to meet the test expectations.

A working mock api, `apiClient.js`, is provided for use. The client thinly wraps axios to provide asynchronous promise-based access to the mock api content.

# Getting Started

- Start the mock api

  - `npm run api`

- Start the tests

  - `npm test`
  - Jest is the testing framework and runner. Jest is started in watch mode so it will rerun tests automatically when project files are saved.
  - The `apiClient.test.js` tests are complete and exist only to verify that the mock api is running and correctly configured. The mock api client must be running to support the `apiHelpers.js` functions

- Complete the helper implementations
  - `apiHelpers.js` should be updated with helper method implementations to get the tests found in `apiHelpers.test.js` to pass.
  - To reduce the amount of alarming red logging on the first run all but the first of the `apiHelpers.test.js` tests are skipped. Remove the `x` from an `xtest` test definition to stop skipping that test.
