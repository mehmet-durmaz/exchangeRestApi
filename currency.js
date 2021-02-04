class Currency{

    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }
    async exchange(){
        const responseCurrency = await fetch(this.url + this.firstCurrency);
        const dataCurrency = await responseCurrency.json();

        const parity = dataCurrency.rates[this.secondCurrency];
        const amount2 = Number(this.amount);
        const total = parity * amount2;

        return total;
        
    }
    changeAmount(amount){
        this.amount = amount;
    }

    changeFirstCurrrency(){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(){
        this.secondCurrency = newSecondCurrency;

    }




}