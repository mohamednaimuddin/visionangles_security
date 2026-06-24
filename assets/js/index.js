// ==========================================
// VISIONANGLES SECURITY - INDEX PAGE SCRIPTS
// ==========================================

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Local Arabic language switcher. Keeps users on-site and avoids third-party translation widgets.
document.addEventListener('DOMContentLoaded', function() {
    const languageToggles = document.querySelectorAll('[data-language-toggle]');
    const originalText = new WeakMap();
    const originalAttrs = new WeakMap();

    const translations = {
        'Initializing Experience...': 'جاري تهيئة التجربة...',
        'Dashboard': 'الرئيسية',
        'Products': 'المنتجات',
        'Network Products': 'منتجات الشبكات',
        'Video Intercom': 'إنتركم مرئي',
        'Access Control': 'التحكم بالدخول',
        'LED Displays': 'شاشات LED',
        'Surveillance Solutions': 'حلول المراقبة',
        'Speed Gates and Turnstiles': 'بوابات السرعة والدوارات',
        'Interactive Flat Panel Displays': 'الشاشات التفاعلية المسطحة',
        'Thermal': 'الكاميرات الحرارية',
        'Audio Products': 'منتجات الصوت',
        'Alarm': 'أنظمة الإنذار',
        'Parking Management': 'إدارة المواقف',
        'Accessories': 'الملحقات',
        'IP Phones': 'هواتف IP',
        'Web Development': 'تطوير الويب',
        'Solutions': 'الحلول',
        'Partners': 'الشركاء',
        'About': 'من نحن',
        'Contact': 'تواصل معنا',
        'CCTV & ELV Security Solutions in Saudi Arabia': 'حلول CCTV و ELV الأمنية في المملكة العربية السعودية',
        '"Securing Tomorrow, Protecting Today"': '"نؤمن الغد ونحمي اليوم"',
        '"Innovation Meets Security"': '"حيث يلتقي الابتكار بالأمان"',
        '"Your Safety, Our Priority"': '"سلامتك أولويتنا"',
        'Scroll': 'تمرير',
        'Our Products': 'منتجاتنا',
        'Smart Safety Systems': 'أنظمة سلامة ذكية',
        'Browse our range of modern cameras, alarms, and smart access tools built to keep your space safe.': 'تصفح مجموعتنا من الكاميرات الحديثة والإنذارات وأدوات الدخول الذكية المصممة لحماية مساحتك.',
        'Biometric & Card Reader': 'قارئ بصمة وبطاقات',
        'Access': 'دخول',
        'Smart access with smartphone control': 'دخول ذكي بتحكم من الهاتف',
        'Professional': 'احترافي',
        'Network Systems': 'أنظمة الشبكات',
        'Strong wired and Wi-Fi setups for offices, shops, and homes. Stay online and stay fast.': 'حلول سلكية ولاسلكية قوية للمكاتب والمتاجر والمنازل. ابق متصلا وبسرعة عالية.',
        'Infrastructure': 'البنية التحتية',
        'Thermal Camera': 'كاميرا حرارية',
        'Heat detection technology': 'تقنية كشف الحرارة',
        'Advanced': 'متقدم',
        'Network Video Recorder (NVR) & IP Surveillance Camera': 'مسجل فيديو شبكي (NVR) وكاميرات مراقبة IP',
        'A centralized high-capacity video storage and management system enabling high-definition digital monitoring with seamless network connectivity.': 'نظام مركزي عالي السعة لتخزين وإدارة الفيديو يتيح مراقبة رقمية عالية الدقة مع اتصال شبكي سلس.',
        'Surveillance': 'المراقبة',
        'Enterprise Audio System': 'نظام صوت للمؤسسات',
        'High-fidelity sound with network integration for corporate buildings': 'صوت عالي الجودة مع تكامل شبكي للمباني المؤسسية',
        'Commercial Audio': 'صوت تجاري',
        'Modern Burglar Alarm System': 'نظام إنذار سرقة حديث',
        'A smart wireless alarm with live alerts on your phone. Get warned the moment something goes wrong.': 'إنذار لاسلكي ذكي مع تنبيهات مباشرة على هاتفك. يصلك التحذير فور حدوث أي طارئ.',
        'Safety Systems': 'أنظمة السلامة',
        'Our Software': 'برمجياتنا',
        'Web Development Services': 'خدمات تطوير الويب',
        'We build custom web apps, SaaS tools, and smart digital products for modern teams.': 'نبني تطبيقات ويب مخصصة وأدوات SaaS ومنتجات رقمية ذكية للفرق الحديثة.',
        'Attendance System': 'نظام الحضور',
        'Cloud-based tracking without hardware': 'تتبع سحابي بدون أجهزة',
        'No Hardware Required': 'لا يحتاج إلى أجهزة',
        'Expense Tracker': 'متتبع المصروفات',
        'Automated expense management & reporting': 'إدارة وتقارير مصروفات آلية',
        'Financial': 'مالي',
        'Stock Management': 'إدارة المخزون',
        'Real-time inventory control & alerts': 'تحكم وتنبيهات للمخزون في الوقت الفعلي',
        'Inventory': 'المخزون',
        'Popular': 'شائع',
        'Custom Web Apps': 'تطبيقات ويب مخصصة',
        'Web tools shaped to fit the way your business works.': 'أدوات ويب مصممة لتناسب طريقة عمل شركتك.',
        'Web & Mobile Apps': 'تطبيقات ويب وجوال',
        'Who We Are': 'من نحن',
        'Mission &': 'الرسالة و',
        'Vision': 'الرؤية',
        'A Saudi-based team keeping homes, shops, schools, and offices safe.': 'فريق سعودي يحافظ على أمان المنازل والمتاجر والمدارس والمكاتب.',
        'We plan, install, and care for smart cameras, alarms, smart locks, and intercoms.': 'نخطط ونركب ونعتني بالكاميرات الذكية والإنذارات والأقفال الذكية والإنتركم.',
        'Our goal is simple — we want you to feel calm and in control of your space.': 'هدفنا بسيط: أن تشعر بالطمأنينة والسيطرة على مساحتك.',
        'We plan, install, and care for smart cameras, alarms, smart locks, and intercoms. Our goal is simple — we want you to feel calm and in control of your space. Reach out and let us help you pick the right setup.': 'نخطط ونركب ونعتني بالكاميرات الذكية والإنذارات والأقفال الذكية والإنتركم. هدفنا بسيط: أن تشعر بالطمأنينة والسيطرة على مساحتك. تواصل معنا ودعنا نساعدك في اختيار التجهيز المناسب.',
        'Reach out and let us help you pick the right setup.': 'تواصل معنا ودعنا نساعدك في اختيار التجهيز المناسب.',
        'Years of trust': 'سنوات من الثقة',
        'Cities served': 'مدن نخدمها',
        'Support & care': 'دعم ورعاية',
        'Serving across KSA': 'نخدم في أنحاء المملكة',
        'Al Khobar': 'الخبر',
        'Al Jubail': 'الجبيل',
        'Dammam': 'الدمام',
        'Riyadh': 'الرياض',
        'Jeddah': 'جدة',
        'Talk to our team': 'تحدث إلى فريقنا',
        'Our Mission': 'رسالتنا',
        'Protecting What Matters Most': 'حماية ما يهمك أكثر',
        'Modern, easy-to-use safety tools that guard the people and places you care about — built to last and simple to live with.': 'أدوات سلامة حديثة وسهلة الاستخدام تحمي الأشخاص والأماكن التي تهتم بها، مصممة لتدوم وتكون بسيطة في الاستخدام.',
        'Our Vision': 'رؤيتنا',
        'Leading the Future of Safety': 'قيادة مستقبل السلامة',
        'To be a regional leader in smart safety — setting fresh marks for new ideas, quality, and trust across the Kingdom.': 'أن نكون روادا إقليميا في السلامة الذكية، ونضع معايير جديدة للأفكار والجودة والثقة في أنحاء المملكة.',
        'Trusted By Industry Leaders': 'موثوقون من قادة القطاع',
        'Our': 'شركاؤنا',
        'Brand Partners': 'من العلامات التجارية',
        'Presence Across': 'حضورنا في',
        'Saudi Arabia': 'المملكة العربية السعودية',
        'Visit our showrooms, reach our regional teams, or contact the head office for project planning and support.': 'زر معارضنا أو تواصل مع فرقنا الإقليمية أو مع المكتب الرئيسي لتخطيط المشاريع والدعم.',
        'Locations': 'مواقع',
        'Showrooms': 'معارض',
        'Regional Offices': 'مكاتب إقليمية',
        'Nationwide Reach': 'تغطية على مستوى المملكة',
        'Head Office': 'المكتب الرئيسي',
        'Al Khobar — Head Office': 'الخبر - المكتب الرئيسي',
        'Al Khobar Showroom': 'معرض الخبر',
        'Al Jubail Showroom': 'معرض الجبيل',
        'Commercial Shop — Eastern Province, KSA': 'محل تجاري - المنطقة الشرقية، المملكة',
        'Central Region Office, KSA': 'مكتب المنطقة الوسطى، المملكة',
        'Western Region Office, KSA': 'مكتب المنطقة الغربية، المملكة',
        'Sat – Thu · 8AM – 6PM': 'السبت - الخميس · 8 صباحا - 6 مساء',
        'Sat – Thu · 8AM – 9PM': 'السبت - الخميس · 8 صباحا - 9 مساء',
        'Get Directions': 'الاتجاهات',
        'Why Modern Security': 'لماذا يستحق الأمن الحديث',
        'Pays Off': 'الاستثمار',
        'Real-world numbers show why integrated security is not just protection — it is risk reduction, operational visibility, and faster response.': 'تظهر الأرقام الواقعية أن الأمن المتكامل ليس حماية فقط، بل تقليل للمخاطر ورؤية تشغيلية واستجابة أسرع.',
        'Average drop in property crime in areas with active CCTV monitoring.': 'متوسط انخفاض جرائم الممتلكات في المناطق التي تستخدم مراقبة CCTV نشطة.',
        'Global video surveillance market size projected by 2030, growing at ~12% CAGR.': 'حجم سوق المراقبة بالفيديو عالميا المتوقع بحلول 2030 مع نمو يقارب 12% سنويا.',
        'Saudi Arabia’s safety & security spend tied to Vision 2030 mega-projects (NEOM, Diriyah, Red Sea).': 'إنفاق السلامة والأمن في السعودية المرتبط بمشاريع رؤية 2030 الكبرى مثل نيوم والدرعية والبحر الأحمر.',
        'Faster incident response when alarm, CCTV and access control are integrated on a single platform vs. siloed systems.': 'استجابة أسرع للحوادث عند دمج الإنذار والمراقبة والتحكم بالدخول في منصة واحدة بدلا من الأنظمة المنفصلة.',
        'Frequently Asked': 'الأسئلة الشائعة',
        'Answers Before You': 'إجابات قبل أن',
        'Ask': 'تسأل',
        'Quick answers about our security systems, installation areas, supported brands, and service process.': 'إجابات سريعة حول أنظمة الأمان ومناطق التركيب والعلامات المدعومة وطريقة الخدمة.',
        'Quick facts about Vision Angles Security — what we do, where we work, and how to reach us.': 'معلومات سريعة عن فيجن أنجلز سيكيوريتي: خدماتنا، مناطق عملنا، وطرق التواصل معنا.',
        'What services does Vision Angles Security provide in Saudi Arabia?': 'ما الخدمات التي تقدمها فيجن أنجلز سيكيوريتي في السعودية؟',
        'Where is Vision Angles Security located?': 'أين تقع فيجن أنجلز سيكيوريتي؟',
        'Which security brands does Vision Angles Security install?': 'ما العلامات الأمنية التي تركبها فيجن أنجلز سيكيوريتي؟',
        'Do you provide installation and after-sales support?': 'هل تقدمون التركيب والدعم بعد البيع؟',
        'How do I request a quote from Vision Angles Security?': 'كيف أطلب عرض سعر من فيجن أنجلز سيكيوريتي؟',
        'What are Vision Angles Security\'s working hours?': 'ما ساعات عمل فيجن أنجلز سيكيوريتي؟',
        'How much does a CCTV installation cost in Saudi Arabia?': 'كم تكلفة تركيب كاميرات المراقبة في السعودية؟',
        'Vision Angles Security provides CCTV and IP surveillance, access control, video intercom, burglar alarms, network infrastructure, public-address audio, thermal cameras, LED displays, speed gates, interactive flat panels and parking management across Saudi Arabia.': 'تقدم فيجن أنجلز سيكيوريتي حلول كاميرات المراقبة CCTV و IP، والتحكم بالدخول، والإنتركم المرئي، وأنظمة الإنذار، والبنية التحتية للشبكات، وأنظمة النداء الصوتي، والكاميرات الحرارية، وشاشات LED، وبوابات السرعة، والشاشات التفاعلية، وإدارة المواقف في جميع أنحاء السعودية.',
        'We are a full-service ELV and security systems integrator. We serve homes, retail shops, offices, schools and industrial sites across Al Khobar, Al Jubail, Dammam, Riyadh and Jeddah.': 'نحن مزود متكامل لخدمات أنظمة ELV والأنظمة الأمنية. نخدم المنازل والمتاجر والمكاتب والمدارس والمواقع الصناعية في الخبر والجبيل والدمام والرياض وجدة.',
        'Vision Angles Security is headquartered in Al Khobar (postal code 34714), Eastern Province, Saudi Arabia.': 'يقع المقر الرئيسي لفيجن أنجلز سيكيوريتي في الخبر (الرمز البريدي 34714)، المنطقة الشرقية، السعودية.',
        'We operate two showrooms — Al Khobar and Al Jubail — and two regional offices in Riyadh (Central Region) and Jeddah (Western Region).': 'لدينا معرضان في الخبر والجبيل، ومكتبان إقليميان في الرياض (المنطقة الوسطى) وجدة (المنطقة الغربية).',
        'Vision Angles Security installs Hikvision, Dahua, ZKTeco, EZVIZ, Bosch, Hanwha, Paradox and Ajax for surveillance and alarms;': 'تركب فيجن أنجلز سيكيوريتي علامات Hikvision وDahua وZKTeco وEZVIZ وBosch وHanwha وParadox وAjax للمراقبة والإنذارات؛',
        'Sophos, Fortinet, WatchGuard, Cisco, TP-Link, D-Link': 'Sophos وFortinet وWatchGuard وCisco وTP-Link وD-Link',
        'and': 'و',
        'Ruijie': 'Ruijie',
        'for network and security infrastructure;': 'للبنية التحتية للشبكات والأمن؛',
        'Grandstream': 'Grandstream',
        'Cisco': 'Cisco',
        'for IP telephony;': 'للهواتف الشبكية IP؛',
        'Bose, Ahuja, Shure': 'Bose وAhuja وShure',
        'ProSound': 'ProSound',
        'for audio; and': 'للصوت؛ و',
        'Lampro, Samsung': 'Lampro وSamsung',
        'and partner brands for LED displays and interactive panels.': 'وعلامات شريكة لشاشات LED والشاشات التفاعلية.',
        'Yes — every Vision Angles Security project includes site survey, design, supply, installation, commissioning, user training and ongoing maintenance.': 'نعم، يشمل كل مشروع من فيجن أنجلز سيكيوريتي معاينة الموقع، والتصميم، والتوريد، والتركيب، والتشغيل، وتدريب المستخدمين، والصيانة المستمرة.',
        'Our local technicians cover Al Khobar, Al Jubail, Dammam, Riyadh and Jeddah, and we offer annual maintenance contracts (AMC) with same-day response in the Eastern Province.': 'يغطي فنّيونا المحليون الخبر والجبيل والدمام والرياض وجدة، ونوفر عقود صيانة سنوية (AMC) مع استجابة في نفس اليوم في المنطقة الشرقية.',
        'Request a quote from Vision Angles Security in three ways: call': 'يمكنك طلب عرض سعر من فيجن أنجلز سيكيوريتي بثلاث طرق: الاتصال على',
        ', send WhatsApp to': '، أو إرسال واتساب إلى',
        'send WhatsApp to': 'أو إرسال واتساب إلى',
        ', or email': '، أو إرسال بريد إلكتروني إلى',
        'or email': 'أو إرسال بريد إلكتروني إلى',
        '. You can also submit the contact form at': '. يمكنك أيضا إرسال نموذج التواصل عبر',
        'You can also submit the contact form at': 'يمكنك أيضا إرسال نموذج التواصل عبر',
        '. Quotes are typically returned within': '. عادة يتم إرسال عروض الأسعار خلال',
        'Quotes are typically returned within': 'عادة يتم إرسال عروض الأسعار خلال',
        'one business day': 'يوم عمل واحد',
        'Vision Angles Security\'s head office in Al Khobar is open Saturday to Thursday, 8:00 AM to 6:00 PM.': 'يفتح المقر الرئيسي لفيجن أنجلز سيكيوريتي في الخبر من السبت إلى الخميس، من 8:00 صباحا حتى 6:00 مساء.',
        'The Al Khobar and Al Jubail showrooms are open Saturday to Thursday, 8:00 AM to 9:00 PM. All locations are closed on Fridays.': 'تفتح معارض الخبر والجبيل من السبت إلى الخميس، من 8:00 صباحا حتى 9:00 مساء. جميع الفروع مغلقة يوم الجمعة.',
        'A small-business CCTV installation in Saudi Arabia typically starts from around SAR 1,500 for a 4-camera HD package and scales to SAR 25,000+ for enterprise sites with 16–64 IP cameras, NVR with RAID storage and VMS.': 'تبدأ تكلفة تركيب كاميرات CCTV للأعمال الصغيرة في السعودية عادة من حوالي 1,500 ريال لباقة 4 كاميرات HD، وقد تصل إلى أكثر من 25,000 ريال للمواقع الكبيرة التي تحتاج إلى 16-64 كاميرا IP مع جهاز NVR وتخزين RAID ونظام VMS.',
        'Final pricing depends on camera count, resolution (2MP–8MP), cabling distance, storage retention (7–90 days) and any video analytics required. Vision Angles Security provides free on-site surveys and itemized quotes within one business day.': 'يعتمد السعر النهائي على عدد الكاميرات، والدقة (2MP-8MP)، ومسافة التمديدات، ومدة حفظ التسجيلات (7-90 يوما)، وأي تحليلات فيديو مطلوبة. تقدم فيجن أنجلز سيكيوريتي معاينة مجانية للموقع وعرض سعر مفصل خلال يوم عمل واحد.',
        'Let\'s Talk': 'لنتحدث عن',
        'Security': 'الأمان',
        'Get In Touch': 'تواصل معنا',
        'Tell us what you want to protect. Our team will recommend the right cameras, access control, alarms, or network setup for your space.': 'أخبرنا بما تريد حمايته. سيوصي فريقنا بالكاميرات أو التحكم بالدخول أو الإنذارات أو الشبكات المناسبة لمساحتك.',
        'Tell us what you\'re protecting — a home, a shop, an office, or a full site — and we\'ll guide you to the right CCTV, access control, intercom, alarm, or network setup. Local teams in Al Khobar, Al Jubail, Riyadh & Jeddah, ready to help.': 'أخبرنا بما تريد حمايته، سواء كان منزلا أو متجرا أو مكتبا أو موقعا كاملا، وسنرشدك إلى الحل المناسب من كاميرات CCTV أو التحكم بالدخول أو الإنتركم أو الإنذار أو إعدادات الشبكات. فرقنا المحلية في الخبر والجبيل والرياض وجدة جاهزة لمساعدتك.',
        'Call': 'اتصل',
        'WhatsApp': 'واتساب',
        'Full Name': 'الاسم الكامل',
        'Email Address': 'البريد الإلكتروني',
        'Phone Number': 'رقم الهاتف',
        'Subject': 'الموضوع',
        'Select a subject': 'اختر الموضوع',
        'General Inquiry': 'استفسار عام',
        'Sales & Pricing': 'المبيعات والأسعار',
        'Technical Support': 'الدعم الفني',
        'Partnership': 'الشراكات',
        'Other': 'أخرى',
        'Select Branch': 'اختر الفرع',
        'Select a branch': 'اختر الفرع',
        'Message': 'الرسالة',
        'Send Message': 'إرسال الرسالة',
        'Sending...': 'جاري الإرسال...',
        'Vision Angles Security': 'فيجن أنجلز سيكيوريتي',
        'Securing Tomorrow, Protecting Today': 'نؤمن الغد ونحمي اليوم',
        'A trusted name for smart safety gear in Saudi Arabia. We supply modern cameras, alarms, smart locks, and audio tools for homes and businesses. Our team plans, installs, and cares for every setup with you in mind.': 'اسم موثوق في حلول السلامة الذكية في السعودية. نوفر كاميرات حديثة وإنذارات وأقفالا ذكية وأدوات صوتية للمنازل والأعمال، مع تخطيط وتركيب ورعاية لكل مشروع.',
        'Quick Links': 'روابط سريعة',
        'Home': 'الرئيسية',
        'About Us': 'من نحن',
        'Our Branches': 'فروعنا',
        'Contact Us': 'تواصل معنا',
        'Our Products': 'منتجاتنا',
        'Network Gear': 'معدات الشبكات',
        'Speed Gates & Turnstiles': 'بوابات السرعة والدوارات',
        'Interactive Flat Panels': 'الشاشات التفاعلية',
        'Head Office': 'المكتب الرئيسي',
        'Phone': 'الهاتف',
        'Email': 'البريد الإلكتروني',
        'Working Hours': 'ساعات العمل',
        'Sat - Thu: 8AM - 6PM': 'السبت - الخميس: 8 صباحا - 6 مساء',
        'Privacy Policy': 'سياسة الخصوصية',
        'Terms of Service': 'شروط الخدمة',
        'Editorial Policy': 'السياسة التحريرية',
        'Chat with us!': 'تحدث معنا!',
        'Enter your name': 'اكتب اسمك',
        'Enter your email': 'اكتب بريدك الإلكتروني',
        'Enter your phone number': 'اكتب رقم هاتفك',
        'Write your message here...': 'اكتب رسالتك هنا...'
    };

    function rememberAttr(element, attr) {
        if (!originalAttrs.has(element)) {
            originalAttrs.set(element, {});
        }
        const attrs = originalAttrs.get(element);
        if (!Object.prototype.hasOwnProperty.call(attrs, attr)) {
            attrs[attr] = element.getAttribute(attr);
        }
        return attrs[attr];
    }

    function getTranslatedText(source, isArabic) {
        if (!isArabic) return source;

        const trimmed = source.trim();
        const normalized = trimmed.replace(/\s+/g, ' ');
        const translation = translations[trimmed] || translations[normalized];
        if (!translation) return source;

        const leadingWhitespace = source.match(/^\s*/)[0];
        const trailingWhitespace = source.match(/\s*$/)[0];
        return `${leadingWhitespace}${translation}${trailingWhitespace}`;
    }

    function setLanguage(language) {
        const isArabic = language === 'ar';
        document.documentElement.lang = isArabic ? 'ar' : 'en';
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
        document.body.classList.toggle('is-arabic', isArabic);

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                const parent = node.parentElement;
                if (!parent || ['SCRIPT', 'STYLE', 'SVG'].includes(parent.tagName)) {
                    return NodeFilter.FILTER_REJECT;
                }
                return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });

        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (!originalText.has(node)) {
                originalText.set(node, node.nodeValue);
            }
            const source = originalText.get(node);
            node.nodeValue = getTranslatedText(source, isArabic);
        }

        document.querySelectorAll('[placeholder], [aria-label], [title], img[alt]').forEach(element => {
            ['placeholder', 'aria-label', 'title', 'alt'].forEach(attr => {
                if (!element.hasAttribute(attr)) return;
                const source = rememberAttr(element, attr);
                element.setAttribute(attr, isArabic && translations[source] ? translations[source] : source);
            });
        });

        languageToggles.forEach(languageToggle => {
            const label = languageToggle.querySelector('span');
            if (label) label.textContent = isArabic ? 'English' : 'العربية';
            languageToggle.setAttribute('href', isArabic ? '?lang=en' : '?lang=ar');
            languageToggle.setAttribute('lang', isArabic ? 'en' : 'ar');
            languageToggle.setAttribute('aria-label', isArabic ? 'Switch to English' : 'Translate this page to Arabic');
        });
    }

    function updateUrl(language) {
        const url = new URL(window.location.href);
        if (language === 'ar') {
            url.searchParams.set('lang', 'ar');
        } else {
            url.searchParams.delete('lang');
        }
        window.history.replaceState({}, '', url);
    }

    function getInitialLanguage() {
        const urlLanguage = new URLSearchParams(window.location.search).get('lang');
        if (urlLanguage === 'ar' || urlLanguage === 'en') {
            return urlLanguage;
        }
        return 'en';
    }

    const initialLanguage = getInitialLanguage();
    setLanguage(initialLanguage);
    updateUrl(initialLanguage);

    let lastLanguageToggleAt = 0;

    function handleLanguageToggle(event) {
        event.preventDefault();
        event.stopPropagation();

        const now = Date.now();
        if (event.type === 'click' && now - lastLanguageToggleAt < 500) {
            return;
        }
        lastLanguageToggleAt = now;

        const nextLanguage = document.documentElement.lang === 'ar' ? 'en' : 'ar';
        setLanguage(nextLanguage);
        updateUrl(nextLanguage);

        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navCenter = document.querySelector('.nav-center');
        const navbar = document.getElementById('navbar');
        mobileMenuBtn?.classList.remove('active');
        navCenter?.classList.remove('mobile-open');
        navbar?.classList.remove('menu-open');
    }

    languageToggles.forEach(languageToggle => {
        languageToggle.addEventListener('click', handleLanguageToggle);
        languageToggle.addEventListener('touchend', handleLanguageToggle, { passive: false });
    });

    window.addEventListener('pageshow', function() {
        setLanguage(getInitialLanguage());
    });
});

