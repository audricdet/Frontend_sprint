// Display the time passed on the page 

const body = document.querySelector('body');
const p = document.createElement('p');
document.body.appendChild(p);

let s = 0;
let min = 0;

const timer = () => {
    s++;
    
    if (s == 60) {
        s -= 60;
        min++;
    }
    if (min != 0) {
        p.textContent = min + 'minutes' + s + 's'
    }
    else {
        p.textContent = s + 's'; 
    }
};

setInterval(timer, 1000);


