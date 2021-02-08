const Calculator = require("../src/Calculator");
const Sum = require('../src/Operations/Sum')
const Difference = require('../src/Operations/Difference')
const Product = require('../src/Operations/Product')
const Quotient = require('../src/Operations/Quotient')
const Power = require('../src/Operations/Power')
const Root = require('../src/Operations/Root')

test('Calculator Add function', () => {
    let calculation = Calculator.Sum(1,2);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Sum);
    expect(calculation.GetResults()).toBe(3);
});
test('Calculator Difference function', () => {
    let calculation = Calculator.Difference(1,2);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Difference);
    expect(calculation.GetResults()).toBe(-1);
});
test('Calculator Product function', () => {
    let calculation = Calculator.Product(2,3);
    expect(calculation.a).toBe(2);
    expect(calculation.b).toBe(3);
    expect(calculation.operation).toBe(Product);
    expect(calculation.GetResults()).toBe(6);
});
test('Calculator Quotient function', () => {
    let calculation = Calculator.Quotient(4,2);
    expect(calculation.a).toBe(4);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Quotient);
    expect(calculation.GetResults()).toBe(2);
});
test('Calculator Square function', () => {
    let calculation = Calculator.Square(4);
    expect(calculation.a).toBe(4);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Power);
    expect(calculation.GetResults()).toBe(16);
});
test('Calculator Square Root function', () => {
    let calculation = Calculator.SquareRoot(4);
    expect(calculation.a).toBe(4);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(Root);
    expect(calculation.GetResults()).toBe(2);
});