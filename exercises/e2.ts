// SPACE DATA EXERCISE 2
// Return an array of all Asteroids' names
// Return example: ['name1', 'name2', ... , 'nameN']

import { TAllData } from "../types";

export const getAsteroidNames = (
  asteroids: TAllData["asteroids"]
): string[] => {
  return asteroids.map((asteroid) => asteroid.name);
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
