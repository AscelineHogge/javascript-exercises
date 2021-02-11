/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById('run').addEventListener('click', function () {
        var y = []; //[] = 0
        for (var i = 1; i < 10; i++) {
            let random = Math.floor(Math.random() * 100);
            document.getElementById('n-' + (i + 1)).innerHTML = random;
            y.push(random);
        }

        var min = Math.min(...y);
        var max = Math.max(...y);
        var sum = y.reduce((a, b) => a + b, 0);
        var avg = sum / y.length;

        document.getElementById('min').innerHTML = min;
        document.getElementById('max').innerHTML = max;
        document.getElementById('sum').innerHTML = sum;
        document.getElementById('average').innerHTML = avg;

    });
})();