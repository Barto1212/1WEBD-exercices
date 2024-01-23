import { getSession, saveSession } from "./sessions";
// --------------------- INITIALISATION  ---------------------
let cookieNum = getSession();
let grandMaCount = 0;
render();

const clickButton = document.querySelector("#cookie-button");
const addGrandMa = document.querySelector("#add-grand-ma");

setInterval(() => {
  addCookie(grandMaCount);
  render();
  saveSession(cookieNum);
}, 1000);

clickButton?.addEventListener("click", () => {
  addCookie(1);
  render();
});

addGrandMa?.addEventListener("click", () => {
  grandMaCount++;
  render();
});

// --------------------- FONCTIONS  ---------------------

function addCookie(cookieToAdd: number) {
  cookieNum = cookieNum + (cookieToAdd ?? 1);
}

function render() {
  const singuliercookie = cookieNum === 0 || cookieNum === 1;
  const cookieCount = document.getElementById("cookie-count");
  if (cookieCount) {
    cookieCount.innerHTML = `cookie${
      singuliercookie ? "" : "s"
    } : ${cookieNum}`;
  }
  const singulierGrandMere = grandMaCount === 0 || grandMaCount === 1;
  const grandMaCountId = document.getElementById("grand-ma-count");
  if (grandMaCountId) {
    grandMaCountId.innerHTML = `Vous avez ${grandMaCount} grand-mère${
      singulierGrandMere ? "" : "s"
    }`;
  }
}
