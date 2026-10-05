# js-pairing-exercises

A JavaScript pairing exercise repo. It provides a mock JSON API (served by `json-server`) and a set of progressively-complex Jest tests that the learner must make pass by implementing helper functions.

## Repository layout

```
.
├── api/
│   └── db.json               # Mock data: 4 captains + 4 ships
├── src/
│   ├── apiClient.js          # Thin axios wrapper; baseURL = http://localhost:4000
│   ├── apiClient.test.js     # Fully active — verifies the API client config and both endpoints
│   ├── captains-service.js   # Stub service file (only getCaptains stub exists)
│   └── captains-service.test.js  # Progressive test suite (see below)
├── package.json              # Jest + json-server + axios
└── .babelrc                  # @babel/preset-env targeting current Node
```

## Mock API data

**Captains** (`/captains`): Jack Sparrow (age 48, ship BC13V), Malcolm Reynolds (age 34, ship V7B8T), Jean Luc Picard (age 64, ship DRPHT), Han Solo (age 33, ship 1M6GB).

**Ships** (`/ships`): USS Enterprise NCC-1701-D (DRPHT, 1012 crew, Warp Drive), Black Pearl (BC13V, 44 crew, Wind), Millenium Falcon (1M6GB, 2 crew, Hyperdrive), Serenity (V7B8T, 5 crew, Radion/Accelerator Core).

## Test complexity ramp (`captains-service.test.js`)

| # | Status | Function | Skill introduced |
|---|--------|----------|-----------------|
| 1 | active | `getCaptains()` | Raw GET from one endpoint |
| 2 | xtest  | `firstNames()` | Array map |
| 3 | xtest  | `firstNamesSorted()` | Map + sort |
| 4 | xtest  | `totalAge()` | Map + reduce |
| 5 | xtest  | `captainBio(id)` | Cross-join two endpoints for one record |
| 6 | xtest  | `captainsWithShipNamesBySize()` | Cross-join all records + sort by derived field (crewCount) |

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run api` | Start mock API on port 4000 |
| `npm test` | Run Jest in watch mode |
| `npm run api:stop` | Kill the mock API server |

## Coding conventions

- ES modules (`import`/`export`) transpiled by Babel.
- Jest test framework; tests named `test`/`xtest` (no `describe` blocks).
- ESLint with `airbnb` + `prettier` config.
