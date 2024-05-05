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




document.addEventListener('DOMContentLoaded', () => {
    // Obtener el botón de historial una vez que el DOM esté cargado
    const btnHistorial = document.getElementById('btnHistorial');

    // Agregar evento de clic al botón de historial
    btnHistorial.addEventListener('click', () => {
        //console.log('boton historial clikeado');
      
        window.location.href = 'historial.html';
    });

});



document.addEventListener("keyup",e=>{
    if(e.target.matches("#busqueda")){

        document.querySelectorAll(".pokemon").forEach(tipoPokemones=>{
            tipoPokemones.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())?tipoPokemones.classList.remove("filtro"):tipoPokemones.classList.add("filtro")
        })
    }
})


/*function consultarDatos(){
    return new Promise ((resolve,reject)=>{
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response =>response.json())
        .then(data=>resolve(data))
        .catch(error=>reject(error));
    });
}


consultarDatos().then(datos => {
    if (datos.results) {
        const busqueda = document.getElementById("busqueda");
        busqueda.addEventListener("input", (e) => {
            const valorBusqueda = e.target.value.toLowerCase();
            const pokemonesFiltrados = datos.results.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(valorBusqueda);
            });
            listaPokemon.innerHTML = '';
            pokemonesFiltrados.forEach(pokemon => {
                mostrarPokemon(pokemon);
            });
        });
    } else {
        console.error('La propiedad results no está definida en los datos.');
    }
}).catch(error => {
    console.error('Error al consultar datos:', error);
});*/

/*consultarDatos().then(datos=>{
    if{  
        const busqueda = document.getElementById("busqueda");
    busqueda.addEventListener("input",(e)=>{
        const valorBusqueda =e.target.value.toLowerCase();
        const pokemonesFiltrados=datos.filter
        console.log(datos);
        (pokemon=>{
            return pokemon.name.toLowerCase.includes(valorBusqueda);
        });
        listaPokemon.innerHTML='';
        pokemonesFiltrados.forEach(pokemon=>{
            mostrarPokemon(pokemon);
        });
    })
} else{
    console.error('La propiedad results no est definida en los datos.')
}
}).catch(error=>{
    console.error('Error al consultar datos',error);
});*/



/*consultarDatos().then(datos => {
    
    const busqueda = document.getElementById("busqueda");
    busqueda.addEventListener("search", (e)=> {
        console.log(e.target.value)
        //se filtra el array
        mostrarDatos(datos); // muestro el array filtrado
    });

});*/
