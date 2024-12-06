import config from "./config.js";


// Large Screen
const apiKey = config.VITE_SHEETS_DB_API_KEY;

console.log(`Your API Key: ${apiKey}`);

const url = "https://sheetdb.io/api/v1/u1wp3v03b9fe8";

const showLoading = (isLoading, submitButton) => {
    if (isLoading) {
        submitButton.innerHTML = `<div class="loader"></div>`;
    } else {
        submitButton.innerHTML = `
            <img src="/assets/img/cArrow.png" class="h-full w-full object-contain" alt="arrow">
        `;
    }
};

const initializeNewsletter = () => {
    // Get all submit buttons with the class "submitEmail"
    const submitButtons = document.querySelectorAll(".submitEmail");

    submitButtons.forEach((submitButton) => {
        // Add click event listener to each button
        submitButton.addEventListener("click", async () => {
            // Locate the corresponding email input field
            const emailInput = submitButton.parentNode.querySelector("input[type='email']");

            if (!emailInput) {
                console.error("Email input not found for submit button:", submitButton);
                return;
            }

            const emailVal = emailInput.value.trim();
            const date = new Date();

            // Email validation function
            const validateEmail = (email) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            };

            if (!emailVal) {
                alert("Email cannot be empty");
                return;
            }

            if (!validateEmail(emailVal)) {
                alert("Invalid email format");
                return;
            }

            try {
                // Show loading animation
                showLoading(true, submitButton);

                // Make the API request
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({
                        data: [
                            {
                                userId: Date.now(),
                                email: emailVal,
                                date: date.toISOString(),
                            },
                        ],
                    }),
                });

                const result = await response.json();
                console.log("Submission result:", result);

                // Clear the input field
                emailInput.value = "";

                // Show success message
                showLoading(false, submitButton);
            } catch (error) {
                console.error("Error submitting email:", error);
                // Revert the button back to its default state in case of error
                showLoading(false, submitButton);
            }
        });
    });
};

// Initialize the functionality after the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", initializeNewsletter);











// Small Screen

const url2 = "https://sheetdb.io/api/v1/u1wp3v03b9fe8";

const showLoading1 = (isLoading, submitButton) => {
    if (isLoading) {
        submitButton.innerHTML = `<div class="loader"></div>`;
    } else {
        submitButton.innerHTML = `
        <img src="/assets/img/longArrow.png" class="h-full w-full object-contain" alt=”left-down arrow”>
        `;
    }
};

const initializeNewsletter1 = () => {
    // Get all submit buttons with the class "submitEmail1"
    const submitButtons = document.querySelectorAll(".submitEmail1");

    submitButtons.forEach((submitButton) => {
        // Add click event listener to each button
        submitButton.addEventListener("click", async () => {
            // Locate the corresponding email input field
            const emailInput = submitButton.parentNode.querySelector("input[type='email']");

            if (!emailInput) {
                console.error("Email input not found for submit button:", submitButton);
                return;
            }

            const emailVal = emailInput.value.trim();
            const date = new Date();

            // Email validation function
            const validateEmail = (email) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            };

            if (!emailVal) {
                alert("Email cannot be empty");
                return;
            }

            if (!validateEmail(emailVal)) {
                alert("Invalid email format");
                return;
            }

            try {
                // Show loading animation
                showLoading1(true, submitButton);

                // Make the API request
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({
                        data: [
                            {
                                userId: Date.now(),
                                email: emailVal,
                                date: date.toISOString(),
                            },
                        ],
                    }),
                });

                const result = await response.json();
                console.log("Submission result:", result);

                // Clear the input field
                emailInput.value = "";

                // Show success message
                showLoading1(false, submitButton);
            } catch (error) {
                console.error("Error submitting email:", error);
                // Revert the button back to its default state in case of error
                showLoading1(false, submitButton);
            }
        });
    });
};

// Initialize the functionality after the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", initializeNewsletter1);







