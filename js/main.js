const lookup = require("country-code-lookup");

/*========================================================================
                        elements
=======================================================================*/
const body = document.querySelector("body");
const inputBoxId = document.querySelector("input");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const minMax = document.querySelector(".minMax");
const weather = document.querySelector(".weather");
console.log(weather);

/*========================================================================
                       funtions:
=======================================================================*/
async function getData(cityName) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ebd7b2e73b4cd4b0a7b5931e071e7688`
  );

  if (response.ok) {
    return response.json();
  }
  // alert("Please enter correct city name");
  throw new Error(`Failed to fetch weather`);
}

async function cityData(cityName) {
  getData(cityName)
    .then((data) => {
      console.log(data);
      const country = lookup.byFips(`${data.sys.country}`);
      console.log(country);
      city.innerHTML = `${data.name} , ${country.country}`;
      date.innerHTML = new Date().toUTCString().slice(0, -13);
      console.log(new Date().toUTCString());
      temp.innerHTML = `${Math.floor(data.main.temp - 273.15)}&deg;`;
      minMax.innerHTML = ` ${Math.floor(
        data.main.temp_min - 273.15
      )} &deg;(min) - ${Math.floor(data.main.temp_max - 273.15)} &deg;c(max)`;
      weather.innerHTML = data.weather[0].main;
    })
    .catch((error) => {
      alert("Please enter correct city name");
    });
}
// console.log(lookup.byFips("UK"));
// cityData("almora");

/*======================================================================
               addEvent listner:
======================================================================*/
// console.log(inputBoxId);
window.addEventListener("load", (event) => {
  cityData("almora");
});
inputBoxId.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log(inputBoxId.value);
    cityData(inputBoxId.value);
    inputBoxId.value = "";
  }
});
