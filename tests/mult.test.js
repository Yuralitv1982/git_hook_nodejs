const mult = require('../src/mult');
// import mult from '../src/mult';

it('should be multiply numbers', () => {
   const result = mult(2, 5);

   expect(result).toBe(10);
});
