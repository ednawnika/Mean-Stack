// function Person(){

    //attributes
//     this.name = 'Cody';
//     this.age =33;
//     this.profession = 'Instructor';
//     favColor = 'green';

//     // functions
//     this.whatup = function(){
//         console.log(this.name)

//     }

//     this.sayMyFavColor = function(){
//         console.log(favColor);
//     }



// }

// prototype function
// Person.prototype.sayWha = function (){
//     practiceScope(function(){
//         console.log('this:', this)
//     })
// }

// }


// var person = new Person ();
// console.log(person);
// person.whatup();
// person.sayWha();
// person.sayMyFavColor();

// function practiceScope(callback){
//     callback()
// }



// let arrow = new Promise

// function myfunction(){
    
   
    
    
//     if(true){
//         let myName = 'Cody'; 
//         //do something
//     }else{
//         let name = 'Eric'
//         //do something else;

    // }
    // let arr = [1,2,3,4,5];
    // let arr2 = [6,7,8,9,10];
    
    // for(let i =0; i < arr.length; i++){
    //     console.log(arr[i])
    // }
    // let i = 0;
    // while( i < arr.length){

    // }
// 

// var x = [1, 2, 3];
// var y = x;
// x.push('Hello world!')
// // push adds to the end of arrays in JavaScript
// console.log(x);
// console.log(y);

// let firstName = "Oscar";
// let lastName = "Vazquez";
// let message = "Hello, my name is " + firstName + " " + lastName;
// console.log(message);

// let firstName = "Oscar";1
// let lastName = "Vazquez";
// let message = `Hello, my name is ${firstName} ${lastName}`;
// // Take note of the backticks instead of quotes
// console.log(message);

// let haiku = "Having been erased, \nThe document you're seeking \nMust now be retyped."
// console.log(haiku);



// var x = 12 * 3;
// console.log(x);

// let score = 3;
// if(score === 5){
//     console.log('You got 5 out of 5');
// }else if(score === 4){
//     console.log('You got 4 out of 5');
// }else if(score === 3){
//     console.log('You got 3 out of 5');
// }else if(score === 2){
//     console.log('You got 2 out of 5');
// }else if(score === 1){
//     console.log('You got 1 out of 5');
// };

// let cake = true;
// let hunger = true;
// let birthday = "May 13th";
// if(cake){
// // first we check if there is a cake, which is true
//     if(hunger === true && birthday === "May 14th"){
//     // then we check if both hunger is true and if 
//     // birthday is set to a matching string.
//         eat_cake();
//         // all conditions are met, so we eat cake!
//     }else{
//         dont_eat_cake();
//         // while the cake exists (or else we wouldn't be 
//         // executing this line) we were either not hungry or 
//         // it was not our birthday, so we won't eat cake :(
//     }
// }
// // if there is no cake, then none of the above statements will 
// // even evaluate. This is because 'if(cake)' equalled to false!
// function eat_cake(){
//     console.log("Cake is good")
// }

// function dont_eat_cake(){

//     console.log("gimme my cake bitch")
// }


// let x = [];
// x[334] = 'Hello world!';
// console.log(x);


// let num = 10;
// do {
//     console.log("I'm counting! The number is " + num);
//     num = num + 1;
// }
// while (num < 6);
// console.log("We are done. Goodbye world!");


// let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
// for(let i = 0; i < names.length; i++){
//     if(names[i] === 'Steve'){ continue };
//     console.log(names[i]);
// };

// function sayName(name){
//     console.log("Hello my name is " + name);
// };
// sayName('Morty');


// function sayName(name){
//     console.log("Hello my name is " + name);
// };
// let x = sayName('Morty');
// console.log(x);

// function sayName(name){
//     return "Hello my name is " + name;
// };
// let message = sayName("Cinderella");
// console.log(message);

// function ten(){
//     return 10;
// };
// let twenty = ten() + ten() + ten();
// console.log(twenty);


// let x = [];

// x.push("coding"),
// x.push("rocks"),
// x.push("wtf"),


// console.log(x);

// const y = [];

// y.push(88);
// console.log(y)

//  let x = [9, 10, 6, 5, -1, 20, 13, 2]

//     function printvar(){
    


//     for(var i = 0; i < x.length; i++){

//         console.log(x[i])

//     }

//     }

//         printvar();


// names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']

// for(let i = 0; i < names.length; i++){

//     if(names[i].length === 5){
//         console.log(names[i])
//     }
// }

// console.log(names[i].length);


// }

// var string = "yellow"

// function yell(string){

