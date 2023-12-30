document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let menuIcon = document.getElementById('menu-icon');
    let navbar = document.querySelector('.navbar');

    function removeActiveClass() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    function handleNavLinkClick(event) {
        event.preventDefault();
        let targetId = this.getAttribute('href').substring(1);
        let targetSection = document.getElementById(targetId);

        if (targetSection) {
            removeActiveClass();
            this.classList.add('active');
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Close the navbar after clicking a link
            navbar.classList.remove('active');
        }
    }

    function toggleNavbar() {
        navbar.classList.toggle('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });

    menuIcon.addEventListener('click', toggleNavbar);

    window.onscroll = () => {
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + section.offsetHeight) {
                removeActiveClass();
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });
    };
});


var typed = new Typed('.type-text', {
    strings: ['Web Developer.', 'Android App Developer.', 'UI/Ux Designer.'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});