/* =========================================================================
   1. YOUR PROJECTS DATA (EDIT HERE TO ADD OR UPDATE PROJECTS!)
   -------------------------------------------------------------------------
   How to add a new project:
   1. Copy one of the { ... } blocks inside the `projects` array below.
   2. Paste it after a comma and update title, category, image, description,
      overview, features, learnings, tags, and link.
   3. Valid categories for filtering:
      "Electronics" | "Programming" | "Web" | "Design"
   ========================================================================= */
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

/* =========================================================================
   1B. YOUR ACHIEVEMENTS DATA (EDIT HERE TO ADD OR UPDATE ACHIEVEMENTS!)
   -------------------------------------------------------------------------
   How to add a new achievement:
   1. Copy one of the { ... } blocks inside the `achievements` array below.
   2. Paste it after a comma and update badge, category, title, description,
      footer, and theme ("ochre" | "cerulean" | "teal" | "neutral").
   3. Set isPlaceholder: true for future/customizable slots.
   ========================================================================= */
const achievements = [
    {
        id: "al-distinction",
        icon: "fa-trophy",
        theme: "ochre",
        badge: "Academic",
        title: "G.C.E. A/L Distinction",
        description: "Scored <strong class=\"text-bright\">3 As</strong> in the Physical Science stream at Richmond College with a Z-score of <span class=\"text-accent mono-semibold\">2.5490</span>.",
        footer: "Z-Score: 2.5490 • 3 As",
        footerTone: "muted",
        isPlaceholder: false
    },
    
    {
        id: "competitions-slasscom",
        icon: "fa-trophy",
        theme: "ochre",
        badge: "Award",
        title: "SLASSCOM Ingenuity Awards 2022",
        description: "Won Southern Province Best Innovative Product/Project - School Category.",
        footer: "Project Daredevil",
        footerTone: "accent",
        isPlaceholder: false
    },
    {
        id: "phy-olympiad",
        icon: "fa-star",
        theme: "neutral",
        badge: "Academic",
        title: "Physics Olympiad 2025",
        description: "Merit Prize in the Sri Lanka Physics Olympiad 2025 organized by the Institute of Physics, Sri Lanka.",
        footer: "Merit Prize",
        footerTone: "accent",
        isPlaceholder: false
    },
    {
        id: "maths-olympiad",
        icon: "fa-star",
        theme: "neutral",
        badge: "Academic",
        title: "Mathematics Olympiad 2025",
        description: "Selected to Southern Province pool and participated in the National Mathematics Olympiad Competition in Cat III 2023",
        footer: "Southern Province Pool • Cat III 2023",
        footerTone: "muted",
        isPlaceholder: false
    },
    {
        id: "uom-admission",
        icon: "fa-award",
        theme: "cerulean",
        badge: "Selection",
        title: "Engineering Admission",
        description: "Entered the Faculty of Engineering at the University of Moratuwa through national G.C.E. Advanced Level merit.",
        footer: "University of Moratuwa",
        footerTone: "accent",
        isPlaceholder: false
    },
    {
        id: "richmond-foundation",
        icon: "fa-graduation-cap",
        theme: "teal",
        badge: "School",
        title: "Richmond College Foundation",
        description: "Built strong analytical habits in Combined Mathematics, Physics, and Chemistry while balancing school life.",
        footer: "Physical Science Stream",
        footerTone: "muted",
        isPlaceholder: false
    }
];

/* =========================================================================
   1C. YOUR SKILLS DATA (EDIT HERE TO ADD OR UPDATE SKILLS!)
   -------------------------------------------------------------------------
   How to add or update a skill:
   1. Add or edit an object inside the `skills` array below.
   2. Set `group: "core"` for main engineering skills or `group: "creative"`
      for creative/hobby skills.
   3. `chips` can be strings ("Python") or objects ({ label: "JavaScript (Basics)", muted: true }).
   ========================================================================= */
