const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if(currentTheme === "dark") rootHtml.setAttribute("data-theme", "light")
    else rootHtml.setAttribute("data-theme", "dark")

    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon-stars")

}

toggleTheme.addEventListener("click", changeTheme);

const menuLinks = document.querySelectorAll(".menu__link");

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})