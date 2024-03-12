document.addEventListener("DOMContentLoaded", function() {
    const gameModesList = document.getElementById("game-modes-list");

    // Datos de ejemplo de algunos modos de juego
    const gameModesData = [
        { name: "Atrapagemas" },
        { name: "Atraco" },
        { name: "Balón Brawl" },
    ];

    // Función para mostrar los modos de juego en la página
    function renderGameModes() {
        gameModesList.innerHTML = "";
        gameModesData.forEach(mode => {
            const modeDiv = document.createElement("div");
            modeDiv.classList.add("mode");
            modeDiv.innerHTML = `
                <a href="modos/${mode.name}.html">${mode.name}</a>
            `;
            gameModesList.appendChild(modeDiv);
        });
    }

    // Llamar a la función para mostrar los modos de juego al cargar la página
    renderGameModes();
});
