const cityInput = document.querySelector("#cityInput");
const btn = document.querySelector("#btn");
const Cbtn = document.querySelector("#c");
const Fbtn = document.querySelector("#f");
const image = document.querySelector("#image");
const uv = document.querySelector("#uv");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const visible = document.querySelector("#visible");
let weatherCond

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const getApi = async () => {
    const city = cityInput.value;
    const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=QN73NVV3FFEZ9B8C732VAGLQB&contentType=json`;
    try {
        const response = await fetch(URL);
        const data = await response.json();
        updateWeatherData(data);
        updateWeekForecast(data);
        checkCondition(data.currentConditions.conditions);
    } catch (error) {
        console.log("The error is:", error);
    }
};

const updateWeatherData = (data) => {
    weatherCond = data.currentConditions.conditions
    document.querySelector("#temp").innerHTML = `${data.currentConditions.temp}°F`;
    document.querySelector("#city").innerHTML = `${data.resolvedAddress}`;
    document.querySelector("#desc").innerHTML = `${data.description}`;
    document.querySelector("#condition").innerHTML = `${data.currentConditions.conditions}`;
    document.querySelector("#sunset").innerHTML = `${data.currentConditions.sunset}`;
    document.querySelector("#sunrise").innerHTML = `${data.currentConditions.sunrise}`;
    document.querySelector("#time").innerHTML = `${data.currentConditions.datetime}`;
    uv.innerHTML = data.currentConditions.uvindex;
    humidity.innerHTML = `${data.currentConditions.humidity}%`;
    wind.innerHTML = `${data.currentConditions.windspeed} km/h`;
    visible.innerHTML = `${data.currentConditions.visibility} km`;
};

const updateWeekForecast = (data) => {
    const weekDiv = document.querySelector(".week");
    weekDiv.innerHTML = "";
    for (let i = 0; i < days.length; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("days");
        const dayOfWeek = document.createElement("p");
        dayOfWeek.classList.add("day");
        const d = data.days[i + 1].datetime;
        dayOfWeek.textContent = `${days[i]}, ${d[8]}${d[9]}`;
        const img = document.createElement("img");
        const temp = data.days[i].temp;
        img.src = getImageSource(temp);
        const temperature = document.createElement("p");
        temperature.textContent = `${temp}°F`;
        Fbtn.addEventListener("click", () => ferhn(temperature, temp));
        Cbtn.addEventListener("click", () => celc(temperature, temp));
        dayDiv.appendChild(dayOfWeek);
        dayDiv.appendChild(img);
        dayDiv.appendChild(temperature);
        weekDiv.appendChild(dayDiv);
    }
};

const getImageSource = (temp) => {
    if (temp < 32) return "images/snowy-6.svg";
    if (temp >= 32 && temp <= 50) return "images/snowy-2.svg";
    if (temp > 50 && temp <= 68) return "images/Partially cloudy.svg";
    if (temp > 68 && temp <= 104) return "images/Clear.svg";
};

const celc = (name, val) => {
    name.innerHTML = `${Math.floor((val - 32) * 0.555)}°C`;
};

const ferhn = (name, val) => {
    name.innerHTML = `${val}°F`;
};

const checkCondition = (val) => {
    if (val === weatherCond) {
        image.src = `images/${val}.svg`;
    } 
    if (weatherCond != val) {
        
        image.src = "images/Clear.svg";
    }
};

const btnClickHandler = () => {
    getApi();
};

btn.addEventListener("click", btnClickHandler);
Cbtn.addEventListener("click", () => {
    celc(document.querySelector("#temp"), document.querySelector("#temp").innerHTML.split("°")[0]);
});
Fbtn.addEventListener("click", () => {
    ferhn(document.querySelector("#temp"), document.querySelector("#temp").innerHTML.split("°")[0]);
});



getApi();
