// Belfast
let belfastElement = document.querySelector("#belfast");
let belfastDateElement = belfastElement.querySelector(".date");
let belfastTimeElement = belfastElement.querySelector(".time");
let belfastTime = moment().tz("Europe/Belfast");
belfastDateElement.innerHTML = belfastTime.format("MMMM Do YYYY");
belfastTimeElement.innerHTML = belfastTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

// Sydney
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");
let sydneyTime = moment().tz("Australia/Sydney");
sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>]A[</small>]");
