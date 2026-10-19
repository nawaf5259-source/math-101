/**
 * Main JavaScript for Math 101 Website
 * Contains shared logic for Navigation, Dark Mode, Feedback, and Utils
 */

document.addEventListener("DOMContentLoaded", () => {
    if (maybeRedirectToApp()) return;

    initHeader();
    initMobileChrome();
    initFooter();

    initNavigation();
    initDarkModeAndScroll();
    initFeedbackSystem();
    initLastUpdated();

    initTabs();
    initQuiz();
    initShowSolution();
    initTOC();
    initUnitNavigation();

    initMobileDeck();
    initPresentMode();
    initMathFit();
    rememberLastVisited();
    registerServiceWorker();
});


// Course units (shared by navigation, the mobile deck and the app shell)
const M101_UNITS = [
    { file: 'u1.html', title: 'المجموعات', pdf: 'ملفات/عروض تقديمية/المجموعات.pdf', ex: 'ex1.html', ws: 'ملفات/أوراق عمل/ورقة عمل المجموعات.pdf' },
    { file: 'u2.html', title: 'العمليات الحسابية على الأعداد', pdf: 'ملفات/عروض تقديمية/العمليات الحسابية على الأعداد النسبية والحقيقية.pdf', ex: 'ex2.html', ws: 'ملفات/أوراق عمل/العمليات الحسابية.pdf' },
    { file: 'u3.html', title: 'كثيرات الحدود', pdf: 'ملفات/عروض تقديمية/كثيرات الحدود.pdf', ex: 'ex3.html', ws: 'ملفات/أوراق عمل/كثيرات الحدود.pdf' },
    { file: 'u4.html', title: 'المصفوفات والمحددات', pdf: 'ملفات/عروض تقديمية/المصفوفات.pdf', ex: 'ex4.html', ws: 'ملفات/أوراق عمل/المصفوفات.pdf' },
    { file: 'u5.html', title: 'المعادلات', pdf: 'ملفات/عروض تقديمية/المعادلات.pdf', ex: 'ex5.html', ws: 'ملفات/أوراق عمل/المعادلات.pdf' },
    { file: 'u6.html', title: 'الهندسة المستوية والفراغية', pdf: 'ملفات/عروض تقديمية/الهندسة المستوية والفراغية.pdf', ex: 'ex6.html', ws: 'ملفات/أوراق عمل/الاشكال.pdf' }
];

const M101_MOBILE = window.matchMedia('(max-width: 768px)');

// Path helpers
function m101Path() {
    try { return decodeURIComponent(window.location.pathname); } catch (e) { return window.location.pathname; }
}
function m101IsSubdir() {
    return m101Path().includes('تمارين اثرائية');
}
function m101Prefix() {
    return m101IsSubdir() ? '../' : '';
}
function m101IsRoot() {
    const path = m101Path();
    return path.endsWith('index.html') || path.endsWith('/') || path === '';
}
function m101UnitIndex() {
    const path = m101Path();
    return M101_UNITS.findIndex(u => path.endsWith('/' + u.file));
}
function m101PageTitle() {
    return document.body.dataset.heroTitle || document.title.split('|')[0].split(' - ')[0].trim();
}

// 0. Dynamic Header & Footer
function initHeader() {
    // Prevent duplicate header
    if (document.querySelector('.navbar')) return;

    // Check if we are in a sub-directory
    const path = window.location.pathname;
    const isSubdir = path.includes('تمارين اثرائية') || path.includes('%D8%AA%D9%85%D8%A7%D8%B1%D9%8A%D9%86%20%D8%A7%D8%AB%D8%B1%D8%A7%D8%A6%D9%8A%D8%A9');
    const isRoot = path.endsWith('index.html') || path.endsWith('/') || path === '';

    const prefix = isSubdir ? '../' : '';

    // Get Title and Subtitle from data attributes or defaults
    let heroTitle = document.body.dataset.heroTitle || document.title.split('|')[0].split('-')[0].trim();
    let heroSubtitle = document.body.dataset.heroSubtitle || "";

    // Home page specific defaults
    if (isRoot) {
        heroTitle = "الرياضيات (رياض 101)";
        heroSubtitle = "بوابتك الرقمية الشاملة لمقرر الرياضيات - الكلية التقنية";
    }

    const headerHtml = `
    <nav class="navbar">
        <div class="container nav-content">
            <a href="${prefix}index.html" class="nav-logo">
                <img src="${prefix}logo.svg" alt="Math 101 Logo">
            </a>
            <button class="hamburger" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="${prefix}index.html">الرئيسية</a></li>
                <li><a href="${prefix}index.html#book-section">الكتاب</a></li>
                <li><a href="${prefix}qbanks.html">بنوك الأسئلة</a></li>
                <li><a href="${prefix}ex+.html">تمارين إثرائية</a></li>
            </ul>
        </div>
    </nav>
    <header class="hero">
        <div class="container">
            <h1>${heroTitle}</h1>
            ${heroSubtitle ? `<p>${heroSubtitle}</p>` : ''}
        </div>
    </header>
    `;

    // Insert after aurora-blobs if it exists, otherwise prepend to body
    const aurora = document.querySelector('.aurora-blobs');
    if (aurora) {
        aurora.insertAdjacentHTML('afterend', headerHtml);
    } else {
        document.body.insertAdjacentHTML('afterbegin', headerHtml);
    }
}

