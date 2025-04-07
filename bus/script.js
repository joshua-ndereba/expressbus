// Set minimum date for the travel date input to today
document.addEventListener("DOMContentLoaded", function () {
  // Get today's date in YYYY-MM-DD format for the date input min attribute
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const todayFormatted = `${year}-${month}-${day}`;

  // Set the minimum date for the travel date input
  const travelDateInput = document.getElementById("travel-date");
  if (travelDateInput) {
    travelDateInput.setAttribute("min", todayFormatted);
    travelDateInput.value = todayFormatted; // Set default value to today
  }

  // Form validation
  const bookingForm = document.querySelector("#booking-form form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const fromSelect = document.getElementById("from");
      const toSelect = document.getElementById("to");
      const dateInput = document.getElementById("travel-date");

      let isValid = true;

      // Reset any previous error messages
      clearErrors();

      // Validate departure location
      if (fromSelect.value === "") {
        displayError(fromSelect, "Please select a departure location");
        isValid = false;
      }

      // Validate destination location
      if (toSelect.value === "") {
        displayError(toSelect, "Please select a destination");
        isValid = false;
      }

      // Validate that departure and destination are not the same
      if (
        fromSelect.value !== "" &&
        toSelect.value !== "" &&
        fromSelect.value === toSelect.value
      ) {
        displayError(toSelect, "Departure and destination cannot be the same");
        isValid = false;
      }

      // Validate travel date
      if (dateInput.value === "") {
        displayError(dateInput, "Please select a travel date");
        isValid = false;
      } else {
        const selectedDate = new Date(dateInput.value);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        if (selectedDate < currentDate) {
          displayError(dateInput, "Travel date cannot be in the past");
          isValid = false;
        }
      }

      // If form is valid, redirect to schedules page with parameters
      if (isValid) {
        const url = new URL("schedules.html", window.location.origin);
        url.searchParams.append("from", fromSelect.value);
        url.searchParams.append("to", toSelect.value);
        url.searchParams.append("date", dateInput.value);

        window.location.href = url.toString();
      }
    });
  }

  // Schedule page form handling
  const scheduleForm = document.querySelector("#schedule-form");
  if (scheduleForm) {
    // Pre-fill form fields if URL parameters exist
    const urlParams = new URLSearchParams(window.location.search);
    const fromParam = urlParams.get("from");
    const toParam = urlParams.get("to");
    const dateParam = urlParams.get("date");

    const scheduleFrom = document.getElementById("schedule-from");
    const scheduleTo = document.getElementById("schedule-to");
    const scheduleDate = document.getElementById("schedule-date");

    if (fromParam && scheduleFrom) scheduleFrom.value = fromParam;
    if (toParam && scheduleTo) scheduleTo.value = toParam;
    if (dateParam && scheduleDate) scheduleDate.value = dateParam;

    if (!scheduleDate.value) {
      scheduleDate.value = todayFormatted;
    }

    // Set min date for schedule page
    if (scheduleDate) {
      scheduleDate.setAttribute("min", todayFormatted);
    }

    // Handle form submission
    scheduleForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // Validation similar to home page form
      let isValid = validateScheduleForm();

      if (isValid) {
        // Simulate loading new schedules
        const schedulesSection = document.querySelector(".schedule-results");
        if (schedulesSection) {
          schedulesSection.scrollIntoView({ behavior: "smooth" });

          // Show loading state
          const container = schedulesSection.querySelector(".container");
          const loadingMessage = document.createElement("div");
          loadingMessage.className = "loading-message";
          loadingMessage.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> Finding routes...';
          container.prepend(loadingMessage);

          // Remove loading after 1 second to simulate API call
          setTimeout(() => {
            loadingMessage.remove();
          }, 1000);
        }
      }
    });
  }

  // Function to display error message
  function displayError(element, message) {
    // Create error message element
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;

    // Insert error after the element's parent (form-group)
    element.parentNode.appendChild(errorDiv);

    // Add error class to highlight input
    element.classList.add("error");
  }

  // Function to clear all error messages
  function clearErrors() {
    // Remove all error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => msg.remove());

    // Remove error class from inputs
    const errorInputs = document.querySelectorAll(".error");
    errorInputs.forEach((input) => input.classList.remove("error"));
  }

  function validateScheduleForm() {
    const from = document.getElementById("schedule-from");
    const to = document.getElementById("schedule-to");
    const date = document.getElementById("schedule-date");

    let isValid = true;

    clearErrors();

    if (from.value === "") {
      displayError(from, "Please select a departure location");
      isValid = false;
    }

    if (to.value === "") {
      displayError(to, "Please select a destination");
      isValid = false;
    }

    if (from.value !== "" && to.value !== "" && from.value === to.value) {
      displayError(to, "Departure and destination cannot be the same");
      isValid = false;
    }

    if (date.value === "") {
      displayError(date, "Please select a travel date");
      isValid = false;
    } else {
      const selectedDate = new Date(date.value);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);

      if (selectedDate < currentDate) {
        displayError(date, "Travel date cannot be in the past");
        isValid = false;
      }
    }

    return isValid;
  }

  // Mobile menu toggle (for responsive design)
  const mobileMenuButton = document.createElement("button");
  mobileMenuButton.className = "mobile-menu-toggle";
  mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';

  const header = document.querySelector("header .container");
  const nav = document.querySelector("nav");

  if (header && nav) {
    header.insertBefore(mobileMenuButton, nav);

    mobileMenuButton.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }

  // Add smooth scrolling for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Only add smooth scrolling for same-page links
      if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }

        // Close mobile menu if open
        const nav = document.querySelector("nav");
        if (nav.classList.contains("show")) {
          nav.classList.remove("show");
        }
      }
    });
  });
});
