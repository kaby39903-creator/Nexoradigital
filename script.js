// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
  new Date().getFullYear();


<form
  id="contactForm"
  action="https://formspree.io/f/mrpqkvjy"
  method="POST"
>
  <div class="form-group">
    <label for="name">Your Name</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Enter your name"
      required
    >
  </div>

  <div class="form-group">
    <label for="email">Your Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email"
      required
    >
  </div>

  <div class="form-group">
    <label for="service">What do you need?</label>
    <select id="service" name="service" required>
      <option value="">Select a service</option>
      <option>Website Design</option>
      <option>Website Development</option>
      <option>Business Website</option>
      <option>Other</option>
    </select>
  </div>

  <div class="form-group">
    <label for="message">Project Details</label>
    <textarea
      id="message"
      name="message"
      placeholder="Tell us about your project..."
      required
    ></textarea>
  </div>

  <button type="submit" class="btn btn-primary">
    Send Enquiry →
  </button>

  <p id="formStatus" role="status"></p>
</form>

const revealElements = document.querySelectorAll(
  ".service-card, .work-card, .process-card, .about-grid"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});
