const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
});

describe('length', () => {
    it('Has no lines longer than the arguments passed in', () => {
        expect(wrap("Lorem ipsum dolor sit eu amet elit na magna sem amet nulla vel purus ac ligula.",20))
            .to.equal("Lorem ipsum dolor \n sit eu amet, elit na \n magna sem amet nulla \n vel purus ac ligula.")
    
    });
});

describe('breakLine', () => {
    it("It doesn't break words in the middle", () => {
        expect(wrap("Lorem ipsum dolor sit eu amet elit na magna sem amet nulla vel purus ac ligula.",10))
        .to.equal("Lorem \n ipsum \n dolor sit \n eu amet, \n elit na \n  magna sem \n amet nulla \n vel purus\n ac ligula.")

    })
})
describe('column number small', () => {
    it('It throws an errow if the input column number is too small',() => {
        expect(wrap('Lorem ipsum dolor sit eu amet elit na magna sem amet nulla vel purus ac ligula',5))
        .to.equal('Input too small')
    })
})
