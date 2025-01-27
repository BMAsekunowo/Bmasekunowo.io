document.addEventListener("scroll", function () {
  // Select the progress-cover section
  var progressCover = document.querySelector(".progress-cover");

  // Skill bar fill classes
  var skillBars = [
      ".skill-bar-fill1",
      ".skill-bar-fill2",
      ".skill-bar-fill3",
      ".skill-bar-fill4",
      ".skill-bar-fill5",
      ".skill-bar-fill6",
      ".skill-bar-fill7",
  ];

  // Skill name and percentage classes
  var skillNames = document.querySelectorAll(".skill-name");
  var percentages = document.querySelectorAll(".percentage");

  // Navbar height and total height above
  var navbarHeight = 80; // Adjust to match your navbar height
  var totalHeightAbove = 1500; // Adjust to match the height of sections above this one

  // Get the position of the progress-cover section relative to the viewport
  var sectionPosition = progressCover.getBoundingClientRect().top;

  // Calculate trigger point, considering the navbar height
  var triggerPoint = window.innerHeight - navbarHeight;

  // Trigger animations when the section is in focus
  if (sectionPosition < triggerPoint && sectionPosition > -totalHeightAbove) {
      // Start animations for skill bars
      skillBars.forEach(function (skillClass) {
          var skillBar = document.querySelector(skillClass);
          skillBar.style.animationPlayState = "running"; // Start progress bar animation
      });

      // Start animations for skill names
      skillNames.forEach(function (name) {
          name.style.animationPlayState = "running"; // Start skill name animation
      });

      // Start animations for percentages
      percentages.forEach(function (percentage) {
          percentage.style.animationPlayState = "running"; // Start percentage animation
      });
  }
  
  else {
      // Pause animations when the section is out of view
      skillBars.forEach(function (skillClass) {
          var skillBar = document.querySelector(skillClass);
          skillBar.style.animationPlayState = "paused"; // Pause progress bar animation
      });

      skillNames.forEach(function (name) {
          name.style.animationPlayState = "paused"; // Pause skill name animation
      });

      percentages.forEach(function (percentage) {
          percentage.style.animationPlayState = "paused"; // Pause percentage animation
      });
  }
});

// Ensure animations are paused on page load
document.addEventListener("DOMContentLoaded", function () {
  // Skill bar fill classes
  var skillBars = [
      ".skill-bar-fill1",
      ".skill-bar-fill2",
      ".skill-bar-fill3",
      ".skill-bar-fill4",
      ".skill-bar-fill5",
      ".skill-bar-fill6",
      ".skill-bar-fill7",
  ];

  // Skill name and percentage classes
  var skillNames = document.querySelectorAll(".skill-name");
  var percentages = document.querySelectorAll(".percentage");

  skillBars.forEach(function (skillClass) {
      var skillBar = document.querySelector(skillClass);
      skillBar.style.animationPlayState = "paused"; // Pause progress bar animation
  });

  skillNames.forEach(function (name) {
      name.style.animationPlayState = "paused"; // Pause skill name animation
  });

  percentages.forEach(function (percentage) {
      percentage.style.animationPlayState = "paused"; // Pause percentage animation
  });
});


/* Animation for section 4 */
document.addEventListener("scroll", function () {
    // Select the section and animated elements
    var section = document.querySelector("#section-4");
    var animatedElements = [
        ".serv1",
        ".serv2",
        ".servcov1"
    ];

    // Navbar height and total height above
    var navbarHeight = 80; // Height of the fixed navbar
    var totalHeightAbove = 2900; // Height of the sections above this one

    // Get the position of the section relative to the viewport
    var sectionPosition = section.getBoundingClientRect().top;

    // Calculate trigger point, considering the navbar height
    var triggerPoint = window.innerHeight - navbarHeight;

    // Trigger animations when the section is in focus
    if (sectionPosition < triggerPoint && sectionPosition > -totalHeightAbove) {
        animatedElements.forEach(function (className) {
            var element = document.querySelector(className);
            element.style.animationPlayState = "running"; // Start animation
        });
    } else {
        // Pause animations when the section is out of view
        animatedElements.forEach(function (className) {
            var element = document.querySelector(className);
            element.style.animationPlayState = "paused"; // Pause animation
        });
    }
});

// Ensure animations are paused on page load
document.addEventListener("DOMContentLoaded", function () {
    var animatedElements = [
        ".serv1",
        ".serv2",
        ".servcov1"
    ];

    animatedElements.forEach(function (className) {
        var element = document.querySelector(className);
        element.style.animationPlayState = "paused"; // Pause animation initially
    });
});


/* Animation for timeline section */
document.addEventListener("scroll", function () {
    // Select the timeline section and animated elements
    const section = document.querySelector(".timeline");
    const animatedElements = document.querySelectorAll(".timeline-item");

    if (!section) return; // Exit if the section is not found

    // Navbar height and total height above (adjust if needed)
    const navbarHeight = 80; // Height of the fixed navbar
    const totalHeightAbove = 4700; // Approximate height of sections above

    // Get the position of the section relative to the viewport
    const sectionPosition = section.getBoundingClientRect().top;

    // Calculate the trigger point for animation
    const triggerPoint = window.innerHeight - navbarHeight;

    // Trigger animations when the section is in focus
    if (sectionPosition < triggerPoint && sectionPosition > -totalHeightAbove) {
        animatedElements.forEach((element) => {
            element.style.animationPlayState = "running"; // Start animation
        });
    } else {
        // Pause animations when the section is out of view
        animatedElements.forEach((element) => {
            element.style.animationPlayState = "paused"; // Pause animation
        });
    }
});

// Ensure animations are paused on page load
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".timeline-item");

    animatedElements.forEach((element) => {
        element.style.animationPlayState = "paused"; // Pause animation initially
    });
});



//Floating Contact Script
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const inputs = form.querySelectorAll("input, textarea");

    // Function to validate input
    function validateField(field) {
        const errorMessage = field.nextElementSibling; // Assuming error messages follow each input
        if (field.hasAttribute("required") && !field.value.trim()) {
            errorMessage.textContent = `Please enter a valid ${field.placeholder.toLowerCase()}`;
            errorMessage.style.display = "block"; // Show error message
        } else if (field.type === "email" && !validateEmail(field.value)) {
            errorMessage.textContent = "Please enter a valid email address.";
            errorMessage.style.display = "block";
        } else {
            errorMessage.textContent = ""; // Clear error message
            errorMessage.style.display = "none"; // Hide error message
        }
    }

    // Function to validate email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Attach blur event to each input
    inputs.forEach(input => {
        input.addEventListener("blur", function () {
            validateField(input);
        });
    });

    // Form submission event
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission for validation

        let isFormValid = true;

        // Validate all inputs
        inputs.forEach(input => {
            validateField(input);
            if (input.hasAttribute("required") && !input.value.trim()) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            alert("Form submitted successfully!");
            form.reset(); // Clear form
        }
    });
});


//Scrollspy
// document.addEventListener('DOMContentLoaded', function () {
//     // Manually initialize ScrollSpy
//     const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//         target: '#navbar-example',
//         offset: 80 // Match your navbar height
//     });
// });