const skills = [
    {
        id: "arduino-electronics",
        group: "core",
        icon: "fa-microchip",
        theme: "cerulean",
        badge: "Focus #1",
        title: "Arduino & Electronics",
        description: "Microcontroller programming, sensor interfacing, circuit prototyping, and hands-on hardware control systems.",
        chips: [
            { label: "Arduino Code", muted: false },
            { label: "Sensors & Circuits", muted: true }
        ]
    },
    {
        id: "programming",
        group: "core",
        icon: "fa-terminal",
        theme: "cerulean",
        badge: "Focus #2",
        title: "Programming",
        description: "Writing clean scripts, logical routines, and practical tools for engineering problem-solving and automation.",
        chips: [
            { label: "Python", muted: false },
            { label: "Arduino C/C++", muted: true }
        ]
    },
    {
        id: "web-development",
        group: "core",
        icon: "fa-code",
        theme: "teal",
        badge: "Focus #3",
        title: "Web Development",
        description: "Structuring, styling, and adding interactive behaviours to responsive websites from the ground up.",
        chips: [
            { label: "HTML", muted: false },
            { label: "CSS", muted: false },
            { label: "JavaScript (Basics)", muted: true }
        ]
    },
    {
        id: "graphic-design-3d",
        group: "creative",
        icon: "fa-cube",
        theme: "cerulean",
        badge: "Creative",
        title: "Graphic Design & 3D",
        description: "Digital visual editing, graphic layouts, and foundational 3D modeling and rendering.",
        chips: [
            { label: "Photoshop", muted: false },
            { label: "Blender (Basics)", muted: true }
        ]
    },
    {
        id: "music",
        group: "creative",
        icon: "fa-music",
        theme: "teal",
        badge: "Hobby",
        title: "Music",
        description: "Exploring rhythm, melody, and musical creativity alongside analytical engineering studies.",
        chips: []
    }
];

/* =========================================================================
   2. NAVIGATION, FOOTER YEAR & MOBILE MENU
   ========================================================================= */
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
}

/* =========================================================================
   3. SUBTLE SCROLL-BASED ANIMATIONS & RIGHT-SIDE DOT MENU SPY
   ========================================================================= */
const portraitWrapper = document.getElementById('hero-portrait-wrapper');
const heroTextBlock = document.getElementById('about');
const scrollProgressBar = document.getElementById('scroll-progress');

function handleScrollAnimations() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollProgressBar && docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
        scrollProgressBar.style.width = `${progress}%`;
    }

    if (scrollY < window.innerHeight * 1.2) {
        if (portraitWrapper) {
            const translateY = scrollY * 0.18;
            const scale = 1 + scrollY * 0.00012;
            const opacity = Math.max(0.15, 1 - scrollY / (window.innerHeight * 1.1));
            portraitWrapper.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
            portraitWrapper.style.opacity = opacity;
        }
        if (heroTextBlock) {
            const textShift = scrollY * 0.08;
            const textOpacity = Math.max(0.2, 1 - scrollY / (window.innerHeight * 0.95));
            heroTextBlock.style.transform = `translate3d(0, ${textShift}px, 0)`;
            heroTextBlock.style.opacity = textOpacity;
        }
    }
}

window.addEventListener('scroll', () => requestAnimationFrame(handleScrollAnimations), { passive: true });
handleScrollAnimations();

// Section Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
            el.classList.add('active');
        } else {
            el.classList.add('will-animate');
            revealObserver.observe(el);
        }
    });
} else {
    revealElements.forEach(el => el.classList.add('active'));
}

// Active Section Tracking for Right-Edge Dot Navigation Rail
const dotItems = document.querySelectorAll('.dot-nav-item');
const trackedSections = ['welcome', 'education', 'achievements', 'skills', 'projects', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);

function updateActiveDot(activeId) {
    dotItems.forEach(item => {
        item.classList.toggle('is-active', item.dataset.target === activeId);
    });
}

if ('IntersectionObserver' in window) {
    const sectionSpy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            updateActiveDot(entry.target.id);
        }
    });
}, { rootMargin: '-35% 0px -45% 0px' });
trackedSections.forEach(sec => sectionSpy.observe(sec));

/* =========================================================================
   3B. ACHIEVEMENTS GRID RENDERING
   ========================================================================= */
const achievementsGrid = document.getElementById('achievements-grid');

const achievementThemes = {
    ochre: {
        iconClass: 'icon-ochre',
        pillClass: 'pill-ochre'
    },
    cerulean: {
        iconClass: 'icon-cerulean',
        pillClass: 'pill-cerulean'
    },
    teal: {
        iconClass: 'icon-teal',
        pillClass: 'pill-teal'
    },
    neutral: {
        iconClass: 'icon-neutral',
        pillClass: 'pill-neutral'
    }
};

