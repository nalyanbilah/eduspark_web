document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.page-transition-overlay');
    const roleCards = document.querySelectorAll('.role-card');

    // Function to handle role card click
    roleCards.forEach(card => {
        card.addEventListener('click', () => {
            // Show the overlay
            overlay.classList.add('active');

            // Delay the navigation to allow the overlay effect to show
            setTimeout(() => {
                const role = card.getAttribute('data-role');
                let loginPage = '';

                switch(role) {
                    case 'student':
                        loginPage = 'student_login.html'; // Change to your actual student login page
                        break;
                    case 'parent':
                        loginPage = 'parent_login.html'; // Change to your actual parent login page
                        break;
                    case 'teacher':
                        loginPage = 'teacher_login.html'; // Change to your actual teacher login page
                        break;
                    case 'admin':
                        loginPage = 'admin_login.html'; // Change to your actual admin login page
                        break;
                    default:
                        loginPage = 'index.html'; // Fallback
                }

                window.location.href = loginPage; // Navigate to the respective login page
            }, 500); // Adjust the timeout duration to match your CSS transition duration
        });
    });
});