const countValue = document.querySelector('#count');

function decrement() {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};

function increment() {
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;
};