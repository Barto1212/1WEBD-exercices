import { Score } from "./index";

export function saveSession(score: Score) {
  localStorage.setItem("userScore", JSON.stringify(score));
}

export function getSession(): Score {
  const scoreString = localStorage.getItem("userScore");
  const scoreObject = JSON.parse(scoreString);
  return {
    cookie: scoreObject?.cookie ?? 0,
    grandMa: scoreObject?.grandMa?? 0
  };
}
