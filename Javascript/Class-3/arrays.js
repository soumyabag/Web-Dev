// Creation
//-------------------
let arr = ["Soumya", "DXC", 11731183];
console.log(arr);
// 0: "Soumya"
// 1: "DXC"
// 2: 11731183
// length: 3
//--------------------------------------------------------------

//------------
// Insertion
// -----------
arr.push("L70"); //For inserting at End
arr.unshift("Mainframe"); //For inserting ar Beginning
arr.splice(2, 0, "Product-1"); //For inserting at Middle
// arr.splice(index, delete count, what you want to insert into)
//----------------------------------------------------------------

// Searching
//-------------
console.log(arr.indexOf("DXC"));
// Want to check if a number exists in an array
if(arr.indexOf("Soumya") != -1){
    console.log("Present");
}

console.log(arr.includes("L70"));

//---------------------------------
// Call back function
//---------------------------------
let courses = [
    {no:1, name: 'Soumya'},
    {no:2, name: 'Sourin'}
];

console.log(courses);
// Target : To find a course with name Soumya

// let course = courses.find(function (courses) {
//     return courses.name == 'Soumya';
// })

let course = courses.find(courses => courses.name === 'Soumya');  //Arrow Function

console.log(course);
//-----------------------------------------------------------------------

// Removing Elements
//---------------------
console.log(arr);

arr.pop(); // End
arr.shift(); // Start
arr.splice(2, 1); // Middle

console.log(arr);

// Emptying an array
let numbers = [1,2,3,4,5];
let numbers2 = numbers;

// numbers = [];  // Not a good prcatice because it will not remove addresses
numbers.length = 0; //Best Practice
// numbers.splice(0, numbers.length);

console.log(numbers);
console.log(numbers2);
//-------------------------------------------------------------------------

// Combining & Slicing Arrays
//----------------------------

let first = [1,2,3];
let second = [4,5,6];
let combined = first.concat(second);
console.log(combined);

let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice(2);
let sliced = marks.slice(2, 6);
// slice(start, end)  It will not include end index
console.log(sliced);
//--------------------------------------------------------------------------

// Spreda Opertaor

let first2 = [1,2,3];
let second2 = [4,5,6];
let combined2 = [...first2, 'a', ...second2, true];
console.log(combined2);

// copy creation
let another = [...combined2];
console.log(another);
//----------------------------------------------------------------------------

// Iterating an Array
//----------------------
let arr2 = [10,20,30,40];
// For of loop
for(let value of arr2){
    console.log(value);
}
//For Each Loop
arr2.forEach(function (number2){
    console.log(number2);
})

arr2.forEach(number2 => console.log(number2)); // By Arrow Function
//--------------------------------------------------------------------------

// Joining Arrays
//-----------------
let arr3 = [10,20,30,40];
const joined = arr3.join(',');
console.log(joined); 
//--------------------------------------------------------------------------

// Sorting Arrays
//----------------
let arr4 = [20,10,5,60,3];
arr4.sort();
console.log(arr4);

// On Objects
let employees = [
    {id:1, name: 'Soumya'},
    {id:2, name: 'Rahul'},
    {id:3, name: 'Debkanta'}
];

let sortedByName = employees.sort(function(a, b){
    if (a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
});
console.log(sortedByName);
//--------------------------------------------------------------------------

// Filtering Arrays
//------------------
let num = [1,2,-1,-3];
let filtered = num.filter(value => value >= 0);
console.log(filtered);

let mobiles = [
    {id:1, company: 'Samsung', model: 'S1'},
    {id:2, company: 'Samsung', model: 'S2'},
    {id:3, company: 'Apple', model: 'A1'},
    {id:4, company: 'Apple', model: 'A2'},
    {id:5, company: 'RedMI', model: 'R1'},
    {id:6, company: 'RedMI', model: 'R2'},
    {id:7, company: 'Oneplus', model: 'O1'},
    {id:8, company: 'Oneplus', model: 'O2'},
];

let filteredModels = mobiles.filter(mobiles => mobiles.company === 'Samsung');
console.log(filteredModels);
//--------------------------------------------------------------------------

// Mapping Arrays (Maps each elements of array to something else)
//-----------------------------------------------------------------
let num2 = [7,8,9,10];
let items = num2.map(value => 'student_no-' + value);
console.log(items);

// Mapping with objects
//--------------------------------------------------------------------------
let num3 = [1,2,-1,-3];
let filtered2 = num3.filter(value => value >= 0);

let item = filtered.map(function (val) {
    let obj = {value: val};
    return obj;
});
console.log(item);


