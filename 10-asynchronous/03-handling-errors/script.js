/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {
        window.lib.getPersons(function (error, array) {
            /* On utilise getPersons suivi d'une boucle et a plus ou moins une chance sur 
                deux de générer une erreur */
            //callblack effectue deux parametres
            if (error) {
                console.error(error); //error, utilise console.error() pour afficher getPersons
            }
            else {
                console.log(array); //array of people
            }
        })
    });
})();
