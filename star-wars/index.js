let personnages = [];
let fetchStatus = "loading"; // loading | succeded | error

const title = document.querySelector("#title");

render();
getCaracters();

async function getCaracters() {
  const data = await fetch("https://swapi.dev/api/people");
  const jsonData = await data.json();
  personnages = [...jsonData.results];
  fetchStatus = "succeded";
  render();
}

function render() {
  switch (fetchStatus) {
    case "loading":
      title.textContent = "Chargement...";
      break;
    case "error":
      title.textContent = "Une erreur s'est produite";
      break;
    default:
      title.textContent = "Ok";
      personnages.forEach((personage) => {
        const persDiv = document.createElement("div");
        persDiv.classList.add("sw_char");
        const caracterTitle = document.createElement("h3");
        caracterTitle.textContent = personage.name;
        persDiv.appendChild(caracterTitle);
        document.querySelector("#caracters").appendChild(persDiv);
      });
      break;
  }
}

render();
