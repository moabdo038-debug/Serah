// --- وظيفة القائمة للموبايل (Menu Toggle) ---
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// --- 1. البيانات الموسعة ---
const db = {
    seerah: [
        { t: "1. النسب الشريف", d: "هو محمد بن عبد الله بن عبد المطلب بن هاشم، من أشراف قريش. ينتهي نسبه إلى إسماعيل بن إبراهيم عليهما السلام." },
        { t: "2. عام الفيل", d: "ولد بمكة في عام الفيل (571م)، العام الذي حاول فيه أبرهة هدم الكعبة، فحماها الله بطير أبابيل." },
        { t: "3. المولد المبارك", d: "ولد يوم الاثنين 12 ربيع الأول. توفي والده وهو في بطن أمه، فولد يتيماً." },
        { t: "4. الرضاعة", d: "أرضعته حليمة السعدية في بادية بني سعد، وحلت البركة في بيتها وأغنامها بوجوده." },
        { t: "5. شق الصدر", d: "في الرابعة من عمره، جاءه جبريل وشق صدره، وغسل قلبه بماء زمزم ونزع منه حظ الشيطان." },
        { t: "6. وفاة الأم", d: "توفيت أمه آمنة بنت وهب بالأبواء وهو ابن 6 سنوات، فكفله جده عبد المطلب." },
        { t: "7. وفاة الجد", d: "مات جده وهو ابن 8 سنوات، فكفله عمه أبو طالب، وكان يحبه ويقدمه على أولاده." },
        { t: "8. رعي الغنم", d: "عمل في صغره برعي الغنم لأهل مكة على قراريط، فتعلم الصبر والرحمة." },
        { t: "9. التجارة", d: "سافر مع عمه للشام للتجارة، ورآه الراهب بحيرا وعرف علامات النبوة فيه." },
        { t: "10. زواج خديجة", d: "أعجبت خديجة بأمانته في تجارتها، فتزوجته وهو ابن 25 وهي بنت 40، وكانت نعم السكن." },
        { t: "11. التحكيم", d: "حكم بين قبائل قريش عند تجديد الكعبة في وضع الحجر الأسود، فحقن دماءهم." },
        { t: "12. الخلوة", d: "حبب إليه الخلاء، فكان يتعبد في غار حراء الليالي ذوات العدد." },
        { t: "13. بدء الوحي", d: "في سن الأربعين، نزل عليه جبريل في رمضان بـ {اقرأ باسم ربك الذي خلق}." },
        { t: "14. السابقون", d: "أول من آمن: خديجة (نساء)، أبو بكر (رجال)، علي (صبيان)، زيد (موالي)." },
        { t: "15. الدعوة السرية", d: "استمرت 3 سنوات، كان يجتمع بالمسلمين سراً في دار الأرقم." },
        { t: "16. الجهر بالدعوة", d: "نزل قوله {فاصدع بما تؤمر}، فصعد الصفا وأنذر عشيرته." },
        { t: "17. الإيذاء", d: "تعرض المسلمون لتعذيب شديد، كآل ياسر وبلال، وصبروا محتسبين." },
        { t: "18. الهجرة للحبشة", d: "أمر أصحابه بالهجرة للحبشة، وقال: (إن بها ملكاً لا يظلم عنده أحد)." },
        { t: "19. إسلام العمرين", d: "دعا (اللهم أعز الإسلام بأحب الرجلين إليك)، فأسلم عمر بن الخطاب." },
        { t: "20. الحصار", d: "حاصرت قريش بني هاشم في الشعب 3 سنوات حتى أكلوا ورق الشجر." },
        { t: "21. عام الحزن", d: "توفي عمه أبو طالب وزوجته خديجة في عام واحد (10 للبعثة)." },
        { t: "22. الطائف", d: "خرج للطائف يطلب النصرة، فردوه وآذوه، ونزل ملك الجبال فرفض إهلاكهم." },
        { t: "23. الإسراء والمعراج", d: "رحلة أرضية للأقصى وسماوية لسدرة المنتهى، وفرضت الصلاة." },
        { t: "24. بيعة العقبة 1", d: "بايعه 12 رجلاً من الأنصار في موسم الحج على التوحيد ومكارم الأخلاق." },
        { t: "25. بيعة العقبة 2", d: "بايعه 73 رجلاً وامرأتان على النصرة والحماية إذا هاجر إليهم." },
        { t: "26. الهجرة", d: "خرج مع أبي بكر، واختبآ في غار ثور، ووصل المدينة فاستقبله الأنصار." },
        { t: "27. بناء المسجد", d: "أول عمل بالمدينة بناء المسجد النبوي ليكون مركزاً للدولة." },
        { t: "28. المؤاخاة", d: "آخى بين المهاجرين والأنصار، فتقاسموا الأموال والديار." },
        { t: "29. الوثيقة", d: "كتب صحيفة المدينة لتنظيم العلاقة بين المسلمين واليهود وغيرهم." },
        { t: "30. بدر الكبرى", d: "(2هـ) انتصار 313 مسلماً على 1000 مشرك، وفرق الله بين الحق والباطل." },
        { t: "31. أحد", d: "(3هـ) مخالفة الرماة قلبت النصر لهزيمة، وجرح النبي وكسرت رباعيته." },
        { t: "32. الخندق", d: "(5هـ) تحزبت العرب ضد المدينة، فحفر الخندق ونصرهم الله بالريح." },
        { t: "33. بيعة الرضوان", d: "(6هـ) بايع الصحابة تحت الشجرة على الموت لما شاع مقتل عثمان." },
        { t: "34. صلح الحديبية", d: "هدنة 10 سنوات، سماه الله (فتحاً مبيناً)، فانتشر الإسلام." },
        { t: "35. خيبر", d: "(7هـ) فتح حصون يهود خيبر، وقسم الغنائم على أهل الحديبية." },
        { t: "36. مؤتة", d: "(8هـ) أول معركة خارج الجزيرة العربية ضد الروم، استشهد فيها القادة الثلاثة." },
        { t: "37. فتح مكة", d: "(8هـ) دخل مكة بـ 10 آلاف، وحطم الأصنام، وعفا عن قريش." },
        { t: "38. عام الوفود", d: "(9هـ) جاءت القبائل من كل مكان تعلن إسلامها." },
        { t: "39. حجة الوداع", d: "(10هـ) حج ومعه 100 ألف، وخطب خطبة الوداع، ونزلت {اليوم أكملت لكم دينكم}." },
        { t: "40. الوفاة", d: "(11هـ) توفي يوم الاثنين 12 ربيع الأول وهو في حجر عائشة، ودفن في حجرتها." }
    ],
    // الأذكار الكاملة
    adhkar: {
        morning: [
            { t: "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ<br>{اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ}", c: 1 },
            { t: "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم<br>{قُلْ هُوَ ٱللَّهُ أَحَدٌ}، {قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ}، {قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ} (3 مرات)", c: 3 },
            { t: "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلْكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُ بِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر.", c: 1 },
            { t: "اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.", c: 1 },
            { t: "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم (3 مرات)", c: 3 },
            { t: "سُبْحـانَ اللهِ وَبِحَمْـدِهِ (100 مرة)", c: 100 }
        ],
        evening: [
            { t: "أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ<br>{آية الكرسي كاملة...}", c: 1 },
            { t: "المعوذات (3 مرات)", c: 3 },
            { t: "أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ...", c: 1 },
            { t: "اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِير.", c: 1 },
            { t: "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق (3 مرات)", c: 3 }
        ],
        sleep: [
            { t: "بِاسْمِكَ رَبِّـي وَضَعْـتُ جَنْـبي، وَبِكَ أَرْفَعُـه، إِنْ أَمْسَـكْتَ نَفْسـي فارْحَـمْها، وَإِنْ أَرْسَلْتَـها فاحْفَظْـها بِمـا تَحْفَـظُ بِه عِبـادَكَ الصّـالِحـين.", c: 1 },
            { t: "اللّهُـمَّ قِنـي عَذابَـكَ يَـوْمَ تَبْـعَثُ عِبـادَك (3 مرات)", c: 3 },
            { t: "سُبْحَانَ اللَّهِ (33)، وَالْحَمْدُ لِلَّهِ (33)، وَاللَّهُ أَكْبَرُ (34)", c: 1 }
        ],
        prayer: [
            { t: "أَسْتَغْفِرُ اللهَ (ثَلاثاً). اللَّهُمَّ أَنْتَ السَّلامُ وَمِنْكَ السَّلامُ، تَبَارَكْتَ يَا ذَا الجَلالِ وَالإِكْرَامِ.", c: 1 },
            { t: "لا إلَهَ إلاَّ اللهُ وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ المُلْكُ وَلَهُ الحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ...", c: 1 },
            { t: "سُبْحَانَ اللَّهِ (33)، وَالْحَمْدُ لِلَّهِ (33)، وَاللَّهُ أَكْبَرُ (33)، تَمَامَ المِائَةِ: لا إلَهَ إلاَّ اللهُ وَحْدَهُ لا شَرِيكَ لَهُ...", c: 1 }
        ]
    },
    duas: [
        "اللهم اغفر له وارحمه وعافه واعف عنه.", "اللهم أكرم نزله ووسع مدخله.",
        "اللهم اجعل قبره روضة من رياض الجنة.", "اللهم أبدله داراً خيراً من داره وأهلاً خيراً من أهله.",
        "اللهم يمن كتابه ويسر حسابه.", "اللهم آنس وحشته وارحم غربته.",
        "اللهم انقله من مواطن الدود إلى جنات الخلود.", "اللهم شفع فيه نبيك واحشره تحت لوائه.",
        "اللهم عامله بما أنت أهله ولا تعامله بما هو أهله."
    ],
    video: [
        { t: "قصة آدم عليه السلام", id: "5G8XBFZZGMo" }, { t: "قصة يوسف (كاملة)", id: "Y8vGhnxq420" },
        { t: "قصة نوح", id: "ZPwlqwgIXD4" }, { t: "قصة إبراهيم", id: "5_JlSt9qFu0" }, { t: "السيرة: الهجرة", id: "7lHcqWGoI80" }
    ],
    quran: [], hadith: []
};

