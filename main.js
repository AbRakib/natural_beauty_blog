// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
    if (el.isIntersecting) {
        el.target.classList.add('in-view');
        observer.unobserve(el.target);
    }
    });
}, { threshold: 0.12 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// Newsletter form
document.querySelector('form').addEventListener('submit', function(e) {
    const btn = this.querySelector('button');
    const input = this.querySelector('input');
    if (input.value && input.validity.valid) {
    btn.textContent = '✓ Subscribed!';
    btn.classList.replace('bg-moss-600', 'bg-moss-700');
    input.value = '';
    setTimeout(() => { btn.textContent = 'Join us'; btn.classList.replace('bg-moss-700', 'bg-moss-600'); }, 3000);
    }
});