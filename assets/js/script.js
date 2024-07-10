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

document.addEventListener('DOMContentLoaded', function() {
  const typingText = document.getElementById('typing-text');
  const cursor = document.getElementById('cursor');
  const text = typingText.textContent;
  typingText.textContent = '';
  let index = 0;
  
  function type() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 150); // Adjust the typing speed here
    } else {
      cursor.style.display = 'none'; // Hide cursor after typing is complete
    }
  }
  
  type();
});

