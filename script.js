const num1ele = document.getElementById("num1");
const num2ele = document.getElementById("num2");
let num1, num2;

const check = document.getElementById("check")
const next = document.getElementById("next")

const sum = document.getElementById("sum")
const message = document.getElementById("message")



function setEx() {

    sum.value = '';
    num1 = Math.floor(10 * Math.random())
    num2 = Math.floor(10 * Math.random())

    num1ele.textContent = num1;
    num2ele.textContent = num2;


}

setEx()


check.addEventListener('click', function () {

    let result = num1 + num2;
    let userAns = sum.value;
    console.log(result, userAns);
    if (result == userAns) {
        message.textContent = 'נכון מאוד'
        message.style.color = "green";

    } else {
        message.textContent = 'לא נכון נסה שוב!'
        message.style.color = "red";
    }
})

next.addEventListener('click', setEx)