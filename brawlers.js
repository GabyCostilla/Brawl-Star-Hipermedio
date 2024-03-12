document.addEventListener("DOMContentLoaded", function() {
    const brawlersList = document.getElementById("brawlers-list");

    // Datos de ejemplo de algunos Brawlers
    const brawlersData = [
            { name: "Shelly", image: "https://via.placeholder.com/150" },
            { name: "Colt", image: "https://via.placeholder.com/150" },
            { name: "Nita", image: "https://via.placeholder.com/150" },
            { name: "Bull", image: "https://via.placeholder.com/150" },
            { name: "Jessie", image: "https://via.placeholder.com/150" },
            { name: "Brock", image: "https://via.placeholder.com/150" },
            { name: "Dynamike", image: "https://via.placeholder.com/150" },
            { name: "Bo", image: "https://via.placeholder.com/150" },
            { name: "Tick", image: "https://via.placeholder.com/150" },
            { name: "8-Bit", image: "https://via.placeholder.com/150" },
            { name: "Emz", image: "https://via.placeholder.com/150" },
            { name: "El Primo", image: "https://via.placeholder.com/150" },
            { name: "Barley", image: "https://via.placeholder.com/150" },
            { name: "Poco", image: "https://via.placeholder.com/150" },
            { name: "Rosa", image: "https://via.placeholder.com/150" },
            { name: "Rico", image: "https://via.placeholder.com/150" },
            { name: "Darryl", image: "https://via.placeholder.com/150" },
            { name: "Penny", image: "https://via.placeholder.com/150" },
            { name: "Carl", image: "https://via.placeholder.com/150" },
            { name: "Jacky", image: "https://via.placeholder.com/150" },
            { name: "Bibi", image: "https://via.placeholder.com/150" },
            { name: "Bea", image: "https://via.placeholder.com/150" },
            { name: "Frank", image: "https://via.placeholder.com/150" },
            { name: "Piper", image: "https://via.placeholder.com/150" },
            { name: "Pam", image: "https://via.placeholder.com/150" },
            { name: "Nani", image: "https://via.placeholder.com/150" },
            { name: "Max", image: "https://via.placeholder.com/150" },
            { name: "Mr. P", image: "https://via.placeholder.com/150" },
            { name: "Mortis", image: "https://via.placeholder.com/150" },
            { name: "Tara", image: "https://via.placeholder.com/150" },
            { name: "Gene", image: "https://via.placeholder.com/150" },
            { name: "Spike", image: "https://via.placeholder.com/150" },
            { name: "Crow", image: "https://via.placeholder.com/150" },
            { name: "Leon", image: "https://via.placeholder.com/150" },
            { name: "Sandy", image: "https://via.placeholder.com/150" },
            { name: "Gale", image: "https://via.placeholder.com/150" },
            { name: "Surge", image: "https://via.placeholder.com/150" },
{ name: "Colette", image: "https://via.placeholder.com/150" },
{ name: "Lou", image: "https://via.placeholder.com/150" },
{ name: "Byron", image: "https://via.placeholder.com/150" },
{ name: "Edgar", image: "https://via.placeholder.com/150" },
{ name: "Stu", image: "https://via.placeholder.com/150" },
{ name: "Belle", image: "https://via.placeholder.com/150" },
{ name: "Squeak", image: "https://via.placeholder.com/150" },
{ name: "Buzz", image: "https://via.placeholder.com/150" },
{ name: "Griff", image: "https://via.placeholder.com/150" },
{ name: "Ash", image: "https://via.placeholder.com/150" },
{ name: "Meg", image: "https://via.placeholder.com/150" },
{ name: "Amber", image: "https://via.placeholder.com/150" },
{ name: "Angelo", image: "https://via.placeholder.com/150" },
{ name: "Bonnie", image: "https://via.placeholder.com/150" },
{ name: "Buster", image: "https://via.placeholder.com/150" },
{ name: "Charlie", image: "https://via.placeholder.com/150" },
{ name: "Chester", image: "https://via.placeholder.com/150" },
{ name: "Chuck", image: "https://via.placeholder.com/150" },
{ name: "Cordelius", image: "https://via.placeholder.com/150" },
{ name: "Doug", image: "https://via.placeholder.com/150" },
{ name: "Eve", image: "https://via.placeholder.com/150" },
{ name: "Fang", image: "https://via.placeholder.com/150" },
{ name: "Gray", image: "https://via.placeholder.com/150" },
{ name: "Grom", image: "https://via.placeholder.com/150" },
{ name: "Gus", image: "https://via.placeholder.com/150" },
{ name: "Hank", image: "https://via.placeholder.com/150" },
{ name: "Janet", image: "https://via.placeholder.com/150" },
{ name: "Kit", image: "https://via.placeholder.com/150" },
{ name: "Larry & Lawrie", image: "https://via.placeholder.com/150" },
{ name: "Lola", image: "https://via.placeholder.com/150" },
{ name: "Maisie", image: "https://via.placeholder.com/150" },
{ name: "Mandy", image: "https://via.placeholder.com/150" },
{ name: "Melodie", image: "https://via.placeholder.com/150" },
{ name: "Mico", image: "https://via.placeholder.com/150" },
{ name: "Otis", image: "https://via.placeholder.com/150" },
{ name: "Pearl", image: "https://via.placeholder.com/150" },
{ name: "R-T", image: "https://via.placeholder.com/150" },
{ name: "Ruffs", image: "https://via.placeholder.com/150" },
{ name: "Sam", image: "https://via.placeholder.com/150" },
{ name: "Willow", image: "https://via.placeholder.com/150" }
 ];


    // Función para mostrar los Brawlers en la página
    function renderBrawlers() {
        brawlersList.innerHTML = "";
        brawlersData.forEach(brawler => {
            const brawlerDiv = document.createElement("div");
            brawlerDiv.classList.add("brawler");
            brawlerDiv.innerHTML = `
                <img src="personajes_img/${brawler.name}.png" alt="${brawler.name}">
                <a href="personajes/${brawler.name}.html">${brawler.name}</a>
            `;
            brawlersList.appendChild(brawlerDiv);
        });
    }

    // Llamar a la función para mostrar los Brawlers al cargar la página
    renderBrawlers();
});