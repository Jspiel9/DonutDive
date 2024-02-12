// If statement
let num = 10;
if (num > 0) {
    console.log("The number is positive.");
} else if (num === 0) {
    console.log("The number is zero.");
} else {
    console.log("The number is negative.");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log("The current value of i is: " + i);
}

// switch case 
let car = "Toyota";
switch (car) {
    case "Toyota":
        console.log("It's a Toyota.");
        break;
    case "Nissan":
        console.log("It's a Nissan.");
        break;
    default:
        console.log("Unknown car.");
}

// from what ive read you cannot do a pass statement in javascript (This is as close as I can find)
function doNothing() {
    // This function does nothing
}

// Calling the function
doNothing();


// match statement
let color = "red";
switch (color) {
    case "red":
        console.log("The color is red.");
        break;
    case "blue":
        console.log("The color is blue.");
        break;
    default:
        console.log("Unknown color.");
}

//custom function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Example usage:
console.log(getMax(10, 5)); // Output: 10
console.log(getMax(-3, 8)); // Output: 8