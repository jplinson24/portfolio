document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loading-screen');

  // Ensure scroll is at the top on page reload
  window.scrollTo(0, 0);

  // Function to start the typing effect
  function startTypingEffect() {
      const typingText = document.getElementById('typing-text');
      const cursor = document.getElementById('cursor');
      const text = typingText.getAttribute('data-text'); // Use a data attribute to store the initial text
      typingText.textContent = ''; // Clear the initial text content
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
  }

  // Simulate loading completion after 3 seconds (replace this with actual loading logic)
  setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
          loadingScreen.style.display = 'none';
          startTypingEffect(); // Start typing effect after loading screen fades out
      }, 1000); // Match this with the duration of the fade-out animation
  }, 3000);
});
