/*const url_pokemones= 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

//const url_pokemones= 'https://pokeapi.co/api/v2/pokemon';

const mostrarCard = (lista)=>{
    console.log(lista);
    const contenedor=document.getElementById("contenedor");
    const li=document.createElement('li');
    const titulo =document.createElement('h3');
    titulo.innerText=lista.name;
    li.appendChild(titulo);


    const descripcion = document.createElement('p');
    descripcion.innerText='algo'
    li.appendChild(descripcion);

    contenedor.appendChild(li);
    console.log(contenedor);
}

console.log(url_pokemones);

fetch(url_pokemones)
.then(data=>data.json())
.then (result=>{
    const results=result.results;
    const primerResultado = results[0];
 mostrarCard(primerResultado)
})*/


/*const listaPokemon=document.querySelector("#listaPokemon");
const url_pokemones = "https://pokeapi.co/api/v2/pokemon/";

for (let i=1; i<=100; i++){
    fetch(url_pokemones + i)
    .then((response)=> response.json())
    .then(data=>mostrarPokemon(data))
}

function mostrarPokemon(data){

    const div =document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML=` 
    <div class="pokemon">

                <p class="pokemon-id-back">#${data.id}</p>
                <div class ="pokemon-imagen">
                    <img src= "${data.sprites.other["official-artwork"].front_default}" alt= "${data.name}">
               </div>
               <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-id">
                        #${data.id}</p>
                        <h2 class="pokemon-nombre">${data.name}</h2>
                </div>
                <div class="pokemon-tipos">
                    <p class="electric tipo">Electric</p>
                    <p class="fighting tipo">fighting</p>
                </div>

                <div class="stats">
                    <p class="stats">${data.height}m</p>
                    <p class="stats">${data.weight}kg</p>
                </div>

                <button class="btn btn-mas"> Ver más</button>

                

               </div>

            </div>
  
     `;
    
     listaPokemon.append(div);
}*/

javascript
const listaPokemon = document.querySelector("#listaPokemon");
const url_pokemones = "https://pokeapi.co/api/v2/pokemon/";

// Crear un array vacío para almacenar los datos de los Pokémon
const pokemonData = [];

// Hacer las solicitudes a la API y almacenar los datos en el array
for (let i = 1; i <= 100; i++) {
  fetch(url_pokemones + i)
    .then((response) => response.json())
    .then((data) => {
      pokemonData.push(data);
      if (pokemonData.length === 100) {
        // Ordenar el array por ID en orden ascendente
        pokemonData.sort((a, b) => a.id - b.id);
        // Mostrar los Pokémon en orden
        pokemonData.forEach((pokemon) => mostrarPokemon(pokemon));
      }
    });
}

/**
 *  <div class="pokemon">

                <p class="pokemon-id-back">#025</p>
                <div class ="pokemon-imagen">
                    <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt= "bulbasaur">
               </div>
               <div class="pokemon-info">
                <div class="nombre-contenedor">
                    <p class="pokemon-id">
                        #025</p>
                        <h2 class="pokemon-nombre">Pikachu</h2>
                </div>
                <div class="pokemon-tipos">
                    <p class="electric tipo">Electric</p>
                    <p class="fighting tipo">fighting</p>
                </div>

                <div class="stats">
                    <p class="stats">4m</p>
                    <p class="stats">60kg</p>
                </div>

                <button class="btn btn-mas"> Ver más</button>

               </div>

            </div>
 */