// --- 2. المنطق الأساسي ---
let tasbihCount = 0;
let ringRotation = 0;
let phrases = ["سبحان الله", "الحمد لله", "الله أكبر", "لا إله إلا الله", "أستغفر الله"];
let phraseIndex = 0;
let timerInterval;
let currentChapter = 1;

window.onload = function () {
    setHijriDate();
    fetchPrayers();
    fetchQuranList();
    fetchHadith();
    renderPreview('seerah', db.seerah);
    renderPreview('video', db.video);

    showRandomDua();
    setInterval(showRandomDua, 30000);

    startTicker();
};

function setHijriDate() {
    const d = new Date();
    const h = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
    document.getElementById('hijri-date').innerText = h;
}

// --- 3. السبحة (مع التصفير التلقائي) ---
function incrementTasbih() {
    tasbihCount++;

    // تدوير الحلقة
    const step = 360 / 33;
    ringRotation += step;
    document.getElementById('beads-circle').style.transform = `rotate(${ringRotation}deg)`;
    document.getElementById('tasbih-count').innerText = tasbihCount;

    if (tasbihCount === 33) {
        if (navigator.vibrate) navigator.vibrate(200);
        setTimeout(() => {
            tasbihCount = 0;
            document.getElementById('tasbih-count').innerText = 0;
            changePhrase();
        }, 300);
    }
}

