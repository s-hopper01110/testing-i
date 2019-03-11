//for testing

const {  enhancer, repair, fail, succeed } = require('./enhancer.js');


describe('enhancer.js', () => {
    test('can run the tests', () => {
        expect(true.toBe(true)
    })

describe('repair()', () => {
    it('returns new item with restored durability restored to 100', () => {
        const item = {  durability: 55  }

        expect(repair(item).durability.toBe(100)
    })
})


// //When enhancement succeeds

// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.

describe('succeed()', () => {
    it('items enhancement increases by 1 and enh level < 20'), () => {
        const item = {
            name:'Knight',
            durability:100, 
            enhancement:19
        }
        expect(succeed(item).enhancement.toBe(20);
        expect(succeed(item).enhancement.toBe(100);
        })
    })
}) //main
