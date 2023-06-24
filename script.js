// Check if dark mode preference is set
const isDarkMode = localStorage.getItem('darkMode');

// Apply dark mode if enabled
if (isDarkMode === 'true') {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode
document.querySelector('.switch input').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    
    // Save dark mode preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
    } else {
        localStorage.setItem('darkMode', 'false');
    }
});
