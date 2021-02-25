/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', function () {
        window.lib.getPersons()
            //Il ne faut pas mettre de Promise avant ".then" ou ".catch" sinon pas defini !
            // .then & .catch parce que error est permis
            .then((value) => {
                console.log(value);
            })

            .catch((error) => {
                console.log(error);
            })
    });
})();
