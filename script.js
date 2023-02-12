document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = event.target.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      sections.forEach(section => {
        section.style.display = 'none';
      });

      targetSection.style.display = 'block';
    });
  });
});

document.getElementById("logo").style.display = "block";
var logo = document.getElementById("logo");



