type GouvCity = {
  nom: string;
  codeDepartement: string;
  population: number;
};

let cityList: string[] = []; // tableau de string

const list = document.querySelector("#list");
const input = document.querySelector("#input") as HTMLInputElement | null;

input?.addEventListener("keyup", (e) => {
  if (e.target) {
    const target = e.target as HTMLInputElement;
    getCityList(target.value);
  }
});

render();
input?.focus();

const compareCity = (city1: GouvCity, city2: GouvCity) =>
  city2.population - city1.population;

async function getCityList(cityName: string) {
  const data = await fetch(`https://geo.api.gouv.fr/communes?nom=${cityName}`);
  const cityArray: GouvCity[] = await data.json();
  cityArray.sort(compareCity);
  const trunc = cityArray.slice(0, 10);
  cityList = trunc.map(
    (cityObject) => `${cityObject.nom} (${cityObject.codeDepartement})`
  );
  render();
}

function render() {
  const elementsToRemove = list?.querySelectorAll("li");
  elementsToRemove?.forEach((element) => {
    list?.removeChild(element);
  });
  cityList.forEach((itemText) => {
    const item = document.createElement("li");
    item.textContent = itemText;
    list?.appendChild(item);
  });
}
