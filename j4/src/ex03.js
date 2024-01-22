/**
 * info:
 * - lien api: https://swapi.dev/
 * - vous pouvez utiliser plusieurs fonctions, mais celle qui sera appelé dans la page sera setupSwapi
 * implenter une fonction setupSwapi qui devra:
 * - récuperer la première page des personnages de star wars
 * - les afficher avec cette structure dans le div#sw_char_list:
 *  - <div class="sw_char">
 *    - <h3><nom_du_personnage></h3>
 *    - <p><planete_d-origine_du_personnage></p>
 *    - <ul class="sw_char_films">
 *      - <li><titre du film></li> (a repeter pour chaque film)
 *    - </ul>
 *  - </div>
 * - afficher le bouton#ex_03_next_page si il y a des données supplémentaires
 * - au click du bouton (dejà présent sur la page), récuperer la page suivante des données et les afficher à la suite 
 * - a chaque click du bouton, enlever les elements dejà affiché dans le div#sw_char_list
 */