const apiKey = 'eeb2955a3047c339352d64892f0a4122';

async function getWeather(cidade){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt`)
        // Transferencia de dados
        const data = await response.json();
        
    }
    catch(error){
        console.error()
    }
}
let botaoClima = document.getElementById('get-weather')

botaoClima.addEventListener('click', function(){
    let cidade = document.querySelector('city').value;

    if(cidade){
        getWeather(cidade)
    }else{
        alert("erro ao acessar os dados")
    }
})


// assincrona: que não acontece em tempo real
// sincrona: que acontece em tempo real