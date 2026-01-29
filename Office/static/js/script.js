// Copied from school/static/js/script.js
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^(\+977)?[0-9]{10}$/;
  return re.test(phone);
}

// Auto-close alerts
document.addEventListener('DOMContentLoaded', function() {
  const alerts = document.querySelectorAll('.alert');
  alerts.forEach(alert => {
    setTimeout(() => {
      alert.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => alert.remove(), 300);
    }, 5000);
  });
});

// Mobile menu toggle (if you add it later)
const toggleMenu = () => {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
};

// Add active state to current nav item
document.addEventListener('DOMContentLoaded', function() {
  const currentLocation = location.pathname.split('/').pop();
  const menuItems = document.querySelectorAll('.nav-menu a');
  
  menuItems.forEach(item => {
    const href = item.getAttribute('href');
    if(href === currentLocation || (href === 'index.html' && currentLocation === '')) {
      item.style.borderBottomColor = 'var(--primary)';
      item.style.color = 'var(--primary)';
    }
  });
});
