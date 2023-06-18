import { deepmerge } from './deepmerge';

describe('deepmerge', () => {
  it('same array length merge should work', (done) => {
    const source = {
      fruits: [{ name: 'apple' }, { name: 'orange' }],
    };

    const target = {
      fruits: [{ amount: 1 }, { amount: 2 }],
    };

    const merged = {
      fruits: [
        {
          name: 'apple',
          amount: 1,
        },
        {
          name: 'orange',
          amount: 2,
        },
      ],
    };
    const result = deepmerge(source, target);
    expect(result).toEqual(merged);
    done();
  });

  it('different array length merge should work', (done) => {
    const source = {
      fruits: [
        { name: 'apple', amount: 1 },
        { name: 'orange', amount: 2 },
      ],
    };

    const target = {
      fruits: [],
    };

    const merged = {
      fruits: [
        {
          name: 'apple',
          amount: 1,
        },
        {
          name: 'orange',
          amount: 2,
        },
      ],
    };
    const result = deepmerge(source, target);
    expect(result).toEqual(merged);
    done();
  });

  it('different structure merge should work', (done) => {
    const source = {
      fruits: [null, { name: 'orange', amount: 2 }],
    };

    const target = {
      fruits: [{ name: 'apple', amount: 1 }],
      vegetables: ['carrot', 'potato'],
    };

    const merged = {
      fruits: [
        {
          name: 'apple',
          amount: 1,
        },
        {
          name: 'orange',
          amount: 2,
        },
      ],
      vegetables: ['carrot', 'potato'],
    };
    const result = deepmerge(source, target);
    expect(result).toEqual(merged);
    done();
  });
});
