/**
 * Main JavaScript for Math 101 Website
 * Contains shared logic for Navigation, Dark Mode, Feedback, and Utils
 */

// Site root (the folder of main.js), so app links also work from the enrichment subfolder pages
const SITE_ROOT = new URL('.', document.currentScript.src).href;

// Phones get the app look on every page: no site navbar/footer, the app's top bar and tab bar.
// "عرض الموقع الكامل" in the app (m101-view=site) turns this off.
const APP_MODE = (() => {
    try {
        const phone = window.matchMedia('(max-width: 700px)').matches && window.matchMedia('(pointer: coarse)').matches;
        return phone && localStorage.getItem('m101-view') !== 'site';
    } catch (e) { return false; }
})();
if (APP_MODE) {
    document.documentElement.classList.add('app-mode');
    // Pages the app already shows natively (its sections: home, units, exercises, more)
    const page = window.location.pathname.split('/').pop();
    const go = (r) => window.location.replace(SITE_ROOT + 'app.html#' + r);
    if (page === 'units.html') go('units');
    else if (page === 'exercises.html') go('exercises');
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. Core Loaders
    if (APP_MODE) initAppChrome();
    else {
        loadNavbar();
        loadFooter();
    }

    // 2. Initialize UI Systems
    initPlots();
    initVideos();
    initPdfViewers();
    initDarkModeAndScroll();
    if (!APP_MODE) initFeedbackSystem();
    initLastUpdated();
    initVisitorCounter();
    initTabs();
    initQuiz();
    initExerciseStepper();
    initTOC();
    initUnitNavigation();
    initPresentation();
    initWideMath();

    // 3. Special: Delay enrichment toggles slightly to let MathJax finish initial run
    setTimeout(() => {
        initEnrichmentToggles();
    }, 500);
});

// App look for site pages on phones: top bar with a back arrow + the app's bottom tabs
function initAppChrome() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const inSubfolder = new URL('.', window.location.href).href !== SITE_ROOT;
    // Same tabs as app.html
    const tabs = [
        ['home', '🏠', 'الرئيسية', 'app.html#home'],
        ['units', '📚', 'الوحدات', 'app.html#units'],
        ['exercises', '📝', 'التمارين', 'app.html#exercises'],
        ['enrich', '✨', 'الإثرائية', 'ex+.html'],
        ['more', '⋯', 'المزيد', 'app.html#more']
    ];
    const [, tab, back] = inSubfolder ? [null, 'enrich', 'ex+.html'] : [
        [/^u\d\.html$/, 'units', 'app.html#units'],
        [/^ex\d\.html$/, 'exercises', 'app.html#exercises'],
        [/^ex\+\.html$/, 'enrich', 'app.html#exercises'],
        [/./, 'more', 'app.html#more']
    ].find(([re]) => re.test(page));
    const hero = document.querySelector('.hero h1');
    const title = (hero ? hero.textContent : document.title.split(/[|]/)[0]).trim();

    const bar = document.createElement('header');
    bar.className = 'm-appbar';
    bar.innerHTML = `<a href="${SITE_ROOT}${back}" class="m-back" aria-label="رجوع">→</a><b></b>`;
    bar.querySelector('b').textContent = title;
    document.body.prepend(bar);

    const nav = document.createElement('nav');
    nav.className = 'm-tabbar';
    nav.setAttribute('aria-label', 'أقسام التطبيق');
    nav.innerHTML = tabs.map(([id, icon, label, href]) =>
        `<a href="${SITE_ROOT}${href}"${id === tab ? ' class="active"' : ''}><span aria-hidden="true">${icon}</span>${label}</a>`).join('');
    document.body.appendChild(nav);
}

// Helper to safely re-run MathJax using the centralized queue
window.safeRenderMath = function (elements) {
    if (typeof window.renderMath === 'function') {
        window.renderMath(elements);
    }
};

// 1. Mobile Navigation
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.textContent = '☰';
            }
        });
    }
}

// 10. Unit Navigation (Next/Prev/PDF)
// 10. Unit Navigation (Next/Prev/PDF)
function initUnitNavigation() {
    const units = [
        { file: 'u1.html', title: 'المجموعات', ex: 'ex1.html' },
        { file: 'u2.html', title: 'العمليات على الأعداد', ex: 'ex2.html' },
        { file: 'u3.html', title: 'كثيرات الحدود', ex: 'ex3.html' },
        { file: 'u4.html', title: 'المصفوفات والمحددات', ex: 'ex4.html' },
        { file: 'u5.html', title: 'المعادلات', ex: 'ex5.html' },
        { file: 'u6.html', title: 'الهندسة المستوية والفراغية', ex: 'ex6.html' }
    ];

    const currentPath = window.location.pathname;
    let currentUnitIndex = units.findIndex(u => currentPath.endsWith(u.file));
    let isExercisePage = false;

    // Check if it's an exercise page
    if (currentUnitIndex === -1) {
        currentUnitIndex = units.findIndex(u => u.ex && currentPath.endsWith(u.ex));
        if (currentUnitIndex !== -1) isExercisePage = true;
    }

    if (currentUnitIndex === -1) return; // Not a unit or exercise page

    let contentWrapper = document.querySelector('.content-wrapper') || document.querySelector('main');

    // Fallback for exercise pages that might not have main tag but have slides
    if (!contentWrapper && isExercisePage) {
        const firstSlide = document.querySelector('.slide');
        if (firstSlide) {
            contentWrapper = firstSlide.parentElement;
        }
        // Fallback 2: Look for the specific container style or structure if headers are used? 
        // Assuming consistent structure: Header -> Container
        if (!contentWrapper) {
            const header = document.querySelector('header.hero');
            if (header && header.nextElementSibling && header.nextElementSibling.classList.contains('container')) {
                contentWrapper = header.nextElementSibling;
            }
        }
    }

    if (!contentWrapper) return;

    const navContainer = document.createElement('div');
    navContainer.className = 'unit-nav';

    if (isExercisePage) {
        // --- Exercise Page Navigation ---

        // 1. Back to Lesson
        const lessonBtn = document.createElement('a');
        lessonBtn.href = units[currentUnitIndex].file;
        lessonBtn.className = 'nav-btn';
        lessonBtn.innerHTML = `<span>📖</span> العودة للوحدة: ${units[currentUnitIndex].title}`;
        navContainer.appendChild(lessonBtn);

        // 2. Next Unit
        if (currentUnitIndex < units.length - 1) {
            const nextUnit = units[currentUnitIndex + 1];
            const nextBtn = document.createElement('a');
            nextBtn.href = nextUnit.file;
            nextBtn.className = 'nav-btn primary';
            nextBtn.innerHTML = `الوحدة التالية: ${nextUnit.title} <span>⬅️</span>`;
            navContainer.appendChild(nextBtn);
        } else {
            // End of course
            const homeBtn = document.createElement('a');
            homeBtn.href = 'index.html';
            homeBtn.className = 'nav-btn primary';
            homeBtn.innerHTML = `العودة للرئيسية <span>🏠</span>`;
            navContainer.appendChild(homeBtn);
        }

    } else {
        // --- Unit Page Navigation (Existing Logic) ---

        // Previous Button
        if (currentUnitIndex > 0) {
            const prevUnit = units[currentUnitIndex - 1];
            const prevBtn = document.createElement('a');
            prevBtn.href = prevUnit.file;
            prevBtn.className = 'nav-btn';
            prevBtn.innerHTML = `<span>➡️</span> السابق: ${prevUnit.title}`;
            navContainer.appendChild(prevBtn);
        } else {
            const spacer = document.createElement('div');
            navContainer.appendChild(spacer);
        }

        // Exercises Button
        const currentUnit = units[currentUnitIndex];
        if (currentUnit.ex) {
            const exBtn = document.createElement('a');
            exBtn.href = currentUnit.ex;
            exBtn.className = 'nav-btn';
            exBtn.style.background = 'var(--bg-body)';
            exBtn.style.color = 'var(--accent)';
            exBtn.style.borderColor = 'var(--accent)';
            exBtn.innerHTML = `<span>📝</span> تمارين الوحدة`;
            navContainer.appendChild(exBtn);
        }

        // Next Button
        if (currentUnitIndex < units.length - 1) {
            const nextUnit = units[currentUnitIndex + 1];
            const nextBtn = document.createElement('a');
            nextBtn.href = nextUnit.file;
            nextBtn.className = 'nav-btn primary';
            nextBtn.innerHTML = `التالي: ${nextUnit.title} <span>⬅️</span>`;
            navContainer.appendChild(nextBtn);
        } else {
            const homeBtn = document.createElement('a');
            homeBtn.href = 'index.html';
            homeBtn.className = 'nav-btn primary';
            homeBtn.innerHTML = `العودة للرئيسية <span>🏠</span>`;
            navContainer.appendChild(homeBtn);
        }
    }

    contentWrapper.appendChild(navContainer);
}

