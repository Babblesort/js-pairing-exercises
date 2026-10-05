# js-pairing-exercises

This is a JavaScript learning project focused on working through pairing exercises. The application provides a mock API with data about fictional ship captains and their vessels, and includes exercises that require reading from the API and implementing functions to sort, transform, and merge the data to meet test specifications.

The project includes a mock API server (`json-server` pointing to `api/db.json`) and a test suite using Jest. Exercises are focused on implementing helper functions in `captains-service.js` that fetch and process data from the API endpoints.

## Project structure

- `src/apiClient.js`: Thin wrapper around axios configured to connect to the mock API
- `src/apiClient.test.js`: Tests verifying the API client and endpoints are working
- `src/captains-service.js`: Service module containing helper functions to be implemented
- `src/captains-service.test.js`: Test suite for the service functions (some tests are skipped by default)
- `api/db.json`: Mock API database containing captains and ships data

## Documentation

- [Coding standards](coding-standards.md): The conventions the code follows
- [Architecture decisions](architecture-decisions.md): How the application is built
- [Known issues](known-issues.md): Known problems, limitations, and skipped tests
