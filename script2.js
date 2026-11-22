// Order entries by significance, not by date. Use year for achievements and
// period for leadership roles (for example, "2023–2025").
const recordCategories = [
    {
        number: "01",
        title: "Awards & Academic Recognition",
        description: "Competition awards and academic distinctions, ordered by significance.",
        entries: [
            {
                icon: "fa-trophy",
                theme: "ochre",
                year: "A/L",
                title: "G.C.E. Advanced Level Distinction",
                detail: "Scored 3 As in the Physical Science stream at Richmond College with a Z-score of 2.5490.",
                meta: "Z-Score: 2.5490 • 3 As"
            },
            {
                icon: "fa-trophy",
                theme: "ochre",
                year: "2022",
                title: "SLASSCOM Ingenuity Awards",
                detail: "Won Southern Province Best Innovative Product/Project in the School Category.",
                meta: "Project Daredevil"
            },
            {
                icon: "fa-star",
                theme: "neutral",
                year: "2025",
                title: "Sri Lanka Physics Olympiad",
                detail: "Awarded the Merit Prize in the Physics Olympiad 2025 organised by the Institute of Physics, Sri Lanka.",
                meta: "Merit Prize"
            },
            {
                icon: "fa-star",
                theme: "neutral",
                year: "2023",
                title: "National Mathematics Olympiad",
                detail: "Selected to the Southern Province pool and participated in the National Mathematics Olympiad Competition in Category III.",
                meta: "Southern Province Pool • Cat III"
            }
        ]
    },
    {
        number: "02",
        title: "University & School",
        description: "Education milestones and foundations supporting continued academic growth.",
        entries: [
            {
                icon: "fa-award",
                theme: "cerulean",
                year: "Current",
                title: "Engineering Admission",
                detail: "Entered the Faculty of Engineering at the University of Moratuwa through national G.C.E. Advanced Level merit.",
                meta: "University of Moratuwa"
            },
            {
                icon: "fa-graduation-cap",
                theme: "teal",
                year: "School",
                title: "Richmond College Foundation",
                detail: "Built a strong analytical foundation through Combined Mathematics, Physics, and Chemistry while balancing school life.",
                meta: "Physical Science Stream"
            }
        ]
    }
];

const recordList = document.getElementById("record-list");

function renderRecord() {
    if (!recordList) return;

    recordList.innerHTML = recordCategories.map(category => `
        <section class="record-category reveal">
            <div class="category-heading">
                <span class="category-number">${category.number}</span>
                <div>
                    <h2>${category.title}</h2>
                    <p>${category.description}</p>
                </div>
            </div>
            <div class="record-grid">
                ${category.entries.map(entry => `
                    <article class="record-entry theme-${entry.theme} stagger-item">
                        <div class="entry-icon icon-${entry.theme}">
                            <i class="fas ${entry.icon}" aria-hidden="true"></i>
                        </div>
                        <div class="entry-content">
                            ${entry.year ? `<span class="entry-year">${entry.year}</span>` : ""}
                            ${entry.period ? `<span class="entry-period">Role period: ${entry.period}</span>` : ""}
                            <h3>${entry.title}</h3>
                            <span class="entry-meta">${entry.meta}</span>
                            <p>${entry.detail}</p>
                        </div>
                    </article>
                `).join("")}
            </div>
        </section>
    `).join("");
}

renderRecord();

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