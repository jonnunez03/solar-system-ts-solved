export const minBy = <T>(
  array: T[],
  callback: (person: T) => string | number
): T | undefined => {
  if (array.length === 0) return;
  return array.reduce((minPerson, currentPerson) => {
    return callback(currentPerson) < callback(minPerson)
      ? currentPerson
      : minPerson;
  });
};

export const maxBy = <T>(
  array: T[],
  callback: (person: T) => string | number
): T | undefined => {
  if (array.length === 0) return;
  return array.reduce((maxPerson, currentPerson) => {
    return callback(currentPerson) > callback(maxPerson)
      ? currentPerson
      : maxPerson;
  });
};
