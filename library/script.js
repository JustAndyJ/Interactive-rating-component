// Obtener elementos del DOM
var ratingOptions = document.querySelectorAll('.rating-option');
var submitBtn = document.getElementById('submitBtn');
var resultDiv = document.getElementById('result');

var selectedValue = null;

// Agregar evento de clic a cada elemento de la lista
ratingOptions.forEach(function(option) {
   option.addEventListener('click', function() {
    // Eliminar la clase 'selected' de todos los elementos
    ratingOptions.forEach(function(opt) {
        opt.classList.remove('selected');
    });

    // Agregar la clase 'selected' al elemento clicado
    this.classList.add('selected');

    // Guardar el valor seleccionado
    selectedValue = this.getAttribute('data-value');
  });
});

// Agregar evento de clic al botón de enviar
submitBtn.addEventListener('click', function() {
  if (selectedValue !== null) {
    // Mostrar el valor seleccionado en el div
    resultDiv.textContent = `You selected ${selectedValue} out of 5`;

    // Ocultar la lista ul
    document.querySelector('.rating-state').style.display = 'none';
    document.querySelector('.thank-state').style.display = 'flex';
  }
});
