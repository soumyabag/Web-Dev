// Math Objects
console.log(Math.random());

// String Object
let lastName = new String("Soumya"); //Object
let firstName = "Rahul"; //Primitive
firstName.length;
firstName.includes("So");
firstName.startsWith("S");

let sentence = "This is my new car";
let words = sentence.split(" ");
console.log(words);

// Template Literal (Escape Sequence)
let message = `
Hello ${firstName}

Thanks for the Opportunity.

Regards,
Soumya`;
console.log(message);

// Date And Time
let date = new Date();
console.log(date);

let date2 = new Date(1998, 5, 20, 7); //Month starts from 0-11
console.log(date2);


