

function appendToDisplay(input){
    const display = document.getElementById("display");
    display.value += input;
}


function clearDisplay(){
    const display = document.getElementById("display");
    display.value = "";
}


function calculate(){
    try{
        const display = document.getElementById("display");
    display.value = eval(display.value);
    }
    catch(error){
    display.value = "Error";
    }
}