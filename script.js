const url_pokemones= 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

console.log(url_pokemones);

fetch(url_pokemones)
.then(data=>data.json())
.then (resultado=>{
    const resultados=resultado.resultados;
    console.log("resultados", resultados)
})