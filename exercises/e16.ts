// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export const find = <T>(
  array: T[],
  callback: (element: T) => boolean
): T | undefined => {
  for (const element of array) {
    if (callback(element)) {
      return element;
    }
  }
  return undefined;
};
