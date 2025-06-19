document.addEventListener('DOMContentLoaded', () => {
    // Scroll-triggered animation logic
    const animatedElements = document.querySelectorAll('.competencia-proyecto');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // observer.unobserve(entry.target); // Optional
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1
        });
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Active navigation link highlighting
    const navLinks = document.querySelectorAll('header nav ul li a');
    const currentPage = window.location.pathname.split('/').pop();
    const isPhasePage = currentPage === 'fase1.html' || currentPage === 'fase2.html' || currentPage === 'fase3.html';

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();

            // Deactivate all links first (if any were previously marked by browser back/forward)
            link.classList.remove('active');

            // Check for exact match or index.html for root path
            if ((currentPage === '' && linkPage === 'index.html') || linkPage === currentPage) {
                link.classList.add('active');
            }

            // If on a phase page, also activate the main "Proyectos" link
            // This also means if current page is "proyectos.html" it will be active from the above condition.
            if (isPhasePage && linkPage === 'proyectos.html') {
                link.classList.add('active');
            }

            // If on a phase page, and this link is for that specific phase page (inside the submenu)
            if (isPhasePage && linkPage === currentPage) {
                link.classList.add('active'); // This will activate the link within the submenu
            }
        });
    }
});
