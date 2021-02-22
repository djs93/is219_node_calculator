const Calculator = require("../src/Calculator");
const Calculation = require("../src/Models/Calculation");
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
test('Calculator ClearHistory', () => {
    Calculator.Sum(1,2);
    Calculator.ClearHistory();
    expect(Calculator.Calculations.length).toBe(0);
});
test('Calculator adding to Calculations after doing operation', () => {
    Calculator.ClearHistory()
    Calculator.SquareRoot(4);
    Calculator.Square(4);
    Calculator.Sum(4,2);
    expect(Calculator.Calculations.length).toBe(3);
    Calculator.Calculations.forEach(function(calculation){
        expect(calculation).toBeInstanceOf(Calculation);
    })
    expect(Calculator.Calculations[0].operation = Root);
    expect(Calculator.Calculations[1].operation = Power);
    expect(Calculator.Calculations[2].operation = Sum);
});

test('Calculator adding to Calculations with AddCalculation', () => {
    Calculator.ClearHistory()
    Calculator.AddCalculation(new Calculation(1,2,Sum));
    Calculator.AddCalculation(new Calculation(4,2,Root));
    Calculator.AddCalculation(new Calculation(3,2,Product));
    expect(Calculator.Calculations.length).toBe(3);
    Calculator.Calculations.forEach(function(calculation){
        expect(calculation).toBeInstanceOf(Calculation);
    })
    expect(Calculator.Calculations[0].operation = Sum);
    expect(Calculator.Calculations[1].operation = Root);
    expect(Calculator.Calculations[2].operation = Product);
});

test('Calculator get last Calculation', () => {
    Calculator.ClearHistory()
    Calculator.SquareRoot(4);
    Calculator.Square(4);
    Calculator.Sum(4,2);
    expect(Calculator.GetLastCalculation().operation = Sum);
});