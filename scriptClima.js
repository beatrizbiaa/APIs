async function getWeather () {
    //Criar uma variavel para pegar o valor do intput
    var cidade = document.getElementById('city').value
    
    //Conectar com API - JQUERY
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //Variavel para consumir o JSON
    var tempCelsius = resposta.data.main.temp

    //Imprimir no FRONT END 
    document.getElementById('temperatura').innerHTML = `A tempertatura atual da cidade de ${cidade} é de: ${tempCelsius.toFixed(0)} °C `


}

//Chamar a função
getWeather()