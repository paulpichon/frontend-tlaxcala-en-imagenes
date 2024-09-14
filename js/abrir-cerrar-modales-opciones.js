// Funcion que se ejecuta al hacer click en el boton de opciones del modal abierto
document.getElementById('modalOpcionesPublicacion').addEventListener('click', function() {

    const modalOpciones = new bootstrap.Modal(document.getElementById('modalOpciones'), {
      backdrop: 'static',  // Evitar que el segundo modal cierre el primero
      keyboard: false
    });
    modalOpciones.show();
  
    // Cambiar el z-index para que el segundo modal esté por encima del primero
    document.getElementById('imageModal').style.zIndex = '1050';
    document.getElementById('modalOpciones').style.zIndex = '1060';
  
    // Crear un nuevo backdrop para el segundo modal
    const modalBackdrop = document.createElement('div');
    modalBackdrop.className = 'modal-backdrop fade show';
    modalBackdrop.style.zIndex = '1055';  // Entre el primer y segundo modal
    document.body.appendChild(modalBackdrop);
  
    // Al cerrar el segundo modal, eliminar el backdrop extra
    document.getElementById('modalOpciones').addEventListener('hidden.bs.modal', function () {
      const backdrops = document.querySelectorAll('.modal-backdrop');
      if (backdrops.length > 1) {
        backdrops[backdrops.length - 1].remove();  // Eliminar el último backdrop
      }
  
      // Restaurar el z-index del primer modal
      document.getElementById('imageModal').style.zIndex = '3000';
    });
  });