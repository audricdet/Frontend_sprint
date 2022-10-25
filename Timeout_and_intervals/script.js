// Write prout 
const body = document.querySelector('body');
let interval; 
const word = "prout"
let i = 0

const p = document.createElement("p");
document.body.appendChild(p);


const write = () => {
    if (i < word.length) {
        p.textContent += word[i]; i++;
    }
    else {
        clearInterval(interval);
        i = 0;
    }
}



buttonWrite = document.createElement("button");
buttonWrite.textContent = "Click to write a funny funny word";
buttonWrite.addEventListener('click', () => {
    interval = setInterval(write, 1000);
});

document.body.appendChild(buttonWrite);

