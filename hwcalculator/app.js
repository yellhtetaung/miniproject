// animation
let firstinput = document.getElementById('firstnumber');
let secondinput = document.getElementById('secondnumber');
let caption = document.getElementById('caption');

firstinput.addEventListener("click",()=>{
    firstinput.previousElementSibling.classList.add('active');
})

secondinput.addEventListener("click",()=>{
    secondinput.previousElementSibling.classList.add('active');
})

// calculation

function sign(sign){
    document.getElementById('tempsign').value = sign;
}

function calculation(){
    let num1 = Number(document.getElementById('firstnumber').value);
        num2 = Number(document.getElementById('secondnumber').value);

    let getsign = document.getElementById('tempsign').value;

    let cal;

    switch(getsign){
        case '+':
            cal = num1 + num2;
            break;
        case '-':
            cal = num1 - num2;
            break;
        case '*':
            cal = num1 * num2;
            break;
        case '/':
            cal = num1 / num2;
            break;
        case '%':
            cal = num1 % num2;
            break;
        default:
            document.getElementById('result').value = "No Sign";
    }

    document.getElementById('result').value = cal;

    if(cal === undefined){
        caption.style.display = 'flex';
        document.getElementById('result').value = "";
    }
}

function alertclose(){
    caption.style.display = 'none';
}