const body = document.querySelector('body')
const moleHole = document.querySelectorAll('.mole-hole');
const nMole = 12;


// 1ere etape : Faire devenir une div (mole-hole) rouge au hasard et disparaitre

const getRandom = () => {
    let n;
    n = Math.round(Math.random() * (nMole-1 - 0) + 0);
    return n;
}

const moleDisapear = (mole) => {
    moleHole[mole].style.backgroundColor = 'white';
}

const moleApparence = () => {
    const random = getRandom();
    moleHole[random].style.backgroundColor = 'red';
    setTimeout (() => {moleDisapear(random)}, 1000)
}

setInterval (moleApparence, 1500)

// Ajouter score 

const score = document.querySelector('.score');
let i = 1;

const addPoint = (event) => {
    if (event.target.style.backgroundColor == 'red') {
        score.textContent = "SCORE =" + " " +i++
    };
};


for (let hole of moleHole) {
    hole.style.backgroundColor = 'white';
    hole.addEventListener('click', addPoint)
}