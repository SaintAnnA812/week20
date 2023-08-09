
            /* for (let i = 0; i < data.results.length; i++) {
    
    
                resultContainer.innerHTML += `${data.results[i].name}`*/
/*if (options == people) {
    resultContainer.innerHTML += `${data.results[i].name}`
}*/
/* else if (option == planets) {
        resultContainer.innerHTML += data.results[i].planets
    } else if (option == films) {
        resultContainer.innerHTML += data.results[i].films
    }*/

/*for (let i = 0; i < data.results.length; i++) {
    //choice = 'data.results[number].name || data.results[number].planets || data.results[number].films'
    resultContainer.innerHTML += `<p>Name: ${choice} + ${number}</p>`
}*/
/*.then((data) => {
let planets = document.getElementById('planets').value;
for (let i = 0; i < data.results.length; i++) {
    planets = data.results[i].name;
    resultContainer.innerHTML += `<p>Name: ${planets}</p>`
}
}).then((data) => {
let films = document.getElementById('films').value;
for (let i = 0; i < data.results.length; i++) {
    films = data.results[i].name;
    resultContainer.innerHTML += `<p>Name: ${films}</p>`
}
})*/


/*    .catch((error) => {
         console.error(error);
     });*/



/* fetch('https://swapi.nomoreparties.co/people/1')

    .then((response) => response.json())
try {
    then(people => {
        answer.innerHTML = `<br/><h3>Name:${people.name}</h3>`;
         //console.log(people.name);
    })
}
catch (err) {
    error.innerHTML = 'УПС!' + err.message;
}*/



/*let people = document.getElementById('people');
let planets = document.getElementById('planets');
let films = document.getElementById('films');
//let resultContainer = document.getElementById('resultContainer');
let numberElement = document.getElementById('number').value;
let selectedElement = document.querySelectorAll('.option').value;
let loadMes = 'Я пытавси';


function chooseMe() {
    fetch('https://swapi.dev/api/people/')
        //${selectedElement}/${numberElement}')
        .then((response) => {
            if (response.ok) {
                throw new Error('Ошибка 404')
            }
            return response.json();
        })
        .then((data) => {
            for (let i = 0; i < data.results.length; i++) {
                resultContainer.innerHTML += `Name: ${data.results[i].name}`
                console.log(data.results[i].name);
            }
        })
        .catch((error) => {
            resultContainer.innerHTML = `<p class="errorText">${error.message}</p>`
        })
        .finally(() => {
            resultContainer.innerText = loadMes
        });

    /* btn.addEventListener('click', () => {
         let number = document.getElementById('number').value;
     })*/


//8button.addEventListener('click', chooseMe)