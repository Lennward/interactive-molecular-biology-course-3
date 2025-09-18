// CORRECTED APP.JS CODE WITH MOBILE FUNCTIONALITY

import initModule1 from './modules/module01.js';
import initModule2 from './modules/module02.js';
import initModule3 from './modules/module03.js';
import initModule4 from './modules/module04.js';
import initModule5 from './modules/module05.js';
import initModule6 from './modules/module06.js';
import initModule7 from './modules/module07.js';
import initModule8 from './modules/module08.js';
import initModule9 from './modules/module09.js';
import initModule10 from './modules/module10.js';
import initModule11 from './modules/module11.js';

document.addEventListener('DOMContentLoaded', () => {
    const sidebarEl = document.getElementById('sidebar');
    const mainEl = document.getElementById('main-content');
    const welcomeMessage = document.getElementById('welcome-message');
    const sidebarLinks = document.getElementById('sidebar-links');
    const titleElement = document.querySelector('#sidebar h1'); // Get the title element

    if (!sidebarEl || !mainEl || !welcomeMessage || !sidebarLinks || !titleElement) {
        console.error("Core elements not found!", {
            sidebar: !!sidebarEl,
            mainContent: !!mainEl,
            welcomeMessage: !!welcomeMessage,
            sidebarLinks: !!sidebarLinks,
            titleElement: !!titleElement
        });
        return;
    }

    // Mobile menu functionality
    const createMobileMenuButton = () => {
        const button = document.createElement('button');
        button.id = 'mobile-menu-btn';
        button.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        `;
        button.className = 'fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-md shadow-lg md:hidden';
        button.style.backgroundColor = 'var(--purple-dark)';
        
        button.addEventListener('click', () => {
            sidebarEl.classList.toggle('mobile-open');
            const overlay = document.getElementById('sidebar-overlay');
            if (overlay) {
                overlay.classList.toggle('active');
            }
        });
        
        document.body.appendChild(button);
        return button;
    };

    // Create overlay for mobile
    const createSidebarOverlay = () => {
        const overlay = document.createElement('div');
        overlay.id = 'sidebar-overlay';
        overlay.className = 'sidebar-overlay';
        overlay.addEventListener('click', () => {
            sidebarEl.classList.remove('mobile-open');
            overlay.classList.remove('active');
        });
        document.body.appendChild(overlay);
        return overlay;
    };

    // Initialize mobile components
    const mobileMenuBtn = createMobileMenuButton();
    const sidebarOverlay = createSidebarOverlay();

    // Close mobile menu when clicking on a link
    sidebarEl.addEventListener('click', (e) => {
        if (e.target.closest('.sidebar-link') || e.target.closest('h1')) {
            sidebarEl.classList.remove('mobile-open');
            sidebarOverlay.classList.remove('active');
        }
    });

    // Make the title clickable
    titleElement.style.cursor = 'pointer';
    titleElement.addEventListener('click', () => {
        window.location.hash = '#introduction';
    });

    // Array of all module initializer functions
    const moduleInitializers = [
        initModule1, initModule2, initModule3, initModule4, initModule5, 
        initModule6, initModule7, initModule8, initModule9, initModule10, initModule11
    ];
    
    // Create sections and root divs for each module
    moduleInitializers.forEach((_, i) => {
        const moduleNum = i + 1;
        const section = document.createElement('section');
        section.id = `module-${moduleNum}`;
        section.className = 'module-section';
        section.style.display = 'none'; // Initially hide all modules
        section.innerHTML = `
            <h2 class="sr-only">Module ${moduleNum}</h2>
            <div id="module-${moduleNum}-root"></div>
        `;
        mainEl.appendChild(section);
    });

    // Create introduction section
    const introSection = document.createElement('section');
    introSection.id = 'introduction';
    introSection.className = 'module-section';
    introSection.style.display = 'none';
    introSection.innerHTML = `
        <div id="introduction-root">
            <!-- Introduction content will be loaded here -->
        </div>
    `;
    mainEl.appendChild(introSection);

    // Initialize all modules
    moduleInitializers.forEach((init, i) => {
        const moduleNum = i + 1;
        const rootEl = document.getElementById(`module-${moduleNum}-root`);
        if (rootEl && init) {
            try {
                init(rootEl, sidebarEl);
                console.log(`Module ${moduleNum} initialized successfully`);
            } catch (error) {
                console.error(`Error initializing module ${moduleNum}:`, error);
            }
        } else {
            console.warn(`Module ${moduleNum}: rootEl or init function not found`);
        }
    });

    // Load introduction content and update welcome message
    updateWelcomeContent();
    
    // --- Hash-based Routing and Active Link Handling ---
    const updateActiveLink = () => {
        const hash = window.location.hash || '#';
        const links = sidebarEl.querySelectorAll('.sidebar-link');
        
        // Hide all modules and introduction first
        const allModules = mainEl.querySelectorAll('.module-section');
        allModules.forEach(module => module.style.display = 'none');
        
        // Update active link styling
        links.forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Handle title active state
        if (hash === '#introduction') {
            titleElement.classList.add('active-title');
        } else {
            titleElement.classList.remove('active-title');
        }
        
        // Show appropriate content
if (hash === '#introduction') {
    welcomeMessage.style.display = 'none';
    const introSection = document.getElementById('introduction');
    if (introSection) {
        introSection.style.display = 'block';
        // Scroll to top when switching to introduction
        mainEl.scrollTop = 0;
        window.scrollTo(0, 0);
    }
} else if (hash.startsWith('#module-')) {
    welcomeMessage.style.display = 'none';
    const targetModule = document.querySelector(hash);
    if (targetModule) {
        targetModule.style.display = 'block';
        // Scroll to top when switching to any module
        mainEl.scrollTop = 0;
        window.scrollTo(0, 0);
    }
} else {
    welcomeMessage.style.display = 'block';
    // Scroll to top when going to welcome message
    mainEl.scrollTop = 0;
    window.scrollTo(0, 0);
}
    };
    
    window.addEventListener('hashchange', updateActiveLink);
    
    // Initial check on page load
    updateActiveLink(); 

    // Add click listener to sidebar to handle welcome message visibility
    sidebarEl.addEventListener('click', (e) => {
        if (e.target.closest('.sidebar-link')) {
            welcomeMessage.style.display = 'none';
        }
    });
    
    // Debug: Log sidebar links after initialization
    setTimeout(() => {
        const links = sidebarEl.querySelectorAll('.sidebar-link');
        console.log(`Found ${links.length} sidebar links after initialization`);
        links.forEach((link, index) => {
            console.log(`Link ${index + 1}: ${link.textContent} -> ${link.href}`);
        });
    }, 100);

    // Function to get the course content    
function getCourseContent() {
    return `
        <div class="landing-hero mb-8">
            <div class="hero-gradient-bg p-8 rounded-2xl mb-8">
                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center leading-tight">
                    <span class="hero-title-gradient">Interactive Molecular Cell Biology</span>
                    <br>
                    <span class="text-2xl sm:text-3xl font-medium" style="color: var(--orange-accent);">From Cloning to Imaging</span>
                </h1>
                <p class="text-lg sm:text-xl text-center max-w-3xl mx-auto leading-relaxed" style="color: var(--text-secondary);">
                    Master the complete molecular biology workflow through hands-on simulations and interactive learning
                </p>
            </div>
        </div>

        <div class="course-highlights grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="highlight-card">
                <div class="highlight-icon">🧬</div>
                <h3>DNA Cloning</h3>
                <p>Learn plasmid cloning techniques with step-by-step video guides</p>
            </div>
            <div class="highlight-card">
                <div class="highlight-icon">🔬</div>
                <h3>Cell Culture</h3>
                <p>Master mammalian cell handling with HEK-293T cells</p>
            </div>
            <div class="highlight-card">
                <div class="highlight-icon">✨</div>
                <h3>Microscopy</h3>
                <p>Validate experiments using fluorescence imaging techniques</p>
            </div>
        </div>

        <div class="course-journey mb-8">
            <h2 class="section-title text-center mb-8">Your Learning Journey</h2>
            
            <div class="journey-timeline">
                <div class="timeline-item">
                    <div class="timeline-marker">1</div>
                    <div class="timeline-content">
                        <h4>Foundation</h4>
                        <p>Discover the fundamental principles of molecular biology and essential laboratory calculations</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-marker">2</div>
                    <div class="timeline-content">
                        <h4>Cloning Mastery</h4>
                        <p>Execute DNA-plasmid cloning using bacterial systems with comprehensive video tutorials</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-marker">3</div>
                    <div class="timeline-content">
                        <h4>Cell Culture</h4>
                        <p>Handle mammalian cells safely and effectively in sterile culture conditions</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-marker">4</div>
                    <div class="timeline-content">
                        <h4>Transfection</h4>
                        <p>Introduce your cloned plasmids into mammalian cells using modern techniques</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-marker">5</div>
                    <div class="timeline-content">
                        <h4>Validation</h4>
                        <p>Analyze results through GFP fluorescence and immunocytochemistry experiments</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="practical-application-banner">
            <div class="banner-content">
                <div class="banner-icon">🥽</div>
                <div class="banner-text">
                    <h3>Ready for Real Lab Work?</h3>
                    <p>This course bridges theory and practice - follow along with actual lab equipment or use it as comprehensive preparation for hands-on experiments.</p>
                </div>
            </div>
        </div>

        <div class="cta-section text-center mb-8">
            <h3 class="text-2xl font-semibold mb-4" style="color: var(--purple-dark);">Ready to Start Exploring?</h3>
            <p class="text-lg mb-6" style="color: var(--text-primary);">Choose any module from the sidebar to begin your molecular biology adventure</p>
            <div class="cta-arrow">
                <svg class="w-8 h-8 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: var(--orange-medium);">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                </svg>
            </div>
        </div>

        <div class="team-section">
            <div class="team-logos flex justify-center items-center gap-8 mb-4">
                <div class="logo-container">
                    <img src="images/Logo_Phoenix.svg" alt="Team Phoenix Logo" class="h-20 w-auto logo-hover">
                </div>
                <div class="logo-container">
                    <img src="images/Logo_Heidelberg.svg" alt="iGEM Heidelberg Logo" class="h-20 w-auto logo-hover">
                </div>
            </div>
            <p class="text-center text-lg font-medium team-credit">
                <span style="color: var(--purple-dark);">Created by</span> 
                <span style="color: var(--orange-medium);">Team Phoenix & iGEM Heidelberg</span>
            </p>
        </div>

        <style>
        .landing-hero {
            animation: fadeInUp 0.8s ease-out;
        }

        .hero-gradient-bg {
            background: linear-gradient(135deg, var(--purple-dark) 0%, var(--purple-medium) 50%, var(--purple-light) 100%);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            position: relative;
            overflow: hidden;
        }

        .hero-gradient-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
            animation: shimmer 3s infinite;
        }

        .hero-title-gradient {
            background: linear-gradient(135deg, var(--orange-accent) 0%, var(--orange-light) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .course-highlights {
            animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .highlight-card {
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .highlight-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.15);
            border-color: var(--purple-light);
        }

        .highlight-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }

        .highlight-card h3 {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--purple-dark);
            margin-bottom: 0.5rem;
        }

        .highlight-card p {
            color: var(--text-primary);
            line-height: 1.6;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--purple-dark);
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, var(--orange-medium), var(--orange-accent));
            border-radius: 2px;
        }

        .journey-timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
        }

        .timeline-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 2rem;
            position: relative;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: 25px;
            top: 60px;
            bottom: -20px;
            width: 2px;
            background: linear-gradient(180deg, var(--purple-light), var(--orange-medium));
        }

        .timeline-item:last-child::before {
            display: none;
        }

        .timeline-marker {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--orange-medium), var(--orange-accent));
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2rem;
            margin-right: 2rem;
            flex-shrink: 0;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            z-index: 2;
            position: relative;
        }

        .timeline-content {
            background: white;
            padding: 1.5rem;
            border-radius: 1rem;
            flex-grow: 1;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            border: 2px solid var(--purple-light);
            transition: all 0.3s ease;
        }

        .timeline-content:hover {
            transform: translateX(10px);
            box-shadow: 0 12px 35px rgba(0,0,0,0.15);
        }

        .timeline-content h4 {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--purple-dark);
            margin-bottom: 0.5rem;
        }

        .timeline-content p {
            color: var(--text-primary);
            line-height: 1.6;
            margin: 0;
        }

        .practical-application-banner {
            background: linear-gradient(135deg, rgba(246, 75, 204, 0.1), rgba(255, 208, 0, 0.1));
            border: 2px solid var(--purple-light);
            border-radius: 1rem;
            padding: 2rem;
            margin: 2rem 0;
            animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .banner-content {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .banner-icon {
            font-size: 3rem;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }

        .banner-text h3 {
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--purple-dark);
            margin-bottom: 0.5rem;
        }

        .banner-text p {
            color: var(--text-primary);
            line-height: 1.6;
            margin: 0;
        }

        .cta-section {
            animation: fadeInUp 0.8s ease-out 0.8s both;
        }

        .team-section {
            animation: fadeInUp 0.8s ease-out 1s both;
        }

        .logo-container {
            padding: 1rem;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .logo-hover:hover {
            transform: scale(1.1);
        }

        .team-credit {
            background: linear-gradient(135deg, var(--purple-dark), var(--orange-medium));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
            .hero-gradient-bg {
                padding: 2rem 1.5rem;
            }
            
            .course-highlights {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .highlight-card {
                padding: 1.5rem;
            }
            
            .banner-content {
                flex-direction: column;
                text-align: center;
                gap: 1rem;
            }
            
            .timeline-item {
                flex-direction: column;
                text-align: center;
            }
            
            .timeline-marker {
                margin: 0 auto 1rem auto;
            }
            
            .timeline-content {
                margin-top: 0;
            }
            
            .timeline-item::before {
                left: 50%;
                transform: translateX(-50%);
            }
            
            .team-logos {
                flex-direction: column;
                gap: 1rem;
            }
        }
        </style>
    `;
}

    // Function to update welcome message content
    function updateWelcomeContent() {
        if (welcomeMessage) {
            welcomeMessage.className = 'text-center p-6 sm:p-10 bg-white rounded-lg shadow-md';
            welcomeMessage.innerHTML = getCourseContent();
        }

        // Also load identical content for introduction page
        const introRoot = document.getElementById('introduction-root');
        if (introRoot) {
            introRoot.innerHTML = `
                <div class="module-content text-center">
                    ${getCourseContent()}
                </div>
            `;
        }
    }
});
