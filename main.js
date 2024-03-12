const button = document.querySelector('button');
const body = document.querySelector('body');
body.style.backgroundImage = 'url(img/desenho-de-animais-fofos-na-selva_160606-11.avif)';
container.style.backgroundColor = '#339c33';

button.addEventListener('click', () => {
    function geradorTabuada(params) {
        var numInput = document.getElementById('numInput').value;
        var tabuadaDiv = document.getElementById('tabuada');
        tabuadaDiv.innerHTML = '';

        if (!numInput || isNaN(numInput) || numInput < 1) {
            tabuadaDiv.innerHTML = '<p>Por favor, insira um número válido.</p>';
            return;
        }

        body.style.backgroundImage = '';
        var tableHTML = `<h3>Tabuada do ${numInput}</h3> <table> <tr> <th> Número </th> <th class = "espacamento"> Resultado </th> </tr>`;

        for (let i = 1; i <= 10; i++) {
            tableHTML += "<tr><td>" + numInput + " x " + i + `</td><td >` + (numInput * i) + "</td></tr>";
        }


        function adcImg(params) {
            var container = document.getElementById('container');
            var img = document.createElement('img');
              if (numInput == 1) {
            img.src = "img/ursoMarrom.PNG";
            tabuadaDiv.appendChild(img);
            container.style.borderColor = 'black';
            container.style.backgroundColor = 'white'
            body.style.backgroundColor = 'black'
        }  
              if (numInput == 2) {
            img.src = "img/leaoLaranja.PNG";
            tabuadaDiv.appendChild(img);
            container.style.borderColor = 'black';
            container.style.backgroundColor = 'white'
            body.style.backgroundColor = '#d8a545'
        }  
              if (numInput == 3) {
            img.src = "img/ElefanteAzul.PNG";
            tabuadaDiv.appendChild(img);
            container.style.borderColor = 'black';
            container.style.backgroundColor = 'white'
            body.style.backgroundColor = '#18438d'
        }  
              if (numInput == 4) {
            img.src = "img/macacoMarrom.PNG";
            tabuadaDiv.appendChild(img);
            container.style.borderColor = '#ac6d00';
            container.style.backgroundColor = 'white'
            body.style.backgroundColor = '#e3a334'
        }  
              if (numInput == 5) {
            img.src = "img/passaroVermelho.PNG";
            tabuadaDiv.appendChild(img);
            container.style.borderColor = 'red';
                        container.style.backgroundColor = 'white'
            body.style.backgroundColor = 'black'
        }  
              if (numInput == 6) {
            img.src = "img/tartarugaVerde.PNG";
            tabuadaDiv.appendChild(img);
            container.style.borderColor = 'green';
                        container.style.backgroundColor = 'white'
            body.style.backgroundColor = 'black'
        }  
              if (numInput == 7) {
            img.src = "img/tartarugaVerde.PNG";
            tabuadaDiv.appendChild(img);
            container.style.borderColor = 'red';
                        container.style.backgroundColor = 'white'
            body.style.backgroundColor = 'black'
        }  
              if (numInput == 8) {
            img.src = "img/tartarugaVerde.PNG";
            tabuadaDiv.appendChild(img);
            container.style.borderColor = 'red';
                        container.style.backgroundColor = 'white'
            body.style.backgroundColor = 'black'
        }  
              if (numInput == 9) {
            img.src = "img/tartarugaVerde.PNG";
            tabuadaDiv.appendChild(img);
            container.style.borderColor = 'red';
                        container.style.backgroundColor = 'white'
            body.style.backgroundColor = 'black'
        }  else if (numInput >= 10){
            img.src = "img/tartarugaVerde.PNG";
            tabuadaDiv.appendChild(img);
            container.style.borderColor = 'red';
                        container.style.backgroundColor = 'white'
            body.style.backgroundColor = 'black'
        }
        }        
        
        tableHTML += '</table>';
        tabuadaDiv.innerHTML = tableHTML;
        adcImg();
    }

    geradorTabuada();
});
