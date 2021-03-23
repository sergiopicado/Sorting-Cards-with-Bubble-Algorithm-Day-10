let randomCorner = [];
let randomCenter = [];

function createCards(option) {
    if (option == 0) {
        numberOfCards = document.getElementById("numberOfCardsInput").value;

        for (let i = 0; i < numberOfCards; i++) {
            // Number Generator

            CenterSymbolArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

            CornerSymbolArray = [
                // Spades (Black)   
                '<p style="color:black;">&#9824</p>',
                // Clubes (Black)
                '<p style="color:black;">&#9827</p>',
                // Hearts (Red)
                '<p style="color:red;">&#9829</p>',
                // Diamonds (Red)
                '<p style="color:red;">&#9830</p>'
            ];
            randomCorner.push(CornerSymbolArray[Math.floor(Math.random() * 4)]);
            randomCenter.push(CenterSymbolArray[Math.floor(Math.random() * 13)]);
            Draw(randomCorner[i], randomCenter[i], 1)
        };

    }
    if (option == 1) {

        for (let i = 0; i < randomCenter.length; i++) {
        
            Draw(randomCorner[i], randomCenter[i], 2)
        };

    }
    if (option == 2) {
   
    }
    else {
        console.log("Opción no válida")
    }

}

function Draw(randomCorner, randomCenter, int) {


    drawArray = document.getElementById("cardDrawLoop"+int).innerHTML += ['<div id="CardDraw"><div id="CardBody"> <div id="ThreeSymbols"> <div id="leftTopSymbolDiv"><div id="leftCornerSymbol">' + randomCorner + '</div></div><div id="centerSymbolDiv"><div><h1 id="centerSymbol">' + randomCenter + '</h1> </div></div> <div id="rightBottomSymbolDiv"><div id="rightCornerSymbol">' + randomCorner + '</div></div></div></div></div>']

};
const BubbleSort = () => {
   
    let arr = randomCenter;
    let arrCorner = randomCorner;

    let wall = arr.length - 1;
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            if (arr[index] > arr[index + 1]) {
                let aux = arr[index];
                let aux1 = arrCorner[index];

                arr[index] = arr[index + 1];
                arrCorner[index] = arrCorner[index + 1];

                arr[index + 1] = aux;
                arrCorner[index + 1] = aux1;
            }
            index++;
        }
        wall--;
    }

    createCards(1);

    document.getElementById("bubbleSortDiv").innerHTML = arr;

};










