import { c as createSprinkles$1 } from '../../dist/createSprinkles-c150330f.esm.js';

var composeStyles = classList => classList;

var createSprinkles = function createSprinkles() {
  return createSprinkles$1(composeStyles)(...arguments);
};
/** @deprecated - Use `createSprinkles` */

var createAtomsFn = createSprinkles;

export { createAtomsFn, createSprinkles };
