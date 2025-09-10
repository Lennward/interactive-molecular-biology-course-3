// CORRECTED APP.JS CODE

import initModule1 from './modules/module1.js';
import initModule2 from './modules/module2.js';
import initModule3 from './modules/module3.js';
import initModule4 from './modules/module4.js';
import initModule5 from './modules/module5.js';
// Add the missing imports for modules 6 through 11
import initModule6 from './modules/module6.js';
import initModule7 from './modules/module7.js';
import initModule8 from './modules/module8.js';
import initModule9 from './modules/module9.js';
import initModule10 from './modules/module10.js';
import initModule11 from './modules/module11.js';


document.addEventListener('DOMContentLoaded', () => {
    const sidebarEl = document.getElementById('sidebar');
    const mainEl = document.getElementById('main-content');
    const welcomeMessage = document.getElementById('welcome-message');

    if (!sidebarEl || !mainEl || !welcomeMessage) {
        console.error("Core elements #sidebar or #main-content not found!");
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
        if (rootEl) {
            init(rootEl, sidebarEl);
        }
    });
    
    // --- Hash-based Routing and Active Link Handling ---
    const updateActiveLink = () => {
        const hash = window.location.hash || '#'; // Default to something that won't match
        const links = sidebarEl.querySelectorAll('.sidebar-link');
        
        links.forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        // Hide welcome message if a module is selected
        if (hash.startsWith('#module-')) {
            welcomeMessage.style.display = 'none';
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
});
