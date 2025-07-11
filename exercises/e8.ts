// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name

import { TPlanet, TAllData } from "../types";

//  must have destructured parameters
export const findPlanetByMoon = ({
  planets,
  moonName,
}: {
  planets: TAllData["planets"];
  moonName: string;
}): TPlanet | undefined => {
  const moonCapitalize =
    moonName.charAt(0).toLocaleUpperCase() + moonName.slice(1);
  return planets.find(
    (planet) =>
      Array.isArray(planet.moons) && planet.moons.includes(moonCapitalize)
  );
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
