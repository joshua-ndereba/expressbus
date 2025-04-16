document.addEventListener("DOMContentLoaded", function () {
  // Multi-step form functionality
  const steps = document.querySelectorAll(".form-step");
  const stepIndicators = document.querySelectorAll(".booking-steps .step");
  const nextButtons = document.querySelectorAll(".next-step");
  const prevButtons = document.querySelectorAll(".prev-step");

  // Booking date validation
  const bookingDateInput = document.getElementById("booking-date");
  if (bookingDateInput) {
    // Set minimum date to today
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const todayFormatted = `${year}-${month}-${day}`;

    bookingDateInput.setAttribute("min", todayFormatted);
    bookingDateInput.value = todayFormatted; // Set default value to today
  }

  // Handle next step buttons
  nextButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Validate current step if needed
      let isValid = validateStep(index);

      if (isValid) {
        steps[index].classList.remove("active");
        steps[index + 1].classList.add("active");

        stepIndicators[index].classList.remove("active");
        stepIndicators[index + 1].classList.add("active");

        // Update summary if going to the last step
        if (index + 1 === steps.length - 1) {
          updateBookingSummary();
        }

        // Scroll to top of form
        window.scrollTo({
          top: document.querySelector(".booking-steps").offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  // Handle previous step buttons
  prevButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      steps[index + 1].classList.remove("active");
      steps[index].classList.add("active");

      stepIndicators[index + 1].classList.remove("active");
      stepIndicators[index].classList.add("active");

      // Scroll to top of form
      window.scrollTo({
        top: document.querySelector(".booking-steps").offsetTop - 100,
        behavior: "smooth",
      });
    });
  });

  // Seat Selection
  const seats = document.querySelectorAll(".seat:not(.occupied)");
  const selectedSeatsDisplay = document.getElementById(
    "selected-seats-display"
  );
  const passengersSelect = document.getElementById("passengers");
  let maxSeats = 1;
  let selectedSeats = [];

  if (passengersSelect) {
    maxSeats = parseInt(passengersSelect.value);

    passengersSelect.addEventListener("change", function () {
      maxSeats = parseInt(this.value);

      // If more seats are selected than allowed, deselect the excess
      if (selectedSeats.length > maxSeats) {
        const seatsToKeep = selectedSeats.slice(0, maxSeats);

        seats.forEach((seat) => {
          const seatNumber = seat.getAttribute("data-seat");
          if (
            !seatsToKeep.includes(seatNumber) &&
            seat.classList.contains("selected")
          ) {
            seat.classList.remove("selected");
          }
        });

        selectedSeats = seatsToKeep;
        updateSelectedSeatsDisplay();
      }
    });
  }

  if (seats.length) {
    seats.forEach((seat) => {
      seat.addEventListener("click", () => {
        if (seat.classList.contains("selected")) {
          // Deselect seat
          seat.classList.remove("selected");
          selectedSeats = selectedSeats.filter(
            (s) => s !== seat.getAttribute("data-seat")
          );
        } else {
          // Select seat if under the limit
          if (selectedSeats.length < maxSeats) {
            seat.classList.add("selected");
            selectedSeats.push(seat.getAttribute("data-seat"));
          } else {
            // Show error or notification that max seats are selected
            alert(
              `You can only select ${maxSeats} seat(s). Please deselect a seat first.`
            );
          }
        }

        updateSelectedSeatsDisplay();
      });
    });
  }

  function updateSelectedSeatsDisplay() {
    if (selectedSeatsDisplay) {
      if (selectedSeats.length === 0) {
        selectedSeatsDisplay.textContent = "None";
      } else {
        selectedSeatsDisplay.textContent = selectedSeats.join(", ");
      }
    }
  }

  // Payment method toggle
  const paymentOptions = document.querySelectorAll(
    'input[name="payment-method"]'
  );
  const paymentForms = document.querySelectorAll(".payment-form");

  paymentOptions.forEach((option) => {
    option.addEventListener("change", function () {
      paymentForms.forEach((form) => form.classList.remove("active"));
      document.querySelector(`.${this.value}-form`).classList.add("active");
    });
  });

  // Booking form submission
  const bookingForm = document.getElementById("booking-route-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (validateStep(3)) {
        // Show success message
        const successMessage = document.createElement("div");
        successMessage.className = "success-message";
        successMessage.textContent =
          "Booking successful! Your tickets have been sent to your email.";

        bookingForm.innerHTML = "";
        bookingForm.appendChild(successMessage);

        // Reset steps
        stepIndicators.forEach((step) => step.classList.remove("active"));
      }
    });
  }

  // Validation for each step
  function validateStep(stepIndex) {
    switch (stepIndex) {
      case 0:
        // Route selection validation
        const from = document.getElementById("booking-from");
        const to = document.getElementById("booking-to");
        const date = document.getElementById("booking-date");

        let isValid = true;

        if (from.value === "") {
          showError(from, "Please select a departure location");
          isValid = false;
        } else {
          clearError(from);
        }

        if (to.value === "") {
          showError(to, "Please select a destination");
          isValid = false;
        } else {
          clearError(to);
        }

        if (from.value !== "" && to.value !== "" && from.value === to.value) {
          showError(to, "Departure and destination cannot be the same");
          isValid = false;
        }

        if (date.value === "") {
          showError(date, "Please select a travel date");
          isValid = false;
        } else {
          const selectedDate = new Date(date.value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          if (selectedDate < today) {
            showError(date, "Travel date cannot be in the past");
            isValid = false;
          } else {
            clearError(date);
          }
        }

        return isValid;

      case 1:
        // Passenger details validation
        const fullname = document.getElementById("fullname");
        const idNumber = document.getElementById("id-number");

        let isPassengerDataValid = true;

        if (fullname.value.trim() === "") {
          showError(fullname, "Please enter passenger name");
          isPassengerDataValid = false;
        } else {
          clearError(fullname);
        }

        if (idNumber.value.trim() === "") {
          showError(idNumber, "Please enter ID number");
          isPassengerDataValid = false;
        } else {
          clearError(idNumber);
        }

        return isPassengerDataValid;

      case 2:
        // Seat selection validation
        if (selectedSeats.length === 0) {
          alert("Please select at least one seat");
          return false;
        }

        if (selectedSeats.length !== maxSeats) {
          alert(`Please select exactly ${maxSeats} seat(s)`);
          return false;
        }

        return true;

      case 3:
        // Payment validation
        let isPaymentValid = true;
        const selectedPayment = document.querySelector(
          'input[name="payment-method"]:checked'
        ).value;

        if (selectedPayment === "mpesa") {
          const mpesaNumber = document.getElementById("mpesa-number");

          if (mpesaNumber.value.trim() === "") {
            showError(mpesaNumber, "Please enter M-Pesa number");
            isPaymentValid = false;
          } else if (!/^\d{10}$/.test(mpesaNumber.value.trim())) {
            showError(
              mpesaNumber,
              "Please enter a valid 10-digit phone number"
            );
            isPaymentValid = false;
          } else {
            clearError(mpesaNumber);
          }
        } else if (selectedPayment === "card") {
          const cardNumber = document.getElementById("card-number");
          const expiryDate = document.getElementById("expiry-date");
          const cvv = document.getElementById("cvv");
          const cardName = document.getElementById("card-name");

          if (cardNumber.value.trim() === "") {
            showError(cardNumber, "Please enter card number");
            isPaymentValid = false;
          } else {
            clearError(cardNumber);
          }

          if (expiryDate.value.trim() === "") {
            showError(expiryDate, "Please enter expiry date");
            isPaymentValid = false;
          } else {
            clearError(expiryDate);
          }

          if (cvv.value.trim() === "") {
            showError(cvv, "Please enter CVV");
            isPaymentValid = false;
          } else {
            clearError(cvv);
          }

          if (cardName.value.trim() === "") {
            showError(cardName, "Please enter name on card");
            isPaymentValid = false;
          } else {
            clearError(cardName);
          }
        }

        return isPaymentValid;

      default:
        return true;
    }
  }

  function showError(element, message) {
    // Clear any existing error
    clearError(element);

    // Create error message element
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;

    // Add error class to the input
    element.classList.add("error");

    // Insert error after the element's parent (form-group)
    element.parentNode.appendChild(errorDiv);
  }

  function clearError(element) {
    // Remove error class
    element.classList.remove("error");

    // Remove error message if exists
    const errorMessage = element.parentNode.querySelector(".error-message");
    if (errorMessage) {
      errorMessage.remove();
    }
  }

  function clearAllErrors() {
    document
      .querySelectorAll(".error-message")
      .forEach((error) => error.remove());
    document
      .querySelectorAll(".error")
      .forEach((element) => element.classList.remove("error"));
  }

  function updateBookingSummary() {
    const summaryRoute = document.getElementById("summary-route");
    const summaryDate = document.getElementById("summary-date");
    const summaryPassengers = document.getElementById("summary-passengers");
    const summarySeats = document.getElementById("summary-seats");
    const summaryTotal = document.getElementById("summary-total");

    const fromSelect = document.getElementById("booking-from");
    const toSelect = document.getElementById("booking-to");
    const dateInput = document.getElementById("booking-date");
    const passengersCount = document.getElementById("passengers");

    if (summaryRoute && fromSelect && toSelect) {
      const from = fromSelect.options[fromSelect.selectedIndex].text;
      const to = toSelect.options[toSelect.selectedIndex].text;
      summaryRoute.textContent = `${from} to ${to}`;
    }

    if (summaryDate && dateInput) {
      const date = new Date(dateInput.value);
      const options = { year: "numeric", month: "long", day: "numeric" };
      summaryDate.textContent = date.toLocaleDateString("en-US", options);
    }

    if (summaryPassengers && passengersCount) {
      summaryPassengers.textContent = passengersCount.value;
    }

    if (summarySeats) {
      summarySeats.textContent = selectedSeats.join(", ");
    }

    if (summaryTotal) {
      // Calculate ticket price (1500 per passenger)
      const price = 1500 * parseInt(passengersCount.value);
      summaryTotal.textContent = `KES ${price.toLocaleString()}`;
    }
  }
});
