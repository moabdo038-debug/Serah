<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
   <title>منصة اليقين | الموسوعة الدينية الشاملة</title>
    <meta name="description" content="اكتشف منصة اليقين، رفيقك الروحي الرقمي. استمتع بتلاوات قرآنية خاشعة، وتعمق في فصول السيرة النبوية العطرة، واختبر معلوماتك الإسلامية عبر تحديات تفاعلية ممتعة لتعزيز إيمانك ومعرفتك.">
    <meta name="keywords" content="منصة اليقين, قرآن كريم, المصحف الإلكتروني, تلاوات خاشعة, استماع للقرآن, السيرة النبوية, قصص الأنبياء, حياة الرسول محمد, أذكار الصباح والمساء, حصن المسلم, أدعية, اختبارات دينية, مسابقات إسلامية, أسئلة وإجابات, معلومات عامة دينية, عبد الرحمن سالم, موقع ديني متكامل">
    <meta name="author" content="Abdulrahman Salem">
    <meta name="google-site-verification" content="wL0e0sTjXxYcRzLKuMJezBS9wq9u25GCDl8N91eJJy4" />
    <meta name="twitter:image" content="https://elyaqeen.netlify.app/share-image.png">
    <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Tajawal:wght@300;400;500;700;900&family=Zain:wght@300;400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="icon" type="image/png" href="favicon.png">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js"></script>
    <style>
    .v-counter-nav {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--n-gold); 
    font-size: 0.75rem; /* تم تصغير الخط قليلاً ليناسب مكانه الجديد */
    font-weight: bold;
    background: rgba(255, 207, 75, 0.1);
    padding: 3px 10px; /* تقليل الحشو ليكون أنحف */
    border-radius: 12px;
    border: 1px solid rgba(255, 207, 75, 0.2);
    width: fit-content; /* ليأخذ حجم النص فقط */
    margin-left: auto; /* لضمان محاذاته لليسار مع الراديو */
}

