/**
 * Enrichment exercises, organised by the explainer-video titles (10 per video).
 * Topic order matches the lessons on videos.html, so both pages share the keys u1-1, u1-2, ...
 * Each item: [question, answer, worked explanation] — LaTeX via String.raw.
 * A unit with empty "topics" shows a "coming soon" message.
 * Shared with the mobile app (app.html), which draws its own views from M101_ENRICH.
 */
(function () {
    const L = String.raw; // LaTeX without doubled backslashes
    // Set-builder with Arabic conditions: Arabic text inside TeX loses its place in the line, so it sits between math pieces
    const S = (before, ar, after) => `<bdi dir="ltr">\\(${before}\\)<bdi dir="rtl" style="white-space:nowrap">${ar}</bdi>\\(${after}\\)</bdi>`;

    const UNITS = [
        {
            id: 'u1', num: 1, title: 'المجموعات',
            topics: [
                {
                    title: 'مفهوم المجموعة وطرق كتابتها', ex: [
                        [L`هل «أيام الأسبوع» تمثل مجموعة؟`, L`نعم`, L`عناصرها محددة بشكل دقيق وقاطع: سبعة أيام لا يختلف عليها أحد.`],
                        [L`هل «الكتب المفيدة في المكتبة» تمثل مجموعة؟`, L`لا`, L`«مفيدة» صفة نسبية، فما يراه شخص مفيدًا قد لا يراه غيره كذلك، فلا نستطيع الحكم بشكل قاطع.`],
                        [L`هل «الأعداد الطبيعية الأصغر من \(10\)» تمثل مجموعة؟`, L`نعم`, L`نستطيع الحكم على أي عدد بلا تردد: هل هو طبيعي وأصغر من \(10\) أم لا.`],
                        [L`اكتب بطريقة السرد مجموعة حروف كلمة level`, L`\(\{l, e, v\}\)`, L`نذكر كل حرف مرة واحدة فقط، لأننا لا نكتب العنصر نفسه مرتين.`],
                        [L`اكتب بطريقة السرد مجموعة الأعداد الفردية المحصورة بين \(4\) و \(12\)`, L`\(\{5, 7, 9, 11\}\)`, L`الأعداد بين \(4\) و \(12\) هي من \(5\) إلى \(11\)، ونختار الفردية منها.`],
                        [L`اكتب بطريقة السرد: ${S(L`A = \{x : x \in N,\ x \le 6,\ `, L`\(x\) عدد زوجي`, L`\}`)}`, L`\(A = \{2, 4, 6\}\)`, L`الأعداد الطبيعية حتى \(6\) هي \(1, 2, 3, 4, 5, 6\)، والزوجية منها \(2, 4, 6\).`],
                        [L`اكتب بطريقة الوصف المجموعة: \(\{1, 2, 5, 10\}\)`, S(L`\{x :\ `, L`\(x\) من قواسم العدد \(10\)`, L`\}`), L`في طريقة الوصف نذكر صفة تميّز العناصر، ولا نكتب شروطًا رياضية: هذه الأعداد هي قواسم العدد \(10\).`],
                        [L`اكتب بطريقة الوصف مجموعة أشهر السنة الهجرية`, S(L`\{x :\ `, L`\(x\) شهر من أشهر السنة الهجرية`, L`\}`), L`نكتب: مجموعة كل \(x\) حيث \(x\) يحقق الخاصية، دون سرد الأشهر الاثني عشر.`],
                        [L`اكتب بطريقة القاعدة المجموعة: \(\{4, 6, 8, 10\}\)`, S(L`\{x : x \in N,\ `, L`\(x\) عدد زوجي`, L`,\ 4 \le x \le 10\}`), L`لتسلسل العناصر نمط ظاهر: كلها أعداد طبيعية زوجية، أصغرها \(4\) وأكبرها \(10\).`],
                        [L`ما الفرق بين طريقة الوصف وطريقة القاعدة؟`, L`الوصف يذكر صفة تميّز العناصر، والقاعدة تعبّر عنها بشروط رياضية دقيقة`, L`مثال: \(\{2, 4, 6, 8\}\) بالوصف: الأعداد الزوجية المحصورة بين \(1\) و \(9\). وبالقاعدة: ${S(L`\{x : x \in N,\ `, L`\(x\) عدد زوجي`, L`,\ 2 \le x \le 8\}`)}.`]
                    ]
                },
                {
                    title: 'الانتماء والمجموعات الجزئية والتساوي', ex: [
                        [L`إذا كانت \(A = \{2, 5, 8, a\}\)، فضع \(\in\) أو \(\notin\): \(\;5 \;\square\; A\) و \(\;b \;\square\; A\)`, L`\(5 \in A\) و \(b \notin A\)`, L`\(5\) من عناصر \(A\)، أما \(b\) فليس منها.`],
                        [L`إذا كانت \(A = \{2, 5, 8, a\}\)، فهل \(\{2, 8\} \subseteq A\)؟`, L`نعم`, L`العنصران \(2\) و \(8\) كلاهما موجود في \(A\).`],
                        [L`إذا كانت \(A = \{2, 5, 8, a\}\)، فأي الكتابتين صحيحة: \(5 \subseteq A\) أم \(\{5\} \subseteq A\)؟`, L`\(\{5\} \subseteq A\)`, L`الاحتواء يكون بين مجموعتين. أما العنصر \(5\) فنكتب معه رمز الانتماء: \(5 \in A\).`],
                        [L`إذا كانت \(A = \{2, 5, 8, a\}\)، فهل \(\{2, 9\} \subseteq A\)؟`, L`لا، \(\{2, 9\} \not\subseteq A\)`, L`يكفي عنصر واحد خارج \(A\) للحكم، و \(9 \notin A\).`],
                        [L`إذا كانت \(B = \{1, 2\}\) و \(C = \{1, 2, 3\}\)، فهل \(B\) مجموعة جزئية فعلية من \(C\)؟`, L`نعم، \(B \subset C\)`, L`كل عناصر \(B\) في \(C\)، و \(B \neq C\) لأن \(3 \in C\) و \(3 \notin B\).`],
                        [L`إذا كانت \(D = \{1, 2, 3\}\)، فهل \(D\) مجموعة جزئية فعلية من نفسها؟`, L`لا`, L`\(D \subseteq D\) صحيحة، لكن الجزئية الفعلية تشترط عدم التساوي، و \(D = D\).`],
                        [L`هل \(\{x, y\} = \{y, x\}\)؟`, L`نعم`, L`لهما العناصر نفسها، والترتيب في المجموعات لا يهم.`],
                        [L`هل \(\{1, 2, 3\} = \{1, 2, 3, 4\}\)؟`, L`لا`, L`\(4\) موجود في الثانية وليس في الأولى، فالثانية ليست جزئية من الأولى.`],
                        [L`هل \(\{1, 1, 2\} = \{1, 2\}\)؟`, L`نعم`, L`تكرار العنصر لا يغيّر المجموعة، فعناصر المجموعتين هي \(1\) و \(2\).`],
                        [L`إذا كانت \(\{2, x\} = \{2, 5\}\)، فما قيمة \(x\)؟`, L`\(x = 5\)`, L`المجموعتان المتساويتان لهما العناصر نفسها تمامًا، فلا بد أن يكون العنصر الآخر \(5\).`]
                    ]
                },
                {
                    title: 'أنواع المجموعات', ex: [
                        [L`ما نوع مجموعة الأعداد الزوجية المحصورة بين \(4\) و \(6\)؟`, L`خالية \(\phi\)`, L`العدد الوحيد المحصور بينهما هو \(5\)، وهو فردي.`],
                        [L`هل المجموعة \(\{0\}\) خالية؟`, L`لا، هي وحيدة العنصر`, L`تحتوي على عنصر واحد هو الصفر، والخالية لا تحتوي على أي عنصر.`],
                        [L`ما نوع مجموعة الأعداد الفردية المحصورة بين \(8\) و \(10\)؟`, L`وحيدة العنصر: \(\{9\}\)`, L`العدد الوحيد المحصور بينهما هو \(9\)، وهو فردي.`],
                        [L`ما نوع مجموعة حروف كلمة «سعد»؟`, L`منتهية، وفيها \(3\) عناصر`, L`لو عددنا عناصرها لانتهينا من العد.`],
                        [L`ما نوع المجموعة \(\{1, 3, 5, 7, \dots\}\)؟`, L`لانهائية`, L`النقاط الثلاث تعني أن العناصر تستمر بالنمط نفسه بلا نهاية.`],
                        [L`ما نوع مجموعة مضاعفات العدد \(10\) الموجبة الأصغر من \(100\)؟`, L`منتهية، وفيها \(9\) عناصر`, L`عناصرها \(10, 20, \dots, 90\). انتبه: شرط «الأصغر من \(100\)» هو الذي جعلها منتهية.`],
                        [L`هل المجموعة الخالية مجموعة منتهية؟`, L`نعم`, L`عدد عناصرها محدود وهو صفر، وكذلك المجموعة وحيدة العنصر منتهية أيضًا.`],
                        [L`إذا كنا ندرس الأعداد الطبيعية من \(1\) إلى \(5\) فقط، فما المجموعة الشاملة؟ وهل \(\{2, 4\} \subseteq U\)؟`, L`\(U = \{1, 2, 3, 4, 5\}\)، ونعم`, L`الشاملة تحتوي على جميع العناصر تحت الدراسة، وأي مجموعة منها جزئية من \(U\).`],
                        [L`هل \(\phi \subseteq \{1, 2\}\)؟`, L`نعم`, L`الخالية مجموعة جزئية من أي مجموعة، فليس فيها عنصر يمكن أن يكون خارجها.`],
                        [L`إذا كانت \(\{a\} \subseteq \{a, b\}\) و \(\{a, b\} \subseteq \{a, b, c\}\)، فماذا نستنتج؟`, L`\(\{a\} \subseteq \{a, b, c\}\)`, L`الخاصية: إذا كانت \(A \subseteq B\) و \(B \subseteq C\) فإن \(A \subseteq C\).`]
                    ]
                },
                {
                    title: 'التقاطع والاتحاد', ex: [
                        [L`إذا كانت \(A = \{2, 4, 6, 8\}\) و \(B = \{4, 8, 10\}\)، أوجد \(A \cap B\)`, L`\(\{4, 8\}\)`, L`نمر على عناصر \(A\): \(4\) و \(8\) فقط موجودان في \(B\).`],
                        [L`للمجموعتين نفسيهما \(A = \{2, 4, 6, 8\}\) و \(B = \{4, 8, 10\}\)، أوجد \(A \cup B\)`, L`\(\{2, 4, 6, 8, 10\}\)`, L`نكتب عناصر \(A\) ثم نضيف من \(B\) ما ليس مكتوبًا: \(10\).`],
                        [L`إذا كانت \(C = \{a, b, c\}\) و \(D = \{d, e\}\)، أوجد \(C \cap D\)`, L`\(\phi\)`, L`لا يوجد عنصر مشترك بين المجموعتين.`],
                        [L`للمجموعتين نفسيهما \(C = \{a, b, c\}\) و \(D = \{d, e\}\)، أوجد \(C \cup D\)`, L`\(\{a, b, c, d, e\}\)`, L`المجموعتان منفصلتان، فنضم جميع العناصر.`],
                        [L`إذا كانت \(E = \{3, 6\}\) و \(F = \{3, 6, 9, 12\}\)، أوجد \(E \cap F\)`, L`\(\{3, 6\}\)، وهي \(E\) نفسها`, L`لأن \(E \subseteq F\)، فكل عناصر \(E\) مشتركة.`],
                        [L`للمجموعتين نفسيهما \(E = \{3, 6\}\) و \(F = \{3, 6, 9, 12\}\)، أوجد \(E \cup F\)`, L`\(\{3, 6, 9, 12\}\)، وهي \(F\) نفسها`, L`لأن \(E \subseteq F\)، فلا تضيف \(E\) أي عنصر جديد.`],
                        [L`إذا كانت \(G = \{1, 5\}\)، أوجد \(G \cap \phi\) و \(G \cup \phi\)`, L`\(G \cap \phi = \phi\) و \(G \cup \phi = \{1, 5\}\)`, L`لا مشترك مع الخالية، والخالية لا تضيف أي عنصر.`],
                        [L`إذا كانت \(U = \{1, 2, 3, 4, 5\}\) و \(G = \{1, 5\}\)، أوجد \(G \cap U\) و \(G \cup U\)`, L`\(G \cap U = G\) و \(G \cup U = U\)`, L`كل عناصر \(G\) موجودة في الشاملة، والشاملة تحتوي أصلًا على كل العناصر.`],
                        [L`إذا كانت \(A = \{1, 2, 3\}\) و \(B = \{2, 3, 4\}\) و \(C = \{5\}\)، أوجد \((A \cap B) \cup C\)`, L`\(\{2, 3, 5\}\)`, L`نبدأ بالقوس: \(A \cap B = \{2, 3\}\)، ثم نضيف عنصر \(C\).`],
                        [L`تحقق من أن \(A \cap B = B \cap A\) إذا كانت \(A = \{1, 2\}\) و \(B = \{2, 3\}\)`, L`الطرفان يساويان \(\{2\}\)`, L`العنصر المشترك هو \(2\) أيًا كان الترتيب، فالترتيب في التقاطع لا يهم.`]
                    ]
                },
                {
                    title: 'الفرق والمتممة', ex: [
                        [L`إذا كانت \(A = \{1, 2, 3, 4, 5\}\) و \(B = \{4, 5, 6\}\)، أوجد \(A - B\)`, L`\(\{1, 2, 3\}\)`, L`نبدأ بعناصر \(A\) ونحذف منها الموجود في \(B\): \(4\) و \(5\).`],
                        [L`للمجموعتين نفسيهما \(A = \{1, 2, 3, 4, 5\}\) و \(B = \{4, 5, 6\}\)، أوجد \(B - A\)`, L`\(\{6\}\)`, L`نبدأ هنا بعناصر \(B\). لاحظ أن \(A - B \neq B - A\)، فالترتيب في الفرق مهم.`],
                        [L`إذا كانت \(X = \{a, b\}\) و \(Y = \{c\}\)، أوجد \(X - Y\)`, L`\(\{a, b\}\)، وهي \(X\) نفسها`, L`لا توجد عناصر مشتركة، فلا نحذف شيئًا.`],
                        [L`إذا كانت \(E = \{1, 2\}\) و \(F = \{1, 2, 3\}\)، أوجد \(E - F\)`, L`\(\phi\)`, L`كل عناصر \(E\) موجودة في \(F\)، فتُحذف كلها.`],
                        [L`للمجموعتين نفسيهما \(E = \{1, 2\}\) و \(F = \{1, 2, 3\}\)، أوجد \(F - E\)`, L`\(\{3\}\)`, L`نحذف من \(F\) العنصرين \(1\) و \(2\).`],
                        [L`إذا كانت \(A = \{7, 8\}\)، أوجد \(A - A\) و \(A - \phi\)`, L`\(A - A = \phi\) و \(A - \phi = \{7, 8\}\)`, L`حذف كل العناصر لا يُبقي شيئًا، وطرح الخالية لا يحذف شيئًا.`],
                        [L`إذا كانت \(U = \{1, 2, \dots, 8\}\) و \(A = \{1, 3, 5, 7\}\)، أوجد \(\bar{A}\)`, L`\(\{2, 4, 6, 8\}\)`, L`نحذف من \(U\) عناصر \(A\)، فتبقى الأعداد الزوجية.`],
                        [L`إذا كانت \(U = \{a, b, c, d, e\}\) و \(B = \{a, e\}\)، أوجد \(\bar{B}\)`, L`\(\{b, c, d\}\)`, L`\(\bar{B} = U - B\).`],
                        [L`إذا كانت \(U = \{1, 2, 3\}\)، أوجد \(\bar{\phi}\) و \(\bar{U}\)`, L`\(\bar{\phi} = \{1, 2, 3\}\) و \(\bar{U} = \phi\)`, L`متممة الخالية هي الشاملة، ومتممة الشاملة هي الخالية.`],
                        [L`إذا كانت \(U = \{1, 2, 3, 4, 5\}\) و \(A = \{1, 2\}\)، أوجد \(A \cup \bar{A}\) و \(A \cap \bar{A}\)`, L`\(A \cup \bar{A} = U\) و \(A \cap \bar{A} = \phi\)`, L`\(\bar{A} = \{3, 4, 5\}\). المجموعة ومتممتها تغطيان \(U\) كلها، ولا عنصر مشترك بينهما.`]
                    ]
                },
                {
                    title: 'الفرق التناظري وقانونا ديمورغان', ex: [
                        [L`إذا كانت \(A = \{1, 2, 3, 4\}\) و \(B = \{3, 4, 5, 6\}\)، أوجد \(A \oplus B\)`, L`\(\{1, 2, 5, 6\}\)`, L`نكتب الاتحاد \(\{1, 2, 3, 4, 5, 6\}\) ونستبعد المشترك \(3\) و \(4\).`],
                        [L`إذا كانت \(X = \{a, b\}\) و \(Y = \{c, d\}\)، أوجد \(X \oplus Y\)`, L`\(\{a, b, c, d\}\)`, L`لا توجد عناصر مشتركة، فالناتج مثل الاتحاد تمامًا.`],
                        [L`إذا كانت \(E = \{5\}\) و \(F = \{5, 6, 7\}\)، أوجد \(E \oplus F\)`, L`\(\{6, 7\}\)`, L`الاتحاد \(\{5, 6, 7\}\)، ونستبعد المشترك \(5\).`],
                        [L`إذا كانت \(A = \{2, 4\}\)، أوجد \(A \oplus A\)`, L`\(\phi\)`, L`كل العناصر مشتركة، فلا يبقى شيء بعد استبعادها.`],
                        [L`إذا كانت \(A = \{1, 2, 3\}\) و \(B = \{2, 3, 4\}\)، أوجد \(A \oplus B\) باستخدام \((A - B) \cup (B - A)\)`, L`\(\{1, 4\}\)`, L`\(A - B = \{1\}\) و \(B - A = \{4\}\)، واتحادهما \(\{1, 4\}\).`],
                        [L`تحقق من أن \(A \oplus B = B \oplus A\) إذا كانت \(A = \{1, 2\}\) و \(B = \{2, 3\}\)`, L`الطرفان يساويان \(\{1, 3\}\)`, L`في الحالتين نكتب الاتحاد \(\{1, 2, 3\}\) ونستبعد المشترك \(2\).`],
                        [L`اكتب قانون ديمورغان لمتممة التقاطع`, L`\(\overline{A \cap B} = \bar{A} \cup \bar{B}\)`, L`متممة التقاطع تساوي اتحاد المتممات: تدخل المتممة على كل مجموعة، ويتبدل التقاطع إلى اتحاد.`],
                        [L`اكتب قانون ديمورغان لمتممة الاتحاد`, L`\(\overline{A \cup B} = \bar{A} \cap \bar{B}\)`, L`متممة الاتحاد تساوي تقاطع المتممات: يتبدل الاتحاد إلى تقاطع.`],
                        [L`إذا كانت \(U = \{1, 2, 3, 4, 5\}\) و \(A = \{1, 2, 3\}\) و \(B = \{3, 4\}\)، تحقق من أن \(\overline{A \cap B} = \bar{A} \cup \bar{B}\)`, L`الطرفان يساويان \(\{1, 2, 4, 5\}\)`, L`\(A \cap B = \{3\}\) فمتممتها \(\{1, 2, 4, 5\}\). و \(\bar{A} = \{4, 5\}\) و \(\bar{B} = \{1, 2, 5\}\)، واتحادهما \(\{1, 2, 4, 5\}\).`],
                        [L`بالمعطيات نفسها \(U = \{1, 2, 3, 4, 5\}\) و \(A = \{1, 2, 3\}\) و \(B = \{3, 4\}\)، تحقق من أن \(\overline{A \cup B} = \bar{A} \cap \bar{B}\)`, L`الطرفان يساويان \(\{5\}\)`, L`\(A \cup B = \{1, 2, 3, 4\}\) فمتممتها \(\{5\}\). و \(\bar{A} \cap \bar{B} = \{4, 5\} \cap \{1, 2, 5\} = \{5\}\).`]
                    ]
                },
                {
                    title: 'المجموعات العددية وختام الوحدة', ex: [
                        [L`حدد المجموعات العددية التي ينتمي إليها العدد \(4\)`, L`\(N, W, Z, Q, R\)`, L`\(4\) عدد طبيعي، وكل عدد طبيعي هو كلي وصحيح ونسبي وحقيقي.`],
                        [L`هل \(0 \in N\)؟ وهل \(0 \in W\)؟`, L`\(0 \notin N\) و \(0 \in W\)`, L`الأعداد الطبيعية تبدأ من \(1\)، والأعداد الكلية تضيف إليها الصفر.`],
                        [L`حدد المجموعات العددية التي ينتمي إليها العدد \(-5\)`, L`\(Z, Q, R\)`, L`عدد صحيح سالب، فلا ينتمي إلى \(N\) ولا \(W\).`],
                        [L`حدد المجموعات العددية التي ينتمي إليها العدد \(\dfrac{3}{7}\)`, L`\(Q, R\)`, L`كسر بسطه ومقامه عددان صحيحان والمقام لا يساوي صفرًا، وليس عددًا صحيحًا.`],
                        [L`هل العدد \(0.5\) عدد نسبي؟`, L`نعم`, L`عدد عشري منتهٍ، ويمكن كتابته على صورة كسر: \(0.5 = \dfrac{1}{2}\).`],
                        [L`هل العدد \(0.666\dots\) (تتكرر الستة بلا نهاية) عدد نسبي؟`, L`نعم`, L`عدد عشري دوري، ويساوي \(\dfrac{2}{3}\).`],
                        [L`حدد المجموعات العددية التي ينتمي إليها العدد \(\sqrt{9}\)`, L`\(N, W, Z, Q, R\)`, L`\(\sqrt{9} = 3\)، فالجذر يُستخرج تمامًا والناتج عدد طبيعي.`],
                        [L`حدد المجموعات العددية التي ينتمي إليها العدد \(\sqrt{7}\)`, L`\(\bar{Q}, R\)`, L`الجذر لا يُستخرج تمامًا، ومنازله العشرية غير منتهية وغير دورية.`],
                        [L`هل العدد \(\pi\) عدد نسبي؟`, L`لا، \(\pi \in \bar{Q}\)`, L`منازله العشرية غير منتهية وغير دورية، و \(3.14\) قيمة تقريبية له فقط.`],
                        [L`أوجد \(Q \cap \bar{Q}\) و \(Q \cup \bar{Q}\)`, L`\(Q \cap \bar{Q} = \phi\) و \(Q \cup \bar{Q} = R\)`, L`لا يوجد عدد نسبي وغير نسبي في الوقت نفسه، والأعداد الحقيقية تشمل النوعين معًا.`]
                    ]
                }
            ]
        },
        { id: 'u2', num: 2, title: 'العمليات على الأعداد', topics: [] },
        { id: 'u3', num: 3, title: 'كثيرات الحدود', topics: [] },
        { id: 'u4', num: 4, title: 'المصفوفات والمحددات', topics: [] },
        { id: 'u5', num: 5, title: 'المعادلات', topics: [] },
        { id: 'u6', num: 6, title: 'الهندسة المستوية والفراغية', topics: [] }
    ];
    window.M101_ENRICH = UNITS;

    // ---------- progress (per viewer, same store as the mobile app) ----------
    const KEY = 'm101-enrich-v2';
    let progress = {};
    try { progress = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { progress = {}; }
    const save = () => { try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch (e) { /* private mode */ } };
    const topicKey = (u, i) => `${u.id}-${i + 1}`; // same keys as the lessons on videos.html
    const doneCount = (k) => Object.keys(progress[k] || {}).length;

    const app = document.getElementById('enrich-app');
    if (!app) return;
    const typeset = (el, tries = 0) => {
        if (window.MathJax && MathJax.typesetPromise) MathJax.startup.promise.then(() => MathJax.typesetPromise([el])).catch(() => {});
        else if (tries < 100) setTimeout(() => typeset(el, tries + 1), 150);
    };

    function renderUnit(u) {
        const tabs = UNITS.map(x => `<a href="#${x.id}" class="en-tab${x === u ? ' active' : ''}"><b>${x.num}</b>${x.title}</a>`).join('');
        let body;
        if (u.topics.length) {
            const total = u.topics.reduce((n, t) => n + t.ex.length, 0);
            const done = u.topics.reduce((n, t, i) => n + doneCount(topicKey(u, i)), 0);
            body = `
                <div class="en-unit-bar">
                    <div><h2>الوحدة ${u.num}: ${u.title}</h2><p>${u.topics.length} ${u.topics.length <= 10 ? 'دروس' : 'درسًا'} بعناوين الفيديوهات · 10 تمارين لكل درس</p></div>
                    <div class="en-meter" title="تقدّمك في الوحدة"><span style="width:${Math.round(done / total * 100)}%"></span><small>${done} / ${total}</small></div>
                </div>
                <div class="ex-topic-list">${u.topics.map((t, i) => {
                    const k = topicKey(u, i), d = doneCount(k), all = t.ex.length;
                    return `<a href="#${k}" class="ex-topic${d === all ? ' complete' : ''}">
                        <span class="video-unit-num">${i + 1}</span>
                        <span class="ex-topic-body"><b>${t.title}</b><small>${all} تمارين</small></span>
                        <span class="ex-topic-prog"><i style="width:${d / all * 100}%"></i></span>
                        <em>${d === all ? '✓' : `${d}/${all}`}</em>
                    </a>`;
                }).join('')}</div>`;
        } else {
            body = `
                <div class="en-unit-bar"><div><h2>الوحدة ${u.num}: ${u.title}</h2></div></div>
                <div class="en-empty"><span>✏️</span><b>تُضاف تمارين هذه الوحدة قريبًا</b><p>في الأثناء يمكنك مراجعة <a href="u${u.num}.html">محتوى الوحدة</a>.</p></div>`;
        }
        app.innerHTML = `<nav class="en-tabs" aria-label="الوحدات">${tabs}</nav>${body}`;
    }

    function renderTopic(u, i) {
        const t = u.topics[i], k = topicKey(u, i);
        const prev = i > 0 ? `<a href="#${topicKey(u, i - 1)}" class="en-btn">→ ${u.topics[i - 1].title}</a>` : '<span></span>';
        const next = i < u.topics.length - 1 ? `<a href="#${topicKey(u, i + 1)}" class="en-btn en-btn-main">${u.topics[i + 1].title} ←</a>` : `<a href="#${u.id}" class="en-btn en-btn-main">إنهاء الوحدة ✓</a>`;
        app.innerHTML = `
            <a href="#${u.id}" class="en-back">→ دروس الوحدة ${u.num}</a>
            <div class="en-lesson-head"><small>الوحدة ${u.num} · الدرس ${i + 1} من ${u.topics.length}</small><h2>${t.title}</h2></div>
            <a href="videos.html#${k}" class="ex-watch">▶ لم تشاهد شرح الدرس؟ شاهد الفيديو أولًا</a>
            <div class="en-apply-head"><h3>${t.ex.length} تمارين إثرائية</h3><span class="en-score"></span></div>
            <p class="en-hint">حلّ التمرين أولًا، ثم اضغط «أظهر الحل» وقيّم إجابتك.</p>
            <div class="en-exercises">${t.ex.map(([q, a, s], j) => `
                <article class="en-ex" data-j="${j}">
                    <div class="en-ex-top"><span class="en-ex-num">${j + 1}</span><div class="en-q">${q}</div></div>
                    <button type="button" class="en-btn en-reveal">أظهر الحل</button>
                    <div class="en-sol" hidden>
                        <div class="en-ans"><span>الإجابة:</span> ${a}</div>
                        <div class="en-steps-txt">${s}</div>
                        <div class="en-self"><span>هل كانت إجابتك صحيحة؟</span>
                            <button type="button" class="en-btn en-yes" data-v="ok">✓ نعم</button>
                            <button type="button" class="en-btn en-no" data-v="bad">✗ لا</button>
                        </div>
                    </div>
                </article>`).join('')}</div>
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
        const unitOf = (id) => UNITS.find(u => u.id === id);
        const m = h.match(/^(u\d)-(\d+)$/);
        if (m && unitOf(m[1]) && unitOf(m[1]).topics[m[2] - 1]) renderTopic(unitOf(m[1]), m[2] - 1);
        else renderUnit(unitOf(h) || UNITS[0]);
        typeset(app);
        const top = app.getBoundingClientRect().top;
        if (top < 0) window.scrollBy({ top: top - 90 });
    }

    window.addEventListener('hashchange', route);
    route();
})();
