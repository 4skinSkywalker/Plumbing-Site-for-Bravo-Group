(async function () {

    const nav = document.querySelector(".header__nav");
    const navLinks = [...document.querySelectorAll(".header__nav-link")];
    
    document.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            nav.classList.remove("scrolled");
        } else if (window.scrollY > 3 * 16) {
            nav.classList.add("scrolled");
        }
    });

    navLinks.forEach(navLink =>
        navLink.addEventListener("click", () => {
            navLinks.forEach(navLink => navLink.classList.remove("active"));
            navLink.classList.add("active");
        })
    );

})();