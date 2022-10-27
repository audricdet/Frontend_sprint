// Exercise 1

//https://gist.github.com/diogocapela/12c6617fc87607d11fd62d2a4f42b02a

// Date de Bruxelles

let date = new Date();

let dateBruxelles = date.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
});
console.log(dateBruxelles);

// Date de Anchorage

let dateAnchorage = date.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'US/Alaska',
});

console.log(dateAnchorage);

// Date de Reykjavik

let dateReykjavic = date.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Atlantic/Reykjavik',
});

console.log(dateReykjavic);

// Date de Saint-Pétersbourg

let dateSaintPetersbourg = date.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Etc/GMT-3',
});

console.log(dateSaintPetersbourg);

// Exercise 2

let dateOfBirth = new Date('1995-04-17'); 
console.log(Math.round((date.getTime() - dateOfBirth.getTime()) / (1000 * 60 * 60 * 24)));


let dateToCompare = new Date();
let year = dateToCompare.setFullYear(98);
let month = dateToCompare.setMonth(4);
let day = dateToCompare.setDate(3);

const daysElapsed = () => {
    console.log(Math.round((date.getTime() - dateToCompare.getTime()) / (1000 * 60 * 60 *24)));
}

daysElapsed();

// Exercice 3 
const input = document.querySelector('input');
const pAnswer = document.querySelector('.answer');
const pdateFinale = document.querySelector('.dateFinale')

let dateInTheFuture = new Date ('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
});

const convertHours = () => {
    let n;
    n = Math.floor(input.value / 24) + "days" + (input.value % 24) + "hours" 
    pAnswer.innerHTML = n
};

const seeInTheFuture = () => {
    
};



input.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
    convertHours();
    }
});
