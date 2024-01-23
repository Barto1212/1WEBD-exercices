import { getSession, saveSession } from "./sessions";
import { render } from "./render";
export type Score = {
  cookie: number;
  grandMa: number;
};
// --------------------- INITIALISATION  ---------------------
let score: Score = {
  cookie: getSession(),
  grandMa: 0,
};
render(score);

const clickButton = document.querySelector("#cookie-button");
const addGrandMa = document.querySelector("#add-grand-ma");

setInterval(() => {
  addCookie(score.grandMa);
  render(score);
  saveSession(score.cookie);
}, 1000);

clickButton?.addEventListener("click", () => {
  addCookie(1);
  render(score);
});

addGrandMa?.addEventListener("click", () => {
  score.grandMa++;
  render(score);
});

// --------------------- FONCTIONS  ---------------------

function addCookie(cookieToAdd: number) {
  score.cookie = score.cookie + (cookieToAdd ?? 1);
}
