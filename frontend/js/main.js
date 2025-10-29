
// Variable Ruban choix de la langue
//-------------------------------------

  let choixLangue = "FRANCAIS (Fr)";
  document.getElementById("langue").textContent = choixLangue;

// Variable Ruban choix de la monnaie
//-------------------------------------

  let choixMonnaie = "EURO €";
  document.getElementById("monnaie").textContent = choixMonnaie;


// Gestion du menu hamburger
//-------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.querySelector('.navbar-toggler');
  const menuPrincipal = document.getElementById('menuPrincipal');
  
  if (hamburgerButton && menuPrincipal) {
    hamburgerButton.addEventListener('click', function() {
      // affiche/masque le menu
      menuPrincipal.classList.toggle('show');
    });
  }
});
