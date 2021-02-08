const Calculator = require("../src/Calculator");
const Sum = require('../src/Operations/Sum')
const Difference = require('../src/Operations/Difference')

test('Calculator adding two numbers', () => {
    let calculation = Calculator.Sum(1,2);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Sum);
    expect(calculation.GetResults()).toBe(3);
});
test('Calculator subtracting two numbers', () => {
    let calculation = Calculator.Difference(1,2);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Difference);
    expect(calculation.GetResults()).toBe(-1);
});