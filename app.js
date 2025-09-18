// CORRECTED APP.JS CODE

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

/* Add to style.css: */
/*
#sidebar h1 {
    transition: all 0.3s ease;
}

#sidebar h1:hover, #sidebar h1.active-title {
    color: var(--orange-accent) !important;
    transform: translateX(3px);
}
*/
        return;
    }

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
            }
        } else if (hash.startsWith('#module-')) {
            welcomeMessage.style.display = 'none';
            const targetModule = document.querySelector(hash);
            if (targetModule) {
                targetModule.style.display = 'block';
            }
        } else {
            welcomeMessage.style.display = 'block';
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
            <h2 class="text-2xl sm:text-3xl font-semibold mb-4" style="color: var(--purple-dark);">Welcome to the Interactive Cell & Protein Analytics Course!</h2>
            
            <p class="text-base sm:text-lg text-gray-600 mb-4">This course serves to give you an idea of how to perform experiments in the field of molecular biology.</p>
            
            <p class="text-base sm:text-lg text-gray-600 mb-4">The first part introduces you to the general theory of the basics of molecular biology.</p>
            
            <p class="text-base sm:text-lg text-gray-600 mb-4">Further, you will learn how to perform your own biological experiment in the lab. For this, the course offers all steps including practical application examples that are needed for the general procedure of many molecular biological experiments.</p>
            
            <p class="text-base sm:text-lg text-gray-600 mb-4">This contains a guide on how to calculate dilutions, concentrations and how to count cells. This is followed by the "Cloning" section which focuses on a general procedure in molecular biology: The cloning of DNA-plasmids via bacteria. This section mainly contains several short videos about the steps that need to be considered during cloning with bacteria.</p>
            
            <p class="text-base sm:text-lg text-gray-600 mb-4">Additionally, there is a chapter about how to handle mammalian cells under the cell culture with the example of HEK-293T cells.</p>
            
            <p class="text-base sm:text-lg text-gray-600 mb-4">This is followed by a transfection of our mammalian cells with the plasmids that we produced during cloning in and afterwards purified from bacteria.</p>
            
            <p class="text-base sm:text-lg text-gray-600 mb-6">To validate our transfection, we examine GFP under the fluorescence microscope and perform our immunocytochemistry (ICC) experiment.</p>
            
            <div class="highlight-note mb-6">
                <p><strong>Practical Application:</strong> If you have access to a lab and the required materials, you can also conduct the experiment in real life on your own in parallel.</p>
                <p class="mt-2">However, if you do not have access to a lab or the required materials or just want to know what steps you need to consider when performing a similar experiment, this course serves as a great preparation for real life applications.</p>
            </div>
            
            <p class="text-base sm:text-lg text-gray-600 mb-6"><strong>Select a module from the sidebar to begin your learning journey.</strong></p>
            
            <div class="flex justify-center items-center gap-8 mb-2">
                <img src="Logo_Phoenix.svg" alt="Team Phoenix Logo" class="h-16 w-auto">
                <img src="Logo_Heidelberg.svg" alt="iGEM Heidelberg Logo" class="h-16 w-auto">
            </div>
            <p class="text-sm text-gray-600 text-center"><em>Team Phoenix & iGEM Heidelberg</em></p>
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
