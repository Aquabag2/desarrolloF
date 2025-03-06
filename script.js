function realizarBusqueda() {
    const searchInput = document.getElementById('searchInput');
    const busqueda = encodeURIComponent(searchInput.value);
    
    if (busqueda.trim() !== '') {
        window.location.href = `https://www.google.com/search?q=${busqueda}`;
    }
}

// Agregar evento para la tecla Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        realizarBusqueda();
    }
}); 