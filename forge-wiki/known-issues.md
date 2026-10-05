# Known issues

## Skipped tests

The following tests are intentionally skipped in `src/captains-service.test.js` to reduce initial noise when first running the test suite:

- `captain first names` (line 11, marked `xtest`): Tests extraction of first names from captains
- `captain first names sorted alphabetically` (line 17, marked `xtest`): Tests sorting first names alphabetically
- `captain combined total age` (line 23, marked `xtest`): Tests summing captain ages
- `captain and ship combined for given captain id` (line 28, marked `xtest`): Tests joining captain data with ship data
- `Captains sorted by ship size` (line 35, marked `xtest`): Tests sorting captains by their ship crew count

To enable these tests during development, remove the `x` prefix from `xtest` to convert to `test`.

## Incomplete implementations

The following functions in `src/captains-service.js` are not yet implemented:

- `getCaptains()` (line 3): Currently returns `null`; should fetch and return captains from the API

Stub exports for unimplemented exercise functions (`firstNames`, `firstNamesSorted`, `totalAge`, `captainBio`, `captainsWithShipNamesBySize`, `captainsByPropulsion`) are expected to be added alongside their corresponding `xtest` blocks.

No TODO or FIXME comments are present in the source code.

## Notable limits

The mock API is static and serves only the four captains and four ships defined in `api/db.json`. The API must be running separately (via `npm run api`) for tests to pass; the test suite does not start it automatically.

`npm run api` starts `json-server` in watch/server mode and never exits on its own — running it directly in a CI step will time out. Use a background process or a separate terminal.
