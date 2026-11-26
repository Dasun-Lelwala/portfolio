/* =========================================================================
   2. NAVIGATION, FOOTER YEAR & MOBILE MENU
   ========================================================================= */
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

/* =========================================================================
   2A. ACHIEVEMENTS & EXTRACURRICULARS PAGE RENDERING
   ========================================================================= */
const recordList = document.getElementById('record-list');

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
                            ${entry.year ? `<span class="entry-year">${entry.year}</span>` : ''}
                            ${entry.period ? `<span class="entry-period">Role period: ${entry.period}</span>` : ''}
                            <h3>${entry.title}</h3>
                            <span class="entry-meta">${entry.meta}</span>
                            <p>${entry.detail}</p>
                        </div>
                    </article>
                `).join('')}
            </div>
        </section>
    `).join('');
}

renderRecord();

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

// Give in-page navigation a slower, more deliberate feel without changing
// native wheel, touch, or keyboard scrolling.
const prefersReducedMotionForScroll = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotionForScroll) {
    let scrollAnimationId = 0;

    function animateScrollTo(targetY) {
        const animationId = ++scrollAnimationId;
        const startY = window.scrollY;
        const distance = targetY - startY;
        const duration = 900;
        const startTime = performance.now();

        function step(now) {
            if (animationId !== scrollAnimationId) return;

            const progress = Math.min(1, (now - startTime) / duration);
            const easedProgress = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startY + distance * easedProgress);
            if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    function stopScrollAnimation() {
        scrollAnimationId += 1;
    }

    document.addEventListener('click', event => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

        const link = event.target.closest('a[href^="#"]');
        if (!link || link.target || link.hasAttribute('download')) return;

        const targetId = link.hash.slice(1);
        const target = document.getElementById(targetId);
        if (!target) return;

        event.preventDefault();
        if (window.location.hash !== link.hash) {
            window.history.pushState(null, '', link.hash);
        }
        animateScrollTo(window.scrollY + target.getBoundingClientRect().top);
    });

    window.addEventListener('popstate', () => {
        const target = window.location.hash
            ? document.getElementById(window.location.hash.slice(1))
            : null;
        animateScrollTo(target ? window.scrollY + target.getBoundingClientRect().top : 0);
    });

    window.addEventListener('wheel', stopScrollAnimation, { passive: true });
    window.addEventListener('touchstart', stopScrollAnimation, { passive: true });
    window.addEventListener('keydown', event => {
        if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(event.key)) {
            stopScrollAnimation();
        }
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
const trackedSections = ['welcome', 'education', 'achievements', 'skills', 'projects', 'graphic-design', 'contact']
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
                <p class="cell-copy">No award entries available. Add entries to the Awards &amp; Academic Recognition category in <code>script2.js</code>.</p>
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
    tagsContainer.innerHTML = (project.tags || []).map(tag =>
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

if (projectModal) {
    projectModal.addEventListener('click', event => {
        if (event.target === projectModal) closeProjectOverview();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && !projectModal.classList.contains('hidden')) {
        closeProjectOverview();
    }
});

function renderProjects() {
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';
    const projectList = document.querySelector('.projects-hero') ? projects : projects.slice(0, 3);
    const visibleProjects = currentFilter === 'all'
        ? projectList
        : projectList.filter(project => project.category === currentFilter);

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
        ).join('');

        const card = document.createElement('article');
        card.className = 'project-card stagger-item';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Open ${project.title} overview`);
        const headingTag = document.querySelector('.projects-hero') ? 'h2' : 'h3';
        card.innerHTML = `
            <div>
                <div class="project-card-top">
                    <div class="icon-badge ${meta.badgeClass}">
                        <i class="fas ${meta.icon}"></i>
                    </div>
                    <span class="project-category-pill">${project.category}</span>
                </div>
                <${headingTag} class="project-card-title">${project.title}</${headingTag}>
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
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openProjectOverview(project);
            }
        });
        projectsGrid.appendChild(card);
    });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(filter =>
            filter.classList.toggle('is-selected', filter === btn)
        );
        renderProjects();
    });
});

renderProjects();
}