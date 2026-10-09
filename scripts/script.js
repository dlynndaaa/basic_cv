const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector("#navbar ul");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
});

document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove("show");
    });
});
