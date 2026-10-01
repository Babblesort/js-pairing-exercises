import * as captainsService from './captains-service';

test('returns data from captains endpoint', async () => {
  const captains = await captainsService.getCaptains();
  const firstCaptain = {
    id: 'SQ2WI',
    first: 'Jack',
    last: 'Sparrow',
    age: 48,
    ship: 'BC13V'
  };

  expect(captains).toHaveLength(4);
  expect(captains[0]).toEqual(firstCaptain);
});

xtest('captain first names', async () => {
  const expectedNames = ['Jack', 'Malcolm', 'Jean Luc', 'Han'];
  const firstNames = await captainsService.firstNames();

  expect(firstNames).toEqual(expectedNames);
});

xtest('captain first names sorted alphabetically', async () => {
  const expectedNames = ['Han', 'Jack', 'Jean Luc', 'Malcolm'];
  const firstNamesSorted = await captainsService.firstNamesSorted();

  expect(firstNamesSorted).toEqual(expectedNames);
});

xtest('captain combined total age', async () => {
  const expectedTotalAge = 179;
  const totalAge = await captainsService.totalAge();

  expect(totalAge).toEqual(expectedTotalAge);
});

xtest('captain and ship combined for given captain id', async () => {
  const expectedData = {
    id: 'R6TZN',
    firstName: 'Malcolm',
    lastName: 'Reynolds',
    shipId: 'V7B8T',
    shipName: 'Serenity'
  };
  const captainShipData = await captainsService.captainBio('R6TZN');

  expect(captainShipData).toEqual(expectedData);
});

xtest('Captains sorted by ship size', async () => {
  const expectedData = [
    {
      id: 'KZUC8',
      first: 'Han',
      last: 'Solo',
      age: 33,
      ship: 'Millenium Falcon'
    },
    {
      id: 'R6TZN',
      first: 'Malcolm',
      last: 'Reynolds',
      age: 34,
      ship: 'Serenity'
    },
    {
      id: 'SQ2WI',
      first: 'Jack',
      last: 'Sparrow',
      age: 48,
      ship: 'Black Pearl'
    },
    {
      id: 'UXWPK',
      first: 'Jean Luc',
      last: 'Picard',
      age: 64,
      ship: 'USS Enterprise NCC-1701-D'
    }
  ];
  const captainsWithShipNamesBySize = await captainsService.captainsWithShipNamesBySize();

  expect(captainsWithShipNamesBySize).toEqual(expectedData);
});

xtest('captains within age range with ship statistics', async () => {
  const expectedData = {
    captains: [
      {
        id: 'KZUC8',
        first: 'Han',
        last: 'Solo',
        age: 33,
        shipName: 'Millenium Falcon',
        crewCount: 2
      },
      {
        id: 'R6TZN',
        first: 'Malcolm',
        last: 'Reynolds',
        age: 34,
        shipName: 'Serenity',
        crewCount: 5
      },
      {
        id: 'SQ2WI',
        first: 'Jack',
        last: 'Sparrow',
        age: 48,
        shipName: 'Black Pearl',
        crewCount: 44
      }
    ],
    averageCrewCount: 17,
    totalCrewCount: 51
  };
  const captainStats = await captainsService.captainsWithinAgeRangeWithShipStats(30, 50);

  expect(captainStats).toEqual(expectedData);
});
