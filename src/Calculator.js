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
        this.AddCalculation(new Calculation(a, b, Sum));
        return this.GetLastCalculation();
    }
    static Difference(a,b){
        this.AddCalculation(new Calculation(a, b, Difference));
        return this.GetLastCalculation();
    }
    static Product(a,b){
        this.AddCalculation(new Calculation(a, b, Product));
        return this.GetLastCalculation();
    }
    static Quotient(a,b){
        this.AddCalculation(new Calculation(a, b, Quotient));
        return this.GetLastCalculation();
    }
    static Square(a){
        this.AddCalculation(new Calculation(a, 2, Power));
        return this.GetLastCalculation();
    }
    static SquareRoot(a){
        this.AddCalculation(new Calculation(a, 2, Root));
        return this.GetLastCalculation();
    }
    static ClearHistory(){
        this.Calculations = [];
    }
    static AddCalculation(calculation){
        this.Calculations.push(calculation);
    }
    static GetLastCalculation(){
        return this.Calculations[this.Calculations.length - 1];
    }
}
module.exports = Calculator;