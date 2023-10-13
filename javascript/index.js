// Belfast
let belfastElement = document.querySelector("#belfast");
let belfastDateElement = belfastElement.querySelector(".date");
let belfastTimeElement = belfastElement.querySelector(".time");
let belfastTime = moment().tz("Europe/Belfast");
belfastDateElement.innerHTML = belfastTime.format("MMMM Do YYYY");
belfastTimeElement.innerHTML = belfastTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
