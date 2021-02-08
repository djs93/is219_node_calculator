const Calculation = require("../src/models/Calculation");
const MathOperations = require("../src/Operations/MathOperations");

test('Calculator adding two numbers', () => {
    let calculation = new Calculation(1,2,MathOperations.Sum);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe(MathOperations.Sum);
});
test('Get results function', () => {
    let calculation = new Calculation(1,2,MathOperations.Sum)
    expect(calculation.GetResults()).toBe(3);
});