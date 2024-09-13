// Selecciona todas las imágenes de la galería
const galleryImages = document.querySelectorAll('.gallery-image');
const modalImage = document.getElementById('modalImage');
const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

// Añade un evento de clic a cada imagen
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        // Actualiza la imagen del modal con el src de la imagen que fue clicada
        // Aqui es donde va la imagen que se va a traer desde la API, la imagen con resolucion mayor
        modalImage.src = this.src;
        // modalImage.src = 'img/imagenes_relleno/308044366_1059986788023821_4957247602976258559_n.jpg';
        // Muestra el modal
        imageModal.show();
    });
});