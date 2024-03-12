const frase = 'Frase repetida utilizando while (enquanto)';
let resultado = '';
let contador = 1;
const button = document.querySelector('button')

//style="background-color: ${};"

while (contador <= 20) {
    function gerarCorAleatoria() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    resultado += `<p style="background-color: ${gerarCorAleatoria()};"> essa é a frase: ${contador} <br> ${frase} </p> <br>`;
    contador++;
}

document.getElementById('frase').innerHTML = resultado;