// 11. Tabs Logic (New)
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.content-section');

    if (!tabs.length) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Deactivate all
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Activate clicked
            tab.classList.add('active');

            // Show Content
            const targetId = tab.dataset.target;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

// 9. Table of Contents (Side Menu)
function initTOC() {
    const main = document.querySelector('main');
    // Only run if we have slides/sections and it's not the homepage (simple check)
    // We check if there are multiple h2 headings 
    const Headings = main ? main.querySelectorAll('h2') : [];

    if (!main || Headings.length < 2) return;

    // Listing pages (units, exercises, videos) are already an index
    if (main.classList.contains('video-library')) return;

    // No sidebar on unit pages (they use the presentation view)
    if (/\/u\d+\.html$/.test(window.location.pathname)) return;

    // Don't run on index.html if it has many h2s but different layout (index usually has sections with IDs)
    // Stronger check: check if filename starts with 'u' or contains 'ex+'? 
    // Or just check if we are on a "unit" page. Unit pages usually have title in head different from index.
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        // Double check if index has specific structure we want to avoid?
        // Index has slides too, but maybe we don't want TOC there?
        // User asked "add sidebar to all UNITS".
        // Let's check for specific file naming or just exclude index.
        const path = window.location.pathname;
        if (path.endsWith('index.html') || path === '/' || path.endsWith('/pr/')) return;
    }

    // 1. Create Wrapper Layout
    // 1. Create Wrapper Layout
    const sidebar = document.createElement('aside');
    sidebar.className = 'toc-sidebar';
    sidebar.innerHTML = `
        <div class="toc-header">
            <h3>محتويات الوحدة</h3>
            <button class="toc-toggle" title="تصغير/توسيع القائمة">
                <span class="icon-open">◀</span>
                <span class="icon-closed">▶</span>
            </button>
        </div>
        <ul class="toc-list"></ul>
    `;

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'content-wrapper';

    // Move all main children to contentWrapper
    while (main.firstChild) {
        contentWrapper.appendChild(main.firstChild);
    }

    // Append back
    main.appendChild(sidebar);
    main.appendChild(contentWrapper);
    main.classList.add('with-sidebar');

    // Toggle Logic
    const toggleBtn = sidebar.querySelector('.toc-toggle');

    // Function to apply collapsed state
    const setSidebarState = (isCollapsed) => {
        if (isCollapsed) {
            main.classList.add('collapsed');
            sidebar.classList.add('collapsed');
        } else {
            main.classList.remove('collapsed');
            sidebar.classList.remove('collapsed');
        }
    };

    // Restore saved state
    const savedState = localStorage.getItem('toc-collapsed') === 'true';
    setSidebarState(savedState);

    toggleBtn.addEventListener('click', () => {
        const isCollapsed = !sidebar.classList.contains('collapsed');
        setSidebarState(isCollapsed);
        localStorage.setItem('toc-collapsed', isCollapsed);
    });

    // 2. Build Links
    const tocList = sidebar.querySelector('.toc-list');

    Headings.forEach((heading, index) => {
        // Ensure ID
        if (!heading.id) {
            heading.id = `section-${index}`;
        }

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.textContent;
        a.className = 'toc-link';

        // Smooth scroll
        a.addEventListener('click', (e) => {
            e.preventDefault();
            // In presentation mode, jump to the slide that holds this heading
            if (window.presentation && window.presentation.reveal(heading)) return;
            document.getElementById(heading.id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Update active state manually
            document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
            a.classList.add('active');
        });

        li.appendChild(a);
        tocList.appendChild(li);
    });

    // 3. Scroll Spy (Highlight active link)
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                document.querySelectorAll('.toc-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    Headings.forEach(heading => observer.observe(heading));
}

// 2. Dark Mode & Scroll To Top
function initDarkModeAndScroll() {
    // Create Floating Container
    const floatContainer = document.createElement('div');
    floatContainer.className = 'float-container';
    floatContainer.style.cssText = "position: fixed; bottom: 80px; right: 20px; display: flex; flex-direction: column; gap: 10px; z-index: 9998;";

    // Dark Mode Toggle
    const darkModeBtn = document.createElement('button');
    darkModeBtn.innerHTML = "🌙";
    darkModeBtn.className = "float-btn";
    darkModeBtn.title = "الوضع الليلي";
    darkModeBtn.onclick = toggleDarkMode;

    // Scroll Top
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = "⬆️";
    scrollTopBtn.className = "float-btn";
    scrollTopBtn.title = "للأعلى";
    scrollTopBtn.style.display = "none";
    scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    floatContainer.appendChild(scrollTopBtn);
    floatContainer.appendChild(darkModeBtn);
    document.body.appendChild(floatContainer);

    // Scroll Listener
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTopBtn) {
            scrollTopBtn.style.display = scrolled > 300 ? 'block' : 'none';
        }
    });

    // Check Saved Theme
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkMode();
    }
}

function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    const btn = document.querySelector('button[title="الوضع الليلي"]');
    if (btn) btn.innerHTML = "☀️";
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    const btn = document.querySelector('button[title="الوضع الليلي"]');
    if (btn) btn.innerHTML = "🌙";
}

// 3. Feedback System (Microsoft Forms)
const FEEDBACK_FORM_URL = 'https://formspree.io/f/mojjvkzz'; // TODO: رابط نموذج Microsoft Forms لرياض 101

function initFeedbackSystem() {
    const btn = document.createElement('a');
    btn.id = 'feedback-btn';
    btn.href = FEEDBACK_FORM_URL;
    btn.target = '_blank';
    btn.rel = 'noopener';
    btn.innerHTML = '<span>📝</span> ملاحظات';
    // In the header when the navbar exists, otherwise floating
    const navContent = document.querySelector('.navbar .nav-content');
    (navContent || document.body).appendChild(btn);
}

// 4. Last Updated Date
function initLastUpdated() {
    const el = document.getElementById('last-updated-date');
    if (el) {
        el.innerText = new Date().toLocaleDateString('ar-SA');
    }
}

// 5. Visitor Counter
function initVisitorCounter() {
    const countEl = document.getElementById('visits-count');
    if (!countEl) return;

    let visits = localStorage.getItem('siteVisitsCount');
    if (!visits) {
        visits = Math.floor(Math.random() * 500) + 1200;
    }
    visits = parseInt(visits) + 1;
    localStorage.setItem('siteVisitsCount', visits);
    countEl.innerText = visits.toLocaleString('ar-SA');
}    // --- Protected Downloads (PIN) Removed ---


