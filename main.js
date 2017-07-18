let URL = 'http://swapi.co/api/people/'

const ul = document.querySelector('ul')

const promise = fetch(URL).then(response => response.json()).then(data => {
  // We know that data.results is an array
  // loop through the array
  console.log(data.results)
  for (var i = 0; i < data.results.length; i++) {
    let person = data.results[i]

    let newPersonLI = document.createElement('li')
    newPersonLI.textContent = person.name

    ul.appendChild(newPersonLI)

    // do some work here with this person
  }
})
// 1. First, find our UL Container

// 2. Create our Ajax Request
