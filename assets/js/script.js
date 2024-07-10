document.getElementById('downloadBtn').addEventListener('click', function() {
  const resumeUrl = 'assets/pdf/LINSON_JOHN_PATRICK_RESUME.pdf';  
  window.open(resumeUrl, '_blank');
});


// Toggle the menu on click
document.getElementById('menu').addEventListener('click', function () {
  document.querySelector('nav').classList.toggle('active');
});

// Close the menu when a link is clicked
document.querySelectorAll('nav ul a').forEach(item => {
  item.addEventListener('click', function () {
    document.querySelector('nav').classList.remove('active');
  });
});