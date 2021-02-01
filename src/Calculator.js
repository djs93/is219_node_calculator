const MathOperations = require('./Operations/MathOperations')
const Calculation = require('./models/Calculation')
class Calculator{
    static Sum(a,b){
        return new Calculation(a, b, "Sum");
    }
}
module.exports = Calculator;