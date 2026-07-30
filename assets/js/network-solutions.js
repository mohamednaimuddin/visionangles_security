// ==========================================
// VISIONANGLES SECURITY - NETWORK SOLUTIONS PAGE SCRIPTS
// Performance Optimized
// ==========================================

// Local Arabic language switcher for the network solutions page.
document.addEventListener('DOMContentLoaded', function() {
    const SESSION_LANGUAGE_KEY = 'visionangles:language';
    const languageToggles = document.querySelectorAll('[data-language-toggle]');
    const originalText = new WeakMap();
    const originalAttrs = new WeakMap();

    const translations = {
        'Skip to main content': 'تخطي إلى المحتوى الرئيسي',
        'VISIONANGLES SECURITY': 'فيجن أنجلز سيكيوريتي',
        'Loading Network Solutions...': 'جاري تحميل حلول الشبكات...',
        'Your browser does not support the video tag.': 'متصفحك لا يدعم تشغيل الفيديو.',
        'Dashboard': 'الرئيسية',
        'Products': 'المنتجات',
        'Network Products': 'منتجات الشبكات',
        'Video Intercom': 'إنتركم مرئي',
        'Access Control': 'التحكم بالدخول',
        'LED Displays': 'شاشات LED',
        'Surveillance Solutions': 'حلول المراقبة',
        'Speed Gates and Turnstiles': 'بوابات السرعة والدوارات',
        'Interactive Flat Panel Displays': 'الشاشات التفاعلية المسطحة',
        'Thermal Camera': 'كاميرا حرارية',
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
        'Home': 'الرئيسية',
        'Network Solutions': 'حلول الشبكات',
        'Network': 'الشبكات',
        'Cisco, TP-Link, Ruijie, and D-Link networking infrastructure for security systems integration. Professional network design with switches, routers, firewalls, and cabling installation services. Seamless integration of video surveillance, access control, and ELV systems with redundancy and backup connectivity.': 'بنية تحتية للشبكات من Cisco وTP-Link وRuijie وD-Link لتكامل أنظمة الأمن. تصميم شبكات احترافي يشمل السويتشات والراوترات والجدران النارية وخدمات تركيب الكابلات، مع تكامل سلس لأنظمة المراقبة بالفيديو والتحكم بالدخول وأنظمة ELV مع التكرار والاتصال الاحتياطي.',
        'Our Partners': 'شركاؤنا',
        'Trusted': 'علامات',
        'Brands': 'موثوقة',
        'We Work With': 'نعمل معها',
        'Trusted Brands We Work With': 'علامات موثوقة نعمل معها',
        'Enterprise networking solutions provide the backbone for surveillance, access control, and communication systems. Our portfolio includes managed and unmanaged network switches with PoE power delivery, network cameras, fiber converters, and wireless access points. Solutions support gigabit speeds for bandwidth-intensive HD and 4K video streaming. Routing, firewalling, and cybersecurity integration protect your infrastructure from unauthorized access. Cisco, D-Link, TP-Link, Ruijie, Sophos, and Fortinet products deliver carrier-grade reliability, redundancy, and performance for mission-critical deployments across enterprise networks, data centers, and remote sites throughout the Middle East.': 'توفر حلول الشبكات المؤسسية العمود الفقري لأنظمة المراقبة والتحكم بالدخول والاتصالات. تشمل مجموعتنا سويتشات شبكات مُدارة وغير مُدارة مع طاقة PoE، وكاميرات شبكية، ومحولات ألياف، ونقاط وصول لاسلكية. تدعم الحلول سرعات جيجابت لبث الفيديو عالي الدقة و4K. كما تحمي خدمات التوجيه والجدران النارية وتكامل الأمن السيبراني بنيتك التحتية من الوصول غير المصرح به. توفر منتجات Cisco وD-Link وTP-Link وRuijie وSophos وFortinet موثوقية وتكرارا وأداء عاليا للتطبيقات الحساسة في شبكات المؤسسات ومراكز البيانات والمواقع البعيدة في الشرق الأوسط.',
        'Enterprise networking solutions from world-leading manufacturers': 'حلول شبكات مؤسسية من أبرز الشركات العالمية',
        'Global leader in networking and IT infrastructure': 'رائد عالمي في الشبكات والبنية التحتية لتقنية المعلومات',
        'Innovative network infrastructure solutions': 'حلول مبتكرة للبنية التحتية للشبكات',
        'Network switches & transmission equipment': 'سويتشات الشبكات ومعدات النقل',
        'Smart networking & PoE solutions': 'حلول شبكات ذكية وPoE',
        'Reliable consumer & business networking': 'شبكات موثوقة للمنازل والأعمال',
        'Smart network solutions worldwide': 'حلول شبكات ذكية حول العالم',
        'Authorized Partner': 'شريك معتمد',
        'Authorized Dealer': 'موزع معتمد',
        'What We Offer': 'ما نقدمه',
        'Our': 'منتجاتنا',
        'Services': 'خدماتنا',
        'Our Services': 'خدماتنا',
        'Network Design': 'تصميم الشبكات',
        'Custom network architecture planning and design for your infrastructure': 'تخطيط وتصميم بنية شبكية مخصصة لبنيتك التحتية',
        'Infrastructure Setup': 'إعداد البنية التحتية',
        'Complete installation of switches, routers, and cabling systems': 'تركيب كامل للسويتشات والراوترات وأنظمة الكابلات',
        'Configuration': 'الإعداد والتهيئة',
        'Professional VLAN, firewall, and network configuration services': 'خدمات احترافية لإعداد VLAN والجدران النارية والشبكات',
        'Security': 'الأمن',
        'Network security implementation and monitoring solutions': 'حلول تنفيذ ومراقبة أمن الشبكات',
        'Networking': 'الشبكات',
        'Equipment': 'المعدات',
        'Networking Equipment': 'معدات الشبكات',
        'Enterprise-grade switches, routers, and network infrastructure': 'سويتشات وراوترات وبنية تحتية للشبكات بمستوى المؤسسات',
        'Network Switches': 'سويتشات الشبكات',
        'Managed & unmanaged switches for all network sizes': 'سويتشات مُدارة وغير مُدارة لجميع أحجام الشبكات',
        'PoE & PoE+ Support': 'دعم PoE وPoE+',
        'Gigabit & 10G Options': 'خيارات جيجابت و10G',
        'Layer 2 & Layer 3': 'الطبقة الثانية والثالثة',
        'Stackable Solutions': 'حلول قابلة للتكديس',
        'Routers & Gateways': 'الراوترات والبوابات',
        'High-performance routing solutions': 'حلول توجيه عالية الأداء',
        'Enterprise Routers': 'راوترات مؤسسية',
        'VPN Gateways': 'بوابات VPN',
        'Load Balancing': 'توزيع الأحمال',
        'Firewall Integration': 'تكامل الجدار الناري',
        'Wireless Solutions': 'الحلول اللاسلكية',
        'Enterprise WiFi access points & controllers': 'نقاط وصول ومتحكمات WiFi للمؤسسات',
        'WiFi 6 & WiFi 6E': 'WiFi 6 وWiFi 6E',
        'Cloud Management': 'إدارة سحابية',
        'Indoor & Outdoor APs': 'نقاط وصول داخلية وخارجية',
        'Mesh Networking': 'شبكات Mesh',
        'Network Cables': 'كابلات الشبكات',
        'Structured cabling & fiber solutions': 'حلول كابلات منظمة وألياف ضوئية',
        'Cat6 & Cat6A': 'Cat6 وCat6A',
        'Fiber Optic': 'ألياف ضوئية',
        'Patch Panels': 'لوحات باتش',
        'Cable Management': 'إدارة الكابلات',
        'Products': 'المنتجات',
        'Network Products by Brand': 'منتجات الشبكات حسب العلامة',
        'by Brand': 'حسب العلامة التجارية',
        'Browse our selection of networking equipment from top manufacturers': 'تصفح مجموعتنا من معدات الشبكات من أفضل المصنعين',
        'Cisco Network Products': 'منتجات شبكات Cisco',
        'Ruijie Network Products': 'منتجات شبكات Ruijie',
        'Hikvision Network Products': 'منتجات شبكات Hikvision',
        'Dahua Network Products': 'منتجات شبكات Dahua',
        'TP-Link Network Products': 'منتجات شبكات TP-Link',
        'D-Link Network Products': 'منتجات شبكات D-Link',
        'Enterprise Stackable Switch': 'سويتش مؤسسي قابل للتكديس',
        'Integrated Services Router': 'راوتر خدمات متكاملة',
        'WiFi 6 Access Point': 'نقطة وصول WiFi 6',
        'WiFi 6 (802.11ax)': 'WiFi 6 (802.11ax)',
        'Wireless-N VPN Router': 'راوتر Wireless-N مع VPN',
        '24/48 Gigabit Ports': '24/48 منفذ جيجابت',
        'PoE+ Support': 'دعم PoE+',
        'Stackable Design': 'تصميم قابل للتكديس',
        'SD-WAN Ready': 'جاهز لـ SD-WAN',
        '4G/LTE Support': 'دعم 4G/LTE',
        'Built-in Security': 'أمان مدمج',
        'Cloud Managed': 'إدارة سحابية',
        'AI/ML Powered': 'مدعوم بالذكاء الاصطناعي',
        '4-Port Switch': 'سويتش 4 منافذ',
        'VPN Support': 'دعم VPN',
        'Wireless-N': 'لاسلكي N',
        '24-Port PoE Switch': 'سويتش PoE بـ 24 منفذا',
        'Wireless Bridge': 'جسر لاسلكي',
        '8-Port Gigabit Switch': 'سويتش جيجابت 8 منافذ',
        '8 Gigabit Ports': '8 منافذ جيجابت',
        '5-Port Desktop Switch': 'سويتش مكتبي 5 منافذ',
        'Enterprise Gateway Router': 'راوتر بوابة مؤسسي',
        'Wall-Mount Access Point': 'نقطة وصول جدارية',
        'Layer 3 Managed Switch': 'سويتش مُدار من الطبقة الثالثة',
        '8-Port PoE Switch': 'سويتش PoE بـ 8 منافذ',
        '16-Port PoE Switch': 'سويتش PoE بـ 16 منفذا',
        'SFP Module': 'وحدة SFP',
        '24-Port Gigabit PoE Switch': 'سويتش جيجابت PoE بـ 24 منفذا',
        'WiFi 6 Ceiling Access Point': 'نقطة وصول سقفية WiFi 6',
        'Omada Gigabit VPN Router': 'راوتر Omada جيجابت VPN',
        '300Mbps Wireless N Router': 'راوتر Wireless N بسرعة 300Mbps',
        'AC1200 WiFi Range Extender': 'موسع نطاق WiFi AC1200',
        'AC750 WiFi Range Extender': 'موسع نطاق WiFi AC750',
        '24-Port Gigabit Smart Switch': 'سويتش ذكي جيجابت بـ 24 منفذا',
        'Unified Services Router': 'راوتر خدمات موحدة',
        'WiFi 6 Smart Router': 'راوتر ذكي WiFi 6',
        'Wi-Fi 7 Router': 'راوتر Wi-Fi 7',
        '24 Gigabit Ports': '24 منفذ جيجابت',
        '48 Gigabit Ports': '48 منفذ جيجابت',
        '8 PoE Ports': '8 منافذ PoE',
        '16 PoE Ports': '16 منفذ PoE',
        '24 PoE+ Ports': '24 منفذ PoE+',
        '110W Budget': 'قدرة 110 واط',
        '250W Budget': 'قدرة 250 واط',
        '370W Budget': 'قدرة 370 واط',
        '360W PoE Budget': 'قدرة PoE بقوة 360 واط',
        '192W PoE Budget': 'قدرة PoE بقوة 192 واط',
        '4x SFP Uplink': '4 منافذ SFP رفع',
        '2x SFP Uplink': 'منفذا SFP رفع',
        '5 GHz Band': 'نطاق 5 جيجاهرتز',
        '5 GHz 867 Mbps': '5 جيجاهرتز بسرعة 867 Mbps',
        '10km Range': 'مدى 10 كم',
        '3 km Range': 'مدى 3 كم',
        'IP66 Outdoor': 'خارجي بمعيار IP66',
        'IP65 Waterproof': 'مقاوم للماء بمعيار IP65',
        '5 Fast Ethernet': '5 منافذ إيثرنت سريعة',
        'Plug & Play': 'تشغيل فوري',
        'Metal Housing': 'هيكل معدني',
        'Compact Design': 'تصميم مدمج',
        'Easy Smart Managed': 'إدارة ذكية سهلة',
        'AX5400 WiFi 6': 'AX5400 WiFi 6',
        'AX1800 WiFi 6': 'AX1800 WiFi 6',
        'Omada SDN': 'شبكة Omada SDN',
        'Omada Cloud': 'سحابة Omada',
        'PoE Powered': 'مدعوم بطاقة PoE',
        'Multi-WAN': 'منافذ WAN متعددة',
        'IPSec/PPTP VPN': 'VPN عبر IPSec/PPTP',
        'Dual-Band WiFi 5': 'WiFi 5 بنطاق مزدوج',
        '1267 Mbps': '1267 Mbps',
        '2976 Mbps': '2976 Mbps',
        '4x 10G SFP+': '4 منافذ 10G SFP+',
        'Enterprise Grade': 'مستوى مؤسسي',
        'Unmanaged': 'غير مُدار',
        'Web Managed': 'إدارة عبر الويب',
        '1.25Gbps': '1.25Gbps',
        'Single Mode': 'أحادي النمط',
        '20KM Range': 'مدى 20 كم',
        '300Mbps Speed': 'سرعة 300Mbps',
        '4 LAN Ports': '4 منافذ LAN',
        'Easy Setup': 'إعداد سهل',
        'Dual Band AC1200': 'نطاق مزدوج AC1200',
        'Dual Band AC750': 'نطاق مزدوج AC750',
        'Gigabit Ethernet': 'إيثرنت جيجابت',
        'Access Point Mode': 'وضع نقطة الوصول',
        'PoE Support': 'دعم PoE',
        'Smart Managed': 'إدارة ذكية',
        'AX3600 WiFi 6': 'AX3600 WiFi 6',
        'Dual Band': 'نطاق مزدوج',
        'Dual WAN': 'WAN مزدوج',
        'VPN Gateway': 'بوابة VPN',
        'Firewall': 'جدار ناري',
        'WiFi 6 AX1500': 'WiFi 6 AX1500',
        'MU-MIMO': 'تقنية MU-MIMO',
        'WiFi 7 BE3600': 'WiFi 7 BE3600',
        'Multi-Link': 'روابط متعددة',
        '6 GHz Band': 'نطاق 6 جيجاهرتز',
        'Why Us': 'لماذا نحن',
        'Why Choose': 'لماذا تختار',
        'Visionangles': 'فيجن أنجلز',
        'Expert Team': 'فريق خبير',
        'Certified network engineers with years of experience': 'مهندسو شبكات معتمدون بخبرة تمتد لسنوات',
        '24/7 Support': 'دعم 24/7',
        'Round-the-clock technical support and monitoring': 'دعم فني ومراقبة على مدار الساعة',
        'Best Prices': 'أفضل الأسعار',
        'Competitive pricing with authorized dealer benefits': 'أسعار منافسة مع مزايا الموزع المعتمد',
        'Quick Delivery': 'تسليم سريع',
        'Fast shipping and installation services': 'خدمات شحن وتركيب سريعة',
        'Ready to Upgrade Your': 'جاهز لترقية',
        'Infrastructure?': 'البنية التحتية؟',
        'Ready to Upgrade Your Network Infrastructure?': 'هل أنت جاهز لترقية بنية شبكتك التحتية؟',
        'Our experts are here to help you find the perfect networking solution for your business': 'خبراؤنا هنا لمساعدتك في اختيار حل الشبكات الأنسب لعملك',
        'Get a Quote': 'اطلب عرض سعر',
        'Call Us Now': 'اتصل بنا الآن',
        'Vision Angles Security': 'فيجن أنجلز سيكيوريتي',
        'Securing Tomorrow, Protecting Today': 'نؤمن الغد ونحمي اليوم',
        'A trusted name for smart safety gear in Saudi Arabia. We supply modern cameras, alarms, smart locks, and audio tools for homes and businesses. Our team plans, installs, and cares for every setup with you in mind.': 'اسم موثوق في حلول السلامة الذكية في السعودية. نوفر كاميرات حديثة وإنذارات وأقفالا ذكية وأدوات صوتية للمنازل والأعمال، مع تخطيط وتركيب ورعاية لكل مشروع.',
        'Quick Links': 'روابط سريعة',
        'About Us': 'من نحن',
        'Our Branches': 'فروعنا',
        'Our Products': 'منتجاتنا',
        'Network Gear': 'معدات الشبكات',
        'Speed Gates & Turnstiles': 'بوابات السرعة والدوارات',
        'Interactive Flat Panels': 'الشاشات التفاعلية',
        'Contact Us': 'تواصل معنا',
        'Head Office': 'المكتب الرئيسي',
        'Al Khobar, Saudi Arabia': 'الخبر، السعودية',
        'Phone': 'الهاتف',
        'Email': 'البريد الإلكتروني',
        'Working Hours': 'ساعات العمل',
        'Sat - Thu: 8AM - 6PM': 'السبت - الخميس: 8 صباحا - 6 مساء',
        'Vision Logo': 'شعار فيجن',
        '© 2026 Vision Angles Security Systems. All Rights Reserved.': '© 2026 فيجن أنجلز سيكيوريتي. جميع الحقوق محفوظة.',
        'All Rights Reserved.': 'جميع الحقوق محفوظة.',
        'Privacy Policy': 'سياسة الخصوصية',
        'Terms of Service': 'شروط الخدمة',
        'Editorial Policy': 'السياسة التحريرية',
        'Scroll to top': 'العودة إلى الأعلى',
        'Chat with us!': 'تحدث معنا!',
        'Chat on WhatsApp': 'الدردشة عبر واتساب'
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

    function shouldSkipTranslation(element) {
        return Boolean(element?.closest('.logo, .footer-logo'));
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

    function fixFooterBottom(isArabic) {
        const footerBottom = document.querySelector('.footer-bottom');
        if (!footerBottom) return;

        const copyright = footerBottom.querySelector('.footer-bottom-left p');
        if (copyright) {
            copyright.textContent = isArabic
                ? '© 2026 فيجن أنجلز سيكيوريتي. جميع الحقوق محفوظة.'
                : '© 2026 Vision Angles Security Systems. All Rights Reserved.';
            copyright.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
            copyright.style.unicodeBidi = 'plaintext';
        }

        const linkLabels = isArabic
            ? {
                'privacy-policy.html': 'سياسة الخصوصية',
                'terms-of-service.html': 'شروط الخدمة',
                'editorial-policy.html': 'السياسة التحريرية'
            }
            : {
                'privacy-policy.html': 'Privacy Policy',
                'terms-of-service.html': 'Terms of Service',
                'editorial-policy.html': 'Editorial Policy'
            };

        footerBottom.querySelectorAll('.footer-bottom-right a').forEach(link => {
            const href = link.getAttribute('href') || '';
            const key = Object.keys(linkLabels).find(path => href.endsWith(path));
            if (key) link.textContent = linkLabels[key];
        });

        const legalLinks = footerBottom.querySelector('.footer-bottom-right');
        if (legalLinks) {
            legalLinks.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
            legalLinks.style.unicodeBidi = 'isolate';
        }
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
                if (shouldSkipTranslation(parent)) {
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
            node.nodeValue = getTranslatedText(originalText.get(node), isArabic);
        }

        document.querySelectorAll('[placeholder], [aria-label], [title], img[alt]').forEach(element => {
            if (shouldSkipTranslation(element)) return;
            ['placeholder', 'aria-label', 'title', 'alt'].forEach(attr => {
                if (!element.hasAttribute(attr)) return;
                const source = rememberAttr(element, attr);
                element.setAttribute(attr, isArabic && translations[source] ? translations[source] : source);
            });
        });

        const pageTitle = document.querySelector('.page-title');
        if (pageTitle) {
            pageTitle.innerHTML = isArabic
                ? '<span class="highlight">حلول</span> الشبكات'
                : 'Network <span class="highlight">Solutions</span>';
        }

        const brandProductsTitle = document.querySelector('.brand-products-section .section-title');
        if (brandProductsTitle) {
            brandProductsTitle.innerHTML = isArabic
                ? 'منتجات الشبكات <span class="highlight">حسب العلامة التجارية</span>'
                : 'Network <span class="highlight">Products</span> by Brand';
        }

        languageToggles.forEach(languageToggle => {
            const label = languageToggle.querySelector('span');
            if (label) label.textContent = isArabic ? 'English' : 'العربية';
            languageToggle.setAttribute('href', isArabic ? '?lang=en' : '?lang=ar');
            languageToggle.setAttribute('lang', isArabic ? 'en' : 'ar');
            languageToggle.setAttribute('aria-label', isArabic ? 'Switch to English' : 'Translate this page to Arabic');
        });

        fixFooterBottom(isArabic);
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

    function getInitialLanguage() {
        const urlLanguage = new URLSearchParams(window.location.search).get('lang');
        if (urlLanguage === 'ar' || urlLanguage === 'en') {
            saveSessionLanguage(urlLanguage);
            return urlLanguage;
        }
        const sessionLanguage = getSessionLanguage();
        return sessionLanguage || 'en';
    }

    const initialLanguage = getInitialLanguage();
    setLanguage(initialLanguage);
    saveSessionLanguage(initialLanguage);
    updateUrl(initialLanguage);

    let lastLanguageToggleAt = 0;
    function handleLanguageToggle(event) {
        event.preventDefault();
        event.stopPropagation();

        const now = Date.now();
        if (event.type === 'click' && now - lastLanguageToggleAt < 500) return;
        lastLanguageToggleAt = now;

        const nextLanguage = document.documentElement.lang === 'ar' ? 'en' : 'ar';
        setLanguage(nextLanguage);
        saveSessionLanguage(nextLanguage);
        updateUrl(nextLanguage);

        mobileMenuBtn?.classList.remove('active');
        navCenter?.classList.remove('mobile-open');
        navbar?.classList.remove('menu-open');
    }

    languageToggles.forEach(languageToggle => {
        languageToggle.addEventListener('click', handleLanguageToggle);
        languageToggle.addEventListener('touchend', handleLanguageToggle, { passive: false });
    });

    window.addEventListener('pageshow', function() {
        const language = getInitialLanguage();
        setLanguage(language);
        updateUrl(language);
    });
});

// Page Loader - Optimized for faster loading
(function() {
    const loader = document.getElementById('loader');
    let resourcesLoaded = false;
    let minTimeElapsed = false;
    
    // Minimum display time for brand consistency (reduced from 1500ms)
    setTimeout(() => {
        minTimeElapsed = true;
        hideLoaderIfReady();
    }, 600);
    
    function hideLoaderIfReady() {
        if (resourcesLoaded && minTimeElapsed && loader) {
            loader.classList.add('loaded');
            // Use requestAnimationFrame for smoother transition
            requestAnimationFrame(() => {
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 400);
            });
        }
    }
    
    // Check if page is already loaded
    if (document.readyState === 'complete') {
        resourcesLoaded = true;
        hideLoaderIfReady();
    } else {
        window.addEventListener('load', function() {
            resourcesLoaded = true;
            hideLoaderIfReady();
        });
    }
})();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navCenter = document.querySelector('.nav-center');
const navbar = document.getElementById('navbar');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navCenter.classList.toggle('mobile-open');
        navbar.classList.toggle('menu-open');
    });
    
    // Close menu when clicking a link (except dropdown toggles)
    document.querySelectorAll('.nav-link').forEach(link => {
        // Skip the Products dropdown link
        if (link.closest('.has-dropdown')) return;
        
        link.addEventListener('click', function() {
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('active');
            }
            if (navCenter) {
                navCenter.classList.remove('mobile-open');
            }
            if (navbar) {
                navbar.classList.remove('menu-open');
            }
        });
    });
}

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
        // Also close mobile menu
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
        }
        if (navCenter) {
            navCenter.classList.remove('mobile-open');
        }
        if (navbar) {
            navbar.classList.remove('menu-open');
        }
    });
});

