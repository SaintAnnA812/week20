let answer = document.getElementById('answer');
//let error = document.getElementById('error');
let resultContainer = document.getElementById('resultContainer');
let button = document.getElementById('btn');
//let options = document.querySelectorAll('.option').value;
let number = document.getElementById('number').value;

function chooseMe() {

    fetch('https://swapi.dev/api/people/') //заменить на planets, films
        .then((responce) => {
            if (responce.ok) {
                return responce.json();
            } else {
                throw new Error('Ошибка HTTP:' + responce.status);
            }
        })
        .then((data) => {

            for (let i = 0; i < data.results.length; i++) {
                resultContainer.innerHTML += `<p>Name: ${data.results[i].name}</p>`
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

button.addEventListener('click', chooseMe)