function initFooter() {
    const footerHtml = `
    <footer class="footer">
        <div class="container">
            <p>&copy; 2026 الصفحة الالكترونية لمقرر الرياضيات (رياض 101) - تطوير بواسطة نواف العنزي </p>
            <p style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.7;">آخر تحديث: <span id="last-updated-date"></span>
            </p>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHtml);
}

// 1. Mobile Navigation
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// 10. Unit Navigation (Next/Prev/PDF)
// 10. Unit Navigation (Next/Prev/PDF)
function initUnitNavigation() {
    const units = M101_UNITS;

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

// 9. Table of Contents (Side Menu)
function initTOC() {
    const main = document.querySelector('main');
    // Only run if we have slides/sections and it's not the homepage (simple check)
    // We check if there are multiple h2 headings 
    const Headings = main ? main.querySelectorAll('h2') : [];

    if (!main || Headings.length < 2) return;

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
            <h3>شريط التنقل</h3>
            <button class="toc-toggle" aria-label="Toggle Navigation">➖</button>
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
    const tocList = sidebar.querySelector('.toc-list');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            toggleBtn.innerHTML = '➕';
            toggleBtn.setAttribute('aria-label', 'Expand Navigation');
        } else {
            toggleBtn.innerHTML = '➖';
            toggleBtn.setAttribute('aria-label', 'Collapse Navigation');
        }
    });

    // 2. Build Links
    // Removed duplicate declaration

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
    floatContainer.className = 'float-stack';

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
        if (window.scrollY > 300) scrollTopBtn.style.display = 'block';
        else scrollTopBtn.style.display = 'none';
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

// 3. Feedback System
function initFeedbackSystem() {
    // Button
    const btn = document.createElement('button');
    btn.id = 'feedback-btn';
    btn.innerHTML = '<span>📝</span> ملاحظات';
    document.body.appendChild(btn);

    // Modal
    const overlay = document.createElement('div');
    overlay.id = 'feedback-modal-overlay';
    overlay.innerHTML = `
        <div id="feedback-modal">
            <button class="btn-close">&times;</button>
            <h3>أرسل ملاحظاتك</h3>
            <form id="feedback-form" action="https://formspree.io/f/mojjvkzz" method="POST">
                <textarea name="message" placeholder="اكتب ملاحظاتك أو اقتراحاتك هنا..." required></textarea>
                <button type="submit" class="btn-send">إرسال</button>
            </form>
            <div id="feedback-status"></div>
        </div>
    `;
    document.body.appendChild(overlay);

    // Logic
    const closeBtn = overlay.querySelector('.btn-close');
    const form = overlay.querySelector('#feedback-form');
    const statusMsg = overlay.querySelector('#feedback-status');

    // Open
    btn.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    // Close
    const close = () => {
        overlay.style.display = 'none';
        statusMsg.style.display = 'none';
        statusMsg.textContent = '';
        statusMsg.style.color = 'inherit';
    };
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    // Submit AJAX
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const submitBtn = form.querySelector('.btn-send');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = 'جاري الإرسال...';

        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset();
                statusMsg.textContent = "شكراً لك! تم استلام ملاحظاتك.";
                statusMsg.style.color = "#22C55E"; // Green
                statusMsg.style.display = "block";
                setTimeout(close, 2000);
            } else {
                statusMsg.textContent = "حدث خطأ أثناء الإرسال. حاول مرة أخرى.";
                statusMsg.style.color = "#EF4444"; // Red
                statusMsg.style.display = "block";
            }
        } catch (error) {
            statusMsg.textContent = "حدث خطأ في الاتصال.";
            statusMsg.style.color = "#EF4444";
            statusMsg.style.display = "block";
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// 4. Last Updated Date
function initLastUpdated() {
    const el = document.getElementById('last-updated-date');
    if (el) {
        const modified = new Date(document.lastModified);
        const date = isNaN(modified.getTime()) ? new Date() : modified;
        el.innerText = date.toLocaleDateString('ar-SA');
    }
}

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

// 9. Show Solution Button for Enrichment Exercises
function initShowSolution() {
    // Find all example cards in enrichment pages
    const cards = document.querySelectorAll('.example-card');
    cards.forEach(card => {
        // Collect question components
        const badge = card.querySelector('.ex-badge');
        const problem = card.querySelector('.ex-problem');
        const title = card.querySelector('.ex-title');

        const questionElements = [badge, problem, title].filter(el => el !== null);

        // Find all other elements that should be part of the solution
        const children = Array.from(card.children);
        const solutionElements = children.filter(child => !questionElements.includes(child) && child.tagName !== 'BUTTON');

        if (solutionElements.length === 0) return;

        // Create solution wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'solution-wrapper hidden';

        // Move solution elements into the wrapper
        solutionElements.forEach(el => wrapper.appendChild(el));

        // Create toggle button
        const btn = document.createElement('button');
        btn.className = 'show-solution-btn';
        btn.textContent = 'إظهار الحل';
        btn.addEventListener('click', () => {
            const isHidden = wrapper.classList.toggle('hidden');
            btn.textContent = isHidden ? 'إظهار الحل' : 'إخفاء الحل';

            // Re-render math if shown (to handle potential MathJax issues in hidden containers)
            if (!isHidden) {
                if (window.MathJax && MathJax.typesetPromise) {
                    MathJax.typesetPromise([wrapper]).then(() => fitMath(wrapper));
                } else {
                    fitMath(wrapper);
                }
            }
        });

        // Add button and wrapper to card (maintaining correct order)
        card.appendChild(btn);
        card.appendChild(wrapper);
    });
}

// ==========================================================================
// 11. Mobile app shell (phone top bar + bottom tab bar) and PWA helpers
// ==========================================================================

// On phones, the home page opens the app shell (app.html) instead.
// "عرض الموقع الكامل" adds ?full=1, which keeps the full site for the session.
function maybeRedirectToApp() {
    if (document.body.classList.contains('app-shell')) return false;
    if (!m101IsRoot()) return false;
    const params = new URLSearchParams(window.location.search);
    if (params.has('full')) {
        try { sessionStorage.setItem('m101-full-site', '1'); } catch (e) { /* ignore */ }
        return false;
    }
    try { if (sessionStorage.getItem('m101-full-site')) return false; } catch (e) { /* ignore */ }
    if (!M101_MOBILE.matches) return false;
    if (!window.matchMedia('(pointer: coarse)').matches) return false;
    window.location.replace('app.html');
    return true;
}

function initMobileChrome() {
    if (document.body.classList.contains('app-shell')) return;
    if (document.querySelector('.m-topbar')) return;

    const prefix = m101Prefix();
    const path = m101Path();
    const title = m101IsRoot() ? 'رياض 101' : m101PageTitle();

    // Which tab is active on this page
    let active = 'home';
    if (m101UnitIndex() !== -1) active = 'units';
    else if (/\/ex[1-6]\.html$/.test(path) || path.endsWith('qbanks.html')) active = 'exercises';
    else if (path.endsWith('ex+.html') || m101IsSubdir()) active = 'enrich';
    else if (path.endsWith('resources.html')) active = 'more';

    const tabs = [
        { id: 'home', icon: '🏠', label: 'الرئيسية', href: prefix + 'app.html#home' },
        { id: 'units', icon: '📚', label: 'الوحدات', href: prefix + 'app.html#units' },
        { id: 'exercises', icon: '📝', label: 'التمارين', href: prefix + 'app.html#exercises' },
        { id: 'enrich', icon: '✨', label: 'الإثرائية', href: prefix + 'ex+.html' },
        { id: 'more', icon: '⋯', label: 'المزيد', href: prefix + 'app.html#more' }
    ];

    const topbar = document.createElement('div');
    topbar.className = 'm-topbar';
    topbar.innerHTML = `
        <button class="m-icon-btn m-back" aria-label="رجوع" title="رجوع">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>
        </button>
        <span class="m-title">${title}</span>
        <a class="m-icon-btn" href="${prefix}app.html" aria-label="الرئيسية" title="الرئيسية">
            <img class="m-logo" src="${prefix}icons/icon-192.png" alt="">
        </a>
    `;

    const tabbar = document.createElement('nav');
    tabbar.className = 'm-tabbar';
    tabbar.setAttribute('aria-label', 'التنقل');
    tabbar.innerHTML = tabs.map(t => `
        <a href="${t.href}" data-tab="${t.id}" class="${t.id === active ? 'active' : ''}">
            <span class="m-tab-icon">${t.icon}</span>
            <span>${t.label}</span>
        </a>`).join('');

    document.body.insertAdjacentElement('afterbegin', topbar);
    document.body.appendChild(tabbar);
    document.body.classList.add('has-mobile-chrome');

    // Back: previous page when it is ours, otherwise a sensible parent page
    topbar.querySelector('.m-back').addEventListener('click', () => {
        let sameSite = false;
        try { sameSite = document.referrer && new URL(document.referrer).origin === window.location.origin; } catch (e) { /* ignore */ }
        if (sameSite && window.history.length > 1) {
            window.history.back();
            return;
        }
        let fallback = prefix + 'app.html';
        if (m101IsSubdir()) fallback = prefix + 'ex+.html';
        else if (active === 'units') fallback = 'app.html#units';
        else if (active === 'exercises') fallback = 'app.html#exercises';
        window.location.href = fallback;
    });
}

// Remember the last page the learner opened, for "أكمل من حيث توقفت" in the app
function rememberLastVisited(extra) {
    if (document.body.classList.contains('app-shell') || m101IsRoot()) return;
    try {
        const data = Object.assign({
            url: window.location.href,
            title: m101PageTitle(),
            time: Date.now()
        }, extra || {});
        localStorage.setItem('m101-last-visited', JSON.stringify(data));
    } catch (e) { /* storage unavailable */ }
}

function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    if (!/^https?:$/.test(window.location.protocol)) return;
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(m101Prefix() + 'sw.js').catch(() => { /* offline support is optional */ });
    });
}

// ==========================================================================
// 12. Unit slides as swipeable cards on phones
// ==========================================================================
function initMobileDeck() {
    if (!M101_MOBILE.matches) return;
    if (m101UnitIndex() === -1) return;
    const main = document.querySelector('main');
    if (!main) return;
    const slides = Array.from(main.querySelectorAll('.slide'));
    if (slides.length < 2) return;

    const parent = slides[0].parentElement;
    let mode = 'cards';
    try { mode = localStorage.getItem('m101-deck-mode') || 'cards'; } catch (e) { /* ignore */ }

    // Controls
    const bar = document.createElement('div');
    bar.className = 'deck-bar';
    bar.innerHTML = `
        <div class="deck-row">
            <button class="deck-prev" type="button">➡️ السابق</button>
            <span class="deck-counter">1 / ${slides.length}</span>
            <button class="deck-next primary" type="button">التالي ⬅️</button>
        </div>
        <div class="deck-dots">${slides.map(() => '<i></i>').join('')}</div>
        <button class="deck-toggle" type="button"></button>
    `;
    const prevBtn = bar.querySelector('.deck-prev');
    const nextBtn = bar.querySelector('.deck-next');
    const counter = bar.querySelector('.deck-counter');
    const dots = Array.from(bar.querySelectorAll('.deck-dots i'));
    const toggleBtn = bar.querySelector('.deck-toggle');

    const deck = document.createElement('div');
    deck.className = 'slide-deck';

    let current = 0;
    let observer = null;

    const setCurrent = (i, fromScroll) => {
        current = Math.max(0, Math.min(slides.length - 1, i));
        counter.textContent = `${current + 1} / ${slides.length}`;
        dots.forEach((d, k) => d.classList.toggle('on', k === current));
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === slides.length - 1;
        if (fromScroll) {
            try { history.replaceState(null, '', `#s${current + 1}`); } catch (e) { /* ignore */ }
            rememberLastVisited({ slide: current + 1 });
        }
    };

    const goTo = (i, behavior) => {
        const target = slides[Math.max(0, Math.min(slides.length - 1, i))];
        if (!target) return;
        target.scrollIntoView({ behavior: behavior || 'smooth', inline: 'start', block: 'nearest' });
        target.scrollTop = 0;
        if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: behavior || 'smooth' });
        setCurrent(i, true);
    };

    const slideIndexForHash = (hash) => {
        if (!hash) return -1;
        const m = hash.match(/^#s(\d+)$/);
        if (m) return parseInt(m[1], 10) - 1;
        let el = null;
        try { el = document.getElementById(decodeURIComponent(hash.slice(1))); } catch (e) { /* ignore */ }
        if (!el) return -1;
        const slide = el.closest('.slide');
        return slide ? slides.indexOf(slide) : -1;
    };

    const sizeCards = () => {
        if (!deck.parentElement) return;
        const top = deck.getBoundingClientRect().top + window.scrollY;
        const tabbar = document.querySelector('.m-tabbar');
        const bottom = tabbar ? tabbar.getBoundingClientRect().height : 0;
        const h = Math.max(260, window.innerHeight - top - bottom - 12);
        deck.style.setProperty('--card-h', `${Math.round(h)}px`);
    };

    const enterCards = () => {
        parent.insertBefore(bar, slides[0]);
        bar.insertAdjacentElement('afterend', deck);
        slides.forEach(s => deck.appendChild(s));
        document.body.classList.add('deck-cards');
        bar.classList.remove('all-mode');
        toggleBtn.textContent = '📄 عرض كل المحتوى';
        sizeCards();
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    setCurrent(slides.indexOf(entry.target), true);
                }
            });
        }, { root: deck, threshold: [0.5] });
        slides.forEach(s => observer.observe(s));
        const start = slideIndexForHash(window.location.hash);
        requestAnimationFrame(() => goTo(start >= 0 ? start : 0, 'auto'));
    };

    const enterAll = () => {
        if (observer) { observer.disconnect(); observer = null; }
        if (deck.parentElement) {
            slides.forEach(s => parent.insertBefore(s, deck));
            deck.remove();
        }
        parent.insertBefore(bar, slides[0]);
        document.body.classList.remove('deck-cards');
        bar.classList.add('all-mode');
        toggleBtn.textContent = '🗂️ عرض كبطاقات';
        const start = slideIndexForHash(window.location.hash);
        if (start >= 0) requestAnimationFrame(() => slides[start].scrollIntoView({ block: 'start' }));
    };

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));
    toggleBtn.addEventListener('click', () => {
        mode = mode === 'cards' ? 'all' : 'cards';
        try { localStorage.setItem('m101-deck-mode', mode); } catch (e) { /* ignore */ }
        if (mode === 'cards') enterCards(); else enterAll();
        setCurrent(current, false);
    });

    window.addEventListener('hashchange', () => {
        const i = slideIndexForHash(window.location.hash);
        if (i >= 0 && mode === 'cards') goTo(i);
    });
    window.addEventListener('resize', () => { if (mode === 'cards') sizeCards(); });
    window.addEventListener('load', () => { if (mode === 'cards') sizeCards(); });

    if (mode === 'cards') enterCards(); else enterAll();
    setCurrent(current, false);
}

