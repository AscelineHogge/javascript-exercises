/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        { id: "0001", available: false, user: "leny", os: "macOS" },
        { id: "0002", available: false, user: "Nicolas" },
        { id: "0003" },
        { id: "0004", os: "Windows" },
        { id: "0005" },
        { id: "0006", os: "macOS" },
        { id: "0007" },
        { id: "0008" },
        { id: "0009", available: false, user: "Anthony" },
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };

    document.getElementById('run').addEventListener('click', function () {
        //Necessaire de creer une boucle
        for (props in computers) {
            if (computers[props].available === undefined) {
                computers[props].available = defaultProps.available;
            }
            if (computers[props].user === undefined) {
                computers[props].user = defaultProps.user;
            }
            if (computers[props].os === undefined) {
                computers[props].os = defaultProps.os;
            }
            //[] cree un tableau vide
        }
        console.log(computers);
    });

    /* let obj = []

        computers.forEach( el => {
            el = {...defaultProps, ...el }
            obj.push(el)
        })
        computers.splice(0, computers.length , ...obj)

        console.log(computers) */

})();