// Slider functionality
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const quotes = document.querySelectorAll('.hero-quote');
let currentSlide = 0;

function goToSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    quotes.forEach(quote => quote.classList.remove('active'));
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    quotes[index].classList.add('active');
    currentSlide = index;
}

// Auto-slide every 5 seconds
setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
}, 5000);

// Slide indicators click
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        goToSlide(index);
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navCenter = document.querySelector('.nav-center');
const navbar = document.getElementById('navbar');

mobileMenuBtn.addEventListener('click', function() {
    mobileMenuBtn.classList.toggle('active');
    navCenter.classList.toggle('mobile-open');
    navbar.classList.toggle('menu-open');
});

// Close menu when clicking a link (except dropdown toggles)
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.closest('.has-dropdown')) return;
    
    link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        navCenter.classList.remove('mobile-open');
        navbar.classList.remove('menu-open');
    });
});

// Dropdown Toggle for Touch/Click (mobile support)
const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.mega-dropdown');
    
    if (link && dropdown) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            dropdownItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('dropdown-open');
                }
            });
            
            // Toggle current dropdown
            item.classList.toggle('dropdown-open');
        });
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-item.has-dropdown')) {
        dropdownItems.forEach(item => {
            item.classList.remove('dropdown-open');
        });
    }
});