// 7. Tab Switching Logic
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const targetId = tab.dataset.target;
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// 8. Quiz Interaction Logic
function initQuiz() {
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function () {
            const parent = this.closest('.quiz-question');
            const isCorrect = this.dataset.correct === "true";
            parent.querySelectorAll('.quiz-option').forEach(opt => {
                opt.style.background = 'white';
                opt.style.borderColor = '#E2E8F0';
            });
            if (isCorrect) {
                this.style.background = '#F0FDF4';
                this.style.borderColor = '#22C55E';
            } else {
                this.style.background = '#FEF2F2';
                this.style.borderColor = '#EF4444';
            }
        });
    });
}
// 12. Dynamic Navbar Loader
// NOTE: We use inlined HTML strings to ensure this works offline (file:// protocol) where fetch() would fail due to CORS.
const NAVBAR_HTML = `
<nav class="navbar">
    <div class="container nav-content">
        <button class="hamburger" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>
        <a href="index.html" class="nav-logo">
            <img src="logo.svg" alt="Math 101 Logo">
        </a>
        <ul class="nav-links">
            <li><a href="index.html">الرئيسية</a></li>
            <li><a href="plan.html">الخطة التدريبية</a></li>
            <li><a href="units.html">المحتوى</a></li>
            <li><a href="exercises.html">التمارين</a></li>
            <li><a href="book.html">الكتاب</a></li>
            <li><a href="presentations.html">عروض تقديمية</a></li>
            <li><a href="videos.html">الفيديوهات</a></li>
            <li><a href="ex+.html" class="active">تمارين إثرائية</a></li>
        </ul>
    </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer">
    <div class="container footer-row">
        <span>الصفحة الإلكترونية لمقرر الرياضيات (رياض 101)</span>
        <span>تطوير: أ. نواف العنزي</span>
        <span>&copy; 2025 جميع الحقوق محفوظة</span>
        <span class="visits-badge" title="عدد الزيارات">الزيارات: <span id="visits-count">...</span></span>
    </div>
</footer>
`;

async function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (!navbarContainer) return;

    try {
        // Determine relative path based on main.js location
        const scripts = document.querySelectorAll('script');
        let basePath = '';
        scripts.forEach(script => {
            if (script.getAttribute('src') && script.getAttribute('src') && (script.getAttribute('src') && (script.getAttribute('src') && (script.getAttribute('src').includes('main.js') || script.getAttribute('src').includes('main.min.js')) || script.getAttribute('src').includes('main.min.js')) || script.getAttribute('src').includes('main.min.js'))) {
                const src = script.getAttribute('src');
                basePath = src.replace(/main(\.min)?\.js$/, '');
            }
        });
        if (basePath === null) basePath = '';

        // Inject HTML directly
        navbarContainer.innerHTML = NAVBAR_HTML;

        // Correct paths for Links and Images
        const elements = navbarContainer.querySelectorAll('a, img');
        elements.forEach(el => {
            const keys = ['href', 'src'];
            keys.forEach(key => {
                const val = el.getAttribute(key);
                // Only adjust relative paths (not http, #, or data)
                if (val && !val.startsWith('http') && !val.startsWith('#') && !val.startsWith('data:') && !val.startsWith('javascript:')) {
                    el.setAttribute(key, basePath + val);
                }
            });
        });

        // Highlight Active Link based on current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = navbarContainer.querySelectorAll('.nav-links a');

        links.forEach(link => link.classList.remove('active'));

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.endsWith(currentPage)) {
                link.classList.add('active');
            }
        });

        // Special case for enrichment exercises being active on subpages
        if (window.location.href.includes('تمارين اثرائية') || window.location.href.includes('ex+.html')) {
            links.forEach(link => {
                if (link.href && link.href.includes('ex+.html')) link.classList.add('active');
            });
        }

        initNavigation();

    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

// 13. Dynamic Footer Loader
async function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    try {
        // Determine relative path based on main.js location
        const scripts = document.querySelectorAll('script');
        let basePath = '';
        scripts.forEach(script => {
            if (script.getAttribute('src') && script.getAttribute('src') && (script.getAttribute('src') && (script.getAttribute('src') && (script.getAttribute('src').includes('main.js') || script.getAttribute('src').includes('main.min.js')) || script.getAttribute('src').includes('main.min.js')) || script.getAttribute('src').includes('main.min.js'))) {
                const src = script.getAttribute('src');
                basePath = src.replace(/main(\.min)?\.js$/, '');
            }
        });
        if (basePath === null) basePath = '';

        // Inject HTML directly
        footerContainer.innerHTML = FOOTER_HTML;

    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// 14. Enrichment Exercises Toggle
function initEnrichmentToggles() {
    const cards = document.querySelectorAll('.example-card');
    cards.forEach(card => {
        if (card.querySelector('.toggle-solution')) return;
        const answer = card.querySelector('.ex-answer');
        const explanation = card.querySelector('.ex-explanation');
        if (answer || explanation) {
            const btn = document.createElement('button');
            btn.className = 'toggle-solution';
            btn.innerHTML = '<span>👁️</span> عرض الحل والشرح';
            const problem = card.querySelector('.ex-problem');
            if (problem) {
                problem.after(btn);
            } else {
                card.prepend(btn);
            }
            btn.addEventListener('click', () => {
                card.classList.toggle('show-solution');
                btn.innerHTML = card.classList.contains('show-solution')
                    ? '<span>🙈</span> إخفاء الحل'
                    : '<span>👁️</span> عرض الحل والشرح';
            });
        }
    });
}

// 17. Explainer videos
// <section class="slide" data-video="YouTubeID" data-video-title="..."> gets a "watch" button
// that opens the video in a modal (privacy-enhanced YouTube embed).
function initVideos() {
    const slides = document.querySelectorAll('.slide[data-video]');
    // Video library page: <button class="video-card" data-video="ID" data-video-title="...">
    const cards = document.querySelectorAll('.video-card[data-video]');
    if (!slides.length && !cards.length) return;

    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="video-dialog" role="dialog" aria-modal="true" aria-label="شرح بالفيديو">
            <div class="video-head">
                <span class="video-title"></span>
                <a class="video-yt" target="_blank" rel="noopener">مشاهدة على YouTube ↗</a>
                <button type="button" class="video-close" aria-label="إغلاق">✕</button>
            </div>
            <div class="video-frame"></div>
        </div>`;
    document.body.appendChild(modal);

    const frame = modal.querySelector('.video-frame');
    const titleEl = modal.querySelector('.video-title');
    const closeBtn = modal.querySelector('.video-close');
    const ytLink = modal.querySelector('.video-yt');
    let lastFocus = null;

    const close = () => {
        if (!modal.classList.contains('open')) return;
        modal.classList.remove('open');
        frame.innerHTML = ''; // stops playback
        document.body.classList.remove('video-open');
        if (lastFocus) lastFocus.focus();
    };
    const open = (id, title, trigger) => {
        const watchUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;
        // YouTube refuses embeds without a Referer (error 153) — e.g. pages opened as file://
        if (!/^https?:$/.test(location.protocol)) { window.open(watchUrl, '_blank', 'noopener'); return; }
        lastFocus = trigger;
        titleEl.textContent = title;
        ytLink.href = watchUrl;
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0&origin=${encodeURIComponent(location.origin)}`;
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.title = title;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen';
        iframe.allowFullscreen = true;
        frame.appendChild(iframe);
        modal.classList.add('open');
        document.body.classList.add('video-open');
        closeBtn.focus();
    };

    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    // While the video is open, keys belong to it (no slide navigation); Esc closes it
    window.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('open')) return;
        e.stopImmediatePropagation();
        if (e.key === 'Escape') close();
    }, true);

    slides.forEach(slide => {
        const heading = slide.querySelector('h1, h2, h3');
        const title = slide.dataset.videoTitle || (heading ? heading.textContent.trim() : 'شرح بالفيديو');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'video-btn';
        btn.innerHTML = '<span class="video-play" aria-hidden="true">▶</span> شرح بالفيديو';
        btn.setAttribute('aria-label', `شاهد الشرح بالفيديو: ${title}`);
        btn.addEventListener('click', () => open(slide.dataset.video, title, btn));
        slide.appendChild(btn);
    });

    cards.forEach(card => {
        card.addEventListener('click', () => open(card.dataset.video, card.dataset.videoTitle || card.textContent.trim(), card));
    });
}