function changePhrase() {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    document.getElementById('tasbih-phrase').innerText = phrases[phraseIndex];
}
function resetTasbih() {
    tasbihCount = 0;
    ringRotation = 0;
    document.getElementById('tasbih-count').innerText = 0;
    document.getElementById('beads-circle').style.transform = `rotate(0deg)`;
}

// --- 4. المواقيت (تحديد الصلاة القادمة) ---
async function fetchPrayers() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async p => {
            try {
                const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${p.coords.latitude}&longitude=${p.coords.longitude}&method=5`);
                const d = await res.json();
                const t = d.data.timings;
                document.getElementById('location-info').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${d.data.meta.timezone}`;

                const strip = document.getElementById('prayer-strip');
                const map = { 'Fajr': 'الفجر', 'Dhuhr': 'الظهر', 'Asr': 'العصر', 'Maghrib': 'المغرب', 'Isha': 'العشاء' };
                strip.innerHTML = '';

                let nextPrayerName = "", minDiff = Infinity, now = new Date(), activeKey = "";

                for (let k in map) {
                    let [h, m] = t[k].split(':');
                    let pTime = new Date(); pTime.setHours(h, m, 0);
                    let diff = pTime - now;
                    if (diff < 0) { pTime.setDate(pTime.getDate() + 1); diff = pTime - now; }

                    if (diff < minDiff) {
                        minDiff = diff;
                        nextPrayerName = map[k];
                        activeKey = k;
                    }
                }

                for (let k in map) {
                    let isActive = (k === activeKey) ? 'active' : '';
                    strip.innerHTML += `<div class="p-item ${isActive}"><span>${map[k]}</span><strong>${fmtTime(t[k])}</strong></div>`;
                }

                document.getElementById('next-prayer-name').innerText = nextPrayerName;
                startTimer(new Date(Date.now() + minDiff));
            } catch (e) { }
        });
    }
}

