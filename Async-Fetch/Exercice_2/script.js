const body = document.querySelector('body')
const button = document.querySelector('button');
const input = document.querySelector('input');

const fetchName = name => fetch('https://api.agify.io/?name='+name)
console.log(input.value)

const returnAge = () => {
    fetchName(input.value)
.then(response => response.json())
.then(json => {
    console.log(json.age)
    const newDiv = document.createElement('div')
    body.appendChild(newDiv)
    newDiv.textContent = input.value + ":" + " " + json.age + " ans en moyenne"
})
.catch(error => {
    console.log('There was an error!', error)
})
}

button.addEventListener('click', returnAge)