// 19. Exercise pages (ex1–ex6): one question per screen
// Takes the existing <div class="exercise"> blocks (multiple choice via checkAnswer(this, true|false),
// or a "reveal" button via showAnswer) and shows them one at a time with progress, score and a result screen.
function initExerciseStepper() {
    const exercises = [...document.querySelectorAll('.slide .exercise')];
    if (exercises.length < 2) return;
    const firstSlide = exercises[0].closest('.slide');
    const host = firstSlide.parentElement;
    const total = exercises.length;
    const letters = ['أ', 'ب', 'ج', 'د', 'هـ', 'و'];
    const state = exercises.map(() => null); // null | 'correct' | 'wrong'

    const qz = document.createElement('div');
    qz.className = 'qz';
    qz.innerHTML = `
        <div class="qz-top">
            <div class="qz-count">سؤال <b class="qz-cur">1</b> من ${total}</div>
            <div class="qz-score" aria-live="polite">✓ <b class="qz-ok">0</b> صحيحة · ✗ <b class="qz-bad">0</b> خاطئة</div>
        </div>
        <div class="qz-dots" role="tablist" aria-label="الأسئلة"></div>
        <div class="qz-stage"></div>
        <div class="qz-nav">
            <button type="button" class="qz-btn qz-prev">→ السابق</button>
            <button type="button" class="qz-btn qz-btn-main qz-next">التالي ←</button>
        </div>`;
    const dotsEl = qz.querySelector('.qz-dots');
    const stage = qz.querySelector('.qz-stage');
    const prevBtn = qz.querySelector('.qz-prev');
    const nextBtn = qz.querySelector('.qz-next');

    const cards = exercises.map((ex, i) => {
        const card = document.createElement('section');
        card.className = 'qz-card';
        card.setAttribute('aria-label', `سؤال ${i + 1}`);
        card.innerHTML = `<span class="qz-chip">سؤال ${i + 1}</span>`;
        // drop the old "12. " numbering at the start of the question
        const q = ex.querySelector('.question');
        if (q && q.firstChild && q.firstChild.nodeType === 3) q.firstChild.textContent = q.firstChild.textContent.replace(/^\s*\d+\s*[.\-)]\s*/, '');
        card.appendChild(ex);

        const inputs = [...ex.querySelectorAll('.options input[type="radio"]')];
        const fb = ex.querySelector('.feedback');
        inputs.forEach((inp, k) => {
            const correct = /checkAnswer\(\s*this\s*,\s*true\s*\)/.test(inp.getAttribute('onchange') || '');
            inp.dataset.correct = correct ? '1' : '0';
            inp.removeAttribute('onchange');
            const label = inp.closest('label');
            const badge = document.createElement('span');
            badge.className = 'qz-letter';
            badge.textContent = letters[k] || k + 1;
            label.insertBefore(badge, label.firstChild);
            inp.addEventListener('change', () => {
                if (state[i]) return;
                const ok = inp.dataset.correct === '1';
                inputs.forEach(o => {
                    o.disabled = true;
                    if (o.dataset.correct === '1') o.closest('label').classList.add('is-correct');
                });
                if (!ok) label.classList.add('is-wrong');
                fb.className = 'feedback ' + (ok ? 'correct' : 'incorrect');
                fb.textContent = ok ? 'إجابة صحيحة! أحسنت.' : 'إجابة خاطئة. الإجابة الصحيحة موضّحة باللون الأخضر.';
                fb.style.display = 'block';
                fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); // phones: options stack, feedback may be below the fold
                mark(i, ok ? 'correct' : 'wrong');
            });
        });

        // open question: reveal the answer, then the trainee marks their own answer
        const reveal = ex.querySelector('.reveal-btn');
        if (reveal) {
            reveal.addEventListener('click', () => {
                if (ex.querySelector('.qz-self')) return;
                const self = document.createElement('div');
                self.className = 'qz-self';
                self.innerHTML = `<span>هل كانت إجابتك صحيحة؟</span>
                    <button type="button" class="qz-btn qz-yes">✓ نعم</button>
                    <button type="button" class="qz-btn qz-no">✗ لا</button>`;
                self.querySelector('.qz-yes').addEventListener('click', () => { mark(i, 'correct'); self.classList.add('done', 'yes'); });
                self.querySelector('.qz-no').addEventListener('click', () => { mark(i, 'wrong'); self.classList.add('done', 'no'); });
                ex.appendChild(self);
            });
        }

        stage.appendChild(card);
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'qz-dot';
        dot.textContent = i + 1;
        dot.setAttribute('aria-label', `السؤال ${i + 1}`);
        dot.addEventListener('click', () => go(i));
        dotsEl.appendChild(dot);
        return card;
    });

    const result = document.createElement('section');
    result.className = 'qz-card qz-result';
    stage.appendChild(result);

    // replace the old two-questions-per-screen slides
    host.insertBefore(qz, firstSlide);
    document.querySelectorAll('.slide').forEach(s => { if (!s.querySelector('.exercise')) s.remove(); });
    host.querySelectorAll(':scope > .slide').forEach(s => s.remove());

    let current = 0;
    const dots = [...dotsEl.children];

    function mark(i, val) {
        state[i] = val;
        dots[i].classList.toggle('ok', val === 'correct');
        dots[i].classList.toggle('bad', val === 'wrong');
        qz.querySelector('.qz-ok').textContent = state.filter(s => s === 'correct').length;
        qz.querySelector('.qz-bad').textContent = state.filter(s => s === 'wrong').length;
    }

    function show(i) {
        cards.forEach((c, k) => c.classList.toggle('active', k === i));
        result.classList.remove('active');
        dots.forEach((d, k) => d.classList.toggle('current', k === i));
        qz.querySelector('.qz-cur').textContent = i + 1;
        qz.classList.remove('finished');
        prevBtn.disabled = i === 0;
        nextBtn.textContent = i === total - 1 ? 'النتيجة ←' : 'التالي ←';
        current = i;
    }

    function showResult() {
        const ok = state.filter(s => s === 'correct').length;
        const answered = state.filter(Boolean).length;
        const pct = Math.round(ok / total * 100);
        const wrongIdx = state.map((s, k) => s === 'wrong' ? k : -1).filter(k => k >= 0);
        const skipped = total - answered;
        const msg = pct >= 90 ? 'ممتاز! أداء رائع 🌟' : pct >= 75 ? 'جيد جدًا، استمر 👏' : pct >= 50 ? 'جيد، راجع الأسئلة الخاطئة' : 'راجع محتوى الوحدة ثم أعد المحاولة';
        result.innerHTML = `
            <div class="qz-ring" style="--p:${pct}"><b>${ok}</b><small>من ${total}</small></div>
            <h2 class="qz-msg">${msg}</h2>
            <p class="qz-sub">${pct}% · أُجيب عن ${answered} من ${total}${skipped ? ` · ${skipped} بدون إجابة` : ''}</p>
            ${wrongIdx.length ? `<div class="qz-review"><span>راجع الأسئلة:</span>${wrongIdx.map(k => `<button type="button" class="qz-dot bad" data-go="${k}">${k + 1}</button>`).join('')}</div>` : ''}
            <div class="qz-result-actions">
                <button type="button" class="qz-btn qz-btn-main" data-act="retry">↻ أعد المحاولة</button>
                <button type="button" class="qz-btn" data-act="first">راجع من البداية</button>
            </div>`;
        result.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => go(+b.dataset.go)));
        result.querySelector('[data-act="retry"]').addEventListener('click', reset);
        result.querySelector('[data-act="first"]').addEventListener('click', () => go(0));
        cards.forEach(c => c.classList.remove('active'));
        dots.forEach(d => d.classList.remove('current'));
        result.classList.add('active');
        qz.classList.add('finished');
        prevBtn.disabled = false;
        current = total;
    }

    function reset() {
        exercises.forEach((ex, i) => {
            state[i] = null;
            dots[i].classList.remove('ok', 'bad');
            ex.querySelectorAll('.options input').forEach(inp => { inp.checked = false; inp.disabled = false; });
            ex.querySelectorAll('.options label').forEach(l => l.classList.remove('is-correct', 'is-wrong'));
            const fb = ex.querySelector('.feedback');
            if (fb) { fb.style.display = 'none'; fb.textContent = ''; }
            const rb = ex.querySelector('.reveal-btn');
            if (rb) rb.style.display = '';
            ex.querySelectorAll('.qz-self').forEach(s => s.remove());
        });
        mark(0, null);
        go(0);
    }

    function go(i) {
        if (i >= total) showResult(); else show(Math.max(0, i));
        const top = qz.getBoundingClientRect().top;
        if (top < 0) window.scrollBy({ top: top - 90, behavior: 'smooth' });
    }

    prevBtn.addEventListener('click', () => go(current - 1));
    nextBtn.addEventListener('click', () => go(current + 1));
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey || e.altKey || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) && e.target.type !== 'radio') return;
        if (e.key === 'ArrowLeft') { e.preventDefault(); if (current < total) go(current + 1); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); if (current > 0) go(current - 1); }
        else if (/^[1-6]$/.test(e.key) && current < total) {
            const inp = cards[current].querySelectorAll('.options input')[+e.key - 1];
            if (inp && !inp.disabled) { inp.checked = true; inp.dispatchEvent(new Event('change', { bubbles: true })); }
        }
    });

    show(0);
}

