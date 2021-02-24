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
        const promise = window.lib.getPosts((resolve, reject) => {
            resolve(value);
            reject();
        });

        promise.then((value) => {
            console.log(value);
        });

        promise.catch((error) => {
            console.log(error);
        });
    });

    /*document.getElementById('run').addEventListener('click', () => {
        window.lib.getPosts()
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log('There is an error', error))
    })*/
})();
