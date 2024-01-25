import "./index.css";
import { getTrendMovies } from "./getTrendMovies";

getTrendMovies().then((movies) => {
  render(movies);
});

function render(movieList) {
  const list = document.querySelector("#movie-list");

  const elementsToRemove = list?.querySelectorAll("li");
  elementsToRemove?.forEach((element) => {
    list?.removeChild(element);
  });

  movieList.forEach((movieObject) => {
    const item = document.createElement("li");
    item.textContent = movieObject.title;
    list?.appendChild(item);
  });
}
