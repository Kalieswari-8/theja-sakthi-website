/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const navbar = document.getElementById("navbar");

if (menuButton && navbar) {

    menuButton.addEventListener("click", () => {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuButton.innerHTML = "✕";
        } else {
            menuButton.innerHTML = "☰";
        }

    });

}


/* ================= CLOSE MENU AFTER CLICK ================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        if (menuButton) {
            menuButton.innerHTML = "☰";
        }

    });

});


/* ================= HEADER SCROLL EFFECT ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.style.boxShadow =
            "0 8px 30px rgba(30, 70, 35, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .info-card, .service-card, .process-step, .founder-content, .founder-visual, .why-card, .projects-placeholder, .contact-card, .contact-box"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


/* ================= PHONE CONFIRMATION ================= */

const callLinks = document.querySelectorAll(
    'a[href^="tel:"]'
);

callLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Calling Theja Sakthi Solar Energy Founder..."
        );

    });

});


/* ================= PAGE LOADED ================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "Theja Sakthi Solar Energy website loaded successfully."
    );

});