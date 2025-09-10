  // Form submission handling
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading indicator
    document.querySelector('.loading').style.display = 'block';
    
    // Get form data
    const formData = new FormData(this);
    
    // Submit form using fetch
    fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Hide loading indicator
        document.querySelector('.loading').style.display = 'none';
        
        // Show success message
        const formMessage = document.getElementById('form-message');
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.style.color = '#4CAF50';
        formMessage.style.display = 'block';
        
        // Reset form
        this.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      // Hide loading indicator
      document.querySelector('.loading').style.display = 'none';
      
      // Show error message
      const formMessage = document.getElementById('form-message');
      formMessage.textContent = 'Oops! There was a problem sending your message. Please try again.';
      formMessage.style.color = '#f44336';
      formMessage.style.display = 'block';
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
      
      console.error('Error:', error);
    });
  });