const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const currency = new Currency("USD","TRY");


eventListeners();

function eventListeners(){

    amountElement.addEventListener("input",exchangeCurreny);
    
    firstSelect.onchange = function(){
        
        currency.changeFirstCurrrency(firstSelect.options[firstSelect.selectedIndex].textcontent);

    }
    secondSelect.onchange = function(){

        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
    }
}

function exchangeCurreny(){
    currency.changeAmount(amountElement.value);
   
    currency.exchange()
   .then(data => console.log(data))
   .catch(err => console.log(err));
}
