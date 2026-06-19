
let display = document.querySelector("#input");
let btns = document.querySelectorAll("button");

let inpVlu = " ";   //empty string to store the input values
let resultShow = false;

let btnAry = Array.from(btns);  //makr array of all btns

btnAry.forEach((btn) => {        // run over each btn in array
    //   console.log(btn);

    btn.addEventListener("click", (event) => {
        //  console.log(event.target.innerHTML);


        btnClk = event.target.innerHTML;  // btn we click

        if (btnClk == "AC") {
            inpVlu = "";
            display.value = inpVlu;
            resultShow = false;
        }
        else if (btnClk == "DEL") {
            inpVlu = inpVlu.slice(0, -1);
            display.value = inpVlu;
            resultShow = false;
        }
        else if (btnClk == "=") {
            try {
                inpVlu = eval(inpVlu);  // eval convert str to num and then apply multiplication
                display.value = inpVlu;
                resultShow = true;
            } catch {
                display.value = "Error";
            }
        }
        else {

            if (resultShow) {
                inpVlu = btnClk          // just next click btn show
                resultShow = false;
            } else {
                inpVlu += btnClk          // click btn inpVlu ma stor ho jie ga
            }
            display.value = inpVlu;     // input box ma click btn(inpVlue) show ho ga

        }
    });
});





// ==== KEYBOARD AND CLICK =====


/*
let display = document.querySelector("#input");
let btns = document.querySelectorAll("button");

let inpVlu = " ";

let btnAry = Array.from(btns);

function handleInput(value) {
    if (value === "AC" || value === "Escape") {
        inpVlu = "";
        display.value = inpVlu;
    } 
    else if (value === "DEL" || value === "Backspace") {
        inpVlu = inpVlu.slice(0, -1);
        display.value = inpVlu;
    } 
    else if (value === "=" || value === "Enter") {
        try {
            inpVlu = eval(inpVlu);
            display.value = inpVlu;
        } catch {
            display.value = "Error";
        }
    } 
    else {
        inpVlu += value; // Append the input value
        display.value = inpVlu; // Update the display
    }
}

btnAry.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        handleInput(event.target.innerHTML); 
    });
});


// Add keyboard support
document.addEventListener("keydown", (event) => {
    if (event.shiftKey) {
        if (event.key === "+" || event.key === "*" || event.key === "%" || event.key === "/" || event.key === "-") {
            handleInput(event.key);
        }
    } 
    else {
        handleInput(event.key); 
    }
});

*/
