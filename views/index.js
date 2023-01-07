const airQualityCard = document.getElementById("air-quality-card");
const temperatureCard = document.getElementById("temperature");
const audioCard = document.getElementById("audio");
const displayCard = document.getElementById("display");
const lightingCard = document.getElementById("lighting");
const parentDiv = document.getElementById("parent-div");
const cardWrapper1 = document.getElementById("card-wrapper");

function commonLogic(card) {
  card.parentNode.removeChild(card);
  parentDiv.style.display = "flex";
  parentDiv.style.justifyContent = "center";
  cardWrapper1.style.marginTop = "30px";
}

function removeAirQualityCard() {
  commonLogic(airQualityCard);
}

function removeTemperatureCard() {
  commonLogic(temperatureCard);
}

function removeAudioCard() {
  commonLogic(audioCard);
}

function removeDisplayCard() {
  commonLogic(displayCard);
}

function removeLightingCard() {
  commonLogic(lightingCard);
}
