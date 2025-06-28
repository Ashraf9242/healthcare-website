// Translation data
const translations = {
  en: {
    site_name: "Al Shifa Medical",
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About",
    nav_doctors: "Doctors",
    nav_contact: "Contact",
    hero_title: "Excellence in Healthcare for Oman",
    hero_subtitle: "Providing world-class medical services with compassionate care in the heart of Muscat. Your health and well-being are our top priorities.",
    book_appointment: "Book Appointment",
    emergency_call: "Emergency: +968 92421050",
    years_experience: "Years Experience",
    specialists: "Medical Specialists",
    patients_served: "Patients Served",
    services_title: "Our Medical Services",
    services_subtitle: "Comprehensive healthcare solutions tailored to meet the diverse needs of Omani families",
    cardiology: "Cardiology",
    cardiology_desc: "Advanced heart care with state-of-the-art cardiac facilities and experienced cardiologists.",
    neurology: "Neurology",
    neurology_desc: "Comprehensive neurological care for brain, spine, and nervous system disorders.",
    pediatrics: "Pediatrics",
    pediatrics_desc: "Specialized care for children from infancy through adolescence with child-friendly environment.",
    surgery: "General Surgery",
    surgery_desc: "Minimally invasive surgical procedures with the latest technology and expert surgeons.",
    ophthalmology: "Ophthalmology",
    ophthalmology_desc: "Complete eye care services including LASIK surgery and retinal treatments.",
    emergency: "Emergency Care",
    emergency_desc: "24/7 emergency medical services with rapid response and critical care capabilities.",
    learn_more: "Learn More",
    about_title: "About Al Shifa Medical Center",
    about_subtitle: "Leading healthcare provider in Oman with a commitment to excellence and innovation",
    about_desc1: "Established in 2008, Al Shifa Medical Center has been at the forefront of healthcare excellence in Oman. We combine cutting-edge medical technology with compassionate care to provide the best possible outcomes for our patients.",
    about_desc2: "Our team of highly qualified medical professionals, many of whom are trained internationally, work together to ensure that every patient receives personalized care tailored to their specific needs.",
    accredited: "Internationally Accredited",
    accredited_desc: "JCI accredited facility meeting global healthcare standards",
    available: "24/7 Availability",
    available_desc: "Round-the-clock emergency and critical care services",
    expert_team: "Expert Medical Team",
    expert_team_desc: "Highly qualified specialists from around the world",
    virtual_tour: "Take Virtual Tour",
    doctors_title: "Meet Our Expert Doctors",
    doctors_subtitle: "Experienced medical professionals dedicated to providing exceptional healthcare",
    doctor1_name: "Dr. Ahmed Al-Rashid",
    doctor1_spec: "Chief Cardiologist",
    doctor1_exp: "15 years experience • Harvard Medical School",
    doctor2_name: "Dr. Fatima Al-Zahra",
    doctor2_spec: "Pediatric Specialist",
    doctor2_exp: "12 years experience • Johns Hopkins University",
    doctor3_name: "Dr. Omar Al-Balushi",
    doctor3_spec: "Neurologist",
    doctor3_exp: "10 years experience • Mayo Clinic",
    doctor4_name: "Dr. Maryam Al-Hadhrami",
    doctor4_spec: "Ophthalmologist",
    doctor4_exp: "8 years experience • Moorfields Eye Hospital",
    contact_title: "Get In Touch",
    contact_subtitle: "We're here to help you with all your healthcare needs",
    address_title: "Our Location",
    address: "Al Khuwair, Muscat<br>Sultanate of Oman<br>P.O. Box 123, PC 112",
    phone_title: "Phone Number",
    emergency_line: "Emergency Hotline: +968 92421050",
    email_title: "Email Address",
    response_time: "We respond within 24 hours",
    hours_title: "Working Hours",
    weekdays: "Monday - Friday: 8:00 AM - 10:00 PM",
    weekend: "Saturday - Sunday: 9:00 AM - 8:00 PM",
    emergency_24: "Emergency: 24/7",
    form_name: "Full Name",
    form_email: "Email Address",
    form_phone: "Phone Number",
    form_service: "Service Needed",
    form_message: "Message",
    select_service: "Select a service",
    general_consultation: "General Consultation",
    send_message: "Send Message",
    quick_links: "Quick Links",
    contact_info: "Contact Info",
    footer_address: "Al Khuwair, Muscat, Oman",
    footer_desc: "Excellence in healthcare for Oman. Your trusted partner in health and wellness.",
    all_rights: "All rights reserved."
  },
  ar: {
    site_name: "مركز الشفاء الطبي",
    nav_home: "الرئيسية",
    nav_services: "الخدمات",
    nav_about: "عن المركز",
    nav_doctors: "الأطباء",
    nav_contact: "اتصل بنا",
    hero_title: "التميز في الرعاية الصحية لعُمان",
    hero_subtitle: "نقدم خدمات طبية عالمية المستوى مع الرعاية الرحيمة في قلب مسقط. صحتك ورفاهيتك هما أولويتنا القصوى.",
    book_appointment: "احجز موعد",
    emergency_call: "الطوارئ: +968 92421050",
    years_experience: "سنوات خبرة",
    specialists: "أخصائي طبي",
    patients_served: "مريض تم علاجه",
    services_title: "خدماتنا الطبية",
    services_subtitle: "حلول رعاية صحية شاملة مصممة لتلبية الاحتياجات المتنوعة للعائلات العُمانية",
    cardiology: "أمراض القلب",
    cardiology_desc: "رعاية متقدمة للقلب مع مرافق قلبية حديثة وأطباء قلب ذوو خبرة.",
    neurology: "أمراض الأعصاب",
    neurology_desc: "رعاية عصبية شاملة لاضطرابات الدماغ والعمود الفقري والجهاز العصبي.",
    pediatrics: "طب الأطفال",
    pediatrics_desc: "رعاية متخصصة للأطفال من الرضاعة حتى المراهقة في بيئة صديقة للأطفال.",
    surgery: "الجراحة العامة",
    surgery_desc: "إجراءات جراحية طفيفة التدخل مع أحدث التقنيات وجراحين خبراء.",
    ophthalmology: "طب العيون",
    ophthalmology_desc: "خدمات رعاية العين الكاملة بما في ذلك جراحة الليزك وعلاجات الشبكية.",
    emergency: "الرعاية الطارئة",
    emergency_desc: "خدمات طبية طارئة على مدار الساعة مع استجابة سريعة وقدرات رعاية حرجة.",
    learn_more: "اعرف المزيد",
    about_title: "عن مركز الشفاء الطبي",
    about_subtitle: "مقدم رعاية صحية رائد في عُمان مع التزام بالتميز والابتكار",
    about_desc1: "تأسس مركز الشفاء الطبي في عام 2008، وكان في المقدمة في تميز الرعاية الصحية في عُمان. نحن نجمع بين التكنولوجيا الطبية المتطورة والرعاية الرحيمة لتقديم أفضل النتائج الممكنة لمرضانا.",
    about_desc2: "فريقنا من المهنيين الطبيين المؤهلين تأهيلاً عالياً، والذين تم تدريب العديد منهم دولياً، يعملون معاً لضمان حصول كل مريض على رعاية شخصية مصممة خصيصاً لاحتياجاته المحددة.",
    accredited: "معتمد دولياً",
    accredited_desc: "مرفق معتمد من JCI يلبي معايير الرعاية الصحية العالمية",
    available: "متاح 24/7",
    available_desc: "خدمات الطوارئ والرعاية الحرجة على مدار الساعة",
    expert_team: "فريق طبي خبير",
    expert_team_desc: "أخصائيون مؤهلون تأهيلاً عالياً من جميع أنحاء العالم",
    virtual_tour: "جولة افتراضية",
    doctors_title: "تعرف على أطبائنا الخبراء",
    doctors_subtitle: "مهنيون طبيون ذوو خبرة مكرسون لتقديم رعاية صحية استثنائية",
    doctor1_name: "د. أحمد الراشد",
    doctor1_spec: "رئيس أطباء القلب",
    doctor1_exp: "15 سنة خبرة • كلية الطب بجامعة هارفارد",
    doctor2_name: "د. فاطمة الزهراء",
    doctor2_spec: "أخصائية أطفال",
    doctor2_exp: "12 سنة خبرة • جامعة جونز هوبكنز",
    doctor3_name: "د. عمر البلوشي",
    doctor3_spec: "أخصائي أعصاب",
    doctor3_exp: "10 سنوات خبرة • مايو كلينك",
    doctor4_name: "د. مريم الحضرمية",
    doctor4_spec: "أخصائية عيون",
    doctor4_exp: "8 سنوات خبرة • مستشفى مورفيلدز للعيون",
    contact_title: "تواصل معنا",
    contact_subtitle: "نحن هنا لمساعدتك في جميع احتياجاتك الصحية",
    address_title: "موقعنا",
    address: "الخوير، مسقط<br>سلطنة عُمان<br>ص.ب. 123، ر.ب. 112",
    phone_title: "رقم الهاتف",
    emergency_line: "خط الطوارئ: +968 92421050",
    email_title: "عنوان البريد الإلكتروني",
    response_time: "نرد خلال 24 ساعة",
    hours_title: "ساعات العمل",
    weekdays: "الاثنين - الجمعة: 8:00 ص - 10:00 م",
    weekend: "السبت - الأحد: 9:00 ص - 8:00 م",
    emergency_24: "الطوارئ: 24/7",
    form_name: "الاسم الكامل",
    form_email: "عنوان البريد الإلكتروني",
    form_phone: "رقم الهاتف",
    form_service: "الخدمة المطلوبة",
    form_message: "الرسالة",
    select_service: "اختر خدمة",
    general_consultation: "استشارة عامة",
    send_message: "إرسال الرسالة",
    quick_links: "روابط سريعة",
    contact_info: "معلومات الاتصال",
    footer_address: "الخوير، مسقط، عُمان",
    footer_desc: "التميز في الرعاية الصحية لعُمان. شريكك الموثوق في الصحة والعافية.",
    all_rights: "جميع الحقوق محفوظة."
  }
};

