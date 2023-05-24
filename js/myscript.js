


const gridElement = document.getElementById('grid');
const button = document.querySelector('button');


button.addEventListener('click', function(){
    
    //resetta la griglia
    gridElement.innerHTML = "";


    //creazione di n. 100 celle con condizione for
for ( let i = 1; i < 101; i++){

    function createElement (tagName, className){
        const cellElement = document.createElement(tagName);
        cellElement.className = className;
        return cellElement;
    }



    //creo la funzione che mi permetta di generare quantità di numeri randomici desiderata e non ripetuti



    //creo variabile in cui creerò il tagname e la classe 
    const actualCell = createElement('div', 'cell');

    //creo una seconda variabile div
    const numberElement = document.createElement('div');

    //al nuovo elemento metto dentro i numeri dell'indice che crescerà di +1 ad ogni ciclo
    numberElement.append(i);

    //creo una classe per centrarla
    numberElement.classList.add('centered-number')

    //aggiunto al click il cambio di colore delle celle
    actualCell.addEventListener('click', function(){
        console.log(i);
        actualCell.classList.toggle('clicked');

    });

    //all'interno della variabile che richiama il div con classe grid metto i nuovi elementi creati (in questo caso div con classe cell)
    gridElement.appendChild(actualCell);

    //all'interno della cella creata metto i numeri
    actualCell.appendChild(numberElement);
}


    //creo la funzione che mi generi nuemri randomici
    function getRandNumb (minNumb, maxNumb){
        const randNumb = Math.floor(Math.random()* (maxNumb - minNumb) +1);
        return randNumb;
    }
    console.log(getRandNumb(1,5));

});






