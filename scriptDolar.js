
fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('dolarAtual').innerHTML = "R$ " + economia.USDBRL.bid
    document.getElementById('dolarMaior').innerHTML = "R$ " + economia.USDBRL.high
    document.getElementById('dolarMenor').innerHTML = "R$ " + economia.USDBRL.low
})