let a = "";
let b = "";
let sign = "";
let finish = false;
let reset = document.querySelector(".calculator__button_reset");
let buttons = document.querySelector(".calculator__buttons");

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "%"];
const action = ["+", "-", "X", "/", "neg", "%"];
const out = document.querySelector(".calculator__input");

function clearAll () {
   a = "";
   b = "";
   sign = "";
   finish = false;
   out.value = 0;
}

reset.addEventListener("click", clearAll);

buttons.addEventListener("click", (event) => {
    if(!event.target.classList.contains("calculator__button")) return;
    if(event.target.classList.contains("calculator__button_reset")) return;
    out.value = " ";
    const key = event.target.value;

    if(digit.includes(key)) {
         //отсюда норм код
         if(b === "" && sign === "") {
            a += key;
            out.value = a; //до сюда номр код
        }
         else if(a !== "" && b !== "" && finish) {
         b = key;
         finish = false;
         out.value = b;
         //try
        } 
        else {
         b += key;
         out.value = b;
        }
        return;
    }
    if(action.includes(key)) {
        sign = key;
        out.value = sign;
        return;
    }

    if(key === "=") {
        if(b === "") b = a;
        switch(sign) {
         case "+":
            a = (+a) + (+b);
            break;
         case "-":
            a = a - b;
            break;
         case "X":
            a = a * b;
            break;
         case "/":
            if(b === "0") {
                out.value = "Error";
                a = "";
                b = "";
                sign = "";
                return;
            }
            a = a / b;
            break;
        //  case "%":
        //         a = (a * b) / 100;
        //         break;
        }
        finish = true;
        out.value = a;
    }
});