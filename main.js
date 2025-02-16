(async function () {
    document.addEventListener("DOMContentLoaded", function() {
        if (window.location.search.indexOf("successmail") !== -1) {
            document.getElementById('successModal').classList.add('active');
            
            const quoteSection = document.getElementById('quote');
            if (quoteSection) {
                quoteSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        document.getElementById('modalClose').addEventListener('click', function() {
            document.getElementById('successModal').classList.remove('active');
        });
        
        document.getElementById('successModal').addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    });

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

    const hammenuLinks = [...document.querySelectorAll(".hammenu-link")];
    hammenuLinks.forEach(link => {
        link.addEventListener("click", () => {
            hammenuLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
            setTimeout(() => {
                document.querySelector("#hammenu-check").checked = false;
            }, 500);
        });
    });
})();