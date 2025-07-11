// SPACE DATA EXERCISE 4
// Return an array of Planets' names with gravity less than 10
// Return example: ['name1', 'name2', ... , 'nameN']

import { TAllData } from "../types";

export const getPlanetNamesWithLowGravity = (
  planets: TAllData["planets"]
): string[] => {
  return planets
    .filter((planet) => planet.gravity < 10)
    .map((planet) => planet.name);
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