function startTimer(target) {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        let diff = target - new Date();
        if (diff < 0) return location.reload();
        let h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('timer').innerText = `${h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }, 1000);
}
function fmtTime(t) { let [h, m] = t.split(':'); h = parseInt(h); let am = h >= 12 ? 'م' : 'ص'; h = h % 12 || 12; return `${h}:${m} ${am}`; }

// --- باقي الدوال (Data fetching) ---
async function fetchHadith() {
    try {
        const r1 = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari/sections/1.json');
        const d1 = await r1.json();
        const r2 = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari/sections/2.json');
        const d2 = await r2.json();
        db.hadith = [...d1.hadiths, ...d2.hadiths].slice(0, 50);
        renderPreview('hadith', db.hadith);
    } catch (e) { }
}

async function fetchQuranList() {
    try {
        const res = await fetch('https://api.quran.com/api/v4/chapters');
        const d = await res.json();
        db.quran = d.chapters.map(c => ({ number: c.id, name: c.name_arabic, verses: c.verses_count, type: c.revelation_place === 'makkah' ? 'مكية' : 'مدنية' }));
        renderPreview('quran', db.quran);
    } catch (e) { }
}

function renderPreview(type, data) {
    const c = document.getElementById(`${type}-preview`);
    if (!c) return; c.innerHTML = '';
    let limit = (type === 'seerah') ? 4 : (type === 'video' ? data.length : 4);
    data.slice(0, limit).forEach((item, index) => c.innerHTML += createCard(type, item, index));
}

function createCard(type, item, index) {
    if (type === 'video') {
        const thumb = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
        return `<div class="card video-card" style="background-image: url('${thumb}');" onclick="window.open('https://www.youtube.com/watch?v=${item.id}', '_blank')"><div class="video-overlay"><i class="fas fa-play-circle play-icon"></i></div><div class="video-title">${item.t}</div></div>`;
    }
    let fn = '';
    if (type === 'quran') fn = `openReader(${item.number},'${item.name}')`;
    else if (type === 'hadith') fn = `openDetails('hadith',${index})`;
    else if (type === 'seerah') fn = `openDetails('seerah',${index})`;

    let t = '', s = '', b = '';
    if (type === 'quran') { t = item.name; s = `${item.verses} آية | ${item.type}`; b = `<span class="badge">${item.number}</span>`; }
    else if (type === 'hadith') { t = `حديث رقم ${item.hadithnumber}`; s = item.text.substring(0, 80) + '...'; }
    else if (type === 'seerah') { t = item.t; s = item.d.substring(0, 80) + '...'; }
    return `<div class="card" onclick="${fn}">${b}<h4>${t}</h4><p>${s}</p></div>`;
}

function openLibrary(type) {
    let data = db[type];
    document.getElementById('library-modal').style.display = 'flex';
    const c = document.getElementById('lib-content'); c.innerHTML = '';
    document.getElementById('lib-search').style.display = (type === 'quran') ? 'block' : 'none';
    document.getElementById('lib-title').innerText = (type === 'quran') ? 'المصحف' : (type === 'hadith' ? 'الأحاديث' : 'السيرة');
    data.forEach((item, i) => c.innerHTML += createCard(type, item, i));
}

function openDetails(type, index) {
    let item = db[type][index];
    closeAll();
    document.getElementById('reader-modal').style.display = 'flex';
    document.getElementById('audio-box').style.display = 'none';
    document.getElementById('reader-text').className = 'details-text';
    document.getElementById('reader-title').innerText = type === 'hadith' ? `حديث رقم ${item.hadithnumber}` : item.t;
    document.getElementById('reader-text').innerHTML = type === 'hadith' ? item.text : item.d;
}

function openAdhkar(cat) {
    closeAll();
    document.getElementById('reader-modal').style.display = 'flex';
    document.getElementById('audio-box').style.display = 'none';
    document.getElementById('reader-title').innerText = "الأذكار";
    document.getElementById('reader-text').className = 'details-text';
    let list = db.adhkar[cat];
    let html = '';
    list.forEach((item) => {
        html += `<div class="adhkar-item" onclick="countDhikr(this, ${item.c})">
                    <div class="adhkar-text">${item.t}</div>
                    <div class="adhkar-count">${item.c}</div>
                </div>`;
    });
    document.getElementById('reader-text').innerHTML = html;
}
function countDhikr(el, max) {
    let span = el.querySelector('.adhkar-count');
    let current = parseInt(span.innerText);
    if (current > 0) { current--; span.innerText = current; if (current === 0) { el.classList.add('done'); span.innerHTML = '<i class="fas fa-check"></i>'; } }
}

async function openReader(num, name) {
    closeAll();
    currentChapter = num;
    document.getElementById('reader-modal').style.display = 'flex';
    document.getElementById('audio-box').style.display = 'flex';
    document.getElementById('reader-title').innerText = name;
    document.getElementById('reader-text').className = 'quran-text';
    document.getElementById('reader-text').innerHTML = 'جاري التحميل...';
    changeReciter();
    try {
        const r = await fetch(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${num}`);
        const d = await r.json();
        let html = (num != 1 && num != 9) ? `<span class="basmala">بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>` : '';
        d.verses.forEach(v => html += `${v.text_uthmani} <span style="color:#d4af37;font-size:0.7em">(${v.verse_key.split(':')[1]})</span> `);
        document.getElementById('reader-text').innerHTML = `<div class="quran-container">${html}</div>`;
    } catch (e) { }
}
function changeReciter() {
    let server = document.getElementById('reciter-select').value;
    let pad = currentChapter.toString().padStart(3, '0');
    let audio = document.getElementById('quran-audio');
    let wasPlaying = !audio.paused;
    audio.src = `${server}${pad}.mp3`;
    if (wasPlaying) toggleAudio();
}
function toggleAudio() {
    const a = document.getElementById('quran-audio');
    if (a.paused) { a.play(); document.getElementById('play-icon').className = 'fas fa-pause'; }
    else { a.pause(); document.getElementById('play-icon').className = 'fas fa-play'; }
}

