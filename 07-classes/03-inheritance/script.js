/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super(); //super est utilisé afin d'accéder à des fonctions définies sur l'objet parent
            this.name = name;
        }
        static greeting = "Miaou"; //static permet de définir une méthode statique d'une classe
    }

    /* "extends" est utilisé dans les déclarations et expressions de classes afin de signifier 
    qu'un type représenté par une classe hérite d'un autre type */

    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Woof";
    }


    var dog = new Dog("Yeontan"); //Nomme le nom de l'animal dans var
    var cat = new Cat("Pattenrond");

    document.getElementById("run").addEventListener("click", function () {
        console.log(dog.sayHello());
        console.log(cat.sayHello());
    });
})();
