/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var myTarget = document.getElementsByClassName("target");

    for (var i = 0; i < myTarget.length; i++) {
        myTarget[i].innerHTML = "owned";
    }

    /* Une boucle for répète des instructions jusqu'à ce 
    qu'une condition donnée ne soit plus vérifiée */

})();
