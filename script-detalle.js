/*document.addEventListener('DOMContentLoaded',(=>{
const params = new URLSearchParams(window.location.search);
const pokemonId=params.get('id');


}));*/

document.addEventListener('DOMContentLoaded',()=>{

    const params=new URLSearchParams(window.location.search);
    const pokeId=params.get('id');

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then(response=>response.json())
    .then(data=>mostrarDetalles(data));
});


function mostrarDetalles(data){
    const detallePokemon=document.getElementById('detallePokemon');
    detallePokemon.innerHTML=`
    <div class ="pokemon-imagen">
    <img src= "${data.sprites.other["official-artwork"].front_default}" alt= "${data.name}">
    </div>
    <div class="texto">
    <p>Experiencia base: ${data.base_experience}</p>
    <p>Orden en la pokedex: ${data.order}</p>
    <p>Habilidades:</p>
    <ul>
    ${data.abilities.map(ability=>`<li>${ability.ability.name}</li>`).join('')}
    </ul>
    </div>
    
    
    `
}