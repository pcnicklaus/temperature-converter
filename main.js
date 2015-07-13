var temperature = prompt("What temperature do you want to convert?", "Please enter your temp here");
var answer = prompt("Do you want this converted to Fahrenheit or Celcius", "Please enter Fahrenheit or Celcius").toUpperCase();


if (answer === "FAHRENHEIT") {
  alert("It is " + (temperature * 1.8 + 32) + " degrees Fahrenheit!");
} else {
  alert("It is " + ((temperature - 32) / 1.8) + " degrees Celcius converted from Fahrenheit!");
}