// Particle Canvas Animation - Optimized for performance
const canvas = document.getElementById('particleCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;
    let isVisible = true;
    let canvasWidth = 0;
    let canvasHeight = 0;
    
    // Use Intersection Observer to pause animation when not visible
    const observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !animationId) {
            animationId = requestAnimationFrame(drawParticles);
        }
    }, { threshold: 0.1 });
    observer.observe(canvas);
    
    function resizeCanvas() {
        const hero = document.querySelector('.page-hero');
        if (hero) {
            canvasWidth = hero.offsetWidth;
            canvasHeight = hero.offsetHeight;
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
        }
    }
    
    function createParticles() {
        particles = [];
        // Particle count based on canvas area
        const particleCount = Math.min(Math.floor((canvasWidth * canvasHeight) / 15000), 60);
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvasWidth,
                y: Math.random() * canvasHeight,
                radius: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.02 + Math.random() * 0.02
            });
        }
    }
    
    function drawParticles() {
        if (!isVisible) {
            animationId = null;
            return;
        }
        
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        particles.forEach((particle) => {
            // Pulsing effect
            particle.pulse += particle.pulseSpeed;
            const pulseFactor = Math.sin(particle.pulse) * 0.3 + 1;
            const currentRadius = particle.radius * pulseFactor;
            
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around edges
            if (particle.x > canvasWidth + 10) particle.x = -10;
            if (particle.x < -10) particle.x = canvasWidth + 10;
            if (particle.y > canvasHeight + 10) particle.y = -10;
            if (particle.y < -10) particle.y = canvasHeight + 10;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(45, 80%, 55%, ${particle.opacity})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(201, 162, 39, 0.4)';
            ctx.fill();
            ctx.shadowBlur = 0;
        });
        
        // Draw connections between nearby particles
        ctx.lineWidth = 0.5;
        const connectionDistance = 100;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                
                if (Math.abs(dx) < connectionDistance && Math.abs(dy) < connectionDistance) {
                    const distSq = dx * dx + dy * dy;
                    if (distSq < connectionDistance * connectionDistance) {
                        const opacity = (1 - Math.sqrt(distSq) / connectionDistance) * 0.15;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(201, 162, 39, ${opacity})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        animationId = requestAnimationFrame(drawParticles);
    }
    
    // Debounced resize handler
    let resizeTimeout;
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            resizeCanvas();
            createParticles();
        }, 150);
    }
    
    resizeCanvas();
    createParticles();
    animationId = requestAnimationFrame(drawParticles);
    
    window.addEventListener('resize', handleResize, { passive: true });
}