// ==========================================================================
// 13. Desktop presentation mode (one slide at a time, arrows/space to move)
// ==========================================================================
function initPresentMode() {
    if (M101_MOBILE.matches) return;
    if (m101UnitIndex() === -1) return;
    const main = document.querySelector('main');
    if (!main) return;
    const slides = Array.from(main.querySelectorAll('.slide'));
    if (slides.length < 2) return;

    const stack = document.querySelector('.float-stack');
    if (!stack) return;

    const btn = document.createElement('button');
    btn.className = 'float-btn present-btn';
    btn.innerHTML = '🎞️';
    btn.title = 'وضع العرض التقديمي';
    stack.insertBefore(btn, stack.firstChild);

    const controls = document.createElement('div');
    controls.className = 'present-controls';
    controls.innerHTML = `
        <button class="present-prev" type="button">➡️ السابق</button>
        <span class="present-counter"></span>
        <button class="present-next" type="button">التالي ⬅️</button>
        <button class="present-exit" type="button" title="خروج (Esc)">✕ خروج</button>
        <span class="present-hint">الأسهم أو المسافة للتنقل</span>
    `;
    document.body.appendChild(controls);
    const prevBtn = controls.querySelector('.present-prev');
    const nextBtn = controls.querySelector('.present-next');
    const counter = controls.querySelector('.present-counter');

    let active = false;
    let current = 0;

    const show = (i) => {
        current = Math.max(0, Math.min(slides.length - 1, i));
        slides.forEach((s, k) => s.classList.toggle('is-active', k === current));
        counter.textContent = `${current + 1} / ${slides.length}`;
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === slides.length - 1;
        const heading = slides[current].querySelector('h1, h2, h3');
        document.querySelectorAll('.toc-link').forEach(l => {
            l.classList.toggle('active', !!heading && l.getAttribute('href') === `#${heading.id}`);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fitMath(slides[current]);
    };

    const enter = () => {
        // Start from the slide currently in view (measure before hiding the rest)
        const mid = window.innerHeight / 2;
        let start = 0;
        slides.forEach((s, k) => {
            const r = s.getBoundingClientRect();
            if (r.top <= mid && r.bottom >= 0) start = k;
        });
        active = true;
        document.body.classList.add('present-mode');
        btn.innerHTML = '📄';
        btn.title = 'الخروج من وضع العرض';
        show(start);
    };

    const exit = () => {
        active = false;
        document.body.classList.remove('present-mode');
        slides.forEach(s => s.classList.remove('is-active'));
        btn.innerHTML = '🎞️';
        btn.title = 'وضع العرض التقديمي';
        slides[current].scrollIntoView({ block: 'start' });
    };

    btn.addEventListener('click', () => (active ? exit() : enter()));
    controls.querySelector('.present-exit').addEventListener('click', exit);
    prevBtn.addEventListener('click', () => show(current - 1));
    nextBtn.addEventListener('click', () => show(current + 1));

    document.addEventListener('keydown', (e) => {
        if (!active) return;
        const tag = (e.target.tagName || '').toLowerCase();
        if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
        // RTL: the left arrow moves forward
        if (e.key === 'ArrowLeft' || e.key === ' ' || e.key === 'PageDown' || e.key === 'Enter') {
            e.preventDefault();
            show(current + 1);
        } else if (e.key === 'ArrowRight' || e.key === 'PageUp' || e.key === 'Backspace') {
            e.preventDefault();
            show(current - 1);
        } else if (e.key === 'Home') {
            e.preventDefault();
            show(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            show(slides.length - 1);
        } else if (e.key === 'Escape') {
            exit();
        }
    });

    // Sidebar links jump to the slide that holds the heading
    document.addEventListener('click', (e) => {
        if (!active) return;
        const link = e.target.closest('.toc-link');
        if (!link) return;
        let el = null;
        try { el = document.getElementById(decodeURIComponent(link.getAttribute('href').slice(1))); } catch (err) { /* ignore */ }
        const slide = el && el.closest('.slide');
        if (slide) {
            e.preventDefault();
            e.stopImmediatePropagation();
            show(slides.indexOf(slide));
        }
    }, true);
}

// ==========================================================================
// 14. Shrink equations that are wider than the screen
// ==========================================================================
function fitMath(root) {
    const scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll('mjx-container').forEach(c => {
        c.style.fontSize = '';
        const parent = c.parentElement;
        if (!parent) return;
        const avail = parent.clientWidth;
        if (!avail) return; // hidden element
        const width = c.getBoundingClientRect().width;
        if (width > avail + 1) {
            const k = Math.max(0.55, (avail / width) * 0.97);
            c.style.fontSize = `${Math.floor(k * 100)}%`;
        }
    });
}

function initMathFit() {
    window.m101FitMath = fitMath;
    let done = false;
    const run = () => { done = true; fitMath(document); };
    const hook = () => {
        if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
            window.MathJax.startup.promise.then(run, run);
            return true;
        }
        return false;
    };
    if (!hook()) {
        let tries = 0;
        const timer = setInterval(() => {
            if (hook() || ++tries > 60) clearInterval(timer);
        }, 250);
    }
    let resizeTimer = null;
    window.addEventListener('resize', () => {
        if (!done) return;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => fitMath(document), 200);
    });
}
