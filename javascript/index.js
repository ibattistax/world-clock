function setDateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = document.querySelector("#london .date");
    let londonTimeElement = document.querySelector("#london .time");

    londonDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("dddd MMMM Do YYYY");

    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("HH:mm:ss [<small>]A[<small>]");
  }
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = document.querySelector("#new-york .date");
    let newYorkTimeElement = document.querySelector("#new-york .time");

    newYorkDateElement.innerHTML = moment()
      .tz("America/New_York")
      .format("dddd MMMM Do YYYY");

    newYorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("HH:mm:ss [<small>]A[<small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

setDateTime();
setInterval(setDateTime, 1000);
