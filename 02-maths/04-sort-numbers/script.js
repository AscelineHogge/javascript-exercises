/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var num = document.getElementById("numbers").value; //Aller chercher les ch. affiches
    var num2 = numbers.split(",").map(Number); 
    //Retirer la , et les faire considerer comme chiffres

    document.getElementById("run").addEventListener("click", function() {

    num2.sort()

    console.log();

    });

})();
