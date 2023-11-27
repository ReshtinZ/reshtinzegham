document.addEventListener("DOMContentLoaded", function () {
    
function toggleMenu() {
    var linksContainer = document.querySelector(".links");
    linksContainer.classList.toggle("show");
  }
  const tablinks = document.getElementsByClassName("tab-links");
  const tabcontents = document.getElementsByClassName("tab-contents");
  function opentab(tabname) {
    for (tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }



    // Show/hide tooltip on hover
    exclamationIcon.addEventListener("mouseover", function () {
      tooltip.style.visibility = "visible";
      tooltip.style.opacity = 1;
    });

    exclamationIcon.addEventListener("mouseout", function () {
      tooltip.style.visibility = "hidden";
      tooltip.style.opacity = 0;
    });
  });

  // Swiper

  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  const swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      },
    },
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  function downloadCV() {
    const animationDuration = 3000;

    // Trigger the button animation
    const button = document.querySelector(".download");
    button.classList.add("activebtn");

    // Delay the download after the animation duration
    setTimeout(() => {
      // Actual download logic goes here
      const link = document.createElement("a");
      link.href = "/images/CV.pdf";
      link.download = "CV.pdf";
      link.target = "_blank"; // Open in a new tab/window
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Delay the resetting of the button state after the download
      setTimeout(() => {
        button.classList.remove("activebtn");
      }, animationDuration);
    }, animationDuration);
  }

  // Handle the beforeunload event to reset the flag in case the user leaves the page
  window.addEventListener("beforeunload", () => {
    downloadInitiated = false;
  });


  // Add the color of FAQs when hoverd on

  const labels = document.querySelectorAll(".question-item label");

  labels.forEach((label) => {
    const span = label.querySelector(".for-gradient");
    const icon = label.querySelector(".fa-circle-chevron-down");

    label.addEventListener("mouseenter", () => {
      span.classList.add("gradient");
      icon.classList.add("gradient");
    });

    label.addEventListener("mouseleave", () => {
      span.classList.remove("gradient");
      icon.classList.remove("gradient");
    });
  });
});

