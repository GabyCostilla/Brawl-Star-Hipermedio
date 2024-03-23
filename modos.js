document.addEventListener("DOMContentLoaded", function() {
    const gameModesList = document.getElementById("game-modes-list");

    const gameModesData = [
        { name: "Atrapagemas" },
        { name: "Atraco" },
        { name: "Balón Brawl" },
        { name: "Noqueo" },
        { name: "Zona Restringida" },
    ];

    // muestra los modos
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

   
    renderGameModes();
});
