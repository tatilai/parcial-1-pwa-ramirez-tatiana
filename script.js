const url_pokemones= 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

//const url_pokemones= 'https://pokeapi.co/api/v2/pokemon';

const mostrarCard = (lista)=>{
    console.log(lista);
    const contenedor=document.getElementById("contenedor");
    const li=document.createElement('li');
    const titulo =document.createElement('h3');
    li.appendChild(titulo);
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
})