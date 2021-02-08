const Calculation = require("../src/models/Calculation");
const Sum = require('../src/Operations/Sum')
const Difference = require('../src/Operations/Difference')

test('Assigning operation of adding two numbers', () => {
    let calculation = new Calculation(1,2,Sum);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Sum);
});
test('Get results of add function', () => {
    let calculation = new Calculation(1,2,Sum)
    expect(calculation.GetResults()).toBe(3);
});
test('Results of subtracting two numbers', () => {
    let calculation = new Calculation(1,2,Difference)
    expect(calculation.GetResults()).toBe(-1);
});