// Close dropdown when clicking a link inside it
document.querySelectorAll('.mega-dropdown a').forEach(link => {
    link.addEventListener('click', function() {
        dropdownItems.forEach(item => {
            item.classList.remove('dropdown-open');
        });
        mobileMenuBtn.classList.remove('active');
        navCenter.classList.remove('mobile-open');
        navbar.classList.remove('menu-open');
    });
});


// Page Loader - Quick fade out
window.addEventListener('load', function() {
    document.getElementById('loader').classList.add('loaded');
    document.body.classList.add('page-loaded');
});

// Horizontal Scroll with Sticky Lock Effect
const productsSection = document.getElementById('productsSection');
const productsTrack = document.getElementById('productsTrack');
const progressBar = document.getElementById('productsProgressBar');

let productsCurrentX = 0;
let productsTargetX = 0;

function updateHorizontalScroll() {
    const rect = productsSection.getBoundingClientRect();
    const sectionHeight = productsSection.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = sectionHeight - viewportHeight;
    
    // Calculate how far we've scrolled into the section
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
    
    // Calculate the track scroll width
    const trackScrollWidth = productsTrack.scrollWidth - window.innerWidth + 100;
    
    // Set target position
    productsTargetX = -progress * trackScrollWidth;
    
    // Update progress bar
    progressBar.style.width = `${progress * 100}%`;
}