function renderAchievements() {
    if (!achievementsGrid) return;

    achievementsGrid.innerHTML = '';

    if (!Array.isArray(achievements) || achievements.length === 0) {
        achievementsGrid.innerHTML = `
            <div class="achievement-cell">
                <p class="cell-copy">No achievements added yet. Add entries to the <code>achievements</code> array in <code>script.js</code>.</p>
            </div>
        `;
        return;
    }

    achievements.forEach(item => {
        const themeStyle = achievementThemes[item.theme] || achievementThemes.neutral;
        const footerClass = item.footerTone === 'accent' ? 'cell-footer text-accent' : 'cell-footer text-muted';
        const placeholderClass = item.isPlaceholder ? ' achievement-placeholder' : '';

        const cell = document.createElement('div');
        cell.className = `achievement-cell stagger-item${placeholderClass}`;
        cell.innerHTML = `
            <div>
                <div class="cell-top">
                    <div class="icon-badge ${themeStyle.iconClass}">
                        <i class="fas ${item.icon || 'fa-trophy'}"></i>
                    </div>
                    <span class="pill-tag ${themeStyle.pillClass}">${item.badge || 'Milestone'}</span>
                </div>
                <h3 class="cell-title">${item.title}</h3>
                <p class="cell-copy">${item.description}</p>
            </div>
            <div class="${footerClass}">${item.footer || ''}</div>
        `;

        achievementsGrid.appendChild(cell);
    });
}

renderAchievements();

/* =========================================================================
   3C. SKILLS GRID RENDERING
   ========================================================================= */
const coreSkillsGrid = document.getElementById('core-skills-grid');
const creativeSkillsGrid = document.getElementById('creative-skills-grid');

const skillThemes = {
    cerulean: {
        iconClass: 'icon-cerulean',
        pillClass: 'pill-cerulean'
    },
    teal: {
        iconClass: 'icon-teal',
        pillClass: 'pill-teal'
    },
    ochre: {
        iconClass: 'icon-ochre',
        pillClass: 'pill-ochre'
    },
    neutral: {
        iconClass: 'icon-neutral',
        pillClass: 'pill-neutral'
    }
};

function renderSkillChips(chips) {
    if (!Array.isArray(chips) || chips.length === 0) return '';
    const chipsHtml = chips.map(chip => {
        const isObj = typeof chip === 'object' && chip !== null;
        const label = isObj ? chip.label : chip;
        const chipClass = isObj && chip.muted ? 'chip chip-muted' : 'chip chip-bright';
        return `<span class="${chipClass}">${label}</span>`;
    }).join('');
    return `<div class="chip-group">${chipsHtml}</div>`;
}

function renderSkills() {
    if (!coreSkillsGrid || !creativeSkillsGrid) return;

    coreSkillsGrid.innerHTML = '';
    creativeSkillsGrid.innerHTML = '';

    const list = Array.isArray(skills) ? skills : [];
    const coreList = list.filter(s => s.group !== 'creative');
    const creativeList = list.filter(s => s.group === 'creative');

    coreList.forEach(skill => {
        const theme = skillThemes[skill.theme] || skillThemes.cerulean;
        const cell = document.createElement('div');
        cell.className = 'skill-cell stagger-item';
        cell.innerHTML = `
            <div class="cell-top">
                <div class="icon-badge ${theme.iconClass}">
                    <i class="fas ${skill.icon || 'fa-wrench'}"></i>
                </div>
                <span class="pill-tag ${theme.pillClass}">${skill.badge || 'Skill'}</span>
            </div>
            <h3 class="skill-title">${skill.title}</h3>
            <p class="skill-copy">${skill.description}</p>
            ${renderSkillChips(skill.chips)}
        `;
        coreSkillsGrid.appendChild(cell);
    });

    creativeList.forEach(skill => {
        const theme = skillThemes[skill.theme] || skillThemes.cerulean;
        const hasChips = Array.isArray(skill.chips) && skill.chips.length > 0;
        const copyClass = hasChips ? 'creative-copy' : 'creative-copy-simple';

        const cell = document.createElement('div');
        cell.className = 'creative-cell stagger-item';
        cell.innerHTML = `
            <div class="icon-badge ${theme.iconClass}">
                <i class="fas ${skill.icon || 'fa-star'}"></i>
            </div>
            <div class="creative-body">
                <div class="creative-heading-row">
                    <h3 class="cell-title">${skill.title}</h3>
                    <span class="mini-tag">${skill.badge || 'Creative'}</span>
                </div>
                <p class="${copyClass}">${skill.description}</p>
                ${renderSkillChips(skill.chips)}
            </div>
        `;
        creativeSkillsGrid.appendChild(cell);
    });
}

