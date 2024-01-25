const options = {
  method: "POST",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmI1MWU2NGJlMGYyZDMxNTVkMDY1MzhkMDIwZDY1ZSIsInN1YiI6IjY1YWZlMDE2NjdiNjEzMDBhZmYwYWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WUZZEs8jWJ1tRQP6qfymeUxyyTh5EpMOF1gxvRm_2MI",
  },
  body: {
    username: "LoicB12",
    password: "1234",
  },
};

fetch(
  "https://api.themoviedb.org/3/authentication/token/validate_with_login",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
