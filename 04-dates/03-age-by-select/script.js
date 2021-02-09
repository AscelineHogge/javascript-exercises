/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function () {

        var today = new Date(); //Date du jour
        var todayDay = today.getDate(); //Jour de la semaine (0 - 6)
        var todayMonth = today.getMonth() + 1; //+1 permet de ne pas commencer par zero
        var day = document.getElementById("dob-day").value; //Chercher les valeurs dans HTML
        var month = document.getElementById("dob-month").value;
        var year = document.getElementById("dob-year").value;
        var age = today.getFullYear() - year; //Calculer annee
                
        if (day <= todayDay && month <= todayMonth) 
        {
            alert(age);
        }
        
        else {
            alert(age - 1);
        }
       
        });
})();
