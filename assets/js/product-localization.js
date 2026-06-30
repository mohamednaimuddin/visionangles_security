// Shared Arabic localization for product detail pages.
(function() {
    const SESSION_LANGUAGE_KEY = 'visionangles:language';
    const pageTitles = {
        'video-intercom.html': { ar: '<span class="highlight">حلول</span> الإنتركم المرئي', en: 'Video Intercom <span class="highlight">Solutions</span>' },
        'access-control.html': { ar: '<span class="highlight">أنظمة</span> التحكم بالدخول', en: 'Access Control <span class="highlight">Systems</span>' },
        'led-displays.html': { ar: '<span class="highlight">شاشات</span> LED', en: 'LED <span class="highlight">Displays</span>' },
        'surveillance-solutions.html': { ar: '<span class="highlight">حلول</span> المراقبة', en: 'Surveillance <span class="highlight">Solutions</span>' },
        'speed-gates.html': { ar: '<span class="highlight">بوابات السرعة</span> والدوارات', en: 'Speed Gates & <span class="highlight">Turnstiles</span>' },
        'interactive-flat-panels.html': { ar: '<span class="highlight">الشاشات التفاعلية</span> المسطحة', en: 'Interactive Flat Panel <span class="highlight">Displays</span>' },
        'thermal.html': { ar: '<span class="highlight">الكاميرات</span> الحرارية', en: 'Thermal <span class="highlight">Camera</span>' },
        'audio-products.html': { ar: '<span class="highlight">منتجات</span> الصوت', en: 'Audio <span class="highlight">Products</span>' },
        'buglar-alarm.html': { ar: '<span class="highlight">أنظمة</span> الإنذار', en: 'Buglar <span class="highlight">Alarm</span>' },
        'parking_management.html': { ar: '<span class="highlight">إدارة</span> المواقف', en: 'Parking <span class="highlight">Management</span>' },
        'accessories.html': { ar: '<span class="highlight">الملحقات</span>', en: '<span class="highlight">Accessories</span>' },
        'ip_phones.html': { ar: '<span class="highlight">هواتف</span> IP', en: 'IP <span class="highlight">Phones</span>' },
        'web.html': { ar: '<span class="highlight">مواقع</span> تنمي أعمالك', en: 'Websites That <span class="highlight">Grow Your</span> Business' },
        'solutions.html': { ar: '<span class="highlight">حلول</span> أمنية', en: 'Security <span class="highlight">Solutions</span>' },
        'partners.html': { ar: 'شركاؤنا <span class="highlight">الموثوقون</span>', en: 'Our Trusted <span class="highlight">Partners</span>' },
        'about.html': { ar: 'من نحن <span class="highlight">Visionangles Security Systems</span>', en: 'About <span class="highlight">Visionangles Security Systems</span>' },
        'contact.html': { ar: 'تواصل <span class="highlight">معنا</span>', en: 'Contact <span class="highlight">Us</span>' }
    };

    const ctaTitles = {
        'video-intercom.html': { ar: 'هل أنت جاهز لترقية <span class="highlight">نظام الإنتركم المرئي؟</span>', en: 'Ready to Upgrade Your <span class="highlight">Video Intercom</span> System?' },
        'access-control.html': { ar: 'هل أنت جاهز لترقية <span class="highlight">نظام التحكم بالدخول؟</span>', en: 'Ready to Upgrade Your <span class="highlight">Access Control</span> System?' },
        'led-displays.html': { ar: 'هل أنت جاهز لترقية <span class="highlight">شاشات LED؟</span>', en: 'Ready to Upgrade Your <span class="highlight">LED Display</span> System?' },
        'surveillance-solutions.html': { ar: 'هل أنت جاهز لترقية <span class="highlight">نظام المراقبة؟</span>', en: 'Ready to Upgrade Your <span class="highlight">Surveillance</span> System?' },
        'speed-gates.html': { ar: 'هل أنت جاهز لترقية <span class="highlight">بوابات الدخول؟</span>', en: 'Ready to Upgrade Your <span class="highlight">Access Lanes</span>?' },
        'interactive-flat-panels.html': { ar: 'هل أنت جاهز لترقية <span class="highlight">الشاشات التفاعلية؟</span>', en: 'Ready to Upgrade Your <span class="highlight">Interactive Displays</span>?' },
        'thermal.html': { ar: 'هل أنت جاهز لترقية <span class="highlight">الكاميرات الحرارية؟</span>', en: 'Ready to Upgrade Your <span class="highlight">Thermal Imaging</span>?' },
        'audio-products.html': { ar: 'هل أنت جاهز لترقية <span class="highlight">نظام الصوت؟</span>', en: 'Ready to Upgrade Your <span class="highlight">Audio System</span>?' },
        'buglar-alarm.html': { ar: 'هل أنت جاهز لترقية <span class="highlight">نظام الإنذار؟</span>', en: 'Ready to Upgrade Your <span class="highlight">Alarm System</span>?' },
        'parking_management.html': { ar: 'هل أنت جاهز لترقية <span class="highlight">إدارة المواقف؟</span>', en: 'Ready to Upgrade Your <span class="highlight">Parking Management</span>?' },
        'ip_phones.html': { ar: 'هل أنت جاهز لترقية <span class="highlight">نظام هواتف IP؟</span>', en: 'Ready to Upgrade Your <span class="highlight">IP Phone System</span>?' }
    };

    const productSections = {
        'video-intercom.html': {
            tagAr: 'منتجاتنا',
            titleAr: 'أجهزة <span class="highlight">الإنتركم المرئي</span>',
            descAr: 'تصفح مجموعتنا من وحدات الأبواب والشاشات الداخلية والملحقات'
        },
        'access-control.html': {
            tagAr: 'منتجاتنا',
            titleAr: 'أجهزة <span class="highlight">التحكم بالدخول</span>',
            descAr: 'تصفح مجموعتنا من حلول القياسات الحيوية وقارئات البطاقات'
        },
        'led-displays.html': {
            tagAr: 'حلول داخلية',
            titleAr: 'شاشات LED <span class="highlight">الداخلية</span>',
            descAr: 'وحدات LED عالية الدقة للمؤتمرات والمتاجر وبيئات العمل'
        },
        'surveillance-solutions.html': {
            tagAr: 'منتجاتنا',
            titleAr: 'أجهزة <span class="highlight">المراقبة</span>',
            descAr: 'تصفح مجموعتنا من كاميرات CCTV وأنظمة NVR وحلول التخزين وملحقات المراقبة'
        },
        'speed-gates.html': {
            tagAr: 'منتجاتنا',
            titleAr: 'بوابات السرعة <span class="highlight">والدوارات</span>',
            descAr: 'تصفح مجموعتنا من حلول التحكم بدخول المشاة من العلامات الرائدة'
        },
        'interactive-flat-panels.html': {
            tagAr: 'مجموعة منتجات كاملة',
            titleAr: 'شاشات Hikvision <span class="highlight">التفاعلية</span>',
            descAr: 'شاشات لمس 4K متميزة للتعليم والأعمال والتعاون'
        },
        'thermal.html': {
            tagAr: 'Hikvision الحرارية',
            titleAr: 'كاميرات Hikvision <span class="highlight">الحرارية</span>',
            descAr: 'تصوير حراري متقدم مع كشف ذكي بالذكاء الاصطناعي ومنع الحرائق'
        },
        'audio-products.html': {
            tagAr: 'منتجاتنا',
            titleAr: 'أجهزة <span class="highlight">الصوت</span>',
            descAr: 'تصفح مجموعتنا من حلول الصوت الاحترافية'
        },
        'buglar-alarm.html': {
            tagAr: 'منتجاتنا',
            titleAr: 'أجهزة <span class="highlight">إنذار السرقة</span>',
            descAr: 'تصفح مجموعتنا من لوحات التحكم وحساسات الحركة وحساسات الأبواب وملحقات الإنذار'
        },
        'parking_management.html': {
            tagAr: 'منتجاتنا',
            titleAr: 'حلول <span class="highlight">المواقف</span>',
            descAr: 'تصفح مجموعتنا من أنظمة المواقف الذكية، كاميرات ANPR، حواجز الذراع، أجهزة التذاكر، الحساسات، وحلول التحكم بالدخول'
        },
        'ip_phones.html': {
            tagAr: 'منتجاتنا',
            titleAr: 'حلول <span class="highlight">هواتف IP</span>',
            descAr: 'تصفح مجموعتنا من هواتف IP وأجهزة VoIP وحلول الاتصالات'
        }
    };

    const pageNames = {
        'Video Intercom': 'الإنتركم المرئي',
        'Access Control': 'التحكم بالدخول',
        'LED Displays': 'شاشات LED',
        'Surveillance Solutions': 'حلول المراقبة',
        'Speed Gates and Turnstiles': 'بوابات السرعة والدوارات',
        'Speed Gates & Turnstiles': 'بوابات السرعة والدوارات',
        'Interactive Flat Panel Displays': 'الشاشات التفاعلية المسطحة',
        'Thermal Camera': 'الكاميرات الحرارية',
        'Audio Products': 'منتجات الصوت',
        'Alarm': 'أنظمة الإنذار',
        'Buglar Alarm': 'أنظمة الإنذار',
        'Parking Management': 'إدارة المواقف',
        'Accessories': 'الملحقات',
        'IP Phones': 'هواتف IP',
        'Network Gear': 'معدات الشبكات',
        'Interactive Flat Panels': 'الشاشات التفاعلية',
        'Network Products': 'منتجات الشبكات',
        'Web Development': 'تطوير الويب',
        'Solutions': 'الحلول',
        'Partners': 'الشركاء',
        'About': 'من نحن',
        'Contact': 'تواصل معنا',
        'Dashboard': 'الرئيسية',
        'Products': 'المنتجات',
        'Home': 'الرئيسية'
    };

    const exactTranslations = {
        ...pageNames,
        'Skip to main content': 'تخطي إلى المحتوى الرئيسي',
        'VISIONANGLES SECURITY': 'فيجن أنجلز سيكيوريتي',
        'VISION ANGLES': 'فيجن أنجلز',
        'SECURITY SYSTEMS': 'أنظمة أمنية',
        'Loading Video Intercom...': 'جاري تحميل الإنتركم المرئي...',
        'Loading Access Control...': 'جاري تحميل أنظمة التحكم بالدخول...',
        'Loading LED Displays...': 'جاري تحميل شاشات LED...',
        'Loading Surveillance Solutions...': 'جاري تحميل حلول المراقبة...',
        'Loading Speed Gates...': 'جاري تحميل بوابات السرعة...',
        'Loading Interactive Flat Panels...': 'جاري تحميل الشاشات التفاعلية...',
        'Loading Thermal Camera...': 'جاري تحميل الكاميرات الحرارية...',
        'Loading Audio Products...': 'جاري تحميل منتجات الصوت...',
        'Loading Alarm...': 'جاري تحميل أنظمة الإنذار...',
        'Loading Parking Management...': 'جاري تحميل إدارة المواقف...',
        'Loading Accessories...': 'جاري تحميل الملحقات...',
        'Loading IP Phones...': 'جاري تحميل هواتف IP...',
        'Loading Web Development Services...': 'جاري تحميل خدمات تطوير الويب...',
        'Loading Solutions...': 'جاري تحميل الحلول...',
        'Loading Partners...': 'جاري تحميل الشركاء...',
        'Loading About Us...': 'جاري تحميل من نحن...',
        'Loading Contact...': 'جاري تحميل صفحة التواصل...',
        'Who We Are': 'من نحن',
        'Get In Touch': 'تواصل معنا',
        'Our Trusted Partners': 'شركاؤنا الموثوقون',
        'Our Trusted': 'شركاؤنا',
        'Partners': 'الشركاء',
        'Our Partners': 'شركاؤنا',
        'World-Class Brands': 'علامات عالمية المستوى',
        'Industry Solutions': 'حلول القطاعات',
        'Security Solutions': 'حلول أمنية',
        'Tailored security systems for every industry and environment': 'أنظمة أمنية مصممة لكل قطاع وبيئة',
        'Industry Sectors': 'قطاعات العمل',
        'Global Partners': 'شركاء عالميون',
        'Years Experience': 'سنوات خبرة',
        'World-Class Brands': 'علامات عالمية المستوى',
        'Security & Surveillance Partners': 'شركاء الأمن والمراقبة',
        'Industry-leading manufacturers for comprehensive security solutions': 'مصنعون رواد لحلول أمنية شاملة',
        'We collaborate with world-leading technology brands to deliver cutting-edge security and networking solutions': 'نتعاون مع علامات تقنية رائدة عالميا لتقديم حلول أمنية وشبكية متقدمة',
        'Specialties': 'التخصصات',
        'Published': 'منشور',
        'Online': 'نشط',
        'Page Speed': 'سرعة الصفحة',
        'SEO Score': 'تقييم SEO',
        'New website deployed to production': 'تم نشر موقع جديد على بيئة الإنتاج',
        'Just now': 'الآن',
        'SSL certificate renewed': 'تم تجديد شهادة SSL',
        '2m ago': 'منذ دقيقتين',
        'Speed': 'السرعة',
        'Server': 'الخادم',
        'Performance Score': 'مؤشر الأداء',
        'Home Page': 'الصفحة الرئيسية',
        'Deployed & Live': 'منشور ويعمل',
        'Mobile Version': 'نسخة الجوال',
        'Responsive': 'متجاوب',
        'Ultra-Fast Loading': 'تحميل فائق السرعة',
        'Mobile Responsive': 'متجاوب مع الجوال',
        'Secure by Default': 'آمن افتراضيا',
        'CDN Deployment': 'نشر عبر CDN',
        'Showroom': 'صالة عرض',
        'Projects Completed': 'مشاريع مكتملة',
        'Support Available': 'دعم متاح',
        'Custom Solutions': 'حلول مخصصة',
        'Comprehensive Security for Every Need': 'أمن شامل لكل الاحتياجات',
        'At Visionangles Security Systems, we understand that every industry has unique security challenges. Our team of experts designs and implements customized security solutions that address specific requirements, ensuring maximum protection and operational efficiency for your business.': 'في Visionangles Security Systems ندرك أن لكل قطاع تحديات أمنية فريدة. فريق خبرائنا يصمم وينفذ حلولا أمنية مخصصة تلبي المتطلبات الدقيقة وتضمن أعلى حماية وكفاءة تشغيلية لأعمالك.',
        'Industry Solutions': 'حلول القطاعات',
        'Specialized security systems designed for specific industry requirements': 'أنظمة أمنية متخصصة مصممة لمتطلبات كل قطاع',
        'How We Work': 'آلية العمل',
        'Our Approach': 'منهجيتنا',
        'A systematic process to deliver the perfect security solution': 'منهجية عملية لتقديم الحل الأمني الأمثل',
        'Commercial & Enterprise': 'التجاري والمؤسسي',
        'Comprehensive security solutions for corporate offices, business centers, and enterprise facilities. From access control to advanced surveillance, we protect your business assets and employees.': 'حلول أمنية شاملة للمكاتب والشركات ومرافق الأعمال. من التحكم بالدخول إلى المراقبة المتقدمة، نحمي أصول منشأتك وموظفيك.',
        'Multi-site surveillance management': 'إدارة المراقبة متعددة المواقع',
        'Biometric access control systems': 'أنظمة تحكم دخول حيوية',
        'Visitor management integration': 'تكامل إدارة الزوار',
        'Real-time monitoring dashboards': 'لوحات مراقبة لحظية',
        'Residential & Home': 'السكني والمنزلي',
        'Smart home security solutions that keep your family safe. Our residential systems combine convenience with cutting-edge protection for complete peace of mind.': 'حلول أمن منزلية ذكية تحافظ على سلامة عائلتك. تجمع أنظمتنا السكنية بين سهولة الاستخدام والحماية المتقدمة لراحة بال كاملة.',
        'Smart video doorbell systems': 'أنظمة جرس باب مرئي ذكية',
        '24/7 home monitoring': 'مراقبة منزلية 24/7',
        'Mobile app control': 'تحكم عبر تطبيق الجوال',
        'Wireless alarm systems': 'أنظمة إنذار لاسلكية',
        'Industrial & Manufacturing': 'الصناعي والتصنيعي',
        'Robust security systems built for demanding industrial environments. Our solutions withstand harsh conditions while providing comprehensive protection for facilities and assets.': 'أنظمة أمن قوية مصممة للبيئات الصناعية الصعبة. حلولنا تتحمل الظروف القاسية وتوفر حماية شاملة للمرافق والأصول.',
        'Explosion-proof cameras': 'كاميرات مقاومة للانفجار',
        'Perimeter intrusion detection': 'كشف التسلل إلى المحيط',
        'Thermal imaging monitoring': 'مراقبة بالتصوير الحراري',
        'Warehouse management integration': 'تكامل إدارة المستودعات',
        'Banking & Financial': 'البنوك والقطاع المالي',
        'High-security solutions designed for financial institutions. Our systems meet strict regulatory requirements while providing maximum protection for sensitive operations.': 'حلول عالية الأمان مصممة للمؤسسات المالية. أنظمتنا تلتزم بمتطلبات تنظيمية صارمة وتوفر أقصى حماية للعمليات الحساسة.',
        'ATM surveillance systems': 'أنظمة مراقبة أجهزة الصراف',
        'Vault protection monitoring': 'مراقبة حماية الخزائن',
        'Transaction verification': 'التحقق من المعاملات',
        'Compliance-ready recording': 'تسجيل متوافق مع الامتثال',
        'Retail & Commercial': 'التجزئة والتجاري',
        'Smart retail security that reduces shrinkage and enhances customer experience. Our solutions combine loss prevention with business intelligence analytics.': 'أمن ذكي لقطاع التجزئة يقلل الفاقد ويعزز تجربة العملاء. تجمع حلولنا بين منع الخسائر وتحليلات ذكاء الأعمال.',
        'People counting analytics': 'تحليلات عد الزوار',
        'POS integration surveillance': 'مراقبة متكاملة مع نقاط البيع',
        'Anti-theft detection systems': 'أنظمة كشف مكافحة السرقة',
        'Heat mapping analysis': 'تحليل الخرائط الحرارية',
        'Healthcare': 'الرعاية الصحية',
        'Security solutions that protect patients, staff, and sensitive medical data. Our healthcare systems ensure safety while maintaining patient privacy and compliance.': 'حلول أمنية تحمي المرضى والكوادر والبيانات الطبية الحساسة. أنظمتنا الصحية تضمن السلامة مع الحفاظ على خصوصية المرضى والامتثال.',
        'Patient wander management': 'إدارة تجول المرضى',
        'Pharmacy access control': 'تحكم دخول الصيدلية',
        'Emergency response integration': 'تكامل الاستجابة للطوارئ',
        'HIPAA-compliant systems': 'أنظمة متوافقة مع HIPAA',
        'Education & Campus': 'التعليم والحرم',
        'Safe learning environments with intelligent security systems. Our education solutions protect students and staff while enabling efficient campus management.': 'بيئات تعليمية آمنة عبر أنظمة أمن ذكية. تحمي حلولنا الطلاب والكوادر وتدعم إدارة فعالة للحرم التعليمي.',
        'Campus-wide surveillance': 'مراقبة شاملة للحرم',
        'Student ID access systems': 'أنظمة دخول ببطاقة الطالب',
        'Emergency lockdown capability': 'إمكانية الإغلاق الطارئ',
        'Attendance tracking': 'تتبع الحضور',
        'Government & Public Sector': 'الحكومة والقطاع العام',
        'High-security solutions for government facilities and public infrastructure. Our systems meet stringent security requirements for critical government operations.': 'حلول عالية الأمان للمنشآت الحكومية والبنية التحتية العامة. أنظمتنا تلبي متطلبات أمنية مشددة للعمليات الحكومية الحساسة.',
        'Critical infrastructure protection': 'حماية البنية التحتية الحيوية',
        'Border security systems': 'أنظمة أمن الحدود',
        'City-wide surveillance networks': 'شبكات مراقبة على مستوى المدينة',
        'Encrypted data transmission': 'نقل بيانات مشفر',
        'Consultation': 'الاستشارة',
        'Assessment': 'التقييم',
        'Design': 'التصميم',
        'Implementation': 'التنفيذ',
        'Training': 'التدريب',
        'Support': 'الدعم',
        'We begin by understanding your unique security requirements, challenges, and objectives through detailed consultation.': 'نبدأ بفهم متطلباتك الأمنية الخاصة وتحدياتك وأهدافك عبر استشارة تفصيلية.',
        'Our experts conduct a thorough site assessment to identify vulnerabilities and optimal placement for security systems.': 'يجري خبراؤنا تقييما شاملا للموقع لتحديد نقاط الضعف وأفضل أماكن تركيب الأنظمة الأمنية.',
        'We design a customized security solution that addresses all identified needs while staying within your budget.': 'نصمم حلا أمنيا مخصصا يغطي جميع الاحتياجات المحددة مع الالتزام بميزانيتك.',
        'Professional installation by certified technicians ensures your system is set up correctly and optimally.': 'التركيب الاحترافي بواسطة فنيين معتمدين يضمن إعداد النظام بشكل صحيح وبأفضل أداء.',
        'Comprehensive training for your team ensures they can operate and manage the security system effectively.': 'تدريب شامل لفريقك يضمن قدرتهم على تشغيل وإدارة النظام الأمني بكفاءة.',
        'Ongoing 24/7 technical support and maintenance ensures your security system continues to perform optimally.': 'الدعم الفني والصيانة المستمران 24/7 يضمنان استمرار أداء نظامك الأمني بأفضل كفاءة.',
        'Maintenance Services': 'خدمات الصيانة',
        'Annual Maintenance Contract (AMC)': 'عقد الصيانة السنوي (AMC)',
        'Keep your security systems running at peak performance with our comprehensive Annual Maintenance Contract. We provide proactive care and rapid response to ensure uninterrupted protection for your premises.': 'حافظ على أنظمتك الأمنية بأعلى أداء عبر عقد الصيانة السنوي الشامل. نقدم صيانة استباقية واستجابة سريعة لضمان حماية مستمرة لمنشأتك.',
        '24/7 Priority Support': 'دعم أولوية 24/7',
        'Round-the-clock technical support with priority response times for AMC customers. We\'re always here when you need us.': 'دعم فني على مدار الساعة مع أولوية في زمن الاستجابة لعملاء AMC. نحن دائما هنا عندما تحتاجنا.',
        'On-Site Repairs & Replacements': 'إصلاحات واستبدالات ميدانية',
        'Quick on-site repairs by certified technicians with access to genuine spare parts for seamless replacements.': 'إصلاحات ميدانية سريعة بواسطة فنيين معتمدين مع توفر قطع غيار أصلية لاستبدال سلس.',
        'Firmware & Software Updates': 'تحديثات البرامج الثابتة والبرمجيات',
        'Regular updates to keep your systems secure with the latest features, security patches, and performance improvements.': 'تحديثات منتظمة للحفاظ على أمان أنظمتك عبر أحدث الميزات وتصحيحات الأمان وتحسينات الأداء.',
        'Bi-Annual Technician Visits': 'زيارتان فنيتان سنويا',
        'Certified technicians visit twice per year to clean, inspect, and check all devices ensuring optimal performance.': 'يزورك فنيون معتمدون مرتين سنويا للتنظيف والفحص ومراجعة جميع الأجهزة لضمان الأداء الأمثل.',
        'Detailed Service Reports': 'تقارير خدمة تفصيلية',
        'Comprehensive documentation of all maintenance activities, system health reports, and recommendations for improvements.': 'توثيق شامل لجميع أنشطة الصيانة وتقارير حالة النظام والتوصيات التحسينية.',
        'Device Replacement Policy': 'سياسة استبدال الأجهزة',
        'Devices covered under AMC are replaced at no extra cost. For non-covered items, separate quotation will be provided.': 'يتم استبدال الأجهزة المشمولة في AMC دون تكلفة إضافية. أما العناصر غير المشمولة فيتم تقديم عرض سعر منفصل لها.',
        'Annual Maintenance Contract': 'عقد الصيانة السنوي',
        'Complete Protection': 'حماية شاملة',
        'Twice yearly technician visits': 'زيارتان فنيتان سنويا',
        'Device cleaning & inspection': 'تنظيف وفحص الأجهزة',
        'Business hours support': 'دعم خلال ساعات العمل',
        'Parts & labor service included': 'يشمل قطع الغيار وأجور العمل',
        'Device replacement (AMC covered)': 'استبدال الأجهزة (مشمول بعقد AMC)',
        'Separate quote for non-AMC items': 'عرض سعر منفصل للعناصر غير المشمولة',
        'Get Quote': 'اطلب عرض سعر',
        'Get a free consultation with our security experts and discover the perfect solution for your needs.': 'احصل على استشارة مجانية من خبرائنا الأمنيين واكتشف الحل الأنسب لاحتياجاتك.',
        'Websites That Grow Your Business': 'مواقع تنمّي أعمالك',
        'Full-Stack Web Development': 'تطوير ويب متكامل',
        'We design and build fast, secure, and scalable websites � from clean company profiles to powerful web applications. Fully hosted, SEO-ready, and tailored to your brand.': 'نصمم ونبني مواقع سريعة وآمنة وقابلة للتوسع من مواقع الشركات التعريفية حتى تطبيقات الويب المتقدمة. مع استضافة كاملة وتجهيز لمحركات البحث وتخصيص كامل لهوية علامتك.',
        'Get a Free Quote': 'احصل على عرض سعر مجاني',
        'Static': 'ثابتة',
        'Websites': 'مواقع',
        'Dynamic': 'ديناميكية',
        'Web Apps': 'تطبيقات ويب',
        'Hosting': 'استضافة',
        'Optimized': 'محسنة',
        'Everything You Need to Go Online': 'كل ما تحتاجه للانطلاق على الإنترنت',
        'From a simple company profile to a full web application � we design, build, host, and optimize your digital presence.': 'من موقع شركة بسيط إلى تطبيق ويب متكامل، نصمم ونطوّر ونستضيف ونحسن حضورك الرقمي بالكامل.',
        'Static Sites': 'مواقع ثابتة',
        'Static Websites': 'مواقع ثابتة',
        'Lightning-fast sites with zero server costs': 'مواقع فائقة السرعة مع تكاليف خوادم شبه معدومة',
        'Request a Quote': 'اطلب عرض سعر',
        'Perfect for company profiles, portfolios, landing pages, and blogs. Static websites load instantly, rank well on Google, and cost almost nothing to host � ideal for businesses that need a professional online presence without the complexity.': 'مثالية لمواقع الشركات التعريفية ومعارض الأعمال وصفحات الهبوط والمدونات. المواقع الثابتة تُحمَّل بسرعة كبيرة وتحقق ظهورا جيدا في Google وتكلفتها الاستضافية منخفضة جدا، وهي خيار مناسب للأعمال التي تحتاج حضورا احترافيا على الإنترنت بدون تعقيد.',
        'Expense Tracker': 'متتبع المصروفات',
        'Automate, approve, and analyze every expense': 'أتمت واعتمد وحلل كل مصروف',
        'Expense Overview': 'ملخص المصروفات',
        'April 2026': 'أبريل 2026',
        'Total Spent': 'إجمالي المصروفات',
        '? 8% vs last month': '↑ 8% مقارنة بالشهر الماضي',
        'Travel': 'السفر',
        'Operations': 'العمليات',
        'Software': 'البرمجيات',
        '? 3 pending approvals': '3 موافقات معلقة',
        'Review': 'مراجعة',
        'Take full control of company spending with intelligent expense tracking. Scan receipts, set approval workflows, auto-categorize expenses, and generate instant financial reports for smarter business decisions.': 'تحكم بالكامل في مصروفات الشركة عبر تتبع ذكي للمصاريف. امسح الإيصالات، واضبط مسارات الموافقة، وصنّف المصروفات تلقائيا، وأنشئ تقارير مالية فورية لاتخاذ قرارات أعمال أذكى.',
        'Auto-categorization': 'تصنيف تلقائي',
        'Receipt Scanning': 'مسح الإيصالات',
        'Approval Workflows': 'مسارات الموافقة',
        'Financial Reporting': 'التقارير المالية',
        'Get Started': 'ابدأ الآن',
        'Inventory Control': 'التحكم في المخزون',
        '? 2 low stock alerts': 'تنبيهان لمخزون منخفض',
        'Total SKUs': 'إجمالي الأصناف',
        'Low Stock': 'مخزون منخفض',
        'Locations': 'المواقع',
        'IP Camera 4K': 'كاميرا IP بدقة 4K',
        'Access Cards': 'بطاقات دخول',
        'Network Switch': 'مبدل شبكي',
        'Popular': 'الأكثر طلبا',
        'Stock Management': 'إدارة المخزون',
        'Real-time inventory control across all locations': 'تحكم لحظي في المخزون عبر جميع الفروع',
        'Gain complete visibility over your inventory with smart real-time tracking, automated low-stock alerts, and multi-location support. Eliminate costly stockouts and reduce overstock waste.': 'احصل على رؤية كاملة لمخزونك عبر تتبع ذكي لحظي وتنبيهات تلقائية للمخزون المنخفض ودعم تعدد المواقع. تجنب نفاد المخزون المكلف وقلل الهدر الناتج عن زيادة التخزين.',
        'Low Stock Alerts': 'تنبيهات المخزون المنخفض',
        'Multi-location Support': 'دعم تعدد المواقع',
        'Barcode Integration': 'تكامل الباركود',
        'Analytics & Reports': 'التحليلات والتقارير',
        'Google Search Console': 'Google Search Console',
        'Coverage': 'التغطية',
        'Keywords': 'الكلمات المفتاحية',
        'Total Clicks': 'إجمالي النقرات',
        'Impressions': 'مرات الظهور',
        'Avg Position': 'متوسط الترتيب',
        'Pages Indexed': 'الصفحات المفهرسة',
        'Top Keyword': 'أهم كلمة مفتاحية',
        'Core Web Vitals': 'مؤشرات Core Web Vitals',
        'Passed': 'ناجح',
        'On-Page': 'داخل الصفحة',
        'Technical': 'تقني',
        'Local SEO': 'SEO محلي',
        'SEO & Google Visibility': 'السيو والظهور في Google',
        'Get found on Google - and stay there': 'الظهور في Google والبقاء في النتائج الأولى',
        'We set up Google Search Console, optimize every page for search engines, fix technical issues, and improve your ranking with on-page SEO best practices. Your website will load fast, index correctly, and appear for the right keywords.': 'نقوم بإعداد Google Search Console وتحسين كل صفحة لمحركات البحث ومعالجة المشكلات التقنية ورفع ترتيبك عبر أفضل ممارسات SEO داخل الصفحة. سيعمل موقعك بسرعة، ويُفهرس بشكل صحيح، ويظهر للكلمات المفتاحية المناسبة.',
        'Keyword Optimization': 'تحسين الكلمات المفتاحية',
        'Page Speed (Core Web Vitals)': 'سرعة الصفحة (Core Web Vitals)',
        'Local SEO & Maps': 'SEO محلي والخرائط',
        'Improve My Ranking': 'حسّن ترتيبي',
        'Custom Web Application': 'تطبيق ويب مخصص',
        'In Development': 'قيد التطوير',
        'Frontend': 'الواجهة الأمامية',
        'Backend': 'الخلفية',
        'Database': 'قاعدة البيانات',
        'Bespoke': 'حسب الطلب',
        'Customized Dynamic Websites': 'مواقع ديناميكية مخصصة',
        'Fully tailored web applications built around your exact workflow': 'تطبيقات ويب مفصّلة بالكامل وفق سير العمل الخاص بك',
        'Not every business fits a template. We design and develop fully custom dynamic websites from the ground up � with your own branding, features, user flows, and admin panel. Whether you need a booking platform, a customer portal, or a management system, we build it exactly the way you need it.': 'ليس كل نشاط يناسب القوالب الجاهزة. نصمم ونطوّر مواقع ديناميكية مخصصة بالكامل من الصفر مع هوية علامتك وميزاتك وتدفقات المستخدم ولوحة الإدارة الخاصة بك. سواء كنت تحتاج منصة حجز أو بوابة عملاء أو نظام إدارة، نبنيه بالطريقة التي تحتاجها تماما.',
        'Custom User Roles & Login': 'صلاحيات مستخدمين وتسجيل دخول مخصص',
        'Tailored Admin Dashboard': 'لوحة إدارة مخصصة',
        'Custom Database Design': 'تصميم قاعدة بيانات مخصص',
        'API & Third-Party Integration': 'تكامل API والطرف الثالث',
        'Mobile-Responsive UI': 'واجهة متجاوبة مع الجوال',
        'Secure & Scalable Architecture': 'بنية آمنة وقابلة للتوسع',
        'Start Your Project': 'ابدأ مشروعك',
        'Your Website Live in 3 Simple Steps': 'موقعك جاهز للنشر في 3 خطوات بسيطة',
        'Built for Your Business � Not a Template': 'مصمم لأعمالك وليس قالبا جاهزا',
        'Built for Your Business - Not a Template': 'مصمم لأعمالك وليس قالبا جاهزا',
        'Let\'s Build Your Website': 'لنبدأ بناء موقعك',
        'No technical headaches. We handle everything from design to deployment.': 'بدون تعقيد تقني. نحن نتولى كل شيء من التصميم إلى النشر.',
        'Discover & Plan': 'الاكتشاف والتخطيط',
        'We discuss your goals, audience, and content. You tell us your vision � we map out the right solution.': 'نناقش أهدافك وجمهورك ومحتواك. أنت تشرح رؤيتك ونحن نرسم الحل المناسب.',
        'Design & Build': 'التصميم والبناء',
        'We design your site, write the code, and set up your hosting, domain, SSL, and email accounts.': 'نصمم موقعك ونكتب الكود ونجهز الاستضافة والدومين وSSL وحسابات البريد.',
        'Launch & Optimize': 'الإطلاق والتحسين',
        'We go live, submit to Google Search Console, and optimize for performance and search rankings.': 'نطلق الموقع، ونرسله إلى Google Search Console، ونحسن الأداء وترتيب نتائج البحث.',
        'Built for Your Business � Not a Template': 'مبني لأعمالك وليس قالبا جاهزا',
        "Every website we build is custom-crafted to your brand. We don't use cheap page builders � we write real code that performs, ranks, and lasts.": 'كل موقع نبنيه يتم تصميمه خصيصا لعلامتك. لا نستخدم أدوات صفحات رخيصة، بل نكتب كودا حقيقيا سريع الأداء وقابلا للنمو وطويل العمر.',
        'Talk to an Expert': 'تحدث مع خبير',
        'We optimize every page for speed � fast websites rank higher and convert better.': 'نحسن كل صفحة للسرعة لأن المواقع السريعة تحقق ترتيبا أعلى ومعدلات تحويل أفضل.',
        'All our sites are fully responsive and look great on any screen size.': 'كل مواقعنا متجاوبة بالكامل وتظهر بشكل ممتاز على جميع أحجام الشاشات.',
        'Proper meta tags, structured data, sitemaps, and Google Search Console setup included.': 'يشمل التنفيذ إعداد وسوم Meta بشكل صحيح والبيانات المنظمة وخرائط الموقع وربط Google Search Console.',
        'VPS servers, SSL certificates, and business email configured and maintained for you.': 'نوفر خوادم VPS وشهادات SSL وبريد أعمال مع إعداد وصيانة كاملة.',
        'Saudi-based team available for support, updates, and ongoing improvements.': 'فريق محلي داخل السعودية متاح للدعم والتحديثات والتحسين المستمر.',
        'Google Analytics and Search Console reports so you can track traffic and growth.': 'تقارير Google Analytics وSearch Console لتتبع الزيارات والنمو.',
        "Let's Build Your Website": 'لنبدأ بناء موقعك',
        'Leading provider of advanced security solutions, offering cutting-edge surveillance systems and smart security technology for businesses and homes across Saudi Arabia.': 'مزود رائد لحلول أمنية متقدمة، يقدم أنظمة مراقبة حديثة وتقنيات أمن ذكية للشركات والمنازل في جميع أنحاء السعودية.',
        'Software Solutions': 'حلول البرمجيات',
        'Last reviewed: May 2026': 'آخر مراجعة: مايو 2026',
        'Security guidance and product recommendations are subject to site survey, compliance review, and final engineering approval.': 'إرشادات الأمن وتوصيات المنتجات تخضع لمعاينة الموقع ومراجعة الامتثال والموافقة الهندسية النهائية.',
        'Live': 'يعمل',
        'OK': 'موافق',
        'SEO Built-In from Day One': 'تهيئة SEO من اليوم الأول',
        'Mobile-First Design': 'تصميم يبدأ من الجوال',
        'Fast & Performant': 'سريع وعالي الأداء',
        'Secure & Reliable Hosting': 'استضافة آمنة وموثوقة',
        'Local Expert Support': 'دعم محلي من خبراء',
        'Measurable Results': 'نتائج قابلة للقياس',
        'Ready to go online?': 'جاهز للانطلاق على الإنترنت؟',
        "Let's Build Your Website": 'لنبدأ بناء موقعك',
        "Tell us what you need - static site, web app, hosting, or SEO. We'll give you a free quote and get started fast.": 'أخبرنا بما تحتاجه: موقع ثابت، تطبيق ويب، استضافة أو SEO، وسنقدم لك عرضا مجانيا ونبدأ بسرعة.',
        'Call Us Now': 'اتصل بنا الآن',
        'Our Solutions': 'حلولنا',
        'Our Story': 'قصتنا',
        'About Visionangles Security Systems': 'عن Visionangles Security Systems',
        'Serving businesses and homes nationwide � Eastern Province, Riyadh & Jeddah': 'نخدم الشركات والمنازل في جميع أنحاء المملكة من المنطقة الشرقية إلى الرياض وجدة',
        'Years of Experience': 'سنوات خبرة',
        'Projects Delivered': 'مشاريع منفذة',
        'Global Brand Partners': 'شركاء علامات عالمية',
        'Locations in KSA': 'مواقع داخل السعودية',
        'Product Categories': 'فئات المنتجات',
        'Our Mission': 'رسالتنا',
        'Our Vision': 'رؤيتنا',
        'Surveillance & Security': 'المراقبة والأمن',
        'Network & Cybersecurity': 'الشبكات والأمن السيبراني',
        'Access Control & Gates': 'التحكم بالدخول والبوابات',
        'Web & Software Development': 'تطوير الويب والبرمجيات',
        'Displays & Audio': 'الشاشات والصوت',
        'Parking Management': 'إدارة المواقف',
        'Why Choose Visionangles?': 'لماذا تختار Visionangles؟',
        'Authorized Partner': 'شريك معتمد',
        'National Presence': 'انتشار على مستوى المملكة',
        'End-to-End Service': 'خدمة متكاملة من البداية للنهاية',
        'One-Stop Solutions': 'حلول شاملة من جهة واحدة',
        'Our Locations': 'مواقعنا',
        'Head Office � Al Khobar': 'المكتب الرئيسي - الخبر',
        'Showroom � Al Khobar': 'صالة العرض - الخبر',
        'Showroom � Al Jubail': 'صالة العرض - الجبيل',
        'Riyadh � CRO': 'الرياض - المنطقة الوسطى',
        'Jeddah � WRO': 'جدة - المنطقة الغربية',
        'Ready to Secure Your Business?': 'هل أنت جاهز لتأمين أعمالك؟',
        'Visit one of our showrooms in Al Khobar or Al Jubail, or get in touch with our security experts for a free consultation and custom quote.': 'زر إحدى صالات العرض في الخبر أو الجبيل، أو تواصل مع خبرائنا للحصول على استشارة مجانية وعرض سعر مخصص.',
        'Visionangles Security Systems is a leading provider of comprehensive security and technology solutions across Saudi Arabia. We specialize in delivering cutting-edge surveillance, access control, networking, audio, LED displays, and smart security systems to businesses and homes throughout the Kingdom.': 'Visionangles Security Systems مزود رائد لحلول الأمن والتقنية الشاملة في المملكة العربية السعودية. نتخصص في تقديم حلول متقدمة للمراقبة والتحكم بالدخول والشبكات والصوت وشاشات LED وأنظمة الأمن الذكية للشركات والمنازل في جميع أنحاء المملكة.',
        'With our Head Office in Al Khobar, showrooms in Al Khobar and Al Jubail, and dedicated team representatives in Riyadh (Central Region) and Jeddah (Western Region), we serve clients from the Eastern Province to the heart of Riyadh and the Red Sea coast � backed by certified expertise and an unwavering commitment to excellence.': 'من مكتبنا الرئيسي في الخبر وصالات العرض في الخبر والجبيل، ومع ممثلينا في الرياض (المنطقة الوسطى) وجدة (المنطقة الغربية)، نخدم العملاء من المنطقة الشرقية إلى قلب الرياض وساحل البحر الأحمر، مدعومين بخبرة معتمدة والتزام ثابت بالتميز.',
        'Beyond hardware, we offer SaaS software solutions � including cloud attendance systems, expense trackers, and stock management platforms � as well as fully custom web development services to help businesses grow in the digital era.': 'إلى جانب الأجهزة، نقدم حلولا برمجية بنظام SaaS تشمل أنظمة حضور سحابية ومتتبعات مصروفات ومنصات إدارة مخزون، إضافة إلى خدمات تطوير ويب مخصصة بالكامل لمساعدة الأعمال على النمو في العصر الرقمي.',
        'To protect businesses and homes across the Eastern Province with reliable, innovative, and intelligently integrated security solutions � backed by certified expertise, world-class brand partnerships, and dedicated local support.': 'حماية الشركات والمنازل في المنطقة الشرقية عبر حلول أمنية موثوقة ومبتكرة ومتكاملة بذكاء، مدعومة بخبرة معتمدة وشراكات مع علامات عالمية ودعم محلي مخصص.',
        'To be the most trusted technology and security solutions company in Saudi Arabia � continuously expanding our capabilities across security, networking, software, and digital transformation to serve every client need under one roof.': 'أن نكون شركة حلول التقنية والأمن الأكثر موثوقية في المملكة، مع توسيع قدراتنا باستمرار في الأمن والشبكات والبرمجيات والتحول الرقمي لخدمة كل احتياج للعميل من جهة واحدة.',
        'IP cameras, NVR systems, thermal imaging, burglar alarms, and video intercom � powered by Hikvision, Dahua, EZVIZ, and more.': 'كاميرات IP وأنظمة NVR وتصوير حراري وإنذارات سرقة وإنتركم مرئي، مدعومة من Hikvision وDahua وEZVIZ وغيرها.',
        'Enterprise networking infrastructure, firewalls, and cybersecurity appliances from Cisco, Fortinet, Sophos, WatchGuard, Ruijie, D-Link, and TP-Link.': 'بنية تحتية للشبكات المؤسسية وجدران نارية وأجهزة أمن سيبراني من Cisco وFortinet وSophos وWatchGuard وRuijie وD-Link وTP-Link.',
        'Biometric readers, card-based access control, speed gates, and turnstile systems from ZKTeco and Hikvision to manage and secure every entry point.': 'قارئات حيوية وأنظمة تحكم دخول بالبطاقات وبوابات سرعة ودوارات من ZKTeco وHikvision لإدارة وتأمين كل نقطة دخول.',
        'Custom web applications, SaaS platforms (attendance, expenses, stock), and static & dynamic sites with VPS hosting and SEO — full-stack digital solutions for modern businesses.': 'تطبيقات ويب مخصصة ومنصات SaaS للحضور والمصروفات والمخزون، ومواقع ثابتة وديناميكية مع استضافة VPS وتهيئة SEO، حلول رقمية متكاملة للأعمال الحديثة.',
        'LED display solutions from Hikvision & Lampro, interactive flat panel displays, and professional audio systems from Ahuja, Bosch, Bose, and Shure.': 'حلول شاشات LED من Hikvision وLampro، وشاشات تفاعلية مسطحة، وأنظمة صوت احترافية من Ahuja وBosch وBose وShure.',
        'Intelligent parking management and barrier gate systems to streamline vehicle access, monitoring, and revenue control for commercial and residential facilities.': 'أنظمة ذكية لإدارة المواقف وحواجز المركبات لتنظيم دخول السيارات والمراقبة والتحكم بالإيرادات للمنشآت التجارية والسكنية.',
        '100% authorized dealer for 10+ world-leading brands including Hikvision, Dahua, ZKTeco, Cisco, Fortinet, Sophos, Grandstream, and more.': 'موزع معتمد 100% لأكثر من 10 علامات عالمية رائدة تشمل Hikvision وDahua وZKTeco وCisco وFortinet وSophos وGrandstream وغيرها.',
        'Head Office & showrooms in the Eastern Province (Al Khobar, Al Jubail), plus team representatives in Riyadh (CRO) and Jeddah (WRO) — covering the entire Kingdom.': 'مكتب رئيسي وصالات عرض في المنطقة الشرقية (الخبر والجبيل)، إضافة إلى ممثلي فريق في الرياض (CRO) وجدة (WRO)، لتغطية المملكة بالكامل.',
        'From consultation and system design to supply, installation, commissioning, and ongoing maintenance � we handle every step of your project.': 'من الاستشارة وتصميم النظام إلى التوريد والتركيب والتشغيل والصيانة المستمرة، نتولى كل خطوة في مشروعك.',
        'Security hardware, network infrastructure, and web development � all under one roof, eliminating the need for multiple vendors.': 'أجهزة أمنية وبنية تحتية للشبكات وتطوير ويب تحت سقف واحد، مما يلغي الحاجة إلى التعامل مع عدة موردين.',
        'Eastern Province, Kingdom of Saudi Arabia': 'المنطقة الشرقية، المملكة العربية السعودية',
        'Commercial Showroom, Eastern Province, KSA': 'صالة عرض تجارية، المنطقة الشرقية، السعودية',
        'Central Region Team': 'فريق المنطقة الوسطى',
        'Riyadh, Kingdom of Saudi Arabia': 'الرياض، المملكة العربية السعودية',
        'Western Region Team': 'فريق المنطقة الغربية',
        'Jeddah, Kingdom of Saudi Arabia': 'جدة، المملكة العربية السعودية',
        '?? +966 138226660': 'الهاتف: +966 138226660',
        '?? +966 54 165 2927': 'الهاتف: +966 54 165 2927',
        '?? +966 56 683 5669': 'الهاتف: +966 56 683 5669',
        '? info@visionangles.com': 'البريد: info@visionangles.com',
        '? sales@visionangles.com': 'البريد: sales@visionangles.com',
        '?? Sun � Thu: 9AM � 6PM': 'الأحد - الخميس: 9 صباحا - 6 مساء',
        '?? Sat � Thu: 8AM � 9PM': 'السبت - الخميس: 8 صباحا - 9 مساء',
        '?? Sat � Thu: 9AM � 9PM': 'السبت - الخميس: 9 صباحا - 9 مساء',
        'Contact Information': 'معلومات التواصل',
        'Send Us a Message': 'أرسل لنا رسالة',
        "Fill out the form below and our expert team will get back to you within 24 business hours. Whether you need a free site survey, product information, pricing details, or technical support, we're here to assist with your security and ELV requirements.": 'املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة عمل. سواء كنت تحتاج معاينة موقع مجانية أو معلومات منتجات أو تفاصيل الأسعار أو دعما فنيا، نحن هنا لمساعدتك.',
        'Full Name': 'الاسم الكامل',
        'Enter your name': 'أدخل اسمك',
        'Email Address': 'البريد الإلكتروني',
        'Enter your email': 'أدخل بريدك الإلكتروني',
        'Phone Number': 'رقم الهاتف',
        'Enter your phone number': 'أدخل رقم هاتفك',
        'Subject': 'الموضوع',
        'Select a subject': 'اختر موضوعا',
        'General Inquiry': 'استفسار عام',
        'Sales & Pricing': 'المبيعات والأسعار',
        'Technical Support': 'الدعم الفني',
        'Partnership': 'شراكة',
        'Other': 'أخرى',
        'Select Branch': 'اختر الفرع',
        'Select a branch': 'اختر فرعا',
        'Al Khobar Showroom': 'صالة عرض الخبر',
        'Al Jubail Showroom': 'صالة عرض الجبيل',
        'Message': 'الرسالة',
        'Write your message here...': 'اكتب رسالتك هنا...',
        'Send Message': 'إرسال الرسالة',
        'Al Khobar Office': 'مكتب الخبر',
        'Sun - Thu: 8AM - 6PM': 'الأحد - الخميس: 8 صباحا - 6 مساء',
        'Sat - Thu: 8AM - 9PM': 'السبت - الخميس: 8 صباحا - 9 مساء',
        'Get Directions': 'احصل على الاتجاهات',
        "We're here to help with all your security needs. Visionangles Security is ready to provide expert guidance, free site surveys, customized quotations, and comprehensive support for CCTV systems, access control, video intercoms, alarm systems, networking solutions, and ELV services across Saudi Arabia.": 'نحن هنا لمساعدتك في جميع احتياجاتك الأمنية. فريق Visionangles جاهز لتقديم استشارات خبراء ومعاينات مجانية وعروض أسعار مخصصة ودعم شامل لأنظمة المراقبة والتحكم بالدخول والإنتركم والإنذار والشبكات وحلول ELV في جميع أنحاء السعودية.',
        'World\'s #1 Video Surveillance Brand': 'العلامة رقم 1 عالميا في المراقبة بالفيديو',
        'Global Smart IoT Solution Provider': 'مزود عالمي لحلول إنترنت الأشياء الذكية',
        'World Leader in Biometric Security': 'رائد عالمي في الأمن الحيوي',
        'Smart Home Security Made Simple': 'أمن المنزل الذكي ببساطة',
        'Network & Cybersecurity': 'الشبكات والأمن السيبراني',
        'Communication & Display': 'الاتصالات والشاشات',
        'Cybersecurity Partner': 'شريك أمن سيبراني',
        'Network Partner': 'شريك شبكات',
        'Communication Partner': 'شريك اتصالات',
        'Display Partner': 'شريك شاشات',
        'Next-Generation Cybersecurity Leader': 'رائد الأمن السيبراني من الجيل الجديد',
        'Enterprise-Grade Security Fabric': 'منظومة أمنية بمستوى المؤسسات',
        'Unified Security Platform': 'منصة أمن موحدة',
        'The Worldwide Leader in Networking': 'الرائد العالمي في الشبكات',
        'Unified Communication Solutions': 'حلول اتصالات موحدة',
        'Professional LED Display Solutions': 'حلول شاشات LED احترافية',
        'Hikvision is the world\'s largest supplier of video surveillance products and solutions. With advanced AI-powered analytics, thermal imaging, and innovative security technologies, Hikvision provides comprehensive protection for businesses and homes worldwide.': 'Hikvision هي أكبر مزود عالمي لمنتجات وحلول المراقبة بالفيديو. بفضل تحليلات الذكاء الاصطناعي المتقدمة والتصوير الحراري وتقنيات الأمن المبتكرة، توفر Hikvision حماية شاملة للشركات والمنازل حول العالم.',
        'Dahua Technology is a world-leading video-centric smart IoT solution and service provider. With advanced R&D capabilities, Dahua delivers cutting-edge surveillance, traffic management, and smart building solutions to customers worldwide.': 'Dahua Technology مزود عالمي رائد لحلول وخدمات إنترنت الأشياء الذكية المعتمدة على الفيديو. بقدرات بحث وتطوير متقدمة، تقدم Dahua حلولا متطورة للمراقبة وإدارة المرور والمباني الذكية للعملاء حول العالم.',
        'ZKTeco is a globally renowned provider of biometric verification and security solutions. Specializing in fingerprint, facial recognition, and iris recognition technologies, ZKTeco delivers innovative time attendance and access control systems.': 'ZKTeco مزود عالمي معروف لحلول التحقق الحيوي والأمن. تتخصص في تقنيات البصمة والتعرف على الوجه وقزحية العين، وتقدم أنظمة مبتكرة للحضور والانصراف والتحكم بالدخول.',
        'EZVIZ is a global smart home security brand creating easy-to-use security cameras, alarm systems, and smart home devices. With cloud-based solutions and intuitive mobile apps, EZVIZ makes home security accessible to everyone.': 'EZVIZ علامة عالمية لأمن المنزل الذكي تقدم كاميرات أمنية وأنظمة إنذار وأجهزة منزلية ذكية سهلة الاستخدام. عبر حلول سحابية وتطبيقات جوال بسيطة، تجعل EZVIZ أمن المنزل متاحا للجميع.',
        'Sophos is a global leader in next-generation cybersecurity, protecting businesses worldwide with advanced AI-driven threat detection, endpoint protection, and managed detection and response services.': 'Sophos رائدة عالميا في الأمن السيبراني من الجيل الجديد، وتحمي الشركات حول العالم عبر كشف تهديدات متقدم بالذكاء الاصطناعي وحماية نقاط النهاية وخدمات الكشف والاستجابة المدارة.',
        'Fortinet delivers broad, integrated, and automated cybersecurity solutions. With industry-leading FortiGate firewalls and the Security Fabric architecture, Fortinet provides comprehensive protection across the entire digital attack surface.': 'تقدم Fortinet حلولا واسعة ومتكاملة وآلية للأمن السيبراني. ومن خلال جدران FortiGate النارية الرائدة ومنظومة Security Fabric، توفر Fortinet حماية شاملة عبر كامل سطح الهجوم الرقمي.',
        'WatchGuard Technologies provides unified security solutions that are easy to deploy and manage. With award-winning network security appliances, advanced threat detection, and multi-factor authentication, WatchGuard protects businesses of all sizes.': 'توفر WatchGuard Technologies حلولا أمنية موحدة سهلة النشر والإدارة. ومن خلال أجهزة أمن شبكي حائزة على جوائز وكشف تهديدات متقدم ومصادقة متعددة العوامل، تحمي WatchGuard الشركات بجميع أحجامها.',
        'Cisco is the worldwide technology leader that has been making the Internet work since 1984. With industry-leading networking, security, and collaboration solutions, Cisco powers the infrastructure that connects the world.': 'Cisco هي الرائدة عالميا في التقنية وتساهم في تشغيل الإنترنت منذ عام 1984. وبحلولها الرائدة في الشبكات والأمن والتعاون، تشغل Cisco البنية التحتية التي تربط العالم.',
        'Grandstream Networks is a leading manufacturer of IP voice/video telephony and surveillance solutions. Their award-winning products deliver powerful, free, and flexible unified communication solutions for businesses worldwide.': 'Grandstream Networks شركة رائدة في تصنيع حلول الاتصالات الصوتية والمرئية عبر IP وحلول المراقبة. تقدم منتجاتها الحائزة على جوائز حلولا قوية ومرنة للاتصالات الموحدة للشركات حول العالم.',
        'Lampro is a leading manufacturer of high-quality LED displays and digital signage solutions. With cutting-edge technology and reliable performance, Lampro delivers stunning visual experiences for retail, corporate, and entertainment applications.': 'Lampro شركة رائدة في تصنيع شاشات LED عالية الجودة وحلول اللوحات الرقمية. بفضل التقنية المتطورة والأداء الموثوق، تقدم Lampro تجارب بصرية مميزة لتطبيقات التجزئة والشركات والترفيه.',
        'AI-Powered Analytics': 'تحليلات مدعومة بالذكاء الاصطناعي',
        '4K Ultra HD': 'دقة 4K فائقة الوضوح',
        'ColorVu Technology': 'تقنية ColorVu',
        'AcuSense Detection': 'كشف AcuSense',
        'WizSense AI': 'ذكاء WizSense',
        'Full-Color Night Vision': 'رؤية ليلية بالألوان الكاملة',
        'TiOC Technology': 'تقنية TiOC',
        'Smart H.265+': 'ترميز Smart H.265+',
        'Alarm Systems': 'أنظمة الإنذار',
        'Smart IoT': 'إنترنت الأشياء الذكي',
        'Facial Recognition': 'التعرف على الوجه',
        'Fingerprint Scanner': 'ماسح بصمة',
        'Palm Recognition': 'التعرف على راحة اليد',
        'Multi-Modal Biometrics': 'قياسات حيوية متعددة الأنماط',
        'Cloud Storage': 'تخزين سحابي',
        '2K/4K Resolution': 'دقة 2K/4K',
        'AI Human Detection': 'كشف الأشخاص بالذكاء الاصطناعي',
        'Two-Way Audio': 'صوت ثنائي الاتجاه',
        'XDR Platform': 'منصة XDR',
        'AI Threat Detection': 'كشف التهديدات بالذكاء الاصطناعي',
        'Zero Trust Network': 'شبكة الثقة الصفرية',
        '24/7 MDR Service': 'خدمة MDR على مدار الساعة',
        'FortiGate NGFW': 'جدار FortiGate NGFW',
        'Security Fabric': 'منظومة Security Fabric',
        'FortiGuard AI': 'FortiGuard AI',
        'SD-WAN': 'SD-WAN',
        'Firebox Appliances': 'أجهزة Firebox',
        'AuthPoint MFA': 'مصادقة AuthPoint MFA',
        'WatchGuard Cloud': 'سحابة WatchGuard',
        'ThreatSync XDR': 'ThreatSync XDR',
        'Meraki Cloud': 'سحابة Meraki',
        'DNA Center': 'مركز DNA',
        'Webex Solutions': 'حلول Webex',
        'SecureX Platform': 'منصة SecureX',
        'IP PBX Systems': 'أنظمة IP PBX',
        'Video Conferencing': 'مؤتمرات الفيديو',
        'WiFi Solutions': 'حلول WiFi',
        'Indoor LED Displays': 'شاشات LED داخلية',
        'Outdoor LED Screens': 'شاشات LED خارجية',
        'COB Technology': 'تقنية COB',
        'Fine Pixel Pitch': 'درجة بكسل دقيقة',
        'IP Cameras': 'كاميرات IP',
        'Time Attendance': 'الحضور والانصراف',
        'Turnstiles': 'الدوارات',
        'Hotel Locks': 'أقفال الفنادق',
        'WiFi Cameras': 'كاميرات WiFi',
        'Video Doorbells': 'أجراس باب مرئية',
        'Smart Locks': 'أقفال ذكية',
        'Battery Cameras': 'كاميرات ببطارية',
        'Pan/Tilt Cameras': 'كاميرات دوران وإمالة',
        'Firewall': 'جدار ناري',
        'Endpoint Protection': 'حماية نقاط النهاية',
        'Email Security': 'أمن البريد الإلكتروني',
        'Cloud Security': 'أمن سحابي',
        'Next-Gen Firewall': 'جدار ناري من الجيل الجديد',
        'Secure SD-WAN': 'SD-WAN آمن',
        'SASE': 'SASE',
        'Zero Trust': 'الثقة الصفرية',
        'SOAR': 'SOAR',
        'UTM Firewall': 'جدار UTM ناري',
        'MFA': 'مصادقة متعددة العوامل',
        'Secure WiFi': 'WiFi آمن',
        'Endpoint Security': 'أمن نقاط النهاية',
        'VPN': 'VPN',
        'Switches': 'مبدلات',
        'Routers': 'موجهات',
        'Collaboration': 'التعاون',
        'VoIP Phones': 'هواتف VoIP',
        'ATA Adapters': 'محولات ATA',
        'LED Video Walls': 'جدران فيديو LED',
        'Digital Signage': 'لوحات رقمية',
        'Rental LED': 'LED للتأجير',
        'Floor LED': 'LED أرضي',
        'Transparent LED': 'LED شفاف',
        'Become a Partner or Get Solutions': 'كن شريكا أو احصل على حلول',
        'Interested in partnering with us or need security solutions from our trusted brands? Contact our team for consultation.': 'هل ترغب في الشراكة معنا أو تحتاج حلولا أمنية من علاماتنا الموثوقة؟ تواصل مع فريقنا للحصول على استشارة.',
        'Prepared by Visionangles Security Est. technical sales and ELV integration team.': 'إعداد فريق المبيعات الفنية وتكامل أنظمة ELV في Visionangles Security Est.',
        'Our Partners': 'شركاؤنا',
        'Trusted': 'علامات',
        'Brands': 'موثوقة',
        'We Work With': 'نعمل معها',
        'Trusted Brands We Work With': 'علامات موثوقة نعمل معها',
        'What We Offer': 'ما نقدمه',
        'Our Services': 'خدماتنا',
        'Our': '',
        'Our Expertise': 'خبراتنا',
        'Our IP Phone Services': 'خدمات هواتف IP',
        'Services': 'الخدمات',
        'Complete Product Range': 'مجموعة منتجات كاملة',
        'Products by Brand': 'المنتجات حسب العلامة التجارية',
        'by Brand': 'حسب العلامة التجارية',
        'Why Us': 'لماذا نحن',
        'Why Choose Us': 'لماذا تختارنا',
        'Why Choose': 'لماذا تختار',
        'Visionangles': 'فيجن أنجلز',
        'Expert Team': 'فريق خبير',
        '24/7 Support': 'دعم 24/7',
        'Best Prices': 'أفضل الأسعار',
        'Quick Delivery': 'تسليم سريع',
        'Get a Quote': 'اطلب عرض سعر',
        'Call Us Now': 'اتصل بنا الآن',
        'Contact Us': 'تواصل معنا',
        'Quick Links': 'روابط سريعة',
        'About Us': 'من نحن',
        'Our Branches': 'فروعنا',
        'Our Products': 'منتجاتنا',
        'Head Office': 'المكتب الرئيسي',
        'Al Khobar, Saudi Arabia': 'الخبر، السعودية',
        'Phone': 'الهاتف',
        'Email': 'البريد الإلكتروني',
        'Working Hours': 'ساعات العمل',
        'Sat - Thu: 8AM - 6PM': 'السبت - الخميس: 8 صباحا - 6 مساء',
        'Privacy Policy': 'سياسة الخصوصية',
        'Terms of Service': 'شروط الخدمة',
        'Editorial Policy': 'السياسة التحريرية',
        'Vision Angles Security': 'فيجن أنجلز سيكيوريتي',
        'Securing Tomorrow, Protecting Today': 'نؤمن الغد ونحمي اليوم',
        'A trusted name for smart safety gear in Saudi Arabia. We supply modern cameras, alarms, smart locks, and audio tools for homes and businesses. Our team plans, installs, and cares for every setup with you in mind.': 'اسم موثوق في حلول السلامة الذكية في السعودية. نوفر كاميرات حديثة وإنذارات وأقفالا ذكية وأدوات صوتية للمنازل والأعمال، مع تخطيط وتركيب ورعاية لكل مشروع.',
        'Advanced video intercoms with smartphone access and integrated door locks. Dahua professional systems for apartment buildings, offices, and commercial facilities. Cloud-enabled remote communication with visitor verification and door unlock capabilities installed nationwide.': 'أنظمة إنتركم مرئي متقدمة مع وصول عبر الهاتف الذكي وأقفال أبواب مدمجة. أنظمة Dahua احترافية للمباني السكنية والمكاتب والمنشآت التجارية، مع اتصال سحابي عن بعد للتحقق من الزوار وفتح الأبواب في جميع أنحاء المملكة.',
        'Video intercom systems provide secure visitor screening with high-definition video and audio communication. Our range includes residential apartment systems, commercial office intercoms, and industrial emergency stations. Features include remote door release integration, call recording, mobile app access, emergency buttons, and integration with access control systems. Dahua and Hikvision systems offer IP-based connectivity with cloud management, enabling remote communication from anywhere in Saudi Arabia and worldwide.': 'توفر أنظمة الإنتركم المرئي فحصا آمنا للزوار عبر فيديو عالي الدقة واتصال صوتي واضح. تشمل مجموعتنا أنظمة للشقق السكنية والمكاتب التجارية ومحطات الطوارئ الصناعية، مع فتح الأبواب عن بعد وتسجيل المكالمات والوصول عبر تطبيق الجوال وأزرار الطوارئ والتكامل مع أنظمة التحكم بالدخول. توفر أنظمة Dahua وHikvision اتصالا عبر IP مع إدارة سحابية للتواصل عن بعد من أي مكان داخل السعودية وخارجها.',
        'We provide sales, service, and configuration for industry-leading video intercom systems': 'نوفر بيع وخدمة وتهيئة أنظمة الإنتركم المرئي من العلامات الرائدة',
        'Ready to Upgrade Your Video Intercom System?': 'هل أنت جاهز لترقية نظام الإنتركم المرئي؟',
        'Our experts are here to help you find the perfect solution for your home or business': 'خبراؤنا هنا لمساعدتك في اختيار الحل الأنسب لمنزلك أو عملك',
        'Our experts are here to help you find the perfect solution for your security needs': 'خبراؤنا هنا لمساعدتك في اختيار الحل الأنسب لاحتياجاتك الأمنية',
        'Sales': 'المبيعات',
        'Configuration': 'التهيئة',
        'Installation': 'التركيب',
        'Your browser does not support the video element.': 'متصفحك لا يدعم تشغيل الفيديو.',
        'Your browser does not support the video tag.': 'متصفحك لا يدعم تشغيل الفيديو.',
        'Chat with us!': 'تحدث معنا!',
        'Chat on WhatsApp': 'الدردشة عبر واتساب',
        'Scroll to top': 'العودة إلى الأعلى',
        'Authorized Dealer': 'موزع معتمد',
        'Authorized Partner': 'شريك معتمد',
        'Official Partner': 'شريك رسمي',
        'World\'s leading video surveillance manufacturer': 'شركة رائدة عالميا في تصنيع أنظمة المراقبة بالفيديو',
        'World\'s leading video surveillance and security manufacturer': 'شركة رائدة عالميا في تصنيع حلول المراقبة والأمن',
        'World\'s leading video surveillance and LED display manufacturer': 'شركة رائدة عالميا في تصنيع أنظمة المراقبة وشاشات LED',
        'World\'s Leading Manufacturer of Comprehensive Video Surveillance & Smart Security Solutions': 'شركة رائدة عالميا في حلول المراقبة بالفيديو والأمن الذكي الشاملة',
        'Global leader in video-centric smart IoT solutions': 'رائدة عالميا في حلول إنترنت الأشياء الذكية المعتمدة على الفيديو',
        'Pioneer in biometric verification technology': 'رائدة في تقنيات التحقق الحيوي',
        'World leader in biometric verification and security solutions': 'رائدة عالميا في حلول التحقق الحيوي والأمن',
        'Best Seller': 'الأكثر مبيعا',
        'Best Value': 'أفضل قيمة',
        'Premium Series': 'الفئة المتميزة',
        'Value Series': 'فئة القيمة',
        'Wide Range': 'مجموعة واسعة',
        'All Items': 'كل العناصر',
        'All Accessories': 'كل الملحقات',
        'All': 'الكل',
        'Tools': 'الأدوات',
        'Storage': 'التخزين',
        'No products found': 'لم يتم العثور على منتجات',
        'Try adjusting your search or filter criteria': 'جرّب تعديل البحث أو الفلتر',
        'Access Control Systems': 'أنظمة التحكم بالدخول',
        'Video Intercom Systems': 'أنظمة الإنتركم المرئي',
        'Thermal Cameras': 'كاميرات حرارية',
        'Audio Solution': 'حلول الصوت',
        'Audio Product': 'منتج صوتي',
        'Surveillance System': 'نظام مراقبة',
        'Surveillance Brands': 'علامات المراقبة',
        'Parking Solution': 'حلول المواقف',
        'Smart Parking': 'مواقف ذكية',
        'Parking Solution Providers We Work With': 'مزودو حلول المواقف الذين نعمل معهم',
        'Alarm Kit': 'طقم إنذار',
        'Alarm KIT': 'طقم إنذار',
        'IP Phone': 'هاتف IP',
        'IP PBX': 'نظام IP PBX',

        'Hikvision Parking management': 'إدارة مواقف Hikvision',
        'Dahua Parking management': 'إدارة مواقف Dahua',
        'ZKTeco Parking management': 'إدارة مواقف ZKTeco',
        'Trusted Parking Solution Providers We Work With': 'مزودو حلول المواقف الذين نعمل معهم',
        'Parking Solutions': 'حلول المواقف',
        'Explore our range of smart parking systems including ANPR cameras, boom barriers, ticketing machines, sensors, and access control solutions': 'تصفح مجموعتنا من أنظمة المواقف الذكية بما يشمل كاميرات ANPR وحواجز الذراع وأجهزة التذاكر والحساسات وحلول التحكم بالدخول',
        'All-in-One Entrance & Exit Manager': 'مدير دخول وخروج شامل',
        'All-in-one E&E machine with capture unit, straight boom pole and LCD': 'جهاز دخول وخروج شامل مع وحدة التقاط وذراع مستقيم وشاشة LCD',
        'Barrier gates with curved boom pole': 'حاجز بوابة مع ذراع منحني',
        'Barrier gates with fence boom pole': 'حاجز بوابة مع ذراع سياجي',
        '4MP ANPR Intelligent Entrance Video Unit': 'وحدة فيديو دخول ذكية ANPR بدقة 4MP',
        'Integrated white light and IR': 'إضاءة بيضاء وIR مدمجة',
        'Offline control': 'تحكم دون اتصال',
        'Support dirty license plate recognition': 'يدعم التعرف على اللوحات المتسخة',
        '5MP Fisheye Parking Camera': 'كاميرا مواقف Fisheye بدقة 5MP',
        '360° monitoring': 'مراقبة 360°',
        '4-channel calibration': 'معايرة 4 قنوات',
        'AI intelligent algorithm': 'خوارزمية ذكاء اصطناعي ذكية',
        'On-street Parking Terminal': 'وحدة مواقف على الطريق',
        'With high performance': 'أداء عال',
        'Fan-free': 'بدون مروحة',
        '4 MP iBeacon Guidance Camera': 'كاميرا إرشاد iBeacon بدقة 4MP',
        'Parking Guidance Entrance Information Guidance Screen': 'شاشة إرشاد معلومات مداخل المواقف',
        'Parking Inquiry Machines (Android)': 'أجهزة استعلام المواقف (Android)',
        '2MP Parking space detection camera': 'كاميرا كشف مواقف بدقة 2MP',
        'Automatic Payment Machine': 'آلة دفع تلقائية',
        'Entrance & Exit Signal Light': 'إشارة دخول وخروج',
        'Dahua Access ANPR Camera': 'كاميرا Dahua ANPR للدخول',
        'Dahua 4MP Access ANPR Camera': 'كاميرا Dahua ANPR للدخول بدقة 4MP',
        'Recognition of unlicensed vehicles': 'التعرف على المركبات غير المرخصة',
        'Folding Arm Barrier': 'حاجز بذراع قابل للطي',
        '24 VDC brushless motor': 'محرك بدون فرش 24V DC',
        'Automatically rises': 'يرتفع تلقائيا',
        'Dahua Anti Smashing Radar': 'رادار Dahua مضاد للاصطدام',
        'Entrance and exit': 'دخول وخروج',
        'Intelligent anti smash protection': 'حماية ذكية مضادة للصدم',
        'Cost effective solution': 'حل اقتصادي فعال',
        'Self-service Terminal': 'وحدة خدمة ذاتية',
        'LCD display': 'شاشة LCD',
        'QR code scanner': 'قارئ QR',
        'Android operating system': 'نظام تشغيل Android',
        'The BGM1000 Series of barrier gates': 'سلسلة BGM1000 من حواجز البوابات',
        'The ProBG3000 series is a high performance': 'سلسلة ProBG3000 عالية الأداء',
        "Anti-collision protection's boom": 'ذراع بحماية مضادة للتصادم',
        'Second generation of ZKTeco radars': 'الجيل الثاني من رادارات ZKTeco',
        'The E-LPRC500 camera are designed to meet the needs of traffic management': 'كاميرا E-LPRC500 مصممة لتلبية احتياجات إدارة حركة المرور',
        '95% License Plate Capture Rate': 'معدل التقاط لوحات 95%',
        'Status Light Support': 'دعم مؤشر الحالة',
        'third-generation UHF readers': 'قارئات UHF من الجيل الثالث',
        "ZKTeco's second generation of parking locks": 'الجيل الثاني من أقفال المواقف من ZKTeco',
        'Automated Barrier Control': 'تحكم آلي بالحواجز',
        'Smart entry and exit with automated boom barriers for seamless vehicle access': 'دخول وخروج ذكي عبر حواجز آلية لمرور مركبات سلس',
        'ANPR Recognition': 'تعرف ANPR',
        'Automatic Number Plate Recognition for fast vehicle identification and tracking': 'تعرف تلقائي على اللوحات لتحديد وتتبع المركبات بسرعة',
        'Real-Time Slot Monitoring': 'مراقبة لحظية للمواقف',
        'Live parking availability updates to guide drivers and reduce congestion': 'تحديثات لحظية لتوفر المواقف لتوجيه السائقين وتقليل الازدحام',
        'Ticketing & Payment System': 'نظام تذاكر ودفع',
        'Integrated ticketing with cashless and digital payment options for users': 'نظام تذاكر متكامل مع خيارات دفع رقمي وبدون نقد للمستخدمين',
        '24/7 Surveillance Integration': 'تكامل مراقبة 24/7',
        'Seamless integration with CCTV systems for enhanced parking security': 'تكامل سلس مع أنظمة CCTV لتعزيز أمن المواقف',
        'Remote Management': 'إدارة عن بعد',
        'Monitor and control parking operations remotely via mobile apps and web dashboards': 'مراقبة والتحكم بعمليات المواقف عن بعد عبر تطبيقات الجوال ولوحات الويب',
        'Ready to Upgrade Your Parking Management System?': 'هل أنت جاهز لترقية إدارة المواقف؟',
        'We deliver smart parking solutions with ANPR, automated barriers, real-time monitoring, and seamless access control for commercial and residential spaces': 'نقدم حلول مواقف ذكية مع ANPR وحواجز آلية ومراقبة لحظية وتحكم دخول سلس للمساحات التجارية والسكنية',
        'Smart Parking Solutions': 'حلول المواقف الذكية',
        'Dahua ANPR and ZKTeco parking solutions with automatic number plate recognition technology. Boom barriers, vehicle sensors, and occupancy tracking for parking lots and commercial buildings. Real-time analytics and mobile payment integration for modern parking management systems.': 'حلول مواقف Dahua ANPR وZKTeco مع تقنية التعرف التلقائي على لوحات المركبات. حواجز ذراع، حساسات مركبات، وتتبع إشغال المواقف للمجمعات والمباني التجارية. تحليلات لحظية وتكامل دفع عبر الجوال لإدارة مواقف حديثة.',
        'Trusted Parking Solution Providers': 'مزودو حلول المواقف الموثوقون',
        'Parking Solution Providers': 'مزودو حلول المواقف',
        'Delivering end-to-end parking management solutions including smart parking systems, automated barriers, ticketing solutions, ANPR technology, and real-time monitoring for seamless vehicle flow': 'نقدم حلولا متكاملة لإدارة المواقف تشمل الأنظمة الذكية والحواجز الآلية وحلول التذاكر وتقنية ANPR والمراقبة اللحظية لانسيابية حركة المركبات',
        'Professional setup of parking management systems including ANPR integration, access control configuration, and real-time monitoring dashboards': 'إعداد احترافي لأنظمة إدارة المواقف يشمل تكامل ANPR وتهيئة التحكم بالدخول ولوحات مراقبة لحظية',
        'Complete parking system installation including boom barriers, ANPR cameras, sensors, ticketing systems, and seamless integration with existing infrastructure': 'تركيب كامل لنظام المواقف يشمل حواجز الذراع وكاميرات ANPR والحساسات وأنظمة التذاكر والتكامل السلس مع البنية الحالية',
        'Wide range of smart parking systems including ANPR cameras, boom barriers, ticketing machines, and access control solutions from leading brands': 'مجموعة واسعة من أنظمة المواقف الذكية تشمل كاميرات ANPR وحواجز الذراع وأجهزة التذاكر وحلول التحكم بالدخول من علامات رائدة',
        'Parking Management Features': 'ميزات إدارة المواقف',
        '4 MP HD camera': 'كاميرا 4MP عالية الدقة',
        'Supplement light': 'إضاءة مساعدة',
        'Anti-vehicle following mode': 'وضع منع تتبع المركبات',
        'Quick pass': 'مرور سريع',
        'LCD: 21.5 inch': 'شاشة LCD بقياس 21.5 بوصة',
        '32 Series Barrier Gates': 'سلسلة 32 من حواجز البوابات',
        'Standardized chuck': 'مقبس قياسي',
        'Supports Bluetooth': 'يدعم Bluetooth',
        'Vehicle detectors': 'كواشف المركبات',
        'HD 4.0 MP camera': 'كاميرا 4.0MP عالية الدقة',
        '3D noise reduction': 'تقليل ضوضاء ثلاثي الأبعاد',
        'ROI encoding': 'ترميز ROI',
        'Indoor,serven-color,Single Row,Led Screen': 'شاشة LED داخلية صف واحد بسبعة ألوان',
        'Standard RS485/RJ45': 'قياسي RS485/RJ45',
        'Supports 7 colors display': 'يدعم عرض 7 ألوان',
        'Logic address 0~255': 'عنوان منطقي 0~255',
        'Entrance information guidance': 'إرشاد معلومات الدخول',
        'English letters and numbers': 'حروف وأرقام إنجليزية',
        'Supersonic detector': 'كاشف فوق صوتي',
        'Stable system': 'نظام مستقر',
        'Tactile response': 'استجابة لمسية',
        'Large screen': 'شاشة كبيرة',
        'High definition': 'دقة عالية',
        'Low illumination': 'إضاءة منخفضة',
        'Multiple interfaces': 'واجهات متعددة',
        'Integrated voucher Printer': 'طابعة قسائم مدمجة',
        'SCN bill and coin Module': 'وحدة أوراق نقدية وعملات SCN',
        'Contactless card Reader': 'قارئ بطاقة بدون تلامس',
        'Entrance & Exit Signal': 'إشارة دخول وخروج',
        'Red and Green Light': 'إشارة حمراء وخضراء',
        'Avoid traffic congestion': 'تقليل الازدحام المروري',
        'High-performance': 'أداء عال',
        'IP67 and IK10 Ratings': 'تصنيف IP67 وIK10',
        'Intrusion and loitering detection': 'كشف التطفل والتسكع',
        'IP54 rated.': 'مصنف IP54',
        'Radar anti-smashing': 'رادار مضاد للصدم',
        'Entrance and Exit LED Display': 'شاشة LED للدخول والخروج',
        'Supports voice broadcast': 'يدعم البث الصوتي',
        'Abnormal LED': 'تنبيه LED للحالات غير الطبيعية',
        'EMC CLASS A': 'فئة EMC A',
        'Dahua LED Indicator': 'مؤشر Dahua LED',
        'External indicator light': 'ضوء مؤشر خارجي',
        'Ceiling mount': 'تركيب سقفي',
        'Bracket mount': 'تركيب بحامل',
        'Parking Space Detection Camera': 'كاميرا كشف مواقف السيارات',
        'Ideal for plate recognition': 'مثالية للتعرف على اللوحات',
        'Line crossing detection': 'كشف تجاوز الخط',
        'Sound and light alarms': 'إنذارات صوتية وضوئية',
        'Dahua Indoor Guidance Screen': 'شاشة Dahua للإرشاد الداخلي',
        'Guidance for vehicles': 'إرشاد للمركبات',
        'Strong brightness': 'سطوع قوي',
        'Displays the text and symbols': 'عرض النصوص والرموز',
        '4MP Outdoor Parking Space Detector': 'كاشف مواقف خارجي بدقة 4MP',
        'Up to 50 parking spaces': 'حتى 50 موقفا',
        'Motorized vari-focal lens': 'عدسة متغيرة البعد البؤري بمحرك',
        'Dahua 2MP ANPR pillar': 'عمود Dahua ANPR بدقة 2MP',
        '2MP starlight camera': 'كاميرا Starlight بدقة 2MP',
        'Vehicle detection': 'كشف المركبات',
        'Recognize license plates': 'التعرف على لوحات المركبات',
        'Desktop Card Issuer': 'جهاز إصدار بطاقات مكتبي',
        'Air Interface Protocol': 'بروتوكول الواجهة الهوائية',
        'Operating Frequency': 'تردد التشغيل',
        'Read and Write Performance': 'أداء القراءة والكتابة',
        'RFID Antenna 09': 'هوائي RFID 09',
        'Wide range': 'مدى واسع',
        'High gain': 'كسب عال',
        'Excellent angular directivity': 'توجيه زاوي ممتاز',
        'Fence Arm All-in-one Barrier': 'حاجز شامل بذراع سياجي',
        'Single shutter': 'مصراع مفرد',
        'TF card; USB': 'بطاقة TF وUSB',
        'Folding Arm All-in-one Barrier': 'حاجز شامل بذراع قابل للطي',
        'Motorized vari-focal': 'بعد بؤري متغير بمحرك',
        'DC 24V brushless motor': 'محرك بدون فرش 24V DC',
        'Straight boom': 'ذراع مستقيم',
        'Reversible Boom Direction': 'اتجاه ذراع قابل للعكس',
        'Servo Motor': 'محرك سيرفو',
        'Reliable transmission structure': 'هيكل نقل موثوق',
        'Car Speed 0~25KM/h': 'سرعة المركبة 0~25 كم/س',
        'IP66': 'تصنيف IP66',
        'UHF Class 1 Gen 2': 'UHF الفئة 1 الجيل 2',
        'ISO 18000-6C': 'ISO 18000-6C',
        'Ticket dispenser': 'موزع تذاكر',
        'Microwave radar system': 'نظام رادار ميكروويف',
        'Bar-code  scanning reader': 'قارئ مسح باركود',
        'Card swiping': 'تمرير بطاقة',
        'auto-sensing function': 'وظيفة استشعار تلقائي',
        'competent private parking manager': 'مدير كفء للمواقف الخاصة',
        'Auxiliary traffic lights in the main body': 'إشارات مرور مساعدة مدمجة في الهيكل الرئيسي',
        'Infrared detector': 'كاشف أشعة تحت الحمراء',
        'Loop detector': 'كاشف حلقي',
        'Radar detector': 'كاشف رادار',
        'License plate recognition cameras': 'كاميرات التعرف على لوحات المركبات',
        'License plate number': 'رقم اللوحة',
        'License plate picture': 'صورة اللوحة',
        'Access time': 'وقت الدخول'
    };

    const exactProductTranslations = {
        'Video Intercom Kit': 'طقم إنتركم مرئي',
        'Villa Door Station': 'وحدة باب للفلل',
        'Indoor Monitor': 'شاشة داخلية',
        'Door Station': 'وحدة باب',
        'Door Unlock': 'فتح الباب',
        'Remote Unlock': 'فتح عن بعد',
        'Mobile App': 'تطبيق جوال',
        'Video Recording': 'تسجيل فيديو',
        'Two-way audio': 'صوت ثنائي الاتجاه',
        'Two-way talk': 'تحدث ثنائي الاتجاه',
        'Face Recognition': 'التعرف على الوجه',
        'AI Face Recognition': 'تعرف ذكي على الوجه',
        'Fingerprint Reader': 'قارئ بصمة',
        'Card Reader': 'قارئ بطاقات',
        'Biometric Reader': 'قارئ حيوي',
        'Time Attendance Terminal': 'جهاز حضور وانصراف',
        'Visible Light Face Terminal': 'جهاز تعرف وجه بالضوء المرئي',
        'QR Code': 'رمز QR',
        'Anti-spoofing': 'مكافحة التزييف',
        'Anti-tamper': 'مقاوم للعبث',
        'Wiegand Output': 'خرج Wiegand',
        'Wiegand Interface': 'واجهة Wiegand',
        'Temperature Detection': 'كشف الحرارة',
        'Waterproof': 'مقاوم للماء',
        'LED Display': 'شاشة LED',
        'LED Displays': 'شاشات LED',
        'Pixel Pitch': 'درجة البكسل',
        'Brightness': 'سطوع',
        'High Brightness': 'سطوع عال',
        'Ultra High Brightness': 'سطوع فائق',
        'Wide Viewing Angle': 'زاوية رؤية واسعة',
        'Wear-resistant': 'مقاوم للتآكل',
        'Impact-resistant': 'مقاوم للصدمات',
        'Weather Resistant': 'مقاوم للعوامل الجوية',
        'Weather Ready': 'جاهز للطقس',
        'Indoor': 'داخلي',
        'Outdoor': 'خارجي',
        'Front Maintenance': 'صيانة أمامية',
        'Video Wall': 'جدار فيديو',
        'Controller': 'وحدة تحكم',
        'Output Ports': 'منافذ إخراج',
        'Input Board': 'لوحة إدخال',
        '4K Support': 'دعم 4K',
        'Touch Screen': 'شاشة لمس',
        'Touch Display': 'شاشة لمس',
        'Interactive Display': 'شاشة تفاعلية',
        'Interactive Whiteboard': 'سبورة تفاعلية',
        'Smart Interactive Display': 'شاشة تفاعلية ذكية',
        'Smart Interactive Whiteboard': 'سبورة تفاعلية ذكية',
        'Wireless Pencil': 'قلم لاسلكي',
        'USB Camera': 'كاميرا USB',
        'Android Powered': 'يعمل بنظام Android',
        'Tizen Powered': 'يعمل بنظام Tizen',
        '4K UHD Display': 'شاشة 4K UHD',
        'UHD 4K Resolution': 'دقة UHD 4K',
        'Surveillance HDD': 'قرص مراقبة',
        'SSD Storage Drive': 'قرص SSD للتخزين',
        'UPS Battery Backup': 'بطارية احتياطية UPS',
        'Power Supply': 'مزود طاقة',
        'Wall Mount Bracket': 'حامل جداري',
        'U-Bracket': 'حامل U',
        'Z-Bracket': 'حامل Z',
        'BNC Connector Kit': 'طقم موصلات BNC',
        'Video Balun': 'محول فيديو Balun',
        'Junction Box': 'علبة توصيل',
        'Outdoor Junction Box': 'علبة توصيل خارجية',
        'Network Camera': 'كاميرا شبكية',
        'Bullet Network Camera': 'كاميرا Bullet شبكية',
        'Dome Network Camera': 'كاميرا Dome شبكية',
        'PTZ Camera': 'كاميرا PTZ',
        'NVR': 'مسجل NVR',
        'Network Video Recorder': 'مسجل فيديو شبكي',
        'Panoramic Camera': 'كاميرا بانورامية',
        'Fisheye Camera': 'كاميرا عين السمكة',
        'Thermal Camera': 'كاميرا حرارية',
        'Thermal Imaging': 'تصوير حراري',
        'Fire Detection': 'كشف الحريق',
        'Temperature Measurement': 'قياس الحرارة',
        'White Light Alarm': 'إنذار بضوء أبيض',
        'Audio Alarm': 'إنذار صوتي',
        'Speaker': 'سماعة',
        'Ceiling Speaker': 'سماعة سقفية',
        'Wall-mounted Amplifier': 'مضخم جداري',
        'Network Amplifier': 'مضخم شبكي',
        'Microphone': 'ميكروفون',
        'Loudspeaker': 'مكبر صوت',
        'Amplifier': 'مضخم صوت',
        'Alarm Hub': 'وحدة تحكم الإنذار',
        'Alarm hub': 'وحدة تحكم الإنذار',
        'Wireless Repeater': 'مكرر لاسلكي',
        'Wireless Smoke Alarm': 'إنذار دخان لاسلكي',
        'Wireless Sounder Indoor': 'صافرة داخلية لاسلكية',
        'Wireless External Sounder': 'صافرة خارجية لاسلكية',
        'Wireless Keyfob': 'ريموت لاسلكي',
        'Wireless Panic Button': 'زر طوارئ لاسلكي',
        'Wireless Water Leak Detector': 'كاشف تسرب مياه لاسلكي',
        'Wireless Glass Break Detector': 'كاشف كسر زجاج لاسلكي',
        'Water Detector': 'كاشف مياه',
        'Motion Detector': 'كاشف حركة',
        'Glass Break Detector': 'كاشف كسر زجاج',
        'Panic Button': 'زر طوارئ',
        'Smoke Alarm': 'إنذار دخان',
        'Carbon Monoxide Alarm': 'إنذار أول أكسيد الكربون',
        'Speed Gate': 'بوابة سرعة',
        'Speed Gates': 'بوابات سرعة',
        'Turnstile': 'دوار دخول',
        'Tripod Turnstile': 'دوار ثلاثي',
        'Relay': 'ريلاي',
        'Swing Barrier': 'بوابة متأرجحة',
        'Flap Barrier': 'بوابة أجنحة',
        'Anti-tailgating': 'منع التسلل خلف المستخدم',
        'Anti-Tailgating': 'منع التسلل خلف المستخدم',
        'Anti-Passback': 'منع الرجوع العكسي',
        'Bi-Directional': 'اتجاهان',
        'Auto Free-Pass': 'مرور حر تلقائي',
        'Stainless Steel': 'ستانلس ستيل',
        'Parking Barrier': 'حاجز مواقف',
        'Barrier Gate': 'حاجز مواقف',
        'Boom Barrier': 'حاجز ذراع',
        'ANPR Camera': 'كاميرا قراءة اللوحات',
        'License Plate Recognition': 'التعرف على لوحات المركبات',
        'Parking Space Detector': 'كاشف موقف سيارة',
        'Ticket Dispenser': 'موزع تذاكر',
        'Payment Machine': 'جهاز دفع',
        'Vehicle Detector': 'كاشف مركبات',
        'Traffic Light': 'إشارة مرور',
        'IP Phone': 'هاتف IP',
        'IP Phones': 'هواتف IP',
        'Conference Phone': 'هاتف مؤتمرات',
        'Cordless Phone': 'هاتف لاسلكي',
        'HD Voice': 'صوت عالي الدقة',
        'Bluetooth': 'بلوتوث',
        'Wi-Fi support': 'دعم Wi-Fi',
        'PoE Support': 'دعم PoE',
        'PoE+ Support': 'دعم PoE+',
        'Web Management': 'إدارة عبر الويب',
        'Cloud Management': 'إدارة سحابية',
        'Remote Management': 'إدارة عن بعد',
        'Easy Setup': 'إعداد سهل',
        'Compact Design': 'تصميم مدمج',
        'Modular Design': 'تصميم معياري',
        'Modular Door Station': 'وحدة باب معيارية',
        'IP Villa Door Station': 'وحدة باب IP للفلل',
        'Night Vision': 'رؤية ليلية',
        'Modular Compatible': 'متوافق مع الأنظمة المعيارية',
        'Easy Installation': 'تركيب سهل',
        'Wide range of video intercom devices from top brands at competitive prices': 'مجموعة واسعة من أجهزة الإنتركم المرئي من أفضل العلامات بأسعار منافسة',
        'Professional setup and configuration of video intercom systems': 'إعداد وتهيئة احترافية لأنظمة الإنتركم المرئي',
        'Complete installation services with proper wiring and integration': 'خدمات تركيب كاملة مع تمديد أسلاك صحيح وتكامل مناسب',
        'Professional biometric, card reader, and face recognition systems. Secure access management for offices, facilities, schools, hospitals, and commercial buildings. Hikvision, Dahua, and ZKTeco solutions with real-time monitoring and comprehensive audit trails across Saudi Arabia.': 'أنظمة احترافية للبصمة وقارئ البطاقات والتعرف على الوجه. إدارة دخول آمنة للمكاتب والمنشآت والمدارس والمستشفيات والمباني التجارية، مع حلول Hikvision وDahua وZKTeco ومراقبة لحظية وسجلات تدقيق شاملة في جميع أنحاء السعودية.',
        'Access control systems are essential for protecting your facility and managing who enters restricted areas. Our solutions combine advanced biometric technology, facial recognition, card readers, and PIN codes to provide comprehensive security. Whether you need simple office access management or complex multi-building deployment, our systems scale to your needs and integrate seamlessly with your existing security infrastructure. We provide consultation, installation, configuration, maintenance, and 24/7 technical support.': 'تعد أنظمة التحكم بالدخول ضرورية لحماية منشأتك وإدارة من يدخل المناطق المقيدة. تجمع حلولنا بين تقنيات القياسات الحيوية المتقدمة والتعرف على الوجه وقارئات البطاقات ورموز PIN لتوفير أمان شامل. سواء كنت تحتاج إلى إدارة دخول بسيطة للمكاتب أو نشر معقد لعدة مبان، فإن أنظمتنا تتوسع حسب احتياجاتك وتتكامل بسلاسة مع بنية الأمن الحالية لديك. نوفر الاستشارة والتركيب والتهيئة والصيانة والدعم الفني على مدار الساعة.',
        'We provide sales, service, and configuration for industry-leading access control systems': 'نوفر بيع وخدمة وتهيئة أنظمة التحكم بالدخول من العلامات الرائدة',
        'Wide range of access control devices from top brands at competitive prices': 'مجموعة واسعة من أجهزة التحكم بالدخول من أفضل العلامات بأسعار منافسة',
        'Professional setup and configuration of access control systems': 'إعداد وتهيئة احترافية لأنظمة التحكم بالدخول',
        'Lampro professional LED displays for retail, advertising, events, and corporate use. High-brightness video walls with superior color accuracy and pixel density. Custom sizing from small interior displays to large outdoor installations with professional content management systems.': 'شاشات LED احترافية من Lampro للمتاجر والإعلانات والفعاليات والاستخدام المؤسسي. جدران فيديو عالية السطوع بدقة ألوان ممتازة وكثافة بكسل عالية، مع مقاسات مخصصة من الشاشات الداخلية الصغيرة إلى التركيبات الخارجية الكبيرة وأنظمة إدارة محتوى احترافية.',
        'LED displays deliver vibrant, high-brightness visuals for digital signage, wayfinding, advertising, and information displays. Our solutions include rental-grade modular systems, fixed installation displays, and transparent glass displays for retail storefronts. With pixel pitches from 2.5mm to 10mm and brightness up to 5000 nits, displays remain visible in direct sunlight. Full-color capabilities, remote content management, energy efficiency, and weatherproof construction make LED displays ideal for airports, shopping malls, billboards, stadiums, and outdoor advertising across Saudi Arabia and the Middle East.': 'توفر شاشات LED صورا نابضة وعالية السطوع للوحات الرقمية والإرشاد والإعلانات وشاشات المعلومات. تشمل حلولنا أنظمة معيارية للتأجير، وشاشات تركيب ثابت، وشاشات زجاجية شفافة لواجهات المتاجر. مع درجات بكسل من 2.5 مم إلى 10 مم وسطوع يصل إلى 5000 نت، تبقى الشاشات واضحة تحت ضوء الشمس المباشر. تجعل الألوان الكاملة وإدارة المحتوى عن بعد وكفاءة الطاقة والبناء المقاوم للعوامل الجوية هذه الشاشات مناسبة للمطارات والمجمعات التجارية واللوحات الإعلانية والملاعب والإعلانات الخارجية في السعودية والشرق الأوسط.',
        'We provide sales, service, and configuration for industry-leading LED display systems': 'نوفر بيع وخدمة وتهيئة أنظمة شاشات LED من العلامات الرائدة',
        'Wide range of LED displays from top brands at competitive prices': 'مجموعة واسعة من شاشات LED من أفضل العلامات بأسعار منافسة',
        'Professional mounting and installation for indoor and outdoor displays': 'تركيب وتثبيت احترافي للشاشات الداخلية والخارجية',
        'Complete setup and calibration of LED controllers and video walls': 'إعداد ومعايرة كاملة لوحدات تحكم LED وجدران الفيديو',
        'Advanced NVR Systems & Smart CCTV Cameras for 24/7 Protection': 'أنظمة NVR متقدمة وكاميرات CCTV ذكية لحماية على مدار الساعة',
        'Delivering end-to-end surveillance solutions including HD cameras, NVR systems, remote monitoring, and intelligent video analytics for complete security': 'نقدم حلولا متكاملة للمراقبة تشمل كاميرات HD وأنظمة NVR والمراقبة عن بعد وتحليلات فيديو ذكية لأمان شامل',
        'Wide range of CCTV cameras, NVR systems, and surveillance accessories from top brands at competitive prices': 'مجموعة واسعة من كاميرات CCTV وأنظمة NVR وملحقات المراقبة من أفضل العلامات بأسعار منافسة',
        'Professional NVR setup, camera configuration, remote viewing, and recording optimization for maximum performance': 'إعداد احترافي لأنظمة NVR وتهيئة الكاميرات والمشاهدة عن بعد وتحسين التسجيل لأفضل أداء',
        'Complete CCTV installation with cameras, NVRs, structured cabling, and seamless system integration': 'تركيب CCTV كامل يشمل الكاميرات وأجهزة NVR والكابلات المنظمة وتكامل النظام بسلاسة',
        'Our experts provide complete CCTV camera and NVR solutions tailored for homes, offices, and commercial spaces': 'يوفر خبراؤنا حلولا كاملة لكاميرات CCTV وأنظمة NVR مصممة للمنازل والمكاتب والمساحات التجارية',
        'Dahua automated access gates with face recognition and card reader integration technology. Smart turnstiles for metro stations, airports, offices, and commercial complexes nationwide. Real-time occupancy tracking and detailed access analytics for efficient crowd management.': 'بوابات دخول آلية من Dahua مع تقنية التعرف على الوجه والتكامل مع قارئات البطاقات. دوارات ذكية لمحطات المترو والمطارات والمكاتب والمجمعات التجارية في جميع أنحاء المملكة، مع تتبع إشغال لحظي وتحليلات دخول مفصلة لإدارة الحشود بكفاءة.',
        'Speed gates and turnstiles control pedestrian movement and manage throughput at entry points. Our swing gates, sliding gates, and full-height turnstiles integrate with access control systems for seamless authentication and tracking. Features include tailgate prevention, emergency manual operation, weatherproof design for outdoor installations, and compatibility with facial recognition and card readers. Solutions span airports, metro stations, stadiums, office buildings, and secure facilities. Dahua and ZKTeco systems provide real-time occupancy counting, visitor tracking, and anti-piracy technology ensuring only authorized personnel pass through gates across your facilities in Saudi Arabia.': 'تتحكم بوابات السرعة والدوارات في حركة المشاة وتدير تدفق الدخول عند النقاط الرئيسية. تتكامل البوابات المتأرجحة والمنزلقة والدوارات كاملة الارتفاع مع أنظمة التحكم بالدخول للمصادقة والتتبع بسلاسة. تشمل الميزات منع التسلل خلف المستخدم، والتشغيل اليدوي في الطوارئ، وتصميما مقاوما للعوامل الجوية للتركيبات الخارجية، والتوافق مع التعرف على الوجه وقارئات البطاقات. تناسب الحلول المطارات ومحطات المترو والملاعب والمباني المكتبية والمنشآت الآمنة. توفر أنظمة Dahua وZKTeco عدّ إشغال لحظيا وتتبع زوار وتقنيات تمنع المرور غير المصرح به عبر منشآتك في السعودية.',
        'We provide sales, service, and installation for industry-leading speed gates and turnstile systems': 'نوفر بيع وخدمة وتركيب أنظمة بوابات السرعة والدوارات من العلامات الرائدة',
        'Wide range of speed gates and turnstiles from top brands at competitive prices': 'مجموعة واسعة من بوابات السرعة والدوارات من أفضل العلامات بأسعار منافسة',
        'Professional installation with proper wiring and integration': 'تركيب احترافي مع تمديد أسلاك صحيح وتكامل مناسب',
        'Regular maintenance and support services for optimal performance': 'خدمات صيانة ودعم دورية لأفضل أداء',
        'ZKTeco Speed Gates & Turnstiles': 'بوابات السرعة والدوارات من ZKTeco',
        'Hikvision Speed Gates & Turnstiles': 'بوابات السرعة والدوارات من Hikvision',
        'Dahua Speed Gates & Turnstiles': 'بوابات السرعة والدوارات من Dahua',
        'Key': 'أهم',
        'Features': 'الميزات',
        'Key Features': 'أهم الميزات',
        'High Security': 'أمان عال',
        'High Throughput': 'مرور عالي الكفاءة',
        'Easy Integration': 'تكامل سهل',
        'Durable Build': 'هيكل متين',
        'Anti-tailgating sensors and anti-passback features ensure maximum security': 'تضمن حساسات منع التسلل خلف المستخدم وميزة منع الرجوع العكسي أعلى مستويات الأمان',
        'Speed gates process up to 35+ persons per minute for efficient access': 'تعالج بوابات السرعة دخول أكثر من 35 شخصا في الدقيقة لمرور فعال',
        'Compatible with all major access control systems and biometric readers': 'متوافق مع جميع أنظمة التحكم بالدخول الرئيسية وقارئات القياسات الحيوية',
        'Premium stainless steel construction for long-lasting performance': 'هيكل من الستانلس ستيل عالي الجودة لأداء طويل الأمد',
        'Need Help Choosing the Right Speed Gate System²': 'هل تحتاج مساعدة لاختيار نظام بوابات السرعة المناسب؟',
        'Our experts are here to help you find the perfect solution for your entrance security needs': 'خبراؤنا هنا لمساعدتك في اختيار الحل المثالي لاحتياجات أمان مداخلك',
        'NEW': 'جديد',
        'Smart Value Flap Barriers': 'بوابات أجنحة ذكية بفئة القيمة',
        'Value Smart Swing Barriers': 'بوابات متأرجحة ذكية بفئة القيمة',
        'Pro Swing Barriers': 'بوابات متأرجحة احترافية',
        'Value Swing Gate': 'بوابة متأرجحة بفئة القيمة',
        'Value Tripod Turnstile': 'دوار ثلاثي بفئة القيمة',
        'Pro Full Height Turnstile': 'دوار كامل الارتفاع احترافي',
        'Fire Linkage': 'ربط مع نظام الحريق',
        'NFC AP Mode': 'وضع NFC AP',
        '12 IR Detectors': '12 حساس IR',
        'Self-Diagnostics': 'تشخيص ذاتي',
        'Fire Alarm Link': 'ربط إنذار الحريق',
        'Auto Pass Duration': 'مدة مرور تلقائية',
        'Free on Power Off': 'مرور حر عند انقطاع الكهرباء',
        'Fire Alarm Drop': 'هبوط تلقائي عند إنذار الحريق',
        'PC & Mobile Web': 'إدارة عبر الويب للحاسوب والجوال',
        '3rd Party I/O': 'إدخال وإخراج لطرف ثالث',
        'High-Brightness LED': 'LED عالي السطوع',
        'Fire Emergency': 'وضع طوارئ الحريق',
        'LED Direction': 'اتجاه LED',
        'Intelligent Integrated Gate': 'بوابة ذكية متكاملة',
        '7" Touch Screen': 'شاشة لمس 7 بوصات',
        'Face + QR + IC': 'وجه + QR + IC',
        '20M Cycle Motor': 'محرك بعمر 20 مليون دورة',
        'Swing Barrier (Project)': 'بوابة متأرجحة (مشاريع)',
        '304 SS 1.5mm': 'ستانلس ستيل 304 بسماكة 1.5 مم',
        'Anti-Collision': 'مقاومة التصادم',
        'IR Anti-Squeeze': 'منع الانحشار بالأشعة تحت الحمراء',
        'Swing Barrier Standard': 'بوابة متأرجحة قياسية',
        '5M Cycle Motor': 'محرك بعمر 5 ملايين دورة',
        '600-1100mm Width': 'عرض 600-1100 مم',
        'Slim Swing Barrier': 'بوابة متأرجحة نحيفة',
        'Slim Design': 'تصميم نحيف',
        '1200-1500mm Width': 'عرض 1200-1500 مم',
        'Space Saving': 'توفير في المساحة',
        '2M+ Cycle Life': 'عمر تشغيلي +2 مليون دورة',
        '3-Color LED': 'LED بثلاثة ألوان',
        '9 Passage Modes': '9 أوضاع مرور',
        'Tripod Turnstile Pro': 'دوار ثلاثي احترافي',
        '3M+ Cycle Life': 'عمر تشغيلي +3 ملايين دورة',
        '600mm Width': 'عرض 600 مم',
        'Single Channel Full Height': 'قناة واحدة بارتفاع كامل',
        'Dual Channel Full Height': 'قناتان بارتفاع كامل',
        'Dual Channels': 'قناتان',
        'LED Status': 'حالة LED',
        'Dahua 4K touchscreen displays for modern classrooms and conference rooms. Interactive boards with integrated software, wireless casting, and collaboration tools. Professional installation and staff training for educational institutions and corporate environments nationwide.': 'شاشات لمس Dahua بدقة 4K للفصول الدراسية الحديثة وغرف الاجتماعات. سبورات تفاعلية مع برامج مدمجة وبث لاسلكي وأدوات تعاون، مع تركيب احترافي وتدريب للموظفين في المؤسسات التعليمية وبيئات الأعمال في جميع أنحاء المملكة.',
        'Interactive flat panels transform classrooms and conference rooms with touch-enabled collaboration, real-time annotation, and wireless content sharing. These all-in-one systems combine 4K displays, built-in PC computing, and integrated audio. Features include 20-point multi-touch capability, 10-point gesture recognition, eye-care anti-flicker technology, and OPS-compatible modular design. Perfect for K-12 schools, universities, corporate training centers, and board rooms. Dahua and Hikvision models offer native educational software, video conferencing integration, and network connectivity for seamless teaching and collaboration across Saudi Arabian institutions.': 'تحول الشاشات التفاعلية المسطحة الفصول وغرف الاجتماعات عبر التعاون باللمس والتعليق اللحظي ومشاركة المحتوى لاسلكيا. تجمع هذه الأنظمة الشاملة بين شاشات 4K وحوسبة مدمجة وصوت مدمج. تشمل الميزات لمس متعدد حتى 20 نقطة، والتعرف على الإيماءات، وتقنية حماية العين من الوميض، وتصميما معياريا متوافقا مع OPS. مثالية للمدارس والجامعات ومراكز التدريب وقاعات الاجتماعات. توفر طرازات Dahua وHikvision برامج تعليمية مدمجة وتكاملا مع مؤتمرات الفيديو واتصالا شبكيا للتعليم والتعاون بسلاسة في المؤسسات السعودية.',
        'We provide sales, service, and configuration for leading Interactive Flat Panel Display brands': 'نوفر بيع وخدمة وتهيئة الشاشات التفاعلية المسطحة من العلامات الرائدة',
        'Complete range of interactive displays from 65" to 86" with 4K resolution': 'مجموعة كاملة من الشاشات التفاعلية من 65 إلى 86 بوصة بدقة 4K',
        'Professional wall mounting and stand installation with cable management': 'تثبيت جداري وتركيب حوامل باحترافية مع إدارة للكابلات',
        'Complete setup of Android & Windows systems, network configuration, and software deployment': 'إعداد كامل لأنظمة Android وWindows وتهيئة الشبكة وتنصيب البرامج',
        'World\'s leading manufacturer of interactive display solutions for education and enterprise': 'شركة رائدة عالميا في تصنيع حلول الشاشات التفاعلية للتعليم وقطاع الأعمال',
        'Smart interactive whiteboards for education and business collaboration': 'سبورات تفاعلية ذكية للتعليم والتعاون في الأعمال',
        'Premium interactive displays with cutting-edge technology and Tizen platform': 'شاشات تفاعلية متميزة بتقنيات متطورة ومنصة Tizen',
        'Interactive Display Solutions': 'حلول الشاشات التفاعلية',
        'Smart Interactive Whiteboards': 'سبورات تفاعلية ذكية',
        'Ultra - Select - Performance - Value - Conference Series': 'سلسلة Ultra وSelect وPerformance وValue وConference',
        'Education - Business Series': 'سلسلة التعليم والأعمال',
        'WAF - Flip Pro - QMB-T Series': 'سلسلة WAF وFlip Pro وQMB-T',
        '65-inch 4K Interactive Display': 'شاشة تفاعلية 4K مقاس 65 بوصة',
        '75-inch 4K Interactive Display': 'شاشة تفاعلية 4K مقاس 75 بوصة',
        '86-inch 4K Interactive Display': 'شاشة تفاعلية 4K مقاس 86 بوصة',
        '65-inch 4K | 480 nits | Android 14': '65 بوصة 4K | 480 نت | Android 14',
        '86-inch 4K | 480 nits | Android 14': '86 بوصة 4K | 480 نت | Android 14',
        '65-inch 4K | Value Series': '65 بوصة 4K | فئة القيمة',
        '86-inch 4K | Value Series': '86 بوصة 4K | فئة القيمة',
        '10-inch Scheduling Panel': 'لوحة جدولة مقاس 10 بوصات',
        '86-inch Smart Interactive Whiteboard': 'سبورة تفاعلية ذكية مقاس 86 بوصة',
        '75-inch Smart Interactive Whiteboard': 'سبورة تفاعلية ذكية مقاس 75 بوصة',
        '65-inch Smart Interactive Whiteboard': 'سبورة تفاعلية ذكية مقاس 65 بوصة',
        '86-inch Smart Interactive Display': 'شاشة تفاعلية ذكية مقاس 86 بوصة',
        '86-inch Interactive Display WAF': 'شاشة تفاعلية WAF مقاس 86 بوصة',
        '55-inch Flip Pro WM55B': 'Flip Pro WM55B مقاس 55 بوصة',
        '65-inch Flip Pro WM65B': 'Flip Pro WM65B مقاس 65 بوصة',
        '55-inch QMB-T UHD 4K': 'QMB-T UHD 4K مقاس 55 بوصة',
        'UHD 4K (3840Ã—2160)': 'UHD 4K (3840×2160)',
        'Android 14 EDLA': 'Android 14 مع EDLA',
        'Classroom Ready': 'جاهز للفصول الدراسية',
        '40-Point Touch': 'لمس 40 نقطة',
        'Multi-Button Front': 'أزرار أمامية متعددة',
        'Meeting Info Display': 'عرض معلومات الاجتماعات',
        'Face & Card Sign-in': 'تسجيل دخول بالوجه والبطاقة',
        'Hispire SMM Platform': 'منصة Hispire SMM',
        'Education Ready': 'جاهز للتعليم',
        'Business Ready': 'جاهز للأعمال',
        'Complete Your Setup': 'أكمل إعدادك',
        'Essential accessories for interactive flat panel displays': 'ملحقات أساسية للشاشات التفاعلية المسطحة',
        'USB Camera PKC-UC12D': 'كاميرا USB PKC-UC12D',
        'Dahua HD USB Camera for video conferencing': 'كاميرا USB عالية الدقة من Dahua لاجتماعات الفيديو',
        'OPS Module': 'وحدة OPS',
        'Windows computing power': 'قدرات حوسبة بنظام Windows',
        'Wireless Transmitter': 'مرسل لاسلكي',
        'Screen sharing made simple': 'مشاركة الشاشة بسهولة',
        'Precision wireless writing tool': 'أداة كتابة لاسلكية دقيقة',
        'Mobile Stand': 'حامل متحرك',
        'Portable display mount with wheels': 'حامل شاشة متنقل بعجلات',
        'Document Camera': 'كاميرا مستندات',
        'High-resolution document capture': 'التقاط مستندات بدقة عالية',
        'Why Choose Visionangles': 'لماذا تختار فيجن أنجلز',
        'Crystal clear 3840&times;2160 resolution for stunning visuals': 'دقة 3840×2160 فائقة الوضوح لعرض بصري مدهش',
        'Multi-user collaboration support for interactive learning': 'دعم تعاون متعدد المستخدمين للتعلم التفاعلي',
        'Dual System': 'نظام مزدوج',
        'Android + Windows (OPS optional) for flexibility': 'Android + Windows (وحدة OPS اختيارية) لمرونة أكبر',
        'Google certified for education environments': 'معتمد من Google لبيئات التعليم',
        'Ready to Transform Your Collaboration Space?': 'هل أنت جاهز لترقية الشاشات التفاعلية؟',
        'Contact us today for a free consultation and display assessment': 'تواصل معنا اليوم للحصول على استشارة مجانية وتقييم للشاشات',
        'Fast Multi-Touch': 'لمس متعدد سريع',
        '3-in-1 USB-C Port': 'منفذ USB-C 3 في 1',
        'Video Call Apps': 'تطبيقات مكالمات الفيديو',
        'Non-Glare Display': 'شاشة مضادة للانعكاس',
        'Dual USB-C (100W PD)': 'منفذا USB-C مزدوجان (100W PD)',
        'Premium 4K touch displays for education, business & collaboration': 'شاشات لمس 4K متميزة للتعليم والأعمال والتعاون',
        'Professional thermal cameras for fever screening, night vision, and fire detection. Hikvision and Dahua thermal systems for perimeter protection, industrial monitoring, and 24/7 surveillance. Advanced temperature measurement and heat anomaly detection across all environments in Saudi Arabia.': 'كاميرات حرارية احترافية لفحص الحمى والرؤية الليلية وكشف الحرائق. أنظمة حرارية من Hikvision وDahua لحماية المحيط والمراقبة الصناعية والمراقبة على مدار الساعة، مع قياس حرارة متقدم وكشف شذوذ الحرارة في مختلف البيئات داخل السعودية.',
        'Thermal imaging cameras detect heat signatures invisible to standard video, enabling detection in complete darkness, fog, smoke, and extreme weather conditions. Applications include perimeter security, building diagnostics, industrial monitoring, and human temperature screening. Advanced thermal sensors with temperature measurement accuracy &plusmn;2&deg;C provide 24/7 monitoring capability without visible light dependency. Hanwha and Hikvision thermal cameras feature advanced analytics, fire detection, and integration with your security platform for comprehensive surveillance across Saudi Arabian facilities.': 'تكشف كاميرات التصوير الحراري البصمات الحرارية غير المرئية للفيديو التقليدي، مما يتيح الكشف في الظلام الكامل والضباب والدخان والظروف الجوية القاسية. تشمل الاستخدامات أمن المحيط وتشخيص المباني والمراقبة الصناعية وفحص حرارة الأشخاص. توفر الحساسات الحرارية المتقدمة دقة قياس تصل إلى ±2 درجة مئوية ومراقبة على مدار الساعة دون الاعتماد على الضوء المرئي. تتميز كاميرات Hanwha وHikvision الحرارية بتحليلات متقدمة وكشف حرائق وتكامل مع منصة الأمن لديك لمراقبة شاملة في منشآت السعودية.',
        'Thermal imaging cameras detect heat signatures invisible to standard video, enabling detection in complete darkness, fog, smoke, and extreme weather conditions. Applications include perimeter security, building diagnostics, industrial monitoring, and human temperature screening. Advanced thermal sensors with temperature measurement accuracy ±2°C provide 24/7 monitoring capability without visible light dependency. Hanwha and Hikvision thermal cameras feature advanced analytics, fire detection, and integration with your security platform for comprehensive surveillance across Saudi Arabian facilities.': 'تكشف كاميرات التصوير الحراري البصمات الحرارية غير المرئية للفيديو التقليدي، مما يتيح الكشف في الظلام الكامل والضباب والدخان والظروف الجوية القاسية. تشمل الاستخدامات أمن المحيط وتشخيص المباني والمراقبة الصناعية وفحص حرارة الأشخاص. توفر الحساسات الحرارية المتقدمة دقة قياس تصل إلى ±2 درجة مئوية ومراقبة على مدار الساعة دون الاعتماد على الضوء المرئي. تتميز كاميرات Hanwha وHikvision الحرارية بتحليلات متقدمة وكشف حرائق وتكامل مع منصة الأمن لديك لمراقبة شاملة في منشآت السعودية.',
        'Our experts are here to help you find the perfect thermal imaging solution for fire detection, perimeter protection, or industrial monitoring': 'خبراؤنا هنا لمساعدتك في اختيار حل التصوير الحراري الأنسب لكشف الحرائق أو حماية المحيط أو المراقبة الصناعية',
        'We provide sales, service, and configuration for industry-leading thermal imaging systems': 'نوفر بيع وخدمة وتهيئة أنظمة التصوير الحراري من العلامات الرائدة',
        'Wide range of thermal cameras from top brands at competitive prices': 'مجموعة واسعة من الكاميرات الحرارية من أفضل العلامات بأسعار منافسة',
        'Professional thermal calibration and temperature alarm configuration': 'معايرة حرارية احترافية وتهيئة إنذارات الحرارة',
        'Complete installation for perimeter protection and fire detection systems': 'تركيب كامل لأنظمة حماية المحيط وكشف الحرائق',
        'Need Help Choosing the Right Thermal Camera System²': 'هل تحتاج مساعدة لاختيار نظام الكاميرات الحرارية المناسب؟',
        'Hikvision Thermal Cameras': 'كاميرات Hikvision الحرارية',
        'Dahua Thermal Cameras': 'كاميرات Dahua الحرارية',
        'Hanwha Thermal Cameras': 'كاميرات Hanwha الحرارية',
        'HeatPro • Bullet • Special Industry • Speed Dome • PT Series': 'سلسلة HeatPro وBullet وIndustry وSpeed Dome وPT',
        'Eureka • Ultra • Pro • Lite • Anti-Corrosion • Explosion-proof • Thermography • Module': 'سلسلة Eureka وUltra وPro وLite وAnti-Corrosion وExplosion-proof وThermography وModule',
        'Bi-spectrum • AI Thermal • Radiometric • Positioning': 'ثنائي الطيف • حراري ذكي • قياس إشعاعي • تموضع',
        'Advanced thermal imaging with AI-powered detection and fire prevention': 'تصوير حراري متقدم مع كشف ذكي بالذكاء الاصطناعي ومنع الحرائق',
        'Hikvision Thermal': 'حراريات Hikvision',
        'Thermal & Optical Bi-spectrum Bullet': 'كاميرا Bullet حرارية وبصرية ثنائية الطيف',
        'Thermal & Optical Bi-Spectrum Turret': 'كاميرا Turret حرارية وبصرية ثنائية الطيف',
        'Thermal Bi-spectrum Bullet': 'كاميرا Bullet حرارية ثنائية الطيف',
        'Thermal TandemVu Camera': 'كاميرا TandemVu حرارية',
        'Anti-corrosion Speed Dome': 'قبة سرعة مقاومة للتآكل',
        'Explosion-Proof Positioning': 'تموضع مقاوم للانفجار',
        'Bi-spectrum Speed Dome': 'قبة سرعة ثنائية الطيف',
        'Bi-spectrum Positioning System': 'نظام تموضع ثنائي الطيف',
        'Sphere Positioning System': 'نظام تموضع كروي',
        'Thermal Mini Hybrid Eyeball': 'كاميرا Eyeball هجينة حرارية صغيرة',
        'Thermal Mini Hybrid Bullet': 'كاميرا Bullet هجينة حرارية صغيرة',
        'Thermal Hybrid Speed Dome': 'قبة سرعة هجينة حرارية',
        'Smart Linkage Camera': 'كاميرا ربط ذكي',
        'Multi-spectral Pan & Tilt': 'كاميرا Pan & Tilt متعددة الأطياف',
        'Thermal Network Bullet': 'كاميرا Bullet شبكية حرارية',
        'Thermal Hybrid Bullet': 'كاميرا Bullet هجينة حرارية',
        'Anti-corrosion Hybrid Bullet': 'كاميرا Bullet هجينة مقاومة للتآكل',
        'Hybrid PTZ Camera': 'كاميرا PTZ هجينة',
        'Explosion-proof Bullet': 'كاميرا Bullet مقاومة للانفجار',
        'Anti-Explosion Hybrid PTZ': 'كاميرا PTZ هجينة مضادة للانفجار',
        'Thermal Hybrid Compact': 'كاميرا هجينة حرارية مدمجة',
        'Thermal Camera Module': 'وحدة كاميرا حرارية',
        'Bi-spectrum Fire Detection': 'كشف حريق ثنائي الطيف',
        'QVGA AI Thermal Bullet': 'كاميرا Bullet حرارية QVGA بالذكاء الاصطناعي',
        'VGA Thermal Bullet': 'كاميرا Bullet حرارية VGA',
        'Bi-spectrum AI Radiometric': 'قياس إشعاعي ثنائي الطيف بالذكاء الاصطناعي',
        'VGA Thermal Positioning': 'تموضع حراري VGA',
        'QVGA AI Thermal Bullet': 'كاميرا بوليت حرارية QVGA بالذكاء الاصطناعي',
        'VGA Thermal Bullet': 'كاميرا بوليت حرارية VGA',
        '3MP Visible': '3 ميجابكسل مرئي',
        'Early Fire Detection': 'كشف مبكر للحريق',
        '-10&deg;C to 450&deg;C': 'من ‎-10°م إلى 450°م',
        '60mm Lens': 'عدسة 60 مم',
        '640&times;480 @8fps': '640×480 عند 8 إطارات/ث',
        '35mm Lens': 'عدسة 35 مم',
        'VGA + 4K Visible': 'VGA + 4K مرئي',
        '-20&deg;C to 130&deg;C': 'من ‎-20°م إلى 130°م',
        'DIS Gyro': 'تثبيت DIS Gyro',
        'WiseStream III AI': 'WiseStream III بالذكاء الاصطناعي',
        '10 Year Guarantee': 'ضمان 10 سنوات',
        '10 Year Warranty': 'ضمان 10 سنوات',
        'Fire & Smoke': 'كشف الحريق والدخان',
        'Perimeter Protection': 'حماية المحيط',
        'Smart Linkage': 'ربط ذكي',
        'Dual Channel': 'قناة مزدوجة',
        'Dual Channel 7×24h': 'قناتان على مدار 24/7',
        'Dual Channel 7&times;24h': 'قناتان على مدار 24/7',
        'Smoking Detection': 'كشف التدخين',
        'Human/Vehicle': 'تمييز إنسان/مركبة',
        'Low False Alarms': 'إنذارات كاذبة منخفضة',
        'Boat Detection': 'كشف القوارب',
        '360° Fire Scan': 'مسح حريق 360°',
        '360&deg; Fire Scan': 'مسح حريق 360°',
        'Dual PTZ Structure': 'هيكل PTZ مزدوج',
        '350m Protection': 'حماية حتى 350 م',
        '45X Zoom 4MP': 'تكبير 45X بدقة 4MP',
        '200m Alarm': 'إنذار حتى 200 م',
        'IR 2000m': 'أشعة تحت الحمراء حتى 2000 م',
        '7×24h Monitoring': 'مراقبة 24/7',
        '7&times;24h Monitoring': 'مراقبة 24/7',
        'Call Detection': 'كشف المكالمات',
        '100m IR': 'أشعة تحت الحمراء حتى 100 م',
        '40W Low Power': 'استهلاك منخفض 40W',
        '3Km Laser': 'ليزر 3 كم',
        'Compact Size': 'حجم مدمج',
        'Fire Hazard ID': 'تحديد مخاطر الحريق',
        'Magnetic Mount': 'حامل مغناطيسي',
        'Large Field Angle': 'زاوية مجال واسعة',
        'Easy Install': 'تركيب سهل',
        'Multiple Interfaces': 'واجهات متعددة',
        '1.6W Low Power': 'استهلاك منخفض 1.6W',
        'World\'s leading thermal imaging technology': 'تقنية تصوير حراري رائدة عالميا',
        'Global leader in thermal smart IoT solutions': 'رائدة عالميا في حلول إنترنت الأشياء الحرارية الذكية',
        'Premium Korean thermal imaging solutions': 'حلول تصوير حراري كورية متميزة',
        'Bi-spectrum Thermal': 'حراري ثنائي الطيف',
        'Bi-spectrum Bullet': 'كاميرا Bullet ثنائية الطيف',
        'Bi-spectrum Turret': 'كاميرا Turret ثنائية الطيف',
        'Enterprise-grade audio systems from Bose, Shure, Bosch, and Prosound. Public address solutions for offices, retail, hospitality, schools, and events. Professional speaker arrays, amplifiers, and control systems with wireless connectivity and zone-based audio control features.': 'أنظمة صوت بمستوى المؤسسات من Bose وShure وBosch وProsound. حلول نداء عام للمكاتب والمتاجر والضيافة والمدارس والفعاليات، مع سماعات ومضخمات وأنظمة تحكم احترافية واتصال لاسلكي وتحكم صوتي حسب المناطق.',
        'Professional audio systems enhance security with emergency announcements, access control integration, and two-way communication. Our portfolio includes horn speakers for outdoor alerts, ceiling presentations, and integrated public address systems. Applications span airports, banks, retail stores, schools, hospitals, industrial facilities, and outdoor areas. We partner with Shure, Bose, ProSound, and Ahuja to deliver crystal-clear audio, weather-resistant components, and scalable solutions supporting thousands of zones with centralized or distributed control.': 'تعزز أنظمة الصوت الاحترافية الأمن عبر إعلانات الطوارئ والتكامل مع التحكم بالدخول والاتصال ثنائي الاتجاه. تشمل مجموعتنا سماعات خارجية للتنبيهات، وسماعات سقفية، وأنظمة نداء عام مدمجة. تغطي الاستخدامات المطارات والبنوك والمتاجر والمدارس والمستشفيات والمنشآت الصناعية والمناطق الخارجية. نتعاون مع Shure وBose وProSound وAhuja لتقديم صوت واضح جدا ومكونات مقاومة للعوامل الجوية وحلول قابلة للتوسع تدعم آلاف المناطق بتحكم مركزي أو موزع.',
        'Premium Audio Sales': 'بيع أنظمة صوت متميزة',
        'Wide range of professional speakers, microphones, and amplifiers from global leading brands.': 'مجموعة واسعة من السماعات والميكروفونات والمضخمات الاحترافية من علامات عالمية رائدة.',
        'System Configuration': 'تهيئة النظام',
        'Expert acoustic calibration and DSP tuning for optimal sound performance in any environment.': 'معايرة صوتية احترافية وضبط DSP لأفضل أداء صوتي في أي بيئة.',
        'Professional Installation': 'تركيب احترافي',
        'Full-scale PA system integration, precise wiring, and multi-zone audio deployment.': 'تكامل كامل لأنظمة النداء العام وتمديد أسلاك دقيق ونشر صوتي متعدد المناطق.',
        'Loading Audio Product...': 'جاري تحميل منتجات الصوت...',
        'Audio Product': 'منتج صوتي',
        'Audio Product Devices': 'أجهزة منتجات الصوت',
        'Audio Product Devices': 'أجهزة الصوت',
        'Explore our range of audio solutions': 'تصفح مجموعتنا من حلول الصوت',
        'Looking for the Right Audio Solution for your space?': 'هل تبحث عن حل الصوت المناسب لمساحتك؟',
        'Looking for the Right Audio Solution': 'هل تبحث عن حل الصوت المناسب',
        'for your space?': 'لمساحتك؟',
        'Hikvision Audio Devices': 'أجهزة صوت Hikvision',
        'Bose Audio Devices': 'أجهزة صوت Bose',
        'Bosch Audio Devices': 'أجهزة صوت Bosch',
        'Shure Audio Devices': 'أجهزة صوت Shure',
        'Ahuja Audio Devices': 'أجهزة صوت Ahuja',
        'Global leader in audio systems and sound technology': 'رائدة عالميا في أنظمة الصوت وتقنيات الصوتيات',
        'Feel the Power of Performance.': 'اشعر بقوة الأداء.',
        'Intelligent Systems for a Connected World.': 'أنظمة ذكية لعالم متصل.',
        'Unrivaled Clarity. Unmatched Power.': 'وضوح لا مثيل له. قوة غير مسبوقة.',
        'Heard Everywhere. Noticed Anywhere.': 'مسموع في كل مكان. ملحوظ في أي مكان.',
        'Professional Sound. Proven Results.': 'صوت احترافي. نتائج موثوقة.',
        'We provide sales, service, and configuration for industry-leading audio systems': 'نوفر بيع وخدمة وتهيئة أنظمة صوت احترافية من العلامات الرائدة',
        'Audio Solution': 'حلول الصوت',
        'Hikvision Audio Devices Products by Brand': 'منتجات أجهزة صوت Hikvision حسب العلامة التجارية',
        'Analog Frameless Ceiling Speaker 6W': 'سماعة سقفية تناظرية بدون إطار بقدرة 6 واط',
        '6" paper basin+High note': 'مخروط ورقي 6 بوصات + نغمة عالية',
        'Max. SPL: 104 dB': 'أقصى ضغط صوت: 104 ديسيبل',
        'Frequency Response: 90 Hz to 20 kHz': 'استجابة التردد: 90 هرتز إلى 20 كيلوهرتز',
        'Analog Cabinet Speaker 3W': 'سماعة صندوقية تناظرية بقدرة 3 واط',
        'Rated Power: 3 W': 'القدرة المقننة: 3 واط',
        'Max. SPL: 96 dB': 'أقصى ضغط صوت: 96 ديسيبل',
        'Frequency Response: 200 Hz to 16 kHz': 'استجابة التردد: 200 هرتز إلى 16 كيلوهرتز',
        '2*20W 4-inch Wall-mounted Amplifier': 'مضخم جداري 2×20 واط بمكبر 4 بوصات',
        '4 inch touch screen': 'شاشة لمس 4 بوصات',
        'Supports 485 control': 'يدعم تحكم 485',
        'Supports multiple languages switching': 'يدعم التبديل بين لغات متعددة',
        '80W 2-Zone Network Amplifier': 'مضخم شبكي 80 واط بمنطقتين',
        'Rated Power: 80 W, 2 Zones': 'القدرة المقننة: 80 واط، منطقتان',
        'Support two-zone volume and content adjustment': 'يدعم ضبط مستوى الصوت والمحتوى لمنطقتين',
        'Support schedule/live/emergency broadcast, alarm linkage, TTS': 'يدعم البث المجدول/المباشر/الطارئ وربط الإنذار وTTS',
        '1000W 4-Zone Network Amplifier': 'مضخم شبكي 1000 واط بأربع مناطق',
        'Rated Power: 1000 W, 4 Zones': 'القدرة المقننة: 1000 واط، 4 مناطق',
        'Audio input: USB/Bluetooth/MIC/RCA': 'مدخلات صوت: USB/Bluetooth/MIC/RCA',
        'Network Anti-corrosion 10W Horn Speaker': 'سماعة بوق شبكية مقاومة للتآكل بقدرة 10 واط',
        'Dual-Core Stability': 'ثبات بمعالج ثنائي النواة',
        'Smart Audio Linkage': 'ربط صوتي ذكي',
        'SIP Two-way Audio': 'صوت ثنائي الاتجاه عبر SIP',
        'Frameless Ceiling Sub Speaker 6W': 'سماعة سقفية فرعية بدون إطار بقدرة 6 واط',
        'Full frequency 5" × 1': 'نطاق كامل 5 بوصات × 1',
        'Full frequency 5&quot; &times; 1': 'نطاق كامل 5 بوصات × 1',
        'Rated Power: 6 W': 'القدرة المقننة: 6 واط',
        'Sensitivity(1 m, 1 W): 88 dB': 'الحساسية (1 م، 1 واط): 88 ديسيبل',
        'FreeSpace FS2P pendant-mount loudspeakers': 'سماعات FreeSpace FS2P معلقة',
        'EN 54-24 Certified': 'معتمد EN 54-24',
        'Coverage, Horizontal 140°': 'التغطية الأفقية 140°',
        'Sensitivity (SPL/1 W at 1 m) 87 dB': 'الحساسية (SPL/1W عند 1م): 87 ديسيبل',
        'DesignMax DM8C loudspeaker': 'سماعة DesignMax DM8C',
        'Frequency Range (-10 dB) 52 Hz – 20,000 Hz': 'نطاق التردد (-10 ديسيبل): 52 هرتز - 20,000 هرتز',
        'Frequency Range (-10 dB) 52 Hz &ndash; 20,000 Hz': 'نطاق التردد (-10 ديسيبل): 52 هرتز - 20,000 هرتز',
        'Power Handling, Peak 600 W': 'تحمل القدرة (الذروة): 600 واط',
        'Coverage, Vertical 135° conical': 'التغطية الرأسية 135° مخروطية',
        'DesignMax DM6C loudspeaker': 'سماعة DesignMax DM6C',
        'Power Handling, Peak 500 W': 'تحمل القدرة (الذروة): 500 واط',
        'Coverage, Vertical 120° conical': 'التغطية الرأسية 120° مخروطية',
        'FreeSpace 3 flush-mount satellites (1 pair)': 'سماعات FreeSpace 3 مدمجة (زوج واحد)',
        '3 flush-mount': 'Flush-mount 3',
        '3 Series II': 'Series II 3',
        'FreeSpace 3 Series II bass module': 'وحدة باس FreeSpace 3 Series II',
        'Frequency Range (-10 dB) 40 Hz &ndash; 315 Hz': 'نطاق التردد (-10 ديسيبل): 40 هرتز - 315 هرتز',
        'Sensitivity (SPL/1 W at 1 m) Per channel: 76 dB / Mono: 79 dB/li>': 'الحساسية (SPL/1W عند 1م): لكل قناة 76 ديسيبل / أحادي 79 ديسيبل',
        'Coverage, Vertical Omnidirectional below 200 Hz': 'تغطية رأسية متعددة الاتجاهات تحت 200 هرتز',
        'DesignMax DM12SE 12-Inch Coaxial Surface-Mount Loudspeaker': 'سماعة DesignMax DM12SE سطحية محورية 12 بوصة',
        'Frequency Range (-10 dB) 38 Hz &ndash; 20,000 Hz': 'نطاق التردد (-10 ديسيبل): 38 هرتز - 20,000 هرتز',
        'Coverage, Horizontal 102° conical': 'التغطية الأفقية 102° مخروطية',
        'Coverage, Vertical 102° conical': 'التغطية الرأسية 102° مخروطية',
        'S1 Pro+ portable Bluetooth speaker system': 'نظام سماعة Bluetooth محمولة S1 Pro+',
        'Coverage, Horizontal 120°': 'التغطية الأفقية 120°',
        'Coverage, Vertical 50°': 'التغطية الرأسية 50°',
        'High-Frequency 3 × 2.25 in (57 mm) tweeter': 'تردد عالٍ: 3 × 2.25 بوصة (57 مم) تويتر',
        'AMM112 multipurpose loudspeaker': 'سماعة AMM112 متعددة الاستخدامات',
        'Coverage, Vertical 60°': 'التغطية الرأسية 60°',
        'Frequency Range (-10 dB) 60 Hz &ndash; 20,000 Hz': 'نطاق التردد (-10 ديسيبل): 60 هرتز - 20,000 هرتز',
        'Coverage, Horizontal 110°': 'التغطية الأفقية 110°',
        'BOSCH LBC1410/10 VOLUM CONTROL': 'متحكم مستوى الصوت BOSCH LBC1410/10',
        'German technology': 'تقنية ألمانية',
        'high quality': 'جودة عالية',
        'High quality': 'جودة عالية',
        'High quality.': 'جودة عالية',
        'Suitable for indoor or outdoor installation': 'مناسب للتركيب الداخلي أو الخارجي',
        '4-inch screen': 'مقاس 4 بوصات',
        '5-inch size': 'مقاس 5 بوصات',
        '17.5cm size': 'مقاس 17.5 سم',
        '6 watts power': 'قدرة 6 واط',
        'Bosch LHM 0606 Ceiling Speakers': 'سماعات سقفية Bosch LHM 0606',
        '16cm size': 'مقاس 16 سم',
        '6-9 watts': '6-9 واط',
        'MXN5W-C Networked Loudspeaker': 'سماعة MXN5W-C شبكية',
        'AES67 compatible': 'متوافق مع AES67',
        'UL 2043 plenum rated': 'معتمد UL 2043 Plenum',
        'PoE/PoE+ enabled': 'يدعم PoE/PoE+',
        'MXN-6 Networked Pendant Loudspeaker': 'سماعة MXN-6 معلقة شبكية',
        'PIN Code': 'رمز PIN',
        'MXN-AMP PoE+ Powered Multichannel Amplifier': 'مضخم MXN-AMP متعدد القنوات يعمل عبر PoE+',
        'rated at 14.5 watts of combined output power.': 'قدرة خرج مجمعة تصل إلى 14.5 واط.',
        'UL 2043 Plenum rated.': 'معتمد UL 2043 Plenum.',
        'MXP-1 Mini Pendant Passive Loudspeaker': 'سماعة MXP-1 سلبية معلقة صغيرة',
        'User-configurable EQ': 'معادل EQ قابل للتخصيص',
        'configurable EQ': 'EQ قابل للتخصيص',
        'Balanced Mode Radiator': 'مشع في وضع متوازن',
        'Flat-disc diaphragm': 'غشاء قرصي مسطح',
        'MXP-3 Wall Mount Passive Loudspeaker': 'سماعة MXP-3 سلبية جدارية',
        'MXP-5 Ceiling-Mount Passive Loudspeaker': 'سماعة MXP-5 سلبية سقفية',
        '4-inch main driver': 'محرك رئيسي 4 بوصات',
        'AMP PoE+ multichannel amplifier in 70/100V mode': 'مضخم AMP PoE+ متعدد القنوات بوضع 70/100V',
        'A-MXP-5-TB Tile Bridge': 'جسر بلاطة A-MXP-5-TB',
        'PA Ceiling Speaker': 'سماعة سقفية PA',
        '8W RMS': '8 واط RMS',
        '168 x H68 mm': '168 × H68 مم',
        '80-15000 Hz': '80-15000 هرتز',
        '6W RMS': '6 واط RMS',
        '230 x H75 mm': '230 × H75 مم',
        'PA Wall Speaker': 'سماعة حائط',
        '92db': '92 ديسيبل',
        '2k, 4k, 8k Ohms': '2k، 4k، 8k أوم',
        'PA Column Speakers': 'سماعات عمودية PA',
        '16 Ω, 100V': '16 أوم، 100V',
        '16 &Omega;, 100V': '16 أوم، 100V',
        '20W RMS': '20 واط RMS',
        '150-10000 Hz': '150-10000 هرتز',
        '4W RMS': '4 واط RMS',
        '160xH68 mm': '160×H68 مم',
        'PA Column Speaker': 'سماعة عمودية PA',
        '15W RMS': '15 واط RMS',
        '10W RMS': '10 واط RMS',
        '150-15000 Hz': '150-15000 هرتز',
        'Ajax, Hikvision, and Paradox wireless alarm systems with 24/7 professional monitoring. Door and window sensors, motion detectors, and panic buttons for homes, offices, and retail locations. Instant mobile notifications with rapid professional response across Saudi Arabia.': 'أنظمة إنذار لاسلكية من Ajax وHikvision وParadox مع مراقبة احترافية على مدار الساعة. حساسات أبواب ونوافذ وكواشف حركة وأزرار طوارئ للمنازل والمكاتب والمتاجر، مع إشعارات فورية على الجوال واستجابة احترافية سريعة في جميع أنحاء السعودية.',
        'Burglar alarm systems provide layered perimeter and interior protection against unauthorized intrusion. Our systems feature door and window sensors, motion detectors, glass break sensors, and panic buttons integrated with monitoring centers. Wireless and wired configurations adapt to any building layout. Advanced analytics distinguish actual threats from false alarms through AI and dual-technology sensors. Hikvision, Dahua, Ajax, and Paradox systems offer 24/7 professional monitoring, mobile app notifications, siren integration, and immediate emergency response. Ideal for retail stores, offices, banks, warehouses, and residential properties throughout Saudi Arabia.': 'توفر أنظمة إنذار السرقة حماية متعددة الطبقات للمحيط والداخل ضد الدخول غير المصرح به. تشمل أنظمتنا حساسات الأبواب والنوافذ وكواشف الحركة وكواشف كسر الزجاج وأزرار الطوارئ المتكاملة مع مراكز المراقبة. تتكيف التهيئات السلكية واللاسلكية مع أي تصميم مبنى. تميز التحليلات المتقدمة التهديدات الحقيقية عن الإنذارات الكاذبة باستخدام الذكاء الاصطناعي والحساسات مزدوجة التقنية. توفر أنظمة Hikvision وDahua وAjax وParadox مراقبة احترافية على مدار الساعة وإشعارات تطبيق الجوال وتكامل الصفارات واستجابة طوارئ فورية. مثالية للمتاجر والمكاتب والبنوك والمستودعات والمنازل في جميع أنحاء السعودية.',
        'We provide sales, installation, and configuration for advanced burglar alarm systems and security solutions': 'نوفر بيع وتركيب وتهيئة أنظمة إنذار السرقة وحلول الأمن المتقدمة',
        'Wide range of burglar alarm systems, sensors, and control panels from top brands at competitive prices': 'مجموعة واسعة من أنظمة إنذار السرقة والحساسات ولوحات التحكم من أفضل العلامات بأسعار منافسة',
        'Professional setup, zone configuration, and alarm programming for maximum security': 'إعداد احترافي وتهيئة مناطق وبرمجة إنذار لأقصى درجات الأمان',
        'Complete installation of alarm systems with sensors, sirens, and seamless system integration': 'تركيب كامل لأنظمة الإنذار مع الحساسات والصفارات وتكامل سلس للنظام',
        'Dahua ANPR and ZKTeco parking solutions with automatic number plate recognition technology. Boom barriers, vehicle sensors, and occupancy tracking for parking lots and commercial buildings. Real-time analytics and mobile payment integration for modern parking management systems.': 'حلول مواقف Dahua ANPR وZKTeco مع تقنية التعرف التلقائي على لوحات المركبات. حواجز ذراع وحساسات مركبات وتتبع إشغال للمواقف والمباني التجارية، مع تحليلات لحظية وتكامل دفع عبر الجوال لأنظمة إدارة المواقف الحديثة.',
        'Delivering end-to-end parking management solutions including smart parking systems, automated barriers, ticketing solutions, ANPR technology, and real-time monitoring for seamless vehicle flow': 'نقدم حلولا متكاملة لإدارة المواقف تشمل أنظمة مواقف ذكية وحواجز آلية وحلول تذاكر وتقنية ANPR ومراقبة لحظية لتدفق سلس للمركبات',
        'Wide range of smart parking systems including ANPR cameras, boom barriers, ticketing machines, and access control solutions from leading brands': 'مجموعة واسعة من أنظمة المواقف الذكية تشمل كاميرات ANPR وحواجز الذراع وأجهزة التذاكر وحلول التحكم بالدخول من علامات رائدة',
        'Professional setup of parking management systems including ANPR integration, access control configuration, and real-time monitoring dashboards': 'إعداد احترافي لأنظمة إدارة المواقف يشمل تكامل ANPR وتهيئة التحكم بالدخول ولوحات مراقبة لحظية',
        'Complete parking system installation including boom barriers, ANPR cameras, sensors, ticketing systems, and seamless integration with existing infrastructure': 'تركيب كامل لأنظمة المواقف يشمل حواجز الذراع وكاميرات ANPR والحساسات وأنظمة التذاكر وتكاملا سلسا مع البنية الحالية',
        'High-quality cabling, connectors, power supplies, and mounting hardware for installations. Professional-grade components for camera installation and network infrastructure projects. Complete support materials for comprehensive security and building automation system deployment nationwide.': 'كابلات وموصلات ومزودات طاقة ومعدات تثبيت عالية الجودة للتركيبات. مكونات احترافية لتركيب الكاميرات ومشاريع البنية التحتية للشبكات، مع مواد دعم كاملة لنشر أنظمة الأمن وأتمتة المباني في جميع أنحاء المملكة.',
        'Browse our complete range of security system accessories': 'تصفح مجموعتنا الكاملة من ملحقات أنظمة الأمن',
        'Search accessories...': 'ابحث في الملحقات...',
        'Cables & Connectors': 'الكابلات والموصلات',
        'Mounts & Brackets': 'التركيبات والحوامل',
        'Power Supplies': 'مزودات الطاقة',
        'Cables': 'الكابلات',
        'Mounts': 'الحوامل',
        'Power': 'الطاقة',
        'No accessories found': 'لم يتم العثور على ملحقات',
        'Need Custom Accessories?': 'هل تحتاج ملحقات مخصصة؟',
        'Contact us for specialized accessories and bulk orders': 'تواصل معنا لطلب ملحقات متخصصة وكميات الجملة',
        'Get in Touch': 'تواصل معنا',
        'Quality accessories ensure reliable system performance and longevity. We supply armored and shielded network cables, coaxial video cables, fiber optics, and connectors designed for harsh environments. Redundant power supplies, UPS units, and backup batteries maintain operation during outages. Weatherproof junction boxes, cable trays, camera mounts, and conduit protect installations from environmental damage. Professional-grade accessories from leading manufacturers ensure compliance with industry standards and system warranties. Complete inventory includes surge protectors, passive PoE splitters, fiber converters, and video baluns for every surveillance and access control application across Saudi Arabian installations.': 'تضمن الملحقات عالية الجودة أداء موثوقا للنظام وعمر تشغيل أطول. نوفر كابلات شبكة مدرعة ومحصنة وكابلات فيديو محورية وألياف بصرية وموصلات مصممة للبيئات القاسية. مزودات الطاقة الاحتياطية ووحدات UPS والبطاريات الاحتياطية تحافظ على التشغيل أثناء الانقطاع. صناديق التوصيل المقاومة للعوامل الجوية ومجاري الكابلات وحوامل الكاميرات والأنابيب الواقية تحمي التركيبات من الأضرار البيئية. الملحقات الاحترافية من الشركات الرائدة تضمن الالتزام بالمعايير وضمانات الأنظمة. يشمل مخزوننا الكامل مانعات الارتفاع المفاجئ ومقسمات PoE السلبية ومحولات الألياف وفيديو Balun لكل تطبيقات المراقبة والتحكم بالدخول في منشآت السعودية.',
        'Cat6 Network Cable': 'كابل شبكة Cat6',
        'High-speed Ethernet cable for reliable data transmission': 'كابل إيثرنت عالي السرعة لنقل بيانات موثوق',
        'Length: 305m/roll': 'الطول: 305م/لفة',
        'Speed: Up to 10Gbps': 'السرعة: حتى 10Gbps',
        'HDMI Cable 4K': 'كابل HDMI 4K',
        'Premium HDMI cable for crystal clear video output': 'كابل HDMI ممتاز لإخراج فيديو فائق الوضوح',
        'Resolution: 4K@60Hz': 'الدقة: 4K@60Hz',
        'Length: 1.5m - 10m': 'الطول: 1.5م - 10م',
        'BNC Connector Kit': 'طقم موصلات BNC',
        'Professional BNC connectors for CCTV systems': 'موصلات BNC احترافية لأنظمة CCTV',
        'Type: Male/Female': 'النوع: ذكر/أنثى',
        'Material: Brass': 'المادة: نحاس',
        'RJ45 Connector Pack': 'حزمة موصلات RJ45',
        'High-quality RJ45 connectors for network cables': 'موصلات RJ45 عالية الجودة لكابلات الشبكة',
        'Quantity: 100pcs': 'الكمية: 100 قطعة',
        'Category: Cat5e/Cat6': 'الفئة: Cat5e/Cat6',
        'Wall Mount Bracket': 'حامل جداري',
        'Heavy-duty wall mount for dome cameras': 'حامل جداري قوي لكاميرات Dome',
        'Material: Aluminum': 'المادة: ألمنيوم',
        'Load: Up to 5kg': 'الحمولة: حتى 5 كجم',
        'Ceiling Mount': 'حامل سقفي',
        'Adjustable ceiling mount for PTZ cameras': 'حامل سقفي قابل للتعديل لكاميرات PTZ',
        'Rotation: 360°': 'الدوران: 360°',
        'Color: White/Black': 'اللون: أبيض/أسود',
        'Pole Mount Adapter': 'مهايئ حامل عمودي',
        'Universal pole mount for outdoor cameras': 'حامل عمودي عالمي للكاميرات الخارجية',
        'Pole Diameter: 60-150mm': 'قطر العمود: 60-150 مم',
        'Junction Box': 'علبة توصيل',
        'Waterproof junction box for cable management': 'علبة توصيل مقاومة للماء لإدارة الكابلات',
        'IP66 Rated': 'تصنيف IP66',
        'Size: Various': 'المقاس: متنوع',
        '12V DC Power Supply': 'مزود طاقة 12V DC',
        'Reliable power supply for CCTV cameras': 'مزود طاقة موثوق لكاميرات CCTV',
        'Output: 12V/2A': 'الخرج: 12V/2A',
        'Protection: OVP/OCP': 'الحماية: OVP/OCP',
        'PoE Injector': 'حاقن PoE',
        'Power over Ethernet injector for IP cameras': 'حاقن طاقة عبر الإيثرنت لكاميرات IP',
        'Power: 30W/60W': 'القدرة: 30W/60W',
        'UPS Battery Backup': 'بطارية احتياطية UPS',
        'Uninterruptible power supply for DVR/NVR': 'مزود طاقة غير منقطع لأجهزة DVR/NVR',
        'Capacity: 650VA-3000VA': 'السعة: 650VA-3000VA',
        'Backup: 15-60 min': 'الاحتياطي: 15-60 دقيقة',
        'Multi-Channel Power Box': 'صندوق طاقة متعدد القنوات',
        'Centralized power distribution for multiple cameras': 'توزيع طاقة مركزي لعدة كاميرات',
        'Channels: 4/8/16': 'القنوات: 4/8/16',
        'Output: 12V DC': 'الخرج: 12V DC',
        'Surveillance HDD': 'قرص مراقبة',
        '24/7 rated hard drive for video recording': 'قرص صلب مخصص للتسجيل 24/7',
        'Capacity: 1TB-10TB': 'السعة: 1TB-10TB',
        'Cache: 256MB': 'الكاش: 256MB',
        'MicroSD Card': 'بطاقة MicroSD',
        'High endurance memory card for cameras': 'بطاقة ذاكرة عالية التحمل للكاميرات',
        'Capacity: 32GB-256GB': 'السعة: 32GB-256GB',
        'Speed: Class 10': 'السرعة: Class 10',
        'SSD Storage Drive': 'قرص SSD للتخزين',
        'Solid state drive for fast video access': 'قرص SSD للوصول السريع للفيديو',
        'Capacity: 256GB-2TB': 'السعة: 256GB-2TB',
        'Interface: SATA III': 'الواجهة: SATA III',
        'Crimping Tool Set': 'طقم أداة كبس',
        'Professional RJ45/RJ11 crimping tool kit': 'طقم احترافي لكبس RJ45/RJ11',
        'Includes stripper': 'يشمل أداة تقشير',
        'Ratchet mechanism': 'آلية راتشت',
        'Cable Tester': 'فاحص كابلات',
        'Network cable continuity tester': 'جهاز فحص استمرارية كابلات الشبكة',
        'Tests: RJ45/RJ11': 'اختبارات: RJ45/RJ11',
        'LED indicators': 'مؤشرات LED',
        'HDMI Splitter Green': 'موزع HDMI Green',
        'High-quality HDMI splitter for multiple displays': 'موزع HDMI عالي الجودة لعدة شاشات',
        'Ports: 2, 4, 8': 'المنافذ: 2، 4، 8',
        'Resolution: 4K supported': 'الدقة: يدعم 4K',
        'HDMI KVM Extender': 'موسع HDMI KVM',
        'Extend HDMI signal over long distances': 'تمديد إشارة HDMI لمسافات طويلة',
        'Range: 60M, 120M, 200M': 'المدى: 60م، 120م، 200م',
        'Supports KVM control': 'يدعم تحكم KVM',
        'Video Balun 8MP Yellow Prime': 'فيديو Balun 8MP Yellow Prime',
        'High-quality video balun for CCTV systems': 'فيديو Balun عالي الجودة لأنظمة CCTV',
        'Resolution: Up to 8MP': 'الدقة: حتى 8MP',
        'Type: Yellow Prime': 'النوع: Yellow Prime',
        'RG59 Power Cable 300Y': 'كابل طاقة RG59 بطول 300Y',
        'Coaxial cable with power for CCTV installations': 'كابل محوري مع طاقة لتركيبات CCTV',
        'Length: 300 yards': 'الطول: 300 ياردة',
        'Type: RG59 + Power': 'النوع: RG59 + طاقة',
        'Round Junction Box - Plastic': 'علبة توصيل دائرية - بلاستيك',
        'Plastic junction box for camera mounting': 'علبة توصيل بلاستيكية لتركيب الكاميرا',
        'Material: Durable Plastic': 'المادة: بلاستيك متين',
        'Shape: Round': 'الشكل: دائري',
        'U-Bracket': 'حامل U',
        'Universal U-shaped mounting bracket': 'حامل تثبيت عالمي بشكل U',
        'Material: Steel': 'المادة: فولاذ',
        'Type: Universal fit': 'النوع: ملاءمة عامة',
        'Z-Bracket': 'حامل Z',
        'Z-shaped bracket for access control installation': 'حامل بشكل Z لتركيب التحكم بالدخول',
        'For: EM Locks': 'لـ: أقفال EM',
        'CCTV Cabinet': 'خزانة CCTV',
        'Secure cabinet for DVR/NVR and equipment': 'خزانة آمنة لأجهزة DVR/NVR والمعدات',
        'Lockable design': 'تصميم قابل للقفل',
        'Ventilated': 'مهواة',
        'PDU 6 Way Plastic': 'PDU بلاستيك 6 مخارج',
        'Power distribution unit with 6 outlets': 'وحدة توزيع طاقة مع 6 مخارج',
        'Outlets: 6 Way': 'المخارج: 6 منافذ',
        'Material: Plastic': 'المادة: بلاستيك',
        'PoE Extender with Waterproof Case': 'موسع PoE مع غلاف مقاوم للماء',
        '4-Channel PoE extender for outdoor use': 'موسع PoE بأربع قنوات للاستخدام الخارجي',
        'Channels: 4CH': 'القنوات: 4CH',
        'Waterproof enclosure': 'غلاف مقاوم للماء',
        '12V5A AC Bell Adapter': 'محول جرس AC 12V5A',
        'Power adapter for bell and access control systems': 'محول طاقة لأنظمة الجرس والتحكم بالدخول',
        'Output: 12V / 5A': 'الخرج: 12V / 5A',
        'Type: AC Adapter': 'النوع: محول AC',
        'PoE Extender': 'موسع PoE',
        'Extend PoE signal over longer distances': 'تمديد إشارة PoE لمسافات أطول',
        'Plug and play': 'تشغيل فوري',
        'Vision Pendrive': 'ذاكرة Vision USB',
        'Portable USB flash drive for data transfer': 'ذاكرة USB محمولة لنقل البيانات',
        'USB 3.0': 'USB 3.0',
        'Various capacities': 'سعات متنوعة',
        'Cisco and Grandstream IP phone systems for modern business communications and enterprise telephony. VoIP solutions with video calling, collaboration features, and mobile integration capabilities. Professional installation and ongoing support for offices and contact centers across Saudi Arabia.': 'أنظمة هواتف IP من Cisco وGrandstream لاتصالات الأعمال الحديثة والاتصالات الهاتفية المؤسسية. حلول VoIP مع مكالمات فيديو وميزات تعاون وتكامل مع الجوال، مع تركيب احترافي ودعم مستمر للمكاتب ومراكز الاتصال في جميع أنحاء السعودية.',
        'IP phones replace traditional circuit-switched systems with cost-effective, feature-rich VoIP connectivity. Our phones include feature-rich desk phones with color displays, wireless mobile phones, and conference phones for meeting rooms. Features include call transfer, voicemail, conferencing, directory integration, and screen-sharing. Ideal for corporate offices, call centers, and multi-site deployments. Cisco, Grandstream, and Hikvision phones integrate with industry-standard PBX systems like Asterisk and Cisco Call Manager. Secure encryption, emergency alerting, and disaster recovery ensure reliable communication across your enterprise locations throughout Saudi Arabia and international operations.': 'تستبدل هواتف IP الأنظمة التقليدية باتصال VoIP اقتصادي وغني بالميزات. تشمل هواتف مكتبية بشاشات ملونة وهواتف لاسلكية وهواتف مؤتمرات لغرف الاجتماعات. تشمل الميزات تحويل المكالمات والبريد الصوتي والمؤتمرات وتكامل الدليل ومشاركة الشاشة. مثالية للمكاتب ومراكز الاتصال والفروع المتعددة. تتكامل هواتف Cisco وGrandstream وHikvision مع أنظمة PBX القياسية مثل Asterisk وCisco Call Manager. يضمن التشفير الآمن وتنبيهات الطوارئ والتعافي من الأعطال اتصالا موثوقا عبر مواقع المؤسسة داخل السعودية والعمليات الدولية.',
        'We provide sales, service, and configuration for industry-leading IP phone systems': 'نوفر بيع وخدمة وتهيئة أنظمة هواتف IP من العلامات الرائدة',
        'Wide range of IP phones from leading brands like Cisco, Grandstream, and more at competitive prices': 'مجموعة واسعة من هواتف IP من علامات رائدة مثل Cisco وGrandstream وغيرها بأسعار منافسة',
        'Complete IP phone setup including SIP configuration, extensions, and VoIP integration': 'إعداد كامل لهواتف IP يشمل تهيئة SIP والتحويلات وتكامل VoIP',
        'Professional installation with network setup, cabling, and seamless integration into your communication system': 'تركيب احترافي مع إعداد الشبكة والكابلات وتكامل سلس مع نظام الاتصال لديك',
        'Grandstream IP Phones': 'هواتف Grandstream IP',
        'Cisco IP Phones': 'هواتف Cisco IP',
        'Leading provider of IP voice, video, data, and unified communication solutions': 'مزود رائد لحلول الصوت والفيديو والبيانات والاتصالات الموحدة عبر IP',
        'Global leader in networking, IP telephony, and enterprise communication solutions': 'رائد عالمي في الشبكات والاتصالات الهاتفية عبر IP وحلول اتصالات المؤسسات',
        'UCM6300 series': 'سلسلة UCM6300',
        'UCM6300 Series': 'سلسلة UCM6300',
        'Supports up to 3000 users': 'يدعم حتى 3000 مستخدم',
        '450 concurrent calls': '450 مكالمة متزامنة',
        'GDMS for cloud setup': 'GDMS للإعداد السحابي',
        'UCM6300 Audio Series': 'سلسلة UCM6300 الصوتية',
        'UCM6300 Audio Series of IP PBXs': 'سلسلة UCM6300 Audio من أنظمة IP PBX',
        'Supports up to 1500 users': 'يدعم حتى 1500 مستخدم',
        'Built-in Instant Messaging (IM)': 'مراسلة فورية مدمجة (IM)',
        'The GRP2602 features 5-way voice conferencing': 'يدعم GRP2602 مؤتمرات صوتية بخمسة أطراف',
        'The GRP2601 features 5-way voice conferencing': 'يدعم GRP2601 مؤتمرات صوتية بخمسة أطراف',
        'Electronic Hook Switch (EHS)': 'مفتاح تعليق إلكتروني (EHS)',
        'Electronic Hook Switch (EHS) ': 'مفتاح تعليق إلكتروني (EHS)',
        'Full-duplex speakerphone': 'مكبر صوت ثنائي الاتجاه',
        'Enterprise-level protection': 'حماية على مستوى المؤسسات',
        'Noise shield technology': 'تقنية عزل الضوضاء',
        'Wi-Fi support (GRP2601W)': 'دعم Wi-Fi (GRP2601W)',
        'Integrated PoE (GRP2601P)': 'PoE مدمج (GRP2601P)',
        'Our most powerful High-End IP Phone': 'أقوى هاتف IP عالي الفئة لدينا',
        'Dual Gigabit ports': 'منفذا Gigabit مزدوجان',
        'Integrated Bluetooth': 'Bluetooth مدمج',
        '4.3 inch (480x272) color-screen LCD': 'شاشة LCD ملونة 4.3 بوصة (480x272)',
        'Take control of your call volume with the GXP2160': 'تحكم بحجم مكالماتك مع GXP2160',
        '24 dual-colored BLF': '24 مفتاح BLF ثنائي اللون',
        'Speed dial keys': 'مفاتيح اتصال سريع',
        'Cisco Phone 9800 Series': 'سلسلة هواتف Cisco 9800',
        'Desk reservations': 'حجز المكاتب',
        'Cisco Unified Communication Manager': 'مدير الاتصالات الموحدة من Cisco',
        'AI for noise removal': 'ذكاء اصطناعي لإزالة الضوضاء',
        'Cisco Phone 8800 Series': 'سلسلة هواتف Cisco 8800',
        'Access your Contacts': 'الوصول إلى جهات الاتصال',
        'Access your Calendar': 'الوصول إلى التقويم',
        'Noise Removal Technology': 'تقنية إزالة الضوضاء',
        'Cisco Phone 7800 Series': 'سلسلة هواتف Cisco 7800',
        'Intuitive interface': 'واجهة سهلة الاستخدام',
        'Speaker technologies': 'تقنيات السماعات',
        'Controls.': 'عناصر تحكم',
        'Cisco Phone 6800 Series': 'سلسلة هواتف Cisco 6800',
        'Multiplatform phone line': 'خط هاتف متعدد المنصات',
        'IP communications system': 'نظام اتصالات IP',
        'Crystal-clear wideband audio': 'صوت واسع النطاق فائق النقاء',
        'Conference Phones': 'هواتف المؤتمرات',
        'Cisco IP Conference Phone 8832': 'هاتف المؤتمرات Cisco IP 8832',
        'High-quality wideband audio': 'صوت واسع النطاق عالي الجودة',
        '360-degree coverage': 'تغطية 360 درجة',
        '26 attendees': '26 مشاركا',
        'Headset 720 Series': 'سلسلة Headset 720',
        'Cisco Headset 720 Series': 'سلسلة Cisco Headset 720',
        'Voice-activated': 'تنشيط صوتي',
        'All-day comfort': 'راحة طوال اليوم',
        'Lightweight case': 'حافظة خفيفة الوزن',
        'Headset 320 Series': 'سلسلة Headset 320',
        'Cisco Headset 320 Series': 'سلسلة Cisco Headset 320',
        'Lightweight design': 'تصميم خفيف الوزن',
        'in-ear notification': 'تنبيه داخل الأذن',
        'LED button': 'زر LED',
        'Need Help Choosing the Right IP Phone System?': 'هل تحتاج مساعدة لاختيار نظام هواتف IP المناسب؟',
        'Our experts are here to help you find the perfect solution for your security needs': 'خبراؤنا هنا لمساعدتك في اختيار الحل الأنسب لاحتياجات اتصالاتك',
        'Complete Kit': 'طقم كامل',
        '2-Wire System': 'نظام بسلكين',
        '2MP Wide Angle': 'زاوية واسعة 2 ميجابكسل',
        'Wide Angle': 'زاوية واسعة',
        'PIN Code': 'رمز PIN',
        'Mifare Card': 'بطاقة Mifare',
        'Optical Fingerprint': 'بصمة ضوئية',
        'Mask Detection': 'كشف الكمامة',
        'AI Deep Learning': 'تعلم عميق بالذكاء الاصطناعي',
        'Standalone': 'مستقل',
        'Face Anti-spoofing': 'مكافحة تزييف الوجه',
        'Standalone Fingerprint': 'بصمة مستقلة',
        'High Refresh Rate': 'معدل تحديث عال',
        'Seamless Splicing': 'دمج سلس',
        'Premium Quality': 'جودة ممتازة',
        'Energy Efficient': 'كفاءة في استهلاك الطاقة',
        'Long Lifespan': 'عمر تشغيلي طويل',
        'Single Lane': 'مسار واحد',
        'Dual-Lane': 'مساران',
        'High Throughput': 'مرور عالي الكفاءة',
        'Acrylic Wings': 'أجنحة أكريليك',
        'Low Maintenance': 'صيانة منخفضة',
        'Single Lane Flap Barrier Turnstile': 'دوار بوابة أجنحة بمسار واحد',
        'Dual-Lane Swing Barrier Turnstile': 'دوار بوابة متأرجحة بمسارين',
        'Switchable Panel': 'لوحة قابلة للتبديل',
        '50-Point Touch': 'لمس 50 نقطة',
        'EDLA Certified': 'معتمد EDLA',
        'Environmental Sensors': 'حساسات بيئية',
        'Smoke Detection': 'كشف الدخان',
        'Fire & Smoke Detection': 'كشف الحريق والدخان',
        'Smart Hybrid Light': 'إضاءة هجينة ذكية',
        'GUANLAN AI Model': 'نموذج GUANLAN للذكاء الاصطناعي',
        'Max. SPL': 'أقصى مستوى ضغط صوت',
        'Frequency Response': 'استجابة التردد',
        'Instant Messaging': 'مراسلة فورية',
        'The UCM6300 series of IP PBXs': 'سلسلة UCM6300 من أنظمة IP PBX',
        'The GRP2604 features 5-way voice conferencing': 'يدعم GRP2604 مؤتمرات صوتية بخمسة أطراف',
        'Free Wave App': 'تطبيق Wave مجاني',
        'Quick pass': 'مرور سريع',
        'Supplement light': 'إضاءة مساعدة',
        'Anti-vehicle following mode': 'وضع منع تتبع المركبات',
        'All-in-One Entrance & Exit Manager': 'مدير دخول وخروج شامل',
        'All-in-one E&E machine with capture unit, straight boom pole and LCD': 'جهاز دخول وخروج شامل مع وحدة التقاط وذراع مستقيم وشاشة LCD',
        'LCD: 21.5 inch': 'شاشة LCD مقاس 21.5 بوصة',
        'Advanced smart parking solutions with ANPR technology, access control, and real-time vehicle monitoring': 'حلول مواقف ذكية متقدمة بتقنية قراءة اللوحات والتحكم بالدخول ومراقبة المركبات لحظيا',
        'Innovative parking management systems with automated barriers, ticketing, and biometric access solutions': 'أنظمة مبتكرة لإدارة المواقف تشمل الحواجز الآلية والتذاكر وحلول الدخول الحيوي',
        'Advanced parking management solutions featuring smart ANPR systems, automated barriers, surveillance integration, and intelligent traffic control': 'حلول متقدمة لإدارة المواقف تشمل أنظمة ANPR الذكية والحواجز الآلية وتكامل المراقبة والتحكم الذكي بالحركة',
        'concurrent calls': 'مكالمة متزامنة',
        'up to': 'حتى',
        'Up to': 'حتى',
        'Weatherproof Design': 'تصميم مقاوم للعوامل الجوية',
        'High Performance': 'أداء عال',
        'Smart Detection': 'كشف ذكي',
        'Motion Detection': 'كشف الحركة',
        'People Counting': 'عد الأشخاص',
        'Active Defense': 'دفاع نشط',
        'Auto-Tracking': 'تتبع تلقائي',
        'Two-way': 'ثنائي الاتجاه',
        'Wireless': 'لاسلكي',
        'Wired': 'سلكي',
        'Waterproof': 'مقاوم للماء',

        // Targeted overrides for mixed Arabic-English strings seen on Buglar Alarm and Audio pages.
        'Ajax Burglar Alarm': 'إنذار سرقة Ajax',
        'Paradox Burglar Alarm': 'إنذار سرقة Paradox',
        'Hikvision Burglar Alarm': 'إنذار سرقة Hikvision',
        'Dahua Burglar Alarm': 'إنذار سرقة Dahua',
        'Burglar Alarm Devices': 'أجهزة إنذار السرقة',
        'Burglar Alarm Features': 'ميزات إنذار السرقة',
        'Upto 999 devices': 'حتى 999 جهازا',
        'Upto 100 security group': 'حتى 100 مجموعة أمنية',
        'Upto 1000 users': 'حتى 1000 مستخدم',
        'Up to 250 devices': 'حتى 250 جهازا',
        'Up to 200 users': 'حتى 200 مستخدما',
        'Up to 5 range extenders': 'حتى 5 موسعات مدى',
        'Up to 1,200 m': 'حتى 1,200 م',
        'Encrypted two-way radio communication': 'اتصال لاسلكي ثنائي الاتجاه مشفر',
        'Automatic power adjustment': 'ضبط تلقائي للطاقة',
        'Long-lasting performance': 'أداء طويل الأمد',
        'Early low battery notifications': 'تنبيهات مبكرة لانخفاض البطارية',
        'M Head Unit / Console': 'وحدة تحكم M الرئيسية',
        'Hybrid wireless': 'لاسلكي هجين',
        'Built-in M wireless': 'لاسلكي M مدمج',
        'Door/Window Magnetic Contact + Zone': 'حساس مغناطيسي للباب/النافذة + منطقة',
        'magnet and wired input': 'حساس مغناطيسي وإدخال سلكي',
        'M In-Frame Magnetic Contact': 'حساس مغناطيسي M داخل الإطار',
        '6+ years of battery': 'بطارية +6 سنوات',
        'Slim, ultra small': 'نحيف وصغير جدا',
        'Water and oil detection': 'كشف الماء والزيت',
        'M Digital Dual Optic Motion Detector with Pet Immunity': 'كاشف حركة رقمي M بعدستين مع تجاهل الحيوانات الأليفة',
        'M Wireless 8-Function Remote': 'ريموت M لاسلكي بـ 8 وظائف',
        'M Outdoor Siren': 'صافرة خارجية M',
        'M Chime and Sound Player': 'جرس ومشغل صوت M',
        '6 zone chime alarm tones': 'نغمات جرس إنذار لـ 6 مناطق',
        'Dahua Wireless Door Detector': 'كاشف باب لاسلكي Dahua',
        'Wireless Carbon Monoxide Alarm': 'إنذار أول أكسيد الكربون لاسلكي',
        'CO alarm': 'إنذار CO',
        'Dahua Wireless External Triple-Tech Detector': 'كاشف Dahua لاسلكي خارجي ثلاثي التقنية',
        'Anti-masking detection': 'كشف مضاد للإخفاء',
        'glass is broken': 'كشف كسر الزجاج',
        'Split-spectrum sensor': 'حساس متعدد الطيف',
        'Dahua Wireless Siren': 'صافرة Dahua لاسلكية',
        'Alarm Repeater Pro': 'مكرر إنذار Pro',
        '100-240 VAC': '100-240 فولت AC',
        'PIR-CAM Module': 'وحدة PIR-CAM',
        'low luminance': 'إضاءة منخفضة',
        'high definition image': 'صورة عالية الدقة',
        'Dahua Wireless Keyfob': 'ريموت Dahua لاسلكي',
        'SOS emergency call': 'نداء طوارئ SOS',
        'Dual SIM cards': 'شريحتي SIM',
        'Max. 50 entries': 'حتى 50 إدخالا',
        'Arm and disarm your alarm system remotely using smartphone apps': 'تحكم بتفعيل وإلغاء نظام الإنذار عن بعد عبر تطبيقات الهاتف الذكي',
        'Instant notifications for intrusion, tampering, or system status updates': 'تنبيهات فورية عند التسلل أو العبث أو تحديثات حالة النظام',
        'High-precision motion sensors, door contacts, and glass break detection': 'حساسات حركة عالية الدقة وحساسات أبواب وكشف كسر الزجاج',
        'Secure multiple areas with customizable zones and user access control': 'أمّن مناطق متعددة عبر مناطق قابلة للتخصيص وتحكم بصلاحيات المستخدمين',
        'Hikvision AUDIO': 'أجهزة صوت Hikvision',
        'Bose AUDIO': 'أجهزة صوت Bose',
        'Bosch AUDIO': 'أجهزة صوت Bosch',
        'Shure AUDIO': 'أجهزة صوت Shure',
        'AHUJA AUDIO': 'أجهزة صوت Ahuja',
        'support two-zone volume and content adjustment': 'يدعم ضبط مستوى الصوت والمحتوى لمنطقتين',
        'support schedule/live/emergency broadcast, alarm linkage, TTS': 'يدعم البث المجدول/المباشر/الطارئ وربط الإنذار وTTS'
    };

    Object.assign(exactTranslations, exactProductTranslations);

    const phraseReplacements = [
        [/\bWorld's Leading Manufacturer of Comprehensive Video Surveillance & Smart Security Solutions\b/g, 'شركة رائدة عالميا في حلول المراقبة بالفيديو والأمن الذكي الشاملة'],
        [/\bWorld's leading\b/gi, 'رائدة عالميا في'],
        [/\bWorld leader in\b/gi, 'رائدة عالميا في'],
        [/\bGlobal leader in\b/gi, 'رائدة عالميا في'],
        [/\bLeading provider of\b/gi, 'مزود رائد لـ'],
        [/\bLeading the Future of\b/gi, 'تقود مستقبل'],
        [/\bmanufacturer\b/gi, 'التصنيع'],
        [/\bprovider\b/gi, 'مزود'],
        [/\beducation\b/gi, 'التعليم'],
        [/\benterprise\b/gi, 'المؤسسات'],
        [/\bbusiness\b/gi, 'الأعمال'],
        [/\bcollaboration\b/gi, 'التعاون'],
        [/\bapplications\b/gi, 'التطبيقات'],
        [/\btechnology\b/gi, 'التقنية'],
        [/\bplatform\b/gi, 'منصة'],
        [/\bperformance\b/gi, 'الأداء'],
        [/\bclarity\b/gi, 'الوضوح'],
        [/\bpower\b/gi, 'القوة'],
        [/\bFuture\b/g, 'مستقبل'],
        [/\bComplete Product Range\b/gi, 'مجموعة منتجات كاملة'],
        [/\bReady to Upgrade Your\b/gi, 'هل أنت جاهز لترقية'],
        [/\bSystem\?\b/gi, 'نظامك؟'],
        [/\bSystem²\b/gi, 'نظامك؟'],
        [/\bSystem\b/gi, 'نظام'],
        [/\bexperts are here to help you find the perfect\b/gi, 'خبراؤنا هنا لمساعدتك في اختيار'],
        [/\bOur Services\b/gi, 'خدماتنا'],
        [/\bOur Expertise\b/gi, 'خبراتنا'],
        [/\bOur\s+الخدمات\b/gi, 'خدماتنا'],
        [/\bOur\s+IP هاتف Services\b/gi, 'خدمات هواتف IP'],
        [/\bOur\b/gi, ''],
        [/\b(\d+)-inch\b/gi, '$1 بوصة'],
        [/\b(\d+)"\s*(LCD|TFT|IPS)?\s*Touch Screen\b/gi, 'شاشة لمس $1 بوصة'],
        [/\b(\d+)"\s*Touch Display\b/gi, 'شاشة لمس $1 بوصة'],
        [/\b(\d+)\s*MP\b/gi, '$1 ميجابكسل'],
        [/\b(\d+)MP\b/gi, '$1 ميجابكسل'],
        [/\b(\d+)CH\b/gi, '$1 قناة'],
        [/\b(\d+)-ch\b/gi, '$1 قناة'],
        [/\b(\d+)-Channel\b/gi, '$1 قنوات'],
        [/\b(\d+)-Zone\b/gi, '$1 مناطق'],
        [/\b(\d+)\s*Output Ports\b/gi, '$1 منافذ إخراج'],
        [/\b(\d+)\s*Ports\b/gi, '$1 منافذ'],
        [/\b(\d+)-Port\b/gi, '$1 منافذ'],
        [/\b(\d+)\s*Users\b/gi, '$1 مستخدم'],
        [/\b(\d+)\s*Faces\b/gi, '$1 وجه'],
        [/\b(\d+)\s*Cards\b/gi, '$1 بطاقة'],
        [/\b(\d+)\s*Fingerprints\b/gi, '$1 بصمة'],
        [/\b(\d+)\s*Templates\b/gi, '$1 قالب'],
        [/\bHD Video\b/gi, 'فيديو عالي الجودة'],
        [/\bHD\b/g, 'عالي الجودة'],
        [/\bCrystal clear\b/gi, 'واضح جدا'],
        [/\bsmartphone\b/gi, 'الهاتف الذكي'],
        [/\bsmartphone apps\b/gi, 'تطبيقات الهاتف الذكي'],
        [/\bAnswer calls\b/gi, 'الرد على المكالمات'],
        [/\banywhere\b/gi, 'من أي مكان'],
        [/\bthe world\b/gi, 'العالم'],
        [/\bvisitor verification\b/gi, 'التحقق من الزوار'],
        [/\bdoor unlock\b/gi, 'فتح الباب'],
        [/\bintegrated door locks\b/gi, 'أقفال أبواب مدمجة'],
        [/\bdoor locks\b/gi, 'أقفال الأبواب'],
        [/\bsecure visitor screening\b/gi, 'فحص آمن للزوار'],
        [/\bhigh-definition\b/gi, 'عالي الدقة'],
        [/\bcommunication\b/gi, 'اتصال'],
        [/\bcommercial facilities\b/gi, 'المنشآت التجارية'],
        [/\bapartment buildings\b/gi, 'المباني السكنية'],
        [/\boffices\b/gi, 'المكاتب'],
        [/\binstalled nationwide\b/gi, 'في جميع أنحاء المملكة'],
        [/\bCloud-enabled\b/gi, 'مدعوم بالسحابة'],
        [/\bremote\b/gi, 'عن بعد'],
        [/\bresidential apartment systems\b/gi, 'أنظمة الشقق السكنية'],
        [/\bcommercial office intercoms\b/gi, 'إنتركم المكاتب التجارية'],
        [/\bindustrial emergency stations\b/gi, 'محطات الطوارئ الصناعية'],
        [/\bcall recording\b/gi, 'تسجيل المكالمات'],
        [/\bemergency buttons\b/gi, 'أزرار الطوارئ'],
        [/\bIP-based connectivity\b/gi, 'اتصال قائم على IP'],
        [/\bworldwide\b/gi, 'عالميا'],
        [/\baccounts\b/gi, 'حسابات'],
        [/\bmonitors\b/gi, 'شاشات'],
        [/\bMultiple\b/gi, 'متعدد'],
        [/\bMulti-user\b/gi, 'متعدد المستخدمين'],
        [/\bMulti-User\b/gi, 'متعدد المستخدمين'],
        [/\bcapability\b/gi, 'إمكانية'],
        [/\bcapabilities\b/gi, 'إمكانيات'],
        [/\bproper wiring\b/gi, 'تمديد أسلاك صحيح'],
        [/\bwiring\b/gi, 'تمديد الأسلاك'],
        [/\btop brands\b/gi, 'أفضل العلامات'],
        [/\bcompetitive prices\b/gi, 'أسعار منافسة'],
        [/\bsetup\b/gi, 'إعداد'],
        [/\bconfiguration\b/gi, 'تهيئة'],
        [/\bsales\b/gi, 'مبيعات'],
        [/\bservice\b/gi, 'خدمة'],
        [/\bPixel Pitch\b/gi, 'درجة البكسل'],
        [/\bPitch\b/gi, 'درجة البكسل'],
        [/\bResolution\b/gi, 'الدقة'],
        [/\bBrightness\b/gi, 'السطوع'],
        [/\bTouch Screen\b/gi, 'شاشة لمس'],
        [/\bTouch Display\b/gi, 'شاشة لمس'],
        [/\bInteractive Display\b/gi, 'شاشة تفاعلية'],
        [/\bInteractive Whiteboard\b/gi, 'سبورة تفاعلية'],
        [/\bNetwork Video Recorder\b/gi, 'مسجل فيديو شبكي'],
        [/\bNetwork Camera\b/gi, 'كاميرا شبكية'],
        [/\bCamera\b/gi, 'كاميرا'],
        [/\bCameras\b/gi, 'كاميرات'],
        [/\bRecorder\b/gi, 'مسجل'],
        [/\bMonitor\b/gi, 'شاشة'],
        [/\bDisplay\b/gi, 'شاشة'],
        [/\bDisplays\b/gi, 'شاشات'],
        [/\bPanel\b/gi, 'لوحة'],
        [/\bController\b/gi, 'وحدة تحكم'],
        [/\bReader\b/gi, 'قارئ'],
        [/\bTerminal\b/gi, 'جهاز'],
        [/\bDetector\b/gi, 'كاشف'],
        [/\bSensor\b/gi, 'حساس'],
        [/\bSpeaker\b/gi, 'سماعة'],
        [/\bAmplifier\b/gi, 'مضخم'],
        [/\bMicrophone\b/gi, 'ميكروفون'],
        [/\bModule\b/gi, 'وحدة'],
        [/\bBracket\b/gi, 'حامل'],
        [/\bAdapter\b/gi, 'محول'],
        [/\bPower Supply\b/gi, 'مزود طاقة'],
        [/\bBattery\b/gi, 'بطارية'],
        [/\bWireless\b/gi, 'لاسلكي'],
        [/\bWired\b/gi, 'سلكي'],
        [/\bSmart\b/gi, 'ذكي'],
        [/\bProfessional\b/gi, 'احترافي'],
        [/\bIndoor\b/gi, 'داخلي'],
        [/\bOutdoor\b/gi, 'خارجي'],
        [/\bWaterproof\b/gi, 'مقاوم للماء'],
        [/\bWeather-resistant\b/gi, 'مقاوم للعوامل الجوية'],
        [/\bWeather Resistant\b/gi, 'مقاوم للعوامل الجوية'],
        [/\bAnti-corrosion\b/gi, 'مقاوم للتآكل'],
        [/\bAnti-Corrosion\b/gi, 'مقاوم للتآكل'],
        [/\bBuilt-in\b/gi, 'مدمج'],
        [/\bSupport\b/gi, 'دعم'],
        [/\bSupports\b/gi, 'يدعم'],
        [/\bDetection\b/gi, 'كشف'],
        [/\bVision\b/gi, 'رؤية'],
        [/\bRecognition\b/gi, 'تعرف'],
        [/\bTracking\b/gi, 'تتبع'],
        [/\bManagement\b/gi, 'إدارة'],
        [/\bRemote\b/gi, 'عن بعد'],
        [/\bMobile App\b/gi, 'تطبيق جوال'],
        [/\bCloud\b/gi, 'سحابة'],
        [/\bAccess\b/gi, 'دخول'],
        [/\bControl\b/gi, 'تحكم'],
        [/\bVideo\b/gi, 'فيديو'],
        [/\bAudio\b/gi, 'صوت'],
        [/\bAlarm\b/gi, 'إنذار'],
        [/\bSecurity\b/gi, 'أمان'],
        [/\bSystem\b/gi, 'نظام'],
        [/\bSystems\b/gi, 'أنظمة'],
        [/\bSolution\b/gi, 'حل'],
        [/\bSolutions\b/gi, 'حلول'],
        [/\bDevice\b/gi, 'جهاز'],
        [/\bDevices\b/gi, 'أجهزة'],
        [/\bKit\b/gi, 'طقم'],
        [/\bSeries\b/gi, 'سلسلة'],
        [/\bMode\b/gi, 'وضع'],
        [/\bModes\b/gi, 'أوضاع'],
        [/\bHigh\b/gi, 'عال'],
        [/\bUltra\b/gi, 'فائق'],
        [/\bWide\b/gi, 'واسع'],
        [/\bFine\b/gi, 'دقيق'],
        [/\bStandard\b/gi, 'قياسي'],
        [/\bAdvanced\b/gi, 'متقدم'],
        [/\bIntelligent\b/gi, 'ذكي'],
        [/\bAutomatic\b/gi, 'تلقائي'],
        [/\bPowered\b/gi, 'مدعوم'],
        [/\bModular\b/gi, 'معياري'],
        [/\bStandalone\b/gi, 'مستقل'],
        [/\bCompatible\b/gi, 'متوافق'],
        [/\bInstallation\b/gi, 'تركيب'],
        [/\bNight\b/gi, 'ليلية'],
        [/\bAngle\b/gi, 'زاوية'],
        [/\bVilla\b/gi, 'فيلا'],
        [/\bStation\b/gi, 'وحدة'],
        [/\bPIN\b/gi, 'PIN'],
        [/\bMifare\b/gi, 'Mifare'],
        [/\bStandalone\b/gi, 'مستقل'],
        [/\bDeep Learning\b/gi, 'تعلم عميق'],
        [/\bRefresh Rate\b/gi, 'معدل تحديث'],
        [/\bSeamless\b/gi, 'سلس'],
        [/\bSplicing\b/gi, 'دمج'],
        [/\bPremium\b/gi, 'متميز'],
        [/\bQuality\b/gi, 'جودة'],
        [/\bEnergy Efficient\b/gi, 'كفاءة في الطاقة'],
        [/\bLong Lifespan\b/gi, 'عمر طويل'],
        [/\bFlap\b/gi, 'أجنحة'],
        [/\bSwing\b/gi, 'متأرجحة'],
        [/\bSingle Lane\b/gi, 'مسار واحد'],
        [/\bDual-Lane\b/gi, 'مساران'],
        [/\bThroughput\b/gi, 'مرور'],
        [/\bMaintenance\b/gi, 'صيانة'],
        [/\bSwitchable\b/gi, 'قابل للتبديل'],
        [/\binteractive\b/gi, 'تفاعلي'],
        [/\bwhiteboards\b/gi, 'سبورات'],
        [/\bdisplays\b/gi, 'شاشات'],
        [/\bcutting-edge\b/gi, 'متطورة'],
        [/\bKorean\b/gi, 'كورية'],
        [/\bimaging\b/gi, 'تصوير'],
        [/\bOptical\b/gi, 'بصرية'],
        [/\bBullet\b/gi, 'Bullet'],
        [/\bSmoke\b/gi, 'دخان'],
        [/\bburglar\b/gi, 'سرقة'],
        [/\bBurglar\b/g, 'سرقة'],
        [/\bProviders\b/g, 'مزودون'],
        [/\bdata\b/gi, 'بيانات'],
        [/\bunified communication\b/gi, 'اتصالات موحدة'],
        [/\bnetworking\b/gi, 'شبكات'],
        [/\btelephony\b/gi, 'اتصالات هاتفية'],
        [/\bPBXs\b/g, 'أنظمة PBX'],
        [/\bfeatures\b/gi, 'ميزات'],
        [/\bvoice conferencing\b/gi, 'مؤتمرات صوتية'],
        [/\bInstant Messaging\b/gi, 'مراسلة فورية'],
        [/\bApp\b/g, 'تطبيق'],
        [/\bFeel\b/gi, 'اشعر'],
        [/\bConnected World\b/g, 'عالم متصل'],
        [/\bUnrivaled\b/g, 'لا مثيل له'],
        [/\bUnmatched\b/g, 'غير مسبوق'],
        [/\bHeard Everywhere\b/g, 'مسموع في كل مكان'],
        [/\bNoticed Anywhere\b/g, 'واضح في أي مكان'],
        [/\bProven Results\b/g, 'نتائج موثوقة'],
        [/\bAdvanced\b/gi, 'متقدمة'],
        [/\bInnovative\b/gi, 'مبتكرة'],
        [/\breal-time\b/gi, 'لحظية'],
        [/\bmonitoring\b/gi, 'مراقبة'],
        [/\bticketing\b/gi, 'تذاكر'],
        [/\bbiometric\b/gi, 'حيوية'],
        [/\bintegration\b/gi, 'تكامل'],
        [/\btraffic\b/gi, 'حركة المرور'],
        [/\bAuto\b/gi, 'تلقائي'],
        [/\bDigital\b/gi, 'رقمي'],
        [/\bAnalog\b/gi, 'تناظري'],
        [/\bNetwork\b/gi, 'شبكي'],
        [/\bCeiling\b/gi, 'سقفي'],
        [/\bWall-mounted\b/gi, 'جداري'],
        [/\bWall Mount\b/gi, 'حامل جداري'],
        [/\bDoor\b/gi, 'باب'],
        [/\bFace\b/gi, 'وجه'],
        [/\bCard\b/gi, 'بطاقة'],
        [/\bFingerprint\b/gi, 'بصمة'],
        [/\bParking\b/gi, 'مواقف'],
        [/\bVehicle\b/gi, 'مركبة'],
        [/\bBarrier\b/gi, 'حاجز'],
        [/\bGate\b/gi, 'بوابة'],
        [/\bTurnstile\b/gi, 'دوار'],
        [/\bPhone\b/gi, 'هاتف'],
        [/\bPhones\b/gi, 'هواتف'],
        [/\bConference\b/gi, 'مؤتمر'],
        [/\bFire\b/gi, 'حريق'],
        [/\bThermal\b/gi, 'حراري'],
        [/\bTemperature\b/gi, 'حرارة'],
        [/\bLight\b/gi, 'ضوء'],
        [/\bWhite\b/gi, 'أبيض'],
        [/\bSound\b/gi, 'صوت'],
        [/\bVoice\b/gi, 'صوت'],
        [/\bStorage\b/gi, 'تخزين'],
        [/\bDrive\b/gi, 'قرص'],
        [/\bCable\b/gi, 'كابل'],
        [/\bConnector\b/gi, 'موصل'],
        [/\bBox\b/gi, 'علبة'],
        [/\bWarranty\b/gi, 'ضمان'],
        [/\bGuarantee\b/gi, 'ضمان'],
        [/\bLife\b/gi, 'عمر'],
        [/\bUsers\b/gi, 'مستخدمين'],
        [/\bUser\b/gi, 'مستخدم'],
        [/\bfor\b/gi, 'لـ'],
        [/\bwith\b/gi, 'مع'],
        [/\bfrom\b/gi, 'من'],
        [/\band\b/gi, 'و'],
        [/\bin\b/gi, 'في'],
        [/\bof\b/gi, 'من']
    ];

    const originalText = new WeakMap();
    const originalAttrs = new WeakMap();
    const originalHtml = new WeakMap();

    function getPageKey() {
        return location.pathname.split('/').pop() || 'index.html';
    }

    function getInitialLanguage() {
        const lang = new URLSearchParams(location.search).get('lang');
        if (lang === 'ar' || lang === 'en') {
            saveSessionLanguage(lang);
            return lang;
        }
        const sessionLanguage = getSessionLanguage();
        return sessionLanguage || 'en';
    }

    function updateUrl(language) {
        const url = new URL(location.href);
        if (language === 'ar') {
            url.searchParams.set('lang', 'ar');
        } else {
            url.searchParams.delete('lang');
        }
        history.replaceState({}, '', url);
    }

    function saveSessionLanguage(language) {
        try {
            window.sessionStorage.setItem(SESSION_LANGUAGE_KEY, language);
        } catch (error) {
            // Ignore storage errors (private mode / blocked storage).
        }
    }

    function getSessionLanguage() {
        try {
            const language = window.sessionStorage.getItem(SESSION_LANGUAGE_KEY);
            return language === 'ar' || language === 'en' ? language : null;
        } catch (error) {
            return null;
        }
    }

    function normalize(text) {
        return text.trim().replace(/\s+/g, ' ');
    }

    function translateText(source, isArabic) {
        if (!isArabic) return source;
        const trimmed = source.trim();
        const normalized = normalize(source);
        let usedFallback = false;
        let translated = exactTranslations[trimmed] || exactTranslations[normalized];
        if (!translated && normalized.includes(' Products by Brand')) {
            const brand = normalized.replace(' Products by Brand', '');
            translated = `منتجات ${brand} حسب العلامة التجارية`;
        }
        if (!translated && normalized.includes(' Devices')) {
            const brand = normalized.replace(' Devices', '');
            translated = `أجهزة ${brand}`;
        }
        if (!translated && normalized.includes(' Products')) {
            const brand = normalized.replace(' Products', '');
            translated = `منتجات ${brand}`;
        }
        if (!translated) {
            usedFallback = true;
            translated = normalized;
            phraseReplacements.forEach(([pattern, replacement]) => {
                translated = translated.replace(pattern, replacement);
            });
            if (translated === normalized) translated = null;
            if (translated && usedFallback && /[A-Za-z]/.test(translated) && /[\u0600-\u06FF]/.test(translated)) {
                translated = null;
            }
        }
        if (!translated) return source;
        return `${source.match(/^\s*/)[0]}${translated}${source.match(/\s*$/)[0]}`;
    }

    function rememberAttr(element, attr) {
        if (!originalAttrs.has(element)) originalAttrs.set(element, {});
        const attrs = originalAttrs.get(element);
        if (!Object.prototype.hasOwnProperty.call(attrs, attr)) attrs[attr] = element.getAttribute(attr);
        return attrs[attr];
    }

    function shouldSkipTranslation(element) {
        return Boolean(element?.closest('.logo, .footer-logo'));
    }

    function addSharedStyles() {
        if (document.getElementById('productLocalizationStyles')) return;
        const style = document.createElement('style');
        style.id = 'productLocalizationStyles';
        style.textContent = `
            html[dir="rtl"] body { direction: rtl; }
            html[dir="rtl"] .page-hero { direction: ltr; justify-content: flex-end; }
            html[dir="rtl"] .page-hero-content { direction: rtl; width: min(600px, calc(50% - 70px)); max-width: min(600px, calc(50% - 70px)); text-align: right; }
            html[dir="rtl"] .page-hero-image { left: 5%; right: auto; }
            html[dir="rtl"] .breadcrumb { direction: rtl; justify-content: flex-start; }
            html[dir="rtl"] .brand-info,
            html[dir="rtl"] .service-card,
            html[dir="rtl"] .category-card,
            html[dir="rtl"] .feature-item,
            html[dir="rtl"] .cta-content,
            html[dir="rtl"] .footer-brand,
            html[dir="rtl"] .footer-links-group,
            html[dir="rtl"] .footer-contact { text-align: right; }
            html[dir="rtl"] .section-header { text-align: center; }
            html[dir="rtl"] .product-details { text-align: center; }
            html[dir="rtl"] .brand-title,
            html[dir="rtl"] .footer-logo,
            html[dir="rtl"] .footer-contact .contact-item { direction: rtl; }
            html[dir="rtl"] .partner-content { text-align: right; }
            html[dir="rtl"] .partner-card-inner,
            html[dir="rtl"] .partner-features,
            html[dir="rtl"] .specialty-tags { direction: rtl; }
            html[dir="rtl"] .partner-logo-section { border-right: none; border-left: 1px solid rgba(201, 162, 39, 0.1); }
            html[dir="rtl"] .nav-contact .contact-item span[dir="ltr"],
            html[dir="rtl"] .footer-contact .contact-text a[dir="ltr"] { direction: ltr; unicode-bidi: isolate; }
            .language-toggle, .mobile-language-toggle { display: inline-flex; align-items: center; justify-content: center; gap: 6px; }
            .mobile-language-toggle { display: none; color: #fff; text-decoration: none; width: 48px; height: 48px; border-radius: 12px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.05); }
            .mobile-language-toggle svg { color: #c9a227; }
            .footer-contact .contact-text a { color: inherit; text-decoration: none; font: inherit; display: inline-block; }
            @media (max-width: 992px) {
                html[dir="rtl"] .page-hero { direction: rtl; justify-content: center; }
                html[dir="rtl"] .page-hero-content { width: 100%; max-width: 100%; text-align: center; }
                html[dir="rtl"] .page-hero-image { left: auto; right: auto; }
                html[dir="rtl"] .breadcrumb { justify-content: center; }
            }
            @media (max-width: 768px) {
                .mobile-language-toggle { display: inline-flex; }
                html[dir="rtl"] .section-header,
                html[dir="rtl"] .brand-info,
                html[dir="rtl"] .service-card,
                html[dir="rtl"] .category-card,
                html[dir="rtl"] .feature-item,
                html[dir="rtl"] .cta-content,
                html[dir="rtl"] .footer-brand,
                html[dir="rtl"] .footer-links-group,
                html[dir="rtl"] .footer-contact { text-align: center; }
                html[dir="rtl"] .footer-contact .contact-item { text-align: right; }
            }
        `;
        document.head.appendChild(style);
    }

    function languageIcon(size) {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path>
            </svg>
        `;
    }

    function ensureLanguageToggles() {
        const navContact = document.querySelector('.nav-contact');
        if (navContact && !navContact.querySelector('[data-language-toggle]')) {
            const toggle = document.createElement('a');
            toggle.href = '?lang=ar';
            toggle.className = 'contact-item language-toggle';
            toggle.setAttribute('data-language-toggle', '');
            toggle.setAttribute('lang', 'ar');
            toggle.setAttribute('aria-label', 'Translate this page to Arabic');
            toggle.innerHTML = `${languageIcon(14)}<span>العربية</span>`;
            navContact.appendChild(toggle);
        }

        const navContainer = document.querySelector('.nav-container');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        if (navContainer && mobileMenuBtn && !navContainer.querySelector('.mobile-language-toggle')) {
            const toggle = document.createElement('a');
            toggle.href = '?lang=ar';
            toggle.className = 'mobile-language-toggle';
            toggle.setAttribute('data-language-toggle', '');
            toggle.setAttribute('lang', 'ar');
            toggle.setAttribute('aria-label', 'Translate this page to Arabic');
            toggle.innerHTML = `${languageIcon(20)}<span class="sr-only">العربية</span>`;
            navContainer.insertBefore(toggle, mobileMenuBtn);
        }
    }

    function fixContactDirection() {
        document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]').forEach(link => {
            const textNodeTarget = link.querySelector('span, p, a') || link;
            textNodeTarget.setAttribute('dir', 'ltr');
            textNodeTarget.style.unicodeBidi = 'isolate';
        });
        document.querySelectorAll('.footer-contact .contact-text p').forEach(p => {
            const text = p.textContent.trim();
            if (/^\+?\d[\d\s-]+$/.test(text) && !p.querySelector('a')) {
                p.innerHTML = `<a href="tel:${text.replace(/\D/g, '')}" dir="ltr">${text}</a>`;
            }
            if (/^[^\s@]+@[^\s@]+$/.test(text) && !p.querySelector('a')) {
                p.innerHTML = `<a href="mailto:${text}" dir="ltr">${text}</a>`;
            }
        });
    }

    function setSectionHeader(section, tagHtml, titleHtml, descHtml) {
        if (!section) return;
        const tag = section.querySelector('.section-tag');
        const title = section.querySelector('.section-title');
        const desc = section.querySelector('.section-desc');
        if (tag && tagHtml) tag.innerHTML = tagHtml;
        if (title && titleHtml) title.innerHTML = titleHtml;
        if (desc && descHtml) desc.innerHTML = descHtml;
    }

    function applyLedDisplayHeadings(isArabic) {
        if (getPageKey() !== 'led-displays.html') return;
        if (!isArabic) return;

        setSectionHeader(
            document.querySelector('.commercial-section'),
            'حلول تجارية',
            'شاشات LED <span class="highlight">التجارية</span>',
            'شاشات تجارية عالية الجودة لبيئات الشركات والمتاجر'
        );
        setSectionHeader(
            document.querySelector('.rental-section'),
            'حلول التأجير',
            'شاشات LED <span class="highlight">للتأجير</span>',
            'شاشات تأجير عالية الجودة للفعاليات والحفلات والمعارض'
        );
        setSectionHeader(
            document.querySelector('.distribution-section'),
            'حلول التوزيع',
            'وحدات LED <span class="highlight">للتوزيع</span>',
            'وحدات LED قياسية لمتكاملي الأنظمة وحلول المشاريع'
        );

        const controllerSections = Array.from(document.querySelectorAll('.products-showcase'));
        const controllersSection = controllerSections.find(section => {
            const title = section.querySelector('.section-title');
            return title && title.textContent.includes('Controllers');
        });
        setSectionHeader(
            controllersSection,
            'أنظمة التحكم',
            'وحدات تحكم <span class="highlight">LED</span>',
            'حلول تحكم متقدمة لشاشات LED وجدران الفيديو'
        );

        setSectionHeader(
            document.querySelector('.features-section'),
            'لماذا تختارنا',
            'ميزات <span class="highlight">شاشات LED</span>'
        );

        const ctaText = document.querySelector('.cta-content p');
        if (ctaText) ctaText.innerHTML = 'خبراؤنا هنا لمساعدتك في اختيار حل LED المناسب لاحتياجاتك';
    }

    function applySurveillanceHeadings(isArabic) {
        if (getPageKey() !== 'surveillance-solutions.html') return;
        if (!isArabic) return;

        setSectionHeader(
            document.querySelector('.brands-intro'),
            'شركاؤنا',
            'علامات <span class="highlight">المراقبة</span> التي نعمل معها',
            'نقدم حلولا متكاملة للمراقبة تشمل كاميرات HD وأنظمة NVR والمراقبة عن بعد وتحليلات فيديو ذكية لأمان شامل'
        );

        setSectionHeader(
            document.querySelector('.features-section'),
            'لماذا تختارنا',
            'ميزات <span class="highlight">نظام المراقبة</span>'
        );

        const featureContent = [
            {
                title: 'مراقبة بكاميرات عالية الدقة',
                desc: 'كاميرات CCTV عالية الدقة لمراقبة فيديو واضحة وفورية'
            },
            {
                title: 'نظام تسجيل NVR',
                desc: 'تخزين فيديو آمن باستخدام مسجل فيديو شبكي NVR مع التشغيل والنسخ الاحتياطي'
            },
            {
                title: 'المشاهدة عن بعد',
                desc: 'الوصول إلى البث المباشر والتسجيلات في أي وقت عبر تطبيقات الجوال أو متصفحات الويب'
            },
            {
                title: 'كشف حركة ذكي',
                desc: 'تنبيهات حركة متقدمة وكشف ذكي لتعزيز مراقبة الأمان'
            }
        ];

        document.querySelectorAll('.features-section .feature-item').forEach((item, index) => {
            const content = featureContent[index];
            if (!content) return;
            const title = item.querySelector('h4');
            const desc = item.querySelector('p');
            if (title) title.innerHTML = content.title;
            if (desc) desc.innerHTML = content.desc;
        });

        const ctaText = document.querySelector('.cta-content p');
        if (ctaText) ctaText.innerHTML = 'يوفر خبراؤنا حلول كاميرات CCTV وأنظمة NVR متكاملة للمنازل والمكاتب والمساحات التجارية';
    }

    function applySpecialHeadings(isArabic) {
        const titleConfig = pageTitles[getPageKey()];
        const title = document.querySelector('.page-title');
        if (title && titleConfig) title.innerHTML = isArabic ? titleConfig.ar : titleConfig.en;

        const heroTitle = document.querySelector('.page-hero-title');
        if (heroTitle && titleConfig) heroTitle.innerHTML = isArabic ? titleConfig.ar : titleConfig.en;

        const webHeroTitle = document.querySelector('.sw-hero-title');
        if (webHeroTitle && getPageKey() === 'web.html') {
            if (!originalHtml.has(webHeroTitle)) originalHtml.set(webHeroTitle, webHeroTitle.innerHTML);
            webHeroTitle.innerHTML = isArabic
                ? '<span class="sw-hero-highlight">مواقع</span> تنمي أعمالك'
                : originalHtml.get(webHeroTitle);
        }

        document.querySelectorAll('.section-title').forEach(titleEl => {
            if (!originalHtml.has(titleEl)) originalHtml.set(titleEl, titleEl.innerHTML);
            if (!isArabic) {
                titleEl.innerHTML = originalHtml.get(titleEl);
                return;
            }
            const source = titleEl.textContent;
            const text = normalize(source);
            if (text.includes('Trusted') && text.includes('Brands')) {
                titleEl.innerHTML = 'علامات <span class="highlight">موثوقة</span> نعمل معها';
            }
            if (text.includes('Products') && text.includes('Brand')) {
                titleEl.innerHTML = 'المنتجات <span class="highlight">حسب العلامة التجارية</span>';
            }
            if (text.includes('مواقف') && text.includes('مزود')) {
                titleEl.innerHTML = 'مزودو <span class="highlight">حلول المواقف</span> الذين نعمل معهم';
            }
            if (text.includes('الكل') && text.includes('الملحقات')) {
                titleEl.innerHTML = 'كل <span class="highlight">الملحقات</span>';
            }
        });

        if (isArabic) {
            const servicesTitle = document.querySelector('.services-section .section-title');
            if (servicesTitle) {
                servicesTitle.innerHTML = getPageKey() === 'ip_phones.html'
                    ? 'خدمات هواتف IP'
                    : 'خدماتنا';
            }

            if (getPageKey() === 'parking_management.html') {
                const parkingFeaturesTitle = document.querySelector('.features-section .section-title');
                if (parkingFeaturesTitle) {
                    parkingFeaturesTitle.innerHTML = 'ميزات <span class="highlight">إدارة المواقف</span>';
                }
            }

            if (getPageKey() === 'solutions.html') {
                const introTitle = document.querySelector('.solutions-intro .section-title');
                if (introTitle) introTitle.innerHTML = 'أمن شامل <span class="highlight">لكل الاحتياجات</span>';

                const solutionsTitle = document.querySelector('.solutions-section .section-title');
                if (solutionsTitle) solutionsTitle.innerHTML = 'حلول <span class="highlight">القطاعات</span>';

                const approachTitle = document.querySelector('.approach-section .section-title');
                if (approachTitle) approachTitle.innerHTML = '<span class="highlight">منهجية</span> العمل';

                const amcTitle = document.querySelector('.amc-content .section-title');
                if (amcTitle) amcTitle.innerHTML = 'عقد الصيانة <span class="highlight">السنوي (AMC)</span>';
            }

            if (getPageKey() === 'partners.html') {
                const partnersTitle = document.querySelector('.partners-section .section-title');
                if (partnersTitle) partnersTitle.innerHTML = 'شركاء <span class="highlight">الأمن والمراقبة</span>';

                const partnersCtaTitle = document.querySelector('.cta-content h2');
                if (partnersCtaTitle) partnersCtaTitle.innerHTML = 'كن <span class="highlight">شريكا</span> أو احصل على حلول';
            }

            if (getPageKey() === 'web.html') {
                const swSectionTitle = document.querySelector('.sw-products .sw-section-title');
                if (swSectionTitle) swSectionTitle.innerHTML = 'كل ما تحتاجه <span class="sw-highlight">للوجود الرقمي</span>';

                const processTitle = document.querySelector('.sw-process .sw-section-title');
                if (processTitle) processTitle.innerHTML = 'موقعك جاهز للنشر في <span class="sw-highlight">3 خطوات بسيطة</span>';

                const whyTitle = document.querySelector('.sw-why-title');
                if (whyTitle) whyTitle.innerHTML = 'مصمم لأعمالك <span class="sw-highlight">وليس قالبا جاهزا</span>';

                const ctaTitle = document.querySelector('.sw-cta-title');
                if (ctaTitle) ctaTitle.innerHTML = 'لنبدأ بناء <span class="sw-highlight">موقعك</span>';
            }
        }

        const ctaConfig = ctaTitles[getPageKey()];
        const ctaTitle = document.querySelector('.cta-content h2');
        if (ctaTitle && ctaConfig) {
            ctaTitle.innerHTML = isArabic ? ctaConfig.ar : ctaConfig.en;
        }

        const productConfig = productSections[getPageKey()];
        const productsHeader = document.querySelector('.products-showcase .section-header');
        if (productsHeader && productConfig) {
            const tag = productsHeader.querySelector('.section-tag');
            const title = productsHeader.querySelector('.section-title');
            const desc = productsHeader.querySelector('.section-desc');
            if (tag && !originalHtml.has(tag)) originalHtml.set(tag, tag.innerHTML);
            if (tag) tag.innerHTML = isArabic ? productConfig.tagAr : originalHtml.get(tag);
            if (title && !originalHtml.has(title)) originalHtml.set(title, title.innerHTML);
            if (title) title.innerHTML = isArabic ? productConfig.titleAr : originalHtml.get(title);
            if (desc && !originalHtml.has(desc)) originalHtml.set(desc, desc.innerHTML);
            if (desc) desc.innerHTML = isArabic ? productConfig.descAr : originalHtml.get(desc);
        }

        applyLedDisplayHeadings(isArabic);
        applySurveillanceHeadings(isArabic);
    }

    function setLanguage(language) {
        const isArabic = language === 'ar';
        document.documentElement.lang = isArabic ? 'ar' : 'en';
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
        document.body.classList.toggle('is-arabic', isArabic);

        const walker = document.createTreeWalker(document.body, 4, {
            acceptNode(node) {
                const parent = node.parentElement;
                if (!parent || ['SCRIPT', 'STYLE', 'SVG'].includes(parent.tagName)) return 2;
                if (shouldSkipTranslation(parent)) return 2;
                return node.nodeValue.trim() ? 1 : 2;
            }
        });

        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (!originalText.has(node)) originalText.set(node, node.nodeValue);
            node.nodeValue = translateText(originalText.get(node), isArabic);
        }

        document.querySelectorAll('[placeholder], [aria-label], [title], img[alt], track[label]').forEach(element => {
            if (shouldSkipTranslation(element)) return;
            ['placeholder', 'aria-label', 'title', 'alt', 'label'].forEach(attr => {
                if (!element.hasAttribute(attr)) return;
                const source = rememberAttr(element, attr);
                element.setAttribute(attr, translateText(source, isArabic));
            });
        });

        applySpecialHeadings(isArabic);

        document.querySelectorAll('[data-language-toggle]').forEach(toggle => {
            const label = toggle.querySelector('span');
            if (label) label.textContent = isArabic ? 'English' : 'العربية';
            toggle.href = isArabic ? '?lang=en' : '?lang=ar';
            toggle.lang = isArabic ? 'en' : 'ar';
            toggle.setAttribute('aria-label', isArabic ? 'Switch to English' : 'Translate this page to Arabic');
        });
    }

    function closeMobileMenu() {
        document.getElementById('mobileMenuBtn')?.classList.remove('active');
        document.querySelector('.nav-center')?.classList.remove('mobile-open');
        document.getElementById('navbar')?.classList.remove('menu-open');
    }

    function bindLanguageToggles() {
        let lastToggleAt = 0;
        document.querySelectorAll('[data-language-toggle]').forEach(toggle => {
            const handler = event => {
                event.preventDefault();
                event.stopPropagation();
                const now = Date.now();
                if (event.type === 'click' && now - lastToggleAt < 450) return;
                lastToggleAt = now;
                const next = document.documentElement.lang === 'ar' ? 'en' : 'ar';
                setLanguage(next);
                saveSessionLanguage(next);
                updateUrl(next);
                closeMobileMenu();
            };
            toggle.addEventListener('click', handler);
            toggle.addEventListener('touchend', handler, { passive: false });
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        addSharedStyles();
        ensureLanguageToggles();
        fixContactDirection();
        const initialLanguage = getInitialLanguage();
        setLanguage(initialLanguage);
        saveSessionLanguage(initialLanguage);
        updateUrl(initialLanguage);
        bindLanguageToggles();

        window.addEventListener('pageshow', function() {
            const language = getInitialLanguage();
            setLanguage(language);
            updateUrl(language);
        });
    });
})();
