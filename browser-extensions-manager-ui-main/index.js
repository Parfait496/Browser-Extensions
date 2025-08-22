function toggleTheme() {
  document.body.classList.toggle('dark');
  let btn = document.querySelector(".theme-toggle");
  if (document.body.classList.contains('dark')) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}

// Toggle switches
document.querySelectorAll(".toggle").forEach(t => {
  t.addEventListener("click", () => {
    t.classList.toggle("active");
    let card = t.closest(".card");
    if (t.classList.contains("active")) {
      card.classList.add("active");
      card.classList.remove("inactive");
    } else {
      card.classList.add("inactive");
      card.classList.remove("active");
    }
  });
});

// Filter system
function filterExtensions(filter) {
  let buttons = document.querySelectorAll(".filters button");
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  let cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (filter === "all") {
      card.style.display = "flex";
    } else if (filter === "active" && card.classList.contains("active")) {
      card.style.display = "flex";
    } else if (filter === "inactive" && card.classList.contains("inactive")) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}
