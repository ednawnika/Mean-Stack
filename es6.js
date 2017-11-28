// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
        
//     }
    
//     showlocation(){

// console.log(`This Dot ${this.y} we ${this.x}`);
    
// }
// }


// const dot2 = new Dot(5, 19)
// dot2.showlocation();

// const dot1 = new Dot(40, 22)

// function returnSomething(param){
//     return param;
// }

// // console.log(returnSomething("hello2"));

// function returnFunctionCall(callback){
//     console.log(typeof callback)
//     var call = function () {
//         return "hello 3";
//     }

// return call();

// }

// console.log(returnFunctionCall("hello"));


// parent Dot class
// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     showLocation() {
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
// }
// // child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius) {
//         super(x, y);
//         this.radius = radius;
//     }
// }
// // we can now create Circles
// const circle1 = new Circle(33, 33, 33);
// // same attributes as a Dot, plus a radius
// console.log(circle1);
// // and Circles can access Dot methods
// circle1.showLocation();

// var ninja = 'Libby';
// setTimeout(function () { console.log(ninja); }, 2000);
// console.log(ninja);



// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
// setTimeout(function myCallbackFunction() {
//     console.log("LATER: ")
//     console.log(ninja, "LATER");
// }, 2000
// );
// console.log("Printing ninja value.");
// console.log(ninja, "NOW1");

// var a = "2";
// var b = function () { console.log("something"); };
// function doSomething(x) {
//     console.log(typeof (x));
// }
// doSomething(a);
// doSomething(b);

// function doSomething(possibleCallback) {
//     if (typeof (possibleCallback) === 'function') {
//         console.log('possibleCallback is a callback!');
//         possibleCallback(); //we can invoke the callback!
//     }
//     else {
//         console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//     }
// }
// doSomething(function myCallback() { console.log('yes, I am a callback!') });
// doSomething('string');

// function makePasta(pasta, makeSauce) {
//     console.log("Boiling water");
//     console.log("Putting " + pasta + " pasta in the water");
//     console.log("Pasta is done!");
//     return pasta + " Pasta! Voila!";
// }
// makePasta("Penne");
// makePasta("Farfalle");

// function makePasta(pasta, makeSauce) {
//     console.log("Boiling water");
//     console.log("Putting " + pasta + " pasta in the water");
//     // create a variable for sauce!
//     var sauce = makeSauce();          // invoke makeSauce, our callback
//     console.log("Mixing sauce");
//     console.log("Pasta is done!");
//     return pasta + " Pasta with " + sauce + " sauce! Voila!";
// }
// function makePesto() {
//     console.log("Making Pesto");
//     return "pesto";
// }
// function makeAlfredo() {
//     console.log("Making Alfredo");
//     return "alfredo";
// }
// // we pass the whole makePesto recipe to makePasta!
// console.log(makePasta("Penne", makePesto));
// // notice lack of parentheses after makePesto.
// // Remember: we want to pass the function, not execute it and pass a return value.
// console.log(makePasta("Farfalle", makeAlfredo));

//simulated really slow DB call.
function getStuffFromDatabase(callback) {
    var data;
    var myTimer = setTimeout(function () {
        if (typeof (callback) == 'function') {
            //it just got back from the DB!
            data = [{ name: 'Todd' }, { name: 'Michael' }, { name: 'Portia' }];
            callback(data);
        }
    }, 10000);
    // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
    return data;
}
//simulated request (failing);
function requestDataFromDatabase() {
    var data = getStuffFromDatabase(); // this should return my data right??
    console.log(data);
}
function catchFly() {
    console.log('I just caught a fly!');
}
requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//etc.







