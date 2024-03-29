let cityList = []; // tableau de string

const list = document.querySelector("#list")
const input = document.querySelector("#input");

document.

input.addEventListener("keyup", (e) => {
  getCityList(e.target.value);
});

render();
input.focus();

const compareCity = (city1, city2) => city2.population - city1.population;

async function getCityList(cityName) {
  const data = await fetch(`https://geo.api.gouv.fr/communes?nom=${cityName}`);
  cityArray = await data.json();
  cityArray.sort(compareCity);
  const trunc = cityArray.slice(0, 10);
  cityList = trunc.map(
    (cityObject) => `${cityObject.nom} (${cityObject.codeDepartement})`
  );
  render();
}

function render() {
  const elementsToRemove = list.querySelectorAll("li")
  elementsToRemove.forEach((element) => {
    list.removeChild(element);
  });
  cityList.forEach((itemText) => {
    const item = document.createElement("li");
    item.textContent = itemText;
    list.appendChild(item);
  });
}
