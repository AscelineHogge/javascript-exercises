/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', function () {
        //On cree une constante promise puis une liste d'articles (resolve et reject)
        const promise = window.lib.getPosts((resolve, reject) => {
            resolve(value);
            reject();
        });

        //on utilise ".then" seul si on ne permet pas d'erreur
        promise.then((value) => {
            console.log(value);
        });
    });
})();

//https://media.prod.mdn.mozit.cloud/attachments/2018/04/18/15911/32e79f722e83940fdaea297acdb5df92/promises.png
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

/*
document.getElementById('run').addEventListener('click', function () {
        window.lib.getPosts().then(function getPosts(array) {
            console.log(array);
        });
    });
*/
