// ===== JAGTRACK THEME TOGGLE =====
// This JavaScript adds dark/light mode switching functionality


// This code runs when the page loads
document.addEventListener('DOMContentLoaded', function() {


   // Get the theme toggle button and icon
   const themeToggle = document.getElementById('theme-toggle');
   const themeIcon = document.getElementById('theme-icon');


   // Check if user has a saved theme preference in localStorage
   // localStorage saves data in the browser that persists between visits
   const currentTheme = localStorage.getItem('theme');


   // If user previously chose dark mode, apply it
   if (currentTheme === 'dark') {
       document.documentElement.setAttribute('data-theme', 'dark');
       themeIcon.textContent = '🌙';
   }


   // Listen for clicks on the theme toggle button
   themeToggle.addEventListener('click', function(e) {
       e.preventDefault(); // Prevents the link from navigating


       // Check what theme is currently active
       const currentTheme = document.documentElement.getAttribute('data-theme');


       // Toggle between dark and light
       if (currentTheme === 'dark') {
           // Switch to light mode
           document.documentElement.setAttribute('data-theme', 'light');
           themeIcon.textContent = '☀️';
           localStorage.setItem('theme', 'light');
       } else {
           // Switch to dark mode
           document.documentElement.setAttribute('data-theme', 'dark');
           themeIcon.textContent = '🌙';
           localStorage.setItem('theme', 'dark');
       }
   });
});
