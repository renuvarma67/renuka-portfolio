/* =================================
   PROJECT DATA (3 PROJECTS)
================================= */
const projects = [
  {
    title: "AI Chatbot",
    description:
      "Built an intelligent chatbot using NLP techniques. Implemented intent recognition, response generation, and trained models to improve accuracy."
  },
  {
    title: "Detection of Fake Bank currency",
    description:
       "Developed and compared ML models (Logistic Regression, Random Forest, SVM) to detect counterfeit currency using Python and Scikit-learn, achieving high accuracy in classification and fraud detection. " },
  {
    title: "ML Prediction App",
    description:
      "Built and trained ML models to predict stroke risk based on medical data through data preprocessing and model evaluation using Python. "  }
];

/* =================================
   PROJECT MODAL FUNCTIONS
================================= */
function openModal(index) {
  document.getElementById("modal-title").innerText = projects[index].title;
  document.getElementById("modal-description").innerText = projects[index].description;
  document.getElementById("modal").style.display = "flex";
  document.body.classList.add("modal-open");
}


function closeModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;

  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

/* =================================
   CONTACT FORM
================================= */
function sendMessage(e) {
  e.preventDefault();
  const msg = document.getElementById("success-msg");
  if (msg) msg.textContent = "Message sent successfully!";
  const form = document.getElementById("contactForm");
  if (form) form.reset();
}

/* =================================
   SKILLS ICON ACTIVE TOGGLE
================================= */
document.querySelectorAll(".icon").forEach(icon => {
  icon.addEventListener("click", () => {
    document.querySelectorAll(".icon").forEach(i =>
      i.classList.remove("active")
    );
    icon.classList.add("active");
  });
});

/* =================================
   STAGGERED SKILLS (ONE BY ONE)
================================= */
const skillsSection = document.querySelector(".skills-bars");
const skillItems = document.querySelectorAll(".skill-item");

if (skillsSection) {
  const skillObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("show");
              const bar = item.querySelector(".bar div");
              if (bar) bar.style.width = bar.dataset.width;
            }, index * 400); // one by one
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  skillObserver.observe(skillsSection);
}

/* =================================
   SCROLL REVEAL FOR SECTIONS
================================= */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach(section => {
  revealObserver.observe(section);
});

/* =================================
   ROLES BESIDE NAME (ONE BY ONE)
================================= */
const typingEl = document.querySelector(".typing");

if (typingEl) {
  const roles = [
    " a Tech Enthusiast",
    "an AI Engineer",
    "a ML Engineer"
  ];

  let index = 0;

  function changeRole() {
    typingEl.textContent = roles[index];
    index = (index + 1) % roles.length;
  }

  changeRole();
  setInterval(changeRole, 2000);
}

/* =================================
   DARK / LIGHT TOGGLE
================================= */
function toggleTheme() {
  document.body.classList.toggle("dark");
  const btn = document.querySelector(".toggle-btn");
  if (btn) {
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  }
}
