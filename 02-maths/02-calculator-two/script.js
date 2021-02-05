/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    let num1 = document.getElementById("op-one").value; 
    let num2 = document.getElementById("op-two").value;
    const performOperation = operation => {
        switch(operation) {
            case 'addition':
                alert(parseFloat(num1) + parseFloat(num2));
            break;
            case 'substraction':
                alert(parseFloat(num1) - parseFloat(num2));
            break;
            case 'multiplication':
                alert(parseFloat(num1) * parseFloat(num2));
            break;
            case 'division':
                alert(parseFloat(num1) / parseFloat(num2));
            break;   
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
