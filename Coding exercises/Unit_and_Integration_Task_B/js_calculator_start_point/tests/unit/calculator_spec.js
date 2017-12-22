var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should multiply 3 and 5 and get the answer 15', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal( 15 , calculator.runningTotal);
  })

  it('should divide 21 by 7 and get the answer 3', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal( 3, calculator.runningTotal);
  })

  it('should add 1 and 4 and get the answer 3', function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal( 5, calculator.runningTotal);
  })

  it('should subtract 7 and 4 and get the answer 3', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.equal( 3, calculator.runningTotal);
  })

  it('should concatinate numbers together', function() {
    calculator.numberClick(7);
    calculator.numberClick(4);
    calculator.numberClick(1);
    calculator.numberClick(8);
    assert.equal( 7418, calculator.runningTotal);
  })

  it('should string multiple operators', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal( 12, calculator.runningTotal);
  })

  it('clear previous number and operator and give answer prior calcualtion', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.clearClick();
    calculator.operatorClick('=');
    assert.equal( 3, calculator.runningTotal);
  })

});
