// --------------------- INITIALISATION  ---------------------
let cookieNum = 0;
let grandMaCount = 0;
getSession();
refresh();

const clickButton = document.querySelector("#cookie-button");
const addGrandMa = document.querySelector("#add-grand-ma");

setInterval(() => {
  addCookie(grandMaCount);
  refresh();
  saveSession();
}, 1000);

clickButton.addEventListener("click", (e) => {
  addCookie(1);
  refresh();
});

addGrandMa.addEventListener("click", () => {
  grandMaCount++;
  refresh();
});

// --------------------- FONCTIONS  ---------------------

function addCookie(cookieToAdd) {
  cookieNum = cookieNum + (cookieToAdd ?? 1);
}

function refresh() {
  const singuliercookie = cookieNum === 0 || cookieNum === 1;
  document.getElementById("cookie-count").innerHTML = `cookie${
    singuliercookie ? "" : "s"
  } : ${cookieNum}`;
  const singulierGrandMere = grandMaCount === 0 || grandMaCount === 1;
  document.getElementById(
    "grand-ma-count"
  ).innerHTML = `Vous avez ${grandMaCount} grand-mère${
    singulierGrandMere ? "" : "s"
  }`;
}

function saveSession() {
  localStorage.setItem("cookieNum", cookieNum);
}

function getSession(params) {
  const cookieNumLs = localStorage.getItem("cookieNum");
  if (cookieNumLs) {
    cookieNum = Number(cookieNumLs);
  }
}
