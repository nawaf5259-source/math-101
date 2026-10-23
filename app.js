/**
 * Mobile web app (app.html): home + progress, unit content, enrichment, quizzes, more.
 * Enrichment data comes from enrichment-app.js; progress is kept per device in localStorage.
 */
(function () {
    const E = window.M101_ENRICH || [];
    const FEEDBACK_URL = 'https://formspree.io/f/mojjvkzz';
    const KEY_E = 'm101-enrich-v1';
    const KEY_LAST = 'm101-last';

    // Unit pages (slides) and unit quizzes on the website
    const UNITS = [
        { num: 1, title: 'المجموعات', desc: 'المفاهيم الأساسية للمجموعات والعمليات عليها' },
        { num: 2, title: 'العمليات الحسابية على الأعداد', desc: 'الكسور والأعداد العشرية وخصائص الأعداد الحقيقية' },
        { num: 3, title: 'كثيرات الحدود', desc: 'العمليات الجبرية والتحليل والكسور الجبرية' },
        { num: 4, title: 'المصفوفات والمحددات', desc: 'العمليات على المصفوفات والمحددات والمقلوب' },
        { num: 5, title: 'المعادلات', desc: 'المعادلات الخطية والتربيعية وأنظمة المعادلات' },
        { num: 6, title: 'الهندسة المستوية والفراغية', desc: 'المحيط والمساحة والحجم' }
    ];

    const view = document.getElementById('view');
    const titleEl = document.querySelector('.topbar-title');
    const backEl = document.querySelector('.topbar-back');
    const offlineEl = document.querySelector('.topbar-offline');

    // ---------- storage ----------
    const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
    const store = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } };
    const done = (prog, k) => Object.keys(prog[k] || {}).length;

    // ---------- helpers ----------
    const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
    const unitById = (id) => E.find(u => u.id === id);
    const topicKey = (u, i) => `${u.id}-${i + 1}`;
    const plural = (n, one, many) => `${n} ${n <= 10 ? one : many}`;
    const unitTotal = (u) => u.topics.reduce((n, t) => n + t.ex.length, 0);
    const unitDone = (prog, u) => u.topics.reduce((n, t, i) => n + done(prog, topicKey(u, i)), 0);
    const typeset = (el, tries = 0) => {
        if (window.MathJax && MathJax.typesetPromise) MathJax.startup.promise.then(() => MathJax.typesetPromise([el])).catch(() => {});
        else if (tries < 100) setTimeout(() => typeset(el, tries + 1), 150);
    };
    const totalE = E.reduce((n, u) => n + unitTotal(u), 0);
    const totalTopics = E.reduce((n, u) => n + u.topics.length, 0);

    // ---------- install (PWA) ----------
    let installEvent = null;
    const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
    const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const canInstall = () => !isStandalone() && (installEvent || isIOS());
    window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installEvent = e; route(); });
    window.addEventListener('appinstalled', () => { installEvent = null; route(); });

    function sheet(html) {
        const back = document.createElement('div');
        back.className = 'sheet-backdrop';
        back.innerHTML = `<div class="sheet" role="dialog">${html}</div>`;
        back.addEventListener('click', (e) => { if (e.target === back || e.target.closest('[data-close]')) back.remove(); });
        document.body.appendChild(back);
        return back;
    }

    function install() {
        if (installEvent) {
            installEvent.prompt();
            installEvent.userChoice.finally(() => { installEvent = null; route(); });
            return;
        }
        sheet(`<h3>📲 ثبّت التطبيق على آيفون</h3>
            <ol>
                <li>افتح هذه الصفحة في متصفح <b>Safari</b>.</li>
                <li>اضغط زر المشاركة <b>⬆️</b> أسفل الشاشة.</li>
                <li>اختر <b>«إضافة إلى الشاشة الرئيسية»</b>، ثم <b>إضافة</b>.</li>
            </ol>
            <button type="button" class="btn btn-main btn-block" data-close>تم</button>`);
    }

    function feedback() {
        const back = sheet(`<h3>📝 أرسل ملاحظاتك</h3>
            <form>
                <textarea name="message" placeholder="اكتب ملاحظتك أو اقتراحك أو الخطأ الذي وجدته..." required></textarea>
                <p class="sheet-status" hidden></p>
                <div class="sheet-actions">
                    <button type="button" class="btn" data-close>إلغاء</button>
                    <button type="submit" class="btn btn-main">إرسال</button>
                </div>
            </form>`);
        const form = back.querySelector('form');
        const status = back.querySelector('.sheet-status');
        const say = (msg, ok) => { status.hidden = false; status.textContent = msg; status.className = 'sheet-status ' + (ok ? 'ok' : 'bad'); };
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('[type=submit]');
            btn.disabled = true;
            try {
                const r = await fetch(FEEDBACK_URL, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
                if (r.ok) { say('شكرًا لك! وصلتنا ملاحظتك.', true); form.reset(); setTimeout(() => back.remove(), 1800); }
                else say('حدث خطأ أثناء الإرسال. حاول مرة أخرى.', false);
            } catch (err) {
                say('لا يوجد اتصال بالإنترنت. حاول لاحقًا.', false);
            } finally { btn.disabled = false; }
        });
        back.querySelector('textarea').focus();
    }

    // ---------- shared pieces ----------
    const bar = (pct) => `<div class="bar"><i style="width:${Math.round(pct)}%"></i></div>`;

    // Self-rated exercises: [question, answer, explanation]
    function exercisesHTML(list) {
        return `<div class="ex-list">${list.map(([q, a, s], j) => `
            <article class="card ex" data-j="${j}">
                <div class="ex-top"><span class="ex-num">${j + 1}</span><div class="q">${q}</div></div>
                <button type="button" class="btn reveal">أظهر الحل</button>
                <div class="sol" hidden>
                    <div class="ans"><b>الإجابة:</b> ${a}</div>
                    ${s ? `<div class="steps-txt">${s}</div>` : ''}
                    <div class="self"><span>هل كانت إجابتك صحيحة؟</span>
                        <button type="button" class="btn" data-v="ok">✓ نعم</button>
                        <button type="button" class="btn" data-v="bad">✗ لا</button>
                    </div>
                </div>
            </article>`).join('')}</div>`;
    }

    function bindExercises(k) {
        const sync = () => {
            const st = load(KEY_E, {})[k] || {};
            view.querySelectorAll('.ex').forEach(card => {
                const v = st[card.dataset.j];
                card.classList.toggle('ok', v === 'ok');
                card.classList.toggle('bad', v === 'bad');
                card.querySelectorAll('.self .btn').forEach(b => {
                    b.classList.toggle('on-ok', v === 'ok' && b.dataset.v === 'ok');
                    b.classList.toggle('on-bad', v === 'bad' && b.dataset.v === 'bad');
                });
                if (v) { card.querySelector('.sol').hidden = false; card.querySelector('.reveal').hidden = true; }
            });
            const vals = Object.values(st), ok = vals.filter(v => v === 'ok').length;
            const score = view.querySelector('.score');
            if (score) score.textContent = vals.length ? `${ok} صحيحة من ${vals.length}` : '';
        };
        view.querySelectorAll('.ex').forEach(card => {
            card.querySelector('.reveal').addEventListener('click', (ev) => {
                card.querySelector('.sol').hidden = false;
                ev.currentTarget.hidden = true;
            });
            card.querySelectorAll('.self .btn').forEach(b => b.addEventListener('click', () => {
                const prog = load(KEY_E, {});
                (prog[k] = prog[k] || {})[card.dataset.j] = b.dataset.v;
                store(KEY_E, prog);
                sync();
            }));
        });
        sync();
    }

    function pager(prev, next) {
        return `<div class="pager">${prev ? `<a class="btn" href="${prev[0]}">→ ${esc(prev[1])}</a>` : ''}${next ? `<a class="btn btn-main" href="${next[0]}">${esc(next[1])} ←</a>` : ''}</div>`;
    }

    // ---------- "continue where you left off" ----------
    function nextTopic() {
        const prog = load(KEY_E, {});
        const order = [];
        E.forEach(u => u.topics.forEach((t, i) => order.push({ u, i, k: topicKey(u, i), t })));
        const left = (o) => done(prog, o.k) < o.t.ex.length;
        const last = load(KEY_LAST, null);
        let start = 0;
        if (last) {
            const at = order.findIndex(o => o.k === last.key);
            if (at >= 0) {
                if (left(order[at])) return { ...order[at], resume: true };
                start = at + 1;
            }
        }
        const rest = order.slice(start).concat(order.slice(0, start));
        return rest.find(left) || null;
    }

    // ---------- views ----------
    function renderHome() {
        const pe = load(KEY_E, {});
        const doneE = E.reduce((n, u) => n + unitDone(pe, u), 0);
        const doneTopics = E.reduce((n, u) => n + u.topics.filter((t, i) => done(pe, topicKey(u, i)) === t.ex.length).length, 0);
        const nx = nextTopic();
        const cont = nx
            ? `<a class="continue" href="#e/${nx.k}">
                    <small>${nx.resume ? 'أكمل من حيث توقفت' : (doneE ? 'الدرس التالي' : 'ابدأ من هنا')} · الوحدة ${nx.u.num} · الدرس ${nx.i + 1}</small>
                    <b>${esc(nx.t.title)}</b>
                    <span class="btn btn-main">✏️ ${nx.resume ? 'أكمل' : 'ابدأ'} التمارين</span></a>`
            : `<div class="continue"><small>أحسنت!</small><b>أنهيت كل التمارين الإثرائية 🎉</b><a class="btn btn-main" href="#quizzes">اختبر نفسك في تمارين الوحدات</a></div>`;

        view.innerHTML = `
            <div class="hello"><h2>مرحبًا 👋</h2><p>تقدّمك في مقرر الرياضيات (رياض 101)</p></div>
            ${cont}
            <div class="overall">
                <div class="card"><b>${doneE}<small class="muted"> / ${totalE}</small></b><span>تمارين إثرائية محلولة</span></div>
                <div class="card"><b>${doneTopics}<small class="muted"> / ${totalTopics}</small></b><span>دروس مكتملة</span></div>
            </div>
            ${canInstall() ? `<div class="card install-card"><span style="font-size:1.6rem">📲</span><div><b>ثبّت التطبيق على جوالك</b><small>افتحه من الشاشة الرئيسية مثل أي تطبيق</small></div><button type="button" class="btn btn-main" data-act="install">تثبيت</button></div>` : ''}
            <h3 class="section-title">الوحدات</h3>
            <div class="unit-list">${E.map(u => {
                const t = unitTotal(u), d = unitDone(pe, u);
                return `<a class="card unit-row" href="#enrich/${u.id}">
                    <span class="unit-num">${u.num}</span>
                    <div><b>${esc(u.title)}</b>${bar(d / t * 100)}</div>
                    <em>${Math.round(d / t * 100)}%</em></a>`;
            }).join('')}</div>`;
    }

    // Unit picker: one card per unit with its enrichment progress
    function renderEnrichList() {
        const pe = load(KEY_E, {});
        view.innerHTML = `
            <p class="hint">اختر الوحدة، ثم الدرس، وتدرّب على تمارين محلولة خطوة بخطوة.</p>
            <div class="unit-list">${E.map(u => {
                const t = unitTotal(u), d = unitDone(pe, u);
                return `<a class="card unit-row" href="#enrich/${u.id}">
                    <span class="unit-num">${u.num}</span>
                    <div><b>${esc(u.title)}</b><small class="muted">${plural(u.topics.length, 'دروس', 'درسًا')} · ${t} تمرينًا</small>${bar(d / t * 100)}</div>
                    <em>${Math.round(d / t * 100)}%</em></a>`;
            }).join('')}</div>`;
    }

    function renderEnrichUnit(u) {
        const pe = load(KEY_E, {});
        const t = unitTotal(u), d = unitDone(pe, u);
        view.innerHTML = `
            <div class="unit-head"><h2>الوحدة ${u.num}: ${esc(u.title)}</h2>${bar(d / t * 100)}<p>${plural(u.topics.length, 'دروس', 'درسًا')} · ${d} من ${t} تمرينًا</p></div>
            <div class="lesson-list">${u.topics.map((x, i) => {
                const k = topicKey(u, i), n = done(pe, k), all = x.ex.length;
                return `<a class="card lesson-row${n === all ? ' done' : ''}" href="#e/${k}">
                    <span class="lesson-num">${n === all ? '✓' : i + 1}</span><b>${esc(x.title)}</b><span class="count">${n}/${all}</span></a>`;
            }).join('')}</div>`;
    }

    function renderTopic(u, i) {
        const x = u.topics[i], k = topicKey(u, i);
        store(KEY_LAST, { key: k });
        const prev = i > 0 ? [`#e/${topicKey(u, i - 1)}`, u.topics[i - 1].title] : null;
        const next = i < u.topics.length - 1 ? [`#e/${topicKey(u, i + 1)}`, u.topics[i + 1].title] : [`#enrich/${u.id}`, 'إنهاء الوحدة ✓'];
        view.innerHTML = `
            <div class="lesson-head"><small>الوحدة ${u.num} · الدرس ${i + 1} من ${u.topics.length}</small><h2>${esc(x.title)}</h2></div>
            ${x.intro ? `<div class="card intro">${x.intro}</div>` : ''}
            <a class="card link-row alt" href="u${u.num}.html">📘 راجع شرح الوحدة ${u.num} أولًا</a>
            <div class="ex-head"><h3>${plural(x.ex.length, 'تمارين', 'تمرينًا')} محلولة</h3><span class="score"></span></div>
            <p class="hint">حلّ التمرين في دفترك أولًا، ثم اضغط «أظهر الحل» وقيّم إجابتك.</p>
            ${exercisesHTML(x.ex)}
            ${pager(prev, next)}`;
        bindExercises(k);
    }

    function renderContent() {
        view.innerHTML = `
            <p class="hint">شرح كل وحدة في بطاقات: اسحب يمينًا ويسارًا للتنقل بين الشرائح.</p>
            <div class="unit-list">${UNITS.map(u => `
                <a class="card unit-row" href="u${u.num}.html">
                    <span class="unit-num">${u.num}</span>
                    <div><b>${esc(u.title)}</b><small class="muted">${esc(u.desc)}</small></div>
                    <em>‹</em></a>`).join('')}</div>`;
    }

    function renderQuizzes() {
        view.innerHTML = `
            <p class="hint">بعد إنهاء الوحدة، اختبر فهمك في تمارين الوحدة.</p>
            <div class="unit-list">${UNITS.map(u => `
                <a class="card unit-row" href="ex${u.num}.html">
                    <span class="unit-num">${u.num}</span>
                    <div><b>${esc(u.title)}</b><small class="muted">تمارين الوحدة ${u.num}</small></div>
                    <em>‹</em></a>`).join('')}</div>`;
    }

    function renderMore() {
        const dark = document.documentElement.dataset.theme === 'dark';
        const item = (href, icon, title, sub) => `<a class="card menu-item" href="${href}"><span>${icon}</span><div><b>${title}</b><small>${sub}</small></div></a>`;
        view.innerHTML = `
            <div class="menu">
                ${item('plan.html', '🗓️', 'الخطة التدريبية', 'توزيع الموضوعات والتقييم على الأسابيع')}
                ${item('book.html', '📖', 'كتاب المقرر', 'اقرأ الكتاب أو حمّله')}
                ${item('presentations.html', '📊', 'العروض التقديمية', 'عرض لكل وحدة')}
                ${item('resources.html', '📂', 'أوراق العمل والمصادر', 'أوراق العمل والملفات للتحميل')}
                <button type="button" class="card menu-item" data-act="feedback"><span>📝</span><div><b>أرسل ملاحظاتك</b><small>أبلغ عن خطأ أو شاركنا اقتراحك</small></div></button>
            </div>
            <h3 class="section-title">الإعدادات</h3>
            <div class="menu">
                <button type="button" class="card menu-item no-arrow" data-act="theme"><span>🌙</span><div><b>الوضع الليلي</b><small>ألوان داكنة مريحة للعين</small></div><span class="toggle${dark ? ' on' : ''}" aria-hidden="true"></span></button>
                ${canInstall() ? `<button type="button" class="card menu-item" data-act="install"><span>📲</span><div><b>تثبيت التطبيق</b><small>أضفه إلى الشاشة الرئيسية</small></div></button>` : ''}
                <button type="button" class="card menu-item" data-act="site"><span>💻</span><div><b>عرض الموقع الكامل</b><small>نسخة الحاسب من الموقع</small></div></button>
            </div>
            <p class="about">مقرر الرياضيات (رياض 101)<br>تطوير: أ. نواف العنزي</p>`;
    }

    // ---------- router ----------
    const TITLES = { home: 'رياض 101', content: 'المحتوى', enrich: 'التمارين الإثرائية', quizzes: 'تمارين الوحدات', more: 'المزيد' };

    function route() {
        const h = decodeURIComponent(location.hash.slice(1)) || 'home';
        const cut = h.indexOf('/');
        const sec = cut < 0 ? h : h.slice(0, cut), arg = cut < 0 ? '' : h.slice(cut + 1);
        let tab = sec, title = TITLES[sec], back = null, m;

        // An enrichment page of the website (by file name) opens as its topic here
        if (sec === 'page') {
            for (const u of E) {
                const i = u.topics.findIndex(t => t.page === arg);
                if (i >= 0) { location.replace(`#e/${topicKey(u, i)}`); return; }
            }
            location.replace('#enrich');
            return;
        }

        if (sec === 'enrich' && unitById(arg)) {
            const u = unitById(arg);
            renderEnrichUnit(u); back = '#enrich'; title = `الإثرائية · الوحدة ${u.num}`;
        } else if (sec === 'enrich') renderEnrichList();
        else if (sec === 'quizzes') renderQuizzes();
        else if (sec === 'content') renderContent();
        else if (sec === 'more') renderMore();
        else if (sec === 'e' && (m = /^(u\d)-(\d+)$/.exec(arg)) && unitById(m[1]) && unitById(m[1]).topics[m[2] - 1]) {
            const u = unitById(m[1]);
            tab = 'enrich'; back = `#enrich/${u.id}`; title = `الإثرائية · الوحدة ${u.num} · الدرس ${m[2]}`;
            renderTopic(u, m[2] - 1);
        } else { tab = 'home'; title = TITLES.home; renderHome(); }

        titleEl.textContent = title;
        backEl.hidden = !back;
        if (back) backEl.href = back;
        document.querySelectorAll('.tabbar a').forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
        window.scrollTo(0, 0);
        typeset(view);
    }

    // ---------- events ----------
    view.addEventListener('click', (e) => {
        const act = e.target.closest('[data-act]');
        if (!act) return;
        if (act.dataset.act === 'install') install();
        else if (act.dataset.act === 'feedback') feedback();
        else if (act.dataset.act === 'theme') {
            const dark = document.documentElement.dataset.theme !== 'dark';
            if (dark) document.documentElement.dataset.theme = 'dark'; else delete document.documentElement.dataset.theme;
            try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (err) { }
            act.querySelector('.toggle').classList.toggle('on', dark);
        } else if (act.dataset.act === 'site') {
            try { localStorage.setItem('m101-view', 'site'); } catch (err) { }
            location.href = 'index.html';
        }
    });

    const setOnline = () => { offlineEl.hidden = navigator.onLine; };
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOnline);
    setOnline();

    window.addEventListener('hashchange', route);
    route();

    // Offline support for the whole site (needs http/https)
    if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }
})();
