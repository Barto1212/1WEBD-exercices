import { Score } from "./index";

export function render(score: Score) {
  const singuliercookie = score.cookie === 0 || score.cookie === 1;
  const cookieCount = document.getElementById("cookie-count");
  if (cookieCount) {
    cookieCount.innerHTML = `cookie${
      singuliercookie ? "" : "s"
    } : ${score.cookie}`;
  }
  const singulierGrandMere = score.grandMa === 0 || score.grandMa === 1;
  const grandMaCountId = document.getElementById("grand-ma-count");
  if (grandMaCountId) {
    grandMaCountId.innerHTML = `Vous avez ${score.grandMa} grand-mère${
      singulierGrandMere ? "" : "s"
    }`;
  }
}
