document.addEventListener("DOMContentLoaded", function () {
  // FAQ Accordion functionality
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });

  // Contact form submission
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Validate form
      if (validateContactForm()) {
        const formData = new FormData(contactForm);

        try {
          const response = await fetch('http://localhost/dashboard/expessbus/contact.php', {
            method: 'POST',
            body: formData,
          });

          const result = await response.json();

          if (result.success) {
            // Show success message
            const formContainer = contactForm.parentElement;
            const successMessage = document.createElement("div");
            successMessage.className = "success-message";
            successMessage.innerHTML = `
                            <i class="fas fa-check-circle"></i>
                            <p>${result.message}</p>
                        `;

            // Replace form with success message
            contactForm.style.display = "none";
            formContainer.appendChild(successMessage);
            contactForm.reset();
          } else {
            alert(result.error || "An error occurred. Please try again.");
          }
        } catch (error) {
          console.error("Error submitting the form:", error);
          alert("An error occurred. Please try again.");
        }
      }
    });
  }

  // Form validation
  function validateContactForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Name validation
    if (name.value.trim() === "") {
      showError(name, "Please enter your name");
      isValid = false;
    }

    // Email validation
    if (email.value.trim() === "") {
      showError(email, "Please enter your email address");
      isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
      showError(email, "Please enter a valid email address");
      isValid = false;
    }

    // Subject validation
    if (subject.value === "") {
      showError(subject, "Please select a subject");
      isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
      showError(message, "Please enter your message");
      isValid = false;
    }

    return isValid;
  }

  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Show error message
  function showError(element, message) {
    // Create error message element
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;

    // Add error class to the input
    element.classList.add("error");

    // Insert error after the element's parent (form-group)
    element.parentNode.appendChild(errorDiv);
  }

  // Clear all errors
  function clearErrors() {
    // Remove all error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => msg.remove());

    // Remove error class from inputs
    const errorInputs = document.querySelectorAll(".error");
    errorInputs.forEach((input) => input.classList.remove("error"));
  }

  // Update navigation to highlight "Contact" when on index.html#contact
  function updateContactNavHighlight() {
    if (window.location.href.includes("index.html#contact")) {
      const contactLink = document.querySelector('nav a[href="contact.html"]');
      if (contactLink) {
        document.querySelectorAll("nav a").forEach((link) => {
          link.classList.remove("active");
        });
        contactLink.classList.add("active");
      }
    }
  }

  // Check URL on load and scroll
  updateContactNavHighlight();
  window.addEventListener("scroll", updateContactNavHighlight);
});
