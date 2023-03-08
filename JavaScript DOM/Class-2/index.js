// //Adding 100 para
// const t1 = performance.now();
// for(let i=1; i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para' + i;
//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("Time takes" + (t2-t1) + " ms");


// //optimizing a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is Para' + i;
//     myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("Time takes" + (t4-t3) + " ms");




//Optimizing more using Document Fragment
let fragment = document.createDocumentFragment();
for(let i=1; i<=100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is Para' + i;
    fragment.appendChild(newElement);
}
document.body.appendChild(fragment);