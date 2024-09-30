// Obtener los elementos
const uploadImage = document.getElementById('uploadImage');
const fileInput = document.getElementById('fileInput');

// Evento para abrir el input file al hacer clic en la imagen
uploadImage.addEventListener('click', () => {
  fileInput.click();
});

// Evento para cambiar la imagen una vez que se selecciona un archivo
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadImage.src = e.target.result; // Cambiar la imagen mostrada
    }
    reader.readAsDataURL(file);
  }
});