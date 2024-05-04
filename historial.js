document.addEventListener('DOMContentLoaded',()=>{
const historial = json.parse(localStorage.getItem('historial'));
const historialLista = document.getElementById('historialLista');

if (historial && historial.lenght>0){
    historial.foreach(pokemon=>{
        const listaItem=document.createElement('li');
        listaItem.textContent = pokemon;
        historialLista.appendChild(listaItem);
    })

}else{
    const listaItem = document.createElement('li');
    listaItem.textContent = 'No hay elementos en el historial.';
    historialLista.appendChild(listaItem);
}

});