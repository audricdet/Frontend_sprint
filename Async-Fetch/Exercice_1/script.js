// Button show rules 

const button = document.querySelector('button');
const body = document.querySelector('body');

const showRules = () => {
    fetch('becode.json')
.then(response => response.json())
.then(json => { 
    const ul = document.createElement('ul');
    body.appendChild(ul);
    const li_1 = document.createElement('li');
    const li_2 = document.createElement('li');
    const li_3 = document.createElement('li');
    const li_4 = document.createElement('li');
    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);
    ul.appendChild(li_4);
    li_1.textContent = json[0];
    li_2.textContent = json[1];
    li_3.textContent = json[2];
    li_4.textContent = json[3];
})
.catch(error => {
    console.log('There was an error !', error)
})
};

button.addEventListener('click', showRules);



