const MODULE_NUM = 7;
const TITLE = `Module ${MODULE_NUM}: Work in Progress`;

export default function initModule4(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = `#module-${MODULE_NUM}`;
    link.textContent = TITLE;
    link.className = 'sidebar-link block px-3 py-2 rounded-md';
    sidebarEl.appendChild(link);

    // 2. Inject WIP content
    rootEl.innerHTML = `
        <div class="wip" role="status" aria-live="polite">
          <div class="wip-title">Work in progress</div>
          <div class="progress"><div class="bar"></div></div>
          <small>Module ${MODULE_NUM} is scaffolded and ready for implementation.</small>
        </div>
    `;
}
