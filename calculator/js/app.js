let keyPad = document.querySelector(".keypad");
let displayBox = document.querySelector(".display");
let operator = ["+","-","*","/","%"];

let filter = x => {
    let current = displayBox.innerText;
    let lastChar = current[current.length-1];

    if(current.length >= 10){
        return false;
    }

    if(current == "0"){
        if(x != "."){
            clearlast();
        }
    }

    if(operator.includes(x)){
        if(operator.includes(lastChar)){
            return false;
        }
    }

    return true;
}

let showInDisplay = (x) => {
    if(filter(x)){
        displayBox.innerText += x
    }

    if(displayBox.innerText.length > 10){
        displayBox.style.fontSize = "30px";
    }else if(displayBox.innerText.length > 5){
        displayBox.style.fontSize = "60px";
    }
}

let calc = _ => {
    if(!operator.includes(displayBox.innerText[displayBox.innerText.length-1])){
        displayBox.innerText = eval(displayBox.innerText);
    }
}

let clearAll = _ => displayBox.innerText = "";

let clearlast = _ => displayBox.innerText = displayBox.innerText.substring(0,displayBox.innerText.length-1);