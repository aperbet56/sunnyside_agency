// Récupération des différents éléments
const menuBtn = document.querySelector("#mobile__menu");
const mobileNav = document.getElementsByClassName("nav__links")[0];
const navLinks = [...document.querySelectorAll(".nav__link")];

// Déclaration de la fonction toggleNav pour activer /désactiver la navigation mobile
const toggleNav = () => {
  mobileNav.classList.toggle("active");
};

// Ecoute de l'événement click sur le menu burger et appel de la fonction toggleNav
menuBtn.addEventListener("click", toggleNav);

navLinks.forEach((nav) =>
  // Ecoute de l'événement click
  nav.addEventListener("click", (e) => {
    // Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.
    e.stopPropagation();
    // Apeel de la fonction toggleNav
    toggleNav();
  })
);
