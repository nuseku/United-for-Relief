// Initialize EmailJS with your user ID
emailjs.init('YOUR_USER_ID');

// Get the form element and add a submit event listener
const form = document.getElementById('email-form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the user's email address from the input field
  const userEmail = form.elements.email.value;

  // Use EmailJS to send an email to your email address
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {to_email: 'earthquakefund123@gmail.com', user_email: Earthquake Relief})
    .then(() => {
      alert('Email sent successfully!');
      form.reset(); // Clear the form
    }, (error) => {
      alert(`Email failed to send: ${error}`);
    });
});
