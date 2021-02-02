class Currency{

    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest";
        this.amount = null;
    }
    async exchange(){
        const responseCurrency = await fetch(this.url);
        const dataCurrency = await responseCurrency.json();

        return dataCurrency;
        
    }




}