// Products Slider Functionality with disabled state
function initSliders() {
    const sliderContainers = document.querySelectorAll('.products-slider-container');
    
    sliderContainers.forEach(container => {
        const slider = container.querySelector('.products-slider');
        const prevBtn = container.querySelector('.slider-prev');
        const nextBtn = container.querySelector('.slider-next');
        
        if (!slider || !prevBtn || !nextBtn) return;
        
        // Update arrow states based on scroll position
        function updateArrowStates() {
            const scrollLeft = slider.scrollLeft;
            const scrollWidth = slider.scrollWidth;
            const clientWidth = slider.clientWidth;
            const maxScroll = scrollWidth - clientWidth;
            
            // Disable prev button at start
            if (scrollLeft <= 5) {
                prevBtn.classList.add('disabled');
                prevBtn.setAttribute('aria-disabled', 'true');
            } else {
                prevBtn.classList.remove('disabled');
                prevBtn.setAttribute('aria-disabled', 'false');
            }
            
            // Disable next button at end
            if (scrollLeft >= maxScroll - 5) {
                nextBtn.classList.add('disabled');
                nextBtn.setAttribute('aria-disabled', 'true');
            } else {
                nextBtn.classList.remove('disabled');
                nextBtn.setAttribute('aria-disabled', 'false');
            }
        }
        
        // Initial state
        updateArrowStates();
        
        // Update on scroll
        slider.addEventListener('scroll', updateArrowStates, { passive: true });
        
        // Click handlers
        const scrollAmount = 400;
        
        prevBtn.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
        
        nextBtn.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
        
        // Update on window resize
        window.addEventListener('resize', updateArrowStates, { passive: true });
    });
}

// Initialize sliders when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSliders);
} else {
    initSliders();
}
