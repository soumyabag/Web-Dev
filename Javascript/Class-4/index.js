
run();

// Function Declarations
function run() {
    console.log('Running...');
}
run();

// Hoisting --> Hoisting is the process of moving functions declaration 
//              to the top of file and it's automatic.

// Named Function Assignment
let stand = function walk() {
    console.log("Walking");
};

// Anonymous Function Assignment
let stand2 = function() {
    console.log("Walking");
};
// walk();  // We can't do that
stand();
stand2();
//---------------------------------------------------------------

function sum(a, b) {
    return a + b;
};

console.log(sum(1,2));
console.log(sum(1));  //O/P will be NaN because of b varibale undefined
console.log(sum()); // NaN
console.log(sum(1,2,3,4,5)); // 3, all three numberes will go to arguement

// Arguement Operator
function sum2() {
    let total = 0;
    for(let value of arguments){
        total = total + value;
    }
    return total;
};
console.log(sum2(1,2,3,4,5)); // it will create an object of key value pairs
 
//Rest Opertaor
function sum3(...args){
    console.log(args);
};
sum3(0,1,2,3,4,5); // it will create an array
//-----------------------------------------------------------------

//Default Parameters
function interest(p,r=5,y=10) { //Rule--> If you are declaring one default parameter, 
     return p*r*y/100;        //        then rest of the right parameters should be default parameters otherwise it will give NaN value 
}
console.log(interest(1000,5));
console.log(interest(1000,undefined,5));  //it's not a good practice
//-----------------------------------------------------------------

// Getters and setters
// getters : access properties
// setters : change or mutate properties
let person = {
    fName: 'Soumya',
    lName: 'Bag',
    get fullName() {  
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value) {
        if(typeof value !== 'string'){
            throw new Error('Invalid String');
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

// function fullName() {  
//     return `${person.fName} ${person.lName}`;
// }
person.fullName = 'Rahul Kumar';
console.log(person.fullName);
//-------------------------------------------------------------------

// try-catch block
//------------------

try{
    person.fullName = true;
}
catch (e){
    alert(e);
}
//--------------------------------------------------------------------

// Scope
//---------
