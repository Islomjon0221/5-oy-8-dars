import { dataCountry, getCloud, getData, validate } from "./function.js";

const input = document.getElementById("input")
const weather = document.getElementById("weather")
const button = document.getElementById("btn")
const del = document.getElementById("ok")

button && button.addEventListener('click', function() {
     if(validate()) {
          getCloud(input.value).then((data) => dataCountry(data));
          input.value = "";
          del.setAttribute("class" , "add");
     }

});
