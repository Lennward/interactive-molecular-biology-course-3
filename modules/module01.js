const TITLE = "Module 1: Fundamentals of Cell & Molecular Biology";

const QUIZ_DATA = [
    {
        question: "Which of these is NOT a typical component of a plasmid used in molecular cloning for expression in eukaryotic cells?",
        options: [
            "Origin of Replication (ori)",
            "Eukaryotic Promoter (e.g., CMV)",
            "Selectable Marker (e.g., antibiotic resistance)",
            "Ribosome (the organelle)"
        ],
        answer: "Ribosome (the organelle)",
        type: "mcq",
        explanation: "Plasmids contain DNA sequences like promoters and origins of replication. Ribosomes are cellular machinery for protein synthesis and are not part of the plasmid DNA itself."
    }
];

// Interactive terms with their explanations
const INTERACTIVE_TERMS = {
    "Prokaryotes": "Simple cells (e.g., bacteria) lacking a nucleus. Their DNA is located in the cytoplasm. They are usually smaller and simpler in design.",
    "Eukaryotes": "Complex cells (e.g., animal including human, plant, fungal cells) with a nucleus enclosing the DNA, and various membrane-bound organelles like mitochondria and endoplasmic reticulum (ER).",
    "Activation": "Transcription factors bind to promoter-specific sequences, allowing for the binding and assembly of the transcriptional machinery.",
    "Transcription": "RNA polymerase II produces a new mRNA molecule using the coding region of the DNA sequence as a template.",
    "Processing": "Pre-mRNA molecules are edited to produce mature mRNA molecules.",
    "Translation": "Ribosomes produce a new polypeptide encoded in the mRNA by translating it from the start to the stop codon.",
    "Origin of Replication (ori)": "The DNA sequence where replication of the plasmid begins, allowing it to be copied within the host cell (bacteria).",
    "Promoter": "A DNA sequence that initiates transcription of a particular gene. For example, the CMV promoter for strong expression in mammalian cells (eukaryotes).",
    "Multiple Cloning Site (MCS) aka Polylinker": "A short segment of DNA containing many restriction enzyme sites. This allows targeted insertion of a new gene (the gene of interest) using restriction enzymes.",
    "Gene of Interest (GOI)": "The specific gene you want to study or express in host cells (e.g., a gene coding for a therapeutic protein or regulatory RNA).",
    "Selection Marker": "A gene conferring a trait for artificial selection, e.g., an antibiotic resistance gene (like Ampicillin or Kanamycin resistance), allowing only cells that have successfully taken up the plasmid to grow in the presence of the antibiotic.",
    "Tag": "A short DNA sequence fused to the gene of interest, which can be used for protein detection or purification. Examples include GFP (Green Fluorescent Protein) for fluorescence and His-tag for affinity chromatography."
};

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 1: Fundamentals of Cell & Molecular Biology</h2>
            
            <h3>Core Biology</h3>
            <h4 class="styled-h4">Prokaryotes vs. Eukaryotes</h4>
            <p>Living organisms are made of cells. The two main types are:</p>
            <ul>
                <li><strong class="interactive-term" data-term="Prokaryotes">Prokaryotes</strong>: Simple cells (e.g., bacteria) lacking a nucleus. Their DNA is located in the cytoplasm. They are usually smaller and simpler in design.</li>
                <li><strong class="interactive-term" data-term="Eukaryotes">Eukaryotes</strong>: Complex cells (e.g., animal including human, plant, fungal cells) with a nucleus enclosing the DNA, and various membrane-bound organelles like mitochondria and endoplasmic reticulum (ER).</li>
            </ul>
            <p>In this course, we will work with prokaryotic cells (E. coli bacteria) and eukaryotic cells (HEK293), which are used as standard model organisms in molecular biology and are particularly well suited for molecular biological studies.</p>

            <h4 class="styled-h4">The Canonical Dogma</h4>
            <p>This practical course is based on the central dogma of molecular biology, whereby DNA is transcribed to make RNA, and then, via the process of translation, proteins are synthesized.</p>
            
            <!-- Broad Canonical Dogma Image -->
            <img src="images/image011.png" alt="Broad Canonical Dogma" class="my-4 w-full max-w-xl mx-auto" />
            
            <p>This dogma includes the following four steps in eukaryotes:</p>

            <!-- Detailed Canonical Dogma Image -->
            <img src="images/image012.png" alt="Detailed Canonical Dogma in the Cell" class="my-4 w-full max-w-xl mx-auto" />
            
            <p>Figure 1. Genetic information flow in living systems. (Modified from Lodish et al. Molecular Cell Biology, 5th ed.)</p>
            
            <ul>
                <li><strong class="interactive-term" data-term="Activation">Activation</strong>: Transcription factors bind to promoter-specific sequences, allowing for the binding and assembly of the transcriptional machinery.</li>
                <li><strong class="interactive-term" data-term="Transcription">Transcription</strong>: RNA polymerase II produces a new mRNA molecule using the coding region of the DNA sequence as a template.</li>
                <li><strong class="interactive-term" data-term="Processing">Processing</strong>: Pre-mRNA molecules are edited to produce mature mRNA molecules.</li>
                <li><strong class="interactive-term" data-term="Translation">Translation</strong>: Ribosomes produce a new polypeptide encoded in the mRNA by translating it from the start to the stop codon.</li>
            </ul>

            <h4 class="styled-h4">Plasmids</h4>
            <p>A plasmid is a small, circular, double-stranded DNA molecule that is distinct from a cell's chromosomal DNA. It serves as a carrier of genetic information. Plasmids naturally exist in bacterial cells and they also occur in some eukaryotes. In the lab, scientists use plasmids to introduce new genes into cells. First, a plasmid needs to be cloned using bacteria. Afterwards, the functional plasmid can be introduced (=transfected) into mammalian cells. For both organisms (bacteria and mammalian cells), different components of a plasmid are needed.</p>
            <img src="images/image013.png" alt="Plasmid Map" class="my-4 w-full max-w-xl mx-auto" />
            <p>General Plasmid Map; RE = Restriction Enzyme, MCS = Multiple Cloning Site</p>    
            
            <p>A functional plasmid typically contains the following components:</p>
            <ul>
                <li><strong class="interactive-term" data-term="Origin of Replication (ori)">Origin of Replication (ori)</strong>: The DNA sequence where replication of the plasmid begins, allowing it to be copied within the host cell (bacteria).</li>
                <li><strong class="interactive-term" data-term="Promoter">Promoter</strong>: A DNA sequence that initiates transcription of a particular gene. For example, the CMV promoter for strong expression in mammalian cells (eukaryotes).</li>
                <li><strong class="interactive-term" data-term="Multiple Cloning Site (MCS) aka Polylinker">Multiple Cloning Site (MCS) aka Polylinker</strong>: A short segment of DNA containing many restriction enzyme sites. This allows targeted insertion of a new gene (the gene of interest) using restriction enzymes.</li>
                <li><strong class="interactive-term" data-term="Gene of Interest (GOI)">Gene of Interest (GOI)</strong>: The specific gene you want to study or express in host cells (e.g., a gene coding for a therapeutic protein or regulatory RNA).</li>
                <li><strong class="interactive-term" data-term="Selection Marker">Selection Marker</strong>: A gene conferring a trait for artificial selection, e.g., an antibiotic resistance gene (like Ampicillin or Kanamycin resistance), allowing only cells that have successfully taken up the plasmid to grow in the presence of the antibiotic.</li>
                <li><strong class="interactive-term" data-term="Tag">Tag</strong>: A short DNA sequence fused to the gene of interest, which can be used for protein detection or purification. Examples include GFP (Green Fluorescent Protein) for fluorescence and His-tag for affinity chromatography.</li>
            </ul>                      

            <h3>Module Quiz</h3>
            <div id="quiz-container"></div>
        </div>

        <!-- Tooltip/Popup for interactive terms -->
        <div id="term-tooltip" class="term-tooltip">
            <div class="tooltip-content">
                <button class="tooltip-close">&times;</button>
                <div class="tooltip-text"></div>
            </div>
        </div>

        <style>
        .interactive-term {
            color: var(--purple-dark);
            cursor: pointer;
            text-decoration: underline;
            text-decoration-color: var(--purple-light);
            text-decoration-thickness: 2px;
            transition: all 0.2s ease;
            position: relative;
        }

        .interactive-term:hover {
            color: var(--purple-light);
            text-decoration-color: var(--orange-medium);
            transform: translateY(-1px);
        }

        .term-tooltip {
            position: fixed;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            pointer-events: none;
        }

        .term-tooltip.active {
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }

        .tooltip-content {
            background: white;
            border: 2px solid var(--purple-light);
            border-radius: 12px;
            padding: 1.2rem;
            max-width: 350px;
            min-width: 280px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            position: relative;
            animation: tooltipSlideIn 0.3s ease-out;
        }

        @keyframes tooltipSlideIn {
            from {
                transform: translateY(-10px) scale(0.95);
                opacity: 0;
            }
            to {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
        }

        .tooltip-close {
            position: absolute;
            top: 8px;
            right: 12px;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--purple-medium);
            cursor: pointer;
            transition: color 0.2s ease;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .tooltip-close:hover {
            color: var(--purple-dark);
        }

        .tooltip-text {
            color: var(--text-primary);
            line-height: 1.6;
            font-size: 0.95rem;
            padding-right: 20px;
        }

        /* Add a subtle glow effect when term is active */
        .interactive-term.active {
            color: var(--purple-light);
            text-shadow: 0 0 8px rgba(212, 43, 233, 0.3);
        }
        </style>
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

function initializeInteractiveTerms() {
    const tooltip = document.getElementById('term-tooltip');
    const tooltipText = tooltip.querySelector('.tooltip-text');
    const closeBtn = tooltip.querySelector('.tooltip-close');
    
    let currentActiveTerm = null;

    // Handle interactive term clicks
    document.querySelectorAll('.interactive-term').forEach(term => {
        term.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const termName = term.dataset.term;
            const explanation = INTERACTIVE_TERMS[termName];
            
            if (!explanation) return;

            // Remove active state from previous term
            if (currentActiveTerm) {
                currentActiveTerm.classList.remove('active');
            }

            // Set new active term
            currentActiveTerm = term;
            term.classList.add('active');
            
            // Update tooltip content
            tooltipText.innerHTML = `<strong style="color: var(--purple-dark);">${termName}</strong><br><br>${explanation}`;
            
            // Position tooltip near the clicked term
            const rect = term.getBoundingClientRect();
            const tooltipRect = tooltip.querySelector('.tooltip-content').getBoundingClientRect();
            
            let left = rect.left + (rect.width / 2);
            let top = rect.bottom + 10;
            
            // Adjust position to keep tooltip on screen
            if (left + 175 > window.innerWidth) {
                left = window.innerWidth - 175;
            } else if (left - 175 < 0) {
                left = 175;
            }
            left -= 175; // Center the tooltip
            
            if (top + 200 > window.innerHeight) {
                top = rect.top - 10;
                tooltip.style.transform = 'translateY(-100%)';
            } else {
                tooltip.style.transform = 'translateY(0)';
            }
            
            tooltip.style.left = left + 'px';
            tooltip.style.top = top + 'px';
            
            // Show tooltip
            tooltip.classList.add('active');
        });
    });

    // Close tooltip when clicking the close button
    closeBtn.addEventListener('click', () => {
        tooltip.classList.remove('active');
        if (currentActiveTerm) {
            currentActiveTerm.classList.remove('active');
            currentActiveTerm = null;
        }
    });

    // Close tooltip when clicking outside
    document.addEventListener('click', (e) => {
        if (!tooltip.contains(e.target) && !e.target.classList.contains('interactive-term')) {
            tooltip.classList.remove('active');
            if (currentActiveTerm) {
                currentActiveTerm.classList.remove('active');
                currentActiveTerm = null;
            }
        }
    });

    // Close tooltip on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && tooltip.classList.contains('active')) {
            tooltip.classList.remove('active');
            if (currentActiveTerm) {
                currentActiveTerm.classList.remove('active');
                currentActiveTerm = null;
            }
        }
    });
}

export default function initModule1(rootEl, sidebarEl) {
    // Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-1';
    link.textContent = TITLE;
    link.className = 'sidebar-link block px-3 py-2 rounded-md';
    sidebarEl.querySelector('#sidebar-links').appendChild(link);

    // Inject content
    rootEl.innerHTML = getContent();
    
    // Add quiz container
    renderQuiz(QUIZ_DATA, 'quiz-container');
    
    // Initialize interactive terms functionality
    initializeInteractiveTerms();
}
