/* script.js */

document.addEventListener('DOMContentLoaded', () => {
  // Obtener todos los elementos <a> dentro de <li> en la lista
  const optionLinks = document.querySelectorAll('li a');

  // Asignar un controlador de eventos a cada enlace
  optionLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
      const option = link.getAttribute('data-option'); // Obtener el valor del atributo data-option
      window.location.href = `/work/${option}`; // Redireccionar al usuario a la página work.html con el valor de la opción en la URL
    });
  });
});



$(document).ready(function() {
  $('.option-card').on('click', function() {
      var option = $(this).data('option');
      // Aquí puedes manejar el evento click. Por ejemplo, podrías redirigir al usuario a otra página:
      window.location.href = `/work/${option}`; 
  });
});


  