// 18. Inline PDF viewer (book, presentations)
// <div class="pdf-viewer" data-src="file.pdf" data-title="..."></div>
// Pages are drawn with PDF.js so the file opens inside the page on phones too;
// falls back to the browser's own viewer when PDF.js cannot load the file (e.g. file://).
const PDFJS_BASE = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
let pdfjsPromise = null;
function loadPdfJs() {
    if (!pdfjsPromise) {
        pdfjsPromise = new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = PDFJS_BASE + 'pdf.min.js';
            s.onload = () => {
                window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_BASE + 'pdf.worker.min.js';
                resolve(window.pdfjsLib);
            };
            s.onerror = reject;
            document.head.appendChild(s);
        });
    }
    return pdfjsPromise;
}

function initPdfViewers() {
    document.querySelectorAll('.pdf-viewer[data-src]').forEach(setupPdfViewer);
}

function setupPdfViewer(el) {
    el.innerHTML = `
        <div class="pdf-toolbar">
            <span class="pdf-title"></span>
            <span class="pdf-page-info" aria-live="polite"></span>
            <div class="pdf-tools">
                <button type="button" class="pdf-btn" data-act="out" aria-label="تصغير">−</button>
                <span class="pdf-zoom">100%</span>
                <button type="button" class="pdf-btn" data-act="in" aria-label="تكبير">+</button>
                <button type="button" class="pdf-btn" data-act="fs" aria-label="ملء الشاشة">⛶</button>
                <a class="pdf-btn pdf-link" data-act="open" target="_blank" rel="noopener" aria-label="فتح في نافذة جديدة">↗</a>
                <a class="pdf-btn pdf-link pdf-download" data-act="download" download>⬇ تحميل</a>
            </div>
        </div>
        <div class="pdf-pages" tabindex="0"></div>`;

    const pagesEl = el.querySelector('.pdf-pages');
    const titleEl = el.querySelector('.pdf-title');
    const infoEl = el.querySelector('.pdf-page-info');
    const zoomEl = el.querySelector('.pdf-zoom');
    const openA = el.querySelector('[data-act="open"]');
    const dlA = el.querySelector('[data-act="download"]');
    let doc = null, zoom = 1, baseScale = 1, token = 0;

    const setInfo = (cur, total) => { infoEl.textContent = total ? `صفحة ${cur} من ${total}` : ''; };

    const renderPage = async (holder) => {
        if (holder.dataset.rendered === String(token)) return;
        const myToken = token;
        holder.dataset.rendered = String(token);
        const page = await doc.getPage(+holder.dataset.page);
        if (myToken !== token) return;
        const vp = page.getViewport({ scale: baseScale * zoom });
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(vp.width * dpr);
        canvas.height = Math.floor(vp.height * dpr);
        holder.style.width = vp.width + 'px';
        holder.style.height = vp.height + 'px';
        await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp, transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null }).promise;
        if (myToken !== token) return;
        holder.replaceChildren(canvas);
    };

    // draw the pages in (or near) the visible part of the scroll box; the rest stay placeholders
    const renderVisible = () => {
        if (!doc) return;
        const box = pagesEl.getBoundingClientRect();
        const pages = pagesEl.children;
        let cur = 0;
        for (let i = 0; i < pages.length; i++) {
            const r = pages[i].getBoundingClientRect();
            if (r.bottom < box.top - 800) continue;
            if (r.top > box.bottom + 800) break;
            renderPage(pages[i]);
            if (r.top <= box.top + 60) cur = i + 1;
        }
        setInfo(Math.max(cur, 1), doc.numPages);
    };

    const layout = async () => {
        token++;
        const first = await doc.getPage(1);
        const vp1 = first.getViewport({ scale: 1 });
        baseScale = Math.max(0.2, (pagesEl.clientWidth - 32) / vp1.width);
        const w = vp1.width * baseScale * zoom, h = vp1.height * baseScale * zoom;
        zoomEl.textContent = Math.round(zoom * 100) + '%';
        pagesEl.replaceChildren();
        for (let i = 1; i <= doc.numPages; i++) {
            const holder = document.createElement('div');
            holder.className = 'pdf-page';
            holder.dataset.page = i;
            holder.style.width = w + 'px';
            holder.style.height = h + 'px';
            holder.setAttribute('aria-label', `صفحة ${i}`);
            pagesEl.appendChild(holder);
        }
        renderVisible();
    };

    const fallback = (src) => {
        token++;
        pagesEl.innerHTML = `<iframe class="pdf-frame" src="${src}" title="${titleEl.textContent}"></iframe>`;
        setInfo(0, 0);
        el.classList.add('pdf-native');
    };

    el.load = async (src, title) => {
        titleEl.textContent = title || '';
        openA.href = src;
        dlA.href = src;
        el.classList.remove('pdf-native');
        doc = null;
        zoom = 1;
        pagesEl.innerHTML = '<div class="pdf-loading">جارٍ تحميل الملف…</div>';
        setInfo(0, 0);
        if (!/^https?:$/.test(location.protocol)) { fallback(src); return; }
        try {
            const lib = await loadPdfJs();
            const myDoc = await lib.getDocument({
                url: src,
                cMapUrl: PDFJS_BASE + 'cmaps/',
                cMapPacked: true,
                standardFontDataUrl: PDFJS_BASE + 'standard_fonts/'
            }).promise;
            if (dlA.getAttribute('href') !== src) return; // another file was chosen meanwhile
            doc = myDoc;
            await layout();
        } catch (err) {
            console.warn('PDF viewer:', err);
            fallback(src);
        }
    };

    // render newly visible pages + update the page indicator
    let scrollTimer = null;
    pagesEl.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(renderVisible, 60);
    }, { passive: true });

    const rezoom = async (z) => {
        if (!doc) return;
        const ratio = pagesEl.scrollTop / Math.max(1, pagesEl.scrollHeight);
        zoom = Math.min(3, Math.max(0.5, z));
        await layout();
        pagesEl.scrollTop = ratio * pagesEl.scrollHeight;
    };
    el.querySelector('[data-act="in"]').addEventListener('click', () => rezoom(zoom + 0.25));
    el.querySelector('[data-act="out"]').addEventListener('click', () => rezoom(zoom - 0.25));
    el.querySelector('[data-act="fs"]').addEventListener('click', () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else if (el.requestFullscreen) el.requestFullscreen();
    });
    // re-fit after full screen or a real width change
    let lastWidth = 0, resizeTimer = null;
    new ResizeObserver(() => {
        const wNow = pagesEl.clientWidth;
        if (!doc || Math.abs(wNow - lastWidth) < 8) return;
        lastWidth = wNow;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => rezoom(zoom), 150);
    }).observe(pagesEl);

    el.load(el.dataset.src, el.dataset.title);
}

// 16. Function plots
// <figure class="plot"><script type="application/json">{...}</script></figure>
// Config: x:[min,max], y:[min,max], width, height, grid (step),
//   xticks / yticks: numbers or {v, label}, curves: [{f, from, to, color}],
//   areas: [{f, from, to, color}], lines: [{from:[x,y], to:[x,y], color, dashed}],
//   points: [{x, y, color, label, dx, dy, anchor, open}], texts: [{x, y, text, color, anchor, math, dx, dy}]
// Colors are theme-aware classes: a (blue), b (red), c (green), d (orange), e (purple), n (neutral).
function initPlots() {
    let uid = 0;
    document.querySelectorAll('figure.plot').forEach(fig => {
        const src = fig.querySelector('script[type="application/json"]');
        if (!src || fig.querySelector('svg')) return;
        try {
            fig.insertAdjacentHTML('beforeend', buildPlotSVG(JSON.parse(src.textContent), ++uid));
        } catch (err) {
            console.warn('Plot error:', err);
        }
    });
}

