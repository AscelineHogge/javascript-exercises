/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        /* constructor est une méthode qui est utilisée pour créer et initialiser 
        un objet lorsqu'on utilise le mot clé class */
        get name() {
            return `${this.firstname} ${this.lastname}`;
        }
        //return arrête l'exécution d'une fonction et renvoie une valeur de cette fonction

        set name(setter) {
            let toSplit = setter.split(' ');
            this.firstname = toSplit[0];
            this.lastname = toSplit[1];
        }
        /* "Set" permet de stocker des valeurs uniques, de n'importe quel type, 
        que ce soit des valeurs d'un type primitif ou des objets. */
        /* "split()" permet de diviser une chaîne de caractères à partir d'un séparateur 
        pour fournir un tableau de sous-chaînes */
    }

    document.getElementById('run').addEventListener('click', function () {
        let person = new Person('Harry', 'Potter');
        console.log(person.name);

        person.name = 'Jane Austen';
        console.log(person);

    });
})();
