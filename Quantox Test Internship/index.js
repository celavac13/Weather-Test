//placeholder data for weather
const weatherData = {
    tempUnit: "C",
    windSpeedUnit: "m/s",
    days: [
        {day: "Mon", temp: 22, windDirection: "northEast", windSpeed: 10, type: "sunny"},
        {day: "Tue", temp: 14, windDirection: "northWest", windSpeed: 14, type: "rainy"},
        {day: "Wed", temp: 17, windDirection: "southEast", windSpeed: 20, type: "cloudy"},
        {day: "Thu", temp: 20, windDirection: "southWest", windSpeed: 15, type: "sunny"},
        {day: "Fri", temp: 19, windDirection: "northWest", windSpeed: 11, type: "rainy"},
        {day: "Sat", temp: 24, windDirection: "northEast", windSpeed: 10, type: "sunny"},
        {day: "Sun", temp: 25, windDirection: "southEast", windSpeed: 9, type: "sunny"}
    ]
};

//holding arrows for wind direction
const windDirection = {
    northEast: "&#8599;",
    northWest: "&#x2196;",
    southEast: "&#8600;",
    southWest: "&#8601;"
};

//holding images for weather
const weatherType = {
    sunny: "images/sun.png",
    rainy: "images/rain.png",
    cloudy: "images/cloud.png"
};

const holderDiv = document.querySelector("#holder");

//looping through days and creating list elements
weatherData["days"].forEach(element => {
    const listItem = document.createElement("div");
    const listDay = document.createElement("h1");
    const listTemp = document.createElement("p");
    const listWind = document.createElement("p");
    const listType = document.createElement("img");

    holderDiv.appendChild(listItem);
    listItem.appendChild(listDay);
    listItem.appendChild(listTemp);
    listItem.appendChild(listWind);
    listItem.appendChild(listType);

    listItem.className = "list-items";
    //adding event listener for expanding widgets
    listItem.addEventListener("click", () => {
        if (listWind.style.display == "none"){
            listWind.style.display = "block";
            listType.style.display = "block";
        } else {
            listWind.style.display = "none";
            listType.style.display = "none";
        }
    });

    //adding content for list elements properties
    listDay.textContent = element["day"];

    listTemp.textContent = `${element["temp"]} ${weatherData.tempUnit}`;
    listTemp.className = "temperature";

    listWind.innerHTML = `${windDirection[element["windDirection"]]} ${element["windSpeed"]}${weatherData.windSpeedUnit}`;
    listWind.style.display = "none";

    listType.src = weatherType[element["type"]];
    listType.alt = element["type"];
    listType.className = "weather-image";
    listType.style.display = "none";
});

const converterTemp = document.querySelector("#convert-temp");
const temperature = document.querySelectorAll(".temperature");
let tempToggle = true;

//adding event listener for converting button
converterTemp.addEventListener("click", () => {
    if(tempToggle) {
        temperature.forEach(element => {
            const temp = parseInt(element.textContent);
            element.textContent = `${temp + 273} K`;
        });
        converterTemp.textContent = "Convert to Celsius";
        tempToggle = false;

    } else {
        temperature.forEach(element => {
            const temp = parseInt(element.textContent);
            element.textContent = `${temp - 273} C`;
        });
        converterTemp.textContent = "Convert to Kelvin";
        tempToggle = true;
    }
});

