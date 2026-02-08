// Función para mostrar un mensaje de bienvenida
window.addEventListener('load', function() {
    console.log("¡Sitio cargado correctamente!");
    
    // Efecto al hacer clic en el título
    const titulo = document.querySelector('h1');
    titulo.addEventListener('click', function() {
        alert("¡Bienvenido al proyecto de accesibilidad táctil Xiaomi!");
    });
});
