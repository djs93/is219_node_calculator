const Calculation = require("../src/models/Calculation");

test('Calculator adding two numbers', () => {
    let calculation = new Calculation(1,2,"Sum");
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.operation).toBe("Sum");
});