// SPACE DATA EXERCISE 6

import { TAsteroid } from "../types";

// Return an array with all asteroids discovered after a given year
export const getAsteroidsDiscoveredAfterYear = (
  asteroids: TAsteroid[],
  year: number
) => {
  return asteroids.reduce((acc: TAsteroid[], asteroid) => {
    if (asteroid.discoveryYear > year) {
      return [...acc, asteroid];
    }
    return acc;
  }, []);
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
