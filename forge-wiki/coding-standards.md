# Coding standards

## Languages and tooling

The project is written in JavaScript and uses the following tools:

- **Node.js**: Runtime environment (configured for current Node version in `.babelrc`)
- **Babel**: JavaScript transpilation with `@babel/preset-env` (see `.babelrc`)
- **Jest**: Testing framework and runner
- **ESLint**: Code linting (see `.eslintrc.json`)
- **Prettier**: Code formatting (see `.prettierrc`)

## Formatting and linting

### ESLint configuration (`.eslintrc.json`)

- Extends `airbnb` and `prettier` configurations
- Includes `jest` plugin for testing best practices
- Disabled rules: `no-console`, `no-unused-vars`, `import/prefer-default-export`, `linebreak-style`
- Jest-specific rules: no disabled tests allowed in CI, focused tests not allowed, duplicate test titles are errors

### Prettier configuration (`.prettierrc`)

- Print width: 90 characters
- Single quotes: enabled
- Default spacing: 2 spaces (via `.editorconfig`)

### Editor configuration (`.editorconfig`)

- Indent: 2 spaces
- Charset: UTF-8

### VS Code settings (`.vscode/settings.json`)

- ESLint auto-fix on save enabled
- Format on save enabled
- ESLint code actions on save enabled

## Tests and commands

### Running tests

```bash
npm test
```

Runs Jest in watch mode with verbose output. Jest automatically reruns tests when project files are saved.

### Running the mock API

```bash
npm run api
```

Starts `json-server` on port 4000 serving data from `api/db.json`. The API must be running for tests to pass.

Stop the API with:

```bash
npm run api:stop
```

### Jest configuration (from `package.json`)

- Test environment: Node
- Watch plugins: `jest-watch-typeahead` for filtering by filename and test name
- Reporters: default reporter

### Test organization

- Complete tests in `apiClient.test.js` verify the mock API setup
- Exercise tests in `captains-service.test.js` have most tests skipped (prefixed with `x` in `xtest`) to reduce initial noise; tests must be unskipped by removing the `x` prefix

## Naming conventions

Observed from the codebase:

- **Files**: Kebab-case for source files (`apiClient.js`, `captains-service.js`)
- **Functions**: camelCase for function names (`getCaptains`, `firstNames`, `captainBio`)
- **Variables**: camelCase throughout
- **Test files**: Suffix with `.test.js`

## Project structure

```
.
├── src/                           # Main source code
│   ├── apiClient.js              # Axios HTTP client wrapper
│   ├── apiClient.test.js         # API client tests
│   ├── captains-service.js       # Service functions (to be implemented)
│   └── captains-service.test.js  # Service function tests
├── api/
│   └── db.json                   # Mock API database
├── .babelrc                      # Babel transpilation config
├── .eslintrc.json                # ESLint config
├── .prettierrc                   # Prettier formatting config
├── .editorconfig                 # Editor settings
├── package.json                  # Dependencies and scripts
└── .vscode/                      # VS Code editor settings
```
