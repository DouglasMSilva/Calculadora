function addIn(num) {
    let numero = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = numero + num;
}

function clean() {
    document.getElementById('display').innerHTML = "";
}

function back() {
    let resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calculate() {
    let resultado = document.getElementById('display').innerHTML;

    if(resultado) {
       document.getElementById('display').innerHTML = eval(resultado);

    } else {
        document.getElementById('display').innerHTML = 'Nada...';
    }

}