/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //callback - c'est une fonction de rappel

    document.getElementById("run").addEventListener("click", function () {
        window.lib.getPosts(function (error, array) {
            //Creer une boucle pour deux parametres
            if (error) {
                console.log(error); //parametre error
            }
            else {
                console.log(array); //parametre array
            }
        })
    });
})();

