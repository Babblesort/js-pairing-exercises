# Architecture decisions

## Components and communication

The application follows a simple three-layer architecture:

### API Layer (`src/apiClient.js`)

- Thin wrapper around **Axios** HTTP client
- Configured with base URL `http://localhost:4000` pointing to the local mock API server
- Provides the single integration point for all API communication
- Exports the Axios instance for use by service modules

### Service Layer (`src/captains-service.js`)

- Contains business logic functions that consume the API client
- Responsible for data transformation, filtering, sorting, and merging operations
- Functions are exported for use in applications and tests
- Example functions to be implemented: `getCaptains()`, `firstNames()`, `totalAge()`, `captainBio()`, `captainsWithShipNamesBySize()`

### Test Layer

- `apiClient.test.js`: Verifies API connectivity and endpoint availability
- `captains-service.test.js`: Tests service layer functions with expected outputs

## Data stores

### Mock API Database (`api/db.json`)

The application uses a JSON database served by **json-server** containing two collections:

- **captains**: Array of captain objects with fields `id`, `first`, `last`, `age`, `ship` (ship ID reference)
- **ships**: Array of ship objects with fields `id`, `name`, `crewCount`, `propulsion`

The mock API runs on port 4000 and provides REST endpoints (`/captains`, `/ships`) for data access. The database is static for the scope of this project.

## Hosting and deployment

No production hosting configuration is present. The project is structured as a development and learning tool:

- The mock API server runs locally during development via `npm run api`
- Tests run locally via `npm test` and in watch mode for rapid feedback
- No Docker, CI/CD, or cloud deployment configuration is configured in the repository

## Notable libraries and rationale

### Production dependencies

- **axios** (v1.20.0): HTTP client for making API requests. Chosen for promise-based async handling and simplicity of use.
- **json-server** (v1.0.0-beta.15): Mock REST API server. Used to simulate a backend API without building real infrastructure, allowing focus on client-side data manipulation exercises.

### Development dependencies

- **Jest** (v30.4.2): Test runner and assertion library. Industry standard for JavaScript testing with built-in watch mode and excellent reporting.
- **Babel** (@babel/preset-env): Transpiler to ensure modern JavaScript syntax works across Node versions. Configured for the current Node version to enable ES6+ features.
- **ESLint** (v8.57.1): Linter ensuring code quality and consistency. Configured with Airbnb style guide as the base.
- **Prettier** (v3.8.3): Code formatter. Combined with ESLint to separate style concerns from code quality rules.
- **jest-watch-typeahead**: Plugin adding interactive filtering to Jest watch mode for faster development iteration.

No explicit rationale for library choices is documented in the repository beyond the defaults; the selections reflect JavaScript/Node ecosystem conventions and best practices.
