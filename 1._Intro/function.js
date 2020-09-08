function myFirstFunction() {
    return "Hello World";
}

//console.log(myFirstFunction());

const myVariableFunction = function (number) {
    return number + number;
};

//console.log(myVariableFunction(12));

/*
const myArrowFunction = () => {
    console.log("Hi there from Arrow Function");
};

function sayHiLater(anyFunctionReference) {
    anyFunctionReference();
}

sayHiLater(myArrowFunction);
*/


const poke = (name) => "Poke - " + name;

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

interact(poke, "Jannick");

const hug =(name) => "Hug - " +name;

interact(hug, "Carsten");

/*

1. give arguments to interact on line 31
2. define parameters in interact on line 27
3. define the body of interact

 */