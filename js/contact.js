
// ================================
// PAH/NA CONTACT FORM
// ================================

// Email address that receives contact inquiries
const contactEmail = "hello@examplewebsite142.com";

// Get the contact form and status message
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("form-status");

// Run when the contact form is submitted
if (contactForm) {

  contactForm.addEventListener("submit", function (event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the visitor's information
    const name = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check that all fields contain information
    if (!name || !email || !message) {
      formStatus.textContent = "Please complete all required fields.";
      return;
    }

    // Prepare the email subject
    const subject = "Contact Form Message from " + name;

    // Prepare the email content
    const body =
      "Hello PAH/NA!" + "\n\n" +
      "You have received a new message through your Contact Us page." + "\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n\n" +
      "Message:" + "\n" +
      message;

    // Create the email application link
    const mailtoLink =
      "mailto:" + contactEmail +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    // Inform the visitor
    formStatus.textContent =
      "Your email application will open with your message prepared.";

    // Open the visitor's email application
    window.location.href = mailtoLink;

  });

}
