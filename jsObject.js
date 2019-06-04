const person = {
  name: "Dheeraj",
  greet: () => {
    console.log("I am greet  " + this.name);
  }
};

person.greet();

/* const person = {
    name  : "Dheeraj",
    greet: function(){ console.log("I am greet  " + this.name)}
  }; 
  person.greet();
 */

/* const person = {
    name: "Dheeraj",
    greet() {
      console.log("I am greet  " + this.name);
    } 
  };
 */

//  ----------------------------arrays-------------------------

const hobbies = ["Sports", "Cooking"];
/* 
 for (let hobby of hobbies){
     console.log(hobby);
 } */

console.log(
  hobbies.map(hobby => {
    return "Hobby: " + hobby;
  })
);
console.log(hobbies);
 