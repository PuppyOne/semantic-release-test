const { add } = require('./index');

describe('index', () => {
    describe('add()', () => {
        const testParams = [
            { args: [1], expected: 1 },
            { args: [1, 1], expected: 2 },
            { args: [1, 1, 1], expected: 3 },
            { args: [1, 2], expected: 3 },
            { args: [-1, -1], expected: -2 },
            { args: [0, 0], expected: 0 },
            { args: [1, 2, 3, 4, 5], expected: 15 },
            { args: [''], expected: '' },
            { args: ['a'], expected: 'a' },
            { args: ['a', 'b'], expected: 'ab' },
            { args: ['hello', ' ', 'world', '!'], expected: 'hello world!' },
        ];

        testParams.forEach(({ args, expected }) => {
            it(`should return ${expected} when called with ${args}`, () => {
                const result = add(...args);
                expect(result).toBe(expected);
            });
        });
    });
});
