export function nextLesson(courseName, time) {
    // a. Function to print info about next class 
    console.log("Hello! Your next class will be "+ courseName +", starting at "+ time); // printing arguments with additional text
}

export function cmToBananas(centimeters) {
    // b. Function to convert length in cm into lenght in bananas
    let bananas = (centimeters/15).toFixed(2); // calculating the length and round to one decimal place
    return bananas;
}

//Function C salary calculator
export function salaryCalculator(hourlyWage, hoursPerWeek, weeksPerYear = 52) {
    let annualSalary = hourlyWage * hoursPerWeek * weeksPerYear;
    return annualSalary.toFixed(2); // 2 decimal
}

//Function D password generator
export function passwordGenerator(length) {
    //Defining the characters allowed
    const allowedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
        //Creating random character and storing it in randomCharacter
        const randomCharacter = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters[randomCharacter];
    }
    return password;
}