const projects = [
    {
        id: "arduino-prototype",
        title: "Arduino Hardware Prototype",
        category: "Electronics",
        timeline: "Hardware & Embedded",
        image: "https://placehold.co/900x450/101d35/38bdf8?text=Arduino+Hardware+Prototype+%28Add+Photo+Later%29",
        description: "Sample template: Microcontroller-based sensor monitoring and actuator control project written in Arduino code.",
        overview: "Designed and programmed a microcontroller-based embedded system capable of reading real-time environmental sensor data and triggering automated actuator responses with low latency.",
        features: [
            "Custom sensor calibration and noise filtering in Arduino C/C++",
            "Real-time serial telemetry output for live monitoring",
            "Modular breadboard-to-enclosure circuit layout"
        ],
        learnings: "Strengthened practical understanding of microcontroller pin interfacing, analog-to-digital conversion, and power management for hardware components.",
        tags: ["Arduino Code", "Sensors", "Hardware"],
        link: ""
    },
    {
        id: "python-automation",
        title: "Python Automation & Logic Script",
        category: "Programming",
        timeline: "Software Utility",
        image: "https://placehold.co/900x450/101d35/38bdf8?text=Python+Engineering+Script+%28Add+Screenshot+Later%29",
        description: "Sample template: Python utility developed to process data and solve engineering calculations.",
        overview: "Built a structured Python utility to automate repetitive numerical computations and parse experimental datasets cleanly into readable summaries.",
        features: [
            "Clean modular functions for mathematical and engineering formulas",
            "Automated input validation and structured file output",
            "Lightweight command-line workflow"
        ],
        learnings: "Improved algorithmic problem-solving and clean code structuring in Python for faster engineering analysis.",
        tags: ["Python", "Problem Solving"],
        link: ""
    },
    {
        id: "personal-portfolio",
        title: "Personal Portfolio Website",
        category: "Web",
        timeline: "Web Development",
        image: "https://placehold.co/900x450/101d35/2dd4bf?text=Personal+Portfolio+Website",
        description: "Responsive portfolio website built with HTML, CSS, and JavaScript to showcase projects and skills.",
        overview: "Created a dark, atmospheric portfolio website featuring interactive section tracking, dynamic category filtering, and dedicated project overview sheets.",
        features: [
            "Responsive layout engineered for mobile, tablet, and desktop screens",
            "Interactive category filtering and detailed project case-study views",
            "Subtle dark blocks with hairline dividers and cerulean accents"
        ],
        learnings: "Applied core HTML, CSS, and JavaScript DOM manipulation concepts to craft a distraction-free user interface.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: ""
    }
];

let currentFilter = "all";

const projectsGrid = document.getElementById("projects-grid");
const projectModal = document.getElementById("project-modal");
const projectFilters = document.getElementById("project-filters");

const categoryMeta = {
    Electronics: { icon: "fa-microchip", badgeClass: "icon-cerulean" },
    Programming: { icon: "fa-terminal", badgeClass: "icon-cerulean" },
    Web: { icon: "fa-code", badgeClass: "icon-teal" },
    Design: { icon: "fa-cube", badgeClass: "icon-ochre" }
};

function openProjectOverview(project) {
    if (!projectModal) return;

    document.getElementById("modal-category-badge").textContent = project.category;
    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-timeline").textContent = project.timeline || "Project";
    document.getElementById("modal-image").src = project.image || "https://placehold.co/900x450/101d35/38bdf8?text=Project+Preview";
    document.getElementById("modal-overview").textContent = project.overview || project.description;
    document.getElementById("modal-learnings").textContent = project.learnings || "Hands-on exploration and iterative testing.";

    document.getElementById("modal-features").innerHTML =
        (project.features || [project.description]).map(item => `<li>${item}</li>`).join("");

    document.getElementById("modal-tags").innerHTML =
        (project.tags || []).map(tag => `<span class="modal-tag-pill">${tag.trim()}</span>`).join("");

    const linkContainer = document.getElementById("modal-link-container");
    if (project.link) {
        linkContainer.innerHTML = `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="modal-external-link">
                <span>Open External Link / Repo</span>
                <i class="fas fa-external-link-alt" aria-hidden="true"></i>
            </a>
        `;
    } else {
        linkContainer.innerHTML = `<span class="modal-link-note"><i class="fas fa-code-branch" aria-hidden="true"></i>Source / Demo link can be added anytime</span>`;
    }

    projectModal.classList.remove("hidden");
    document.body.classList.add("modal-open");
    projectModal.scrollTop = 0;
}

function closeProjectOverview() {
    if (!projectModal) return;
    projectModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
}

document.getElementById("close-project-modal")?.addEventListener("click", closeProjectOverview);
document.getElementById("close-project-modal-bottom")?.addEventListener("click", closeProjectOverview);

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && projectModal && !projectModal.classList.contains("hidden")) {
        closeProjectOverview();
    }
});

projectModal?.addEventListener("click", event => {
    if (event.target === projectModal) closeProjectOverview();
});

function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = "";

    const visibleProjects = currentFilter === "all"
        ? projects
        : projects.filter(project => project.category === currentFilter);

    if (visibleProjects.length === 0) {
        projectsGrid.innerHTML = `
            <div class="project-card project-card-empty">
                <p class="project-card-desc">No projects in this category yet.</p>
            </div>
        `;
        return;
    }

    visibleProjects.forEach(project => {
        const meta = categoryMeta[project.category] || categoryMeta.Electronics;
        const tagsHtml = (project.tags || []).map(tag =>
            `<span class="project-tag">${tag.trim()}</span>`
        ).join("");

        const card = document.createElement("article");
        card.className = "project-card stagger-item";
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", `Open ${project.title} overview`);
        card.innerHTML = `
            <div>
                <div class="project-card-top">
                    <div class="icon-badge ${meta.badgeClass}">
                        <i class="fas ${meta.icon}" aria-hidden="true"></i>
                    </div>
                    <span class="project-category-pill">${project.category}</span>
                </div>
                <h2 class="project-card-title">${project.title}</h2>
                <p class="project-card-desc">${project.description}</p>
            </div>
            <div>
                <div class="project-card-tags">${tagsHtml}</div>
                <div class="project-card-cta">
                    <span>Read Detailed Overview</span>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                </div>
            </div>
        `;
        card.addEventListener("click", () => openProjectOverview(project));
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openProjectOverview(project);
            }
        });
        projectsGrid.appendChild(card);
    });
}

projectFilters?.addEventListener("click", event => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;

    currentFilter = button.dataset.filter;
    projectFilters.querySelectorAll(".filter-btn").forEach(filter =>
        filter.classList.toggle("is-selected", filter === button)
    );
    renderProjects();
});

renderProjects();

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const progress = document.getElementById("scroll-progress");
function updateScrollProgress() {
    if (!progress) return;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const value = total > 0 ? (window.scrollY / total) * 100 : 0;
    progress.style.width = `${value}%`;
}
window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

const revealElements = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

    revealElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
            element.classList.add("active");
        } else {
            element.classList.add("will-animate");
            observer.observe(element);
        }
    });
} else {
    revealElements.forEach(element => element.classList.add("active"));
}
