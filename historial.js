
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

















