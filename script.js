const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convert() {
    const inputCurrencyValue= document.querySelector(".input-currency").value
    const currencyValeuToConvert = document.querySelector(".currency-value-to-convert")// valor em real
    const currencyValeuConverted = document.querySelector(".currency-value") //outras moedas

   

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.4
    const bitcoinToday = 172.650

    

    if(currencySelect.value == "dolar") {
        currencyValeuConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
        }).format(inputCurrencyValue / dolarToday)
    }


    if(currencySelect.value == "euro"){
        currencyValeuConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }


    if(currencySelect.value == "libra"){
        currencyValeuConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }    
    

    if (currencySelect.value === "bitcoin") {
        const bitcoinRate = 172.650; 
        const bitcoinValue = inputCurrencyValue * bitcoinRate;
      
        currencyValeuConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BTC",
          minimumFractionDigits: 9, 
        }).format(inputCurrencyValue / bitcoinToday);
      }

    

    currencyValeuToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)


  

}


    function changeCurrency(){
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")

        if(currencySelect.value == "dolar"){
            currencyName.innerHTML = "Dolar Americano"
            currencyImage.src = "./assets/dolar.png"
        }

        if(currencySelect.value == "euro"){
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro.png"
        }

        if(currencySelect.value == "libra"){
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/libra-1.png"
        }

        if(currencySelect.value == "bitcoin"){
            currencyName.innerHTML = "Bitcoin"
            currencyImage.src = "./assets/bitcoin-1.png"
        }

        

        convert()


    }

    currencySelect.addEventListener("change",changeCurrency)
    convertButton.addEventListener("click", convert)
