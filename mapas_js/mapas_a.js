//atraco

document.addEventListener("DOMContentLoaded", function() {
    const mapsList = document.getElementById("maps-list");

    // Datos de ejemplo de algunos mapas de atrapagemas
    const mapsData = [
        { name: "Refugio" }
        // Agrega más mapas según sea necesario
    ];

    // Función para mostrar los mapas de atrapagemas en la página
    function renderMaps() {
        mapsList.innerHTML = "";
        mapsData.forEach(map => {
            const mapDiv = document.createElement("div");
            mapDiv.classList.add("map");
            mapDiv.innerHTML = `
                <a href="mapas_de_atrapagemas/${map.name.replace(/\s+/g, '_').toLowerCase()}.html">${map.name}</a>
            `;
            mapsList.appendChild(mapDiv);
        });
    }

    // Llamar a la función para mostrar los mapas de atrapagemas al cargar la página
    renderMaps();
});
