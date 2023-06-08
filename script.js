//searchinput

//searchbtn

const dictionary = (word) => {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '641f633cf5msh25d7c7e9d6c9d86p1afef4jsnc7e2bcbb1b3a',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' +word, options)
    .then(response => response.json())
    .then((response) => {

    
	
	console.log(response)
    wordhead.innerHTML = response.word;
    definition.innerHTML = response.definition;
})

	.catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e) => {

    e.preventDefault();
    dictionary(searchinput.value)

})
