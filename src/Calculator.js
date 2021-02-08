const Sum = require('./Operations/Sum')
const Difference = require('./Operations/Difference')
const Product = require('./Operations/Product')
const Quotient = require('./Operations/Quotient')
const Power = require('./Operations/Power')
const Root = require('./Operations/Root')
const Calculation = require('./models/Calculation')

class Calculator{
    static Sum(a,b){
        return new Calculation(a, b, Sum);
    }
    static Difference(a,b){
        return new Calculation(a, b, Difference);
    }
    static Product(a,b){
        return new Calculation(a, b, Product);
    }
    static Quotient(a,b){
        return new Calculation(a, b, Quotient);
    }
    static Square(a){
        return new Calculation(a, 2, Power);
    }
    static SquareRoot(a){
        return new Calculation(a, 2, Root);
    }
}
module.exports = Calculator;