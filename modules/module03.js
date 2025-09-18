const TITLE = "Module 3: Experimental overview";

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 3: Experimental overview</h2>
            
            <p>Now that you have gotten familiar with the basics of molecular biology and standard calculations needed in the lab, we will go through a little overview of our experiment. To do so, here is a graphic that illustrates the general steps of the whole experiment. It's no problem if you do not understand everything right now. We will go into more detail in the following modules to thoroughly explain each step of the experiment.</p>

            <div class="info-note">
                <p><strong>Don't worry if this seems complex!</strong> This overview is just to show you the big picture. Each step will be explained in detail in the upcoming modules.</p>
            </div>

            <div class="my-8 text-center">
                <img src="images/image031.png" alt="Experimental workflow overview diagram" class="rounded-lg shadow-md mx-auto block max-w-full w-auto" onerror="this.onerror=null; this.src='https://placehold.co/600x400/e2e8f0/4a5568?text=Experimental+Workflow+Overview'; this.alt='Placeholder: Experimental Workflow Overview';">
                <p class="text-sm text-gray-600 mt-2"><strong>Figure:</strong> Overview of the complete experimental workflow. Created with BioRender.com</p>
            </div>

            <div class="interactive-box">
                <h4>Interactive: Experimental Workflow Preview</h4>
                <p class="text-sm mb-3">While we'll cover each step in detail later, can you identify what this experimental overview is showing you?</p>
                
                <div id="workflow-understanding-quiz" class="space-y-1">
                    <button class="quiz-option text-sm" data-correct="false">Individual molecular biology techniques in isolation</button>
                    <button class="quiz-option text-sm" data-correct="true">A connected sequence of experimental steps working together</button>
                    <button class="quiz-option text-sm" data-correct="false">Only the final results of experiments</button>
                    <button class="quiz-option text-sm" data-correct="false">Theoretical concepts without practical application</button>
                </div>
                <div id="workflow-understanding-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <div class="strategy-note">
                <p><strong>Learning Strategy:</strong> Each module builds upon the previous ones, so don't worry about memorizing every detail now. Focus on understanding the general flow and connections between different experimental steps.</p>
            </div>
           
            <h3>Ready for the Journey?</h3>
            <p>This experimental overview serves as your roadmap. As you progress through each module, you'll gain the knowledge and skills needed to successfully perform each step shown in the workflow diagram.</p>
            
            <p><strong>Let's jump into more detail in the next modules!</strong></p>
        </div>

        <style>
        .info-note {
            background-color: rgba(53, 34, 83, 0.08); /* Purple-dark with low alpha */
            border-left: 4px solid var(--purple-medium);
            padding: 0.75rem 1rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.25rem;
        }

        .info-note p {
            margin-bottom: 0 !important;
            color: var(--purple-dark);
        }

        .strategy-note {
            background-color: rgba(133, 39, 158, 0.08); /* Purple-medium with low alpha */
            border-left: 4px solid var(--purple-light);
            padding: 0.75rem 1rem;
            margin-top: 1rem;
            margin-bottom: 1.5rem;
            border-radius: 0.25rem;
        }

        .strategy-note p {
            margin-bottom: 0 !important;
            color: var(--purple-dark);
        }
        </style>
    `;
}

function handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback) {
    const parentDiv = button.parentElement;
    const feedbackEl = parentDiv.nextElementSibling;
    
    parentDiv.querySelectorAll('.quiz-option').forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('correct', 'incorrect');
    });

    if (isCorrect) {
        button.classList.add('correct');
        feedbackEl.innerHTML = correctFeedback;
    } else {
        button.classList.add('incorrect');
        feedbackEl.innerHTML = incorrectFeedback;
        const correctButton = parentDiv.querySelector('[data-correct="true"]');
        if (correctButton) correctButton.classList.add('correct');
    }
    feedbackEl.classList.remove('hidden');
}

export default function initModule3(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-3';
    link.textContent = TITLE;
    link.className = 'sidebar-link block px-3 py-2 rounded-md';
    
    // Find the sidebar links container and add the link
    const sidebarLinks = sidebarEl.querySelector('#sidebar-links');
    if (sidebarLinks) {
        sidebarLinks.appendChild(link);
    } else {
        console.error('Sidebar links container not found');
    }

    // 2. Inject content
    rootEl.innerHTML = getContent();

    // 3. Attach event listeners for interactive elements
    const workflowQuizContainer = document.getElementById('workflow-understanding-quiz');
    if (workflowQuizContainer) {
        workflowQuizContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.dataset.correct === 'true';
                const correctFeedback = "<strong>Correct!</strong> This overview shows how different experimental steps connect and work together as part of a larger workflow.";
                const incorrectFeedback = "<strong>Not quite.</strong> This overview shows how different experimental steps connect and work together as part of a larger workflow.";
                handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }
}
