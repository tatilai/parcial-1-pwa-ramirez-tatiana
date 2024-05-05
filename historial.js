
document.addEventListener('DOMContentLoaded', () => {
    
   

    // Obtener el historial y mostrarlo en el DOM
    const historial = JSON.parse(localStorage.getItem('historial'));
    const historialLista = document.getElementById('historialLista');

    if (historial && historial.length > 0) {
        historial.forEach(pokemonId => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                .then(response => response.json())
                .then(data => {

                   
                    const listaItem = document.createElement('li');
                    listaItem.textContent = `Pokemon ID: ${pokemonId}, Nombre: ${data.name}`;
                    historialLista.appendChild(listaItem);
                })
                .catch(error => {
                    console.error('Se produjo un error:', error);
                });
        });
    } else {
        const listaItem = document.createElement('li');
        listaItem.textContent = 'No hay elementos en el historial.';
        historialLista.appendChild(listaItem);
    }
});

















/*document.addEventListener('DOMContentLoaded',()=>{
    const btnHistorial = document.getElementById('btnHistorial');
    btnHistorial.addEventListener('click',()=>{
        guardarEnHistorial();
        window.location.href ='historial.html';
    });
});

document.addEventListener('DOMContentLoaded',()=>{
const historial = JSON.parse(localStorage.getItem('historial'));
const historialLista = document.getElementById('historialLista');

const params=new URLSearchParams(window.location.search);

if (historial && historial.length>0){
    historial.forEach(pokemonId=>{
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response=>response.json())
      .then(data=>{
        console.log(data.name);

        const listaItem = document.createElement('li');
        listaItem.textContent =` Pokemon ID:${pokemonId} ,Nombre:${data.name}`;
        historialLista.appendChild(listaItem);
      })

     .catch(error=>{
        console.error('Se produjo un error')
        });

    });
    

} 
else{
    const listaItem = document.createElement('li');
    listaItem.textContent = 'No hay elementos en el historial.';
    historialLista.appendChild(listaItem);
}
});*/



/*document.addEventListener('DOMContentLoaded',()=>{

    const params=new URLSearchParams(window.location.search);
    const pokemonId=params.get('id');

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(response=>response.json())
    .then(data=>mostrarDetalles(data));
});


function mostrarDetalles(data){
    const detallePokemon=document.getElementById('detallePokemon');
    detallePokemon.innerHTML=`
    <div class="texto">
    <ul>
   <li><p>Experiencia base: ${data.id}</p></li>
   <li><p>Orden en la pokedex: ${data.name}</p></li>
   </ul>
    </div>
    
    
    `
}*/