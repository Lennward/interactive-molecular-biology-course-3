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
    },
    {
        question: "Which of these is a Eukaryotic cell?",
        options: [
            "E. coli",
            "Bacillus subtilis",
            "Human pancreatic cells",
            "Streptococcus pneumoniae",
            "Pseudomonas aeruginosa"
        ],
        answer: "Human pancreatic cells",
        type: "mcq",
        explanation: "Human pancreatic cells are eukaryotic cells with a nucleus and membrane-bound organelles. E. coli, Bacillus subtilis, Streptococcus pneumoniae, and Pseudomonas aeruginosa are all prokaryotic bacterial cells that lack a nucleus."
    },
    {
        question: "What is NOT a step of the canonical dogma?",
        options: [
            "Processing",
            "Translation", 
            "Activation",
            "Replication",
            "Transcription"
        ],
        answer: "Replication",
        type: "mcq",
        explanation: "Replication is the process of copying DNA to produce identical DNA molecules, but it is not part of the canonical dogma of gene expression. The canonical dogma describes the flow from DNA to RNA to protein through activation, transcription, processing, and translation."
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
            <div class="interactive-terms-grid">
                <div class="interactive-term" data-term="Prokaryotes">
                    <div class="term-title">Prokaryotes</div>
                    <div class="term-explanation">Simple cells (e.g., bacteria) lacking a nucleus. Their DNA is located in the cytoplasm. They are usually smaller and simpler in design.</div>
                </div>
                <div class="interactive-term" data-term="Eukaryotes">
                    <div class="term-title">Eukaryotes</div>
                    <div class="term-explanation">Complex cells (e.g., animal including human, plant, fungal cells) with a nucleus enclosing the DNA, and various membrane-bound organelles like mitochondria and endoplasmic reticulum (ER).</div>
                </div>
            </div>
            <p>In this course, we will work with prokaryotic cells (E. coli bacteria) and eukaryotic cells (HEK293), which are used as standard model organisms in molecular biology and are particularly well suited for molecular biological studies.</p>

            <h4 class="styled-h4">The Canonical Dogma</h4>
            <p>This practical course is based on the central dogma of molecular biology, whereby DNA is transcribed to make RNA, and then, via the process of translation, proteins are synthesized.</p>
            
            <!-- Broad Canonical Dogma Image -->
            <img src="images/image011.png" alt="Broad Canonical Dogma" class="my-4 w-full max-w-xl mx-auto" />

             <p>(Modified from Lodish et al. Molecular Cell Biology, 5th ed.)</p>
            
            <p>This dogma includes the following four steps in eukaryotes:</p>

            <!-- Detailed Canonical Dogma Image -->
            <img src="images/image012.png" alt="Detailed Canonical Dogma in the Cell" class="my-4 w-full max-w-xl mx-auto" />
            
            <p>Genetic information flow in living systems. (Modified from Lodish et al. Molecular Cell Biology, 5th ed.)</p>
            
            <div class="interactive-terms-grid">
                <div class="interactive-term" data-term="Activation">
                    <div class="term-title">Activation</div>
                    <div class="term-explanation">Transcription factors bind to promoter-specific sequences, allowing for the binding and assembly of the transcriptional machinery.</div>
                </div>
                <div class="interactive-term" data-term="Transcription">
                    <div class="term-title">Transcription</div>
                    <div class="term-explanation">RNA polymerase II produces a new mRNA molecule using the coding region of the DNA sequence as a template.</div>
                </div>
                <div class="interactive-term" data-term="Processing">
                    <div class="term-title">Processing</div>
                    <div class="term-explanation">Pre-mRNA molecules are edited to produce mature mRNA molecules.</div>
                </div>
                <div class="interactive-term" data-term="Translation">
                    <div class="term-title">Translation</div>
                    <div class="term-explanation">Ribosomes produce a new polypeptide encoded in the mRNA by translating it from the start to the stop codon.</div>
                </div>
            </div>

            <h4 class="styled-h4">Plasmids</h4>
            <p>A plasmid is a small, circular, double-stranded DNA molecule that is distinct from a cell's chromosomal DNA. It serves as a carrier of genetic information. Plasmids naturally exist in bacterial cells and they also occur in some eukaryotes. In the lab, scientists use plasmids to introduce new genes into cells. First, a plasmid needs to be cloned using bacteria. Afterwards, the functional plasmid can be introduced (=transfected) into mammalian cells. For both organisms (bacteria and mammalian cells), different components of a plasmid are needed.</p>
            <img src="images/image013.png" alt="Plasmid Map" class="my-4 w-full max-w-xl mx-auto" />
            <p>General Plasmid Map; RE = Restriction Enzyme, MCS = Multiple Cloning Site from <a href="https://lh5.googleusercontent.com/Re2XXSHN3W10HJ7u7mT63-HS4OEegHGeETTeyhaVxOsT3EWM0ISlGhjlUUATlvKnT33eXaL1Yv3aJHDh7_jNqSUQTwrwtaNj-2K5qTq47I4ZaK6iiEol1mc8KaqBQw=s0" target="_blank" rel="noopener noreferrer">here</a></p>    
            
            <p>A functional plasmid typically contains the following components:</p>
            <div class="interactive-terms-grid plasmid-components">
                <div class="interactive-term" data-term="Origin of Replication (ori)">
                    <div class="term-title">Origin of Replication (ori)</div>
                    <div class="term-explanation">The DNA sequence where replication of the plasmid begins, allowing it to be copied within the host cell (bacteria).</div>
                </div>
                <div class="interactive-term" data-term="Promoter">
                    <div class="term-title">Promoter</div>
                    <div class="term-explanation">A DNA sequence that initiates transcription of a particular gene. For example, the CMV promoter for strong expression in mammalian cells (eukaryotes).</div>
                </div>
                <div class="interactive-term" data-term="Multiple Cloning Site (MCS) aka Polylinker">
                    <div class="term-title">Multiple Cloning Site (MCS)</div>
                    <div class="term-explanation">A short segment of DNA containing many restriction enzyme sites. This allows targeted insertion of a new gene (the gene of interest) using restriction enzymes.</div>
                </div>
                <div class="interactive-term" data-term="Gene of Interest (GOI)">
                    <div class="term-title">Gene of Interest (GOI)</div>
                    <div class="term-explanation">The specific gene you want to study or express in host cells (e.g., a gene coding for a therapeutic protein or regulatory RNA).</div>
                </div>
                <div class="interactive-term" data-term="Selection Marker">
                    <div class="term-title">Selection Marker</div>
                    <div class="term-explanation">A gene conferring a trait for artificial selection, e.g., an antibiotic resistance gene (like Ampicillin or Kanamycin resistance), allowing only cells that have successfully taken up the plasmid to grow in the presence of the antibiotic.</div>
                </div>
                <div class="interactive-term" data-term="Tag">
                    <div class="term-title">Tag</div>
                    <div class="term-explanation">A short DNA sequence fused to the gene of interest, which can be used for protein detection or purification. Examples include GFP (Green Fluorescent Protein) for fluorescence and His-tag for affinity chromatography.</div>
                </div>
            </div>                      

            <h3>Module Quiz</h3>
            <div id="quiz-container"></div>
        </div>

        <style>
        .interactive-terms-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 12px;
            margin: 1.5rem 0;
            padding: 0.5rem;
        }

        .interactive-terms-grid.plasmid-components {
            grid-template-columns: repeat(3, 1fr);
        }

        .interactive-term {
            background: linear-gradient(145deg, #ffffff 0%, rgba(212, 43, 233, 0.05) 100%);
            border: 2px solid rgba(212, 43, 233, 0.2);
            border-radius: 12px;
            padding: 16px 20px;
            text-align: center;
            font-weight: 600;
            font-size: 1.1em;
            color: var(--purple-dark);
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            box-shadow: 0 2px 8px rgba(212, 43, 233, 0.1), 
                        0 1px 3px rgba(0, 0, 0, 0.08);
            overflow: hidden;
            user-select: none;
            min-height: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .term-title {
            font-weight: 600;
            font-size: 1.1em;
            color: inherit;
        }

        .term-explanation {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            margin-top: 0;
            font-size: 0.9em;
            font-weight: 400;
            line-height: 1.4;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            text-align: left;
            color: var(--text-primary);
        }

        .interactive-term.expanded {
            min-height: auto;
            padding: 20px;
        }

        .interactive-term.expanded .term-explanation {
            opacity: 1;
            max-height: 200px;
            margin-top: 12px;
        }

        .interactive-term::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(212, 43, 233, 0.1), 
                transparent
            );
            transition: left 0.6s ease;
        }

        .interactive-term:hover::before {
            left: 100%;
        }

        .interactive-term:hover {
            transform: translateY(-4px) scale(1.02);
            border-color: var(--purple-light);
            box-shadow: 0 8px 25px rgba(212, 43, 233, 0.25),
                        0 3px 12px rgba(0, 0, 0, 0.1);
            background: linear-gradient(145deg, #ffffff 0%, rgba(246, 75, 204, 0.08) 100%);
        }

        .interactive-term:active {
            transform: translateY(-2px) scale(1.01);
            transition: transform 0.1s ease;
        }

        .interactive-term.active {
            background: linear-gradient(145deg, var(--purple-light), var(--purple-accent));
            border-color: var(--purple-accent);
            box-shadow: 0 6px 20px rgba(212, 43, 233, 0.4),
                        0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .interactive-term.active .term-title {
            color: white;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            font-weight: 700;
        }

        .interactive-term.active .term-explanation {
            color: rgba(255, 255, 255, 0.95);
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .interactive-terms-grid {
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                gap: 10px;
                padding: 0.25rem;
            }
            
            .interactive-terms-grid.plasmid-components {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .interactive-term {
                padding: 12px 16px;
                font-size: 1em;
            }

            .term-title {
                font-size: 1em;
            }

            .term-explanation {
                font-size: 0.85em;
            }
        }

        @media (max-width: 480px) {
            .interactive-terms-grid,
            .interactive-terms-grid.plasmid-components {
                grid-template-columns: 1fr;
                gap: 8px;
            }
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
    // Handle interactive term clicks - no tooltip needed anymore
    document.querySelectorAll('.interactive-term').forEach(term => {
        term.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle expanded state
            const isExpanded = term.classList.contains('expanded');
            
            // Close all other expanded terms
            document.querySelectorAll('.interactive-term.expanded').forEach(otherTerm => {
                if (otherTerm !== term) {
                    otherTerm.classList.remove('expanded', 'active');
                }
            });
            
            // Toggle current term
            if (isExpanded) {
                term.classList.remove('expanded', 'active');
            } else {
                term.classList.add('expanded', 'active');
            }
        });
    });

    // Close expanded terms when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.interactive-term')) {
            document.querySelectorAll('.interactive-term.expanded').forEach(term => {
                term.classList.remove('expanded', 'active');
            });
        }
    });

    // Close expanded terms on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.interactive-term.expanded').forEach(term => {
                term.classList.remove('expanded', 'active');
            });
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
