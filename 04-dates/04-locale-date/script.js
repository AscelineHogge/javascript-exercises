/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var today = new Date();
    var day = today.toLocaleDateString('en-EN', { weekday: 'long' });
    var date = today.getDate();
    var month = today.toLocaleDateString('en-EN', { month: 'long' });
    var year = today.getFullYear();
    var hour = today.getHours();
    var minutes = today.getMinutes();

    document.getElementById("target").innerHTML = `${day} ${date} ${month} ${year}, ${hour}h${minutes}`;
})();
