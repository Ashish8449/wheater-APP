var $eeM8M$countrycodelookup = require("country-code-lookup");

/*========================================================================
                        elements
=======================================================================*/ const $e56387dde1f0519e$var$body =
  document.querySelector("body");
const $e56387dde1f0519e$var$inputBoxId = document.querySelector("input");
const $e56387dde1f0519e$var$city = document.querySelector(".city");
const $e56387dde1f0519e$var$date = document.querySelector(".date");
const $e56387dde1f0519e$var$temp = document.querySelector(".temp");
const $e56387dde1f0519e$var$minMax = document.querySelector(".minMax");
const $e56387dde1f0519e$var$weather = document.querySelector(".weather");
// console.log(weather);
/*========================================================================
                       funtions:
=======================================================================*/ async function $e56387dde1f0519e$var$getData(
  cityName
) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ebd7b2e73b4cd4b0a7b5931e071e7688`
  );
  if (response.ok) return response.json();
  // alert("Please enter correct city name");
  throw new Error(`Failed to fetch weather`);
}
async function $e56387dde1f0519e$var$cityData(cityName) {
  $e56387dde1f0519e$var$getData(cityName)
    .then((data) => {
      console.log(data);
      console.log($e56387dde1f0519e$var$body.style.background);
      const country = $eeM8M$countrycodelookup.byFips(`${data.sys.country}`);
      console.log(country);
      $e56387dde1f0519e$var$city.innerHTML = `${data.name} , ${country.country}`;
      $e56387dde1f0519e$var$date.innerHTML = new Date()
        .toUTCString()
        .slice(0, -13);
      console.log(new Date().toUTCString());
      $e56387dde1f0519e$var$temp.innerHTML = `${Math.floor(
        data.main.temp - 273.15
      )}&deg;`;
      $e56387dde1f0519e$var$minMax.innerHTML = ` ${Math.floor(
        data.main.temp_min - 273.15
      )} &deg;(min) - ${Math.floor(data.main.temp_max - 273.15)} &deg;c(max)`;
      $e56387dde1f0519e$var$weather.innerHTML = data.weather[0].main;
    })
    .catch((error) => {
      alert("Please enter correct city name");
    });
}
// console.log(lookup.byFips("UK"));
// cityData("almora");
/*======================================================================
               addEvent listner:
======================================================================*/ // console.log(inputBoxId);
window.addEventListener("load", (event) => {
  $e56387dde1f0519e$var$cityData("almora");
});
$e56387dde1f0519e$var$inputBoxId.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log($e56387dde1f0519e$var$inputBoxId.value);
    $e56387dde1f0519e$var$cityData($e56387dde1f0519e$var$inputBoxId.value);
    $e56387dde1f0519e$var$inputBoxId.value = "";
  }
});

//# sourceMappingURL=index.js.map
