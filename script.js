const toggleButton = document.getElementsByClassName('nav__menu-toggle')[0];
const navbarLinks = document.getElementsByClassName('nav__list')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const menuItem = document.querySelectorAll('.nav__link');
    const menuLength = menuItem.length;

    // Function to update active link
    function updateActiveLink(clickedLink) {
        for (let i = 0; i < menuLength; i++) {
            menuItem[i].classList.remove('nav__link--active');
        }
        clickedLink.classList.add('nav__link--active');
    }

    // Set the initial active link based on current URL
    const currentLocation = location.href;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add('nav__link--active');
        }

        // Add click event listener to update active link on click
        menuItem[i].addEventListener('click', function () {
            updateActiveLink(this);
        });
    }
});

// Replace 'YOUR_USER_ID', 'YOUR_SERVICE_ID', and 'YOUR_TEMPLATE_ID' with your actual EmailJS integration details
emailjs.init('SdWtytXnx9U1M1F11');

document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Your EmailJS code here
        emailjs.sendForm('service_tcbu6au', 'template_qbm0d59', this).then(
            function (response) {
                alert('Your Message was sent!');
                console.log('SUCCESS!', response.status, response.text);
                // Clear the form fields
                document.getElementById('contact-form').reset();
            },
            function (error) {
                alert("Couldn't send your message!");

                console.log('FAILED...', error);
            }
        );
    });

document
    .querySelector('.contact-bar a')
    .addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'mailto:miloyeatesmagic@gmail.com';
    });
