const pokeContainer = document.querySelector("#Poke-container")
const goButton = document.querySelector("#go.go-button")
const resetButton = document.querySelector("#reset.reset")
const pokeZero = document.querySelector("#trainer-selection > img")
const pngImages = document.querySelectorAll(".gender")
const pokeBall = 'https://www.freepnglogos.com/uploads/pokeball-png/pokeball-icon-download-icons-32.png'
const battleMusic = new Audio('./videoplayback.mp4')
let poke1 = document.querySelector("#\\31  > img")
let poke2 = document.querySelector("#\\32  > img")
let poke3 = document.querySelector("#\\33  > img")
let poke4 = document.querySelector("#\\34  > img")
let poke5 = document.querySelector("#\\35  > img")
let poke6 = document.querySelector("#\\36  > img")

    goButton.addEventListener('click', () => {
    battleMusic.pause()
    battleMusic.play()
    // for starting the confetti 
    // Confetti effect source https://dev.to/official_fire/creating-a-confetti-effect-in-5-minutes-16h3
    const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };

    //  for stopping the confetti 

    const stop = () => {
        setTimeout(function() {
            confetti.stop()
        }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    };
// after this here we are calling both the function so it works
    start();
    stop();

// if you dont want to make it stop and make it infinite you can just remove the stop function 

})

    resetButton.addEventListener('click', () => {
        battleMusic.pause()
        poke1.src = pokeBall
        poke2.src = pokeBall
        poke3.src = pokeBall
        poke4.src = pokeBall
        poke5.src = pokeBall
        poke6.src = pokeBall
        pokeZero.src = 'https://freesvg.org/img/1367934593.png'
    })



    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function(pokemon) {
        console.log(pokemon)
        pokemon.results.forEach(function(pokeUrl) {
            fetchPokeData(pokeUrl)
        })
    })

    function fetchPokeData(pokemon) {
    let url = pokemon.url
    fetch(url)
    .then(resp => resp.json())
    .then(function(pokemonData){
        console.log(pokemonData)
        renderPokemon(pokemonData)
    })
}

function renderPokemon(pokemonData) {
    const oneType = pokemonData.types[0].type.name.toUpperCase()
    const twoTypes = pokemonData.types[1]?.type.name.toUpperCase()
    const type1 = document.createElement('p')
    type1.innerHTML = (`${oneType}`)
    const card = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('h4') 
    const addButton = document.createElement('add-button') 
    name.innerText = pokemonData.species.name.toUpperCase()
    name.className = 'poke-name'
    addButton.innerText = 'ADD'
    addButton.className = 'add-button'
    image.className = 'child'
    image.src = pokemonData.sprites.front_shiny
    image.addEventListener('click', () => {
        if  (image.src === pokemonData.sprites.front_shiny) {
        image.src = pokemonData.sprites.back_shiny

        } else {
        image.src = pokemonData.sprites.front_shiny
        }
    })

    if (twoTypes === undefined) {
        card.append(addButton, name, image, type1)
        pokeContainer.append(card)
    } else {
        const type2 = document.createElement('p')
        type2.innerHTML = (`${oneType}<br>${twoTypes}`)
        card.append(addButton, name, image, type2)
        pokeContainer.append(card)
    }

    pngImages.forEach(image => {
        image.addEventListener('click', () => {
            pokeZero.src = image.src
        })
    })
   pokeZero.addEventListener('click', () => {
    if (pokeZero.src !== "https://freesvg.org/img/1367934593.png"){
        pokeZero.src = "https://freesvg.org/img/1367934593.png"
   }
})
        
        addButton.addEventListener('click', (e) => {
        if(poke1.src === pokeBall) {
            poke1.src = image.src

        } else if (poke2.src === pokeBall){
            poke2.src = image.src
        
        } else if (poke3.src === pokeBall){
            poke3.src = image.src
        
        } else if (poke4.src === pokeBall){
            poke4.src = image.src
        
        } else if (poke5.src === pokeBall){
            poke5.src = image.src
        
        } else if (poke6.src === pokeBall){
            poke6.src = image.src
        
        } else if 
            (alert('TEAM IS FULL!')) {

                }
            })

        
            }
    
    
    
  



