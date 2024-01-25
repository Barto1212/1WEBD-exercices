export function render(movieList) {
  const list = document.querySelector("#movie-list");

  const elementsToRemove = list?.querySelectorAll("li");
  elementsToRemove?.forEach((element) => {
    list?.removeChild(element);
  });

  movieList.forEach((movieObject) => {
    const item = document.createElement("li");

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = movieObject.title;

    const imgDOM = document.createElement("img");
    const imgUrl = "https://image.tmdb.org/t/p/w500" + movieObject.poster_path;
    imgDOM.setAttribute("src", imgUrl);

    item.appendChild(itemTitle);
    item.appendChild(imgDOM);

    list?.appendChild(item);
  });
}
