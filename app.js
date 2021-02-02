const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");
const currency = new Currency();


eventListeners();

function eventListeners(){

    amount.addEventListener("input",exchangeCurreny);
    
    firstCurrency.onchange = function(){

    }
    secondCurrency.onchange = function(){

    }
}

function exchangeCurreny(){
   currency.exchange()
   .then(data => console.log(data))
   .catch(err => console.log(err));
}
