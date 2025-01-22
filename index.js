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