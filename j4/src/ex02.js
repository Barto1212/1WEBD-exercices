/**
 * infos:
 * - url api: https://dog.ceo/api/breeds/image/random
 *
 * créer une fonction setupDogPic
 * la fonction devra:
 * - ajouter un eventListener sur le bouton#ex_02_btn pour que, a chaque click, il change l'image #ex_02_img avec les données de l'api mentionné plus haut
 *  */

function setupDogPic() {
  const button = document.querySelector("#ex_02_btn");
  if (button) {
    button.addEventListener("click", handleClick);
  }
  handleClick();
}

// Fonction appelée par l'event listener
function handleClick() {
  getImg().then((dogUrl) => {
    const image = document.querySelector("#ex_02_img");
    image.setAttribute("src", dogUrl);
  });
}

async function getImg() {
  const data = await fetch("https://dog.ceo/api/breeds/image/random");
  const response = await data.json();
  return response.message;
}
