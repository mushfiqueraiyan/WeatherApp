const locate = document.querySelector("#city")
const deg = document.querySelector("#deg")
const SearchBox = document.querySelector(".inputSection input")
const search = document.querySelector(".inputSection button")
const wind = document.querySelector('#wind')
const feel = document.querySelector('#feel')
const p = document.querySelector("p");
const weatherSection = document.querySelector(".weatherSection")


const fetched = async (city) => { 
let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52fe878fc6f85f3f6110f04e3975e02e&units=metric`);
let data = await response.json();
console.log(data);      
        
deg.innerHTML = Math.round(data.main.temp) + "°C";
locate.innerHTML = data.name;
wind.innerHTML = data.wind.speed ;
feel.innerHTML = data.main.feels_like + "°C" ;

}

search.addEventListener('click', () => {
fetched(SearchBox.value)

SearchBox.value = "";


})