// Smooth animation loop for products section
function animateProductsScroll() {
    // Lerp (linear interpolation) for smooth movement
    productsCurrentX += (productsTargetX - productsCurrentX) * 0.1;
    
    if (productsTrack) {
        productsTrack.style.transform = `translateX(${productsCurrentX}px)`;
    }
    
    requestAnimationFrame(animateProductsScroll);
}

// Start animation loop
animateProductsScroll();

// Listen for scroll events
window.addEventListener('scroll', updateHorizontalScroll);
window.addEventListener('resize', updateHorizontalScroll);

// Initial call
updateHorizontalScroll();

// Software Section Horizontal Scroll
const softwareSection = document.getElementById('softwareSection');
const softwareTrack = document.getElementById('softwareTrack');
const softwareProgressBar = document.getElementById('softwareProgressBar');

let softwareCurrentX = 0;
let softwareTargetX = 0;

function updateSoftwareScroll() {
    if (!softwareSection || !softwareTrack) return;
    
    const rect = softwareSection.getBoundingClientRect();
    const sectionHeight = softwareSection.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = sectionHeight - viewportHeight;
    
    // Calculate how far we've scrolled into the section
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
    
    // Calculate the track scroll width
    const trackScrollWidth = softwareTrack.scrollWidth - window.innerWidth + 100;
    
    // Set target position
    softwareTargetX = -progress * trackScrollWidth;
    
    // Update progress bar
    if (softwareProgressBar) {
        softwareProgressBar.style.width = `${progress * 100}%`;
    }
}

