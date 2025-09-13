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

    if (!sidebarEl || !mainEl || !welcomeMessage || !sidebarLinks) {
        console.error("Core elements not found!", {
            sidebar: !!sidebarEl,
            mainContent: !!mainEl,
            welcomeMessage: !!welcomeMessage,
            sidebarLinks: !!sidebarLinks
        });
        return;
    }

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
    
    // --- Hash-based Routing and Active Link Handling ---
    const updateActiveLink = () => {
        const hash = window.location.hash || '#';
        const links = sidebarEl.querySelectorAll('.sidebar-link');
        
        // Hide all modules first
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
        
        // Show appropriate content
        if (hash.startsWith('#module-')) {
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
});
