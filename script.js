
console.log("Welcome to Sai Bharath's Portfolio!");

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        console.log("Navigation clicked");
    });
});