function buildPlotSVG(c, uid) {
    const W = c.width || 640, H = c.height || 360, P = 30;
    const [x0, x1] = c.x, [y0, y1] = c.y;
    const sx = x => P + (x - x0) / (x1 - x0) * (W - 2 * P);
    const sy = y => H - P - (y - y0) / (y1 - y0) * (H - 2 * P);
    const f2 = n => n.toFixed(1);
    const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const num = v => String(v).replace('-', '−');
    const isArabic = s => /[؀-ۿ]/.test(s);
    const fn = expr => new Function('x', 'return ' + expr);
    const clipId = 'plot-clip-' + uid;
    const out = [];

    // Function path, broken at discontinuities (asymptotes)
    const curvePath = (f, a, b) => {
        const span = y1 - y0, lo = y0 - span, hi = y1 + span, N = 800;
        let d = '', pen = false, prev = null;
        for (let i = 0; i <= N; i++) {
            const x = a + (b - a) * i / N, y = f(x);
            if (!isFinite(y) || y < lo || y > hi) { pen = false; prev = null; continue; }
            if (prev !== null && Math.abs(y - prev) > span) pen = false;
            d += (pen ? 'L' : 'M') + f2(sx(x)) + ' ' + f2(sy(y));
            pen = true; prev = y;
        }
        return d;
    };

    const text = (t, x, y, opts = {}) => {
        const cls = ['plot-text'];
        if (opts.math) cls.push('math');
        if (opts.color) cls.push('colored', 'c-' + opts.color);
        if (opts.cls) cls.push(opts.cls);
        // Anchors are given left-to-right (start = left edge); Arabic text runs right-to-left,
        // so its start/end are swapped to keep the same visual meaning.
        let anchor = opts.anchor || 'middle';
        const ar = isArabic(t);
        // Keep math runs inside Arabic labels left-to-right, e.g. "(−1, 2)" or "Δx → 0"
        if (ar) t = t.replace(/[^؀-ۿ\s](?:[^؀-ۿ]*[^؀-ۿ\s])?/g,
            m => /[A-Za-z0-9Δ]/.test(m) ? '⁦' + m + '⁩' : m);
        if (ar && anchor !== 'middle') anchor = anchor === 'start' ? 'end' : 'start';
        const dir = ar ? 'rtl' : 'ltr';
        return `<text class="${cls.join(' ')}" x="${f2(x)}" y="${f2(y)}" text-anchor="${anchor}" style="direction: ${dir}; unicode-bidi: embed;">${esc(t)}</text>`;
    };

    out.push(`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(c.alt || '')}" dir="ltr">`);
    out.push(`<defs><clipPath id="${clipId}"><rect x="${P}" y="${P}" width="${W - 2 * P}" height="${H - 2 * P}"/></clipPath></defs>`);

    // Grid
    if (c.grid) {
        const g = c.grid;
        for (let x = Math.ceil(x0 / g) * g; x <= x1; x += g) out.push(`<line class="grid" x1="${f2(sx(x))}" y1="${P}" x2="${f2(sx(x))}" y2="${H - P}"/>`);
        for (let y = Math.ceil(y0 / g) * g; y <= y1; y += g) out.push(`<line class="grid" x1="${P}" y1="${f2(sy(y))}" x2="${W - P}" y2="${f2(sy(y))}"/>`);
    }

    // Shaded areas
    (c.areas || []).forEach(a => {
        const f = fn(a.f), N = 300;
        let d = `M${f2(sx(a.from))} ${f2(sy(0))}`;
        for (let i = 0; i <= N; i++) { const x = a.from + (a.to - a.from) * i / N; d += `L${f2(sx(x))} ${f2(sy(f(x)))}`; }
        d += `L${f2(sx(a.to))} ${f2(sy(0))}Z`;
        out.push(`<path class="area c-${a.color || 'a'}" d="${d}" clip-path="url(#${clipId})"/>`);
    });

    // Axes (at 0 when visible)
    const ax = (x0 <= 0 && x1 >= 0) ? sx(0) : sx(x0);
    const ay = (y0 <= 0 && y1 >= 0) ? sy(0) : sy(y0);
    out.push(`<line class="axis" x1="${P - 10}" y1="${f2(ay)}" x2="${W - P + 6}" y2="${f2(ay)}"/>`);
    out.push(`<path class="axis-arrow" d="M${W - P + 16} ${f2(ay)}l-12 -5v10z"/>`);
    out.push(`<line class="axis" x1="${f2(ax)}" y1="${H - P + 10}" x2="${f2(ax)}" y2="${P - 6}"/>`);
    out.push(`<path class="axis-arrow" d="M${f2(ax)} ${P - 16}l-5 12h10z"/>`);
    out.push(text('x', W - P + 14, ay + 22, { math: true }));
    out.push(text('y', ax + 16, P - 8, { math: true }));

    // Ticks
    (c.xticks || []).forEach(t => {
        const v = typeof t === 'object' ? t.v : t, label = typeof t === 'object' ? t.label : num(v);
        out.push(`<line class="tick" x1="${f2(sx(v))}" y1="${f2(ay - 4)}" x2="${f2(sx(v))}" y2="${f2(ay + 4)}"/>`);
        out.push(text(label, sx(v), ay + 22, { cls: 'tick-label', math: typeof t === 'object' }));
    });
    (c.yticks || []).forEach(t => {
        const v = typeof t === 'object' ? t.v : t, label = typeof t === 'object' ? t.label : num(v);
        out.push(`<line class="tick" x1="${f2(ax - 4)}" y1="${f2(sy(v))}" x2="${f2(ax + 4)}" y2="${f2(sy(v))}"/>`);
        out.push(text(label, ax - 9, sy(v) + 5, { cls: 'tick-label', anchor: 'end', math: typeof t === 'object' }));
    });

    // Straight lines / segments
    (c.lines || []).forEach(l => {
        out.push(`<line class="${l.dashed ? 'dashed' : 'line'} c-${l.color || 'n'}" x1="${f2(sx(l.from[0]))}" y1="${f2(sy(l.from[1]))}" x2="${f2(sx(l.to[0]))}" y2="${f2(sy(l.to[1]))}" clip-path="url(#${clipId})"/>`);
    });

    // Curves
    (c.curves || []).forEach(cv => {
        out.push(`<path class="curve c-${cv.color || 'a'}" d="${curvePath(fn(cv.f), cv.from ?? x0, cv.to ?? x1)}" clip-path="url(#${clipId})"/>`);
    });

    // Points
    (c.points || []).forEach(p => {
        // open: hollow point (value excluded, e.g. a hole or the open end of a jump)
        out.push(`<circle class="point${p.open ? ' open' : ''} c-${p.color || 'b'}" cx="${f2(sx(p.x))}" cy="${f2(sy(p.y))}" r="6"/>`);
        if (p.label) out.push(text(p.label, sx(p.x) + (p.dx || 0), sy(p.y) + (p.dy ?? -14), { anchor: p.anchor }));
    });

    // Free text
    (c.texts || []).forEach(t => {
        out.push(text(t.text, sx(t.x) + (t.dx || 0), sy(t.y) + (t.dy || 0), t));
    });

    out.push('</svg>');
    return out.join('');
}

