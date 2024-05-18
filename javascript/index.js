function setDateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = document.querySelector("#london .date");
  let londonTimeElement = document.querySelector("#london .time");

  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("dddd MMMM Do YYYY");

  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("HH:mm:ss [<small>]A[<small>]");

  //   let newYorkElement = document.querySelector("#new-york");
  //   let newYorkDateElement = document.querySelector("#new-york .date");
  //   let newYorkTimeElement = document.querySelector("#new-york .time");

  //   newYorkDateElement.innerHTML = moment()
  //     .tz("America/New_York")
  //     .format("dddd MMMM Do YYYY");

  //   newYorkTimeElement.innerHTML = moment()
  //     .tz("America/New_York")
  //     .format("HH:mm:ss [<small>]A[<small>]");
}

setDateTime();
setInterval(setDateTime, 1000);
