const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const emailCheck = document.querySelector(".emailCheck");
const emailResult = document.querySelector(".emailResult");

const emailRegExp = /^([a-z0-9_\-\.\!\#\$\%\^\&\*()\+\=])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/
emailCheck.addEventListener("click",() =>{
    if(emailRegExp.test(emailInput.value)) {
        emailResult.innerText = "Correct";
        emailResult.style.color = "green";
    } else {
        emailResult.innerText = "Try again";
        emailResult.style.color = "red";
    }
});

const passwordRegExp =/^([A-Za-z0-9]{4,12})$/
emailCheck.addEventListener("click",() => {
    if (passwordRegExp.test(passwordInput.value)) {
        emailResult.innerText = "Correct";
        emailResult.style.color = "green";
    } else {
        emailResult.innerText = "Try again";
        emailResult.style.color = "red";
    }
});

let position = 0;
function blockMove () {
    position +=10;
    if (position > 900) return;
    document.querySelector(".block_square_2").style.left = position + 'px';
    animation();
}
function animation () {
    setTimeout(blockMove,100);
}
animation();


