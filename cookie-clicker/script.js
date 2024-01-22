// un fichier avec une fonction qui enregistre dans le local storage les datas users: {
// cookies: Number,
//   grandMa: Number
// }
// une seconde fonction dans ce fichier qui accède au localStorage

let CookieNum = 0;
document.getElementById("cookie-count").innerHTML = `cookie : ${CookieNum}`;

const clickButton = document.querySelector("#cookie-button");

function addCookie() {
  CookieNum++;
}

function refresh() {
  document.getElementById("cookie-count").innerHTML = `cookie : ${CookieNum}`;
}

clickButton.addEventListener("click", (e) => {
  addCookie();
  refresh();
});