//     return string.toUpperCase();
// };
//     console.log(yell(string));

// function magic_multiply(x, y){

//     if(y.constructor === String)
    
//     return "Error, cant multiply by string";
// }

// let test4 = magic_multiply(7,"three")

//     console.log(test4);


// function zero_negativity(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//         return false;
//         }
//     }
//         return true;
// }

// var arr = [2, 4, -5, 6, 7, 8, -1];

// let num = 17;

// function isEven(num){
//     if (num % 2 === 0 ){
//         return true;
//     }else{
//         return false;
// }
// }


// function how_many_even(arr){

//     return arr;

// }
 

	// function isEven(num) {
	// 		if (let num % 2 === 0) {
	// 			return true;
    //             console.log(boolean)
	// 		} else {
	// 			return false;
    //             console.log(boolean)
	// 		}
	// 	}







// function starString(num) {
// 			let stars = "";
// 			for (let i = 0; i < num; i++) {
// 				stars += "*";
// 			}
// 			return stars;
// 		};
    
    
    
    
//     var name = "name";

// }

// myfunction()





// function starString(num){
//     let stars = "";
//     for (let i = 0; i < num; i++){
//         stars += "*";
//     }

//     return stars;
// }

// function drawstars(arr){

// }



// var create = {

//     dog: "meatball",
//     cat: "meow",
//     cylinder:"carrot",
//     mobile:true
// }



// for( var tru in create){
//     console.log(create[cat])
// }


// console.log(magicalUnicorns);
// var magicalUnicorns = "awesome";


// var foo = "bar";
// function magic(){
//     foo = "hello world";
//     console.log(foo);
//     var foo;
// }
// magic();
// console.log(foo);


// var magicalUnicorns = function(){
// console.log("Will it blend?");
// }
// console.log("Don't breath this!");

// magicalUnicorns();



// let x = 1;
// let y = 2;
// let z == 3;
// console.log(x + x);
// console.log(y - z);
// console.log(z * x);

    //   const jo = [{
    //           name: 'Remy',
    //           cohort: 'Jan'
    //       },
    //       {
    //           name: 'Genevieve',
    //           cohort: 'March'
    //       },
    //       {
    //           name: 'Chuck',
    //           cohort: 'Jan'
    //       },
    //       {
    //           name: 'Osmund',
    //           cohort: 'June'
    //       },
    //       {
    //           name: 'Nikki',
    //           cohort: 'June'
    //       },
    //       {
    //           name: 'Boris',
    //           cohort: 'June '
    //       }
    //   ];

    //    for (const tr of jo) {
    //        console.log(`name: ${ tr.name }, cohort: ${ tr.cohort }`)
    //    };



    //    const users = {
    //        employees: [{
    //                'first_name': 'Miguel',
    //                'last_name': 'Jones'
    //            },
    //            {
    //                'first_name': 'Ernie',
    //                'last_name': 'Bertson'
    //            },
    //            {
    //                'first_name': 'Nora',
    //                'last_name': 'Lu'
    //            },
    //            {
    //                'first_name': 'Sally',
    //                'last_name': 'Barkyoumb '
    //            }
    //        ],
    //        managers: [{
    //                'first_name': 'Lillian',
    //                'last_name': 'Chambers'
    //            },
    //            {
    //                'first_name': 'Gordon',
    //                'last_name': 'Poe '
    //            }
    //        ]
    //    };

    //    for (const key in users) {
    //        console.log(key.toUpperCase());
    //        for (let i = 0; i < users[key].length; i++) {
    //            const num = i + 1;
    //            const fname = users[key][i].first_name;
    //            const lname = users[key][i].last_name;
    //            const length = fname.length + lname.length;
    //            console.log(`${num} - ${lname}, ${fname} - ${length}`);
    //        }
    //    };

    //    x = 35.28 * 80;


    function personConstructor(name, age) {
    // an object literal that will be returned
    const person = {};
    // attributes of a person
    person.name = name;
    person.age = age;
    // when attached to an object or instance, functions are called 'methods'.
    // this is our first method, greet
    person.greet = function(){
        console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
    }
    // finally, this function must return an instance
    return person;
}
// create the 'steve' instance, run greet
const steve = personConstructor("Steve", 27);
steve.greet();
// create the 'anika' instance, run greet. note that it is different.
const anika = personConstructor("Anika", 33);
anika.greet();
// finally note how we can refine the greet method for any particular instance
const emily = personConstructor("Emily", 22);
emily.greet = function() {
    console.log("I am the greatest, ever!");
};
emily.greet();


