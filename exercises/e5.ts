// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']
// Note: This input should be destructured from the function parameter
import { TAllData } from "../types";
export const getPlanetNamesWithMassValue = ({
  planets,
  greaterThanOrEqualTo,
}: {
  planets: TAllData["planets"];
  greaterThanOrEqualTo: number;
}): string[] => {
  if (greaterThanOrEqualTo < 1 || greaterThanOrEqualTo > 7) return [];
  return planets
    .filter((planet) => planet.mass.massValue >= greaterThanOrEqualTo)
    .map((planet) => planet.name);
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
