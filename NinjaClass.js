function Ninja(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
    
    
    // Ninja.prototype.sayname = function(){
    //     console.log("My name is " + this.name)
    //     return this;
    // }

    // Ninja.prototype.drinkSake = function(){
    //     this.health += 20;
    //     console.log(this.health)
     
    //     return this;
    
    // }

    // Ninja.prototype.punch = function(ninja){
    //     this.health -= 5;
    //     console.log(ninja.name + "was punched by" + this.name + " Health:" + this.health)
    //     return this;

    this.kick = function (ninja) {
        const damage = this.strength * 5;
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
        return this;
    }
}

    


    
    // this.showStats = function(){
    //         console.log("Name:" + this.name + ", Health:" + this.health + ", Speed" + this.speed + ", Strength:" + this.strength);
    //         return this;
    // }
// }
    
    
const ninja1 = new Ninja("ninja1");
const ninja2 = new Ninja("ninja2");
const ninja3 = new Ninja("ninja3");


ninja2.kick(ninja1)
    
// ninja1.punch();
    
    



// ninja1.sayname();
// drinkSake("dylan");








// const newninja = new Ninja("brad");
// console.log(health)
// drinkSake.showStats();





// sayName()
// newninja.showStats("ronald")
// drinkSake()  




// const drinkSake = new Ninja("bryan");
