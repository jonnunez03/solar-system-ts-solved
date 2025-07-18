// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { TAllData, TAsteroid } from "../types";

export const getGreatestDiscoveryYear = (asteroids: TAsteroid[]) => {
  const yearsDiscoveredCount = new Map<number, number>();
  const yearsDiscovered: number[] = asteroids.map(
    (asteroid) => asteroid.discoveryYear
  );
  yearsDiscovered.forEach((discoveryYear) => {
    const currentCount = yearsDiscoveredCount.get(discoveryYear) ?? 0;
    yearsDiscoveredCount.set(discoveryYear, currentCount + 1);
  });
  let maxCount = 0;
  let maxYear = 0;
  for (const [year, count] of yearsDiscoveredCount.entries()) {
    if (count > maxCount) {
      maxCount = count;
      maxYear = year;
    }
  }
  return maxYear;
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
