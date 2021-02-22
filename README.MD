[![Coverage Status](https://coveralls.io/repos/github/djs93/is219_node_calculator/badge.svg?branch=master)](https://coveralls.io/github/djs93/is219_node_calculator?branch=master)
[![Build Status](https://travis-ci.org/djs93/is219_node_calculator.svg?branch=master)](https://travis-ci.org/djs93/is219_node_calculator)
# IS219 Calculator

---
## SOLID Principles
### S - Single Responsibility Principle
This project tries to follow this principle as close as possible. 
Before I even learned about these principles I strove to separate my functions into bite-sized pieces because it just
made sense.
The best examples of this principle is in every operation under [src/operations](https://github.com/djs93/is219_node_calculator/tree/master/src/Operations)
as well as the [main calculator file](https://github.com/djs93/is219_node_calculator/blob/master/src/Calculator.js) and
[the Calculation file](https://github.com/djs93/is219_node_calculator/blob/master/src/Models/Calculation.js).
For an example, here is the `Sum` function in its entirety:
```javascript
function Sum(a, b){
    return a+b;
}
```
It is short and does one thing. All the Operations follow this same principle.
### O - Open-Closed Principle
This principle is followed in the case of [the calculator](https://github.com/djs93/is219_node_calculator/blob/master/src/Calculator.js).
By having the function to add custom calculations to the history, we allow extension of what can be done but not modification
of operations already in place. 
```javascript
static AddCalculation(calculation){
    this.Calculations.push(calculation);
}
```
We also see this in the history of the calculator. We don't have to directly modify the 
history array to clear it or append to it. 
### L - Liskov Substitution Principle
This principle is followed in the case of [the Calculations](https://github.com/djs93/is219_node_calculator/blob/master/src/Models/Calculation.js).
All calculations can be substituted and still function the same. They all use `.GetResults()` to return their respective 
result. It doesn't matter if the function is to Sum or calculate the Product, the Calculation functions the same (not in
the result, obviously).
```javascript
GetResults(){
    return this.operation(this.a,this.b);
}
```
### I - Interface Segregation
For the Calculator, you only need the bare essentials. You don't need to create your own Calculations for every 
operation unless you want to extend the functionality of the base Calculator. For every Calculation as well, you only
need your operation and the two operands.
```javascript
class Calculation{
    constructor(a, b, operation){
        this.a = a;
        this.b = b;
        this.operation = operation;
    }
```
### D - Dependency Inversion Principle
This principle states that an object receives other objects that it depends on. The dependencies in this project would 
be the individual operations. They are passed into the Calculation class used by the Calculator, the calculator does not
contain these behaviors themselves. 
```javascript
static Sum(a,b){
    this.AddCalculation(new Calculation(a, b, Sum));
    return this.GetLastCalculation();
}
```

---
## Object Oriented Programming Concepts
### Encapsulation
In Javascript, encapsulation is acheived by using Closures. A great example of this concept is this piece of code from
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures):
```javascript
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```
Here, the `name` variable cannot be accessed outside the function `makeFunc`, essentially making it private. The 
reference to it is still live once `makeFunc` returns which why it still works, but it cannot be accessed by anything
except `displayName`.

In the context of the calculator, you could make the `a`, `b`, and `operation` of a Calculation private by doing something like:
```javascript
function makeCalc(a, b, operation) {
  function getResults() {
    return operation(a,b)
  }
  return getResults;
}

var myFunc = makeCalc(1, 2, Sum);
myFunc();
```
This would make the operation's result the only accessible field. We do not want to do this later on, however, because
we want to see the calculation history, requiring us to need to see the `a`, `b`, and `operation`.
### Abstraction
This concept is essentially making unique objects (like individual people) into a generic class to be reused to create
more unique objects (such as a generic Person class being used to make unique people).

In the calculator, this can be seen with the `Calculation` class.
```javascript
class Calculation{
    constructor(a, b, operation){
        this.a = a;
        this.b = b;
        this.operation = operation;
    }
    GetResults(){
        return this.operation(this.a,this.b);
    }
}
```
By using this, we're not making a special class just for Sum calculations. We're abstracting it to a general 
calculation we can use for many different operations.
### Inheritance
This concept uses the idea that objects in real life often share similar characteristics. All teachers are people, for
instance. This means that in OOP, a `Teacher` class could derive (or inherit) from a `Person` class, and it would make
sense.

For the calculator, a good example would be a scientific calculator extending form the base Calculator.
Both share the same functions of the base, but the scientific calculator could add other functions such as logarithms.
```javascript
class ScientificCalculator extends Calculator{
    static Log(a,b){
        this.AddCalculation(new Calculation(a, b, Log));
        return this.GetLastCalculation();
    }
}
```
It would still have the `Sum`, `Product`, etc. functions as `Calculator`, but implement more behavior.
### Polymorphism
Polymorphism doesn't work in Javascript the same way it works in other languages. Normally, when a child contains a 
function with the same method signature as its parent, it will override it. In Javascript, when a child has a method the
same as its parent and one tries to use said function, both the child's AND the parent's implementations will run. This
can result in unwanted behavior, and often only the parent's implementation running if it contains a return statement.

For this section, I will show an example of polymorphism using Java instead.
```java
public interface Animal{
    public void animalSound();
    public void sleep();
}

public class Dog implements Animal{
    public void animalSound() {
        // The body of animalSound() is provided here
        System.out.println("The dog says: bark bark");
    }
    public void sleep() {
        // The body of sleep() is provided here
        System.out.println("Zzz");
    }
}

class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog();  // Create a Dog object
        myDog.animalSound();
        myDog.sleep();
    }
}
```
In this example, we make an `Animal` interface that requires the methods `animalSound` and `sleep`. When a class, in
this case `Dog`, it is required to have these methods implemented. The behavior of other `Animal`-derived classes may
differ, but you know that every one of them has both the `animalSound` and `sleep` methods. This is useful when you have
lists of all of these `Animals`, but don't care what the child type is. If we wanted all the `Animals` in a `Barn` to 
sleep, we'd just have to call every `Animal`'s sleep method.
