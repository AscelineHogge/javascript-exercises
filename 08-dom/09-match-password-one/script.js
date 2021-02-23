/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById('run').addEventListener('click', function () {

        if (document.getElementById("pass-one").value !== document.getElementById("pass-two").value) {
            document.querySelector('#pass-one').style.border = "red";
            document.querySelector('#pass-two').style.border = "red";
        }
        /* "!==" L'opérateur d'inégalité stricte renvoie true si les opérandes 
        sont de types différents ou ne sont pas égaux. */
        //If pas bon, ce sera rouge

        else {
            document.querySelector('#pass-one').style.border = "black";
            document.querySelector('#pass-two').style.border = "black";
        }
        //If bon, noir
    });
})();

//https://stackoverflow.com/questions/21727317/how-to-check-confirm-password-field-in-form-without-reloading-page/21727518