// Current language state
let currentLang = 'en';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize website functionality
function initializeWebsite() {
    setupLanguageToggle();
    setupDarkModeToggle();
    setupSmoothScrolling();
    setupMobileMenu();
    setupFormValidation();
    setupAnimations();
    setupCounterAnimation();
    
    // Load saved preferences
    const savedLang = getStoredValue('preferred-language');
    if (savedLang && savedLang !== currentLang) {
        switchLanguage(savedLang);
    }
    
    const savedTheme = getStoredValue('theme-preference');
    if (savedTheme === 'dark') {
        enableDarkMode();
    }
}

// Language switching functionality
function setupLanguageToggle() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            switchLanguage(newLang);
        });
    }
}

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Add/remove RTL class to body
    if (lang === 'ar') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'SELECT') {
                // Handle select options
                element.innerHTML = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update language toggle button text
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.innerHTML = lang === 'en' ? 
            '<i class="fas fa-language"></i> عربي' : 
            '<i class="fas fa-language"></i> English';
    }
    
    // Save language preference
    storeValue('preferred-language', lang);
    
    // Add smooth transition animation
    document.body.classList.add('lang-switching');
    setTimeout(() => {
        document.body.classList.remove('lang-switching');
    }, 500);
}

// Dark mode functionality
function setupDarkModeToggle() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDarkMode();
        });
    }
}

