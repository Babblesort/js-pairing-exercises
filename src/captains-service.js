import apiClient from './apiClient';

export const getCaptains = () => null;

export const captainsWithinAgeRangeWithShipStats = async (minAge, maxAge) => {
  // Fetch all captains and ships
  const captainsResponse = await apiClient.get('/captains');
  const shipsResponse = await apiClient.get('/ships');
  
  const captains = captainsResponse.data;
  const ships = shipsResponse.data;
  
  // Create a map of ships by id for quick lookup
  const shipMap = ships.reduce((acc, ship) => {
    acc[ship.id] = ship;
    return acc;
  }, {});
  
  // Filter captains by age range and join with ship data
  const filteredCaptains = captains
    .filter(captain => captain.age >= minAge && captain.age <= maxAge)
    .map(captain => {
      const ship = shipMap[captain.ship];
      return {
        id: captain.id,
        first: captain.first,
        last: captain.last,
        age: captain.age,
        shipName: ship.name,
        crewCount: ship.crewCount
      };
    });
  
  // Calculate statistics
  const totalCrewCount = filteredCaptains.reduce((sum, captain) => sum + captain.crewCount, 0);
  const averageCrewCount = Math.round(totalCrewCount / filteredCaptains.length);
  
  return {
    captains: filteredCaptains,
    averageCrewCount,
    totalCrewCount
  };
};
