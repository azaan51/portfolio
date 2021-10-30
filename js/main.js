// ?Hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
   hamburger.classList.remove("active");
   navMenu.classList.remove("active");
}


// Event Listeners: Handling toggle event

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
   if (e.target.checked) {
       document.documentElement.setAttribute('data-theme', 'dark');
       localStorage.setItem('theme', 'dark'); //add this
   }
   else {
       document.documentElement.setAttribute('data-theme', 'light');
       localStorage.setItem('theme', 'light'); //add this
   }    
}


// Save user preference on load

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Smooth scroll
$('#navbar-scroll a, .btn-scroll-top').on('click', function (e) {
   if (this.hash !== '') {
      e.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
      {
         scrollTop: $(hash).offset().top - 70,
      },
      900
      );
   }
});
