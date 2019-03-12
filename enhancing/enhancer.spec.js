//for testing

const { repair, fail, succeed } = require('./enhancer.js');


describe('enhancer.js', () => {
    test('can run the tests', () => {
        expect(true).toBe(true)
    })

describe('repair()', () => {
    it('returns new item with restored durability restored to 100', () => {
        const item = {  durability: 55  }

        expect(repair(item).durability).toEqual(100)
    })
})


// //When enhancement succeeds

// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.

describe('succeed()', () => {

    it('items enhancement increases by 1 and enh level < 20', () => {
        
        expect(succeed({name:'Knight', durability:100, enhancement:19})).toEqual({name:'Knight', durability:100, enhancement:20});
        // expect(succeed(item).enhancement.toEqual(100);
    })
    })

//     ### When enhancement fails

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).








})
