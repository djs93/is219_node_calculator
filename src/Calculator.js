const Sum = require('./Operations/Sum')
const Difference = require('./Operations/Difference')
const Product = require('./Operations/Product')
const Quotient = require('./Operations/Quotient')
const Power = require('./Operations/Power')
const Root = require('./Operations/Root')
const Calculation = require('./Models/Calculation')

class Calculator{
    static Calculations = [];
    static Sum(a,b){
        let calculation = new Calculation(a, b, Sum);
        this.Calculations.push(calculation)
        return calculation;
    }
    static Difference(a,b){
        let calculation = new Calculation(a, b, Difference);
        this.Calculations.push(calculation)
        return calculation;
    }
    static Product(a,b){
        let calculation = new Calculation(a, b, Product);
        this.Calculations.push(calculation)
        return calculation;
    }
    static Quotient(a,b){
        let calculation = new Calculation(a, b, Quotient);
        this.Calculations.push(calculation)
        return calculation;
    }
    static Square(a){
        let calculation = new Calculation(a, 2, Power);
        this.Calculations.push(calculation)
        return calculation;
    }
    static SquareRoot(a){
        let calculation = new Calculation(a, 2, Root);
        this.Calculations.push(calculation)
        return calculation;
    }
    static ClearHistory(){
        this.Calculations = [];
    }
}
module.exports = Calculator;