// 15. Presentation Mode (unit pages: one slide at a time with Next/Prev)
function initPresentation() {
    if (!/\/u\d+\.html$/.test(window.location.pathname)) return;

    const slides = Array.from(document.querySelectorAll('main .slide'));
    if (slides.length < 2) return;

    const wrapper = slides[0].parentElement;
    const unitNav = wrapper.querySelector('.unit-nav');

    // Section name of each slide (shown as a small label by the modern deck style)
    let sectionName = '';
    slides.forEach(s => {
        const h = s.querySelector('h2, h1');
        if (h) sectionName = h.textContent.trim();
        s.dataset.section = sectionName;
    });
    const last = slides.length - 1;
    let current = 0;

    // Mode toggle (presentation <-> full page)
    const toolbar = document.createElement('div');
    toolbar.className = 'presentation-toolbar';
    toolbar.innerHTML = `<button type="button" class="slide-mode-toggle"></button>`;
    wrapper.insertBefore(toolbar, slides[0]);
    const modeBtn = toolbar.querySelector('.slide-mode-toggle');

    // Controls bar
    const controls = document.createElement('div');
    controls.className = 'slide-controls';
    controls.innerHTML = `
        <div class="slide-progress"><span class="slide-progress-fill"></span><div class="slide-nodes"></div></div>
        <div class="slide-controls-row">
            <button type="button" class="slide-btn slide-prev" aria-label="الشريحة السابقة"><span>→</span> <span class="slide-btn-text">السابق</span></button>
            <div class="slide-mid">
                <span class="slide-counter">
                    <input class="slide-input" type="number" inputmode="numeric" min="1" max="${slides.length}"
                        aria-label="رقم الشريحة (اكتب رقماً ثم اضغط Enter)" title="اكتب رقم الشريحة ثم اضغط Enter">
                    <span>من ${slides.length}</span>
                </span>
                <button type="button" class="slide-fs" title="ملء الشاشة" aria-label="ملء الشاشة">⛶</button>
            </div>
            <button type="button" class="slide-btn slide-next primary">التالي <span>←</span></button>
        </div>
    `;
    slides[last].after(controls);

    // Stage: holds the slides as a fixed 960x540 canvas scaled to fit the screen
    const stage = document.createElement('div');
    stage.className = 'slide-stage';
    slides[0].before(stage);
    slides.forEach(s => stage.appendChild(s));

    const DECK_W = 960, DECK_H = 540;
    const fitStage = () => {
        if (!isPresenting()) return;
        const cs = getComputedStyle(wrapper);
        const availW = wrapper.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        // Height left under the toolbar after reserving room for the controls
        // (in full screen the toolbar is hidden and the slide starts at the top)
        const full = document.body.classList.contains('deck-fullscreen');
        const top = full ? 16 : toolbar.getBoundingClientRect().bottom + window.scrollY + 16;
        const availH = window.innerHeight - top - controls.offsetHeight - (full ? 32 : 24);
        const scale = Math.max(0.2, Math.min(availW / DECK_W, availH / DECK_H));
        stage.style.setProperty('--deck-scale', scale.toFixed(4));
        toolbar.style.setProperty('--deck-scale', scale.toFixed(4));
        controls.style.setProperty('--deck-scale', scale.toFixed(4));
    };
    if (window.ResizeObserver) new ResizeObserver(fitStage).observe(wrapper);
    window.addEventListener('resize', fitStage);

    const prevBtn = controls.querySelector('.slide-prev');
    const nextBtn = controls.querySelector('.slide-next');
    const slideInput = controls.querySelector('.slide-input');
    const progress = controls.querySelector('.slide-progress-fill');

    const isPresenting = () => document.body.classList.contains('presentation-mode');
    // Phone app: one full-width card per slide (readable size), swipe between them
    const isCards = () => document.body.classList.contains('phone-cards');

    // Jump to a slide by typing its number
    const goToTyped = () => {
        const n = parseInt(slideInput.value, 10);
        if (n >= 1 && n <= slides.length) { if (n - 1 !== current) show(n - 1); }
        else slideInput.value = current + 1;
    };
    slideInput.addEventListener('change', goToTyped);
    slideInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); goToTyped(); slideInput.blur(); }
        else if (e.key === 'Escape') { slideInput.value = current + 1; slideInput.blur(); }
    });
    slideInput.addEventListener('focus', () => slideInput.select());

    // Progress-bar nodes: one per heading (large for sections h2, small for subheadings h3).
    // Hover shows the title; click jumps to that slide.
    const plainLabel = t => t
        .replace(/\\\(|\\\)/g, '').replace(/\\times/g, '×').replace(/\\neq/g, '≠')
        .replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '').replace(/\s*×\s*/g, ' × ')
        .replace(/\s+/g, ' ').trim();
    const nodesBox = controls.querySelector('.slide-nodes');
    const nodes = [];
    slides.forEach((s, i) => {
        if (i === 0) return;
        const h = s.querySelector('h2, h3');
        if (!h) return;
        const label = plainLabel(h.textContent);
        if (!label || /\(تابع\)/.test(label)) return;
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'slide-node' + (h.tagName === 'H2' ? ' major' : '');
        b.style.right = `${((i + 1) / slides.length) * 100}%`;
        b.dataset.label = label;
        b.setAttribute('aria-label', `${label} (الشريحة ${i + 1})`);
        b.addEventListener('click', () => show(i));
        nodesBox.appendChild(b);
        nodes.push({ i, b });
    });

    // Full screen: hide the site chrome so the slide fills the screen.
    // Uses the Fullscreen API when available (not on iPhone), plus a CSS class either way.
    const fsBtn = controls.querySelector('.slide-fs');
    const isFull = () => document.body.classList.contains('deck-fullscreen');
    const updateFsBtn = () => {
        const label = isFull() ? 'الخروج من ملء الشاشة' : 'ملء الشاشة';
        fsBtn.title = label;
        fsBtn.setAttribute('aria-label', label);
        fsBtn.classList.toggle('active', isFull());
    };
    const enterFull = () => {
        document.body.classList.add('deck-fullscreen');
        const el = document.documentElement;
        if (el.requestFullscreen && !document.fullscreenElement) el.requestFullscreen().catch(() => { });
        window.scrollTo(0, 0);
        updateFsBtn();
        requestAnimationFrame(fitStage);
    };
    const exitFull = () => {
        document.body.classList.remove('deck-fullscreen');
        if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(() => { });
        updateFsBtn();
        requestAnimationFrame(fitStage);
    };
    fsBtn.addEventListener('click', () => (isFull() ? exitFull() : enterFull()));
    // Esc in real full screen is handled by the browser; keep the layout in sync
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && isFull()) exitFull();
    });

    // Highlight the section of this slide (continuation slides use the last heading before them)
    const setActiveTOC = (index) => {
        let heading = slides[index].querySelector('h2, h1');
        for (let i = index - 1; i >= 0 && !heading; i--) {
            const hs = slides[i].querySelectorAll('h2, h1');
            if (hs.length) heading = hs[hs.length - 1];
        }
        document.querySelectorAll('.toc-link').forEach(link => {
            link.classList.toggle('active', !!heading && link.getAttribute('href') === `#${heading.id}`);
        });
    };

    // Mark slides that still have hidden content below (for the bottom fade hint)
    const updateMore = () => {
        const el = slides[current];
        el.classList.toggle('has-more', el.scrollHeight - el.scrollTop - el.clientHeight > 4);
    };
    slides.forEach(s => s.addEventListener('scroll', updateMore, { passive: true }));

    // If a slide's content is still a bit taller than the canvas, shrink it slightly to fit
    const fitContent = (slide) => {
        const kids = Array.from(slide.children);
        kids.forEach(k => { k.style.zoom = ''; });
        if (!isPresenting()) return;
        const cs = getComputedStyle(slide);
        const pad = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
        let zoom = 1;
        for (let i = 0; i < 4 && slide.scrollHeight > slide.clientHeight + 1; i++) {
            zoom = Math.max(0.6, zoom * (slide.clientHeight - pad) / (slide.scrollHeight - pad));
            kids.forEach(k => { k.style.zoom = zoom; });
            if (zoom === 0.6) break;
        }
    };
    if (window.MathJax && MathJax.startup && MathJax.startup.promise) {
        MathJax.startup.promise.then(() => { if (isPresenting()) { fitContent(slides[current]); updateMore(); } });
    }
    window.addEventListener('resize', () => { if (isPresenting()) updateMore(); });

    const show = (index, scroll = true) => {
        current = Math.max(0, Math.min(last, index));
        slides.forEach((s, i) => s.classList.toggle('is-active', i === current));

        slideInput.value = current + 1;
        progress.style.width = `${((current + 1) / slides.length) * 100}%`;
        let here = null;
        nodes.forEach(n => {
            n.b.classList.toggle('done', n.i <= current);
            if (n.i <= current) here = n;
        });
        nodes.forEach(n => n.b.classList.toggle('current', n === here));
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === last;
        if (unitNav) unitNav.classList.toggle('is-hidden', current !== last);

        slides[current].scrollTop = 0;
        fitContent(slides[current]);
        updateMore();
        setTimeout(() => { fitContent(slides[current]); updateMore(); }, 600); // after MathJax / images settle
        if (isCards() && window.fitWideMath) requestAnimationFrame(window.fitWideMath);
        setActiveTOC(current);
        history.replaceState(null, '', `#slide-${current + 1}`);
        if (scroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const setMode = (presenting, byUser = false) => {
        document.body.classList.toggle('presentation-mode', presenting);
        modeBtn.innerHTML = presenting
            ? '<span>📄</span> عرض كل المحتوى'
            : '<span>🖥️</span> العرض التقديمي';
        if (unitNav) unitNav.classList.toggle('is-hidden', presenting && current !== last);
        fitStage();
        try {
            localStorage.setItem('slide-mode', presenting ? 'slides' : 'page');
            // An explicit choice is remembered separately: phones honour only this one
            if (byUser) localStorage.setItem('slide-mode-choice', presenting ? 'slides' : 'page');
        } catch (e) { }
    };

    prevBtn.addEventListener('click', () => show(current - 1));
    nextBtn.addEventListener('click', () => show(current + 1));

    const setCards = (on, byUser = false) => {
        document.body.classList.toggle('phone-cards', on);
        modeBtn.innerHTML = on ? '<span>📄</span> عرض كل المحتوى' : '<span>🃏</span> عرض البطاقات';
        if (unitNav) unitNav.classList.toggle('is-hidden', on && current !== last);
        if (byUser) { try { localStorage.setItem('phone-deck', on ? 'cards' : 'page'); } catch (e) { } }
    };
    const scrollToSlide = (i) => {
        const bar = document.querySelector('.m-appbar') || document.querySelector('.navbar');
        window.scrollTo({ top: slides[i].getBoundingClientRect().top + window.scrollY - (bar ? bar.offsetHeight : 0) - 12 });
    };

    // Swipe on the cards: in RTL, swiping right shows the next slide
    let touchX = null, touchY = 0, touchInScroller = false;
    const inHScroller = (el) => {
        for (; el && el !== stage; el = el.parentElement) {
            const ox = getComputedStyle(el).overflowX;
            if ((ox === 'auto' || ox === 'scroll') && el.scrollWidth > el.clientWidth + 1) return true;
        }
        return false;
    };
    stage.addEventListener('touchstart', (e) => {
        if (!isCards() || e.touches.length !== 1) { touchX = null; return; }
        touchX = e.touches[0].clientX; touchY = e.touches[0].clientY;
        touchInScroller = inHScroller(e.target);
    }, { passive: true });
    stage.addEventListener('touchend', (e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX, dy = e.changedTouches[0].clientY - touchY;
        touchX = null;
        if (touchInScroller || Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
        const to = current + (dx > 0 ? 1 : -1);
        if (to >= 0 && to <= last) show(to);
    }, { passive: true });

    modeBtn.addEventListener('click', () => {
        if (APP_MODE) {
            const on = !isCards();
            setCards(on, true);
            if (on) show(current); else setTimeout(() => scrollToSlide(current), 50);
            if (window.fitWideMath) setTimeout(window.fitWideMath, 300);
            return;
        }
        const presenting = !isPresenting();
        if (!presenting) exitFull();
        setMode(presenting, true);
        if (presenting) {
            show(current);
            enterFull();
        } else {
            slides.forEach(fitContent); // clears any shrink in full-page mode
            history.replaceState(null, '', window.location.pathname);
            slides[current].scrollIntoView({ block: 'start' });
        }
    });

    // Keyboard: in RTL, left arrow moves forward
    document.addEventListener('keydown', (e) => {
        if (!(isPresenting() || isCards()) || e.altKey || e.ctrlKey || e.metaKey) return;
        const tag = (e.target.tagName || '').toLowerCase();
        if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
        if (e.key === 'Escape' && isFull()) { exitFull(); return; }
        const isSpace = e.key === ' ' && tag !== 'select';
        // Blur a focused button/link so the browser doesn't also click it on keyup
        if (isSpace && (tag === 'button' || tag === 'a')) e.target.blur();
        if (e.key === 'ArrowLeft' || e.key === 'PageDown' || (isSpace && !e.shiftKey)) { e.preventDefault(); show(current + 1); }
        else if (e.key === 'ArrowRight' || e.key === 'PageUp' || (isSpace && e.shiftKey)) { e.preventDefault(); show(current - 1); }
    });

    // Used by the TOC sidebar to jump to the slide holding a heading
    window.presentation = {
        reveal(el) {
            if (!isPresenting()) return false;
            const i = slides.findIndex(s => s.contains(el));
            if (i === -1) return false;
            show(i);
            return true;
        }
    };

    // Initial state: saved mode + slide from URL hash (#slide-N or a heading id).
    // Phones default to the full page: 16:9 slides shrink to unreadable text there.
    let saved = null, choice = null;
    try { saved = localStorage.getItem('slide-mode'); choice = localStorage.getItem('slide-mode-choice'); } catch (e) { }
    const phone = window.matchMedia('(max-width: 700px)').matches;

    let start = 0;
    const hash = decodeURIComponent(window.location.hash.slice(1));
    const match = hash.match(/^slide-(\d+)$/);
    if (match) {
        start = parseInt(match[1], 10) - 1;
    } else if (hash) {
        const target = document.getElementById(hash);
        const i = target ? slides.findIndex(s => s.contains(target)) : -1;
        if (i !== -1) start = i;
    }

    if (APP_MODE) {
        let deck = null;
        try { deck = localStorage.getItem('phone-deck'); } catch (e) { }
        setCards(deck !== 'page');
        if (isCards()) show(start, false);
        else if (match || (hash && start)) setTimeout(() => scrollToSlide(start), 300);
        return;
    }
    setMode(phone ? choice === 'slides' : (choice || saved) !== 'page');
    if (isPresenting()) show(start, false);
    else if (match || (hash && start)) setTimeout(() => scrollToSlide(start), 300);
}

// 21. Phones: shrink displayed equations that are wider than the screen (down to 70%),
// so they fit instead of hiding their end behind a horizontal scroll.
function initWideMath() {
    if (!document.querySelector('.slide, .en-app, .problem')) return;
    const fit = () => {
        if (!window.matchMedia('(max-width: 700px)').matches) return;
        document.querySelectorAll('mjx-container[display="true"]').forEach(m => {
            if (m.closest('body.presentation-mode .slide')) return; // slides scale as a whole
            m.style.fontSize = '';
            const ratio = m.clientWidth / m.scrollWidth;
            if (m.clientWidth && ratio < 1) m.style.fontSize = Math.max(70, Math.floor(ratio * 98)) + '%';
            // Still too wide at 70%: it scrolls, so say so instead of looking cut off
            const hint = m.nextElementSibling && m.nextElementSibling.classList.contains('math-swipe-hint') ? m.nextElementSibling : null;
            const wide = m.scrollWidth > m.clientWidth + 1;
            if (wide && !hint) m.insertAdjacentHTML('afterend', '<span class="math-swipe-hint">↔ اسحب أفقيًا لرؤية المعادلة كاملة</span>');
            else if (!wide && hint) hint.remove();
        });
    };
    const whenMath = (tries = 0) => {
        if (window.MathJax && MathJax.startup && MathJax.startup.promise) MathJax.startup.promise.then(() => setTimeout(fit, 300));
        else if (tries < 60) setTimeout(() => whenMath(tries + 1), 250);
    };
    whenMath();
    window.fitWideMath = fit;
    let t;
    window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(fit, 200); });
    document.addEventListener('click', (e) => { if (e.target.closest('.slide-mode-toggle')) setTimeout(fit, 400); });
}
