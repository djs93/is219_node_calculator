const Sum = require('./Operations/Sum')
const Difference = require('./Operations/Difference')
const Calculation = require('./models/Calculation')
class Calculator{
    static Sum(a,b){
        return new Calculation(a, b, Sum);
    }
    static Difference(a,b){
        return new Calculation(a, b, Difference);
    }
}
module.exports = Calculator;