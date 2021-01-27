/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
let showMenu = false;
const mobileMenu = document.getElementById('mobile-menu');

function toggleMenu() {
  
  if (showMenu === true){
    showMenu = false;
    mobileMenu.classList.add('hidden');
  }else {
    showMenu = true;
    mobileMenu.classList.remove('hidden');
  }
}

