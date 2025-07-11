// SPACE DATA EXERCISE 6

import { TAllData } from "../types";

// Return an array with all asteroids discovered after a given year
export const getAsteroidsDiscoveredAfterYear = (
  asteroids: TAllData["asteroids"],
  year: number
): TAllData["asteroids"] => {
  return asteroids
    .filter((asteroid) => asteroid.discoveryYear > year)
    .map((asteroid) => asteroid);
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
