/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person { /* Creer la class Person */
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        /* constructor est une méthode qui est utilisée pour créer et initialiser 
        un objet lorsqu'on utilise le mot clé class.*/

        sayHello() {
            return `Hello ${this.firstname} ${this.lastname} !`;
            //return arrête l'exécution d'une fonction et renvoie une valeur de cette fonction
        }
    }
    document.getElementById('run').addEventListener('click', function () {
        var person = new Person('Harry', 'Potter')
        console.log(person.sayHello());
    });
})();

//https://www.pierre-giraud.com/javascript-apprendre-coder-cours/classe/
