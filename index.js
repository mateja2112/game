const appElement = document.querySelector ("#app");
console.log (appElement);

let point= 0;
 
function createBox() {
    const boxElement = document.createElement("div");
    const boxRect =  boxElement.getBoundingClientRect (); 
    boxElement.classList.add("box");

    boxElement.style.top = `${Math.random () * (window.innerHeight - 100)} px`;
    boxElement.style.left = `${Math.random ()* (window.innerWidth - 100)}px`;

    boxElement.addEventListener ("click", function (event) {
        console.log ("click", event);
        event.target.remove(); 
        point++; 
    });

    return boxElement;
}

const boxElement= createBox ();
appElement.appendChild(boxElement);

let numberOfBoxes = 0;

const intervalId= setInterval( function () {
    let boxElement = createBox ();
    appElement.appendChild (boxElement);

    numberOfBoxes++;

    if (numberOfBoxes > 9){
        clearInterval(intervalId);
        console.log(point);
    }
}, 500);








