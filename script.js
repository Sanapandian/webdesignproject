function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const emailField = document.getElementById('email');
      const passwordField = document.getElementById('password');
      const email = emailField.value;
      const password = passwordField.value;
      const errorMessage = document.getElementById('error');

      // Email validation using a regex pattern
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      const isEmailValid = emailPattern.test(email);

      // Password validation: minimum length of 8 characters
      const isPasswordValid = password.length >= 8;

      if (isEmailValid && isPasswordValid) {
          alert('Login successful!');
          errorMessage.textContent = '';

          // Clear the input fields after successful submission
          emailField.value = '';
          passwordField.value = '';
      } 
      else {
          if (!isEmailValid) {
              errorMessage.textContent = 'Invalid email format.';
          } else if (!isPasswordValid) {
              errorMessage.textContent = 'Password must be at least 8 characters long.';
          }
      }
  });
});
let currentIndex = 0;

function nextSlide() {
    const sliderWrapper = document.querySelector('.album-slider-wrapper');
    const slides = document.querySelectorAll('.album-card');
    const slideWidth = slides[0].clientWidth;

    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function prevSlide() {
    const sliderWrapper = document.querySelector('.album-slider-wrapper');
    const slides = document.querySelectorAll('.album-card');
    const slideWidth = slides[0].clientWidth;

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }

    sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