let lastDuaIndex = -1;
function showRandomDua() {
    let rnd;
    do { rnd = Math.floor(Math.random() * db.duas.length); } while (rnd === lastDuaIndex);
    lastDuaIndex = rnd;
    const duaElem = document.getElementById('dua-text');
    duaElem.style.opacity = 0;
    setTimeout(() => { duaElem.innerText = db.duas[rnd]; duaElem.style.opacity = 1; }, 500);
}
function searchLib() {
    let val = document.getElementById('lib-search').value;
    let filtered = db.quran.filter(s => s.name.includes(val));
    let c = document.getElementById('lib-content'); c.innerHTML = '';
    filtered.forEach(i => c.innerHTML += createCard('quran', i, i.number));
}
function addPrayer() {
    let val = document.getElementById('dead-name').value;
    if (val) { document.getElementById('prayers-ticker').innerHTML += ` • اللهم اغفر لـ: ${val} • `; document.getElementById('dead-name').value = ''; }
}
function startTicker() { document.getElementById('prayers-ticker').innerHTML = "اللهم اغفر للمسلمين والمسلمات • سبحان الله وبحمده • "; }
function closeAll() { document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none'); document.getElementById('quran-audio').pause(); document.getElementById('play-icon').className = 'fas fa-play'; }

document.head.insertAdjacentHTML("beforeend", `<style>@keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }</style>`);
