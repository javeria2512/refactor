const forecast = [
    {
        day: "monday",
        weather: "lightning"
    },
    {
        day: "tuesday",
        weather: "cloudy"
    },
    {
        day: "wednesday",
        weather: "windy"
    },
    {
        day: "thursday",
        weather: "sunny"
    },
    {
        day: "friday",
        weather: "rain"
    },
    {
        day: "saturday",
        weather: "lightning"
    },
    {
        day: "sunday",
        weather: "fog"
    },
]

function initialize() {
    let cards = document.querySelector("body");
     for(let i=0; i < forecast.length; i++){
     
        cards.innerHTML += 
        ` <section class="container">
        <h1 class="text-info">"${forecast[i].day}</h1>
        <section>
            <img src="images/${forecast[i].weather}.svg" alt="">
        </section>`
    }
}