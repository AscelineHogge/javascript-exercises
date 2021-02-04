/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var cond = false;
    while (cond == false){
      var answerAge = prompt("Enter your age");
      var answerGender = prompt("Enter your gender");
      var answerTown = prompt("Enter the town where you live");
      var cor = confirm("I know now that you are " + answerAge + " years old, that you are a(n) " + answerGender + " and that you live at " + answerTown + " !");
    }

})();
