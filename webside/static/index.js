 // index.js
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el elemento select de variables
    const variableSelect = document.getElementById('variable');
  
    // Realizar una solicitud al backend para obtener la lista de variables disponibles
    fetch('/select_columns', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json'
            }

    }) // Obtener la respuesta y convertirla a JSON
    .then(response => response.json())
    // Con los datos JSON, actualizar el elemento select
    .then(data => {
        // Por cada elemento en la lista de variables
        data.variables.forEach(variable => {
            // Crear un elemento option
            const option = document.createElement('option');
            // Establecer el valor del elemento option
            option.value = variable;
            // Establecer el texto del elemento option
            option.innerText = variable;
            // Agregar el elemento option al elemento select
            variableSelect.appendChild(option);
        });
    } ); 
});