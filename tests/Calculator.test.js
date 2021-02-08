const Calculator = require("../src/Calculator");
const MathOperations = require("../src/Operations/MathOperations");

test('Calculator adding two numbers', () => {
    let calculation = Calculator.Sum(1,2);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(MathOperations.Sum);
    expect(calculation.GetResults()).toBe(3);
});