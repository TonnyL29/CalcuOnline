let operandoA = 0;
let operacion = "";
let operandoB = 0;
let parcial = 0;
let res;


function init(){
    const display = document.getElementById('IDdisplay');
    const C = document.getElementById('C');
    const x100to = document.getElementById('x100to');
    const division = document.getElementById('division');
    const cero = document.getElementById('cero');
    const uno = document.getElementById('uno');
    const dos = document.getElementById('dos');
    const tres = document.getElementById('tres');
    const cuatro = document.getElementById('cuatro');
    const cinco = document.getElementById('cinco');
    const seis = document.getElementById('seis');
    const siete = document.getElementById('siete');
    const ocho = document.getElementById('ocho');
    const nueve = document.getElementById('nueve');
    const suma = document.getElementById('suma');
    const resta = document.getElementById('menos');
    const multi = document.getElementById('multi');
    const punto = document.getElementById('punto');
    const igual = document.getElementById('igual');
    const posneg = document.getElementById('posneg');

    //Eventos

    uno.onclick = function(evento){
        display.textContent = display.textContent + "1";
    }
    dos.onclick = function(evento){
        display.textContent = display.textContent + "2";
    }
    tres.onclick = function(evento){
        display.textContent = display.textContent + "3";
    }
    cuatro.onclick = function(evento){
        display.textContent = display.textContent + "4";
    }
    cinco.onclick = function(evento){
        display.textContent = display.textContent + "5";
    }
    seis.onclick = function(evento){
        display.textContent = display.textContent + "6";
    }
    siete.onclick = function(evento){
        display.textContent = display.textContent + "7";
    }
    ocho.onclick = function(evento){
        display.textContent = display.textContent + "8";
    }
    nueve.onclick = function(evento){
        display.textContent = display.textContent + "9";
    }
    cero.onclick = function(evento){
        display.textContent = display.textContent + "0";
    }
    punto.onclick = function(evento){
        display.textContent = display.textContent + ".";
    }
    C.onclick = function(evento){
        resetear();
        limpiar();
    }

    suma.onclick = function(evento){
        let b = display.textContent;
        resetear();
        console.log(b);
        if (operandoA == 0){
            operandoA = b; 
            operacion = "+";
            resetear();
        }
        else{
            operandoB = sumar(b, operandoA);
            resetear();
        }
    }

    resta.onclick = function(evento){
        let b = display.textContent;
        resetear();
        if (operandoA == 0){
            operandoA = b;
            operacion = "-"
            resetear();
        }
        else{
            operandoB = restar(b, operandoA);
            resetear();
        }
    }

    igual.onclick = function(evento){
        equal();
    }

    x100to.onclick = function(evento){
        equal();
    }

    posneg.onclick = function(evento){
        display.textContent = parseFloat(display.textContent) * (-1);
    }

    multi.onclick = function(evento){
        let b = display.textContent;
        resetear();
        if (operandoA == 0){
            operandoA = b;
            operacion = "*"
            resetear();
        }
        else{
            operandoB = multip(b, operandoA);
            resetear();
        }
    }

    division.onclick = function(evento){
        let b = display.textContent;
        resetear();
        if (operandoA == 0){
            operandoA = b;
            operacion = "/"
            resetear();
        }
        else{
            operandoB = div(b, operandoA);
            resetear();
        }
    }




    function resetear(){
        display.textContent = "";
    }
    function sumar(a, b){
        parcial = parseInt(a) + parseInt(b);
        console.log(res);
        return parcial;
    }
    function restar(a, b){
        parcial = parseInt(a) - parseInt(b);
        console.log(res);
        return parcial;
    }
    function multip(a, b){
        parcial = parseFloat(a) * parseFloat(b);
        console.log(res);
        return parcial;
    }
    function div(a, b){
        parcial = parseFloat(a) / parseFloat(b);
        console.log(res);
        return parcial;
    }





    function equal (){
        operandoB = display.textContent;
        switch(operacion){
            case "+":
                res =  parseInt(operandoA) + parseInt(operandoB);
                break;
            case "-":
                res = parseInt(operandoA) - parseInt(operandoB);
                break;
            case "*":
                res = parseFloat(operandoA) * parseFloat(operandoB);
                break;
            case "/":
                res = parseFloat(operandoA) / parseFloat(operandoB);
                break;
            case "%":
                res = (parseInt(operandoB) / 100) * parseInt(operandoA);
                break;
        }
        display.textContent = res;
        limpiar();
    }

    function limpiar (){
        operandoA = 0;
        operandoB = 0;
        a = 0;
    }
}

