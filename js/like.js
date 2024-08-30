// Evento click en el boton de like
  document.getElementById('likeButton').addEventListener('click', function () {
    // este boton
    const likeButton = this;
    // conteo de likes
    const likeCount = document.getElementById('likeCount');
  
    // Simulamos el aumento o disminución de likes.
    if (likeButton.classList.contains('liked')) {
        // si tiene la clase la removemos
        likeButton.classList.remove('liked');
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
    } else {
        // si no tiene la clase la agregamos
        likeButton.classList.add('liked');
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    }
  
    // Renderiza de nuevo los íconos para aplicar el cambio de estilo.
    feather.replace();
  });