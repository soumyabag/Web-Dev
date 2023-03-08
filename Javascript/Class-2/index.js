// Object Create

let employee = {
  name: "Soumya Bag",
  id: 11731183,

  draw: function () {
    console.log("draw");
  },
};
console.log(employee.id);
employee.draw();

// Factory Function
function createEmployee(name, id) {
  return (employee = {
    name,
    id,

    draw() {
      console.log("draw");
    },
  });
}

let rectengleObj1 = createEmployee("Soumya Bag", 11731183);
let rectengleObj2 = createEmployee("Hardic Jain", 11731190);

// Constructor Function -> Pascal Function -> First letter of every word will capital
function Employee(name, id) {
  this.name = name;
  this.id = id;
  this.draw = function () {
    console.log("Drawing");
  };
}

let employeeObj = new Employee("Soumya Bag", 11731183);

// For Addition any property
employeeObj.color = "yellow";
// For Deletion any property
delete employeeObj.color;

// Constructor Property
// Every function is a object in JS
let Emp = new Function(
  "name",
  "id",
  `
this.name = name;
    this.id = id;
    this.draw = function() {
        console.log("Drawing");
    }`
);
let empobj = new Emp("Soumya", 11731183);

// Pass By Reference
let a = {
  value: 10,
};
let b = a;
a.value++;
console.log(a);
console.log(b);

// Primitive are copied by their Value
// References are copied by their Reference

let rectengle = {
  length: 2,
  breadth: 4,
};

// For-in loop
// for (let key in rectengle) {
//   // keys are reflected through key variable
//   // values are reflected through rectengle[key]
//   console.log(key, rectengle[key]);
// }

if ("color" in rectengle) {
  console.log("Present");
} else {
  console.log("Absent");
}

// Object Cloning
// ------------------
// 1. Iteration
let src = {
  a: 10,
  b: 20,
};
let obj2 = {};
for (let key in src) {
  // keys are reflected through key variable
  // values are reflected through rectengle[key]
  obj2[key] = src[key];
}
console.log(obj2);

// 2. Assign
let dest = Object.assign({}, src);
console.log(dest);

// 3. Spread
let dest2 = {... src};
console.log(dest2);