const exercise1 = require('./exercise1');
const { uppercase } = exercise1;

describe('Test sitrin return in Uppercase', (done) => {
  it('Is felipe, return FELIPE', () => {
    uppercase('felipe', (str) => {
      expect(str).toBe('FELIPE');
      done();
    });
  });
});

