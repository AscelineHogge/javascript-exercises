/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', function () {
        window.lib.getPosts(function myPosts(error, array) {
            console.error(error);

            array.forEach(function myComments(post) {

                window.lib.getComments(post.id, (err, comments) => {
                    post.comments = comments;

                });
            });
            console.log(array);
        });
    });
})();


/* window.lib.getPosts(function (error, array) {
            if (error) {
                console.log(error);
            }
            else {
                console.log(array);
                //On doit imbriquer les deux
                resolve.forEach(function (element) {
                    window.lib.getPosts(element.id, (error, array) => {
                        if (error) {
                            console.log(error);
                        }
                        else {
                            console.log(element);
                        }
                    })
                })
            }
        }); */