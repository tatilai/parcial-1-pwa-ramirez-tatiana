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


const listaPokemon=document.querySelector("#listaPokemon");
const url_pokemones = "https://pokeapi.co/api/v2/pokemon/";




const pokemones =[];

for (let i=1; i<=100; i++){
    fetch(url_pokemones + i)
    .then((response)=>response.json())
    .then((data)=>{
        pokemones.push(data);
        if(pokemones.length===100){
            pokemones.sort((a,b)=>a.id - b.id);
            pokemones.forEach((pokemon)=>mostrarPokemon(pokemon))
        }
    });
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
              

                <div class="stats">
                    <p class="stats">${data.height}m</p>
                    <p class="stats">${data.weight}kg</p>
                </div>

              <a href="detalles.html?id=${data.id}" class="btn btn-mas">Ver más</a>

                

               </div>

            </div>
  
     `;
    
     listaPokemon.append(div);
}



document,addEventListener('DOMContentLoaded',()=>{
    const btnHistorial = document.getElementById('btnHistorial');
    btnHistorial.addEventListener('click',()=>{
        guardarEnHistorial();
        window.location.href ='historial.href';
    });
});


