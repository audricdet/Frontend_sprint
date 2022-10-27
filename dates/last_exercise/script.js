// Diplayer de date

let date = new Date();

let jourSemaine = date.getDay();
let jourMois = date.getDate();
let mois = date.getMonth();
let annee = date.getFullYear();
let heures = date.getHours();
let heuresUTC = date.getUTCHours();
let minute = date.getMinutes();
let secondes = date.getSeconds();
let ms = date.getMilliseconds();

// Add day 

const day = document.querySelector('.day');
console.log(jourSemaine);

const addDay = () => {
    if (jourSemaine == 0) {
        day.innerHTML = "SUN"
    }
    else if (jourSemaine == 1) {
        day.innerHTML = "MON"
    }
    else if (jourSemaine == 2) {
        day.innerHTML = "TUE"
    }
    else if (jourSemaine == 3) {
        day.innerHTML = "WED"
    }
    else if (jourSemaine == 4) {
        day.innerHTML = "THU"
    }
    else if (jourSemaine == 5) {
        day.innerHTML = "FRI"
    }
    else {
        day.innerHTML = "SAT"
    }
    
};

addDay();

// add date of the day

const dateOfToday = document.querySelector('.date-of-today');
console.log(jourMois);

const addDateOfToday = () => {
    dateOfToday.innerHTML = jourMois
};

addDateOfToday();

// add month

const month = document.querySelector('.month');
console.log(mois);

const addMonth = () => {
    if (mois == 0) {
        month.innerHTML = "JAN";
    }
    else if (mois == 1) {
        month.innerHTML = "FEB";
    }
    else if (mois == 2) {
        month.innerHTML = "MAR";
    }
    else if (mois == 3) {
        month.innerHTML = "APR";
    }
    else if (mois == 4) {
        month.innerHTML = "MAY";
    }
    else if (mois == 5) {
        month.innerHTML = "JUN";
    }
    else if (mois == 6) {
        month.innerHTML = "JUL";
    }
    else if (mois == 7) {
        month.innerHTML = "AUG";
    }
    else if (mois == 8) {
        month.innerHTML = "SEP";
    }
    else if (mois == 9) {
        month.innerHTML = "OCT";
    }
    else if (mois == 10) {
        month.innerHTML = "NOV";
    }
    else if (mois == 0) {
        month.innerHTML = "DEC";
    };
}

addMonth();

// add year 

const year = document.querySelector('.year');
console.log(annee); 

const addYear = () => {
    year.innerHTML = annee;
}

addYear();

// add hours

const hours = document.querySelector('.hours');
console.log(heures);

const addHours = () => {
    hours.innerHTML = heures + ':';
}

addHours();

// add minutes

const minutes = document.querySelector('.minutes');
console.log(minute);

const addMinutes = () => {
    minutes.innerHTML = minute + ':';
}

addMinutes();

// add seconds

const seconds = document.querySelector('.seconds');
console.log(secondes);

const addSeconds = () => {
    seconds.innerHTML = secondes; 
};

addSeconds();


// Refresh time

setTimeout(() => {
    document.location.reload();
}, 1000);