function toggleDarkMode() {
    const isDark = document.body.classList.contains('dark-mode');
    if (isDark) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        toggleBtn.setAttribute('title', currentLang === 'en' ? 'Light Mode' : 'الوضع المضيء');
    }
    storeValue('theme-preference', 'dark');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        toggleBtn.setAttribute('title', currentLang === 'en' ? 'Dark Mode' : 'الوضع المظلم');
    }
    storeValue('theme-preference', 'light');
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// Form validation and submission
function setupFormValidation() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const formObject = {};
            
            // Convert FormData to object
            for (let [key, value] of formData.entries()) {
                formObject[key] = value;
            }
            
            // Validate form
            if (validateForm(formObject)) {
                submitForm(formObject);
            }
        });
    }
}

function validateForm(data) {
    const errors = [];
    
    // Name validation
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Phone validation
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    if (!data.phone || !phoneRegex.test(data.phone)) {
        errors.push('Please enter a valid phone number');
    }
    
    // Message validation
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    if (errors.length > 0) {
        showFormErrors(errors);
        return false;
    }
    
    return true;
}

function showFormErrors(errors) {
    const errorContainer = document.getElementById('form-errors');
    if (errorContainer) {
        errorContainer.innerHTML = errors.map(error => `<p class="error">${error}</p>`).join('');
        errorContainer.style.display = 'block';
    } else {
        alert(errors.join('\n'));
    }
}

function submitForm(data) {
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'جاري الإرسال...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Show success message
        showSuccessMessage();
        
        // Reset form
        document.getElementById('contact-form').reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Hide errors
        const errorContainer = document.getElementById('form-errors');
        if (errorContainer) {
            errorContainer.style.display = 'none';
        }
    }, 2000);
}

function showSuccessMessage() {
    const message = currentLang === 'en' 
        ? 'Thank you! Your message has been sent successfully.' 
        : 'شكراً لك! تم إرسال رسالتك بنجاح.';
    
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #00d4aa;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Intersection Observer for animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
        '.service-card, .stat-item, .feature-item, .doctor-card, .about-content'
    );
    
    animatableElements.forEach(el => {
        observer.observe(el);
    });
}

// Counter animation for statistics
function setupCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Scroll-based header styling
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Utility functions for storage (since localStorage is not available)
function storeValue(key, value) {
    // Store in memory for current session
    window.sessionData = window.sessionData || {};
    window.sessionData[key] = value;
}

function getStoredValue(key) {
    // Get from memory
    if (window.sessionData && window.sessionData[key]) {
        return window.sessionData[key];
    }
    return null;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Resize handler for responsive adjustments
window.addEventListener('resize', debounce(function() {
    // Handle any responsive adjustments here
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        if (mobileMenuBtn) {
            mobileMenuBtn.classList.remove('active');
        }
    }
}, 250));

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove('active');
            }
        }
    }
});

// Export functions for external use
window.MedicalWebsite = {
    switchLanguage,
    toggleDarkMode,
    enableDarkMode,
    disableDarkMode,
    getCurrentLanguage: () => currentLang,
    translations
};