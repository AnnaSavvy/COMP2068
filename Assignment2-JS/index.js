
import * as allFunc from './functions-list.js'; // importing all the functions that exported in finctions-list.js

console.log(allFunc); // checking if functions is imported

//Function A
allFunc.nextLesson("JavaScript Frameworks", "3:30 pm."); 

//Function B
let cm = 100;
console.log(cm + " cm is approximately "+ allFunc.cmToBananas(cm)+" average bananas."); // using the function b)

//Function C
let hourlyWage = 20; //  $ per hour
let hoursPerWeek = 20; //  hours per week
console.log(`The annual salary at the rate you entered is: $${allFunc.salaryCalculator(hourlyWage, hoursPerWeek)}`);

//Function D
let passwordLength = 10; // 10 character password
console.log(`Your password is: ${allFunc.passwordGenerator(passwordLength)}`);