


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


        //creo la funzione che mi generi nuemri randomici
        function getRandNumb (minNumb, maxNumb){
            const randNumb = Math.floor(Math.random()* (maxNumb - minNumb) +1);
            return randNumb;
        }
    
        
    
        //creo la funzione che mi permetta di generare quantità di numeri randomici desiderata e non ripetuti
        function randomNumber (minumNumb, maximNumb, elementNumb){
            const numberList = [];
        
            while (numberList.length < elementNumb){
            //richiamo la funzione dei numeri randomici creati precedentemente
                const newRandNumb = getRandNumb (minumNumb, maximNumb);
                if(!numberList.includes(newRandNumb)){
                    numberList.push(newRandNumb);
                }
            }
            return numberList;
        }
            console.log (randomNumber(1, 100, 16));

        

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

        //se clicca una delle celle in cui presente il numero random generato dal computer allora ha perso

    });

    //all'interno della variabile che richiama il div con classe grid metto i nuovi elementi creati (in questo caso div con classe cell)
    gridElement.appendChild(actualCell);

    //all'interno della cella creata metto i numeri
    actualCell.appendChild(numberElement);

}

});

