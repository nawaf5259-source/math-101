/**
 * Videos page: "watch, then apply".
 * Every explainer video gets 3 application exercises (question → hidden worked solution → self-check).
 * Progress is kept per viewer in localStorage.
 * A unit without "lessons" shows a "coming soon" message.
 */
(function () {
    const L = String.raw; // LaTeX without doubled backslashes
    // Set-builder with Arabic conditions: Arabic text inside TeX loses its place in the line, so it sits between math pieces
    const S = (before, ar, after) => `<bdi dir="ltr">\\(${before}\\)<bdi dir="rtl" style="white-space:nowrap">${ar}</bdi>\\(${after}\\)</bdi>`;

    const UNITS = [
        {
            id: 'u1', num: 1, title: 'المجموعات', intro: { id: 'BO7gbNa1lgg', title: 'مقدمة الوحدة وأهدافها' },
            lessons: [
                {
                    video: 'jhFzjM54N5k', title: 'مفهوم المجموعة وطرق كتابتها',
                    ex: [
                        { q: L`هل «الطلاب الأذكياء في الفصل» تمثل مجموعة رياضية؟`, a: L`لا`, s: L`صفة «الذكاء» نسبية ويختلف الناس في تحديدها، فالعناصر غير محددة بدقة.` },
                        { q: L`اكتب بطريقة السرد: \(A = \{x : x \in N,\ x < 5\}\)`, a: L`\(A = \{1, 2, 3, 4\}\)`, s: L`الأعداد الطبيعية تبدأ من \(1\)، والأعداد الأقل من \(5\) منها هي \(1, 2, 3, 4\).` },
                        { q: L`اكتب المجموعة \(B = \{6, 8, 10, 12\}\) بطريقة القاعدة`, a: S(L`B = \{x : x \in N,\ `, L`\(x\) عدد زوجي`, L`,\ 6 \le x \le 12\}`), s: L`لتسلسل العناصر نمط ظاهر، فنعبّر عنها بشروط رياضية: أعداد طبيعية زوجية، أصغرها \(6\) وأكبرها \(12\).` }
                    ]
                },
                {
                    video: 'eYnrEKmNrgo', title: 'الانتماء والمجموعات الجزئية والتساوي',
                    ex: [
                        { q: L`إذا كانت \(A = \{1, 2, 3\}\)، فضع الرمز المناسب \(\in\) أو \(\notin\): \(\;2 \;\square\; A\) و \(\;5 \;\square\; A\)`, a: L`\(2 \in A\) و \(5 \notin A\)`, s: L`العدد \(2\) من عناصر \(A\)، أما \(5\) فليس منها.` },
                        { q: L`هل \(\{1, 3\} \subseteq \{1, 2, 3, 4\}\)؟`, a: L`نعم`, s: L`كل عنصر في المجموعة الأولى (\(1\) و \(3\)) موجود في المجموعة الثانية.` },
                        { q: L`هل \(\{1, 2, 3\} = \{3, 1, 2, 2\}\)؟`, a: L`نعم`, s: L`للمجموعتين العناصر نفسها: ترتيب العناصر لا يهم، وتكرار العنصر لا يغيّر المجموعة.` }
                    ]
                },
                {
                    video: '5jnKXq8Z35s', title: 'أنواع المجموعات',
                    ex: [
                        { q: L`ما نوع المجموعة \(\{x : x \in N,\ x < 1\}\)؟`, a: L`مجموعة خالية \(\phi\)`, s: L`أصغر عدد طبيعي هو \(1\)، فلا يوجد عدد طبيعي أقل منه.` },
                        { q: L`ما نوع المجموعة \(\{5\}\)؟`, a: L`مجموعة وحيدة العنصر`, s: L`تحتوي على عنصر واحد فقط.` },
                        { q: L`هل مجموعة الأعداد الطبيعية \(N\) منتهية؟`, a: L`لا، هي مجموعة لانهائية`, s: L`لا يوجد عدد طبيعي أكبر من الجميع، فلا يمكن حصر عناصرها في عدد محدد.` }
                    ]
                },
                {
                    video: 'RZVyDCe338w', title: 'التقاطع والاتحاد',
                    ex: [
                        { q: L`إذا كانت \(A = \{1, 2, 3, 4\}\) و \(B = \{3, 4, 5\}\)، أوجد \(A \cap B\)`, a: L`\(\{3, 4\}\)`, s: L`التقاطع هو العناصر المشتركة بين المجموعتين.` },
                        { q: L`للمجموعتين نفسيهما، أوجد \(A \cup B\)`, a: L`\(\{1, 2, 3, 4, 5\}\)`, s: L`الاتحاد هو جميع عناصر المجموعتين، مع كتابة المكرر مرة واحدة.` },
                        { q: L`إذا كانت \(C = \{a, b\}\)، أوجد \(C \cap \phi\) و \(C \cup \phi\)`, a: L`\(C \cap \phi = \phi\) و \(C \cup \phi = \{a, b\}\)`, s: L`لا توجد عناصر مشتركة مع المجموعة الخالية، واتحاد أي مجموعة مع الخالية هو المجموعة نفسها.` }
                    ]
                },
                {
                    video: 'w3jdne1F4uk', title: 'الفرق والمتممة',
                    ex: [
                        { q: L`إذا كانت \(A = \{1, 2, 3, 4\}\) و \(B = \{3, 4, 5\}\)، أوجد \(A - B\)`, a: L`\(\{1, 2\}\)`, s: L`العناصر الموجودة في \(A\) وليست في \(B\).` },
                        { q: L`للمجموعتين نفسيهما، أوجد \(B - A\)`, a: L`\(\{5\}\)`, s: L`العناصر الموجودة في \(B\) وليست في \(A\). لاحظ أن \(A - B \neq B - A\).` },
                        { q: L`إذا كانت \(U = \{1, 2, 3, 4, 5, 6\}\) و \(A = \{2, 4, 6\}\)، أوجد \(\bar{A}\)`, a: L`\(\bar{A} = \{1, 3, 5\}\)`, s: L`المتممة هي عناصر المجموعة الشاملة \(U\) التي ليست في \(A\).` }
                    ]
                },
                {
                    video: 'TUlSTMYi-LU', title: 'الفرق التناظري وقانونا ديمورغان',
                    ex: [
                        { q: L`إذا كانت \(A = \{1, 2, 3\}\) و \(B = \{3, 4\}\)، أوجد \(A \oplus B\)`, a: L`\(\{1, 2, 4\}\)`, s: L`العناصر الموجودة في إحدى المجموعتين فقط: نستبعد العنصر المشترك \(3\) من الاتحاد \(\{1, 2, 3, 4\}\).` },
                        { q: L`إذا كانت \(A = B = \{1, 2\}\)، أوجد \(A \oplus B\)`, a: L`\(\phi\)`, s: L`جميع العناصر مشتركة، فلا يبقى عنصر في إحداهما فقط.` },
                        { q: L`إذا كانت \(U = \{1, 2, 3, 4, 5\}\) و \(A = \{1, 2\}\) و \(B = \{2, 3\}\)، تحقق من أن \(\overline{A \cup B} = \bar{A} \cap \bar{B}\)`, a: L`الطرفان يساويان \(\{4, 5\}\)`, s: L`\(A \cup B = \{1, 2, 3\}\) فمتممته \(\{4, 5\}\). و \(\bar{A} = \{3, 4, 5\}\) و \(\bar{B} = \{1, 4, 5\}\)، وتقاطعهما \(\{4, 5\}\).` }
                    ]
                },
                {
                    video: '1d1Z8EGUnkA', title: 'المجموعات العددية وختام الوحدة',
                    ex: [
                        { q: L`حدد المجموعات العددية التي ينتمي إليها العدد \(-8\)`, a: L`\(Z, Q, R\)`, s: L`عدد صحيح سالب، فلا ينتمي إلى \(N\) ولا \(W\)، وكل عدد صحيح هو نسبي وحقيقي.` },
                        { q: L`هل العدد \(0.75\) عدد نسبي؟`, a: L`نعم`, s: L`يمكن كتابته على صورة كسر: \(0.75 = \dfrac{3}{4}\).` },
                        { q: L`هل العدد \(\sqrt{2}\) عدد نسبي؟`, a: L`لا، هو عدد غير نسبي \(\bar{Q}\)`, s: L`لا يمكن كتابته على صورة كسر، ومنزلته العشرية غير منتهية وغير دورية.` }
                    ]
                }
            ]
        },
        { id: 'u2', num: 2, title: 'العمليات على الأعداد' },
        { id: 'u3', num: 3, title: 'كثيرات الحدود' },
        { id: 'u4', num: 4, title: 'المصفوفات والمحددات' },
        { id: 'u5', num: 5, title: 'المعادلات' },
        { id: 'u6', num: 6, title: 'الهندسة المستوية والفراغية' }
    ];

    // ---------- progress (per viewer) ----------
    const KEY = 'm101-video-progress-v1';
    let progress = {};
    try { progress = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { progress = {}; }
    const save = () => { try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch (e) { /* private mode */ } };
    const lessonKey = (u, i) => `${u.id}-${i + 1}`;
    const doneCount = (k) => Object.keys(progress[k] || {}).length;

    // ---------- rendering ----------
    const app = document.getElementById('enrich-app');
    if (!app) return;
    const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
    const thumb = (id) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
    // MathJax loads async: wait for it, then typeset the freshly rendered view
    const typeset = (el, tries = 0) => {
        if (window.MathJax && MathJax.typesetPromise) {
            MathJax.startup.promise.then(() => MathJax.typesetPromise([el])).catch(() => {});
        } else if (tries < 100) {
            setTimeout(() => typeset(el, tries + 1), 150);
        }
    };

    function playerHTML(id, title) {
        return `<button type="button" class="en-player" data-video="${id}" data-title="${esc(title)}" aria-label="تشغيل: ${esc(title)}">
            <img src="${thumb(id).replace('mqdefault', 'hqdefault')}" alt="" loading="lazy">
            <span class="en-play" aria-hidden="true">▶</span>
        </button>`;
    }

    // click the thumbnail → load the YouTube player in place
    app.addEventListener('click', (e) => {
        const p = e.target.closest('.en-player');
        if (!p) return;
        const id = p.dataset.video;
        if (!/^https?:$/.test(location.protocol)) { window.open('https://www.youtube.com/watch?v=' + id, '_blank', 'noopener'); return; }
        const f = document.createElement('iframe');
        f.className = 'en-iframe';
        f.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&origin=${encodeURIComponent(location.origin)}`;
        f.title = p.dataset.title;
        f.referrerPolicy = 'strict-origin-when-cross-origin';
        f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen';
        f.allowFullscreen = true;
        p.replaceWith(f);
    });

    function renderUnit(u) {
        const tabs = UNITS.map(x => `<a href="#${x.id}" class="en-tab${x === u ? ' active' : ''}"><b>${x.num}</b>${x.title}</a>`).join('');
        let body;
        if (u.lessons) {
            const total = u.lessons.length * 3;
            const done = u.lessons.reduce((n, l, i) => n + doneCount(lessonKey(u, i)), 0);
            body = `
                <div class="en-unit-bar">
                    <div><h2>الوحدة ${u.num}: ${u.title}</h2><p>${u.lessons.length} ${u.lessons.length <= 10 ? 'دروس' : 'درسًا'} · ${total} تمرينًا — شاهد الفيديو ثم طبّق</p></div>
                    <div class="en-meter" title="تقدّمك في الوحدة"><span style="width:${Math.round(done / total * 100)}%"></span><small>${done} / ${total}</small></div>
                </div>
                ${u.intro ? `<a href="#${u.id}-intro" class="en-intro"><img src="${thumb(u.intro.id)}" alt="" loading="lazy"><div><small>ابدأ من هنا</small><b>${u.intro.title}</b></div><span>▶</span></a>` : ''}
                <div class="en-grid">${u.lessons.map((l, i) => {
                    const k = lessonKey(u, i), d = doneCount(k);
                    return `<a href="#${k}" class="en-lesson${d === 3 ? ' complete' : ''}">
                        <span class="en-thumb"><img src="${thumb(l.video)}" alt="" loading="lazy"><span class="en-play" aria-hidden="true">▶</span></span>
                        <span class="en-lesson-body"><small>الدرس ${i + 1}</small><b>${l.title}</b>
                        <span class="en-dots">${[0, 1, 2].map(j => `<i class="${(progress[k] || {})[j] || ''}"></i>`).join('')}<em>${d === 3 ? '✓ مكتمل' : `${d} / 3`}</em></span></span>
                    </a>`;
                }).join('')}</div>`;
        } else {
            body = `
                <div class="en-unit-bar"><div><h2>الوحدة ${u.num}: ${u.title}</h2></div></div>
                <div class="en-empty"><span>🎬</span><b>تُضاف فيديوهات هذه الوحدة قريبًا</b><p>في الأثناء يمكنك مراجعة <a href="u${u.num}.html">محتوى الوحدة</a>.</p></div>`;
        }
        app.innerHTML = `<nav class="en-tabs" aria-label="الوحدات">${tabs}</nav>${body}`;
    }

    function renderIntro(u) {
        app.innerHTML = `
            <a href="#${u.id}" class="en-back">→ دروس الوحدة ${u.num}</a>
            <div class="en-lesson-head"><small>الوحدة ${u.num}: ${u.title}</small><h2>${u.intro.title}</h2></div>
            <div class="en-video">${playerHTML(u.intro.id, u.intro.title)}</div>
            <div class="en-next-row"><span></span><a href="#${lessonKey(u, 0)}" class="en-btn en-btn-main">الدرس الأول: ${u.lessons[0].title} ←</a></div>`;
    }

    function renderLesson(u, i) {
        const l = u.lessons[i], k = lessonKey(u, i);
        const prev = i > 0 ? `<a href="#${lessonKey(u, i - 1)}" class="en-btn">→ ${u.lessons[i - 1].title}</a>` : (u.intro ? `<a href="#${u.id}-intro" class="en-btn">→ المقدمة</a>` : '<span></span>');
        const next = i < u.lessons.length - 1 ? `<a href="#${lessonKey(u, i + 1)}" class="en-btn en-btn-main">${u.lessons[i + 1].title} ←</a>` : `<a href="#${u.id}" class="en-btn en-btn-main">إنهاء الوحدة ✓</a>`;
        app.innerHTML = `
            <a href="#${u.id}" class="en-back">→ دروس الوحدة ${u.num}</a>
            <div class="en-lesson-head"><small>الوحدة ${u.num} · الدرس ${i + 1} من ${u.lessons.length}</small><h2>${l.title}</h2></div>
            <ol class="en-steps"><li class="on"><b>1</b> شاهد الشرح</li><li><b>2</b> طبّق 3 تمارين</li></ol>
            <div class="en-video">${playerHTML(l.video, l.title)}</div>
            <div class="en-apply-head"><h3>طبّق ما شاهدته</h3><span class="en-score"></span></div>
            <p class="en-hint">حلّ كل تمرين في دفترك أولًا، ثم اضغط «أظهر الحل» وقيّم إجابتك.</p>
            <div class="en-exercises">${l.ex.map((e, j) => `
                <article class="en-ex" data-j="${j}">
                    <div class="en-ex-top"><span class="en-ex-num">${j + 1}</span><div class="en-q">${e.q}</div></div>
                    <button type="button" class="en-btn en-reveal">أظهر الحل</button>
                    <div class="en-sol" hidden>
                        <div class="en-ans"><span>الإجابة:</span> ${e.a}</div>
                        <div class="en-steps-txt">${e.s}</div>
                        <div class="en-self"><span>هل كانت إجابتك صحيحة؟</span>
                            <button type="button" class="en-btn en-yes" data-v="ok">✓ نعم</button>
                            <button type="button" class="en-btn en-no" data-v="bad">✗ لا</button>
                        </div>
                    </div>
                </article>`).join('')}</div>
            <div class="en-more"><span>📚 تريد تدريبًا أكثر؟</span><a href="ex+.html#${k}">10 تمارين إثرائية على «${l.title}» ←</a></div>
            <div class="en-next-row">${prev}${next}</div>`;

        const sync = () => {
            const st = progress[k] || {};
            app.querySelectorAll('.en-ex').forEach(card => {
                const v = st[card.dataset.j];
                card.classList.toggle('ok', v === 'ok');
                card.classList.toggle('bad', v === 'bad');
                if (v) { card.querySelector('.en-sol').hidden = false; card.querySelector('.en-reveal').hidden = true; }
            });
            const d = doneCount(k), ok = Object.values(st).filter(v => v === 'ok').length;
            app.querySelector('.en-score').textContent = d ? `${ok} صحيحة من ${d}` : '';
            app.querySelectorAll('.en-steps li')[1].classList.toggle('on', d > 0);
        };
        app.querySelectorAll('.en-ex').forEach(card => {
            card.querySelector('.en-reveal').addEventListener('click', (ev) => {
                card.querySelector('.en-sol').hidden = false;
                ev.currentTarget.hidden = true;
            });
            card.querySelectorAll('.en-self .en-btn').forEach(b => b.addEventListener('click', () => {
                (progress[k] = progress[k] || {})[card.dataset.j] = b.dataset.v;
                save();
                sync();
            }));
        });
        sync();
    }

    function route() {
        const h = location.hash.slice(1);
        let m;
        const unitOf = (id) => UNITS.find(u => u.id === id.replace(/^unit-/, 'u')); // #unit-2 also works
        if ((m = h.match(/^(u\d)-intro$/)) && unitOf(m[1]) && unitOf(m[1]).intro) renderIntro(unitOf(m[1]));
        else if ((m = h.match(/^(u\d)-(\d+)$/)) && unitOf(m[1]) && unitOf(m[1]).lessons && unitOf(m[1]).lessons[m[2] - 1]) renderLesson(unitOf(m[1]), m[2] - 1);
        else renderUnit(unitOf(h) || UNITS[0]);
        typeset(app);
        const top = app.getBoundingClientRect().top;
        if (top < 0) window.scrollBy({ top: top - 90 });
    }

    window.addEventListener('hashchange', route);
    route();
})();
