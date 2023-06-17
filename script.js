// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (let anchorLink of anchorLinks) {
      anchorLink.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
  });

// Function to send WhatsApp message
function sendWhatsAppMessage() {
    // Replace "YOUR_PHONE_NUMBER" with your actual phone number including the country code
    const phoneNumber = "+27765334179";
    
    // Create the WhatsApp message URL
    const url = `https://wa.me/${phoneNumber}`;
    
    // Redirect the user to the WhatsApp message URL
    window.location.href = url;
  }
  
  
  // Form submission
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Perform form submission logic here (handled by Formspree)
  
    // Clear form fields after successful submission
    form.reset();
  });

  // Function to open email application
function sendEmail() {
    // Replace "YOUR_EMAIL_ADDRESS" with your actual email address
    const emailAddress = "notificationsks@gmail.com";
  
    // Replace "SUBJECT" with the desired email subject
    const subject = "Lessons";
  
    // Replace "BODY" with the desired email body
    const body = "";
  
    // Create the mailto URL
    const url = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Open the user's default email application
    window.location.href = url;
  }
  


  
  