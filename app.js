let characters  = []
let pageCount = 1

// let apiLink = `https://rickandmortyapi.com/api/character` + `?page=${pageCount}`

const btnNext = document.querySelector("#btn-next")
const btnPreview = document.querySelector("#btn-preview")

function createCard(nameCharacters, statusCharacters, speciesCharacters, genderCharacters, imageCharacter){
    const card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `
        <img src="${imageCharacter}" alt="character image">

        <h2>Name: ${nameCharacters}</h2>
        <h3>Estado: ${statusCharacters}</h3>        
        <h3>Espacie: ${speciesCharacters}</h3>        
        <h3>Genero: ${genderCharacters}</h3>                
    `
    return card
}


const getData = (page) =>{
    fetch(`https://rickandmortyapi.com/api/character?page= ${page}`)
    .then((response) => response.json())
    .then((json) => {            
        const cardsContainer = document.querySelector("#characters-container")            
            cardsContainer.innerHTML = ""

            json.results.forEach(element => {
                cardsContainer.appendChild(createCard(element.name, element.status, element.species, element.gender, element.image))            
            })            

            if (pageCount > 1) {  btnPreview.style.visibility = "visible"  }
            else { btnPreview.style.visibility = "hidden" }
        
            if (pageCount >= 42) { btnNext.style.visibility = "hidden" }
            else { btnNext.style.visibility = "visible" }
        })    
    }
    
getData(pageCount)

const next = () => getData(pageCount += 1)
const prev = () => getData(pageCount -= 1)

console.log(pageCount);


console.log(btnPreview.style);