function updateTime() {
  // Belfast
  let belfastElement = document.querySelector("#belfast");
  if (belfastElement) {
    let belfastDateElement = belfastElement.querySelector(".date");
    let belfastTimeElement = belfastElement.querySelector(".time");
    let belfastTime = moment().tz("Europe/Belfast");
    belfastDateElement.innerHTML = belfastTime.format("MMMM Do YYYY");
    belfastTimeElement.innerHTML = belfastTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Dublin
  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");
    dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
    dublinTimeElement.innerHTML = dublinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Mexico City
  let mexicoCityElement = document.querySelector("#mexico_city");
  if (mexicoCityElement) {
    let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
    let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
    let mexicoCityTime = moment().tz("America/Mexico_City");
    mexicoCityDateElement.innerHTML = mexicoCityTime.format("MMMM Do YYYY");
    mexicoCityTimeElement.innerHTML = mexicoCityTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city"> 
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
  </div> 
  <a href="index.html">All cities</a> 
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
