


const gridElement = document.getElementById('grid');
const button = document.querySelector('button');


button.addEventListener('click', function(){
    
    //resetta la griglia
    gridElement.innerHTML = "";

    //creo variabile dove metterò i numeri generato casualmente
    const bombsNumber = randomNumber(1, 100, 16);
    console.log(bombsNumber);
    let isGameOver = false;
    let score = 0;


    //creazione di n. 100 celle con condizione for
for ( let i = 1; i < 101; i++){

    function createElement (tagName, className){
        const cellElement = document.createElement(tagName);
        cellElement.className = className;
        return cellElement;
    }

    //creo variabile in cui creerò il tagname e la classe 
    const actualCell = createElement('div', 'cell');

    //creo una seconda variabile div
    const numberElement = document.createElement('div');

    //al nuovo elemento metto dentro i numeri dell'indice che crescerà di +1 ad ogni ciclo
    numberElement.append(i);

    

    //creo una classe per centrarla
    numberElement.classList.add('centered-number');

    //aggiunto al click il cambio di colore delle celle
    actualCell.addEventListener('click', function(){

        if(!isGameOver){
            if(bombsNumber.includes(i)){
                actualCell.classList.add('clicked-lost');
                alert('Hai perso!, tentativi: ', +score);
                isGameOver = true;
            } else {
                actualCell.classList.add('clicked');  
                score ++;
            }
        }else{
            alert('Hai perso!!');
        }

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

});

