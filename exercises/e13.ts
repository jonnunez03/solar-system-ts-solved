// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

import { TAllData } from "../types";

export const getAveragePlanetsTemperature = (data: TAllData): number => {
  return (
    data.planets
      .map((planet) => planet.avgTemp)
      .reduce((total, planetAve) => total + planetAve, 0) / data.planets.length
  );
};
// could add filter for edge case if planet temp didn't have typeof number but all data here has it

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
