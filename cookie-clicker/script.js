// html et
// style CSS : hover property
// un beau titre centré

// un fichier JS principal avec une fonction handleClick

// un fichier avec une fonction qui enregistre dans le local storage les datas users: {
// cookies: Number,
//   grandMa: Number
// }
// une seconde fonction dans ce fichier qui accède au localStorage

let CookieNum = 0
document.getElementById('cookie-count').innerHTML = `cookie : ${CookieNum}`


const FG = document.getElementsByClassName('cookie-button')

FG[0].addEventListener('click',
    (e) => {
        CookieNum ++
        document.getElementById('cookie-count').innerHTML = `cookie : ${CookieNum}`
    }
    )

