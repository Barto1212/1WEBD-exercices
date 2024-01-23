import { getSession, saveSession } from "./sessions";
import { render } from "./render";

export type Score = {
  cookie: number;
  grandMa: number;
};
// --------------------- INITIALISATION  ---------------------
class CookieGame {
  score: Score;

  constructor(intialScore: Score) {
    this.score = intialScore;

    const clickButton = document.querySelector("#cookie-button");
    const addGrandMa = document.querySelector("#add-grand-ma");

    clickButton?.addEventListener("click", () => {
      this.incrementScore("cookie", 1);
    });

    addGrandMa?.addEventListener("click", () => {
      if (this.score.cookie < 20) {
        return;
      }
      this.incrementScore("cookie", -20);
      this.incrementScore("grandMa", 1);
    });

    setInterval(() => {
      this.incrementScore("cookie", this.score.grandMa);
      render(this.score);
      saveSession(this.score);
    }, 1000);
  }

  incrementScore(type: "grandMa" | "cookie", nbToIncrement: number) {
    this.score[type] = this.score[type] + nbToIncrement;
    render(this.score);
  }
}

const game = new CookieGame(getSession());
