const TITLE = "Module 5: In silico Cloning of DNA-Plasmids";
const QUIZ_DATA = [
    {
        question: "What does 'in silico' cloning mean?",
        options: [
            "Cloning performed in bacterial cells",
            "Cloning performed in mammalian cells", 
            "Cloning performed using computer simulation",
            "Cloning performed in test tubes"
        ],
        answer: "Cloning performed using computer simulation",
        type: "mcq",
        explanation: "In silico cloning refers to computer-based simulation and design of cloning strategies before performing the actual laboratory work."
    },
    {
        question: "What is the recommended length range for PCR primers?",
        options: ["10-15 nucleotides", "18-30 nucleotides", "35-40 nucleotides", "45-50 nucleotides"],
        answer: "18-30 nucleotides",
        type: "mcq",
        explanation: "The optimal primer length is generally 18-30 nucleotides to ensure specificity while maintaining good binding properties."
    },
    {
        question: "What should be the melting temperature (Tm) range for primers?",
        options: ["50-60°C", "65-75°C", "80-90°C", "95-100°C"],
        answer: "65-75°C",
        type: "mcq",
        explanation: "Primers should have a melting temperature between 65-75°C and within 5°C of each other for optimal PCR performance."
    },
    {
        question: "True or False: Primers should end with A or T bases at the 3' end for better binding.",
        options: ["True", "False"],
        answer: "False",
        type: "tf",
        explanation: "Primers should preferably end in C or G at the 3' end to promote stronger binding due to the three hydrogen bonds in G-C pairs."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 5: <em>In silico</em> Cloning of DNA-Plasmids</h2>
            
            <p>Now you have a broad grasp of the principle behind cloning.</p>
            
            <p>In this module you will learn how to perform an <em>in silico</em> cloning to change the sequence of a DNA-plasmid by inserting the sequence of your gene of interest (GOI) into the plasmid.</p>

            <h3><em>In silico</em> cloning:</h3>
            <p>First, a cloning needs to be performed "<em>in silico</em>" meaning based on computer simulation.</p>
            
            <p>With this it is possible to identify the sequences of commercial plasmids (e.g. the plasmid that you are using as template for your cloning) from company websites and other DNA sequences (e.g. the sequence of your GOI) from online databases. Further <em>in silico</em> cloning is especially useful to design <span class="clickable-term" data-term="primers">primers</span> which are needed for a PCR. In addition, <em>in silico</em> cloning enables you to identify restriction enzyme sites and edit plasmid vector sequences.</p>

            <div class="interactive-terms-grid primers-section">
                <div class="interactive-term" data-term="primers">
                    <div class="term-title">Primers</div>
                    <div class="term-explanation">A primer is a short nucleic acid sequence that provides a starting point for DNA synthesis. In natural biological processes, like DNA replication, primers are short strands of RNA created by the enzyme primase. However, in laboratory techniques such as the Polymerase Chain Reaction (PCR), short DNA fragments are synthesized and used as primers to target specific DNA sequences for amplification or sequencing.</div>
                </div>
            </div>

            <div class="interactive-box">
                <h4>Quick Check: What is in silico cloning?</h4>
                <p class="text-sm mb-2">Select the best definition:</p>
                <div id="in-silico-quiz" class="space-y-1">
                    <button class="quiz-option text-sm" data-correct="false">Physical cloning in bacteria</button>
                    <button class="quiz-option text-sm" data-correct="true">Computer-based cloning simulation</button>
                    <button class="quiz-option text-sm" data-correct="false">Manual DNA manipulation</button>
                    <button class="quiz-option text-sm" data-correct="false">Cell-free cloning system</button>
                </div>
                <div id="in-silico-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <h3>Finding commercial plasmid vectors</h3>
            <p>A good place to find commercially available plasmids for specific applications is <a href="http://www.addgene.org/" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">http://www.addgene.org/</a>. Addgene is a commercial depository where researchers from all over the world can make their expression vectors available for the scientific community.</p>

            <p>Plasmid documentation and sequences are available for all vectors prior to purchase. The following screenshots show an <strong>example</strong> of a plasmid and its sequence.</p>

            <div class="my-6 text-center">
                <img src="images/image051.png" alt="Addgene plasmid page example" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[500px]" onerror="this.onerror=null; this.src='https://placehold.co/500x300/e2e8f0/4a5568?text=Image+51:+Addgene+Plasmid+Page'; this.alt='Placeholder: Addgene Plasmid Page';">
                <p class="text-sm text-gray-600 mt-2">Screenshot showing an example plasmid page on Addgene with detailed information and sequence data.</p>
            </div>

            <p>Specific features of the plasmid, such as promoter regions, coding regions, and restriction sites can be visualized using the Map tool on Addgene. One can also download the sequence and analyze it using a sequence editing and analysis program (see below).</p>

            <div class="my-6 text-center">
                <img src="images/image052.png" alt="Addgene plasmid map visualization" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[500px]" onerror="this.onerror=null; this.src='https://placehold.co/500x350/e2e8f0/4a5568?text=Image+52:+Plasmid+Map+Tool'; this.alt='Placeholder: Plasmid Map Tool';">
                <p class="text-sm text-gray-600 mt-2">The Map tool on Addgene allows visualization of plasmid features including promoters, coding regions, and restriction sites.</p>
            </div>

            <h3>Identifying restriction enzyme sites and editing plasmid vector sequences</h3>
            <p>Once a plasmid vector and insert sequence have been identified, any of several free programs like Benchling, Serial Cloner, SnapGene, or ApE can be used to define a cloning strategy. Restriction enzyme selection, primer design, and documentation of each newly designed plasmid are all possible with such programs. In this practical session we will use SnapGene software, which is commercially licensed, but which offers a 1-month free trial with full features. In order to download and install SnapGene on your laptop, you will be asked to register first on the SnapGene web page (<a href="https://www.snapgene.com" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">https://www.snapgene.com</a>).</p>

            <p>With SnapGene, as with other similar programs, it is possible to copy, paste, and edit entire nucleic acid sequences, including plasmids. These sequences can be set to be linear or circular. It is possible to scan for specific features and display them using a graphic plasmid map. New features not listed in the database can be manually defined when required (e.g., multicloning sites (MCS), regulatory sequences, and coding sequences). Restriction enzyme sites can also be easily identified and displayed.</p>

            <h3>Designing primers</h3>
            <p>Once a sequence of nucleotides for cloning has been selected, the next step is to design a set of primers that will enable the amplification by PCR of this sequence and its subsequent insertion into an expression vector. Good primer design is essential for a successful PCR reaction. There are many factors to take into account when designing the optimal primers for a gene of interest, and a number of programs (e.g., vector-NTI, SnapGene) and online sites (e.g., primer3plus.com) that offer informatics tools for primer design. Regardless of whether primers are designed by hand or with the help of a program, however, some general guidelines for primer design to consider include the following (from thermofisher.com):</p>

            <div class="primer-guidelines">
                <h4 class="styled-h4">Primer Design Guidelines</h4>
                <ul class="space-y-3 bg-slate-100 p-4 rounded-md shadow-sm">
                    <li>• In general, a length of 18–30 nucleotides for primers is preferred.</li>
                    <li>• Try to make the melting temperature (Tm) of the primers between 65°C and 75°C, and within 5°C of each other.</li>
                    <li>• If the Tm of your primer is very low, try to find a sequence with more GC content, or extend the length of the primer a little.</li>
                    <li>• Aim for the GC content to be between 40 and 60%, with the 3' of a primer ending in C or G to promote binding.</li>
                    <li>• Typically, 3 to 6 nucleotides are added 5' of the restriction enzyme site in the primer to allow for efficient cutting.</li>
                    <li>• Try to avoid regions having secondary structure, and try to have a balanced distribution of GC-rich and AT-rich domains.</li>
                    <li>• Try to avoid runs of 4 or more of one base or dinucleotide repeats (for example, ACCCC or ATATATAT).</li>
                    <li>• Avoid intra-primer homology (more than 3 bases that complement within the primer) or inter-primer homology (forward and reverse primers having complementary sequences). These circumstances can cause the primers to form self-dimers or primer-dimers instead of annealing to the desired DNA sequences.</li>
                    <li>• If you are using the primers for mutagenesis, try to have the mismatched bases towards the middle of the primer.</li>
                </ul>
            </div>

            <div class="interactive-box">
                <h4>Interactive: Primer Design Knowledge Check</h4>
                <p class="text-sm mb-3">Which of these primer characteristics is most important for successful PCR?</p>
                <div id="primer-design-quiz" class="space-y-1">
                    <button class="quiz-option text-sm" data-correct="false">Primer length > 40 nucleotides</button>
                    <button class="quiz-option text-sm" data-correct="true">Tm between 65-75°C with primers within 5°C of each other</button>
                    <button class="quiz-option text-sm" data-correct="false">High AT content at 3' end</button>
                    <button class="quiz-option text-sm" data-correct="false">Many repetitive sequences</button>
                </div>
                <div id="primer-design-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <h4 class="styled-h4">Non-specific binding sites</h4>
            <p>Even the best-designed primers sometimes result in the amplification of undesired DNA sequences. Therefore, after designing primers to amplify a gene of interest, one additional step is required to control for their sequence specificity to the target DNA. Specifically, one should examine whether primers bind to other, undesired regions within the template DNA. One means to do this is by using the BLAST tool in the NCBI web site. BLAST basically aligns your short DNA sequences to whole genomes (or to another DNA sequence) and shows to which sites your primers can bind. To use it you can copy your primer sequence (without restriction enzyme sites) into the search bar and see to how many different sites it binds.</p>

            <div class="my-6 text-center">
                <img src="images/image053.png" alt="BLAST search interface for primer specificity" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[400px]" onerror="this.onerror=null; this.src='https://placehold.co/400x200/e2e8f0/4a5568?text=Image+53:+BLAST+Search'; this.alt='Placeholder: BLAST Search Interface';">
                <p class="text-sm text-gray-600 mt-2">BLAST search interface for checking primer specificity against genomic sequences.</p>
            </div>

            <p>The results page will provide information about other possible primer binding sites, including their locations within the genome (or other DNA sequence), their length, and their degree of overlap with a given primer.</p>

            <h4 class="styled-h4">Melting temperature</h4>
            <p>The simplest formula for determining primer melting temperatures (Tm) is <span class="formula">Tm = 2×(A+T) + 4×(C+G)</span>. However, salt concentrations and other physicochemical factors may also influence Tm. There are many commercial sites offering online tools for Tm calculations that take these factors into account (e.g., <a href="http://tmcalculator.neb.com/#!/" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">http://tmcalculator.neb.com/#!/</a>). These sites typically allow one to insert primer sequences and concentrations, and the polymerase and buffers used in order to obtain a recommended annealing temperature for use in the PCR cycling protocol.</p>

            <div class="my-6 text-center">
                <img src="images/image054.png" alt="Tm calculator tool interface" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[400px]" onerror="this.onerror=null; this.src='https://placehold.co/400x180/e2e8f0/4a5568?text=Image+54:+Tm+Calculator'; this.alt='Placeholder: Tm Calculator Tool';">
                <p class="text-sm text-gray-600 mt-2">Online Tm calculator tool for determining optimal annealing temperatures for PCR primers.</p>
            </div>

            <h4 class="styled-h4">Secondary structure</h4>
            <p>To analyze primers for unwanted secondary structures or primer-dimers that could interfere with the PCR, we can use online tools available on the Integrated DNA Technologies website (<a href="https://eu.idtdna.com/calc/analyzer" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">https://eu.idtdna.com/calc/analyzer</a>) or others like <a href="https://www.biosyn.com/gizmo/tools/oligo/oligonucleotide%20properties%20calculator.htm" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">https://www.biosyn.com/gizmo/tools/oligo/oligonucleotide%20properties%20calculator.htm</a>. With this tool, it is possible to examine primers for hairpin, self-dimer and hetero-dimer formation. BLAST search and Tm mismatch analyses are also possible from this website.</p>

            <div class="my-6 text-center">
                <img src="images/image055.png" alt="IDT primer analysis tool showing secondary structure prediction" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[400px]" onerror="this.onerror=null; this.src='https://placehold.co/400x220/e2e8f0/4a5568?text=Image+55:+IDT+Primer+Analysis'; this.alt='Placeholder: IDT Primer Analysis Tool';">
                <p class="text-sm text-gray-600 mt-2">IDT primer analysis tool interface showing secondary structure predictions and dimer formation analysis.</p>
            </div>

            <div class="highlight-note">
                <p><strong>Key Takeaway:</strong> Successful <em>in silico</em> cloning requires careful consideration of primer design, specificity checking, and thorough analysis of secondary structures to ensure optimal PCR performance and successful cloning outcomes.</p>
            </div>
        </div>

        <style>
        /* Interactive Terms Grid for primers - using Module 8 styling */
        .primers-section {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 1.5rem 0;
            padding: 0.5rem;
            max-width: 800px;
        }

        .primers-section .interactive-term {
            background: linear-gradient(145deg, #ffffff 0%, rgba(212, 43, 233, 0.05) 100%);
            border: 2px solid rgba(212, 43, 233, 0.2);
            border-radius: 12px;
            padding: 16px 20px;
            text-align: left;
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

        .primers-section .term-title {
            font-weight: 600;
            font-size: 1.1em;
            color: inherit;
        }

        .primers-section .term-explanation {
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

        .primers-section .interactive-term.expanded {
            min-height: auto;
            padding: 20px;
        }

        .primers-section .interactive-term.expanded .term-explanation {
            opacity: 1;
            max-height: 200px;
            margin-top: 12px;
        }

        .primers-section .interactive-term::before {
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

        .primers-section .interactive-term:hover::before {
            left: 100%;
        }

        .primers-section .interactive-term:hover {
            transform: translateY(-4px) scale(1.02);
            border-color: var(--purple-light);
            box-shadow: 0 8px 25px rgba(212, 43, 233, 0.25),
                        0 3px 12px rgba(0, 0, 0, 0.1);
            background: linear-gradient(145deg, #ffffff 0%, rgba(246, 75, 204, 0.08) 100%);
        }

        .primers-section .interactive-term:active {
            transform: translateY(-2px) scale(1.01);
            transition: transform 0.1s ease;
        }

        .primers-section .interactive-term.active {
            background: linear-gradient(145deg, var(--purple-light), var(--purple-accent));
            border-color: var(--purple-accent);
            box-shadow: 0 6px 20px rgba(212, 43, 233, 0.4),
                        0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .primers-section .interactive-term.active .term-title {
            color: white;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            font-weight: 700;
        }

        .primers-section .interactive-term.active .term-explanation {
            color: rgba(255, 255, 255, 0.95);
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        }

        /* Clickable term styling for inline terms */
        .clickable-term {
            color: var(--purple-medium);
            cursor: pointer;
            text-decoration: underline;
            font-weight: 500;
            transition: color 0.2s ease;
        }

        .clickable-term:hover {
            color: var(--purple-dark);
        }

        /* Primer guidelines styling */
        .primer-guidelines ul {
            list-style: none;
            padding-left: 0;
        }

        .primer-guidelines li {
            margin-bottom: 0.75rem;
            padding-left: 1rem;
            position: relative;
        }

        /* Responsive adjustments for primers section */
        @media (max-width: 768px) {
            .primers-section .interactive-term {
                padding: 12px 16px;
                font-size: 1em;
            }

            .primers-section .term-title {
                font-size: 1em;
            }

            .primers-section .term-explanation {
                font-size: 0.85em;
            }
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

function initializeInteractiveTerms(rootElement) {
    // Handle interactive term clicks - scoped to this module only
    rootElement.querySelectorAll('.primers-section .interactive-term').forEach(term => {
        term.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle expanded state
            const isExpanded = term.classList.contains('expanded');
            
            // Close all other expanded terms IN THIS MODULE ONLY
            rootElement.querySelectorAll('.primers-section .interactive-term.expanded').forEach(otherTerm => {
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

    // Handle clickable inline terms
    rootElement.querySelectorAll('.clickable-term').forEach(clickableTerm => {
        clickableTerm.addEventListener('click', (e) => {
            e.preventDefault();
            const termName = clickableTerm.dataset.term;
            const correspondingTerm = rootElement.querySelector(`.interactive-term[data-term="${termName}"]`);
            if (correspondingTerm) {
                // Close all other expanded terms
                rootElement.querySelectorAll('.primers-section .interactive-term.expanded').forEach(otherTerm => {
                    otherTerm.classList.remove('expanded', 'active');
                });
                // Expand the corresponding term
                correspondingTerm.classList.add('expanded', 'active');
                // Scroll to the term
                correspondingTerm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    // Close expanded terms when clicking outside - scoped to this module
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.primers-section .interactive-term') || !rootElement.contains(e.target)) {
            rootElement.querySelectorAll('.primers-section .interactive-term.expanded').forEach(term => {
                term.classList.remove('expanded', 'active');
            });
        }
    });

    // Close expanded terms on escape key - scoped to this module
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            rootElement.querySelectorAll('.primers-section .interactive-term.expanded').forEach(term => {
                term.classList.remove('expanded', 'active');
            });
        }
    });
}

export default function initModule5(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-5';
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
            <p class="text-sm text-gray-600 mb-4">Test your knowledge of in silico cloning concepts.</p>
            <div id="quiz-container-module-5"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);

    // 3. Attach event listeners for interactive elements
    // In silico quiz
    const inSilicoContainer = document.getElementById('in-silico-quiz');
    if (inSilicoContainer) {
        inSilicoContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.dataset.correct === 'true';
                const correctFeedback = "<strong>Correct!</strong> In silico cloning uses computer simulation to plan cloning strategies before laboratory work.";
                const incorrectFeedback = "<strong>Not quite.</strong> In silico refers to computer-based simulation and design of cloning strategies.";
                handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }

    // Primer design quiz
    const primerDesignContainer = document.getElementById('primer-design-quiz');
    if (primerDesignContainer) {
        primerDesignContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.dataset.correct === 'true';
                const correctFeedback = "<strong>Correct!</strong> Optimal melting temperature and primer compatibility are crucial for successful PCR amplification.";
                const incorrectFeedback = "<strong>Not quite.</strong> The most important factor is having Tm between 65-75°C with primers within 5°C of each other for optimal PCR performance.";
                handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }
    
    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-5');

    // 5. Initialize interactive terms functionality
    initializeInteractiveTerms(rootEl);
}
