let activeCategory = "all";

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("open");
}

function applyFilters() {
    const searchValue = document.getElementById("projectSearch").value.toLowerCase();
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {
        const text = project.innerText.toLowerCase();
        const tags = project.dataset.tags || "";

        const matchSearch = text.includes(searchValue) || tags.includes(searchValue);
        const matchCategory = activeCategory === "all" || tags.includes(activeCategory);

        project.style.display = matchSearch && matchCategory ? "block" : "none";
    });
}

function filterByCategory(category, event) {
    activeCategory = category;

    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    applyFilters();
}