renderSkills();

/* =========================================================================
   4. PROJECTS GRID RENDERING, CATEGORY FILTERS & DETAIL MODAL
   ========================================================================= */
let currentFilter = 'all';
const projectsGrid = document.getElementById('projects-grid');
const projectModal = document.getElementById('project-modal');

const categoryMeta = {
    'Electronics': { icon: 'fa-microchip', badgeClass: 'icon-cerulean' },
    'Programming': { icon: 'fa-terminal',  badgeClass: 'icon-cerulean' },
    'Web':         { icon: 'fa-code',      badgeClass: 'icon-teal' },
    'Design':      { icon: 'fa-cube',      badgeClass: 'icon-ochre' }
};

function openProjectOverview(project) {
    if (!projectModal) return;

    document.getElementById('modal-category-badge').textContent = project.category;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-timeline').textContent = project.timeline || 'Project';
    document.getElementById('modal-image').src = project.image || 'https://placehold.co/900x450/101d35/38bdf8?text=Project+Preview';
    document.getElementById('modal-overview').textContent = project.overview || project.description;
    document.getElementById('modal-learnings').textContent = project.learnings || 'Hands-on exploration and iterative testing.';

    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = (project.features || [project.description]).map(item => `<li>${item}</li>`).join('');

    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = project.tags.map(tag =>
        `<span class="modal-tag-pill">${tag.trim()}</span>`
    ).join('');

    const linkContainer = document.getElementById('modal-link-container');
    if (project.link) {
        linkContainer.innerHTML = `
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="modal-external-link">
                <span>Open External Link / Repo</span>
                <i class="fas fa-external-link-alt"></i>
            </a>
        `;
    } else {
        linkContainer.innerHTML = `<span class="modal-link-note"><i class="fas fa-code-branch"></i>Source / Demo link can be added anytime</span>`;
    }

    projectModal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    projectModal.scrollTop = 0;
}

function closeProjectOverview() {
    if (!projectModal) return;
    projectModal.classList.add('hidden');
    document.body.classList.remove('modal-open');
}

const closeModalTopBtn = document.getElementById('close-project-modal');
const closeModalBottomBtn = document.getElementById('close-project-modal-bottom');

if (closeModalTopBtn) {
    closeModalTopBtn.addEventListener('click', closeProjectOverview);
}
if (closeModalBottomBtn) {
    closeModalBottomBtn.addEventListener('click', closeProjectOverview);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && !projectModal.classList.contains('hidden')) {
        closeProjectOverview();
    }
});

function renderProjects() {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';
    const filtered = currentFilter === 'all'
        ? projects
        : projects.filter(p => p.category === currentFilter);

    if (filtered.length === 0) {
        projectsGrid.innerHTML = `
            <div class="projects-empty">
                <p>More projects in this category coming soon.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(project => {
        const meta = categoryMeta[project.category] || categoryMeta['Electronics'];
        const tagsHtml = project.tags.map(tag =>
            `<span class="project-tag">${tag.trim()}</span>`
        ).join('');

        const card = document.createElement('div');
        card.className = 'project-card stagger-item';
        card.innerHTML = `
            <div>
                <div class="project-card-top">
                    <div class="icon-badge ${meta.badgeClass}">
                        <i class="fas ${meta.icon}"></i>
                    </div>
                    <span class="project-category-pill">${project.category}</span>
                </div>
                <h3 class="project-card-title">${project.title}</h3>
                <p class="project-card-desc">${project.description}</p>
            </div>
            <div>
                <div class="project-card-tags">
                    ${tagsHtml}
                </div>
                <div class="project-card-cta">
                    <span>Read Detailed Overview</span>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openProjectOverview(project));
        projectsGrid.appendChild(card);
    });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');
        currentFilter = btn.dataset.filter;
        renderProjects();
    });
});

renderProjects();
}