/* تحسين الظهور على الموبايل */
@media (max-width: 480px) {
    .v-counter-nav {
        padding: 4px 8px;
        font-size: 0.7rem;
    }
    .v-counter-nav i { font-size: 0.75rem; }
}
        :root {
            --bg: #030014;
            --text: #e0e0e0;
            --glass: rgba(255, 255, 255, 0.05);
            --border: rgba(255, 255, 255, 0.1);
            --n-blue: #00f2ff;
            --n-purple: #bd00ff;
            --n-gold: #ffcf4b;
            --n-pink: #ff0070;
            --n-green: #00ff88;
            --n-orange: #ff5e00;
            --n-red: #ff3131;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; outline: none; -webkit-tap-highlight-color: transparent; }

        body {
            background: var(--bg);
            color: var(--text);
            font-family: 'Tajawal', sans-serif;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        /* --- نجوم الخلفية --- */
        .stars-bg {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at center, #0a001a 0%, #030014 100%);
            z-index: -1;
        }
        .star {
            position: absolute; background: white; border-radius: 50%;
            opacity: 0.3; animation: twinkle var(--d) infinite ease-in-out;
        }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }

        /* --- اللوجو الإسلامي --- */
        .brand-box { display: flex; flex-direction: column; align-items: center; cursor: pointer; padding: 5px; }
        .islamic-icon { font-size: 1.8rem; color: var(--n-gold); text-shadow: 0 0 15px var(--n-gold); margin-bottom: -4px; }
        .brand-text { font-family: 'Tajawal'; font-size: 1.4rem; font-weight: 900; color: var(--n-blue); text-shadow: 0 0 10px var(--n-blue); letter-spacing: 1px; }

        /* --- الهيدر والراديو --- */
        nav {
            position: fixed; top: 10px; left: 50%; transform: translateX(-50%);
            width: 95%; max-width: 1100px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(25px);
            border: 1px solid var(--border);
            border-radius: 30px;
            padding: 10px 20px;
            display: flex; justify-content: space-between; align-items: center;
            z-index: 2000;
            box-shadow: 0 0 30px rgba(0,0,0,0.6);
        }
        .nav-left { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
        #h-date-display { font-size: 0.75rem; color: var(--n-gold); font-weight: bold; }
        .radio-control { display: flex; align-items: center; gap: 8px; color: var(--n-green); font-size: 0.7rem; background: rgba(0,255,136,0.1); padding: 4px 10px; border-radius: 20px; cursor: pointer; transition: 0.3s; }
        .radio-control:hover { background: rgba(0,255,136,0.2); box-shadow: 0 0 10px var(--n-green); }
        #radio-select { background: transparent; border: none; color: var(--n-green); font-size: 0.7rem; font-family: 'Tajawal'; width: 100px; cursor: pointer; }
        #radio-select option { color: #000; background: #fff; }

        /* --- نظام الصفحات SPA --- */
        .page { display: none; min-height: 100vh; padding: 140px 5% 80px; animation: fadeIn 0.4s ease-out; }
        .page.active { display: block; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }

        /* --- شبكة البطاقات النيون --- */
        .neon-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
        .neon-card {
            background: var(--glass); border: 1px solid var(--border);
            border-radius: 25px; padding: 30px; text-align: center; cursor: pointer;
            transition: 0.4s; backdrop-filter: blur(10px);
        }
        .neon-card:hover { transform: translateY(-8px); border-color: var(--clr); box-shadow: 0 0 20px var(--clr); }
        .neon-card i { font-size: 2.5rem; color: var(--clr); margin-bottom: 15px; text-shadow: 0 0 10px var(--clr); }
        .neon-card h3 { font-family: 'Zain'; font-size: 1.5rem; color: #fff; }
        .neon-card p { font-size: 0.8rem; color: #aaa; margin-top: 5px; line-height: 1.4; }

        .c-blue { --clr: var(--n-blue); }
        .c-purple { --clr: var(--n-purple); }
        .c-gold { --clr: var(--n-gold); }
        .c-green { --clr: var(--n-green); }
        .c-pink { --clr: var(--n-pink); }
        .c-orange { --clr: var(--n-orange); }

        /* --- صناديق المحتوى --- */
        .content-box {
            max-width: 950px; margin: 0 auto;
            background: var(--glass); border: 1px solid var(--border);
            border-radius: 35px; padding: 30px; backdrop-filter: blur(15px);
        }
        .reader-text { font-family: 'Amiri'; font-size: 2.1rem; line-height: 2.5; text-align: center; color: #fff; }
        .btn-neon {
            background: transparent; border: 1px solid var(--n-blue); color: var(--n-blue);
            padding: 8px 25px; border-radius: 50px; cursor: pointer; margin-bottom: 20px;
            font-family: 'Tajawal'; font-weight: bold; transition: 0.3s;
        }
        .btn-neon:hover { background: var(--n-blue); color: #000; box-shadow: 0 0 10px var(--n-blue); }

        /* --- الحديث والاختبار --- */
        .hadith-card { background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 20px; padding: 25px; margin-bottom: 20px; }
        .h-num { color: var(--n-green); font-weight: 800; font-size: 0.9rem; margin-bottom: 8px; display: block; }
        .timer-wrap { width: 100%; height: 6px; background: rgba(255,255,255,0.05); border-radius: 10px; margin-bottom: 20px; overflow: hidden; }
        .timer-bar { height: 100%; background: var(--n-orange); width: 100%; transition: width 0.1s linear; }
        .opt-btn {
            width: 100%; padding: 18px; margin-bottom: 10px;
            background: rgba(255,255,255,0.04); border: 1px solid var(--border);
            border-radius: 20px; color: #fff; text-align: right; cursor: pointer;
            transition: 0.3s; font-size: 1.1rem;
        }
        .opt-btn.correct { background: rgba(0, 255, 136, 0.2) !important; border-color: var(--n-green) !important; box-shadow: 0 0 15px var(--n-green); }
        .opt-btn.wrong { background: rgba(255, 49, 49, 0.2) !important; border-color: var(--n-red) !important; box-shadow: 0 0 15px var(--n-red); }

        /* --- المسبحة --- */
       /* --- تصميم المسبحة الرقمية الجديد --- */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap');

/* الحاوية الرئيسية للجهاز */
.digital-tasbih-box {
    width: 300px;
    height: 480px;
    margin: 20px auto;
    background: linear-gradient(145deg, #0a0015, #1a0025);
    border-radius: 50px;
    border: 3px solid var(--n-pink);
    box-shadow: 
        0 0 20px var(--n-pink),
        inset 0 0 30px rgba(255, 0, 112, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    position: relative;
    user-select: none;
}

/* العنوان أعلى المسبحة */
.d-title {
    color: var(--n-pink);
    font-family: 'Tajawal';
    font-size: 1.2rem;
    margin-bottom: 25px;
    text-shadow: 0 0 10px var(--n-pink);
    font-weight: bold;
}

/* الشاشة الرقمية */
.d-screen-border {
    width: 100%;
    padding: 5px;
    border: 2px solid var(--n-blue);
    border-radius: 25px;
    box-shadow: 0 0 15px var(--n-blue);
    margin-bottom: 40px;
    background: rgba(0, 242, 255, 0.05);
}

.d-screen {
    background: #050505;
    border-radius: 20px;
    padding: 20px 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* الرقم بداخل الشاشة */
#tas-val-num {
    font-family: 'Orbitron', sans-serif; /* خط رقمي */
    font-size: 3.5rem;
    color: #fff;
    text-shadow: 0 0 10px #fff;
    letter-spacing: 3px;
    line-height: 1;
}

/* نوع الذكر داخل الشاشة */
#tas-phr-text {
    font-family: 'Amiri';
    color: var(--n-blue);
    font-size: 1.1rem;
    margin-top: 5px;
}

/* الزر الكبير (زر التسبيح) */
.big-tasbih-btn {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #444, #111);
    border: 2px solid var(--n-blue);
    box-shadow: 
        0 5px 15px #000,
        0 0 20px var(--n-blue),
        inset 0 0 20px rgba(0, 242, 255, 0.3);
    cursor: pointer;
    transition: 0.1s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* تأثير اللمعة على الزر */
.big-tasbih-btn::after {
    content: '';
    position: absolute;
    top: 20px; left: 25px;
    width: 20px; height: 10px;
    background: rgba(255,255,255,0.4);
    border-radius: 50%;
    transform: rotate(-45deg);
}

.big-tasbih-btn:active {
    transform: scale(0.92);
    box-shadow: 0 2px 10px #000, 0 0 10px var(--n-blue);
    background: radial-gradient(circle at 50% 50%, #222, #000);
}

/* زر صغير جانبي (اختياري للتصفير) */
.small-reset-btn {
    width: 20px;
    height: 20px;
    background: #333;
    border-radius: 50%;
    position: absolute;
    right: 30px;
    bottom: 120px;
    cursor: pointer;
    border: 1px solid #555;
}
.small-reset-btn:active { transform: scale(0.9); }

        /* --- مشغل الصوت --- */
        .audio-neon {
            position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
            width: 95%; max-width: 550px;
            background: rgba(0,0,0,0.92); backdrop-filter: blur(25px);
            border: 1px solid var(--n-blue); border-radius: 100px;
            padding: 12px 25px; display: none; justify-content: space-between; align-items: center;
            z-index: 3000; box-shadow: 0 0 25px var(--n-blue);
        }

        /* --- حاسبة الزكاة --- */
        .zakat-input { width: 100%; padding: 15px; margin-bottom: 15px; background: rgba(255,255,255,0.05); border: 1px solid var(--n-blue); border-radius: 15px; color: #fff; font-size: 1rem; }
        .zakat-result { padding: 20px; background: rgba(0,242,255,0.1); border-radius: 15px; border: 1px dashed var(--n-blue); margin-top: 20px; }

        /* --- فيديوهات يوتيوب --- */
        .video-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 15px; margin-bottom: 10px; border: 1px solid var(--n-purple); }
        .video-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

        @media (max-width: 768px) {
            .hero-title { font-size: 2.2rem !important; }
            .neon-grid { grid-template-columns: 1fr; }
            nav { padding: 10px 15px; }
            .brand-text { font-size: 1.1rem; }
        }
    </style>
</head>
<audio id="global-audio-tag"></audio>
<body>

    <div class="stars-bg" id="stars-box"></div>

   <nav>
    <div class="brand-box" onclick="showPage('home')">
        <i class="fas fa-kaaba islamic-icon"></i>
        <span class="brand-text">اليقين</span>
    </div>

    <div class="nav-left">
        <div id="h-date-display">...</div>
        
        <div class="radio-control" title="تشغيل إذاعة القرآن">
            <i class="fas fa-tower-broadcast"></i>
            <select id="radio-select" onchange="changeRadio(this.value)">
                <option value="">اختر الإذاعة</option>
            </select>
            <i class="fas fa-play-circle" id="radio-toggle" onclick="toggleRadio()"></i>
        </div>

        <div class="v-counter-nav" title="إجمالي عدد زيارات المنصة" style="margin-top: 4px;">
            <i class="fas fa-users"></i>
            <span id="visitor-count-header">...</span>
        </div>
    </div>
</nav>
    
    <!-- الرئيسية -->
    <main id="home-page" class="page active">
        <header style="text-align:center; margin-bottom: 50px;">
            <h1 class="hero-title" style="font-family:'Amiri'; font-size:3.5rem; color:#fff; text-shadow: 0 0 20px var(--n-blue);">أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ</h1>
            <div id="p-next-info" style="color:var(--n-gold); margin-top:10px; font-weight:bold; letter-spacing:1px;">جاري جلب المواقيت...</div>
        </header>

        <div class="neon-grid">
            <div class="neon-card c-blue" onclick="showPage('quran')">
                <i class="fas fa-book-quran"></i>
                <h3>القرآن الكريم</h3>
                <p>تلاوات خاشعة لأشهر قراء العالم الإسلامي برواية حفص عن عاصم</p>
            </div>
            <div class="neon-card c-purple" onclick="showPage('adhkar')">
                <i class="fas fa-moon"></i>
                <h3>حصن المسلم</h3>
                <p>موسوعة الأذكار اليومية الصحيحة من الكتاب والسنة لكل أوقاتك</p>
            </div>
            <div class="neon-card c-gold" onclick="showPage('seerah')">
                <i class="fas fa-history"></i>
                <h3>السيرة النبوية</h3>
              <p>سيرة عطرة تروي فصول حياة الحبيب المصطفى ﷺ، لتزداد له حباً وبه اقتداءً.</p>
            </div>
            <div class="neon-card c-green" onclick="showPage('hadith')">
                <i class="fas fa-scroll"></i>
 <h3>صحيح البخاري</h3>
    <p>تصفح أصح كتب السنة النبوية الشريفة عبر عرض رقمي دقيق وميسر لمجلدات صحيح البخاري</p>
            </div>
            <div class="neon-card c-pink" onclick="showPage('tasbih')">
                <i class="fas fa-fingerprint"></i>
                <h3>المسبحة الذكية</h3>
                <p>عداد تسبيح رقمي تفاعلي مع مجموعة مختارة من الأذكار والثناء</p>
            </div>
            <div class="neon-card c-orange" onclick="showPage('quiz')">
                <i class="fas fa-bolt"></i>
                <h3>اختبار اليقين</h3>
            <p>رحلة معرفية ممتعة لترسيخ معلوماتك الدينية واكتساب الجديد منها، مع تصحيح فوري للأخطاء لضمان الاستفادة.</p>
            </div>
            <div class="neon-card c-purple" onclick="showPage('video')">
                <i class="fas fa-play-circle"></i>
                <h3>مكتبة الفيديو</h3>
                <p>شاهد أرقى المواعظ والقصص الإسلامية المختارة بعناية</p>
            </div>
            <div class="neon-card c-blue" onclick="showPage('zakat')">
                <i class="fas fa-coins"></i>
                <h3>حساب الزكاة</h3>
                <p>حاسبة مالية شرعية دقيقة لمعرفة نصاب زكاة مالك والذهب</p>
            </div>
            <div class="neon-card c-pink" onclick="showPage('sadaqah')">
                <i class="fas fa-heart"></i>
                <h3>صدقة جارية</h3>
              <p>لتبقى ذكراهم حية في القلوب، وتصلهم دعواتنا في الغيب. مساحة مخصصة لأجمل الأدعية الجامعة للمتوفين.</p>
            </div>
        </div>
    </main>

    <!-- صفحة القرآن -->
    <section id="quran-page" class="page">
        <button class="btn-neon" onclick="showPage('home')">الرئيسية</button>
        <div class="content-box">
            <h2 style="color:var(--n-blue); margin-bottom:20px; font-family:'Zain';">المصحف المرتل</h2>
            <div style="margin-bottom:25px; display:flex; gap:10px; align-items:center;">
                <label>اختر القارئ:</label>
                <select id="q-rec-sel" style="background:#111; color:#fff; border:1px solid var(--n-blue); padding:10px; border-radius:15px; flex:1; font-family:'Tajawal';">
                    <option value="https://server12.mp3quran.net/maher/">ماهر المعيقلي</option>
                    <option value="https://server11.mp3quran.net/yasser/">ياسر الدوسري</option>
                    <option value="https://server6.mp3quran.net/qtm/">ناصر القطامي</option>
                    <option value="https://server10.mp3quran.net/minsh/">محمد صديق المنشاوي</option>
                    <option value="https://server8.mp3quran.net/afs/">مشاري العفاسي</option>
                    <option value="https://server11.mp3quran.net/sds/">عبد الرحمن السديس</option>
                    <option value="https://server13.mp3quran.net/husr/">محمود خليل الحصري</option>
                </select>
            </div>
            <div style="margin-bottom: 20px;">
    <input type="text" id="quran-search" oninput="filterQuran()" 
           placeholder="ابحث عن اسم السورة..." 
           style="width: 100%; padding: 12px 20px; background: rgba(255,255,255,0.05); 
                  border: 1px solid var(--n-blue); border-radius: 15px; color: #fff; 
                  font-family: 'Tajawal'; outline: none; transition: 0.3s;"
           onfocus="this.style.boxShadow='0 0 15px var(--n-blue)'"
           onblur="this.style.boxShadow='none'">
</div>
            <div class="neon-grid" id="quran-grid"></div>
        </div>
    </section>

    <!-- واجهة القراءة -->
    <section id="reader-page" class="page">
        <button class="btn-neon" id="r-back-btn">عودة</button>
        <div class="content-box">
            <h2 id="r-title" style="text-align:center; color:var(--n-gold); margin-bottom:30px; font-size:1.8rem; font-family:'Zain';"></h2>
            <div id="r-content-area"></div>
        </div>
    </section>

    <!-- صفحة مكتبة الفيديو (جديدة) -->
    <section id="video-page" class="page">
    <button class="btn-neon" onclick="showPage('home')">الرئيسية</button>
    <div class="content-box">
        <h2 style="color:var(--n-purple); margin-bottom:10px; font-family:'Zain'; text-align:center;">مكتبة اليقين المرئية</h2>
        <p style="text-align:center; color:#aaa; margin-bottom:30px; font-size:0.9rem;">اضغط على الفيديو للمشاهدة على يوتيوب</p>
        
        <div class="neon-grid" id="video-library-grid"></div>
    </div>
</section>

    <!-- صفحة حساب الزكاة (جديدة) -->
    <section id="zakat-page" class="page">
        <button class="btn-neon" onclick="showPage('home')">الرئيسية</button>
        <div class="content-box" style="max-width: 500px;">
            <h2 style="color:var(--n-blue); margin-bottom:30px; font-family:'Zain'; text-align:center;">حاسبة الزكاة الشرعية</h2>
            <p style="margin-bottom:15px; font-size:0.9rem; color:#aaa;">أدخل إجمالي المبلغ النقدي أو قيمة الذهب:</p>
            <input type="number" id="zak-amount" class="zakat-input" placeholder="المبلغ بالجنيه / العملة المحلية">
            <button class="btn-neon" style="width:100%; border-color:var(--n-blue);" onclick="calculateZakat()">احسب الزكاة</button>
            <div id="zak-res-box" class="zakat-result" style="display:none;">
                <h4 id="zak-val" style="color:var(--n-blue); font-size:1.5rem; text-align:center;">0</h4>
                <p style="text-align:center; font-size:0.8rem; margin-top:5px;">هذا هو مقدار 2.5% من إجمالي مالك</p>
            </div>
        </div>
    </section>

    <!-- صفحة صدقة جارية (جديدة) -->
<section id="sadaqah-page" class="page">
    <button class="btn-neon" onclick="showPage('home')">الرئيسية</button>
    <div class="content-box">
        <h2 style="color:var(--n-pink); margin-bottom:30px; font-family:'Zain'; text-align:center;">صدقة جارية (سجل الوفاء)</h2>
        <div style="display:flex; flex-direction:column; gap:15px; margin-bottom:30px;">
            <input type="text" id="dead-name" class="zakat-input" style="margin:0; border-color:var(--n-pink);" placeholder="اسم المتوفى..">
            
            <select id="prayer-select" class="zakat-input" style="margin:0; border-color:var(--n-pink); background:#1a1a1a; color:white;">
                <option value="اللهم اغفر له وارحمه، وعافه واعف عنه، وأكرم نزله، ووسع مدخله، واجعل قبره روضة من رياض الجنة.">دعاء شامل للمتوفى</option>
                <option value="اللهم أبدله داراً خيراً من داره، وأهلاً خيراً من أهله، وأدخله الجنة، وأعذه من عذاب القبر.">دعاء بالجنة والوقاية من النار</option>
                <option value="اللهم إن كان محسناً فزد في إحسانه، وإن كان مسيئاً فتجاوز عن سيئاته يا غفور.">دعاء للمحسن والمسيء</option>
                <option value="اللهم ثبته عند السؤال، ونور مرقده وعطر مشهده، وآنس وحشته وغربته.">دعاء بالثبات والأنس</option>
            </select>

            <button class="btn-neon" style="margin:0; border-color:var(--n-pink); color:var(--n-pink);" onclick="addDeadName()">حفظ ونشر الدعاء</button>
        </div>
        <div id="dead-list" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap:20px;">
            </div>
    </div>
</section>


    <!-- باقي الأقسام الأصلية كما هي... -->
    <section id="hadith-page" class="page">
        <button class="btn-neon" onclick="showPage('home')">الرئيسية</button>
        <div class="content-box">
            <h2 style="color:var(--n-green); margin-bottom:30px; font-family:'Zain';">صحيح البخاري - المجلدات</h2>
            <div class="neon-grid" id="bukhari-chapters">
                <div class="neon-card c-green" onclick="loadBukhariHadiths(1, 'كتاب بدء الوحي')"><h3>بدء الوحي</h3></div>
                <div class="neon-card c-green" onclick="loadBukhariHadiths(2, 'كتاب الإيمان')"><h3>كتاب الإيمان</h3></div>
                <div class="neon-card c-green" onclick="loadBukhariHadiths(3, 'كتاب العلم')"><h3>كتاب العلم</h3></div>
                <div class="neon-card c-green" onclick="loadBukhariHadiths(4, 'كتاب الوضوء')"><h3>كتاب الوضوء</h3></div>
                <div class="neon-card c-green" onclick="loadBukhariHadiths(5, 'كتاب الغسل')"><h3>كتاب الغسل</h3></div>
            </div>
        </div>
    </section>

    <section id="adhkar-page" class="page">
        <button class="btn-neon" onclick="showPage('home')">الرئيسية</button>
        <div class="neon-grid">
            <div class="neon-card c-purple" onclick="openAdhkar('morning')"><i class="fas fa-sun"></i><h3>أذكار الصباح</h3></div>
            <div class="neon-card c-purple" onclick="openAdhkar('evening')"><i class="fas fa-cloud-moon"></i><h3>أذكار المساء</h3></div>
            <div class="neon-card c-purple" onclick="openAdhkar('sleep')"><i class="fas fa-bed"></i><h3>أذكار النوم</h3></div>
            <div class="neon-card c-purple" onclick="openAdhkar('prayer')"><i class="fas fa-pray"></i><h3>أذكار الصلاة</h3></div>
        </div>
    </section>

    <section id="seerah-page" class="page">
        <button class="btn-neon" onclick="showPage('home')">الرئيسية</button>
        <h2 style="color:var(--n-gold); margin-bottom:30px; font-family:'Zain';">السيرة النبوية الكاملة</h2>
        <div class="neon-grid" id="seerah-grid"></div>
    </section>

    <section id="quiz-page" class="page">
        <button class="btn-neon" onclick="showPage('home')">الرئيسية</button>
        <div class="content-box">
            <div id="quiz-init-ui" style="text-align:center; padding:40px;">
                <i class="fas fa-bolt" style="font-size:4rem; color:var(--n-orange); margin-bottom:20px;"></i>
                <h2>تحدي اليقين (50 سؤالاً)</h2>
                <button class="btn-neon" style="border-color:var(--n-orange); color:var(--n-orange); margin-top:20px;" onclick="startQuiz()">ابدأ التحدي</button>
            </div>
            <div id="quiz-play-ui" style="display:none; text-align:right;">
                <div class="timer-wrap"><div id="q-timer-fill" class="timer-bar"></div></div>
                <p id="q-progress" style="color:var(--n-orange); font-weight:bold; margin-bottom:10px;"></p>
                <h3 id="q-text" style="margin-bottom:25px; font-size:1.2rem;"></h3>
                <div id="q-options-container"></div>
            </div>
        </div>
    </section>

    <section id="tasbih-page" class="page">
    <button class="btn-neon" onclick="showPage('home')">الرئيسية</button>
    
    <div class="digital-tasbih-box">
        <div class="d-title">مسبحة إلكترونية</div>
        
        <div class="d-screen-border">
            <div class="d-screen">
                <div id="tas-phr-text">سبحان الله</div>
                <h1 id="tas-val-num">00000</h1>
            </div>
        </div>

        <div class="big-tasbih-btn" onclick="incTasVal()"></div>

        <div class="small-reset-btn" title="تصفير" onclick="resetTasCounter()"></div>
    </div>

    <div style="text-align:center; margin-top:20px;">
        <button class="btn-neon" style="border-color:var(--n-pink); color:var(--n-pink); width: 200px;" onclick="nextTasPhrase()">تغيير الذكر</button>
    </div>
</section>


    

    <!-- مشغل الصوت السفلي -->
   <div class="audio-neon" id="p-bar-ui" style="flex-direction: column; height: auto; padding: 15px; border-radius: 20px; bottom: 10px;">
    <div style="display:flex; justify-content: space-between; align-items:center; width: 100%; margin-bottom: 10px;">
        <div style="display:flex; align-items:center; gap:12px;">
            <div id="play-pause-btn" onclick="toggleMainAudio()" style="width:45px; height:45px; background:var(--n-blue); border-radius:50%; display:flex; justify-content:center; align-items:center; color:#000; cursor:pointer;">
                <i class="fas fa-pause" id="p-icon-main"></i>
            </div>
            <div class="p-info">
                <h4 id="now-surah" style="font-size: 1rem;">اسم السورة</h4>
                <p id="now-reciter" style="font-size: 0.8rem; color: var(--n-blue);">القارئ</p>
            </div>
        </div>
        <button class="btn-neon" style="margin:0; padding:5px 15px; font-size:0.8rem; border-color: var(--n-red); color: var(--n-red);" onclick="stopAudio()">إغلاق</button>
    </div>
    
    <div style="width: 100%; display: flex; align-items: center; gap: 10px;">
        <span id="curr-time" style="font-size: 0.7rem; color: #aaa;">00:00</span>
        <input type="range" id="audio-progress" value="0" style="flex: 1; accent-color: var(--n-blue); cursor: pointer;">
        <span id="total-time" style="font-size: 0.7rem; color: #aaa;">00:00</span>
    </div>
</div>

    <audio id="radio-audio-tag"></audio>

    <script>
        // --- قاعدة البيانات ---
        const db = {
            seerah: [
{
                    t: "1. العالم قبل النور (ظلمات الجاهلية)",
                    d: `<strong>حال الأرض قبل المولد:</strong><br>
        قبل مولد النبي ﷺ، كانت البشرية تعيش في "فترة" انقطاع من الرسل، وعم الظلام الأرض. طغت الإمبراطوريتان (الروم والفرس) واستعبدتا البشر. أما العرب، فقد بدلت دين إبراهيم، وعبدت الأصنام (هبل واللات والعزى)، وانتشرت فيهم العادات الذميمة كوأد البنات، وشرب الخمر، والحروب القبلية لأتفه الأسباب (كحرب البسوس وداحس والغبراء). كان العالم يصرخ في صمت، ينتظر المخلص الذي سيخرج الناس من الظلمات إلى النور.<br><br>
        <strong>بشارة الأنبياء:</strong><br>
        كانت الكتب السماوية السابقة (التوراة والإنجيل) تبشر بنبي يخرج من جبال فاران (مكة)، وكانت اليهود في المدينة يتوعدون العرب بظهور نبي يقاتلونهم معه، فكانت الأرض تتهيأ لاستقبال سيد الخلق.`
                },
                {
                    t: "2. عام الفيل وقصة أبرهة (حماية البيت)",
                    d: `<strong>أبرهة وكنيسة القليس:</strong><br>
        بنى "أبرهة الأشرم" (حاكم اليمن من قبل النجاشي) كنيسة عظيمة مرصعة بالذهب والفضة، وأراد أن يصرف حج العرب إليها بدلاً من الكعبة. غضب رجل من العرب وذهب للكنيسة ليلاً فدنسها، فغضب أبرهة وأقسم ليهدمن الكعبة.<br><br>
        <strong>جيش الفيل:</strong><br>
        جهز جيشاً جراراً يتقدمه فيل عظيم (محمود) لم تر العرب مثله. كلما خرجت قبيلة لصده هزمها. وصل "المغمس" قرب مكة، وساق أموال قريش ومنها 200 بعير لعبد المطلب (جد النبي).<br><br>
        <strong>أنا رب الإبل:</strong><br>
        ذهب عبد المطلب لأبرهة، وكان رجلاً مهيباً، فنزل أبرهة عن سريره إجلالاً له. طلب عبد المطلب إبله، فتعجب أبرهة وقال: "سقطت من عيني! جئت تطلب إبلاً وتترك بيتاً هو دينك ودين آبائك جئت لأهدمه؟". فقال عبد المطلب كلمته الخالدة: "أنا رب الإبل، وللبيت رب يحميه".<br><br>
        <strong>المعجزة (طير أبابيل):</strong><br>
        أخلى أهل مكة البلدة وتحصنوا بالجبال. وجهوا الفيل للكعبة فبرك وامتنع، ووجهوه لليمن فهرول. وبينما هم كذلك، أظلمت السماء بطيور قادمة من البحر (أبابيل: جماعات متفرقة)، يحمل كل طير 3 حجارة من سجيل (طين متحجر)، فدمرت الجيش وجعلتهم كعصف مأكول (ورق شجر متآكل). طهر الله مكة وحمى بيته، تمهيداً لمولد صاحبه.`
                },
                {
                    t: "3. قصة الذبيحين (طهارة النسب)",
                    d: `<strong>من هو ابن الذبيحين؟</strong><br>
        كان النبي ﷺ يفتخر بنسبه ويقول: "أنا ابن الذبيحين".<br>
        <strong>الذبيح الأول (إسماعيل عليه السلام):</strong><br>
        هو جد النبي الأعلى. رأى أبوه إبراهيم في المنام أنه يذبحه، فسلم الأب والابن لأمر الله، ففداه الله بذبح عظيم (كبش من السماء).<br><br>
        <strong>الذبيح الثاني (عبد الله والد النبي):</strong><br>
        كان "عبد المطلب" قد نذر حين لقى عنت قريش عند حفر زمزم، لئن رزقه الله عشرة أبناء يحمونه ليذبحن أحدهم قرباناً لله عند الكعبة. فلما تموا عشرة، أقرع بينهم، فخرج السهم على أحبهم إليه "عبد الله".<br><br>
        <strong>الفداء بالمائة:</strong><br>
        أخذ عبد المطلب السكين، فمنعته قريش وأخواله. احتكموا لعرافة، فأشارت أن يضربوا القرعة بين "عبد الله" وبين 10 من الإبل، فإن خرجت على عبد الله زادوا الإبل 10، وهكذا. ظلوا يزيدون حتى بلغت 100 ناقة، فخرج السهم على الإبل. فذبحت الإبل فداءً لعبد الله، ليسلم الوالد، ويخرج من صلبه سيد ولد آدم.`
                },
                {
                    t: "4. زواج آمنة والمولد النبوي الشريف",
                    d: `<strong>زواج الزهرة:</strong><br>
        بعد نجاة عبد الله من الذبح، زوده أبوه فتزوج "آمنة بنت وهب"، سيدة نساء بني زهرة شرفاً ونسباً. حملت بالنبي ﷺ، فكانت تقول: "ما وجدت له ثقلاً، وأتاني آتٍ في المنام فقال: إنك حملت بسيد هذه الأمة، فإذا وقع على الأرض فقولي: أعيذه بالواحد من شر كل حاسد، وسميه محمداً".<br><br>
        <strong>ليلة المولد (12 ربيع الأول 571م):</strong><br>
        توفي عبد الله وآمنة حامل، فعاش النبي يتيماً قبل مولده. وفي فجر الاثنين، وضعت آمنة حملها. خرج معه نور أضاء له قصور بصرى بالشام. وُلِد نظيفاً، مختوناً، مقطوع السرة، معتمداً على يديه رافعاً رأسه للسماء. فرح به جده عبد المطلب، وطاف به الكعبة، وسماه "محمداً" رجاء أن يُحمد في السماء والأرض، وختنه يوم سابعه وأطعم الناس، وحمته رعاية الله.`
                },
                {
                    t: "5. في ديار بني سعد (النشأة المباركة)",
                    d: `<strong>قدوم المرضعات:</strong><br>
        جاءت المرضعات من البادية، فرفضن اليتيم لقلة ماله. أخذته "حليمة السعدية" مضطرة لئلا تعود فارغة. كانت دابتها عجفاء (ضعيفة)، وثديها لا يدر لبناً، وزوجها يشكو الفقر.<br><br>
        <strong>البركة الفورية:</strong><br>
        مجرد أن حملته، در ثديها فشبع ونام، وشبع أخوه من الرضاعة. وامتلأ ضرع ناقتهم العجفاء، وفي الصباح سبقت دابتُها الركبَ كله، حتى تعجبت النسوة. حلت البركة في ديار بني سعد، فكانت أغنامهم تعود شباعاً في سنة قحط.<br><br>
        <strong>حادثة شق الصدر:</strong><br>
        في سن الرابعة، أتاه ملكان (جبريل وميكائيل) في صورة رجلين، فصرعاه، وشقا صدره، واستخرجا قلبه، فغسلاه في طست من ذهب بماء زمزم، ونزعا "علقة سوداء" وقالا: "هذا حظ الشيطان منك"، ثم خاطا صدره. بقي أثر المخيط في صدره، وكان ذلك إعداداً للعصمة.`
                },
                {
                    t: "6. مسلسل اليتم وتتابع الأحزان (6 - 8 سنوات)",
                    d: `<strong>1. رحلة الذكريات والألم:</strong><br>
        لما بلغ النبي ﷺ السادسة، رأت أمه "آمنة" أن تخرج به إلى يثرب (المدينة) لزيارة أخواله "بني النجار"، وليقف اليتيم على قبر أبيه "عبد الله". قضوا هناك شهراً، تعلم فيه السباحة في بئر بني عدي. وفي طريق العودة إلى مكة، وفي مكان موحش وصحراء قاحلة تسمى "الأبواء"، فاجأ المرض الأم الرؤوم، فماتت وهي في ريعان شبابها أمام ناظري طفلها الصغير. دفنها النبي بدموعه بمساعدة حاضنته "أم أيمن"، وعاد إلى مكة يتيماً للأب والأم، لا يملك من الدنيا إلا رحمة الله.<br><br>
        <strong>2. في كفالة سيد مكة (عبد المطلب):</strong><br>
        احتضن الجد حفيده اليتيم، ورقّ قلبه له رقة لم يعهدها أحد من أبنائه. كان لعبد المطلب فراش وثير يوضع في ظل الكعبة، لا يجرؤ أحد من سادات قريش أو أبنائه أن يجلس عليه هيبة له، فكان النبي ﷺ يأتي وهو غلام فيجلس عليه، فيحاول أعمامه منعه، فيقول الجد بحنان بالغ: "دعوا ابني، فوالله إن له لشأناً"، ثم يمسح على ظهره ويُسر بما يرى من نجابته.<br><br>
        <strong>3. الوداع الثاني:</strong><br>
        لم تطل أيام الأمان؛ فبعد عامين فقط (وعمر النبي 8 سنوات)، توفي الجد الحنون "عبد المطلب". ورُؤي النبي ﷺ وهو يبكي خلف سرير جده في الجنازة، ليدخل في دور جديد من أطوار اليتم، وتنتقل كفالته بوصية الجد إلى شقيق أبيه "أبي طالب".`
                },
                {
                    t: "7. في كنف أبي طالب وشبابه الطاهر",
                    d: `<strong>إيثار العم:</strong><br>
        انتقل لبيت عمه "أبي طالب". كان فقيراً كثير العيال، لكنه أحب النبي وقدمه على أولاده. ظهرت البركة، فكانوا إذا أكلوا مع النبي شبعوا. قام أبو طالب بحمايته ونصرته لأكثر من 40 سنة.<br><br>
        <strong>رعي الغنم:</strong><br>
        عمل النبي برعي الغنم لأهل مكة ليخفف الحمل عن عمه. قال ﷺ: "ما بعث الله نبياً إلا رعى الغنم". تعلم منها: الرحمة، الصبر، الجمع بعد التفرق، واليقظة للذئاب (الأعداء).<br><br>
        <strong>حفظ الله له:</strong><br>
        عصمه الله في شبابه من الرذائل؛ لم يسجد لصنم، ولم يشرب خمراً. حاول مرتين أن يسمر في أعراس الجاهلية، فضرب الله عليه النوم.`
                },
                {
                    t: "8. حرب الفجار وحلف الفضول وتجارة خديجة",
                    d: `<strong>الشهامة المبكرة:</strong><br>
        شارك في "حرب الفجار" (15 سنة) ينبل على أعمامه دفاعاً عن الحرم. وشهد "حلف الفضول" في دار ابن جدعان لنصرة المظلوم، وأثنى عليه في الإسلام.<br><br>
        <strong>زواج خديجة:</strong><br>
        خرج تاجراً بمال خديجة للشام، وربح كثيراً. رأت فيه الأمانة، والصدق، ورأى غلامها "ميسرة" الغمام يظله. عرضت عليه الزواج، فتزوجها وهو ابن 25 وهي بنت 40. كانت نعم الزوجة والسند، وأنجبت له كل أولاده إلا إبراهيم.`
                },
                {
                    t: "9. تجديد الكعبة وحكمة الصادق الأمين (35 سنة)",
                    d: `<strong>1. شرط المال الحلال:</strong><br>
        في سن الخامسة والثلاثين، جرف سيل عظيم مكة (سيل العرم)، فتصدعت جدران الكعبة وأوشكت على الانهيار. قررت قريش هدمها وإعادة بنائها لرفع قواعدها، واشترطوا شرطاً عجيباً وهم في الجاهلية: "لا تدخلوا في بنائها إلا مالاً طيباً؛ لا يدخل فيها مهر بغي، ولا بيع ربا، ولا مظلمة أحد من الناس". ولما قصرت بهم النفقة الطيبة (الحلال) عن إتمام البناء، اضطروا لإخراج جزء من الكعبة (وهو حجر إسماعيل/الحطيم) وبنوا عليه جداراً قصيراً.<br><br>
        <strong>2. نذر الدم وفتنة القبائل:</strong><br>
        سار العمل بانتظام، وتقاسمت القبائل جوانب البيت، حتى وصلوا لموضع "الحجر الأسود". هنا توقف العمل، وتنازعت القبائل، كل يريد نيل شرف رفعه. اشتد الخلاف حتى أحضرت بنو عبد الدار جفنة (وعاء) مملوءة دماً، وغمسوا أيديهم فيها هم وبنو عدي تعاهداً على الموت والقتال، وتوقف البناء 4 ليالٍ، وكادت الحرب الأهلية أن تفتك بقريش.<br><br>
        <strong>3. هذا الأمين.. رضينا به:</strong><br>
        اقترح "أبو أمية بن المغيرة" (أكبرهم سناً) أن يحكموا أول داخل عليهم من باب بني شيبة (باب السلام). فحبسوا أنفاسهم، فكان الداخل هو محمد ﷺ. فلما رأوه استبشروا وهتفوا بصوت واحد: "هذا الأمين، رضينا، هذا محمد".<br><br>
        <strong>4. الحل العبقري:</strong><br>
        فلما انتهى إليهم وقصوا عليه الخبر، لم يستأثر بالشرف لنفسه، بل طلب رداءً، ووضع الحجر الأسود في وسطه، ثم قال: "لتأخذ كل قبيلة بطرف من الثوب، ثم ارفعوه جميعاً". ففعلوا، حتى إذا بلغوا موضعه، أخذه بيده الشريفة ووضعه في مكانه، وبنى عليه. وبهذه الحكمة الربانية، حقن دماء العرب وأطفأ نار الفتنة قبل أن تشتعل.`
                },
                {
                    t: "10. إرهاصات النبوة ونزول الوحي",
                    d: `<strong>الخلوة في غار حراء:</strong><br>
        لما قارب الأربعين، حبب الله إليه الخلاء. كان يأخذ زاده ويصعد جبل النور (غار حراء)، يقضي الليالي ذوات العدد يتفكر في خالق هذا الكون، بعيداً عن ضوضاء الشرك. كانت الأحجار والأشجار تسلم عليه: "السلام عليك يا رسول الله".<br><br>
        <strong>اقرأ (لحظة الاتصال):</strong><br>
        في ليلة القدر من رمضان، وبينما هو في الغار، نزل عليه "الروح الأمين" جبريل. سد الأفق، وضمه ضمة شديدة كادت تكسر أضلاعه قائلاً: "اقرأ". والنبي يرتجف: "ما أنا بقارئ". ثلاث مرات، ثم نزلت أول كلمات السماء: {اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ}.<br><br>
        <strong>زملوني زملوني:</strong><br>
        عاد يرجف فؤاده إلى خديجة. لم تخذله، بل طمأنته بكلمات خلدها التاريخ: "كلا والله لا يخزيك الله أبداً؛ إنك لتصل الرحم، وتصدق الحديث، وتحمل الكل". وانطلقت به لورقة بن نوفل الذي بشره بأنه نبي هذه الأمة.`
                },
                {
                    t: "11. الدعوة السرية والجهرية",
                    d: `<strong>دار الأرقم:</strong><br>
        دعا سراً 3 سنوات. أسلم السابقون (خديجة، علي، زيد، أبو بكر). كونوا نواة صلبة في دار الأرقم.<br><br>
        <strong>على الصفا:</strong><br>
        نزل {فَاصْدَعْ بِمَا تُؤْمَرُ}. صعد الصفا ونادى: "واصباحاه"، وأنذر عشيرته. عاداه أبو لهب، وبدأت قريش حرب التشويه والتعذيب. عُذب بلال، وآل ياسر، والمستضعفون، وصبروا ثباتاً على الحق.`
                },
                {
                    t: "12. الهجرة للحبشة وإسلام العمرين",
                    d: `<strong>الحبشة:</strong><br>
        فراراً بالدين، هاجر الصحابة للحبشة مرتين. أكرمهم النجاشي ورفض تسليمهم لقريش بعد سماع القرآن.<br><br>
        <strong>عز الإسلام:</strong><br>
        في ذروة الضعف، أسلم حمزة بن عبد المطلب (أسد الله) حمية، وأسلم عمر بن الخطاب (الفاروق) تأثراً بالقرآن. كان إسلامهما نصراً، فجهر المسلمون بالصلاة عند الكعبة.`
                },
                {
                    t: "13. الحصار والمقاطعة وعام الحزن",
                    d: `<strong>الشعب:</strong><br>
        كتبت قريش صحيفة الظلم: حصار بني هاشم في الشعب (لا بيع ولا زواج). استمر 3 سنوات، أكلوا فيها الشجر. انتهى بمعجزة (الأرضة أكلت الصحيفة).<br><br>
        <strong>عام الحزن (10 للبعثة):</strong><br>
        توفي الحامي (أبو طالب) والسكن (خديجة) في عام واحد. اشتد البلاء على النبي، حتى نثروا التراب على رأسه، وخنقوه وهو يصلي.`
                },
                {
                    t: "14. رحلة الطائف والإسراء والمعراج (من المحنة للمنحة)",
                    d: `<strong>دم الطائف:</strong><br>
        خرج النبي ماشياً إلى الطائف يلتمس النصرة، فردوه بسخرية، ورجموه بالحجارة حتى سال الدم من قدميه. لجأ لبستان ودعا دعاءه الخاشع: "اللهم إليك أشكو ضعف قوتي..". نزل ملك الجبال يعرض الانتقام، فقال نبي الرحمة: "بل أرجو أن يخرج الله من أصلابهم من يعبد الله".<br><br>
        <strong>الإسراء (إمام الأنبياء):</strong><br>
        جاءت التسلية الربانية. أتاه جبريل بـ "البراق" (دابة فوق الحمار ودون البغل، تضع حافرها عند منتهى طرفها). ركبها وطار من مكة إلى بيت المقدس. ربط البراق، ودخل المسجد الأقصى، فوجد الأنبياء جميعاً قد حُشروا له، فصلى بهم ركعتين إماماً، في إعلان رباني بانتقال لواء الرسالة إليه.<br><br>
        <strong>المعراج (في حضرة الملك):</strong><br>
        عُرج به إلى السماوات العلا. استفتح جبريل، فرأى في الأولى آدم، وفي الثانية عيسى ويحيى، وفي الثالثة يوسف (أوتي شطر الجمال)، وفي الرابعة إدريس، وفي الخامسة هارون، وفي السادسة موسى، وفي السابعة إبراهيم (مسنداً ظهره للبيت المعمور).<br><br>
        <strong>سدرة المنتهى وفرض الصلاة:</strong><br>
        ارتقى لمستوى سمع فيه صريف الأقلام، ورأى سدرة المنتهى تغشاها ألوان لا توصف. وهناك، كلمه الله بلا واسطة، وفرض عليه 50 صلاة، فما زال يراجع ربه (بنصيحة موسى) حتى خففت إلى 5 في العمل و50 في الأجر. رأى الجنة والنار، وعاد وفراشه لم يبرد بعد.`
                },
                {
                    t: "15. بيعات العقبة والتمهيد للهجرة",
                    d: `<strong>عرض النفس:</strong><br>
        كان يعرض نفسه على القبائل بالحج. آمن وفد من الخزرج (يثرب).<br><br>
        <strong>العقبة الأولى والثانية:</strong><br>
        بايعه 12 رجلاً بيعة النساء. ثم جاء 73 رجلاً بايعوه بيعة الحرب والنصرة (الدم الدم). أمر الصحابة بالهجرة للمدينة (يثرب) التي تنورت بالقرآن على يد مصعب بن عمير.`
                },
                {
                    t: "16. الهجرة النبوية المباركة",
                    d: `<strong>المؤامرة:</strong><br>
        اجتمعت قريش في دار الندوة لقتله بسيوف القبائل. بات علي في فراشه.<br><br>
        <strong>الغار:</strong><br>
        خرج من بينهم سالماً، واختبأ مع الصديق في غار ثور 3 ليال. حفظتهما عناية الله من الطلب.<br><br>
        <strong>الوصول:</strong><br>
        سلك طريق الساحل. وصل "قباء" وبنى مسجدها. دخل المدينة واستقبل بنشيد "طلع البدر علينا".`
                },
                {
                    t: "17. تأسيس الدولة (بناء الأمة والدستور)",
                    d: `<strong>1. بناء المسجد النبوي (مركز الحياة):</strong><br>
        أول خطوة عملية كانت بناء المسجد. بركت الناقة في أرض لغلامين يتيمين (سهل وسهيل) من بني النجار، فاشتراها النبي وبدأ البناء. لم يكن المسجد مجرد مكان للصلاة، بل كان جامعة للتعليم، وبرلماناً للشورى، وقيادة عسكرية، ومستشفى للجرحى، ومأوى للفقراء (أهل الصفة). شارك النبي ﷺ في نقل اللبنات بيده الشريفة وتغبر جسده وهو يرتجز: "اللهم لا عيش إلا عيش الآخرة.. فارحم الأنصار والمهاجرة"، مما فجر طاقات الصحابة في العمل والبناء.<br><br>
        <strong>2. المؤاخاة (أعظم تكافل في التاريخ):</strong><br>
        لحل الأزمة الاقتصادية والنفسية للمهاجرين الذين تركوا أموالهم بمكة، عقد النبي "المؤاخاة" في دار أنس بن مالك. آخى بين المهاجرين والأنصار (أخوة دم ومال). ضرب الأنصار أروع الأمثلة في الإيثار؛ فهذا "سعد بن الربيع" (الأنصاري) يعرض على أخيه "عبد الرحمن بن عوف" (المهاجر) شطر ماله ليأخذه، فيرد عبد الرحمن بعفة الكبار: "بارك الله لك في أهلك ومالك، دلني على السوق". فذابت الفوارق القبلية والطبقية وتكون نسيج اجتماعي صلب.<br><br>
        <strong>3. وثيقة المدينة (أول دستور مدني):</strong><br>
        كتب النبي كتاباً ينظم العلاقة بين سكان المدينة (مسلمين، يهود بني قينقاع والنضير وقريظة، وبقايا المشركين). كانت وثيقة سابقة لعصرها، أقرت:<br>
        - <strong>حرية الاعتقاد:</strong> "لليهود دينهم وللمسلمين دينهم".<br>
        - <strong>الدفاع المشترك:</strong> "أن بينهم النصر على من دهم يثرب".<br>
        - <strong>حرمة المدينة:</strong> "وإن يثرب حرام جوفها لأهل هذه الصحيفة".<br>
        وبذلك أسس النبي مفهوم "المواطنة" والعدل الاجتماعي.<br><br>
        <strong>4. تشريع الأذان وتحويل القبلة:</strong><br>
        في هذه الفترة التأسيسية، شُرع الأذان بعد رؤيا رآها الصحابي "عبد الله بن زيد"، وأمر النبي أن يؤذن به "بلال بن رباح" لنداوة صوته. وفي شهر شعبان من السنة الثانية، نزل الوحي بتحقيق رغبة النبي الغالية بتحويل القبلة من بيت المقدس إلى الكعبة المشرفة {قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ ۖ فَلَنُوَلِّيَنَّكَ قِبْلَةً تَرْضَاهَا}، ليتميز المسلمون بشخصيتهم المستقلة.`
                },
                {
                    t: "18. غزوة بدر الكبرى (يوم الفرقان - 17 رمضان 2هـ)",
                    d: `<strong>1. من العير إلى النفير:</strong><br>
        خرج المسلمون (313 رجلاً) بأسلحة خفيفة لاعتراض قافلة قريش الاقتصادية بقيادة أبي سفيان، استرداداً لأموالهم المنهوبة. نجح أبو سفيان في الهروب بالقافلة عبر الساحل، لكن "أبو جهل" أصر بكبرياء على الحرب قائلاً: "والله لا نرجع حتى نرد بدراً، وننحر الجزور، وتشرب العرب بنا، فتهابنا أبداً". فتحول الأمر من غنيمة إلى معركة وجودية ضد جيش مكي قوامه 1000 مقاتل مدججين بالسلاح.<br><br>
        <strong>2. المشورة الحاسمة (لو خضت البحر):</strong><br>
        استشار النبي ﷺ أصحابه (خاصة الأنصار لأن بيعتهم كانت للدفاع داخل المدينة). فقام سعد بن معاذ وقال كلمته التاريخية: "يا رسول الله، آمنا بك وصدقناك... فامض لما أردت، فوالله لو خضت بنا هذا البحر لخضناه معك ما تخلف منا رجل واحد.. ولعل الله يريك منا ما تقر به عينك". فسر النبي وقال: "سيروا وأبشروا، فإن الله وعدني إحدى الطائفتين".<br><br>
        <strong>3. ليلة الدعاء ونزول الملائكة:</strong><br>
        في ليلة المعركة، نزل المطر فكان برداً وسلاماً وتثبيتاً للمؤمنين، ووحلاً زلقاً على المشركين. بات المسلمون نياماً، بينما ظل النبي ﷺ تحت شجرة يصلي ويبكي ويدعو: "اللهم إن تهلك هذه العصابة فلن تُعبد في الأرض"، حتى سقط رداؤه، فأشفقه عليه أبو بكر. فاستجاب الله: {إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ}.<br><br>
        <strong>4. المعركة ومصرع الطغاة:</strong><br>
        بدأت بالمبارزة، فقتل حمزة وعلي وعبيدة فرسان قريش الثلاثة (عتبة وشيبة والوليد). ثم التحم الجيشان. وقاتلت الملائكة مع المؤمنين، يُسمع صوت أجنحتهم ولا يُرون. انتهت المعركة بنصر ساحق: قُتل 70 من صناديد الكفر، منهم "أبو جهل" (فرعون هذه الأمة) الذي قتله غلامان صغيران من الأنصار (معاذ ومعوذ) وأجهز عليه ابن مسعود، وقُتل أمية بن خلف عدو بلال. فرق الله في هذا اليوم بين الحق والباطل، وعلا نجم الدولة الإسلامية.`
                },
                {
                    t: "19. غزوة أحد (درس الطاعة المكلف - شوال 3هـ)",
                    d: `<strong>1. الثأر وخطة الرماة:</strong><br>
        خرجت قريش بجيش جرار (3000 مقاتل) بقيادة أبي سفيان لتثأر لقتلاها في بدر. استشار النبي أصحابه فقرر الخروج لملاقاتهم، وبقي معه 700 مقاتل (بعد انسحاب المنافقين). عسكر النبي عند جبل أحد، ووضع خطة عبقرية: وضع 50 رامياً على "جبل عينين" لحماية ظهر الجيش، وأصدر لهم أمراً عسكرياً صارماً: "احموا ظهورنا.. لا تبرحوا أماكنكم ولو رأيتمونا نُقتل، ولا تشاركونا ولو رأيتمونا نغنم".<br><br>
        <strong>2. مخالفة الأمر والكارثة:</strong><br>
        بدأت المعركة بانتصار ساحق للمسلمين وفرار المشركين تاركين الغنائم. هنا حدثت القاصمة؛ ظن الرماة أن المعركة انتهت، فنزل 40 منهم لجمع الغنائم وخالفوا أمر النبي وقائدهم. لمح "خالد بن الوليد" (قائد خيل المشركين آنذاك) خلو الجبل، فكرّ راجعاً والتف بفرسانه من الخلف، وحاصر المسلمين بين فكي كماشة، فتحول النصر إلى فوضى وهزيمة.<br><br>
        <strong>3. إصابة النبي وفدائية الصحابة:</strong><br>
        ركز المشركون هجومهم على النبي ﷺ لقتله. شُج وجهه الشريف، وكُسرت رباعيته (سنه)، وهُشمت خوذته ودخلت حلقاتها في وجنته، وسال دمه الطاهر، وشاع خبر مقتله فوهنت العزائم. لكن نفر من الصحابة استماتوا دونه؛ فكان "طلحة بن عبيد الله" يتقي النبال بيده حتى شلت، و"سعد بن أبي وقاص" يرمي السهام والنبي يناوله ويقول: "ارم فداك أبي وأمي"، و"أبو دجانة" يحمي النبي بظهره والنبال تقع عليه.<br><br>
        <strong>4. استشهاد الأسد والدرس الإلهي:</strong><br>
        كان يوماً دامياً استشهد فيه 70 من خيرة الصحابة، وعلى رأسهم "مصعب بن عمير" (حامل الراية)، وأسد الله "حمزة بن عبد المطلب" الذي قتله "وحشي" بحربة غادرة، ومثلت هند بنت عتبة بجثمانه. انتهت المعركة بدرس قاسٍ للأمة: أن مخالفة أمر الرسول وحب الدنيا (الغنائم) هما سبب الهزيمة، ونزلت الآيات: {مِنكُم مَّن يُرِيدُ الدُّنْيَا وَمِنكُم مَّن يُرِيدُ الْآخِرَةَ}.`
                },
                {
                    t: "20. غزوة الأحزاب وبني قريظة (معركة الوجود - 5هـ)",
                    d: `<strong>1. التحالف المرعب وفكرة سلمان:</strong><br>
        نجح يهود بني النضير في تأليب العرب، فتجمع جيش عرمرم قوامه 10,000 مقاتل (يفوق عدد سكان المدينة رجالاً ونساءً) لاستئصال المسلمين نهائياً. استشار النبي أصحابه، فأشار "سلمان الفارسي" بحفر الخندق (مكيدة لا تعرفها العرب). فسارع النبي والصحابة لحفر الخندق في برد قارس وجوع شديد، حتى كان النبي يربط الحجر على بطنه من الجوع، ولكنه يبشرهم بفتح قصور كسرى وقيصر أثناء ضرب الصخر.<br><br>
        <strong>2. الخيانة العظمى (زاغت الأبصار):</strong><br>
        فوجئ المشركون بالخندق فضربوا حصاراً. وهنا حدثت الكارثة؛ نقض يهود "بني قريظة" (حماة الجهة الجنوبية للمدينة) العهد، واتفقوا مع الأحزاب على إبادة المسلمين. صار العدو من أمامهم ومن خلفهم. عاشت المدينة أرعب لياليها، وبلغت القلوب الحناجر من الخوف، ووصف الله المشهد: {إِذْ جَاءُوكُم مِّن فَوْقِكُمْ وَمِنْ أَسْفَلَ مِنكُمْ وَإِذْ زَاغَتِ الْأَبْصَارُ}.<br><br>
        <strong>3. الحرب النفسية ونصر السماء:</strong><br>
        لجأ النبي للدعاء: "اللهم منزل الكتاب، سريع الحساب، اهزم الأحزاب". استجاب الله، فهيأ "نعيم بن مسعود" (أسلم سراً) ليوقع الفتنة بين اليهود وقريش بخدعة ذكية. ثم أرسل الله جنداً من عنده: ريحاً صرصراً عاتية في ليلة مظلمة باردة، اقتلعت خيام المشركين، وقلبت قدورهم، وقذفت الرعب في قلوبهم، ففروا هاربين وكفى الله المؤمنين القتال.<br><br>
        <strong>4. حكم الله في بني قريظة:</strong><br>
        عاد النبي للمدينة ووضع سلاحه، فأتاه جبريل معاتباً: "أوَ قد وضعت السلاح؟ إن الملائكة لم تضعه.. انهض إلى بني قريظة". حاصرهم النبي 25 ليلة حتى نزلوا على حكم "سعد بن معاذ" (حليفهم قديماً). فحكم سعد -بعد أن خانوا في وقت الحرب وعرضوا النساء والأطفال للذبح- بقتل مقاتلتهم وسبي ذراريهم. فقال النبي: "لقد حكمت فيهم بحكم الله من فوق سبع سماوات".`
                },
                {
                    t: "21. صلح الحديبية وفتح خيبر (الفتح المبين والتمكين - 6هـ و7هـ)",
                    d: `<strong>1. رؤيا العمرة وبيعة الرضوان:</strong><br>
        رأى النبي في منامه أنه يدخل المسجد الحرام آمناً، فخرج بـ 1400 صحابي بملابس الإحرام وسلاح المسافر فقط. صدتهم قريش عند "الحديبية". أرسل النبي عثمان بن عفان للمفاوضة، فتأخر وشاع أنه قُتل. غضب النبي ودعا الصحابة للبيعة تحت الشجرة على الموت، فبايعوه جميعاً، ورضي الله عنهم: {لَّقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ}.<br><br>
        <strong>2. الهدنة (نصر سياسي ساحق):</strong><br>
        عاد عثمان، وجاء "سهيل بن عمرو" من قريش، وتم الاتفاق على شروط بدت مجحفة (هدنة 10 سنوات، يرجع المسلمون هذا العام، ومن جاء من قريش مسلماً يُرد). حزن عمر بن الخطاب وظنها دنية، لكن النبي طمأنه: "إنه أمر ربي ولن يضيعني". وفي الطريق نزلت {إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا}، فكانت الهدنة أعظم فتح؛ إذ أمن الناس، وانتشر الدعاة، ودخل في الإسلام أضعاف من دخلوا فيه منذ البعثة.<br><br>
        <strong>3. دك حصون خيبر (7هـ):</strong><br>
        بعد أن أمن النبي جانب قريش بالصلح، تفرغ لـ "خيبر" (وكر المؤامرات ومخزن ثروات اليهود). كانت حصوناً منيعة على رؤوس الجبال. استعصى فتحها أياماً، فقال النبي: "لأعطين الراية غداً رجلاً يحب الله ورسوله، ويحبه الله ورسوله، يفتح الله على يديه".<br><br>
        <strong>4. علي وفاتح خيبر:</strong><br>
        بات الناس يدوكون (يخوضون) أيهم يعطاها. في الصباح دعا "علي بن أبي طالب" (وكان أرمد العين)، فبصق في عينيه فبرأ، وسلمه الراية. تقدم علي، فخرج له "مرحب" بطل اليهود يرتجز، فضربه علي ضربة فلق بها هامته، واقتلع باب الحصن (القموص) وتترس به، وفتح الله على يديه. غنم المسلمون مغانم هائلة، وتزوج النبي "صفية بنت حيي"، وانكسرت شوكة اليهود في الجزيرة للأبد.`
                },
                {
                    t: "22. الفتح الأعظم (فتح مكة - رمضان 8هـ)",
                    d: `<strong>سبب الغزوة والتجهيز السري:</strong><br>
        نقضت قريش عهد الحديبية حين أعانت حلفاءها (بني بكر) على حلفاء النبي (خزاعة)، فقتلوهم ركعاً وسجداً في الحرم. استنصرت خزاعة بالنبي، فقال: "نُصرت يا عمرو بن سالم". أمر النبي بالتجهيز في سرية تامة ليفاجئ قريشاً ويحقن الدماء، وخرج في 10,000 مقاتل صائمين في رمضان، وأوقدوا 10,000 نار بـ "مر الظهران" فألقت الرعب في قلوب المشركين.<br><br>
        <strong>إسلام أبي سفيان:</strong><br>
        خرج العباس بن عبد المطلب فالتقى بأبي سفيان (زعيم قريش) وجاء به للنبي. رأى أبو سفيان الجيوش فقال: "ما رأيت كالليلة ملكاً". فقال العباس: "إنها النبوة". فأسلم أبو سفيان، وأكرمه النبي فقال: "من دخل دار أبي سفيان فهو آمن، ومن أغلق عليه بابه فهو آمن، ومن دخل المسجد فهو آمن".<br><br>
        <strong>يوم المرحمة ودخول مكة:</strong><br>
        دخل النبي مكة من "كداء" (أعلاها) خاشعاً، مطأطئاً رأسه تواضعاً لله، حتى أن لحيته لتمس رحله، وهو يقرأ سورة الفتح. دخلت الجيوش من الأبواب الأربعة سلمياً، إلا مناوشات بسيطة مع خالد بن الوليد.<br><br>
        <strong>جاء الحق وزهق الباطل:</strong><br>
        توجه النبي للكعبة، وطاف بها سبعاً على ناقته، وكان حولها 360 صنماً، فجعل يطعنها بقوسه ويقول: {جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ}، فتتساقط الأصنام على وجوهها. ثم أمر عثمان بن طلحة بفتح الكعبة، وصلى بداخلها ركعتين، وأمر بلالاً فارتقى ظهر الكعبة وأذن، فدوى "الله أكبر" في سماء مكة لأول مرة.<br><br>
        <strong>العفو التاريخي:</strong><br>
        اجتمعت قريش في المسجد الحرام، تنتظر حكم النبي فيها بعد سنوات من التعذيب والقتل والطرد. أمسك النبي بعضادتي الباب وقال: "لا إله إلا الله وحده... يا معشر قريش، ما تظنون أني فاعل بكم؟". قالوا بصوت منكسر: "خيراً، أخ كريم وابن أخ كريم". فدمعت عيناه وقال قولته الخالدة: "لا تثريب عليكم اليوم.. اذهبوا فأنتم الطلقاء". فأسلم أهل مكة، وبايعوه رجالاً ونساءً.`
                },
                {
                    t: "23. غزوة حنين وحصار الطائف (درس الكثرة - شوال 8هـ)",
                    d: `<strong>1. الاغترار بالكثرة:</strong><br>
        بعد فتح مكة، تجمعت قبائل هوازن وثقيف (رماة العرب) لقتال المسلمين. خرج النبي بجيش قوامه 12,000 مقاتل (10 آلاف من المدينة + 2000 من الطلقاء أهل مكة). ولأول مرة، أعجب البعض بكثرتهم وقالوا: "لن نغلب اليوم من قلة".<br><br>
        <strong>2. الكمين والثبات:</strong><br>
        في وادي حنين، كمن العدو في الشعاب والمضايق، وأمطروا المسلمين بوابل من السهام عند الفجر. اضطرب الجيش وفرت الكثرة الكاثرة، ولم يثبت إلا النبي ﷺ ونفر قليل من المهاجرين والأنصار وأهل بيته. كان النبي يركض ببغلته تجاه العدو ويصرخ بشجاعة نادرة: "أنا النبي لا كذب.. أنا ابن عبد المطلب".<br><br>
        <strong>3. النصر وقسمة الغنائم:</strong><br>
        أمر النبي عمه العباس (جهوري الصوت) فنادى: "يا أصحاب السمرة (الشجرة).. يا أهل سورة البقرة". فعاد الصحابة وكروا كرة رجل واحد، وأنزل الله سكينته وجنوده، فانهزم المشركون شر هزيمة. غنم المسلمون 24 ألف جمل، و40 ألف شاة، و6 آلاف سبي. وزع النبي الغنائم على "المؤلفة قلوبهم" من قريش ليتألفهم في الإسلام، وترك الأنصار، فوجدوا في أنفسهم. فجمعهم وقال كلماته التي أبكتهم: "ألا ترضون أن يذهب الناس بالشاة والبعير، وترجعون أنتم برسول الله إلى رحالكم؟.. لو سلك الناس وادياً وسلكت الأنصار شعباً، لسلكت شعب الأنصار".`
                },
                {
                    t: "24. غزوة تبوك (ساعة العسرة - رجب 9هـ)",
                    d: `<strong>1. النفير العام في القيظ:</strong><br>
        بلغ النبي أن الروم (القوة العظمى عالمياً) يجمعون جيشاً لغزو المدينة. أمر النبي بالنفير العام في وقت "عسرة" (حر شديد، وجدب، واقتراب قطاف الثمر). تخلف المنافقون (وقالوا لا تنفروا في الحر)، بينما تسابق الصادقون؛ فجاء أبو بكر بماله كله، وجهز عثمان بن عفان ثلث الجيش (جيش العسرة) حتى قال النبي: "ما ضر عثمان ما فعل بعد اليوم".<br><br>
        <strong>2. الرحلة الشاقة:</strong><br>
        قطع الجيش (30,000 مقاتل) الصحراء المهلكة، وعانوا من العطش حتى نحروا إبلهم لشرب الماء من أجوافها. مروا بديار ثمود (مدائن صالح) فأمرهم النبي بالإسراع والبكاء خشية أن يصيبهم ما أصاب قوم صالح.<br><br>
        <strong>3. الانتصار بلا قتال:</strong><br>
        وصل النبي "تبوك". لما سمع الروم بقدوم هذا الجيش الجرار الذي قطع الصحراء، قذف الله الرعب في قلوبهم، فتفرقوا داخل بلادهم ولم يجرؤوا على اللقاء. أقام النبي بتبوك 20 يوماً، عقد فيها معاهدات صلح مع أمراء المناطق الحدودية، وعاد مظفراً، وكانت هذه آخر غزواته ﷺ.`
                },
                {
                    t: "25. عام الوفود (اكتمل العقد - 9هـ و10هـ)",
                    d: `<strong>1. إذا جاء نصر الله والفتح:</strong><br>
        بعد انتصار النبي على قريش في مكة، وعلى الروم في تبوك، خضعت الجزيرة العربية بالكامل. أدركت القبائل أن "محمداً" رسول مؤيد من السماء. فتوافدت الوفود إلى المدينة من كل فج (وفد تميم، وفد طي وفيه عدي بن حاتم، وفد عبد القيس، نصارى نجران..).<br><br>
        <strong>2. انتشار النور:</strong><br>
        كان النبي يستقبلهم في المسجد، ويعلمهم الشرائع، ويرسل معهم القراء والمعلمين. دخل الناس في دين الله أفواجاً، وتحطمت الأصنام في كل بيت وقبيلة (كاللات والعزى ومناة). ونزلت سورة النصر تنعي للنبي نفسه وتخبره بانتهاء مهمته: {فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا}.`
                },
                {
                    t: "26. حجة الوداع (البلاغ المبين والعهد الأخير)",
                    d: `<strong>المسير العظيم (10هـ):</strong><br>
        في شهر ذي القعدة، أذن النبي في الناس أنه حاجّ، فقدم المدينة بشر كثير، واجتمع حوله أكثر من 100 ألف مسلم (وقيل 124 ألفاً)، يلبسون البياض، وتوحدهم التلبية. أحرم النبي من ذي الحليفة، وعلم الناس مناسكهم خطوة بخطوة قائلاً: "لتأخذوا عني مناسككم، فلعلي لا ألقاكم بعد عامي هذا".<br><br>
        <strong>يوم عرفة (الركن الأعظم):</strong><br>
        في التاسع من ذي الحجة، وقف النبي على جبل الرحمة بعرفة، وألقى خطبته الخالدة (خطبة الوداع)، وكان ربيعة بن أمية يصرخ بكلماته ليسمع الناس. قرر فيها قواعد الإسلام وحقوق الإنسان:<br>
        1. <strong>حرمة الدماء:</strong> "إن دماءكم وأموالكم وأعراضكم عليكم حرام كحرمة يومكم هذا".<br>
        2. <strong>إلغاء الجاهلية:</strong> "ألا كل شيء من أمر الجاهلية تحت قدمي موضوع، وربا الجاهلية موضوع".<br>
        3. <strong>حقوق النساء:</strong> "استوصوا بالنساء خيراً، فإنكم أخذتموهن بأمانة الله".<br>
        4. <strong>المساواة:</strong> "لا فضل لعربي على أعجمي إلا بالتقوى".<br>
        5. <strong>الاعتصام:</strong> "تركت فيكم ما إن تمسكتم به لن تضلوا بعدي أبداً: كتاب الله وسنتي".<br><br>
        <strong>الإشهاد وإكمال الدين:</strong><br>
        في ختام الخطبة، رفع النبي أصبعه السبابة إلى السماء وينكبها إلى الناس قائلاً: "ألا هل بلغت؟"، فضج الوادي بصوت واحد: "نشهد أنك قد بلغت، وأديت، ونصحت". فقال: "اللهم فاشهد". وفي هذا الموقف العظيم، نزلت الآية التي أبكت عمر بن الخطاب: {الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي وَرَضِيتُ لَكُمُ الْإِسْلَامَ دِينًا}. فعرف الصديق والفاروق أنه نعي رسول الله ﷺ.`
                },
                {
                    t: "27. الوفاة والالتحاق بالرفيق الأعلى (يوم أظلمت فيه المدينة - 11هـ)",
                    d: `<strong>1. بداية الوجع وتخيير العبد:</strong><br>
        في أواخر شهر صفر 11هـ، بعد عودته من جنازة بالبقيع، بدأ الصداع يشتد عليه والحمى تفتك بجسده الشريف. استأذن زوجاته أن يُمرض في بيت عائشة. خرج على الناس عاصباً رأسه، وجلس على المنبر وقال: "إن الله خير عبداً بين الدنيا وبين ما عنده، فاختار ما عند الله". فبكى أبو بكر وعلم أنه نعي النبي. ثم أمر: "مروا أبا بكر فليصل بالناس"، إشارة لاستخلافه.<br><br>
        <strong>2. نظرة الوداع والسواك:</strong><br>
        في فجر يوم الاثنين 12 ربيع الأول، كشف النبي الستر، فنظر إلى الصحابة وهم يصلون، فتبسم ضاحكاً كأن وجهه ورقة مصحف، فكاد المسلمون يفتنون في صلاتهم فرحاً بظنهم أنه برئ. عاد النبي لفراشه، ودخل عبد الرحمن بن أبي بكر ومعه سواك، فأبدت عائشة السواك (أي لينته بفمها)، فأخذه النبي واستن به أحسن ما يكون، في آخر عمل له في الدنيا.<br><br>
        <strong>3. لحظة خروج الروح:</strong><br>
        بدأ الاحتضار، وكان يمسح وجهه بالماء ويقول: "لا إله إلا الله، إن للموت لسكرات". كان مستنداً إلى صدر عائشة، فرفع يده وشخص بصره نحو السقف، وقال كلماته الأخيرة: "مع الذين أنعمت عليهم.. بل الرفيق الأعلى، بل الرفيق الأعلى". فمالت يده، وثقل رأسه، وفاضت روحه الطاهرة إلى بارئها.<br><br>
        <strong>4. ذهول الصحابة وموقف الصديق:</strong><br>
        ضجت المدينة بالبكاء، ودهشت العقول، حتى أن عمر بن الخطاب شهر سيفه وقال: "من قال إن محمداً قد مات ضربت عنقه". جاء أبو بكر (الصديق)، فدخل وقبل جبين النبي وبكى وقال: "طبت حياً وميتاً يا رسول الله". ثم خرج للناس وقال قولته الفاصلة: "ألا من كان يعبد محمداً فإن محمداً قد مات، ومن كان يعبد الله فإن الله حي لا يموت". وتلا: {وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ قَدْ خَلَتْ مِن قَبْلِهِ الرُّسُلُ}.<br><br>
        <strong>5. الدفن والميراث:</strong><br>
        غسله أهله في ثيابه تكريماً له، وكفنوه في ثلاثة أثواب بيض يمانية. صلى عليه الناس أرسالاً (جماعات فرادى دون إمام) في حجرته تعظيماً له. ثم حفر له أبو طلحة الأنصاري قبراً (لحداً) في موضع فراشه الذي مات فيه، ودفن ليلة الأربعاء. غاب الجسد الطاهر، لكنه ترك فينا نوراً لا ينطفئ: كتاب الله وسنته.`
                }
],
            adhkar: {
    morning: [
        {t: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لا إِلَهَ إلاَّ اللهُ وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.", c: 1},
        {t: "اللّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.", c: 1},
        {t: "قُلْ هُوَ اللَّهُ أَحَدٌ، قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، قُلْ أَعُوذُ بِرَبِّ النَّاسِ (ثلاث مرات)", c: 3},
        {t: "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، خَلَقْتَنِي وَأَنَا عَبْدُكَ ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لا يَغْفِرُ الذُّنُوبَ إِلا أَنْتَ.", c: 1},
        {t: "بِسْمِ اللَّهِ الَّذِي لا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.", c: 3},
        {t: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شأْنِي كُلَّهُ وَلا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.", c: 3},
        {t: "رَضِيتُ بِاللَّهِ رَبّاً، وَبِالْإِسْلَامِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.", c: 3},
        {t: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.", c: 7}
    ],
    evening: [
        {t: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لا إِلَهَ إلاَّ اللهُ وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا.", c: 1},
        {t: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.", c: 3},
        {t: "اللّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ...", c: 1},
        {t: "بِسْمِ اللَّهِ الَّذِي لا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.", c: 3},
        {t: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ.", c: 10}
    ],
    sleep: [
        {t: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.", c: 1},
        {t: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.", c: 3},
        {t: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.", c: 1},
        {t: "قراءة سورة الإخلاص والمعوذتين والمسح على الجسد.", c: 3}
    ],
    prayer: [
        {t: "أستغفر الله (3)، اللهم أنت السلام ومنك السلام تباركت يا ذا الجلال والإكرام.", c: 1},
        {t: "سُبْحَانَ اللهِ (33)، الْحَمْدُ لِلَّهِ (33)، اللهُ أَكْبَرُ (33)، ثم تمام المائة: لا إله إلا الله وحده لا شريك له..", c: 33},
        {t: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ ، وَشُكْرِكَ ، وَحُسْنِ عِبَادَتِكَ.", c: 1},
        {t: "قراءة آية الكرسي بعد كل صلاة.", c: 1}
    ]
},
            quiz: [],
            phrases: ["سبحان الله", "الحمد لله", "الله أكبر", "لا إله إلا الله", "أستغفر الله"]
        };

        // النجوم
        const starsBox = document.getElementById('stars-box');
        for(let i=0; i<100; i++){
            let s = document.createElement('div'); s.className='star';
            let sz = Math.random()*2+1+'px'; s.style.width=sz; s.style.height=sz;
            s.style.top=Math.random()*100+'%'; s.style.left=Math.random()*100+'%';
            s.style.setProperty('--d', Math.random()*3+2+'s'); starsBox.appendChild(s);
        }

        let tasVal=0, phrIdx=0, qIdx=0, qScore=0, currentQ=[], timerId;
        const mainAudio = document.getElementById('global-audio-tag');
        const radioAudio = document.getElementById('radio-audio-tag');

        // نظام الصفحات
        function showPage(id) { 
            document.querySelectorAll('.page').forEach(v => v.classList.remove('active')); 
            document.getElementById(id+'-page').classList.add('active'); 
            window.scrollTo(0,0);
        }

        window.onload = function(){
            setHDate(); fetchPrayers(); renderQuran(); renderSeerah(); initRadio();
            renderVideos();
        };

        function setHDate() { 
            document.getElementById('h-date-display').innerText = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {day:'numeric', month:'long', year:'numeric'}).format(new Date()); 
        }

        async function fetchPrayers() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async pos => {
                    const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&method=5`);
                    const d = await res.json();
                    document.getElementById('p-next-info').innerText = `الفجر: ${d.data.timings.Fajr} | الظهر: ${d.data.timings.Dhuhr} | العصر: ${d.data.timings.Asr}`;
                }, () => document.getElementById('p-next-info').innerText = "فعل الموقع لمواقيت الصلاة");
            }
        }

        // الراديو
        async function initRadio() {
            try {
                const res = await fetch('https://data-rosy.vercel.app/radio.json');
                const data = await res.json();
                const sel = document.getElementById('radio-select');
                data.radios.forEach(r => {
                    let opt = document.createElement('option');
                    opt.value = r.url;
                    opt.innerText = r.name;
                    sel.appendChild(opt);
                });
            } catch(e) { console.log("Radio Error"); }
        }

        function changeRadio(url) {
            if(!url) return;
            radioAudio.src = url;
            radioAudio.play();
            document.getElementById('radio-toggle').className = "fas fa-pause-circle";
        }

        function toggleRadio() {
            if(radioAudio.paused) { radioAudio.play(); document.getElementById('radio-toggle').className = "fas fa-pause-circle"; }
            else { radioAudio.pause(); document.getElementById('radio-toggle').className = "fas fa-play-circle"; }
        }

        // القرآن
        let allChapters = []; // مخزن خارجي للسور لسهولة البحث

async function renderQuran() {
    try {
        const res = await fetch('https://api.quran.com/api/v4/chapters');
        const d = await res.json();
        allChapters = d.chapters; // حفظ السور في المتغير
        displayChapters(allChapters); // عرض كل السور في البداية
    } catch (e) {
        console.error("خطأ في جلب بيانات القرآن");
    }
}

// دالة مخصصة لعرض السور في الشبكة (Grid)
function displayChapters(chapters) {
    const g = document.getElementById('quran-grid');
    g.innerHTML = ""; // مسح المحتوى الحالي
    
    if (chapters.length === 0) {
        g.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #888; padding: 20px;">لا توجد نتائج تطابق بحثك..</div>`;
        return;
    }

    chapters.forEach(s => {
        g.innerHTML += `
            <div class="neon-card c-blue" onclick="playSurah(${s.id}, '${s.name_arabic}')">
                <i class="fas fa-quran"></i>
                <h3>${s.name_arabic}</h3>
                <p>${s.verses_count} آية</p>
            </div>`;
    });
}

// دالة الفلترة عند الكتابة في مربع البحث
function filterQuran() {
    const term = document.getElementById('quran-search').value.trim();
    // تصفية المصفوفة بناءً على اسم السورة بالعربي
    const filtered = allChapters.filter(s => s.name_arabic.includes(term));
    displayChapters(filtered);
}

// تحديث وظيفة التشغيل
async function playSurah(id, name) {
    showPage('reader');
    // السطر المطلوب إضافته لإصلاح زر العودة
    document.getElementById('r-back-btn').onclick = () => showPage('quran'); 
    
    document.getElementById('r-title').innerText = name;
    document.getElementById('r-content-area').innerHTML = "<div style='text-align:center;'>جاري تحميل الآيات...</div>";
    
    const server = document.getElementById('q-rec-sel').value;
    const recName = document.getElementById('q-rec-sel').options[document.getElementById('q-rec-sel').selectedIndex].text;
    
    mainAudio.src = `${server}${id.toString().padStart(3,'0')}.mp3`;
    mainAudio.play();
    
    // إظهار الشريط وتحديث البيانات
    document.getElementById('p-bar-ui').style.display = 'flex';
    document.getElementById('now-surah').innerText = name;
    document.getElementById('now-reciter').innerText = recName;
    document.getElementById('p-icon-main').className = "fas fa-pause";

    const res = await fetch(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${id}`);
    const data = await res.json();
    document.getElementById('r-content-area').innerHTML = `<div class="reader-text">${data.verses.map(v => v.text_uthmani).join(' ')}</div>`;
}

// وظيفة التبديل بين تشغيل وإيقاف
function toggleMainAudio() {
    if (mainAudio.paused) {
        mainAudio.play();
        document.getElementById('p-icon-main').className = "fas fa-pause";
    } else {
        mainAudio.pause();
        document.getElementById('p-icon-main').className = "fas fa-play";
    }
}

// إيقاف الصوت وإخفاء شريط التحكم
function stopAudio() {
    try {
        mainAudio.pause();
        mainAudio.currentTime = 0;
    } catch (e) {}
    document.getElementById('p-icon-main').className = "fas fa-play";
    document.getElementById('p-bar-ui').style.display = 'none';
}

// تحديث شريط التقدم تلقائياً
mainAudio.ontimeupdate = function() {
    const prog = document.getElementById('audio-progress');
    const curr = document.getElementById('curr-time');
    const total = document.getElementById('total-time');
    
    if(!isNaN(mainAudio.duration)) {
        prog.value = (mainAudio.currentTime / mainAudio.duration) * 100;
        curr.innerText = formatTime(mainAudio.currentTime);
        total.innerText = formatTime(mainAudio.duration);
    }
};

// التحكم في الوقت عن طريق شريط التقدم
document.getElementById('audio-progress').oninput = function() {
    mainAudio.currentTime = (this.value / 100) * mainAudio.duration;
};

function formatTime(secs) {
    let min = Math.floor(secs / 60);
    let sec = Math.floor(secs % 60);
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

        // السيرة
        function renderSeerah() {
            const g = document.getElementById('seerah-grid');
            db.seerah.forEach((s, i) => g.innerHTML += `<div class="neon-card c-gold" onclick="openS(${i})"><h3>${s.t}</h3><p>المحطة رقم ${i+1}</p></div>`);
        }
        function openS(i) {
            showPage('reader'); document.getElementById('r-title').innerText = db.seerah[i].t;
            document.getElementById('r-content-area').innerHTML = `<div style="line-height:2; font-size:1.3rem;">${db.seerah[i].d}</div>`;
            document.getElementById('r-back-btn').onclick = () => showPage('seerah');
        }

        // مكتبة الفيديو
        function renderVideos() {
            const grid = document.getElementById('video-library-grid');
            if (!grid) return;
            grid.innerHTML = '';
        }

        // الأذكار
        function openAdhkar(cat) {
            showPage('reader'); document.getElementById('r-title').innerText = "الأذكار";
            document.getElementById('r-content-area').innerHTML = db.adhkar[cat].map(a => `<div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:10px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;"><span>${a.t}</span><div style="background:var(--n-purple); padding:5px 15px; border-radius:50px; cursor:pointer;" onclick="this.innerText-- >= 1 ? null : this.style.opacity=0.3">${a.c}</div></div>`).join('');
            document.getElementById('r-back-btn').onclick = () => showPage('adhkar');
        }

        // المسبحة
        // --- تحديث دوال المسبحة ---
// دالة زيادة الرقم
function incTasVal() { 
    tasVal++; 
    // هذا السطر يجعل الرقم يظهر مثل 00001, 00010, إلخ
    document.getElementById('tas-val-num').innerText = tasVal.toString().padStart(5, '0'); 
    
    // إضافة هزاز بسيط للهاتف عند التسبيح (اختياري)
    if(navigator.vibrate) navigator.vibrate(30); 
}

// دالة تغيير الذكر
function nextTasPhrase() { 
    phrIdx = (phrIdx + 1) % db.phrases.length; 
    document.getElementById('tas-phr-text').innerText = db.phrases[phrIdx]; 
}

// دالة التصفير
function resetTasCounter() { 
    tasVal = 0; 
    document.getElementById('tas-val-num').innerText = "00000"; 
}

        // حساب الزكاة
        function calculateZakat() {
            const amt = document.getElementById('zak-amount').value;
            if(amt && amt > 0) {
                const zakat = amt * 0.025;
                document.getElementById('zak-val').innerText = zakat.toLocaleString() + " جنيه";
                document.getElementById('zak-res-box').style.display = 'block';
            }
        }

        // صدقة جارية
        // 1. دالة إضافة الكرت وتنسيقه// دالة إضافة الدعاء - تصميم عبدالرحمن سالم الاحترافي
function addDeadName() {
    const name = document.getElementById('dead-name').value;
    const prayer = document.getElementById('prayer-select').value;
    
    if(name && prayer) {
        const cardId = 'card-' + Date.now();
        const cardContainer = document.createElement('div');
        cardContainer.className = 'neon-card c-pink';
        cardContainer.style.padding = '15px';
        
        cardContainer.innerHTML = `
            <div id="capture-${cardId}" style="
                padding: 30px 20px; 
                text-align: center; 
                background: #050010; 
                border: 2px solid #ffcf4b; 
                border-radius: 15px; 
                max-width: 320px; 
                margin: 0 auto;
                direction: rtl;">
                
                <i class="fas fa-mosque" style="color: #ffcf4b; font-size: 1.5rem; margin-bottom: 15px;"></i>
                
                <h4 style="font-family: 'Zain'; font-size:
                1.8rem; color: #fff; margin-bottom: 10px;>${name}</h4>
                
                <p style="color: #ffcf4b; font-size: 1.2rem; font-family: 'Amiri'; line-height: 1.6; margin-bottom: 20px;">"${prayer}"</p>
                
                <small style="color: #aaa; font-family: 'Tajawal'; display: block; margin-bottom: 15px; font-size: 0.8rem;">نسألكم الدعاء له بالرحمة والمغفرة</small>

                <div style="margin-top: 15px; padding-top: 10px; border-top: 1px dashed rgba(255, 207, 75, 0.3);">
                    <span style="color: #ffcf4b; font-family: 'Tajawal'; font-size: 0.7rem; opacity: 0.8; letter-spacing: 0;">
                        تصميم وتطوير: عبدالرحمن سالم | منصة اليقين
                    </span>
                </div>
            </div>

            <div style="display:flex; gap:8px; margin-top:15px; justify-content:center;">
                <button onclick="shareText('${name}', '${prayer}')" class="btn-neon" style="font-size:0.65rem; padding:6px 15px; border-color:#1877F2; color:#1877F2;">مشاركة نص</button>
                <button onclick="downloadCardImage('${cardId}')" class="btn-neon" style="font-size:0.65rem; padding:6px 15px; border-color:#ffcf4b; color:#ffcf4b;">تحميل صورة</button>
            </div>
        `;
        document.getElementById('dead-list').prepend(cardContainer);
        document.getElementById('dead-name').value = '';
    }
}

function downloadCardImage(cardId) {
    const node = document.getElementById(`capture-${cardId}`);
    
    // إعدادات خاصة لضمان جودة الصورة وسلامة الخط العربي
    const scale = 2; // لزيادة دقة الصورة
    const style = {
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: node.offsetWidth + 'px',
        height: node.offsetHeight + 'px'
    };

    domtoimage.toPng(node, {
        width: node.offsetWidth * scale,
        height: node.offsetHeight * scale,
        style: style,
        bgcolor: '#050010' // لضمان ظهور الخلفية الداكنة في الصورة
    })
    .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = `Yaqeen-Sadaqah-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
    })
    .catch(function (error) {
        console.error('حدث خطأ في تحميل الصورة:', error);
        alert("عذراً، حدث خطأ أثناء إنشاء الصورة. جرب مرة أخرى.");
    });
}



// 3. دالة مشاركة النص
function shareText(name, prayer) {
    const text = `صدقة جارية عن: ${name}\n\n${prayer}\n\nتم النشر عبر منصة اليقين:\nelyaqeen.netlify.app`;
    if (navigator.share) {
        navigator.share({ title: 'صدقة جارية', text: text });
    } else {
        navigator.clipboard.writeText(text).then(() => alert("تم نسخ نص الدعاء بنجاح"));
    }
}

        // صحيح البخاري
        async function loadBukhariHadiths(id, title) {
            showPage('reader');
            document.getElementById('r-title').innerText = title;
            document.getElementById('r-content-area').innerHTML = "جاري جلب الأحاديث...";
            document.getElementById('r-back-btn').onclick = () => showPage('hadith');
            try {
                const res = await fetch(`https://api.hadith.gading.dev/books/bukhari?range=${(id-1)*50+1}-${id*50}`);
                const data = await res.json();
                document.getElementById('r-content-area').innerHTML = data.data.hadiths.map(h => `<div style="border-bottom:1px solid #333; padding:15px 0;"><small style="color:var(--n-green);">حديث رقم ${h.number}</small><p style="margin-top:10px;">${h.arab}</p></div>`).join('');
            } catch(e) { document.getElementById('r-content-area').innerHTML = "تعذر تحميل البيانات."; }
        }

        // الاختبار
        // 1. بنك الأسئلة الكامل (50 سؤالاً)
db.quiz = [
    {q: "من هو أول الأنبياء؟", o: ["آدم عليه السلام", "نوح عليه السلام", "إبراهيم عليه السلام", "محمد ﷺ"], a: 0},
    {q: "ما هي أطول سورة في القرآن الكريم؟", o: ["آل عمران", "النساء", "المائدة", "البقرة"], a: 3},
    {q: "كم عدد سور القرآن الكريم؟", o: ["110", "112", "114", "116"], a: 2},
    {q: "ما هي السورة التي تعدل ثلث القرآن؟", o: ["الفاتحة", "الإخلاص", "الكرسي", "يس"], a: 1},
    {q: "في أي شهر نزل القرآن الكريم؟", o: ["شعبان", "رجب", "رمضان", "ذو الحجة"], a: 2},
    {q: "من هو النبي الذي لُقب بـ 'كليم الله'؟", o: ["إبراهيم", "موسى", "عيسى", "يوسف"], a: 1},
    {q: "كم عدد أركان الإسلام؟", o: ["4", "5", "6", "7"], a: 1},
    {q: "من هو الصحابي الذي لُقب بـ 'الفاروق'؟", o: ["أبو بكر الصديق", "عمر بن الخطاب", "عثمان بن عفان", "علي بن أبي طالب"], a: 1},
    {q: "ما هي قبلة المسلمين الأولى؟", o: ["الكعبة المشرفة", "المسجد النبوي", "المسجد الأقصى", "مسجد قباء"], a: 2},
    {q: "من هو خاتم الأنبياء والمرسلين؟", o: ["إسماعيل", "يحيى", "عيسى", "محمد ﷺ"], a: 3},
    {q: "ما هي أقصر سورة في القرآن الكريم؟", o: ["الإخلاص", "الفلق", "الكوثر", "الناس"], a: 2},
    {q: "كم عدد أركان الإيمان؟", o: ["5", "6", "7", "4"], a: 1},
    {q: "من هو الملك الموكل بالوحي؟", o: ["إسرافيل", "ميكائيل", "جبريل", "رضوان"], a: 2},
    {q: "في أي مدينة ولد النبي محمد ﷺ؟", o: ["المدينة المنورة", "مكة المكرمة", "الطائف", "جدة"], a: 1},
    {q: "من هي أول زوجات النبي محمد ﷺ؟", o: ["عائشة", "حفصة", "خديجة بنت خويلد", "زينب"], a: 2},
    {q: "ما هو اسم ناقة النبي ﷺ؟", o: ["القصواء", "الشهباء", "البيضاء", "العضباء"], a: 0},
    {q: "كم كان عمر النبي ﷺ عندما نزل عليه الوحي؟", o: ["25 سنة", "30 سنة", "35 سنة", "40 سنة"], a: 3},
    {q: "من هو أول من آمن من الرجال؟", o: ["عمر بن الخطاب", "أبو بكر الصديق", "علي بن أبي طالب", "عثمان بن عفان"], a: 1},
    {q: "ما هي الغزوة التي جُرح فيها النبي ﷺ وكُسرت رباعيته؟", o: ["بدر", "أحد", "الخندق", "حنين"], a: 1},
    {q: "ما هو اسم بئر الماء الذي انفجر تحت قدمي إسماعيل عليه السلام؟", o: ["زمزم", "أريس", "بضاعة", "رومة"], a: 0},
    {q: "من هو النبي الذي ابتلعه الحوت؟", o: ["يونس", "أيوب", "شعيب", "هود"], a: 0},
    {q: "كم عدد السجدات في القرآن الكريم؟", o: ["12", "14", "15", "10"], a: 2},
    {q: "ما هي السورة التي بدأت بـ 'لوحة' أسماء الله الحسنى في آخرها؟", o: ["البقرة", "الحشر", "الواقعة", "الرحمن"], a: 1},
    {q: "من هو الصحابي الذي لُقب بـ 'ذي النورين'؟", o: ["عثمان بن عفان", "علي بن أبي طالب", "خالد بن الوليد", "حمزة"], a: 0},
    {q: "كم سنة استمرت الدعوة الإسلامية في مكة قبل الهجرة؟", o: ["10 سنوات", "13 سنة", "15 سنة", "8 سنوات"], a: 1},
    {q: "ما هو اللقب الذي أطلقه النبي ﷺ على خالد بن الوليد؟", o: ["أسد الله", "سيف الله المسلول", "أمين الأمة", "حوارى الرسول"], a: 1},
    {q: "من هو النبي الذي بنى الكعبة مع ابنه؟", o: ["نوح", "إبراهيم", "داود", "سليمان"], a: 1},
    {q: "ما هي السورة التي تُسمى 'عروس القرآن'؟", o: ["يس", "الرحمن", "الملك", "الكهف"], a: 1},
    {q: "من هو الصحابي الذي اهتز لموته عرش الرحمن؟", o: ["سعد بن معاذ", "جعفر بن أبي طالب", "مصعب بن عمير", "حمزة"], a: 0},
    {q: "ما هي أطول آية في القرآن الكريم؟", o: ["آية الكرسي", "آية الدين", "آية المداينة", "آخر آية في سورة البقرة"], a: 1},
    {q: "كم عدد أجنحة جبريل عليه السلام كما رآه النبي ﷺ؟", o: ["2", "100", "313", "600"], a: 3},
    {q: "من هو النبي الذي كانت معجزته إحياء الموتى بإذن الله؟", o: ["موسى", "عيسى", "سليمان", "صالح"], a: 1},
    {q: "ما هو اسم خازن الجنة؟", o: ["مالك", "رضوان", "عتيد", "رقيب"], a: 1},
    {q: "ما هو اسم خازن النار؟", o: ["رضوان", "مالك", "منكر", "نكير"], a: 1},
    {q: "في أي سنة هجرية وقعت غزوة بدر الكبرى؟", o: ["1 هـ", "2 هـ", "3 هـ", "4 هـ"], a: 1},
    {q: "ما هي السورة التي تسمى 'سورة بني إسرائيل'؟", o: ["الكهف", "الإسراء", "مريم", "طه"], a: 1},
    {q: "من هو النبي الذي تمنى الموت ليلاقي الله وهو مسلم؟", o: ["يوسف", "يعقوب", "إسحاق", "لوط"], a: 0},
    {q: "كم عدد المصارف التي تُوزع عليها الزكاة؟", o: ["6", "7", "8", "10"], a: 2},
    {q: "من هو الصحابي الذي كان يلقب بـ 'ترجمان القرآن'؟", o: ["ابن عمر", "ابن عباس", "ابن مسعود", "أبي بن كعب"], a: 1},
    {q: "ما هي السورة التي تنتهي جميع آياتها بحرف 'الدال'؟", o: ["الإخلاص", "الفلق", "المسد", "البروج"], a: 0},
    {q: "من هو النبي الذي سبّحت معه الجبال والطير؟", o: ["سليمان", "داود", "زكريا", "يحيى"], a: 1},
    {q: "كم عدد القراءات المتواترة للقرآن الكريم؟", o: ["5", "7", "10", "14"], a: 2},
    {q: "ما هي السورة التي بدأت بـ 'حم عسق'؟", o: ["الشورى", "فصلت", "الزخرف", "الدخان"], a: 0},
    {q: "من هو الصحابي الذي أمره النبي ﷺ بتعلم لغة اليهود فتعلمها في 15 يوماً؟", o: ["زيد بن ثابت", "معاذ بن جبل", "أبي بن كعب", "أنس بن مالك"], a: 0},
    {q: "ما هي الغزوة التي كانت تسمى 'غزوة العسرة'؟", o: ["خبير", "تبوك", "الخندق", "مؤتة"], a: 1},
    {q: "من هو النبي الذي أُعطي نصف الجمال؟", o: ["محمد ﷺ", "يوسف", "عيسى", "آدم"], a: 1},
    {q: "ما هي السورة التي ذكرت فيها البسملة مرتين؟", o: ["الفاتحة", "النمل", "النحل", "يس"], a: 1},
    {q: "كم مرة ذكر اسم 'محمد' صراحة في القرآن الكريم؟", o: ["4 مرات", "5 مرات", "6 مرات", "10 مرات"], a: 0},
    {q: "ما هي السورة التي تسمى 'المنجية من عذاب القبر'؟", o: ["الكهف", "يس", "الملك", "الواقعة"], a: 2}
];

// 2. دوال التشغيل والتحكم
let quizTimerId; 
let qTimeLeft;

function startQuiz() {
    // خلط الـ 50 سؤالاً واختيار أول 20 فقط لضمان التجديد في كل مرة
    currentQ = [...db.quiz].sort(() => 0.5 - Math.random()).slice(0, 20);
    qIdx = 0; 
    qScore = 0;
    
    document.getElementById('quiz-init-ui').style.display = 'none';
    document.getElementById('quiz-play-ui').style.display = 'block';
    loadQ();
}

function loadQ() {
    if (qIdx >= currentQ.length) {
        showQuizResult();
        return;
    }

    let q = currentQ[qIdx];
    document.getElementById('q-progress').innerText = `السؤال ${qIdx + 1} من ${currentQ.length}`;
    document.getElementById('q-text').innerText = q.q;
    
    let opsContainer = document.getElementById('q-options-container');
    opsContainer.innerHTML = '';
    
    q.o.forEach((opt, i) => {
        opsContainer.innerHTML += `<button class="opt-btn" onclick="checkAns(${i}, this)">${opt}</button>`;
    });

    startTimer(); // بدء عداد الـ 15 ثانية لكل سؤال
}

function startTimer() {
    clearInterval(quizTimerId);
    qTimeLeft = 100;
    const bar = document.getElementById('q-timer-fill');
    
    quizTimerId = setInterval(() => {
        qTimeLeft -= 0.6; // سرعة النقصان
        bar.style.width = qTimeLeft + '%';
        
        if (qTimeLeft <= 0) {
            clearInterval(quizTimerId);
            handleTimeOut();
        }
    }, 100); 
}

function checkAns(selectedIdx, btn) {
    clearInterval(quizTimerId);
    
    const correctIdx = currentQ[qIdx].a;
    const allButtons = document.querySelectorAll('.opt-btn');
    
    // قفل الأزرار عشان ميضغطش مرتين
    allButtons.forEach(b => b.style.pointerEvents = 'none');

    if (selectedIdx === correctIdx) {
        btn.classList.add('correct');
        qScore++;
    } else {
        btn.classList.add('wrong');
        allButtons[correctIdx].classList.add('correct'); // تبيين الصح
    }

    qIdx++;
    setTimeout(loadQ, 1000); // استراحة ثانية قبل السؤال اللي بعده
}

function handleTimeOut() {
    const correctIdx = currentQ[qIdx].a;
    const allButtons = document.querySelectorAll('.opt-btn');
    if(allButtons.length > 0) allButtons[correctIdx].classList.add('correct');
    
    qIdx++;
    setTimeout(loadQ, 1000);
}

function showQuizResult() {
    let finalMsg = "";
    if(qScore >= 18) finalMsg = "ما شاء الله! أنت موسوعة دينية متنقلة.";
    else if(qScore >= 14) finalMsg = "أحسنت! معلوماتك قوية جداً.";
    else if(qScore >= 10) finalMsg = "جيد جداً، واصل القراءة في السيرة لتتحسن.";
    else finalMsg = "محاولة جيدة، ننصحك بمراجعة قسم السيرة والقرآن.";

    document.getElementById('quiz-play-ui').innerHTML = `
        <div style="text-align:center; padding: 20px;">
            <i class="fas fa-star" style="font-size:3rem; color:var(--n-gold); margin-bottom:15px; text-shadow: 0 0 15px var(--n-gold);"></i>
            <h2 style="font-family:'Zain';">انتهى التحدي</h2>
            <h1 style="color:var(--n-blue); font-size:4rem; margin:10px 0;">${qScore} / ${currentQ.length}</h1>
            <p style="color:#aaa; font-size:1.1rem; margin-bottom:25px;">${finalMsg}</p>
            <button class="btn-neon" style="border-color:var(--n-orange); color:var(--n-orange);" onclick="location.reload()">إعادة التحدي</button>
        </div>
    `;
        }
        // مصفوفة الفيديوهات (يمكنك إضافة أي فيديو جديد هنا بسهولة)
db.videos = [
    { t: "قصص الأنبياء كاملة - نبيل العوضي", id: "tOLP5uF3hCI", author: "نبيل العوضي", type: "قصص" },
    { t: "قصة سليمان عليه السلام والجن", id: "MntX9clYGp4", author: "نبيل العوضي", type: "قصص" },
    { t: "قصة إبراهيم عليه السلام والنمرود", id: "vAX3Rtoj1WI", author: "نبيل العوضي", type: "قصص" },
    { t: "قصة هود عليه السلام وقوم عاد", id: "yNlEywo0V54", author: "عمر عبد الكافي", type: "قصص" },
    { t: "قصة صالح عليه السلام (ثمود)", id: "aYAljhz8ISw", author: "عمر عبد الكافي", type: "قصص" },
    { t: "الإسراء والمعراج كما رواها النبي", id: "g2u47uIkDHY", author: "عمر عبد الكافي", type: "سيرة" },
    { t: "أجمل قصص السيرة النبوية", id: "msl2yxzOKr0", author: "بدر المشاري", type: "سيرة" },
    { t: "كيف ترتاح نفسياً وتطمئن؟", id: "yaAJz9QQCbU", author: "نبيل العوضي", type: "موعظة" },
    { t: "أجمل 5 قصص ممتعة ومؤثرة", id: "DGM8DEdFpWM", author: "عمر عبد الكافي", type: "موعظة" },
    { t: "نهاية الطاغية نمرود", id: "Agx6QIAJx-o", author: "نبيل العوضي", type: "قصص" },
    { t: "أصحاب الكهف (قصة كاملة)", id: "Atx8H_b-cbU", author: "موعظة", type: "قصص" },
    { t: "تلاوة خاشعة تريح القلب", id: "AdksVZaW5jc", author: "تلاوات", type: "قرآن" }
];

// دالة بناء وتوليد كروت الفيديوهات
function renderVideos() {
    const grid = document.getElementById('video-library-grid');
    if(!grid) return;
    grid.innerHTML = ''; 

    db.videos.forEach(v => {
        // جلب صورة الفيديو من يوتيوب
        const thumb = `https://img.youtube.com/vi/${v.id}/mqdefault.jpg`;
        grid.innerHTML += `
            <div class="neon-card c-purple" onclick="window.open('https://www.youtube.com/watch?v=${v.id}', '_blank')" style="padding:15px; cursor:pointer;">
                <div style="position:relative; overflow:hidden; border-radius:15px; margin-bottom:12px; border:1px solid var(--n-purple);">
                    <img src="${thumb}" style="width:100%; display:block;" alt="${v.t}">
                    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); color:#fff; font-size:2.5rem; text-shadow:0 0 15px rgba(0,0,0,0.9);">
                        <i class="fas fa-play-circle"></i>
                    </div>
                </div>
                <h4 style="font-size:1.1rem; color:#fff; margin-bottom:8px; font-family:'Zain';">${v.t}</h4>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <small style="color:var(--n-purple); font-weight:bold;">${v.author}</small>
                    <span style="background:rgba(189,0,255,0.1); color:var(--n-purple); padding:2px 10px; border-radius:10px; font-size:0.75rem;">${v.type}</span>
                </div>
            </div>
        `;
    });
}
// دالة إيقاف الصوت وإغلاق الشريط السفلي
function stopAudio() {
    // إيقاف التشغيل
    mainAudio.pause();
    // إعادة وقت السورة للبداية (اختياري)
    mainAudio.currentTime = 0; 
    // إخفاء شريط التشغيل تماماً
    document.getElementById('p-bar-ui').style.display = 'none';
    // تحديث أيقونة الراديو إذا كان هناك تداخل (اختياري)
    document.getElementById('p-icon-main').className = "fas fa-play";
}
// كود لجلب عدد الزوار الحقيقي عبر خدمة// كود لجلب عدد الزوار الحقيقي عبر خدمة CounterAPI المستقرة
async function updateVisitorCount() {
    // تم استخدام اسم فريد 'elyaqeen_platform' لضمان عدم تداخل الأرقام
    const url = 'https://api.counterapi.dev/v1/elyaqeen_platform/visits/up';
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        
        // تحويل الرقم لتنسيق عربي أنيق (مثل: ١,٢٥٠)
        const formattedCount = Number(data.count).toLocaleString('ar-EG');
        document.getElementById('visitor-count-header').innerText = formattedCount;
    } catch (e) {
        console.log("Counter Error:", e);
        // الرقم الذي يظهر في حال تعطل الخدمة المؤقت
        document.getElementById('visitor-count-header').innerText = "١,٠٥٠+"; 
    }
}

// استدعاء الدالة عند تحميل الصفحة
updateVisitorCount();
    </script>
<footer style="text-align: center; padding: 40px 20px; color: #888; border-top: 1px solid var(--border); margin-top: 60px; background: rgba(0,0,0,0.3); backdrop-filter: blur(10px);">
    <div style="margin-bottom: 25px;">
        <p style="font-size: 1.1rem; color: #fff; font-family: 'Zain'; margin-bottom: 8px;">
            جميع الحقوق محفوظة © 2026 <span style="color: var(--n-blue); font-weight: bold;">منصة اليقين</span>
        </p>
        <p style="font-size: 0.95rem; color: #aaa;">
            تصميم وبرمجة: 
            <span style="color: var(--n-gold); font-weight: 700; text-shadow: 0 0 5px var(--n-gold);">Abdulrahman Salem</span>
        </p>
    </div>

    <div style="display: flex; justify-content: center; gap: 30px; font-size: 2rem;">
        <a href="https://www.facebook.com/bodax01?mibextid=ZbWKwL" target="_blank" title="فيسبوك" style="color: #1877F2; transition: 0.3s; filter: drop-shadow(0 0 8px #1877F2);">
            <i class="fab fa-facebook"></i>
        </a>
        <a href="https://wa.me/201552729311" target="_blank" title="واتساب" style="color: #25D366; transition: 0.3s; filter: drop-shadow(0 0 8px #25D366);">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>
</footer>
</body>
</html>

