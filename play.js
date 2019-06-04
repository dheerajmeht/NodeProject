let name = "Max";
let age = 29;
let hasHobbies = true;



const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is" +
    userName +
    ", age is" +
    userAge +
    ", and user has hobbiies: " +
    userHasHobby
  );
};


// arrow functions
const add = (a,b) => a+b;
console.log(add(1,3));

console.log(summarizeUser("dheeraj", 25, true));
