const TITLE = "Module 3: Experimental overview";
const QUIZ_DATA = [
    {
        question: "What is the purpose of this experimental overview module?",
        options: ["To provide detailed protocols for each step", "To give a general overview of the entire experiment workflow", "To teach specific molecular biology techniques", "To calculate dilutions and concentrations"],
        answer: "To give a general overview of the entire experiment workflow",
        type: "mcq",
        explanation: "This module provides a graphic illustration of the general steps of the whole experiment to give students an overview before diving into detailed explanations in subsequent modules."
    },
    {
        question: "True or False: You need to understand every detail of the experimental workflow at this stage.",
        options: ["True", "False"],
        answer: "False",
        type: "tf",
        explanation: "It's perfectly normal not to understand everything right now. The following modules will go into more detail to thoroughly explain each step of the experiment."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 3: Experimental overview</h2>
            
            <p>Now that you have gotten familiar with the basics of molecular biology and standard calculations needed in the lab, we will go through a little overview of our experiment. To do so, here is a graphic that illustrates the general steps of the whole experiment. It's no problem if you do not understand everything right now. We will go into more detail in the following modules to thoroughly explain each step of the experiment.</p>

            <div class="highlight-note">
                <p><strong>Don't worry if this seems complex!</strong> This overview is just to show you the big picture. Each step will be explained in detail in the upcoming modules.</p>
            </div>

            <div class="my-8 text-center">
                <img src="images/image031.png" alt="Experimental workflow overview diagram" class="rounded-lg shadow-md mx-auto block max-w-full w-auto" onerror="this.onerror=null; this.src='https://placehold.co/600x400/e2e8f0/4a5568?text=Experimental+Workflow+Overview'; this.alt='Placeholder: Experimental Workflow Overview';">
                <p class="text-sm text-gray-600 mt-2"><strong>Figure:</strong> Overview of the complete experimental workflow</p>
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

            <h3>What's Coming Next</h3>
            <p>In the following modules, you will learn about each component of this experimental workflow in detail:</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div class="goal-box">
                    <strong>Cell Culture Fundamentals</strong>
                    <p class="text-sm">Learn how to work with mammalian cells, maintain sterile conditions, and prepare cells for experiments.</p>
                </div>
                <div class="goal-box">
                    <strong>Transfection Techniques</strong>
                    <p class="text-sm">Understand how to introduce genetic material into cells and the principles behind different transfection methods.</p>
                </div>
                <div class="goal-box">
                    <strong>Protein Detection</strong>
                    <p class="text-sm">Master fluorescence microscopy and immunocytochemistry techniques to visualize and quantify protein expression.</p>
                </div>
                <div class="goal-box">
                    <strong>Data Analysis</strong>
                    <p class="text-sm">Learn to calculate transfection efficiency, analyze results, and draw meaningful conclusions from your experiments.</p>
                </div>
            </div>

            <div class="highlight-note">
                <p><strong>Learning Strategy:</strong> Each module builds upon the previous ones, so don't worry about memorizing every detail now. Focus on understanding the general flow and connections between different experimental steps.</p>
            </div>

            <h3>Ready for the Journey?</h3>
            <p>This experimental overview serves as your roadmap. As you progress through each module, you'll gain the knowledge and skills needed to successfully perform each step shown in the workflow diagram.</p>
            
            <p><strong>Let's jump into more detail in the next modules!</strong></p>
        </div>
    `;
}

function renderQuiz(quizData, containerId) {
    const quizContainer = document.getElementById(containerId);
    if (!quizContainer) return;
    quizContainer.innerHTML = '';

    quizData.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        let optionsHtml = q.options.map(optionText => `<button class="quiz-option">${optionText}</button>`).join('');

        questionDiv.innerHTML = `
            <p class="font-medium mb-3">${index + 1}. ${q.question}</p>
            <div class="space-y-2">${optionsHtml}</div>
            <div class="feedback-message text-sm mt-2 p-2 rounded-md hidden"></div>
        `;
        
        questionDiv.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const feedbackDiv = questionDiv.querySelector('.feedback-message');
                const allOptions = questionDiv.querySelectorAll('.quiz-option');
                allOptions.forEach(btn => btn.disabled = true);
                
                if (button.textContent === q.answer) {
                    button.classList.add('correct');
                    feedbackDiv.innerHTML = '<strong>Correct!</strong> ';
                } else {
                    button.classList.add('incorrect');
                    feedbackDiv.innerHTML = `<strong>Incorrect.</strong> The correct answer is: <span class="font-semibold">${q.answer}</span>. `;
                    allOptions.forEach(btn => { if (btn.textContent === q.answer) btn.classList.add('correct'); });
                }
                if (q.explanation) {
                    feedbackDiv.innerHTML += `<br><span class="text-xs">${q.explanation}</span>`;
                }
                feedbackDiv.classList.remove('hidden');
            });
        });
        quizContainer.appendChild(questionDiv);
    });
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

    // Add quiz container
    const quizHtml = `
        <div class="mt-8 pt-6 border-t-2 border-purple-300">
            <h3 class="text-xl font-semibold text-purple-700 mb-4">Module Quiz!</h3>
            <p class="text-sm text-gray-600 mb-4">Test your understanding of this overview.</p>
            <div id="quiz-container-module-3"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);

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
    
    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-3');
}