// Smooth animation loop for software section
function animateSoftwareScroll() {
    // Lerp (linear interpolation) for smooth movement
    softwareCurrentX += (softwareTargetX - softwareCurrentX) * 0.1;
    
    if (softwareTrack) {
        softwareTrack.style.transform = `translateX(${softwareCurrentX}px)`;
    }
    
    requestAnimationFrame(animateSoftwareScroll);
}

// Start animation loop
animateSoftwareScroll();

// Listen for scroll events
window.addEventListener('scroll', updateSoftwareScroll);
window.addEventListener('resize', updateSoftwareScroll);

// Initial call
updateSoftwareScroll();

// ==========================================
// LEAFLET MAP INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure container is ready
    setTimeout(function() {
        const mapContainer = document.getElementById('leaflet-map');
        if (!mapContainer) return;
        
        // Create map centered on Eastern Province
        const map = L.map('leaflet-map', {
            center: [26.65, 49.85],
            zoom: 9,
            zoomControl: true,
            scrollWheelZoom: false
        });

        // Light theme map tiles (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);

        // Force map to recalculate size
        setTimeout(() => map.invalidateSize(), 100);

        // Custom red marker icon
        const redIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="marker-red">
                <svg viewBox="0 0 24 24" fill="#ea4335" width="32" height="32">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            </div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });

        // Larger red icon for Head Office
        const redIconLarge = L.divIcon({
            className: 'custom-marker custom-marker-main',
            html: `<div class="marker-red marker-red-main">
                <div class="marker-pulse-ring"></div>
                <svg viewBox="0 0 24 24" fill="#d93025" width="44" height="44">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            </div>`,
            iconSize: [44, 44],
            iconAnchor: [22, 44],
            popupAnchor: [0, -44]
        });

        // Location coordinates (extracted from Google Maps links)
        const locations = [
            {
                name: "Head Office - Al Khobar",
                coords: [26.282234, 50.212013],
                link: "https://maps.app.goo.gl/rYADwCbbud7wgos68",
                icon: redIconLarge,
                isMain: true
            },
            {
                name: "Al Khobar Showroom",
                coords: [26.285198, 50.212366],
                link: "https://maps.app.goo.gl/yeqsH3qESi6rozv78",
                icon: redIcon,
                isMain: false
            },
            {
                name: "Al Jubail Showroom",
                coords: [27.001588, 49.649989],
                link: "https://maps.app.goo.gl/vLPhLCWJuATvnnwi7",
                icon: redIcon,
                isMain: false
            }
        ];

        // Add markers to map
        locations.forEach(loc => {
            const marker = L.marker(loc.coords, { icon: loc.icon }).addTo(map);
            
            // Create popup
            const popupContent = `
                <div class="map-popup">
                    <strong>${loc.name}</strong>
                    <br>
                    <a href="${loc.link}" target="_blank" class="popup-link">
                        Open in Google Maps →
                    </a>
                </div>
            `;
            marker.bindPopup(popupContent);
            
            // Open popup on hover
            marker.on('mouseover', function() {
                this.openPopup();
            });
        });

        // Fit bounds to show all markers with better padding
        const bounds = L.latLngBounds(locations.map(loc => loc.coords));
        map.fitBounds(bounds, { padding: [80, 80], maxZoom: 10 });
    }, 200);

    // Scroll to Top Button
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
    }

    // Contact Form - AJAX submission with validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const submitBtn = document.getElementById('submitBtn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            // Get form fields
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const branch = document.getElementById('branch').value;
            const message = document.getElementById('message').value.trim();
            
            // Validation
            const errors = [];
            
            if (!name) errors.push('Full Name is required');
            if (!email) errors.push('Email Address is required');
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Please enter a valid email address');
            if (!subject) errors.push('Please select a subject');
            if (!branch) errors.push('Please select a branch');
            if (!message) errors.push('Message is required');
            
            // Show validation errors
            if (errors.length > 0) {
                formMessage.innerHTML = '<strong>Please fix the following:</strong><ul>' + 
                    errors.map(err => '<li>' + err + '</li>').join('') + '</ul>';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }
            
            // Show loading state
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            submitBtn.disabled = true;
            formMessage.style.display = 'none';
            
            try {
                // Submit via AJAX
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success
                    formMessage.innerHTML = '<strong>Thank you!</strong> Your message has been sent successfully. We will get back to you soon.';
                    formMessage.className = 'form-message success';
                    formMessage.style.display = 'block';
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Error
                formMessage.innerHTML = '<strong>Oops!</strong> Something went wrong. Please try again or contact us directly.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            } finally {
                // Reset button
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
});
