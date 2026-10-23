/**
 * Enrichment exercises for the mobile app (app.html), one entry per page in
 * "تمارين اثرائية/" (the website keeps those pages). Each topic: title, page
 * (its file in that folder), optional intro (formula box) and ex items:
 * [question, answer, worked explanation] as HTML with LaTeX, via String.raw.
 */
(function () {
    const L = String.raw;

    window.M101_ENRICH = [
        {
            id: 'u1', num: 1, title: 'المجموعات',
            topics: [
                {
                    title: 'طرق كتابة المجموعة', page: 'طرق كتابة المجموعة.html',
                    ex: [
                        [L`طريقة السرد (الحصر)`, L`\[ A = \{2, 4, 6, 8\} \]`, L`في هذه الطريقة، نقوم بكتابة جميع عناصر المجموعة بوضوح داخل قوسين وبينهما فواصل. هذه الطريقة تصلح للمجموعات المنتهية وصغيرة الحجم.`],
                        [L`طريقة الوصف اللفظي`, L`\(=B\)مجموعة مقسومي (قواسم) العدد 10.`, L`نذكر الصفة التي تجمع العناصر دون كتابة العناصر نفسها. لو أردنا سردها لكانت \(\{1, 2, 5, 10\}\).`],
                        [L`طريقة الصفة المميزة (القاعدة)`, L`\[ C = \{ x : x \in \mathbb{N}, \ x &lt; 5 \} \]`, L`نستخدم متغيراً (مثل \(x\)) ليعبر عن أي عنصر في المجموعة، ثم نذكر الشروط التي يجب أن يحققها. هنا \(x\) عدد طبيعي وأقل من 5. (العناصر هي \(1, 2, 3, 4\)).`],
                        [L`التحويل من الوصف إلى السرد`, L`<strong>الوصف:</strong> مجموعة أحرف كلمة "سمسم".<br><strong>السرد:</strong><span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">D = { <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">س</span> , <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">م</span> }</span>`, L`عند السرد، <strong>لا يتم تكرار العناصر</strong>. رغم أن حرف السين والميم تكررا في الكلمة، نكتبهما مرة واحدة فقط في المجموعة.`],
                        [L`التحويل من السرد إلى الصفة المميزة`, L`<strong>السرد:</strong> \( E = \{ 3, 6, 9, 12, \dots \} \)<br><strong>الصفة المميزة:</strong> \( E = \{ x : x = 3k, k \in \mathbb{N} \} \)`, L`نلاحظ أن العناصر هي مضاعفات العدد 3 الموجبة. لذا عبرنا عنها بالقاعدة \(x = 3k\) حيث \(k\) عدد طبيعي.`]
                    ]
                },
                {
                    title: 'هل هي مجموعة؟', page: 'تحديد هل هي مجموعة ام لا.html',
                    ex: [
                        [L`التجمع: "أيام الأسبوع"`, L`<span style="font-size: 1.5em;">✔</span> تمثل مجموعة`, L`<strong>السبب:</strong> لأن عناصرها محددة ومعروفة بدقة ولا يختلف عليها اثنان (السبت، الأحد، الإثنين... إلخ). فهي معرفة تعريفا تاما.`],
                        [L`التجمع: "الطلاب الأذكياء في الفصل"`, L`<span style="font-size: 1.5em;">✘</span> لا تمثل مجموعة`, L`<strong>السبب:</strong> لأن صفة "الذكاء" صفة نسبية وغير محددة بمعيار دقيق وثابت؛ فقد يعتبر شخص ما طالباً ذكياً بينما يراه آخر غير ذلك. إذن هي غير معرفة جيداً.`],
                        [L`التجمع: "الأعداد الزوجية المحصورة بين 1 و 9"`, L`<span style="font-size: 1.5em;">✔</span> تمثل مجموعة`, L`<strong>السبب:</strong> العناصر محددة بدقة ووضوح وهي: \(\{2, 4, 6, 8\}\). لا يوجد غموض في تحديد العناصر.`],
                        [L`التجمع: "أجمل اللوحات في المتحف"`, L`<span style="font-size: 1.5em;">✘</span> لا تمثل مجموعة`, L`<strong>السبب:</strong> "الجمال" هو معيار ذوقي يختلف من شخص لآخر. لا يمكن تحديد العناصر بدقة قاطعة يتفق عليها الجميع.`],
                        [L`التجمع: "أحرف كلمة (سماء)"`, L`<span style="font-size: 1.5em;">✔</span> تمثل مجموعة`, L`<strong>السبب:</strong> الأحرف المكونة للكلمة ثابتة ومعروفة وهي: <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">{ <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">س</span> , <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">م</span> , <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">ا</span> , <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">ء</span> }</span>.`]
                    ]
                },
                {
                    title: 'انتماء العناصر', page: 'العلاقة بين العنصر والمجموعة.html',
                    ex: [
                        [L`لتكن \( A = \{1, 3, 5\} \). ما علاقة العدد \(3\) بالمجموعة \(A\)؟`, L`\[ 3 \in A \]`, L`العدد 3 موجود كعنصر داخل المجموعة \(A\)، لذا نستخدم الرمز "ينتمي" (\(\in\)).`],
                        [L`لتكن <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">B = { <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أخضر</span> , <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أحمر</span> }</span>. ما علاقة "أزرق" بالمجموعة \(B\)؟`, L`<span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed; display: inline-block;"><span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أزرق</span> \(\notin B\) </span>`, L`اللون الأزرق ليس من ضمن عناصر المجموعة \(B\)، لذا نستخدم الرمز "لا ينتمي" (\(\notin\)).`],
                        [L`هل \( \{2\} \in \{1, 2, 3\} \)؟`, L`\[ \{2\} \notin \{1, 2, 3\} \]`, L`المجموعة تحتوي على العنصر \(2\) وليس "مجموعة الرقم 2". العلاقة هنا بين عنصر ومجموعة هي \(\in\)، ولكن القوسين حول 2 جعلاها مجموعة أخرى، والعلاقة بين مجموعة ومجموعة هي الاحتواء \( \subseteq \) (وهي صحيحة هنا: \(\{2\} \subseteq \{1, 2, 3\}\)). أما "الانتماء" فهو خاطئ لأن المجموعة لا تحتوي على "مجموعة فرعية" كعنصر بداخلها.`],
                        [L`لتكن <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">S = { x : x <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">عدد زوجي</span> }</span>. حدد علاقة العدد \(5\) بالمجموعة \(S\).`, L`\[ 5 \notin S \]`, L`العدد 5 هو عدد فردي وليس زوجياً، لذا فهو لا يحقق شرط الصفة المميزة للمجموعة، وبالتالي لا ينتمي إليها.`],
                        [L`ما علاقة الصفر بالمجموعة الخالية \(\phi\)؟`, L`\[ 0 \notin \phi \]`, L`المجموعة الخالية لا تحتوي على أي عنصر على الإطلاق، حتى الصفر. لذا الصفر لا ينتمي إليها.`]
                    ]
                },
                {
                    title: 'تساوي المجموعات', page: 'تساوي المجموعات.html',
                    ex: [
                        [L`لتكن \( A = \{1, 2, 3\} \) و \( B = \{3, 1, 2\} \). هل \( A = B \)؟`, L`\[ A = B \]`, L`نعم، لأن المجموعتين تحتويان على نفس العناصر تماماً. ترتيب العناصر لا يؤثر على تساوي المجموعات.`],
                        [L`لتكن \( X = \{ \text{أ}, \text{ب} \} \) و \( Y = \{ \text{أ}, \text{ب}, \text{ب} \} \). هل \( X = Y \)؟`, L`\[ X = Y \]`, L`نعم، لأن تكرار العنصر داخل المجموعة لا يغير منها شيئاً. العنصر "ب" مكرر في \(Y\) لكنه يظل نفس العنصر. لذا المجموعتان متساويتان.`],
                        [L`لتكن \( K = \{1, 2\} \) و \( L = \{1, 2, 3\} \). هل \( K = L \)؟`, L`\[ K \neq L \]`, L`المجموعتان غير متساويتين لأن المجموعة \(L\) تحتوي على عنصر إضافي (3) غير موجود في \(K\). للتساوي يجب أن يكون لهما نفس العناصر بالضبط.`],
                        [L`لتكن <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">A = { x : x <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">حرف من كلمة "باب"</span> }</span>،<br> و <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">B = { <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">ب</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">ا</span> }</span>. هل \( A = B \)؟`, L`\[ A = B \]`, L`كلمة "باب" تتكون من حرفي الباء والألف (مع تكرار الباء). عند كتابة المجموعة نحذف التكرار، فتصبح عناصر \(A\) هي \(\{\text{ب}, \text{أ}\}\)، وهي مطابقة تماماً لعناصر المجموعة \(B\).`],
                        [L`لتكن \( E \) مجموعة الأعداد الزوجية المحصورة بين 1 و 5، و \( F = \{2, 4\} \). هل \( E = F \)؟`, L`\[ E = F \]`, L`الأعداد الزوجية بين 1 و 5 هي 2 و 4 فقط. إذن عناصر \(E\) هي 2 و 4. بما أن \(F\) تحتوي أيضاً على 2 و 4 فقط، فالمجموعتان متساويتان.`]
                    ]
                },
                {
                    title: 'أنواع المجموعات', page: 'انواع المجموعات.html',
                    ex: [
                        [L`ما نوع المجموعة \( A = \{1, 2, 3\} \)؟`, L`مجموعة منتهية`, L`لأننا نستطيع عد عناصرها (عددها 3 عناصر) ولها نهاية محددة.`],
                        [L`المجموعة \( B = \{1, 2, 3, \dots \} \) تمثل:`, L`مجموعة غير منتهية`, L`النقاط الثلاث (\(\dots\)) تدل على أن العناصر تستمر إلى ما لا نهاية ولا يمكن حصرها أو عدها بالكامل.`],
                        [L`ما نوع المجموعة <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">C = { x : x <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">عدد فردي يقبل القسمة على 2</span> }</span>؟`, L`مجموعة خالية (\( \phi \))`, L`لا يوجد أي عدد فردي يقبل القسمة على 2، لذلك لا تحتوي هذه المجموعة على أي عنصر.`],
                        [L`المجموعة \( M = \{5, 10, 15, 20, \dots \} \) تمثل:`, L`مجموعة غير منتهية`, L`هذه هي مجموعة مضاعفات العدد 5، وهي تستمر إلى ما لا نهاية.`],
                        [L`ما نوع المجموعة \( D = \{0\} \)؟`, L`مجموعة أحادية (و أيضاً منتهية)`, L`هذه المجموعة ليست خالية لأنها تحتوي على عنصر واحد وهو الصفر. تسمى مجموعة أحادية (Singleton) وتعتبر من أنواع المجموعات المنتهية.`]
                    ]
                },
                {
                    title: 'المجموعات الجزئية', page: 'المجموعات الجزئية.html',
                    ex: [
                        [L`لتكن \( A = \{1, 2\} \) و \( B = \{1, 2, 3, 4\} \). هل \( A \) مجموعة جزئية من \( B \)؟`, L`\[ A \subseteq B \]`, L`لأن كل عنصر في \(A\) (وهما 1 و 2) موجود أيضاً في \(B\).`],
                        [L`لتكن \( X = \{a, b, c\} \) و \( Y = \{a, c\} \). هل \( X \subseteq Y \)؟`, L`\[ X \not\subseteq Y \]`, L`لأن العنصر \(b\) موجود في \(X\) ولكنه غير موجود في \(Y\). (المجموعة الكبيرة لا تكون جزئية من الصغيرة إلا إذا تساووا).`],
                        [L`ما علاقة المجموعة الخالية بالـمجموعة \( \{1, 2, 3\} \)؟`, L`\[ \phi \subseteq \{1, 2, 3\} \]`, L`المجموعة الخالية \(\phi\) هي مجموعة جزئية من أي مجموعة أخرى (بما في ذلك نفسها).`],
                        [L`هل \( \{5\} \subseteq \{1, 3, 5\} \)؟`, L`نعم، \( \{5\} \subseteq \{1, 3, 5\} \)`, L`هنا نقارن مجموعة بمجموعة. بما أن العنصر 5 الموجود في المجموعة الأولى موجود في الثانية، فالعلاقة صحيحة. (لاحظ الفرق عن \(5 \in \{... \}\)).`],
                        [L`لتكن <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">X = { <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">ب</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">ر</span> }</span> (حروف كلمة بر)،<br> و <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">Y = { <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">ب</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">ح</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">ر</span> }</span> (حروف كلمة بحر).<br> هل \( X \subseteq Y \)؟`, L`\[ X \subseteq Y \]`, L`نعم، لأن كل عنصر في \(X\) (الباء والراء) موجود في \(Y\).`]
                    ]
                },
                {
                    title: 'التقاطع', page: 'التقاطع.html',
                    ex: [
                        [L`إذا كانت \( A = \{1, 2, 3, 4\} \) و \( B = \{3, 4, 5, 6\} \)، فأوجد \( A \cap B \).`, L`\( A \cap B = \{3, 4\} \)`, L`العناصر 3 و 4 هي العناصر الموجودة في \(A\) وموجودة أيضاً في \(B\) في نفس الوقت.`],
                        [L`إذا كانت \( X = \{2, 4, 6\} \) و \( Y = \{1, 3, 5\} \)، فأوجد \( X \cap Y \).`, L`\( X \cap Y = \phi \) (أو \(\{\}\))`, L`لا يوجد أي عنصر مشترك بين المجموعتين (مجموعتان منفصلتان).`],
                        [L`لتكن \( K = \{ \text{أ}, \text{ب}, \text{ج} \} \) و \( L = \{ \text{أ}, \text{ب} \} \). أحسب \( K \cap L \).`, L`\( K \cap L = \{ \text{أ}, \text{ب} \} \)`, L`نلاحظ أن المجموعة \(L\) محتواة بالكامل في \(K\)، لذا فالتقاطع هو المجموعة الصغيرة \(L\) نفسها.`],
                        [L`أوجد تقاطع المجموعة \( \{1, 5, 9\} \) مع المجموعة الخالية \( \phi \).`, L`\( \{1, 5, 9\} \cap \phi = \phi \)`, L`تقاطع أي مجموعة مع المجموعة الخالية هو المجموعة الخالية دائماً، لعدم وجود عناصر مشتركة.`],
                        [L`لتكن <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">S = {<span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أحمد</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">علي</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">سعد</span>}</span><br> و <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">R = {<span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">سعد</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">فهد</span>}</span>.<br> أوجد \( S \cap R \).`, L`\( S \cap R =\) { <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">سعد</span> }`, L`الاسم "سعد" هو العنصر الوحيد المشترك بين المجموعتين.`]
                    ]
                },
                {
                    title: 'الاتحاد', page: 'الاتحاد.html',
                    ex: [
                        [L`إذا كانت \( A = \{1, 2\} \) و \( B = \{3, 4\} \)، فأوجد \( A \cup B \).`, L`\( A \cup B = \{1, 2, 3, 4\} \)`, L`قمنا بوضع جميع عناصر \(A\) وعناصر \(B\) في مجموعة واحدة جديدة.`],
                        [L`إذا كانت \( X = \{1, 2, 3\} \) و \( Y = \{2, 3, 4\} \)، فأوجد \( X \cup Y \).`, L`\( X \cup Y = \{1, 2, 3, 4\} \)`, L`نلاحظ أن العنصرين 2 و 3 مشتركان. عند الاتحاد، نكتبهما مرة واحدة فقط؛ فالتكرار ممنوع داخل المجموعة.`],
                        [L`ما هو اتحاد المجموعة \( \{5, 10\} \) مع المجموعة الخالية \( \phi \)؟`, L`\( \{5, 10\} \cup \phi = \{5, 10\} \)`, L`إضافة "لا شيء" (المجموعة الخالية) إلى أي مجموعة يبقيها كما هي.`],
                        [L`لتكن \( S = \{ \text{أ}, \text{ب} \} \). ما هو \( S \cup S \)؟`, L`\( S \cup S = \{ \text{أ}, \text{ب} \} = S \)`, L`اتحاد المجموعة مع نفسها يعطي المجموعة نفسها.`],
                        [L`لتكن <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">M = {<span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أحمر</span>}</span><br> و <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">N = {<span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أصفر</span>}</span>.<br> أوجد \( M \cup N \).`, L`<span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">\(M \cup N =\) { <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أحمر</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أصفر</span> }</span>`, L`النتيجة هي مجموعة الألوان التي تحتوي على عنصري المجموعتين معاً.`]
                    ]
                },
                {
                    title: 'الفرق', page: 'الفرق بين مجموعتين.html',
                    ex: [
                        [L`إذا كانت \( A = \{1, 2, 3, 4\} \) و \( B = \{3, 4, 5\} \)، فأوجد \( A - B \).`, L`\( A - B = \{1, 2\} \)`, L`العناصر 1 و 2 موجودة في \(A\) ولكنها غير موجودة في \(B\). أما 3 و 4 فهم موجودون في \(B\) لذا نستبعدهم.`],
                        [L`إذا كانت \( X = \{1, 2\} \) و \( Y = \{3, 4, 5\} \). أوجد \( X - Y \).`, L`\( X - Y = \{1, 2\} = X \)`, L`بما أن المجموعتين منفصلتان (لا يوجد عناصر مشتركة)، فإن طرح \(Y\) من \(X\) لا يغير شيئاً في \(X\).`],
                        [L`لتكن \( M = \{5, 6\} \) و \( N = \{4, 5, 6, 7\} \). أوجد \( M - N \).`, L`\( M - N = \phi \)`, L`جميع عناصر \(M\) موجودة بالفعل في \(N\)، لذا لم يتبق أي عنصر في \(M\) بعد استبعاد عناصر \(N\).`],
                        [L`أوجد \( A - \phi \) حيث \( A = \{1, 3, 5\} \).`, L`\( A - \phi = \{1, 3, 5\} = A \)`, L`طرح المجموعة الخالية (اللاشيء) من أي مجموعة لا يؤثر عليها.`],
                        [L`لتكن <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">S = {<span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أحمر</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أخضر</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أزرق</span>}</span><br> و <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">T = {<span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أحمر</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أصفر</span>}</span>.<br> أوجد \( S - T \).`, L`<span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">S - T = {<span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أخضر</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">أزرق</span>}</span>`, L`حذفنا "أحمر" لأنه موجود في \(T\). بقي لدينا "أخضر" و "أزرق".`]
                    ]
                },
                {
                    title: 'المتممة', page: 'المتممة.html',
                    ex: [
                        [L`إذا كانت المجموعة الشاملة \( U = \{1, 2, 3, 4, 5\} \) و \( A = \{1, 2\} \)، فأوجد \( A' \).`, L`\( A' = \{3, 4, 5\} \)`, L`حذفنا عناصر \(A\) (وهي 1 و 2) من المجموعة الشاملة \(U\)، فتبقى لدينا 3, 4, 5.`],
                        [L`لتكن \( U = \{ \text{أ}, \text{ب}, \text{ج}, \text{د} \} \) و \( B = \{ \text{أ}, \text{ج} \} \). أوجد متممة \( B \).`, L`<span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">B' = { <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">ب</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">د</span> }</span>`, L`العناصر الموجودة في \(U\) وليست في \(B\) هي "ب" و "د".`],
                        [L`إذا كانت \( U = \{1, 2, 3\} \) و \( C = \{1, 2, 3\} \). ما هي \( C' \)؟`, L`\( C' = \phi \)`, L`بما أن \(C\) تساوي المجموعة الشاملة \(U\) تماماً، لا يتبقى أي عنصر في الخارج، لذا المتممة هي المجموعة الخالية.`],
                        [L`إذا كانت \( U \) تمثل أيام الأسبوع السبعة، و \( D \) تمثل {الجمعة، السبت}. فإن \( D' \) تمثل:`, L`{الأحد، الإثنين، الثلاثاء، الأربعاء، الخميس}`, L`متممة أيام عطلة نهاية الأسبوع هي أيام العمل (بقية أيام الأسبوع).`],
                        [L`لتكن \( U = \{0, 1\} \) و \( E = \{0\} \). أوجد \( E' \).`, L`\( E' = \{1\} \)`, L`العنصر الوحيد الموجود في \(U\) وغير الموجود في \(E\) هو الرقم 1.`]
                    ]
                },
                {
                    title: 'الفرق التناظري', page: 'الفرق التناظري.html',
                    ex: [
                        [L`إذا كانت \( A = \{1, 2, 3\} \) و \( B = \{3, 4, 5\} \)، فأوجد \( A \oplus B \).`, L`\( A \oplus B = \{1, 2, 4, 5\} \)`, L`أخذنا العناصر غير المشتركة. حذفنا الرقم 3 لأنه موجود في المجموعتين، وأخذنا الباقي.`],
                        [L`إذا كانت \( X = \{1, 2\} \) و \( Y = \{3, 4\} \). أوجد \( X \oplus Y \).`, L`\( X \oplus Y = \{1, 2, 3, 4\} \)`, L`المجموعتان منفصلتان، لذا الفرق التناظري هو اتحادهما بالكامل، لأنه لا توجد عناصر مشتركة لنحذفها.`],
                        [L`لتكن \( E = \{ \text{أ}, \text{ب} \} \) و \( F = \{ \text{أ} \} \). أوجد \( E \oplus F \).`, L`\( E \oplus F = \{ \text{ب} \} \)`, L`العنصر "أ" مشترك وتم حذفه. العنصر "ب" موجود في \(E\) فقط. لا يوجد عناصر في \(F\) غير موجودة في \(E\).`],
                        [L`إذا كانت \( S = \{1, 5, 9\} \) و \( L = \{1, 5, 9\} \). أوجد \( S \oplus L \).`, L`\( S \oplus L = \phi \)`, L`المجموعتان متساويتان، لذا جميع العناصر مشتركة. لا يوجد أي عنصر ينفرد به طرف دون الآخر.`],
                        [L`لتكن <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">G = {<span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">شمس</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">قمر</span>}</span><br> و <span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">H = {<span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">قمر</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">نجوم</span>}</span>.<br> أوجد \( G \oplus H \).`, L`<span style="font-family: 'Times New Roman', serif; font-style: italic; font-size: 1.1em; direction: ltr; unicode-bidi: embed;">\(G \oplus H = \) {<span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">شمس</span>, <span dir="rtl" lang="ar" style="font-family: 'Tajawal', sans-serif; font-style: normal;">نجوم</span>}</span>`, L`"قمر" مشترك فحذفناه. أخذنا "شمس" (من \(G\) فقط) و "نجوم" (من \(H\) فقط).`]
                    ]
                },
                {
                    title: 'المجموعات العددية', page: 'المجموعات العددية.html',
                    ex: [
                        [L`هل العدد \(-5\) ينتمي إلى مجموعة الأعداد الطبيعية \(\mathbb{N}\)؟`, L`\[ -5 \notin \mathbb{N} \]`, L`مجموعة الأعداد الطبيعية \(\mathbb{N}\) تحتوي فقط على الأعداد الموجبة \(\{1, 2, 3, \dots\}\) (وفي بعض المراجع تشمل الصفر). لكنها بالتأكيد لا تشمل الأعداد السالبة.`],
                        [L`ما علاقة العدد \(0\) بمجموعة الأعداد الصحيحة \(\mathbb{Z}\)؟`, L`\[ 0 \in \mathbb{Z} \]`, L`الأعداد الصحيحة \(\mathbb{Z}\) تشمل الأعداد الموجبة والسالبة والصفر.`],
                        [L`هل الكسر \(\frac{1}{2}\) عدد صحيح؟`, L`\[ \frac{1}{2} \notin \mathbb{Z} \]`, L`\(\mathbb{Z}\) تحتوي فقط على الأعداد الكاملة (بدون كسور أو فواصل عشرية). \(\frac{1}{2}\) هو عدد نسبي (\(\mathbb{Q}\)).`],
                        [L`صنف العدد \(\sqrt{2}\). هل هو نسبي أم غير نسبي؟`, L`\( \sqrt{2} \in \bar{\mathbb{Q}} \quad \) غير نسبي`, L`لأنه لا يمكن كتابته على صورة كسر \(\frac{a}{b}\) حيث \(a, b\) أعداد صحيحة. تمثيله العشري غير منتهٍ وغير دوري.`],
                        [L`ما العلاقة بين \(\mathbb{N}\) (الطبيعية) و \(\mathbb{Z}\) (الصحيحة)؟`, L`\[ \mathbb{N} \subseteq \mathbb{Z} \]`, L`كل عدد طبيعي هو بالضرورة عدد صحيح. لذا \(\mathbb{N}\) مجموعة جزئية من \(\mathbb{Z}\).`],
                        [L`هل العدد \(\pi\) (باي) عدد حقيقي؟`, L`\[ \pi \in \mathbb{R} \]`, L`نعم، مجموعة الأعداد الحقيقية \(\mathbb{R}\) تشمل الأعداد النسبية وغير النسبية (مثل \(\pi\)).`],
                        [L`أوجد ناتج الاتحاد: \(\mathbb{Q} \cup \bar{\mathbb{Q}}\).`, L`\[ \mathbb{Q} \cup \bar{\mathbb{Q}} = \mathbb{R} \]`, L`اتحاد مجموعة الأعداد النسبية مع مجموعة الأعداد غير النسبية يشكل مجموعة الأعداد الحقيقية بالكامل.`],
                        [L`ما هو التقاطع بين الأعداد الصحيحة الموجبة \(\mathbb{Z}^+\) والأعداد الصحيحة السالبة \(\mathbb{Z}^-\)؟`, L`\[ \mathbb{Z}^+ \cap \mathbb{Z}^- = \phi \]`, L`لا يوجد عدد هو موجب وسالب في آنٍ واحد. (الصفر ليس موجباً ولا سالباً).`],
                        [L`هل \( \{ \frac{2}{3}, 0.5 \} \subseteq \mathbb{Z} \)؟`, L`\[ \{ \frac{2}{3}, 0.5 \} \not\subseteq \mathbb{Z} \]`, L`هذه المجموعة تحتوي على كسور، والكسور ليست أعداداً صحيحة.`],
                        [L`أي من المجموعات التالية هي المجموعة الأكبر (الشاملة لباقي المجموعات المذكورة)؟<br> \(\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}\)`, L`\[ \mathbb{R} \]`, L`الأعداد الحقيقية \(\mathbb{R}\) تحتوي بداخلها على النسبية، والصحيحة، والطبيعية. \[ \mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \]`]
                    ]
                }
            ]
        },
        {
            id: 'u2', num: 2, title: 'العمليات الحسابية على الأعداد',
            topics: [
                {
                    title: 'ضرب الكسور', page: 'ضرب الكسور.html',
                    ex: [
                        [L`أوجد ناتج: \( \frac{3}{4} \times \frac{5}{7} \).`, L`\( \frac{3}{4} \times \frac{5}{7} = \frac{15}{28} \)`, L`نضرب البسط في البسط ( \(3 \times 5 = 15\)) والمقام في المقام ( \(4 \times 7 = 28\) ). لا يوجد تبسيط للكسر الناتج.`],
                        [L`أوجد ناتج: \( \frac{2}{3} \times \frac{3}{8} \).`, L`\( \frac{2}{3} \times \frac{3}{8} = \frac{6}{24} = \frac{1}{4} \)`, L`نضرب البسط في البسط والمقام في المقام، ثم نبسط الكسر بقسمة الطرفين على \( 6 \). (أو نختصر الـ \( 3 \) مع الـ \( 3 \) قبل الضرب).`],
                        [L`أوجد ناتج: \( 5 \times \frac{2}{9} \).`, L`\( 5 \times \frac{2}{9} = \frac{10}{9} \)`, L`نعتبر مقام العدد الصحيح هو \( 1 \)، فتصبح المسألة \( \frac{5}{1} \times \frac{2}{9} \). نضرب \( 5 \) في \( 2 \) و \( 1 \) في \( 9 \).`],
                        [L`أوجد ناتج: \( \frac{-2}{5} \times \frac{4}{3} \).`, L`\( \frac{-2}{5} \times \frac{4}{3} = \frac{-8}{15} \)`, L`نراعي قواعد الإشارات: سالب في موجب يعطي سالباً. ثم نضرب البسط في البسط والمقام في المقام.`],
                        [L`أوجد ناتج: \( \frac{-1}{2} \times \frac{-3}{4} \).`, L`\( \frac{-1}{2} \times \frac{-3}{4} = \frac{3}{8} \)`, L`سالب في سالب يعطي موجباً. نضرب \( 1 \) في \( 3 \) و \( 2 \) في \( 4 \).`]
                    ]
                },
                {
                    title: 'قسمة الكسور', page: 'قسمة الكسور.html',
                    ex: [
                        [L`أوجد ناتج: \( \frac{2}{3} \div \frac{5}{7} \).`, L`\( \frac{2}{3} \div \frac{5}{7} = \frac{2}{3} \times \frac{7}{5} = \frac{14}{15} \)`, L`قمنا بتثبيت الكسر الأول (\( \frac{2}{3} \))، وتحويل القسمة إلى ضرب، ثم قلبنا الكسر الثاني (\( \frac{5}{7} \rightarrow \frac{7}{5} \)).`],
                        [L`أوجد ناتج: \( \frac{3}{5} \div 2 \).`, L`\( \frac{3}{5} \div \frac{2}{1} = \frac{3}{5} \times \frac{1}{2} = \frac{3}{10} \)`, L`نعتبر مقام العدد الصحيح هو \( 1 \) (\( 2 = \frac{2}{1} \))، ثم نضربه في مقلوبه (\( \frac{1}{2} \)).`],
                        [L`أوجد ناتج: \( 4 \div \frac{1}{2} \).`, L`\( 4 \times \frac{2}{1} = 8 \)`, L`ضربنا العدد \( 4 \) في مقلوب النصف وهو \( 2 \)، فكان الناتج \( 8 \).`],
                        [L`أوجد ناتج: \( \frac{-3}{4} \div \frac{2}{3} \).`, L`\( \frac{-3}{4} \times \frac{3}{2} = \frac{-9}{8} \)`, L`نحتفظ بإشارة الكسر الأول، ونضربه في مقلوب الثاني. (سالب \(\times\) موجب \(=\) سالب).`],
                        [L`أوجد ناتج: \( \frac{-2}{5} \div \frac{-4}{5} \).`, L`\( \frac{-2}{5} \times \frac{-5}{4} = \frac{10}{20} = \frac{1}{2} \)`, L`سالب في سالب يعطي موجباً. اختصرنا الـ \( 5 \) مع الـ \( 5 \) وبسطنا الناتج النهائي.`]
                    ]
                },
                {
                    title: 'جمع وطرح الكسور (1)', page: 'جمع وطرح الكسور (مقامات متساوية).html',
                    ex: [
                        [L`أوجد ناتج الجمع: \( \frac{2}{5} + \frac{1}{5} \).`, L`\( \frac{2}{5} + \frac{1}{5} = \frac{2+1}{5} = \frac{3}{5} \)`, L`المقامات متساوية (العدد \( 5 \))، لذا نجمع البسطين مباشرة: \( 2 + 1 = 3 \).`],
                        [L`أوجد ناتج الطرح: \( \frac{7}{8} - \frac{3}{8} \).`, L`\( \frac{7}{8} - \frac{3}{8} = \frac{4}{8} = \frac{1}{2} \)`, L`المقامات متساوية (\( 8 \))، نطرح البسطين: \( 7 - 3 = 4 \). ثم نبسط الكسر الناتج بقسمة الطرفين على \( 4 \).`],
                        [L`أوجد ناتج: \( \frac{1}{9} + \frac{2}{9} + \frac{1}{9} \).`, L`\( \frac{1+2+1}{9} = \frac{4}{9} \)`, L`بما أن المقامات الثلاثة متساوية، نجمع جميع البسوط معاً ونحتفظ بالمقام \( 9 \).`],
                        [L`أوجد ناتج: \( \frac{3}{10} - \frac{9}{10} \).`, L`\( \frac{3-9}{10} = \frac{-6}{10} = \frac{-3}{5} \)`, L`\( 3 \) ناقص \( 9 \) يعطي \( -6 \). الناتج سالب لأن المطروح أكبر من المطروح منه. ولا ننسى التبسيط.`],
                        [L`أوجد ناتج: \( \frac{-2}{7} + \frac{5}{7} \).`, L`\( \frac{-2+5}{7} = \frac{3}{7} \)`, L`نجمع عددين بإشاريتين مختلفتين (\( -2 \) و \( 5 \)). نأخذ إشارة الأكبر ونطرح: \( 5 - 2 = 3 \).`]
                    ]
                },
                {
                    title: 'جمع وطرح الكسور (2)', page: 'جمع وطرح الكسور (مقامات غير متساوية).html',
                    ex: [
                        [L`أوجد ناتج: \( \frac{1}{2} + \frac{1}{3} \).`, L`\( \frac{(1 \times 3) + (1 \times 2)}{2 \times 3} = \frac{3+2}{6} = \frac{5}{6} \)`, L`ضربنا المقامين في بعضهما (\( 2 \times 3 = 6 \))، ثم ضربنا بسط الأول في مقام الثاني وبسط الثاني في مقام الأول.`],
                        [L`أوجد ناتج: \( \frac{3}{4} - \frac{1}{5} \).`, L`\( \frac{(3 \times 5) - (1 \times 4)}{4 \times 5} = \frac{15-4}{20} = \frac{11}{20} \)`, L`المقام المشترك هو \( 20 \). ضربنا \( 3 \) في \( 5 \) و \( 1 \) في \( 4 \) ثم طرحنا.`],
                        [L`أوجد ناتج: \( 2 + \frac{1}{3} \).`, L`\( \frac{2}{1} + \frac{1}{3} = \frac{6+1}{3} = \frac{7}{3} \)`, L`نعتبر مقام الـ \( 2 \) هو \( 1 \). ثم نوحد المقامات بضربها في \( 3 \).`],
                        [L`أوجد ناتج: \( \frac{1}{2} - \frac{3}{4} \).`, L`\( \frac{2-3}{4} = \frac{-1}{4} \)`, L`هنا يمكننا جعل المقام الأول \( 4 \) بضرب الكسر كله في \( 2 \)، فتصبح المسألة \( \frac{2}{4} - \frac{3}{4} \).`],
                        [L`أوجد ناتج: \( \frac{1}{5} + \frac{2}{3} \).`, L`\( \frac{3+10}{15} = \frac{13}{15} \)`, L`طبقنا طريقة المقص: \( 1 \times 3 = 3 \) و \( 2 \times 5 = 10 \). المقام المشترك \( 5 \times 3 = 15 \).`]
                    ]
                },
                {
                    title: 'جمع وطرح العشري', page: 'جمع وطرح الأعداد العشرية.html',
                    ex: [
                        [L`أوجد ناتج: \( 3.45 + 1.2 \).`, L`\( 3.45 + 1.20 = 4.65 \)`, L`أضفنا صفراً لـ \( 1.2 \) لتصبح \( 1.20 \)، وبذلك تساوت عدد الخانات بعد الفاصلة. ثم جمعنا الأرقام في كل خانة.`],
                        [L`أوجد ناتج: \( 8 - 4.75 \).`, L`\( 8.00 - 4.75 = 3.25 \)`, L`حولنا العدد الصحيح \( 8 \) إلى \( 8.00 \) ليسهل علينا عملية الاستلاف والطرح.`],
                        [L`أوجد ناتج: \( 0.25 + 0.75 \).`, L`\( 1.00 = 1 \)`, L`الجمع أعطى \( 1 \) صحيح. نلاحظ أن مجموع \( 25 \) قرشاً و \( 75 \) قرشاً هو ريال واحد كامل.`],
                        [L`أوجد ناتج: \( -1.5 - 2.3 \).`, L`\( -3.8 \)`, L`عند تشابه الإشارات (سالب، سالب)، نجمع الأعداد ونحتفظ بإشارة السالب.`],
                        [L`أوجد ناتج: \( 5.2 - 1.15 \).`, L`\( 5.20 - 1.15 = 4.05 \)`, L`وحدنا الخانات العشرية فكانت \( 5.20 \) ناقص \( 1.15 \). الناتج \( 4.05 \).`]
                    ]
                },
                {
                    title: 'ضرب الأعداد العشرية', page: 'ضرب الأعداد العشرية.html',
                    ex: [
                        [L`أوجد ناتج: \( 0.5 \times 0.3 \).`, L`\( 0.5 \times 0.3 = 0.15 \)`, L`نضرب \( 5 \times 3 \) والناتج \( 15 \). بالضرب الرأسي (تخيل الأرقام بدون فواصل): <div style="direction: ltr; margin: 10px 0;"> \( \begin{array}{r} 5 \\ \times 3 \\ \hline 15 \end{array} \) </div> بما أن هناك خانة عشرية واحدة في كل عدد (المجموع خانتان)، نضع الفاصلة بعد رقمين من اليمين ليصبح \( 0.15 \).`],
                        [L`أوجد ناتج: \( 1.2 \times 4 \).`, L`\( 1.2 \times 4 = 4.8 \)`, L`نضرب \( 12 \) في \( 4 \) والناتج \( 48 \). بالضرب الرأسي: <div style="direction: ltr; margin: 10px 0;"> \( \begin{array}{r} 12 \\ \times 4 \\ \hline 48 \end{array} \) </div> نضع الفاصلة بعد خانة واحدة لأن العدد \( 1.2 \) يحتوي على خانة واحدة والـ \( 4 \) لا يحتوي على خانات.`],
                        [L`أوجد ناتج: \( 0.02 \times 0.6 \).`, L`\( 0.02 \times 0.6 = 0.012 \)`, L`نضرب \( 2 \) في \( 6 \) والناتج \( 12 \). <div style="direction: ltr; margin: 10px 0;"> \( \begin{array}{r} 2 \\ \times 6 \\ \hline 12 \end{array} \) </div> المجموع هو \( 3 \) خانات عشرية (خانتان في الأول وخانة في الثاني). لذا نضيف صفراً قبل الـ \( 12 \) لنحصل على \( 3 \) خانات: \( 0.012 \).`],
                        [L`أوجد ناتج: \( 1.5 \times 1.5 \).`, L`\( 1.5 \times 1.5 = 2.25 \)`, L`نضرب \( 15 \times 15 \) والناتج \( 225 \). بالضرب الرأسي: <div style="direction: ltr; margin: 10px 0;"> \( \begin{array}{r} 15 \\ \times 15 \\ \hline 75 \\ + 150 \\ \hline 225 \end{array} \) </div> نضع الفاصلة بعد منزلتين عشريتين ليصبح الناتج \( 2.25 \).`],
                        [L`أوجد ناتج: \( 0.1 \times 0.001 \).`, L`\( 0.0001 \)`, L`نضرب \( 1 \) في \( 1 \) وهو \( 1 \). مجموع الخانات هو \( 4 \) (خانة \(+\) \( 3 \) خانات). لذا نضع \( 3 \) أصفار قبل الرقم \( 1 \).`]
                    ]
                },
                {
                    title: 'قسمة الأعداد العشرية', page: 'قسمة الأعداد العشرية.html',
                    ex: [
                        [L`أوجد ناتج: \( 0.8 \div 0.2 \).`, L`\( 8 \div 2 = 4 \)`, L`ضربنا الطرفين في \( 10 \) للتخلص من الفواصل، فأصبحت \( 8 \) تقسيم \( 2 \) والناتج \( 4 \).`],
                        [L`أوجد ناتج: \( 6.4 \div 0.08 \).`, L`\( 640 \div 8 = 80 \)`, L`بما أن المقسوم عليه لديه منزلتان، نضرب الطرفين في \( 100 \). تصبح المسألة \( 640 \div 8 \). بالقسمة المطولة: <div style="direction: ltr; margin: 10px 0;"> \( \begin{array}{r} 80 \\ 8 \overline{) 640} \\ \underline{-64\phantom{0}} \\ 00 \end{array} \) </div> الناتج النهائي هو \( 80 \).`],
                        [L`أوجد ناتج: \( 5 \div 0.5 \).`, L`\( 50 \div 5 = 10 \)`, L`ضربنا الطرفين في \( 10 \)، فصار لدينا \( 50 \) تقسيم \( 5 \).`],
                        [L`أوجد ناتج: \( 1.2 \div 4 \).`, L`\( 0.3 \)`, L`المقسوم عليه عدد صحيح. نقسم \( 12 \div 4 = 3 \). بالقسمة المطولة (تخيلها كـ \( 12 \div 4 \)): <div style="direction: ltr; margin: 10px 0;"> \( \begin{array}{r} 3 \\ 4 \overline{) 12} \\ \underline{-12} \\ 0 \end{array} \) </div> ثم نضع الفاصلة بعد خانة واحدة كما في المقسوم الأصل ليصبح الناتج \( 0.3 \).`],
                        [L`أوجد ناتج: \( 0.015 \div 0.3 \).`, L`\( 0.15 \div 3 = 0.05 \)`, L`نضرب الطرفين في \( 10 \) تصبح \( 0.15 \div 3 \). بالقسمة المطولة (تخيلها كـ \( 15 \div 3 \)): <div style="direction: ltr; margin: 10px 0;"> \( \begin{array}{r} 5 \\ 3 \overline{) 15} \\ \underline{-15} \\ 0 \end{array} \) </div> بما أننا نقسم \( 0.15 \)， نضع الفاصلة في مكانها ليصبح الناتج \( 0.05 \).`]
                    ]
                },
                {
                    title: 'تقريب الأعداد', page: 'تقريب الأعداد العشرية.html',
                    ex: [
                        [L`قرب العدد \( 12.348 \) لأقرب جزء من عشرة.`, L`\( 12.3 \)`, L`الخانة المراد تقريبها هي الـ \( 3 \). الرقم على يمينها هو \( 4 \) (أقل من \( 5 \) ), لذا يبقى الـ \( 3 \) كما هو ونحذف ما بعده.`],
                        [L`قرب العدد \( 7.852 \) لأقرب جزء من عشرة.`, L`\( 7.9 \)`, L`الرقم على يمين الـ \( 8 \) هو \( 5 \). وبما أنه \( 5 \)، نضيف \( 1 \) للـ \( 8 \) لتصبح \( 9 \).`],
                        [L`قرب العدد \( 3.996 \) لأقرب جزء من مئة.`, L`\( 4.00 \)`, L`الرقم على يمين الـ \( 9 \) الثانية هو \( 6 \) (أكبر من \( 5 \)). نضيف \( 1 \) للـ \( 9 \) فتصبح \( 10 \) (صفر وباليد واحد)، وهكذا حتى نحصل على \( 4.00 \).`],
                        [L`قرب العدد \( 15.7 \) لأقرب عدد صحيح.`, L`\( 16 \)`, L`ننظر لأول رقم بعد الفاصلة وهو \( 7 \) (أكبر من \( 5 \))، لذا نضيف \( 1 \) للعدد \( 15 \) ليصبح \( 16 \).`],
                        [L`قرب العدد \( 0.444 \) لأقرب جزء من مئة.`, L`\( 0.44 \)`, L`الرقم الثالث بعد الفاصلة هو \( 4 \) (أقل من \( 5 \))، لذا نحذفه ويبقى ما قبله كما هو.`]
                    ]
                },
                {
                    title: 'خصائص الأعداد', page: 'خصائص الأعداد الحقيقية.html',
                    ex: [
                        [L`ما النظير الجمعي للعدد \( -5 \).`, L`\( 5 \)`, L`النظير الجمعي هو العدد نفسه بإشارة مخالفة. وبما أن العدد سالب، نظيره موجب.`],
                        [L`ما النظير الضربي للعدد \( \frac{3}{4} \).`, L`\( \frac{4}{3} \)`, L`النظير الضربي هو مقلوب الكسر (البسط يصبح مقاماً والمقام يصبح بسطاً).`],
                        [L`ما هي الخاصية الموضحة في: \( 2 + (3 + 4) = (2 + 3) + 4 \).`, L`خاصية التجميع (Associative Property)`, L`نلاحظ أن ترتيب الأرقام لم يتغير، ولكن طريقة تجميعها بالأقواس هي التي تغيرت، وهذا ما يميز خاصية التجميع.`],
                        [L`ما هي الخاصية الموضحة في: \( 5 \times (x + 2) = 5x + 10 \).`, L`خاصية التوزيع (Distributive Property)`, L`ضربنا العدد \( 5 \) في كل من الـ \( x \) والـ \( 2 \) داخل القوس، وهذا يسمى توزيع الضرب على الجمع.`],
                        [L`ما النظير الضربي للعدد \( -2 \).`, L`\( -\frac{1}{2} \)`, L`نعتبر الـ \( 2 \) مقامه \( 1 \) (\( \frac{-2}{1} \))، ومقلوبه هو \( \frac{1}{-2} \) أو \( -\frac{1}{2} \).`]
                    ]
                },
                {
                    title: 'ترتيب العمليات', page: 'ترتيب العمليات الحسابية.html',
                    ex: [
                        [L`احسب: \( 12 - 3 \times 2 \).`, L`\( 12 - 6 = 6 \)`, L`الضرب له أولوية على الطرح، لذا ضربنا \( 3 \) في \( 2 \) أولاً.`],
                        [L`احسب: \( (5 + 4) \times 2 \).`, L`\( 9 \times 2 = 18 \)`, L`الأقواس لها أعلى أولوية، لذا جمعنا \( 5 \) و \( 4 \) أولاً قبل الضرب.`],
                        [L`احسب: \( 20 \div 2 \times 5 \).`, L`\( 10 \times 5 = 50 \)`, L`الضرب والقسمة لهما نفس الأولوية، لذا نبدأ من اليسار بالقسمة أولاً ثم الضرب.`],
                        [L`احسب: \( 4 \times 3^2 - 10 \).`, L`\( 4 \times 9 - 10 = 36 - 10 = 26 \)`, L`بدأنا بالأس (\( 3^2=9 \))، ثم الضرب، وأخيراً الطرح.`],
                        [L`احسب: \( \frac{10 + 2 \times 5}{4} \).`, L`\( \frac{10 + 10}{4} = \frac{20}{4} = 5 \)`, L`نعتبر البسط كمجموعة بداخل أقواس مختفية. ضربنا \( 2 \) في \( 5 \)، ثم جمعنا \( 10 \)، وفي الأخير قسمنا على \( 4 \).`]
                    ]
                }
            ]
        },
        {
            id: 'u3', num: 3, title: 'كثيرات الحدود',
            topics: [
                {
                    title: 'الحد الجبري ودرجته', page: 'كثيرة الحدود ودرجتها .html',
                    ex: [
                        [L`ما هو معامل ودرجة الحد الجبري: \( 5x^3 \)؟`, L`<div class="answer-line">المعامل: 5</div><div class="answer-line">الدرجة: 3</div>`, L`المعامل هو العدد المضروب في المتغير (\( 5 \)). أما الدرجة فهي أس المتغير \( x \)، وهو هنا \( 3 \).`],
                        [L`ما هو معامل ودرجة الحد الجبري: \( -2a^2b^3 \)؟`, L`<div class="answer-line">المعامل: \(-2\)</div><div class="answer-line">الدرجة: \(5\)</div>`, L`المعامل هو الثابت \( -2 \). الدرجة تُحسب بجمع أسس المتغيرات: \( 2 \) (للـ \( a \)) \( + \) \( 3 \) (للـ \( b \)) \( 5= \).`],
                        [L`ما هي درجة الحد الثابت: \( 7 \)؟`, L`<div class="answer-line">الدرجة: \(0\)</div>`, L`أي عدد ثابت درجته دائمًا صفر، لأننا يمكن اعتباره مضروبًا في متغير مرفوع للأس صفر (مثلاً \( 7x^0 \)).`],
                        [L`ما هو معامل الحد الجبري: \( y \)؟`, L`<div class="answer-line">الدرجة: \(1\)</div>`, L`عندما يظهر المتغير وحده، يكون المعامل ضمنيًا هو \( 1 \)، والأس (الدرجة) هو أيضًا \( 1 \).`],
                        [L`ما هي درجة الحد الجبري: \( -x^2yz \)؟`, L`<div class="answer-line">الدرجة: \(4\)</div>`, L`نجمع الأسس: \( 2 \) (للـ \( x \)) \( + \) \( 1 \) (للـ \( y \)) \( + \) \( 1 \) (للـ \( z \)) \( = 4 \). المعامل هنا هو \( -1 \).`],
                        [L`أوجد المعامل الرئيس، الدرجة، والثابت لكثيرة الحدود: \(4x^3 - 2x + 7\).`, L`<div class="answer-line">معامل الرئيس: \(4\)</div><div class="answer-line">الدرجة: \(3\)</div><div class="answer-line">الثابت: \(7\)</div>`, L`أعلى درجة هي \(3\) من الحد \(4x^3\) لذا معامل الرئيس هو \(4\). الثابت هو الحد غير المتغير وهو \(7\).`],
                        [L`أوجد المعامل الرئيس، الدرجة، والثابت لكثيرة الحدود: \(-5x^4y + 3xy^2 - 2\).`, L`<div class="answer-line">معامل الرئيس: \(-5\)</div><div class="answer-line">الدرجة: \(5\)</div><div class="answer-line">الثابت: \(-2\)</div>`, L`الحد ذو أعلى مجموع أسس هو \(-5x^4y\) (درجة \(4+1=5\)) لذا معامل الرئيس \(-5\). الثابت هو \(-2\).`],
                        [L`أوجد المعامل الرئيس، الدرجة، والثابت لكثيرة الحدود: \(2a^2b^3 + 6ab - 9\).`, L`<div class="answer-line">معامل الرئيس: \(2\)</div><div class="answer-line">الدرجة: \(5\)</div><div class="answer-line">الثابت: \(-9\)</div>`, L`أعلى درجة هي من الحد \(2a^2b^3\) (درجة \(2+3=5\)) لذا معامل الرئيس \(2\). الثابت هو \(-9\).`],
                        [L`أوجد المعامل الرئيس، الدرجة، والثابت لكثيرة الحدود: \(x^5 - 4x^3 + x - 1\).`, L`<div class="answer-line">معامل الرئيس: \(1\)</div><div class="answer-line">الدرجة: \(5\)</div><div class="answer-line">الثابت: \(-1\)</div>`, L`الحد ذو أعلى درجة هو \(x^5\) لذا معامل الرئيس \(1\) والدرجة \(5\). الثابت هو \(-1\).`],
                        [L`أوجد المعامل الرئيس، الدرجة، والثابت لكثيرة الحدود: \(-3\).`, L`<div class="answer-line">معامل الرئيس: \(-3\)</div><div class="answer-line">الدرجة: \(0\)</div><div class="answer-line">الثابت: \(-3\)</div>`, L`الحد الوحيد هو ثابت \(-3\) لذا الدرجة \(0\) ومعامل الرئيس هو \(-3\) وهو نفسه الثابت.`]
                    ]
                },
                {
                    title: 'جمع وطرح كثيرات الحدود', page: 'جمع وطرح كثيرات الحدود.html',
                    ex: [
                        [L`أوجد ناتج: \( (3x + 5) + (2x - 1) \)؟`, L`\( 5x + 4 \)`, L`نجمع الحدود المتشابهة: <div style="direction: ltr; margin: 10px 0;"> \( (3x + 2x) + (5 - 1) = 5x + 4 \) </div>`],
                        [L`أوجد ناتج: \( (4x^2 - 3x + 2) + (x^2 + 5x - 7) \)؟`, L`\( 5x^2 + 2x - 5 \)`, L`نجمع معاملات الحدود من نفس الدرجة: <ul><li>التربيعية: \( 4x^2 + x^2 = 5x^2 \)</li><li>الخطية: \( -3x + 5x = 2x \)</li><li>الثوابت: \( 2 - 7 = -5 \)</li></ul>`],
                        [L`أوجد ناتج الطرح: \( (x^2 + 4x) - (3x^2 - x) \)؟`, L`\( -2x^2 + 5x \)`, L`نوزع إشارة السالب على القوس الثاني أولاً: <div style="direction: ltr; margin: 10px 0;"> \( x^2 + 4x - 3x^2 + x \) </div> ثم نجمع الحدود المتشابهة: <div style="direction: ltr; margin: 10px 0;"> \( (1 - 3)x^2 + (4 + 1)x = -2x^2 + 5x \) </div>`],
                        [L`بسط المقدار: \( 2(3x^2 + 1) + (x^2 - 4) \)؟`, L`\( 7x^2 - 2 \)`, L`نضرب الـ \( 2 \) في القوس الأول أولاً: \( 6x^2 + 2 \). ثم نجمع الناتج مع القوس الثاني: \( (6x^2 + x^2) + (2 - 4) = 7x^2 - 2 \).`],
                        [L`أوجد ناتج: \( (a + b) - (a - b) \)؟`, L`\( 2b \)`, L`بتوزيع السالب: \( a + b - a + b \). الـ \( a \) تذهب مع \( -a \)، ويتبقى \( b + b = 2b \).`]
                    ]
                },
                {
                    title: 'ضرب كثيرات الحدود', page: 'ضرب كثيرات الحدود.html',
                    ex: [
                        [L`أوجد ناتج: \( (2x) \cdot (4x^2) \)؟`, L`\( 8x^3 \)`, L`نضرب المعاملات (\( 2 \cdot 4 = 8 \)) ونجمع أسس \( x \) (\( 1 + 2 = 3 \)). <div style="direction: ltr; margin: 10px 0;"> \( 2x^1 \cdot 4x^2 = 8x^{1+2} = 8x^3 \) </div>`],
                        [L`أوجد ناتج: \( 3x(x + 5) \)؟`, L`\( 3x^2 + 15x \)`, L`نوزع \( 3x \) على ما بداخل القوس: <ul><li>\( 3x \cdot x = 3x^2 \)</li><li>\( 3x \cdot 5 = 15x \)</li></ul>`],
                        [L`أوجد ناتج: \( (x + 2)(x - 3) \)؟`, L`\( x^2 - x - 6 \)`, L`نوزع حدود القوس الأول على الثاني: <div style="direction: ltr; margin: 10px 0;"> \( x(x - 3) + 2(x - 3) = x^2 - 3x + 2x - 6 \) </div> بتجميع الحدود المتشابهة (\( -3x + 2x = -x \))، يصبح الناتج \( x^2 - x - 6 \).`],
                        [L`أوجد ناتج: \( -2y^2(3y - 4) \)؟`, L`\( -6y^3 + 8y^2 \)`, L`انتبه لإشارة السالب عند التوزيع: <ul><li>\( -2y^2 \cdot 3y = -6y^3 \)</li><li>\( -2y^2 \cdot (-4) = +8y^2 \)</li></ul>`],
                        [L`أوجد ناتج: \( (2x + 1)(3x^2 - x) \)؟`, L`\( 6x^3 + x^2 - x \)`, L`نوزع: <div style="direction: ltr; margin: 10px 0;"> \( 2x(3x^2 - x) + 1(3x^2 - x) = (6x^3 - 2x^2) + (3x^2 - x) \) </div> بجمع الحدود المتشابهة: \( 6x^3 + x^2 - x \).`]
                    ]
                },
                {
                    title: 'قسمة كثيرات الحدود', page: 'قسمة كثيرات الحدود.html',
                    ex: [
                        [L`اقسم \( x^2 + 5x + 6 \) على \( x + 2 \).`, L`الناتج: \( x + 3 \) والباقي 0`, L`<div style="text-align: center;"><div class="long-div-container"><div class="ld-grid"><div class="ld-quotient science-term">x + 3</div><div class="ld-divisor">x + 2</div><div class="ld-dividend">x² + 5x + 6</div></div><div class="ld-steps"><div class="ld-row">-(x² + 2x)</div><div class="ld-line"></div><div class="ld-row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x + 6</div><div class="ld-row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-(3x + 6)</div><div class="ld-line"></div><div class="ld-row science-term"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</div></div></div></div>`],
                        [L`اقسم \( 2x^2 + 7x - 15 \) على \( x + 5 \).`, L`الناتج: \( 2x - 3 \) والباقي 0`, L`<div style="text-align: center;"><div class="long-div-container"><div class="ld-grid"><div class="ld-quotient science-term">2x - 3</div><div class="ld-divisor">x + 5</div><div class="ld-dividend">2x² + 7x - 15</div></div><div class="ld-steps"><div class="ld-row">-(2x² +10x)</div><div class="ld-line"></div><div class="ld-row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-3x - 15</div><div class="ld-row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-(-3x - 15)</div><div class="ld-line"></div><div class="ld-row science-term"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 </div></div></div></div>`],
                        [L`اقسم \( x^3 - 1 \) على \( x - 1 \).`, L`الناتج: \( x^2 + x + 1 \)`, L`<div style="text-align: center;"><div class="long-div-container"><div class="ld-grid"><div class="ld-quotient science-term">x² + x + 1</div><div class="ld-divisor">x - 1</div><div class="ld-dividend">x³ + 0x² + 0x - 1</div></div><div class="ld-steps"><div class="ld-row">-(x³ - x²)</div><div class="ld-line"></div><div class="ld-row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x² + 0x</div><div class="ld-row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-(x² - x)</div><div class="ld-line"></div><div class="ld-row"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x - 1</div><div class="ld-row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-(x - 1) </div><div class="ld-line"></div><div class="ld-row science-term"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0 </div></div></div></div>`]
                    ]
                },
                {
                    title: 'المتطابقات الجبرية', page: 'المتطابقات الجبرية الشهيرة.html',
                    ex: [
                        [L`فك المقدار: \( (x + 3)(x - 3) \)؟`, L`\( x^2 - 9 \)`, L`نستخدم قانون فرق المربعين \( (a+b)(a-b) = a^2 - b^2 \). <div style="direction: ltr; margin: 10px 0;"> \( (x)^2 - (3)^2 = x^2 - 9 \) </div>`],
                        [L`فك المقدار: \( (x + 4)^2 \)؟`, L`\( x^2 + 8x + 16 \)`, L`نستخدم القانون \( (a+b)^2 = a^2 + 2ab + b^2 \): <ul><li>مربع الأول: \( x^2 \)</li><li>2 \(\times\) الأول \(\times\) الثاني: \( 2 \cdot x \cdot 4 = 8x \)</li><li>مربع الثاني: \( 4^2 = 16 \)</li></ul>`],
                        [L`فك المقدار: \( (2x - 5)^2 \)؟`, L`\( 4x^2 - 20x + 25 \)`, L`نستخدم القانون \( (a-b)^2 = a^2 - 2ab + b^2 \): <ul><li>مربع الأول: \( (2x)^2 = 4x^2 \)</li><li>2 \(\times\) الأول \(\times\) الثاني: \( 2 \cdot 2x \cdot 5 = 20x \) (مع إشارة سالب)</li><li>مربع الثاني: \( 5^2 = 25 \)</li></ul>`],
                        [L`فك المقدار: \( (x + 1)^3 \)؟`, L`\( x^3 + 3x^2 + 3x + 1 \)`, L`نستخدم القانون \( (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 \): <div style="direction: ltr; margin: 10px 0;"> \( x^3 + 3(x^2)(1) + 3(x)(1^2) + 1^3 = x^3 + 3x^2 + 3x + 1 \) </div>`],
                        [L`أوجد ناتج: \( (x+2)^2 - (x+2)(x-2) \)؟`, L`\( 4x + 8 \)`, L`فك الطرفين أولاً: <ul><li>\( (x+2)^2 = x^2 + 4x + 4 \)</li><li>\( (x+2)(x-2) = x^2 - 4 \)</li></ul> الآن نطرح (مع توزيع السالب): \( (x^2 + 4x + 4) - (x^2 - 4) = x^2 + 4x + 4 - x^2 + 4 = 4x + 8 \).`]
                    ]
                },
                {
                    title: 'العامل المشترك الأكبر', page: 'التحليل بالعامل المشترك الأكبر.html',
                    ex: [
                        [L`حلل المقدار: \( 4x + 8 \)؟`, L`\( 4(x + 2) \)`, L`العدد \( 4 \) هو أكبر عدد يقبل القسمة عليه كلا الحدين. نخرجه كعامل مشترك ونقسم عليه كل حد.`],
                        [L`حلل المقدار: \( 3x^2 - 6x \)؟`, L`\( 3x(x - 2) \)`, L`العامل المشترك هنا هو \( 3 \) (أكبر عدد) و \( x \) (أصغر أس للمتغير). نقسم: \( 3x^2 \div 3x = x \) و \( 6x \div 3x = 2 \).`],
                        [L`حلل المقدار: \( 5a^3b^2 + 10a^2b^4 \)؟`, L`\( 5a^2b^2 (a + 2b^2) \)`, L`نخرج \( 5 \) كعامل عددي، و \( a^2 \) و \( b^2 \) كعوامل حرفية (لأنهما الأسس الأصغر).`],
                        [L`حلل المقدار: \( x^4 - x^2 \)؟`, L`\( x^2(x^2 - 1) \)`, L`العامل المشترك هو \( x^2 \). (ملاحظة: المقدار \( x^2-1 \) يمكن تحليله أكثر كفرق مربعين).`],
                        [L`حلل المقدار: \( 12y^5 + 8y^3 - 4y^2 \)؟`, L`\( 4y^2(3y^3 + 2y - 1) \)`, L`أكبر عدد يقسم الـ 12 و 8 و 4 هو \( 4 \). وأصغر أس لـ \( y \) هو \( 2 \).`]
                    ]
                },
                {
                    title: 'تحليل فرق المربعين', page: 'تحليل فرق المربعين.html',
                    ex: [
                        [L`حلل المقدار: \( x^2 - 25 \)؟`, L`\( (x - 5)(x + 5) \)`, L`الجذر التربيعي لـ \( x^2 \) هو \( x \)، والجذر لـ \( 25 \) هو \( 5 \).`],
                        [L`حلل المقدار: \( y^2 - 1 \)؟`, L`\( (y - 1)(y + 1) \)`, L`العدد \( 1 \) هو مربع كامل لـ \( 1 \). نفتح القوسين ونوزع الجذور.`],
                        [L`حلل المقدار: \( 4x^2 - 9 \)؟`, L`\( (2x - 3)(2x + 3) \)`, L`جذر \( 4x^2 \) هو \( 2x \)، وجذر \( 9 \) هو \( 3 \).`],
                        [L`حلل المقدار: \( 100 - a^2 \)؟`, L`\( (10 - a)(10 + a) \)`, L`انتبه لترتيب الحدود، نبدأ بجذر الـ \( 100 \) وهو \( 10 \).`],
                        [L`حلل تماماً: \( 2x^2 - 18 \)؟`, L`\( 2(x - 3)(x + 3) \)`, L`أولاً نخرج \( 2 \) كعامل مشترك لتصبح \( 2(x^2 - 9) \). ثم نحلل ما بداخل القوس كفرق مربعين.`]
                    ]
                },
                {
                    title: 'المقدار الثلاثي (1)', page: 'تحليل المقدار الثلاثي (الحالة الأولى).html',
                    ex: [
                        [L`حلل: \( x^2 + 5x + 6 \)؟`, L`\( (x + 2)(x + 3) \)`, L`نبحث عن عددين ضربهما \( 6 \) وجمعهما \( 5 \). العددان هما \( 2 \) و \( 3 \).`],
                        [L`حلل: \( x^2 - 6x + 8 \)؟`, L`\( (x - 2)(x - 4) \)`, L`ضربهما \( +8 \) وجمعهما \( -6 \). بما أن الجمع سالب والضرب موجب، فالعددان سالبان: \( -2 \) و \( -4 \).`],
                        [L`حلل: \( x^2 + x - 12 \)؟`, L`\( (x + 4)(x - 3) \)`, L`ضربهما \( -12 \) وجمعهما \( +1 \). العددان مختلفان في الإشارة: \( 4 \) و \( -3 \).`],
                        [L`حلل: \( x^2 - 10x + 25 \)؟`, L`\( (x - 5)(x - 5) = (x - 5)^2 \)`, L`ضربهما \( 25 \) وجمعهما \( -10 \). العددان هما \( -5 \) و \( -5 \). نلاحظ أنه مربع كامل.`],
                        [L`حلل المقدار: \( x^2 - x - 2 \)؟`, L`\( (x - 2)(x + 1) \)`, L`ضربهما \( -2 \) وجمعهما \( -1 \). العددان هما \( -2 \) و \( +1 \).`]
                    ]
                },
                {
                    title: 'المقدار الثلاثي (2)', page: 'تحليل المقدار الثلاثي (الحالة الثانية).html',
                    ex: [
                        [L`حلل: \( 3x^2 + 5x + 2 \)؟`, L`\( (3x + 2)(x + 1) \)`, L`نبحث عن عددين ضربهما \( 3 \) (للمعامل الرئيسي) وعددين ضربهما \( 2 \) (للحد الثابت)، بحيث يكون مجموع حاصل ضرب الطرفين والوسطين هو \( 5x \). <div style="direction: ltr; margin: 10px 0;"> \( (3x \cdot 1) + (2 \cdot x) = 3x + 2x = 5x \) </div>`],
                        [L`حلل: \( 2x^2 + 7x + 3 \)؟`, L`\( (2x + 1)(x + 3) \)`, L`الوسطان \( 1x \)، والطرفان \( 6x \). المجموع \( 1x + 6x = 7x \).`],
                        [L`حلل: \( 5x^2 - 13x - 6 \)؟`, L`\( (5x + 2)(x - 3) \)`, L`حاصل ضرب الطرفين (\( 5x \cdot -3 = -15x \)) والوسطين (\( 2 \cdot x = 2x \)). المجموع: \( -15x + 2x = -13x \).`],
                        [L`حلل: \( 4x^2 + 8x + 3 \)؟`, L`\( (2x + 1)(2x + 3) \)`, L`هنا جربنا تحليل الـ \( 4x^2 \) إلى \( 2x \cdot 2x \). الوسطان \( 2x \) والطرفان \( 6x \). المجموع \( 8x \).`],
                        [L`حلل بالتجربة: \( 2x^2 - 5x + 2 \)؟`, L`\( (2x - 1)(x - 2) \)`, L`ضربهما \( +2 \) وجمعهما سالب، فالعددان سالبان. الطرفان \( -4x \) والوسطان \( -x \). المجموع \( -5x \).`]
                    ]
                },
                {
                    title: 'تبسيط الكسور الجبرية', page: 'تبسيط الكسور الجبرية.html',
                    ex: [
                        [L`بسط الكسر: \( \frac{x^2 - 9}{x + 3} \)؟`, L`\( x - 3 \)`, L`نحلل البسط كفرق مربعين: \( (x - 3)(x + 3) \). نحذف \( (x + 3) \) من البسط والمقام، فيتبقى \( x - 3 \).`],
                        [L`بسط الكسر: \( \frac{x^2 + 5x + 6}{x + 2} \)؟`, L`\( x + 3 \)`, L`نحلل البسط (\( a=1 \)): نبحث عن ضربهما \( 6 \) وجمعهما \( 5 \)، فتصبح \( \frac{(x + 2)(x + 3)}{x + 2} \). نحذف العامل المشترك.`],
                        [L`بسط الكسر: \( \frac{2x - 4}{x^2 - 4} \)؟`, L`\( \frac{2}{x + 2} \)`, L`نخرج عامل مشترك من البسط: \( 2(x - 2) \). نحلل المقام كفرق مربعين: \( (x - 2)(x + 2) \). نحذف \( (x - 2) \).`],
                        [L`بسط الكسر: \( \frac{x^2 - x - 2}{x^2 - 1} \)؟`, L`\( \frac{x - 2}{x - 1} \)`, L`نحلل البسط إلى \( (x - 2)(x + 1) \) والمقام إلى \( (x - 1)(x + 1) \). نحذف \( (x + 1) \).`],
                        [L`بسط: \( \frac{2x^2 + 5x + 2}{x + 2} \)؟`, L`\( 2x + 1 \)`, L`نحلل البسط (\( a \neq 1 \)) إلى \( (2x + 1)(x + 2) \). نحذف \( (x + 2) \) فيتبقى \( 2x + 1 \).`]
                    ]
                }
            ]
        },
        {
            id: 'u4', num: 4, title: 'المصفوفات والمحددات',
            topics: [
                {
                    title: 'أنواع المصفوفات', page: 'انواع المصفوفات.html',
                    ex: [
                        [L`ما نوع المصفوفة \( A = \begin{bmatrix} 5 &amp; -2 &amp; 4 \end{bmatrix} \)؟`, L`مصفوفة صف`, L`لأنها تتكون من صف واحد فقط وعدة أعمدة. رتبتها \(1 \times 3\).`],
                        [L`ما نوع المصفوفة \( B = \begin{bmatrix} 7 \\ 0 \\ -1 \end{bmatrix} \)؟`, L`مصفوفة عمود`, L`لأنها تتكون من عمود واحد فقط وعدة صفوف. رتبتها \(3 \times 1\).`],
                        [L`ما نوع المصفوفة \( C = \begin{bmatrix} 2 &amp; 9 \\ 1 &amp; 5 \end{bmatrix} \)؟`, L`مصفوفة مربعة`, L`المصفوفة المربعة هي التي يتساوى فيها عدد الصفوف مع عدد الأعمدة. هنا الرتبة \(2 \times 2\).`],
                        [L`المصفوفة \( Z = \begin{bmatrix} 0 &amp; 0 &amp; 0 \\ 0 &amp; 0 &amp; 0 \end{bmatrix} \) تسمى:`, L`مصفوفة صفرية`, L`لأن جميع عناصرها أصفار. ويرمز لها بالرمز \( O \).`],
                        [L`المصفوفة \( D = \begin{bmatrix} 3 &amp; 0 &amp; 0 \\ 0 &amp; 5 &amp; 0 \\ 0 &amp; 0 &amp; -2 \end{bmatrix} \) تسمى:`, L`مصفوفة قطرية`, L`هي مصفوفة مربعة جميع عناصرها أصفار ما عدا عناصر القطر الرئيسي (التي قد تكون أي أرقام).`],
                        [L`المصفوفة \( I = \begin{bmatrix} 1 &amp; 0 \\ 0 &amp; 1 \end{bmatrix} \) تمثل:`, L`مصفوفة الوحدة`, L`هي مصفوفة مربعة جميع عناصرها أصفار ما عدا القطر الرئيسي يساوي 1. ويرمز لها بالرمز \(I\).`]
                    ]
                },
                {
                    title: 'رتبة المصفوفة', page: 'رتبة المصفوفة.html',
                    ex: [
                        [L`لتكن المصفوفة \( A = \begin{bmatrix} 2 &amp; 1 \\ -3 &amp; 6 \\ 5 &amp; 0 \end{bmatrix} \). <br> أوجد رتبة المصفوفة \(A\) وقيمة العنصر \(a_{31}\).`, L`الرتبة: \(3 \times 2\)، والعنصر \(a_{31} = 5\)`, L`<ul><li>المصفوفة لها 3 صفوف و 2 أعمدة، إذن الرتبة هي \(3 \times 2\).</li><li>العنصر \(a_{31}\) يقع في الصف الثالث والعمود الأول، وهو الرقم 5.</li></ul>`],
                        [L`لتكن المصفوفة \( B = \begin{bmatrix} 4 &amp; 7 &amp; -1 &amp; 0 \end{bmatrix} \). <br> أوجد رتبتها وقيمة العنصر \(b_{13}\).`, L`الرتبة: \(1 \times 4\)، والعنصر \(b_{13} = -1\)`, L`<ul><li>تتكون من صف واحد و 4 أعمدة، لذا الرتبة \(1 \times 4\).</li><li>العنصر \(b_{13}\) يقع في الصف الأول والعمود الثالث، وهو \(-1\).</li></ul>`],
                        [L`إذا كانت \( C = \begin{bmatrix} 2 &amp; 5 \\ 8 &amp; -3 \end{bmatrix} \). <br> ما رتبة المصفوفة وما قيمة \(c_{22}\)؟`, L`الرتبة: \(2 \times 2\)، والعنصر \(c_{22} = -3\)`, L`<ul><li>عدد الصفوف 2 وعدد الأعمدة 2.</li><li> العنصر \(c_{22}\) يقع في الصف الثاني والعمود الثاني.</li></ul>`],
                        [L`لتكن المصفوفة \( D = \begin{bmatrix} 1 \\ 9 \\ 4 \end{bmatrix} \). <br> أوجد رتبتها والعنصر \(d_{21}\).`, L`الرتبة: \(3 \times 1\)، والعنصر \(d_{21} = 9\)`, L`<ul><li>لها 3 صفوف وعمود واحد.</li><li>العنصر \(d_{21}\) هو العنصر الموجود في الصف الثاني والعمود الأول.</li></ul>`],
                        [L`لتكن المصفوفة \( E = \begin{bmatrix} 5 \end{bmatrix} \). <br> أوجد رتبتها والعنصر \(e_{11}\).`, L`الرتبة: \(1 \times 1\)، والعنصر \(e_{11} = 5\)`, L`هذه مصفوفة تتكون من صف واحد وعمود واحد (عنصر واحد فقط).`]
                    ]
                },
                {
                    title: 'جمع وطرح المصفوفات', page: 'جمع وطرح المصفوفات.html',
                    ex: [
                        [L`أوجد ناتج: \[ \begin{bmatrix} 2 &amp; 5 \\ 3 &amp; -1 \end{bmatrix} + \begin{bmatrix} 1 &amp; 0 \\ 4 &amp; 2 \end{bmatrix} \]`, L`\( \begin{bmatrix} 3 &amp; 5 \\ 7 &amp; 1 \end{bmatrix} \)`, L`نجمع العناصر المتناظرة: \[ 2+1=3, \quad 5+0=5, \quad 3+4=7, \quad -1+2=1 \]`],
                        [L`أوجد ناتج: \[ \begin{bmatrix} 5 &amp; 8 \\ 1 &amp; 4 \end{bmatrix} - \begin{bmatrix} 2 &amp; 3 \\ 1 &amp; 6 \end{bmatrix} \]`, L`\( \begin{bmatrix} 3 &amp; 5 \\ 0 &amp; -2 \end{bmatrix} \)`, L`نطرح العناصر المتناظرة: \[ 5-2=3, \quad 8-3=5, \quad 1-1=0, \quad 4-6=-2 \]`],
                        [L`هل يمكن جمع \( \begin{bmatrix} 1 &amp; 2 \end{bmatrix} \) مع \( \begin{bmatrix} 1 \\ 2 \end{bmatrix} \)؟`, L`لا يمكن`, L`المصفوفة الأولى رتبتها \(1 \times 2\) والمصفوفة الثانية \(2 \times 1\). لكي نجمع يجب أن تتساوي الرتب تماماً.`],
                        [L`أوجد ناتج جمع المصفوفتين \( 3 \times 3 \): <br> \[ \begin{bmatrix} 1 &amp; 2 &amp; 3 \\ 4 &amp; 5 &amp; 6 \\ 7 &amp; 8 &amp; 9 \end{bmatrix} + \begin{bmatrix} 9 &amp; 8 &amp; 7 \\ 6 &amp; 5 &amp; 4 \\ 3 &amp; 2 &amp; 1 \end{bmatrix} \]`, L`\( \begin{bmatrix} 10 &amp; 10 &amp; 10 \\ 10 &amp; 10 &amp; 10 \\ 10 &amp; 10 &amp; 10 \end{bmatrix} \)`, L`نجمع كل عنصر مع نظيره في المصفوفة الأخرى: \[ 1+9=10, \ 2+8=10, \dots \text{وهكذا لجميع العناصر.} \]`]
                    ]
                },
                {
                    title: 'ضرب وقسمة المصفوفة بعدد', page: 'ضرب وقسمة المصفوفة بعدد.html',
                    ex: [
                        [L`إذا كانت \( A = \begin{bmatrix} 3 &amp; -2 \\ 0 &amp; 1 \end{bmatrix} \)، أوجد \( 2A \).`, L`\( \begin{bmatrix} 6 &amp; -4 \\ 0 &amp; 2 \end{bmatrix} \)`, L`نضرب العدد 2 في كل عنصر من عناصر المصفوفة: \[ 2 \times 3 = 6, \quad 2 \times -2 = -4, \quad 2 \times 0 = 0, \quad 2 \times 1 = 2 \]`],
                        [L`أوجد ناتج: \( -3 \begin{bmatrix} 1 &amp; 5 \\ -2 &amp; 4 \end{bmatrix} \)`, L`\( \begin{bmatrix} -3 &amp; -15 \\ 6 &amp; -12 \end{bmatrix} \)`, L`نوزع العدد -3 على جميع العناصر (انتبه لقاعدة الإشارات): \[ (-3)(1)=-3, \ (-3)(5)=-15, \ (-3)(-2)=6, \ (-3)(4)=-12 \]`],
                        [L`إذا كانت \( B = \begin{bmatrix} 4 &amp; 8 \\ 12 &amp; -6 \end{bmatrix} \)، أوجد \( \frac{B}{2} \).`, L`\( \begin{bmatrix} 2 &amp; 4 \\ 6 &amp; -3 \end{bmatrix} \)`, L`قسمة المصفوفة على عدد تعني قسمة كل عنصر فيها على هذا العدد: \[ \frac{4}{2}=2, \ \frac{8}{2}=4, \ \frac{12}{2}=6, \ \frac{-6}{2}=-3 \]`],
                        [L`بسط المقدار: \( \frac{1}{3} \begin{bmatrix} 9 &amp; 0 \\ -3 &amp; 2 \end{bmatrix} \)`, L`\( \begin{bmatrix} 3 &amp; 0 \\ -1 &amp; \frac{2}{3} \end{bmatrix} \)`, L`الضرب في \( \frac{1}{3} \) يكافئ القسمة على 3.`]
                    ]
                },
                {
                    title: 'ضرب صف في عمود', page: 'ضرب صف في عمود.html',
                    ex: [
                        [L`أوجد حاصل الضرب: \[ \begin{bmatrix} 2 &amp; 3 \end{bmatrix} \begin{bmatrix} 4 \\ 5 \end{bmatrix} \]`, L`\([23]\)`, L`نضرب العنصر الأول في الأول، والثاني في الثاني، ثم نجمع: \[ (2 \times 4) + (3 \times 5) = 8 + 15 = 23 \]`],
                        [L`أوجد حاصل الضرب: \[ \begin{bmatrix} -1 &amp; 0 &amp; 2 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \\ 1 \end{bmatrix} \]`, L`\([-1]\)`, L`<strong>الشرح (3 عناصر):</strong> \[ (-1 \times 3) + (0 \times 4) + (2 \times 1) \] \[ = -3 + 0 + 2 = -1 \]`],
                        [L`هل يمكن ضرب: \[ \begin{bmatrix} 1 &amp; 2 \end{bmatrix} \begin{bmatrix} 3 \\ 4 \\ 5 \end{bmatrix} \]`, L`لا يمكن`, L`عدد عناصر الصف (2) لا يساوي عدد عناصر العمود (3). لكي تتم عملية الضرب يجب أن يتساوى عدد الأعمدة في الأولى مع عدد الصفوف في الثانية.`],
                        [L`احسب ما يلي: \[ \begin{bmatrix} 5 &amp; -2 \end{bmatrix} \begin{bmatrix} 1 \\ 6 \end{bmatrix} \]`, L`\([-7]\)`, L`\[ (5 \times 1) + (-2 \times 6) = 5 + (-12) = -7 \]`],
                        [L`أوجد الناتج: \[ \begin{bmatrix} 4 &amp; 0 &amp; -1 &amp; 3 \end{bmatrix} \begin{bmatrix} 2 \\ 5 \\ -3 \\ 1 \end{bmatrix} \]`, L`\([14]\)`, L`\[ (4 \times 2) + (0 \times 5) + (-1 \times -3) + (3 \times 1) \] \[ = 8 + 0 + 3 + 3 = 14 \]`]
                    ]
                },
                {
                    title: 'ضرب المصفوفات', page: 'ضرب مصفوفة في مصفوفة.html',
                    ex: [
                        [L`إذا كانت \( A = \begin{bmatrix} 1 &amp; 2 \\ 3 &amp; 4 \end{bmatrix} \) و \( B = \begin{bmatrix} 2 &amp; 0 \\ 1 &amp; 2 \end{bmatrix} \)، أوجد \( AB \).`, L`\( \begin{bmatrix} 4 &amp; 4 \\ 10 &amp; 8 \end{bmatrix} \)`, L`<ul><li>الصف 1 في العمود 1: \((1)(2) + (2)(1) = 2 + 2 = 4\)</li><li>الصف 1 في العمود 2: \((1)(0) + (2)(2) = 0 + 4 = 4\)</li><li>الصف 2 في العمود 1: \((3)(2) + (4)(1) = 6 + 4 = 10\)</li><li>الصف 2 في العمود 2: \((3)(0) + (4)(2) = 0 + 8 = 8\)</li></ul>`],
                        [L`أوجد حاصل ضرب: \[ \begin{bmatrix} 2 &amp; 1 \end{bmatrix} \begin{bmatrix} 1 &amp; -1 \\ 0 &amp; 2 \end{bmatrix} \]`, L`\( \begin{bmatrix} 2 &amp; 0 \end{bmatrix} \)`, L`المصفوفتان رتبتهما \(1 \times 2\) و \(2 \times 2\). الناتج سيكون \(1 \times 2\). <ul><li>العنصر الأول: \((2)(1) + (1)(0) = 2\)</li><li>العنصر الثاني: \((2)(-1) + (1)(2) = -2 + 2 = 0\)</li></ul>`],
                        [L`هل يمكن ضرب المصفوفة \( A_{2 \times 3} \) في المصفوفة \( B_{2 \times 3} \)؟`, L`لا`, L`لأن عدد أعمدة الأولى (3) لا يساوي عدد صفوف الثانية (2).`],
                        [L`أوجد \( AC \) إذا كانت \( A = \begin{bmatrix} 1 &amp; 0 \\ 0 &amp; 1 \end{bmatrix} \) و \( C = \begin{bmatrix} 5 &amp; 2 \\ 3 &amp; 4 \end{bmatrix} \).`, L`\( \begin{bmatrix} 5 &amp; 2 \\ 3 &amp; 4 \end{bmatrix} \)`, L`المصفوفة \( A \) هي مصفوفة الوحدة \( I \)، ومن خصائصها أن ضربها في أي مصفوفة يعطي نفس المصفوفة.`],
                        [L`أوجد \( A^2 \) حيث \( A = \begin{bmatrix} 2 &amp; 0 \\ 0 &amp; 2 \end{bmatrix} \).`, L`\( \begin{bmatrix} 4 &amp; 0 \\ 0 &amp; 4 \end{bmatrix} \)`, L`\( A^2 \) تعني \( A \times A \). \[ \begin{bmatrix} 2 &amp; 0 \\ 0 &amp; 2 \end{bmatrix} \begin{bmatrix} 2 &amp; 0 \\ 0 &amp; 2 \end{bmatrix} = \begin{bmatrix} 4 &amp; 0 \\ 0 &amp; 4 \end{bmatrix} \]`]
                    ]
                },
                {
                    title: 'المحددات', page: 'المحددات.html',
                    ex: [
                        [L`احسب قيمة المحدد: \[ \begin{vmatrix} 4 &amp; 5 \\ 3 &amp; 6 \end{vmatrix} \]`, L`\(9\)`, L`نضرب القطر الرئيسي ناقص القطر الفرعي: \[ (4 \times 6) - (5 \times 3) = 24 - 15 = 9 \]`],
                        [L`احسب المحدد التالي: \[ \begin{vmatrix} -2 &amp; 3 \\ 4 &amp; 1 \end{vmatrix} \]`, L`\(-14\)`, L`\[ (-2 \times 1) - (3 \times 4) = -2 - 12 = -14 \]`],
                        [L`احسب قيمة محدد المصفوفة الصفرية \( \begin{vmatrix} 0 &amp; 0 \\ 0 &amp; 0 \end{vmatrix} \).`, L`\(0\)`, L``],
                        [L`إذا كان \( \begin{vmatrix} x &amp; 2 \\ 5 &amp; 3 \end{vmatrix} = 2 \)، فما قيمة \(x\)؟`, L`\(4\)`, L`\[ (x)(3) - (2)(5) = 2 \] \[ 3x - 10 = 2 \implies 3x = 12 \implies x = 4 \]`],
                        [L`احسب محدد مصفوفة الوحدة \( I_3 = \begin{bmatrix} 1 &amp; 0 &amp; 0 \\ 0 &amp; 1 &amp; 0 \\ 0 &amp; 0 &amp; 1 \end{bmatrix} \).`, L`\(1\)`, L`محدد مصفوفة الوحدة دائماً يساوي 1، بغض النظر عن رتبتها.`]
                    ]
                },
                {
                    title: 'معكوس المصفوفة', page: 'مقلوب المصفوفة.html',
                    ex: [
                        [L`أوجد معكوس المصفوفة \( A = \begin{bmatrix} 4 &amp; 7 \\ 2 &amp; 6 \end{bmatrix} \).`, L`\( \begin{bmatrix} 0.6 &amp; -0.7 \\ -0.2 &amp; 0.4 \end{bmatrix} \)`, L`<ol><li>نحسب المحدد: \( |A| = (4)(6) - (7)(2) = 24 - 14 = 10 \).</li><li>نبدل عناصر القطر الرئيسي ونغير إشارة القطر الفرعي: \( \begin{bmatrix} 6 &amp; -7 \\ -2 &amp; 4 \end{bmatrix} \).</li><li>نقسم على المحدد: \( \frac{1}{10} \begin{bmatrix} 6 &amp; -7 \\ -2 &amp; 4 \end{bmatrix} = \begin{bmatrix} 0.6 &amp; -0.7 \\ -0.2 &amp; 0.4 \end{bmatrix} \).</li></ol>`],
                        [L`هل للمصفوفة \( B = \begin{bmatrix} 3 &amp; 6 \\ 2 &amp; 4 \end{bmatrix} \) معكوس؟`, L`لا يوجد معكوس`, L`نحسب المحدد: \( |B| = (3)(4) - (6)(2) = 12 - 12 = 0 \). بما أن المحدد يساوي صفر، فإن المصفوفة ليس لها معكوس (مصفوفة شاذة).`],
                        [L`أوجد معكوس مصفوفة الوحدة \( I = \begin{bmatrix} 1 &amp; 0 \\ 0 &amp; 1 \end{bmatrix} \).`, L`\( \begin{bmatrix} 1 &amp; 0 \\ 0 &amp; 1 \end{bmatrix} \)`, L`معكوس مصفوفة الوحدة هو مصفوفة الوحدة نفسها.`],
                        [L`أوجد \( A^{-1} \) إذا كانت \( A = \begin{bmatrix} 2 &amp; 0 \\ 0 &amp; 5 \end{bmatrix} \).`, L`\( \begin{bmatrix} 0.5 &amp; 0 \\ 0 &amp; 0.2 \end{bmatrix} \)`, L`للمصفوفة القطرية، المعكوس هو مقلوب عناصر القطر الرئيسي. \[ 1/2 = 0.5, \quad 1/5 = 0.2 \]`],
                        [L`إذا كان \( A = \begin{bmatrix} 1 &amp; 2 \\ 3 &amp; 4 \end{bmatrix} \)، فتحقق أن \( A \cdot A^{-1} = I \).`, L`صحيح`, L`حاصل ضرب أي مصفوفة في معكوسها (إذا وجد) يساوي دائماً مصفوفة الوحدة \(I\).`]
                    ]
                }
            ]
        },
        {
            id: 'u5', num: 5, title: 'المعادلات',
            topics: [
                {
                    title: 'معادلات الدرجة الأولى', page: 'معادلات الدرجة الأولى.html',
                    ex: [
                        [L`حل المعادلة: \( 3x - 5 = 16 \)`, L`\( x = 7 \)`, L`\[ 3x = 16 + 5 \implies 3x = 21 \implies x = \frac{21}{3} = 7 \]`],
                        [L`حل المعادلة: \( 2(x + 3) = 14 \)`, L`\( x = 4 \)`, L`نقسم الطرفين على 2: \( x + 3 = 7 \). <br> ثم نطرح 3 من الطرفين: \( x = 7 - 3 = 4 \).`],
                        [L`حل المعادلة: \( \frac{x}{4} + 2 = 5 \)`, L`\( x = 12 \)`, L`ننقل 2 للطرف الآخر: \( \frac{x}{4} = 3 \). <br> نضرب في 4: \( x = 3 \times 4 = 12 \).`],
                        [L`حل المعادلة: \( 5x + 3 = 2x + 18 \)`, L`\( x = 5 \)`, L`نجمع الحدود المتشابهة (المجاهيل في طرف والأعداد في طرف): <br> \( 5x - 2x = 18 - 3 \implies 3x = 15 \implies x = 5 \).`],
                        [L`حل المعادلة: \( 4(x - 1) + 2 = 3(x + 2) \)`, L`\( x = 8 \)`, L`نفك الأقواس: \( 4x - 4 + 2 = 3x + 6 \) <br> نبسط: \( 4x - 2 = 3x + 6 \) <br> ننقل المجاهيل: \( 4x - 3x = 6 + 2 \implies x = 8 \).`]
                    ]
                },
                {
                    title: 'المعادلات التربيعية', page: 'المعادلات التربيعية.html',
                    ex: [
                        [L`أوجد جذور المعادلة: \( x^2 - 5x + 6 = 0 \)`, L`\( x = 2, \quad x = 3 \)`, L`يمكن حلها بالتحليل: \( (x-2)(x-3) = 0 \). <br> أو بالقانون العام حيث \( \Delta = 25 - 24 = 1 \).`],
                        [L`حل المعادلة: \( x^2 - 4x + 4 = 0 \)`, L`\( x = 2 \) (حل مكرر)`, L`هذه معادلة مربع كامل: \( (x-2)^2 = 0 \implies x = 2 \). المميز هنا يساوي صفراً.`],
                        [L`حل المعادلة: \( 2x^2 - x - 3 = 0 \)`, L`\( x = -1, \quad x = 1.5 \)`, L`باستخدام القانون العام: \( a=2, b=-1, c=-3 \). \[ x = \frac{1 \pm \sqrt{1 - 4(2)(-3)}}{4} = \frac{1 \pm 5}{4} \]`],
                        [L`حل المعادلة: \( x^2 - 9 = 0 \)`, L`\( x = 3, \quad x = -3 \)`, L`فرق بين مربعين: \( (x-3)(x+3)=0 \). أو \( x^2 = 9 \implies x = \pm 3 \).`],
                        [L`حل المعادلة: \( x^2 + x - 12 = 0 \)`, L`\( x = 3, \quad x = -4 \)`, L`بالتحليل إلى عوامل: عددان حاصل ضربهما \(-12\) ومجموعهما \(+1\) هما \(4\) و \(-3\). \( (x+4)(x-3) = 0 \).`]
                    ]
                },
                {
                    title: 'المميز وعدد الحلول', page: 'المميز وعدد الحلول.html',
                    ex: [
                        [L`ما عدد حلول المعادلة: \( x^2 - 4x + 3 = 0 \)؟`, L`حلان حقيقيان مختلفان`, L`\( a=1, b=-4, c=3 \). <br> المميز \( \Delta = (-4)^2 - 4(1)(3) = 16 - 12 = 4 \). <br> بما أن \( \Delta &gt; 0 \)، إذن يوجد حلان.`],
                        [L`ما عدد حلول المعادلة: \( x^2 + 2x + 1 = 0 \)؟`, L`حل واحد حقيقي (مكرر)`, L`المميز \( \Delta = (2)^2 - 4(1)(1) = 4 - 4 = 0 \). <br> بما أن \( \Delta = 0 \)، إذن يوجد حل واحد فقط.`],
                        [L`ما عدد الحلول الحقيقية للمعادلة: \( x^2 + 1 = 0 \)؟`, L`لا يوجد حلول حقيقية`, L`المميز \( \Delta = 0^2 - 4(1)(1) = -4 \). <br> بما أن \( \Delta &lt; 0 \)، فلا توجد جذور حقيقية (الجذور تخيلية).`],
                        [L`حدد إشارة المميز للمعادلة: \( 3x^2 - 5x + 4 = 0 \)`, L`سالبة (\( \Delta &lt; 0 \))`, L`\( \Delta = (-5)^2 - 4(3)(4) = 25 - 48 = -23 \).`],
                        [L`إذا كان للمعادلة \( x^2 + kx + 9 = 0 \) حل واحد فقط، فما قيمة \( k \)؟`, L`\( k = 6 \) أو \( k = -6 \)`, L`شرط الحل الواحد هو \( \Delta = 0 \). <br> \( k^2 - 4(1)(9) = 0 \implies k^2 - 36 = 0 \implies k^2 = 36 \implies k = \pm 6 \).`]
                    ]
                },
                {
                    title: 'أنظمة خطية (كرايمر)', page: 'حل نظام خطي (كرايمر).html',
                    intro: L`<div class="definition"><p>لحل نظام من معادلتين خطيتين بالصورة:</p> \[ a_1x + b_1y = c_1 \], \[ a_2x + b_2y = c_2 \] <ol><li><strong>حساب محدد المصفوفة (D):</strong> \( D = \begin{vmatrix} a_1 &amp; b_1 \\ a_2 &amp; b_2 \end{vmatrix} = a_1b_2 - b_1a_2 \)</li><li><strong>حساب محدد (D_x):</strong> (استبدال عمود x بالثوابت) \( D_x = \begin{vmatrix} c_1 &amp; b_1 \\ c_2 &amp; b_2 \end{vmatrix} \)</li><li><strong>حساب محدد (D_y):</strong> (استبدال عمود y بالثوابت) \( D_y = \begin{vmatrix} a_1 &amp; c_1 \\ a_2 &amp; c_2 \end{vmatrix} \)</li><li><strong>إيجاد القيم:</strong> \( x = \frac{D_x}{D}, \quad y = \frac{D_y}{D} \quad (D \neq 0) \) </li></ol></div>`,
                    ex: [
                        [L`حل النظام التالي باستخدام قاعدة كرايمر: <br> \( 2x + 3y = 7 \) <br> \( x - y = 1 \)`, L`\( (x, y) = (2, 1) \)`, L`نحسب محدد المعاملات العام \( D \): <br> \( D = \begin{vmatrix} 2 &amp; 3 \\ 1 &amp; -1 \end{vmatrix} = -2 - 3 = -5 \)<br> نحسب محدد المجهول \( x \) باستبدال العمود الأول بالثوابت: <br> \( D_x = \begin{vmatrix} 7 &amp; 3 \\ 1 &amp; -1 \end{vmatrix} = -7 - 3 = -10 \)<br> نحسب محدد المجهول \( y \) باستبدال العمود الثاني بالثوابت: <br> \( D_y = \begin{vmatrix} 2 &amp; 7 \\ 1 &amp; 1 \end{vmatrix} = 2 - 7 = -5 \)<br> نوجد قيم المجاهيل بالقسمة على \( D \): <br> \( x = \frac{-10}{-5} = 2 \), \( y = \frac{-5}{-5} = 1 \)`],
                        [L`حل النظام باستخدام كرايمر: <br> \( 5x + 2y = 12 \) <br> \( 2x + y = 5 \)`, L`\( x = 2, \quad y = 1 \)`, L`نبدأ بحساب محدد المعاملات \( D \): <br> \( D = \begin{vmatrix} 5 &amp; 2 \\ 2 &amp; 1 \end{vmatrix} = 5 - 4 = 1 \)<br> نحسب \( D_x \) باستبدال عمود معاملات \( x \) بالثوابت: <br> \( D_x = \begin{vmatrix} 12 &amp; 2 \\ 5 &amp; 1 \end{vmatrix} = 12 - 10 = 2 \)<br> نحسب \( D_y \) باستبدال عمود معاملات \( y \) بالثوابت: <br> \( D_y = \begin{vmatrix} 5 &amp; 12 \\ 2 &amp; 5 \end{vmatrix} = 25 - 24 = 1 \)<br> نطبق القاعدة: <br> \( x = \frac{2}{1} = 2, \quad y = \frac{1}{1} = 1 \)`],
                        [L`ابحث في حل النظام التالي باستخدام قيمة المحدد \( D \): <br> \( 3x + y = 5 \) <br> \( 6x + 2y = 10 \)`, L`عدد لا نهائي من الحلول`, L`نحسب محدد المعاملات أولاً: <br> \( D = \begin{vmatrix} 3 &amp; 1 \\ 6 &amp; 2 \end{vmatrix} = 6 - 6 = 0 \)<br> نحسب محدد المجهول \( x \): <br> \( D_x = \begin{vmatrix} 5 &amp; 1 \\ 10 &amp; 2 \end{vmatrix} = 10 - 10 = 0 \)<br> بما أن \( D = 0 \) وجميع المحددات الأخرى \( D_x, D_y \) تساوي صفراً، فإن للنظام عدد لا نهائي من الحلول.`],
                        [L`حل النظام: <br> \( x + 2y = 4 \) <br> \( 3x - y = 5 \)`, L`\( x = 2, \quad y = 1 \)`, L`نحسب المحدد العام للمصفوفة: <br> \( D = \begin{vmatrix} 1 &amp; 2 \\ 3 &amp; -1 \end{vmatrix} = -1 - 6 = -7 \)<br> نحسب محدد المجهول \( x \): <br> \( D_x = \begin{vmatrix} 4 &amp; 2 \\ 5 &amp; -1 \end{vmatrix} = -4 - 10 = -14 \)<br> نحسب محدد المجهول \( y \): <br> \( D_y = \begin{vmatrix} 1 &amp; 4 \\ 3 &amp; 5 \end{vmatrix} = 5 - 12 = -7 \)<br> القسمة النهائية لإيجاد الحل: <br> \( x = \frac{-14}{-7} = 2, \quad y = \frac{-7}{-7} = 1 \)`],
                        [L`في نظام مكون من 3 معادلات خطية، إذا علمت أن محدد المعاملات \( D = 2 \) ومحدد المجهول \( z \) هو \( D_z = 6 \)، أوجد قيمة \( z \).`, L`\( z = 3 \)`, L`قاعدة كرايمر: \( z = \frac{D_z}{D} \)<br> \( z = \frac{6}{2} = 3 \)`]
                    ]
                },
                {
                    title: 'أنظمة خطية (المصفوفات)', page: 'حل نظام خطي (المصفوفات).html',
                    ex: [
                        [L`اكتب المعادلة المصفوفبة للنظام: <br> \( 2x + 3y = 9 \) <br> \( x - y = 2 \)`, L`\( \begin{bmatrix} 2 &amp; 3 \\ 1 &amp; -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 9 \\ 2 \end{bmatrix} \)`, L`مصفوفة المعاملات \( A \) في مصفوفة المجاهيل \( X \) تساوي مصفوفة الثوابت \( C \).`],
                        [L`إذا كانت مصفوفة المعاملات \( A \) لها معكوس \( A^{-1} \)، فما هو قانون حل النظام \( AX=C \)؟`, L`\( X = A^{-1}C \)`, L`نضرب طرفي المعادلة من اليسار في المعكوس الضربي \( A^{-1} \).`],
                        [L`حل النظام: \( \begin{cases} x+y=5 \\ x-y=1 \end{cases} \) باستخدام المصفوفات.`, L`\( \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 3 \\ 2 \end{bmatrix} \)`, L`\( A^{-1} = \frac{1}{-2} \begin{bmatrix} -1 &amp; -1 \\ -1 &amp; 1 \end{bmatrix} \). <br> \( X = A^{-1} \begin{bmatrix} 5 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 2 \end{bmatrix} \).`],
                        [L`لماذا لا يمكن حل النظام الذي محدده \( \Delta = 0 \) باستخدام طريقة المعكوس؟`, L`لأنه لا يوجد معكوس للمصفوفة`, L`شرط وجود المعكوس الضربي هو أن المحدد لا يساوي صفراً.`],
                        [L`إذا كان \( A^{-1} = \begin{bmatrix} 1 &amp; 0 \\ 0 &amp; 1 \end{bmatrix} \) و \( C = \begin{bmatrix} 4 \\ 7 \end{bmatrix} \)، فما قيمة \( X \)؟`, L`\( X = \begin{bmatrix} 4 \\ 7 \end{bmatrix} \)`, L`\( X = I \cdot C = C \).`]
                    ]
                }
            ]
        },
        {
            id: 'u6', num: 6, title: 'الهندسة المستوية والفراغية',
            topics: [
                {
                    title: 'المربع', page: 'المربع.html',
                    intro: L`<p><strong>مساحة المربع (Area):</strong> \( A = L \times L = L^2 \)</p><p><strong>محيط المربع (Perimeter):</strong> \( P = 4 \times L \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( L \) هو طول الضلع.</p>`,
                    ex: [
                        [L`مربع طول ضلعه \( 5 \, \text{cm} \). احسب مساحته.`, L`\( 25 \, \text{cm}^2 \)`, L`<ol><li>نحدد المعطيات: طول الضلع \( L = 5 \).</li><li>نكتب قانون المساحة: \( A = L \times L \).</li><li>نعوض بالقيمة: \( A = 5 \times 5 \).</li><li>الناتج: \( 25 \). الوحدة مربعة لذا \( \text{cm}^2 \).</li></ol>`],
                        [L`مربع طول ضلعه \( 6 \, \text{m} \). احسب محيطه.`, L`\( 24 \, \text{m} \)`, L`<ol><li>نحدد المعطيات: طول الضلع \( L = 6 \).</li><li>نكتب قانون المحيط: \( P = 4 \times L \).</li><li>نعوض بالقيمة: \( P = 4 \times 6 \).</li><li>الناتج: \( 24 \). الوحدة خطية لذا \( \text{m} \).</li></ol>`],
                        [L`مربع مساحته \( 49 \, \text{cm}^2 \). ما طول ضلعه؟`, L`\( 7 \, \text{cm} \)`, L`<ol><li>نعلم أن المساحة \( A = L^2 = 49 \).</li><li>لإيجاد الضلع \( L \)، نأخذ الجذر التربيعي للطرفين: \( L = \sqrt{49} \).</li><li>الناتج: \( 7 \). إذن طول الضلع 7 سم.</li></ol>`],
                        [L`مربع محيطه \( 20 \, \text{m} \). احسب مساحته.`, L`\( 25 \, \text{m}^2 \)`, L`<ol><li><strong>أولاً نجد طول الضلع:</strong> المحيط \( P = 4L = 20 \). نقسم على 4: \( L = 20/4 = 5 \, \text{m} \).</li><li><strong>ثانياً نحسب المساحة:</strong> نستخدم الضلع الناتج في قانون المساحة \( A = L^2 \). </li><li>التعويض: \( A = 5 \times 5 = 25 \, \text{m}^2 \).</li></ol>`],
                        [L`حديقة مربعة الشكل طول ضلعها \( 10 \, \text{m} \). يراد إحاطتها بسياج، إذا كان سعر المتر الواحد من السياج 15 ريالاً. فما تكلفة السياج؟`, L`\( 600 \) ريال`, L`<ol><li><strong>حساب طول السياج (المحيط):</strong> \( P = 4 \times L = 4 \times 10 = 40 \, \text{m} \).</li><li><strong>حساب التكلفة:</strong> التكلفة = طول السياج × سعر المتر.</li><li>التعويض: \( 40 \times 15 = 600 \).</li><li>إذن تكلفة السياج الكلية هي 600 ريال.</li></ol>`]
                    ]
                },
                {
                    title: 'المستطيل', page: 'المستطيل.html',
                    intro: L`<p><strong>مساحة المستطيل:</strong> \( A = L \times W \)</p><p><strong>محيط المستطيل:</strong> \( P = 2(L + W) \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( L \) الطول و \( W \) العرض.</p>`,
                    ex: [
                        [L`مستطيل طوله 8 cm وعرضه 3 cm. احسب مساحته.`, L`\( 24 \, \text{cm}^2 \)`, L`<ol><li>المعطيات: \( L = 8, W = 3 \).</li><li>القانون: \( A = L \times W \).</li><li>التعويض: \( A = 8 \times 3 \).</li><li>الناتج: \( 24 \, \text{cm}^2 \).</li></ol>`],
                        [L`مستطيل طوله 10 m وعرضه 5 m. احسب محيطه.`, L`\( 30 \, \text{m} \)`, L`<ol><li>المعطيات: \( L = 10, W = 5 \).</li><li>القانون: \( P = 2(L + W) \).</li><li>التعويض: \( P = 2(10 + 5) = 2(15) \).</li><li>الناتج: \( 30 \, \text{m} \).</li></ol>`],
                        [L`مستطيل مساحته \( 50 \, \text{cm}^2 \) وطوله \( 10 \, \text{cm} \). أوجد عرضه.`, L`\( 5 \, \text{cm} \)`, L`<ol><li>نعلم أن المساحة = الطول ×العرض .</li><li>إذن: العرض = المساحة ÷الطول</li><li>التعويض: \( W = 50 \div 10 \).</li><li>الناتج: \( 5 \, \text{cm} \).</li></ol>`],
                        [L`مستطيل محيطه \( 20 \, \text{m} \) وعرضه \( 4 \, \text{m} \). احسب طوله.`, L`\( 6 \, \text{m} \)`, L`<ol><li>قانون المحيط: \( 20 = 2(L + 4) \).</li><li>نقسم على 2: \( 10 = L + 4 \).</li><li>نطرح 4 من الطرفين: \( L = 10 - 4 \).</li><li>\( L = 6 \, \text{m} \).</li></ol>`],
                        [L`غرفة مستطيلة الشكل أبعادها \( 4 \times 5 \) متر. يراد فرشها بسجاد تكلفة المتر المربع منه 20 ريالاً. كم التكلفة الكلية؟`, L`\( 400 \) ريال`, L`<ol><li>نحتاج لحساب المساحة أولاً: \( A = 4 \times 5 = 20 \, \text{m}^2 \).</li><li>التكلفة = المساحة × سعر المتر المربع.</li><li>التكلفة = \( 20 \times 20 = 400 \) ريال.</li></ol>`]
                    ]
                },
                {
                    title: 'المثلث', page: 'المثلث.html',
                    intro: L`<p><strong>مساحة المثلث:</strong> \( A = \frac{1}{2} \times b \times h \)</p><p><strong>محيط المثلث:</strong> مجموع أطوال أضلاعه \( P =\)</p><hr style="border: 0; border-top: 1px solid rgba(33, 150, 243, 0.3); margin: 10px 0;"><p><strong>نظرية فيثاغورس (للمثلث القائم):</strong> \( c^2 = a^2 + b^2 \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( b \) طول القاعدة و \( h \) الارتفاع، و \( c \) الوتر في المثلث القائم.</p>`,
                    ex: [
                        [L`مثلث طول قاعدته \( 10 \, \text{cm} \) وارتفاعه \( 8 \, \text{cm} \). احسب مساحته.`, L`\( 40 \, \text{cm}^2 \)`, L`<ol><li>المعطيات: القاعدة \( b = 10 \)، الارتفاع \( h = 8 \).</li><li>القانون: المساحة = \( \frac{1}{2} \) × القاعدة × الارتفاع.</li><li>التعويض: \( A = 0.5 \times 10 \times 8 \).</li><li>الناتج: \( 5 \times 8 = 40 \, \text{cm}^2 \).</li></ol>`],
                        [L`مثلث أطوال أضلاعه \( 5 \, \text{m}, \ 6 \, \text{m}, \ 7 \, \text{m} \). احسب محيطه.`, L`\( 18 \, \text{m} \)`, L`<ol><li>المحيط هو مجموع أطوال الأضلاع الخارجية.</li><li>\( P = 5 + 6 + 7 \).</li><li>الناتج: \( 18 \, \text{m} \).</li></ol>`],
                        [L`مثلث مساحته \( 30 \, \text{cm}^2 \) وطول قاعدته \( 10 \, \text{cm} \). أوجد ارتفاعه.`, L`\( 6 \, \text{cm} \)`, L`<ol><li>نعلم أن المساحة = \( 0.5 \) × القاعدة × الارتفاع.</li><li>\( 30 = 0.5 \times 10 \times h \).</li><li>\( 30 = 5 \times h \).</li><li>نقسم على 5: \( h = 6 \, \text{cm} \).</li></ol>`],
                        [L`مثلث قائم الزاوية، طولا ضلعيه القائمين \( 3 \, \text{cm} \) و \( 4 \, \text{cm} \). احسب محيطه.`, L`\( 12 \, \text{cm} \)`, L`<ol><li>أولاً نجد طول الوتر باستخدام نظرية فيثاغورس: \( c = \sqrt{3^2 + 4^2} \).</li><li>\( c = \sqrt{9 + 16} = \sqrt{25} = 5 \, \text{cm} \).</li><li>الآن نحسب المحيط (مجموع الأضلاع): \( P = 3 + 4 + 5 = 12 \, \text{cm} \).</li></ol>`],
                        [L`قطعة أرض مثلثة الشكل قاعدتها \( 20 \, \text{m} \) وارتفاعها \( 15 \, \text{m} \). إذا كان سعر المتر المربع 100 ريال، فكم سعر الأرض؟`, L`\( 15,000 \) ريال`, L`<ol><li>نحسب مساحة الأرض: \( A = 0.5 \times 20 \times 15 \).</li><li>\( A = 10 \times 15 = 150 \, \text{m}^2 \).</li><li>السعر الإجمالي = المساحة × سعر المتر.</li><li>السعر = \( 150 \times 100 = 15,000 \) ريال.</li></ol>`]
                    ]
                },
                {
                    title: 'المعين', page: 'المعين.html',
                    intro: L`<p><strong>مساحة المعين (بدلالة القطرين):</strong> \( A = \frac{1}{2} \times d_1 \times d_2 \)</p><p><strong>محيط المعين:</strong> \( P = 4 \times L \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( d_1, d_2 \) هما طولا القطرين، و \( L \) طول الضلع. </p>`,
                    ex: [
                        [L`معين طولا قطريه \( 8 \, \text{cm} \) و \( 6 \, \text{cm} \). احسب مساحته.`, L`\( 24 \, \text{cm}^2 \)`, L`<ol><li>المعطيات: \( d_1 = 8 \)، \( d_2 = 6 \).</li><li>القانون: \( A = \frac{1}{2} \times d_1 \times d_2 \).</li><li>التعويض: \( A = 0.5 \times 8 \times 6 \).</li><li>الناتج: \( 4 \times 6 = 24 \, \text{cm}^2 \).</li></ol>`],
                        [L`معين طول ضلعه \( 5 \, \text{m} \). احسب محيطه.`, L`\( 20 \, \text{m} \)`, L`<ol><li>المعين أضلاعه متساوية مثل المربع.</li><li>القانون: \( P = 4 \times L \).</li><li>التعويض: \( P = 4 \times 5 = 20 \, \text{m} \).</li></ol>`],
                        [L`معين مساحته \( 40 \, \text{cm}^2 \) وطول أحد قطريه \( 10 \, \text{cm} \). أوجد طول القطر الآخر.`, L`\( 8 \, \text{cm} \)`, L`<ol><li>القانون: \( A = 0.5 \times d_1 \times d_2 \).</li><li>\( 40 = 0.5 \times 10 \times d_2 \).</li><li>\( 40 = 5 \times d_2 \).</li><li>نقسم على 5: \( d_2 = 8 \, \text{cm} \).</li></ol>`],
                        [L`معين محيطه \( 24 \, \text{m} \) وارتفاعه (المسافة العمودية بين ضلعين متقابلين) \( 5 \, \text{m} \). احسب مساحته.`, L`\( 30 \, \text{m}^2 \)`, L`<ol><li>أولاً نجد طول الضلع: \( L = P \div 4 = 24 \div 4 = 6 \, \text{m} \).</li><li>بما أن المعين متوازي أضلاع، فمساحته أيضاً = القاعدة (الضلع) × الارتفاع.</li><li>\( A = L \times h = 6 \times 5 = 30 \, \text{m}^2 \).</li></ol>`],
                        [L`قطعة زجاج على شكل معين طولا قطريه \( 40 \, \text{cm} \) و \( 30 \, \text{cm} \). يراد شراء إطار يحيط بها. كم يجب أن يكون طول الإطار؟`, L`\( 100 \, \text{cm} \)`, L`<ol><li>القطران في المعين متعامدان وينصف كل منهما الآخر. لذا يشكل نصفا القطرين وعضلع المعين مثلثاً قائماً.</li><li>نصف القطر الأول = 20، نصف القطر الثاني = 15.</li><li>نجد طول الضلع بفيثاغورس: \( L = \sqrt{20^2 + 15^2} = \sqrt{400 + 225} = \sqrt{625} = 25 \). </li><li>طول الإطار (المحيط) \( = 4 \times 25 = 100 \, \text{cm} \).</li></ol><div style="text-align: center; margin-top: 15px;"><svg width="220" height="180" viewBox="0 0 220 180" style="font-family: Arial, sans-serif;"><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1565c0"></path></marker></defs><polygon points="110,10 190,90 110,170 30,90" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"></polygon><line x1="110" y1="10" x2="110" y2="170" stroke="#b0bec5" stroke-dasharray="5,3"></line><line x1="30" y1="90" x2="190" y2="90" stroke="#b0bec5" stroke-dasharray="5,3"></line><polygon points="110,90 190,90 110,10" fill="rgba(255, 193, 7, 0.2)" stroke="none"></polygon><text x="150" y="85" font-size="12" fill="#333">20</text><text x="115" y="55" font-size="12" fill="#333">15</text><text x="180" y="45" font-size="10" fill="#d32f2f" font-weight="bold">?=L</text><text x="100" y="100" font-size="10" fill="#666">90°</text></svg></div>`]
                    ]
                },
                {
                    title: 'متوازي الأضلاع', page: 'متوازي الأضلاع.html',
                    intro: L`<p><strong>مساحة متوازي الأضلاع:</strong> \( A = b \times h \)</p><p><strong>محيط متوازي الأضلاع:</strong> \( P = 2(a + b) \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( b \) القاعدة، \( h \) الارتفاع، و \( a \) الضلع المجاور.</p>`,
                    ex: [
                        [L`متوازي أضلاع قاعدته \( 12 \, \text{cm} \) وارتفاعه \( 8 \, \text{cm} \). احسب مساحته.`, L`\( 96 \, \text{cm}^2 \)`, L`<ol><li>المعطيات: القاعدة \( b = 12 \)، الارتفاع \( h = 8 \).</li><li>القانون: \( A = b \times h \).</li><li>التعويض: \( A = 12 \times 8 \).</li><li>الناتج: \( 96 \, \text{cm}^2 \).</li></ol>`],
                        [L`متوازي أضلاع ضلعاه المتجاوران \( 7 \, \text{m} \) و \( 4 \, \text{m} \). احسب محيطه.`, L`\( 22 \, \text{m} \)`, L`<ol><li>المعطيات: \( a = 7, b = 4 \).</li><li>القانون: \( P = 2(a + b) \).</li><li>التعويض: \( P = 2(7 + 4) = 2(11) \).</li><li>الناتج: \( 22 \, \text{m} \).</li></ol>`],
                        [L`متوازي أضلاع مساحته \( 60 \, \text{cm}^2 \) وقاعدته \( 15 \, \text{cm} \). أوجد ارتفاعه.`, L`\( 4 \, \text{cm} \)`, L`<ol><li>القانون: المساحة = القاعدة × الارتفاع.</li><li>\( 60 = 15 \times h \).</li><li>نقسم على 15: \( h = 60 \div 15 \).</li><li>الناتج: \( 4 \, \text{cm} \).</li></ol>`],
                        [L`متوازي أضلاع محيطه \( 40 \, \text{cm} \) وطول أحد أضلاعه \( 12 \, \text{cm} \). أوجد طول الضلع الآخر.`, L`\( 8 \, \text{cm} \)`, L`<ol><li>نعلم أن \( P = 2(a + b) \).</li><li>\( 40 = 2(12 + b) \).</li><li>نقسم على 2: \( 20 = 12 + b \).</li><li>نطرح 12: \( b = 20 - 12 = 8 \, \text{cm} \).</li></ol>`],
                        [L`لوحة فنية على شكل متوازي أضلاع، طول قاعدتها \( 50 \, \text{cm} \) وارتفاعها \( 30 \, \text{cm} \). يراد طلاؤها بمادة خاصة، إذا كانت العلبة الواحدة من الطلاء تغطي \( 400 \, \text{cm}^2 \)، فكم علبة نحتاج لطلاء اللوحة كاملة؟`, L`4 علب`, L`<ol><li>نحسب مساحة اللوحة: \( A = 50 \times 30 = 1500 \, \text{cm}^2 \).</li><li>نقسم المساحة الكلية على تغطية العلبة الواحدة: \( 1500 \div 400 \).</li><li>\( 1500 \div 400 = 3.75 \).</li><li>بما أننا نحتاج لعلب كاملة، نقرب للأعلى: نحتاج إلى 4 علب.</li></ol>`]
                    ]
                },
                {
                    title: 'الدائرة', page: 'الدائرة.html',
                    intro: L`<p><strong>مساحة الدائرة:</strong> \( A = \pi r^2 \)</p><p><strong>محيط الدائرة:</strong> \( C = 2 \pi r \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( r \) نصف القطر، و \( \pi \approx 3.14 \) أو \( \frac{22}{7} \).</p>`,
                    ex: [
                        [L`دائرة نصف قطرها \( 7 \, \text{cm} \). احسب مساحتها (باعتبار \( \pi = \frac{22}{7} \)).`, L`\( 154 \, \text{cm}^2 \)`, L`<ol><li>المعطيات: \( r = 7 \).</li><li>القانون: \( A = \pi r^2 \).</li><li>التعويض: \( A = \frac{22}{7} \times (7)^2 = \frac{22}{7} \times 49 \).</li><li>الناتج: \( 22 \times 7 = 154 \, \text{cm}^2 \).</li></ol>`],
                        [L`دائرة نصف قطرها \( 5 \, \text{m} \). احسب محيطها (باعتبار \( \pi = 3.14 \)).`, L`\( 31.4 \, \text{m} \)`, L`<ol><li>المعطيات: \( r = 5 \).</li><li>القانون: \( C = 2 \pi r \).</li><li>التعويض: \( C = 2 \times 3.14 \times 5 \).</li><li>الناتج: \( 10 \times 3.14 = 31.4 \, \text{m} \).</li></ol>`],
                        [L`دائرة مساحتها \( 314 \, \text{cm}^2 \). أوجد نصف قطرها (باعتبار \( \pi = 3.14 \)).`, L`\( 10 \, \text{cm} \)`, L`<ol><li>نعلم أن \( A = \pi r^2 \).</li><li>\( 314 = 3.14 \times r^2 \).</li><li>نقسم على 3.14: \( r^2 = 314 \div 3.14 = 100 \).</li><li>نأخذ الجذر التربيعي: \( r = \sqrt{100} = 10 \, \text{cm} \).</li></ol>`],
                        [L`دائرة محيطها \( 44 \, \text{cm} \). احسب مساحتها (باعتبار \( \pi = \frac{22}{7} \)).`, L`\( 154 \, \text{cm}^2 \)`, L`<ol><li><strong>أولاً نجد نصف القطر:</strong> \( C = 2 \pi r \implies 44 = 2 \times \frac{22}{7} \times r \).</li><li>\( 44 = \frac{44}{7} r \implies r = 7 \, \text{cm} \).</li><li><strong>ثانياً نحسب المساحة:</strong> \( A = \pi r^2 = \frac{22}{7} \times 49 = 154 \, \text{cm}^2 \).</li></ol>`],
                        [L`عجلة دائرية الشكل قطرها \( 100 \, \text{cm} \). ما المسافة التي تقطعها العجلة إذا دارت 10 دورات كاملة؟ (باعتبار \( \pi = 3.14 \))`, L`\( 31.4 \, \text{m} \)`, L`<ol><li>المسافة في الدورة الواحدة = محيط العجلة.</li><li>نصف القطر \( r = 100/2 = 50 \, \text{cm} \).</li><li>المحيط \( C = 2 \times 3.14 \times 50 = 314 \, \text{cm} \).</li><li>المسافة الكلية = المحيط × عدد الدورات = \( 314 \times 10 = 3140 \, \text{cm} \).</li><li>بالأمتار: \( 3140 \div 100 = 31.4 \, \text{m} \).</li></ol>`]
                    ]
                },
                {
                    title: 'شبه المنحرف', page: 'شبه المنحرف.html',
                    intro: L`<p><strong>مساحة شبه المنحرف:</strong> \( A = \frac{1}{2} (b_1 + b_2) \times h \)</p><p><strong>محيط شبه المنحرف:</strong>مجموع أطوال أضلاعه \( P = \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( b_1, b_2 \) طولا القاعدتين المتوازيتين، و \( h \) الارتفاع.</p>`,
                    ex: [
                        [L`شبه منحرف طولا قاعدتيه \( 8 \, \text{cm} \) و \( 12 \, \text{cm} \) وارتفاعه \( 5 \, \text{cm} \). احسب مساحته.`, L`\( 50 \, \text{cm}^2 \)`, L`<ol><li>المعطيات: \( b_1 = 8, b_2 = 12, h = 5 \).</li><li>القانون: \( A = \frac{8 + 12}{2} \times 5 \).</li><li>\( A = \frac{20}{2} \times 5 = 10 \times 5 \).</li><li>الناتج: \( 50 \, \text{cm}^2 \).</li></ol>`],
                        [L`شبه منحرف أطوال أضلاعه \( 5 \, \text{m}, 7 \, \text{m}, 5 \, \text{m}, 10 \, \text{m} \). احسب محيطه.`, L`\( 27 \, \text{m} \)`, L`<ol><li>المحيط هو مجموع الأضلاع الأربعة.</li><li>\( P = 5 + 7 + 5 + 10 \).</li><li>الناتج: \( 27 \, \text{m} \).</li></ol>`],
                        [L`شبه منحرف مساحته \( 40 \, \text{cm}^2 \) وارتفاعه \( 4 \, \text{cm} \). ما مجموع طولي قاعدتيه المتوازيتين؟`, L`\( 20 \, \text{cm} \)`, L`<ol><li>القانون: \( A = \frac{1}{2} (b_1 + b_2) h \).</li><li>\( 40 = 0.5 \times (b_1 + b_2) \times 4 \).</li><li>\( 40 = 2 \times (b_1 + b_2) \).</li><li>نقسم على 2: \( b_1 + b_2 = 20 \, \text{cm} \).</li></ol>`],
                        [L`شبه منحرف مساحته \( 30 \, \text{cm}^2 \) ومجموع قاعدتيه \( 10 \, \text{cm} \). احسب ارتفاعه.`, L`\( 6 \, \text{cm} \)`, L`<ol><li>\( 30 = \frac{1}{2} \times 10 \times h \).</li><li>\( 30 = 5 \times h \).</li><li>نقسم على 5: \( h = 6 \, \text{cm} \).</li></ol>`],
                        [L`قطعة أرض على شكل شبه منحرف، القاعدتان المتوازيتان بطول \( 30 \, \text{m} \) و \( 50 \, \text{m} \)، والمسافة العمودية بينهما (الارتفاع) \( 20 \, \text{m} \). احسب مساحة الأرض.`, L`\( 800 \, \text{m}^2 \)`, L`<ol><li>نحسب المتوسط الحسابي للقاعدتين: \( \frac{30+50}{2} = \frac{80}{2} = 40 \).</li><li>نضرب في الارتفاع: \( 40 \times 20 \).</li><li>الناتج: \( 800 \, \text{m}^2 \).</li></ol>`]
                    ]
                },
                {
                    title: 'المكعب', page: 'المكعب.html',
                    intro: L`<p><strong>حجم المكعب (Volume):</strong> \( V = L^3 \)</p><p><strong>المساحة الكلية (Total Area):</strong> \( A = 6 L^2 \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( L \) هو طول حرف المكعب.</p>`,
                    ex: [
                        [L`مكعب طول حرفه \( 4 \, \text{cm} \). احسب حجمه.`, L`\( 64 \, \text{cm}^3 \)`, L`<ol><li>المعطيات: \( L = 4 \).</li><li>القانون: \( V = L^3 = L \times L \times L \).</li><li>التعويض: \( V = 4 \times 4 \times 4 \).</li><li>الناتج: \( 64 \, \text{cm}^3 \).</li></ol>`],
                        [L`مكعب طول حرفه \( 3 \, \text{m} \). احسب مساحته الكلية.`, L`\( 54 \, \text{m}^2 \)`, L`<ol><li>المعطيات: \( L = 3 \).</li><li>القانون: \( A = 6 L^2 \).</li><li>التعويض: \( A = 6 \times (3)^2 = 6 \times 9 \).</li><li>الناتج: \( 54 \, \text{m}^2 \).</li></ol>`],
                        [L`مكعب حجمه \( 125 \, \text{cm}^3 \). ما طول حرفه؟`, L`\( 5 \, \text{cm} \)`, L`<ol><li>القانون: \( V = L^3 \).</li><li>\( 125 = L^3 \).</li><li>لإيجاد \( L \)، نأخذ الجذر التكعيبي للطرفين: \( L = \sqrt[3]{125} \).</li><li>الناتج: \( 5 \, \text{cm} \).</li></ol>`],
                        [L`مكعب مساحته الكلية \( 24 \, \text{m}^2 \). احسب طول حرفه.`, L`\( 2 \, \text{m} \)`, L`<ol><li>القانون: \( 24 = 6 L^2 \).</li><li>نقسم على 6: \( L^2 = 24 \div 6 = 4 \).</li><li>نأخذ الجذر التربيعي: \( L = \sqrt{4} = 2 \, \text{m} \).</li></ol>`],
                        [L`خزان ماء مكعب الشكل طول حرفه \( 2 \, \text{m} \). كم لتراً من الماء يسع هذا الخزان؟ (علماً بأن \( 1 \, \text{m}^3 = 1000 \, \text{Liter} \))`, L`\( 8000 \) لتر`, L`<ol><li>نحسب حجم الخزان بالمتر المكعب: \( V = 2^3 = 8 \, \text{m}^3 \).</li><li>نحول إلى لترات بالضرب في 1000.</li><li>السعة = \( 8 \times 1000 \) يساوي 8000 لتر.</li></ol>`]
                    ]
                },
                {
                    title: 'متوازي المستطيلات', page: 'متوازي المستطيلات.html',
                    intro: L`<p><strong>حجم متوازي المستطيلات:</strong> \( V = L \times W \times h \)</p><p><strong>المساحة الكلية:</strong> \( A = 2((L \times W) + (L \times h) + (W \times h)) \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( L \) الطول، \( W \) العرض، و \( h \) الارتفاع.</p>`,
                    ex: [
                        [L`متوازي مستطيلات أبعاده \( 5 \, \text{cm}, 3 \, \text{cm}, 2 \, \text{cm} \). احسب حجمه.`, L`\( 30 \, \text{cm}^3 \)`, L`<ol><li>المعطيات: \( L=5, W=3, h=2 \).</li><li>القانون: \( V = L \times W \times h \).</li><li>التعويض: \( V = 5 \times 3 \times 2 \).</li><li>الناتج: \( 15 \times 2 = 30 \, \text{cm}^3 \).</li></ol>`],
                        [L`احسب المساحة الكلية لمتوازي مستطيلات أبعاده \( 4 \, \text{m}, 2 \, \text{m}, 3 \, \text{m} \).`, L`\( 52 \, \text{m}^2 \)`, L`<ol><li>مساحة الأوجه = \( 2(LW + Lh + Wh) \).</li><li>\( LW = 4 \times 2 = 8 \).</li><li>\( Lh = 4 \times 3 = 12 \).</li><li>\( Wh = 2 \times 3 = 6 \).</li><li>المجموع = \( 8 + 12 + 6 = 26 \).</li><li>المساحة الكلية = \( 2 \times 26 = 52 \, \text{m}^2 \).</li></ol>`],
                        [L`متوازي مستطيلات حجمه \( 120 \, \text{cm}^3 \) ومساحة قاعدته \( 30 \, \text{cm}^2 \). أوجد ارتفاعه.`, L`\( 4 \, \text{cm} \)`, L`<ol><li>القانون: الحجم = مساحة القاعدة × الارتفاع.</li><li>\( 120 = 30 \times h \).</li><li>نقسم على 30: \( h = 120 \div 30 \).</li><li>الناتج: \( 4 \, \text{cm} \).</li></ol>`],
                        [L`صندوق على شكل متوازي مستطيلات طوله \( 10 \, \text{cm} \) وعرضه \( 5 \, \text{cm} \). إذا كان حجمه \( 200 \, \text{cm}^3 \)، فما ارتفاعه؟`, L`\( 4 \, \text{cm} \)`, L`<ol><li>نحسب مساحة القاعدة أولاً: \( A = 10 \times 5 = 50 \, \text{cm}^2 \).</li><li>نستخدم قانون الحجم: \( 200 = 50 \times h \).</li><li>الارتفاع \( h = 200 \div 50 = 4 \, \text{cm} \).</li></ol>`],
                        [L`حاوية شحن على شكل متوازي مستطيلات أبعادها من الداخل \( 10 \, \text{m}, 2 \, \text{m}, 2 \, \text{m} \). كم صندوقاً مكعب الشكل طول حرفه \( 1 \, \text{m} \) يمكن أن تسع هذه الحاوية؟`, L`40 صندوقاً`, L`<ol><li>نحسب حجم الحاوية: \( V_1 = 10 \times 2 \times 2 = 40 \, \text{m}^3 \).</li><li>نحسب حجم الصندوق الواحد: \( V_2 = 1^3 = 1 \, \text{m}^3 \).</li><li>عدد الصناديق = حجم الحاوية ÷ حجم الصندوق.</li><li>العدد = \( 40 \div 1 = 40 \) صندوقاً.</li></ol>`]
                    ]
                },
                {
                    title: 'الاسطوانة', page: 'الاسطوانة.html',
                    intro: L`<p><strong>حجم الاسطوانة:</strong> \( V = \pi r^2 h \)</p><p><strong>المساحة الجانبية:</strong> \( L.A = 2 \pi r h \)</p><p><strong>المساحة الكلية:</strong> \( T.A = 2 \pi r h + 2 \pi r^2 \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( r \) نصف قطر القاعدة، و \( h \) الارتفاع.</p>`,
                    ex: [
                        [L`اسطوانة نصف قطر قاعدتها \( 7 \, \text{cm} \) وارتفاعها \( 10 \, \text{cm} \). احسب حجمها. (\(\pi = \frac{22}{7}\))`, L`\( 1540 \, \text{cm}^3 \)`, L`<ol><li>المعطيات: \( r=7, h=10 \).</li><li>القانون: \( V = \pi r^2 h \).</li><li>التعويض: \( V = \frac{22}{7} \times (7)^2 \times 10 \).</li><li>الناتج: \( 22 \times 7 \times 10 = 1540 \, \text{cm}^3 \).</li></ol>`],
                        [L`اسطوانة نصف قطرها \( 5 \, \text{m} \) وارتفاعها \( 10 \, \text{m} \). احسب مساحتها الجانبية. (\(\pi=3.14\))`, L`\( 314 \, \text{m}^2 \)`, L`<ol><li>القانون: \( L.A = 2 \pi r h \).</li><li>التعويض: \( 2 \times 3.14 \times 5 \times 10 \).</li><li>الناتج: \( 10 \times 31.4 = 314 \, \text{m}^2 \).</li></ol>`],
                        [L`اسطوانة حجمها \( 314 \, \text{cm}^3 \) ونصف قطرها \( 5 \, \text{cm} \). أوجد ارتفاعها. (\(\pi=3.14\))`, L`\( 4 \, \text{cm} \)`, L`<ol><li>القانون: \( V = \pi r^2 h \).</li><li>\( 314 = 3.14 \times (5)^2 \times h \).</li><li>\( 314 = 3.14 \times 25 \times h \).</li><li>\( 314 = 78.5 \times h \).</li><li>الارتفاع \( h = 314 \div 78.5 = 4 \, \text{cm} \).</li></ol>`],
                        [L`اسطوانة مساحتها الجانبية \( 88 \, \text{cm}^2 \) وارتفاعها \( 4 \, \text{cm} \). ما طول نصف قطرها؟ (\(\pi=\frac{22}{7}\))`, L`\( 3.5 \, \text{cm} \)`, L`<ol><li>القانون: \( 88 = 2 \times \frac{22}{7} \times r \times 4 \).</li><li>\( 88 = \frac{176}{7} r \).</li><li>\( r = 88 \times \frac{7}{176} = 3.5 \, \text{cm} \).</li></ol>`],
                        [L`برميل اسطواني الشكل سعته \( 1540 \) لتر، إذا كان ارتفاعه \( 10 \) أمتار. احسب مساحة قاعدته.`, L`\( 0.154 \, \text{m}^2 \)`, L`<ol><li>نحول السعة إلى متر مكعب: \( 1540 \) لتر = \( 1.54 \, \text{m}^3 \) (لأن \( 1\text{m}^3 = 1000\text{L} \)).</li><li>الحجم = مساحة القاعدة × الارتفاع.</li><li>\( 1.54 = A \times 10 \).</li><li>مساحة القاعدة \( A = 1.54 \div 10 = 0.154 \, \text{m}^2 \).</li></ol>`]
                    ]
                },
                {
                    title: 'المخروط', page: 'المخروط.html',
                    intro: L`<p><strong>حجم المخروط:</strong> \( V = \frac{1}{3} \pi r^2 h \)</p><p><strong>المساحة الجانبية:</strong> \( L.A = \pi r l \)</p><p><strong>المولد:</strong> \( l = \sqrt{r^2 + h^2} \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( r \) نصف القطر، \( h \) الارتفاع، و \( l \) المولد. </p>`,
                    ex: [
                        [L`مخروط نصف قطر قاعدته \( 3 \, \text{cm} \) وارتفاعه \( 4 \, \text{cm} \). احسب حجمه. (\(\pi=3.14\))`, L`\( 37.68 \, \text{cm}^3 \)`, L`<ol><li>المعطيات: \( r=3, h=4 \).</li><li>القانون: \( V = \frac{1}{3} \pi r^2 h \).</li><li>التعويض: \( V = \frac{1}{3} \times 3.14 \times (3)^2 \times 4 \).</li><li>\( V = \frac{1}{3} \times 3.14 \times 9 \times 4 = 3.14 \times 3 \times 4 \).</li><li>الناتج: \( 3.14 \times 12 = 37.68 \, \text{cm}^3 \).</li></ol>`],
                        [L`مخروط نصف قطر قاعدته \( 6 \, \text{cm} \) وارتفاعه \( 8 \, \text{cm} \). احسب مساحته الجانبية. (\(\pi=3.14\))`, L`\( 188.4 \, \text{cm}^2 \)`, L`<ol><li>نحتاج لحساب المولد \( l \) أولاً بفيثاغورس: \( l = \sqrt{6^2 + 8^2} = \sqrt{36+64} = 10 \). </li><li>المساحة الجانبية \( L.A = \pi r l \).</li><li>التعويض: \( 3.14 \times 6 \times 10 \).</li><li>الناتج: \( 3.14 \times 60 = 188.4 \, \text{cm}^2 \).</li></ol>`],
                        [L`مخروط حجمه \( 100 \pi \, \text{cm}^3 \) وارتفاعه \( 12 \, \text{cm} \). أوجد نصف قطر قاعدته.`, L`\( 5 \, \text{cm} \)`, L`<ol><li>القانون: \( V = \frac{1}{3} \pi r^2 h \).</li><li>\( 100 \pi = \frac{1}{3} \pi r^2 (12) \).</li><li>نختصر \( \pi \) من الطرفين: \( 100 = \frac{1}{3} \times 12 \times r^2 = 4 r^2 \).</li><li>\( r^2 = 25 \implies r = 5 \, \text{cm} \).</li></ol>`],
                        [L`مخروط مساحته الجانبية \( 65 \pi \, \text{cm}^2 \) ومولده \( 13 \, \text{cm} \). احسب نصف قطره.`, L`\( 5 \, \text{cm} \)`, L`<ol><li>القانون: \( L.A = \pi r l \).</li><li>\( 65 \pi = \pi \times r \times 13 \).</li><li>نقسم على \( 13 \pi \): \( r = 65/13 = 5 \, \text{cm} \).</li></ol>`],
                        [L`كوب ورقي للبطاطس على شكل مخروط، نصف قطر فتحته \( 10 \, \text{cm} \) ومولده \( 25 \, \text{cm} \). كم سنتيمتراً مربعاً من الورق يلزم لصنعه؟`, L`\( 250 \pi \, \text{cm}^2 \)`, L`<ol><li>المساحة المطلوبة للورق هي المساحة الجانبية للمخروط.</li><li>القانون: \( L.A = \pi r l \).</li><li>التعويض: \( \pi \times 10 \times 25 \).</li><li>الناتج: \( 250 \pi \, \text{cm}^2 \) (\(\approx 785 \, \text{cm}^2\)).</li></ol>`]
                    ]
                },
                {
                    title: 'الكرة', page: 'الكرة.html',
                    intro: L`<p><strong>حجم الكرة:</strong> \( V = \frac{4}{3} \pi r^3 \)</p><p><strong>مساحة السطح:</strong> \( A = 4 \pi r^2 \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( r \) نصف القطر.</p>`,
                    ex: [
                        [L`كرة نصف قطرها \( 3 \, \text{cm} \). احسب حجمها. (\(\pi=3.14\))`, L`\( 113.04 \, \text{cm}^3 \)`, L`<ol><li>المعطيات: \( r = 3 \).</li><li>القانون: \( V = \frac{4}{3} \pi r^3 \).</li><li>التعويض: \( V = \frac{4}{3} \times 3.14 \times (3)^3 = \frac{4}{3} \times 3.14 \times 27 \). </li><li>\( V = 3.14 \times 36 = 113.04 \, \text{cm}^3 \).</li></ol>`],
                        [L`كرة نصف قطرها \( 5 \, \text{cm} \). احسب مساحة سطحها. (\(\pi=3.14\))`, L`\( 314 \, \text{cm}^2 \)`, L`<ol><li>القانون: \( A = 4 \pi r^2 \).</li><li>التعويض: \( A = 4 \times 3.14 \times (5)^2 \).</li><li>\( A = 4 \times 3.14 \times 25 = 100 \times 3.14 = 314 \, \text{cm}^2 \).</li></ol>`],
                        [L`كرة حجمها \( 36 \pi \, \text{cm}^3 \). أوجد نصف قطرها.`, L`\( 3 \, \text{cm} \)`, L`<ol><li>القانون: \( V = \frac{4}{3} \pi r^3 \).</li><li>\( 36 \pi = \frac{4}{3} \pi r^3 \).</li><li>نختصر \( \pi \): \( 36 = \frac{4}{3} r^3 \).</li><li>نضرب في \( \frac{3}{4} \): \( 36 \times \frac{3}{4} = 27 = r^3 \).</li><li>\( r = \sqrt[3]{27} = 3 \, \text{cm} \).</li></ol>`],
                        [L`كرة مساحة سطحها \( 324 \pi \, \text{cm}^2 \). احسب نصف قطرها.`, L`\( 9 \, \text{cm} \)`, L`<ol><li>القانون: \( A = 4 \pi r^2 \).</li><li>\( 324 \pi = 4 \pi r^2 \).</li><li>نقسم على \( 4 \pi \): \( r^2 = 324 \div 4 = 81 \).</li><li>\( r = \sqrt{81} = 9 \, \text{cm} \).</li></ol>`],
                        [L`خزان ماء كروي الشكل نصف قطره \( 3 \, \text{m} \). يراد طلاؤه بمادة عازلة، تكلفة المتر المربع منها 10 ريالات. احسب التكلفة الكلية. (\(\pi=3.14\))`, L`\( 1130.4 \) ريال`, L`<ol><li>نحسب مساحة السطح: \( A = 4 \times 3.14 \times 3^2 = 4 \times 3.14 \times 9 = 113.04 \, \text{m}^2 \).</li><li>التكلفة = المساحة × سعر المتر.</li><li>التكلفة = \( 113.04 \times 10 = 1130.4 \) ريال.</li></ol>`]
                    ]
                },
                {
                    title: 'البيضاوي', page: 'البيضوي_ثلاثي_الأبعاد.html',
                    intro: L`<p><strong>حجم البيضوي:</strong> \( V = \frac{4}{3} \pi a b c \)</p><p><strong>مساحة السطح (تقريبية):</strong> \( A \approx 4 \pi \left( \frac{a^p b^p + a^p c^p + b^p c^p}{3} \right)^{1/p} \)</p><p style="font-size: 0.9rem; margin-top:0.5rem;">حيث \( a, b, c \) أنصاف المحاور، و \( p \approx 1.6 \).</p>`,
                    ex: [
                        [L`جسم بيضوي أنصاف محاوره \( a=4, b=3, c=2 \) cm. احسب حجمه. (\(\pi=3.14\))`, L`\( 100.48 \, \text{cm}^3 \)`, L`<ol><li>القانون: \( V = \frac{4}{3} \pi a b c \).</li><li>التعويض: \( V = \frac{4}{3} \times 3.14 \times 4 \times 3 \times 2 \).</li><li>\( = 4 \times 3.14 \times 4 \times 2 = 100.48 \, \text{cm}^3 \).</li></ol>`],
                        [L`خزان غاز بيضوي الشكل أبعاده (كااااملة) \( 10 \text{m}, 6 \text{m}, 4 \text{m} \). احسب حجم الغاز الذي يسعه.`, L`\( 125.6 \, \text{m}^3 \)`, L`<ol><li>نحول الأقطار إلى أنصاف أقطار: \( a=5, b=3, c=2 \).</li><li>القانون: \( V = \frac{4}{3} \times 3.14 \times 5 \times 3 \times 2 \).</li><li>\( = 4 \times 3.14 \times 10 = 125.6 \, \text{m}^3 \).</li></ol>`],
                        [L`احسب مساحة سطح كرة مفلطحة (Spheroid) (حالة خاصة من البيضوي) حيث \( a=b=5 \) و \( c=3 \). (باستخدام التقريب \( p=1.6 \))`, L`\( \approx 255 \, \text{cm}^2 \)`, L`<ol><li>نطبق قانون التقريب.</li><li>\( S \approx 4 \pi (\frac{5^{1.6} 5^{1.6} + 5^{1.6} 3^{1.6} + 5^{1.6} 3^{1.6}}{3})^{1/1.6} \).</li><li>العملية حسابية معقدة، الناتج التقريبي هو 255.</li></ol>`],
                        [L`جسم بيضوي حجمه \( 288 \pi \, \text{cm}^3 \)، ونصفا محوريه \( a=6, b=6 \). أوجد نصف المحور الثالث \( c \).`, L`\( 6 \, \text{cm} \)`, L`<ol><li>القانون: \( V = \frac{4}{3} \pi a b c \).</li><li>\( 288 \pi = \frac{4}{3} \pi (6)(6) c \).</li><li>\( 288 = \frac{4}{3} (36) c = 48 c \).</li><li>\( c = 288 \div 48 = 6 \, \text{cm} \) (كرة).</li></ol>`],
                        [L`كبسولة دواء بيضاوية الشكل، أنصاف أبعادها \( 4 \text{mm}, 2 \text{mm}, 2 \text{mm} \). احسب حجم الدواء بداخلها.`, L`\( \approx 67 \, \text{mm}^3 \)`, L`<ol><li>\( V = \frac{4}{3} \times 3.14 \times 4 \times 2 \times 2 \).</li><li>\( V = \frac{4}{3} \times 3.14 \times 16 \).</li><li>\( V \approx 1.33 \times 50.24 \approx 67 \, \text{mm}^3 \).</li></ol>`]
                    ]
                }
            ]
        }
    ];
})();
