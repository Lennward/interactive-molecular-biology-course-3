const TITLE = "Module 4: Introduction to molecular cloning";
const QUIZ_DATA = [
    {
        question: "What are the basic steps of molecular cloning in the correct order?",
        options: [
            "Transformation, PCR amplification, restriction digestion, ligation",
            "PCR amplification, restriction digestion, ligation, transformation",
            "Restriction digestion, PCR amplification, transformation, ligation",
            "Ligation, transformation, PCR amplification, restriction digestion"
        ],
        answer: "PCR amplification, restriction digestion, ligation, transformation",
        type: "mcq",
        explanation: "The correct order is: 1) PCR amplification of target DNA, 2) Restriction digestion of both target and vector, 3) Ligation to join them, 4) Transformation into E. coli."
    },
    {
        question: "What is the main purpose of PCR in molecular cloning?",
        options: [
            "To cut DNA at specific sequences",
            "To amplify a target DNA sequence",
            "To join DNA fragments together",
            "To select for transformed bacteria"
        ],
        answer: "To amplify a target DNA sequence",
        type: "mcq",
        explanation: "PCR (Polymerase Chain Reaction) is used to amplify specific target DNA sequences using primers that define the edges of the sequence to be copied."
    },
    {
        question: "True or False: Restriction enzymes always produce sticky ends when they cut DNA.",
        options: ["True", "False"],
        answer: "False",
        type: "tf",
        explanation: "Restriction enzymes can produce either sticky ends (like EcoRI and KpnI) or blunt ends (like SmaI), depending on the specific enzyme used."
    },
    {
        question: "What are the three essential components that all plasmid expression vectors must contain?",
        options: [
            "Promoter, gene of interest, and terminator",
            "Bacterial replication origin, selection gene, and multiple cloning site",
            "Start codon, coding sequence, and stop codon",
            "Primer binding sites, restriction sites, and ligase recognition sequence"
        ],
        answer: "Bacterial replication origin, selection gene, and multiple cloning site",
        type: "mcq",
        explanation: "All plasmid vectors need: 1) A bacterial replication origin (for copying), 2) A selection gene (for identifying transformed bacteria), and 3) A multiple cloning site (for inserting DNA)."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 4: Introduction to molecular cloning</h2>
            
            <h3>General cloning concepts</h3>
            <p>Molecular biology techniques take advantage of the canonical dogma (transcription, translation, ...) to manipulate these steps <em>in vitro</em> and produce recombinant DNA molecules and proteins that are useful for experimental purposes. Molecular cloning is the process by which a specific target DNA sequence is amplified by polymerase chain reaction from total genomic DNA or other sources like a genomic library or a plasmid, and then inserted into a plasmid vector of interest for further study.</p>

            <p>The basic steps of molecular cloning, depicted in Figure 2, include:</p>
            
            <ol class="list-decimal list-inside ml-4 space-y-2 bg-slate-100 p-3 rounded-md shadow-sm">
                <li><strong>Amplification</strong> of the target DNA sequence by polymerase chain reaction.</li>
                <li><strong>Restriction digestion</strong> of the target sequence and a plasmid vector to create compatible ends.</li>
                <li><strong>Ligation</strong> of the target DNA sequence into the plasmid vector.</li>
                <li><strong>Transformation</strong> of the new recombinant plasmid into E. coli.</li>
            </ol>

            <div class="my-6 text-center">
                <img src="images/image1.png" alt="General cloning procedure schematic" class="rounded-lg shadow-md mx-auto block max-w-full w-auto" onerror="this.onerror=null; this.src='https://placehold.co/300x500/e2e8f0/4a5568?text=Figure+2:+General+Cloning+Procedure'; this.alt='Placeholder: General Cloning Procedure';">
                <p class="text-sm text-gray-600 mt-2"><strong>Figure 2.</strong> General cloning procedure. This schematic cartoon illustrates the general procedure for cloning a given double-stranded DNA sequence in a given circular plasmid. First, sequence-specific primers are created to match the start and end region to be amplified by PCR. These primers are designed to contain 5' overhangs that will provide specific restriction enzyme sites that will match with those available in the plasmid. Thus, after cutting the PCR products and the plasmid with the restriction enzymes (e.g., using BamHI and HindIII as shown here), they can finally be ligated to obtain a circular plasmid bearing the sequence of interest and transformed into competent E. coli. (Modified from Lodish et al. Molecular Cell Biology, 5th ed.)</p>
            </div>

            <p>The transformation is followed by a plasmid purification via e.g. mini prep, to purify the desired plasmid from the bacteria. In most cases this is followed by sequencing to verify that the obtained plasmid has the correct sequence. (Optionally also a Polymerase chain reaction (PCR) or digest can be performed to verify the plasmid sequence by length)</p>

            <div class="interactive-box">
                <h4>Interactive: Cloning Steps Sequence</h4>
                <p class="text-sm mb-3">Can you identify the correct order of molecular cloning steps?</p>
                <div id="cloning-steps-quiz" class="space-y-1">
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">Start with transformation into bacteria</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="true">Start with PCR amplification of target DNA</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">Start with ligation of fragments</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">Start with restriction digestion only</button>
                </div>
                <div id="cloning-steps-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <h3>Polymerase chain reaction (PCR)</h3>
            <p>The technique of polymerase chain reaction (PCR) is based on our understanding of how a new DNA molecule is produced from a preexisting DNA sequence that serves as a template. In the laboratory, DNA polymerases resistant to high temperatures (≥ 100°C)—obtained from extremophile organisms—are used in combination with a thermocycler that controls the temperature of the reaction mixture to amplify double-stranded DNA molecules as shown in Figure 3.</p>
            
            <p>In the first step of the PCR, the reaction mixture is brought to a high temperature in order to melt the DNA duplexes. This step is followed by the annealing of a specific pair of short (typically, 17–30 nucleotides) sequences called primers that define the edges of the DNA sequence to be amplified. The next step involves the elongation of the new nascent DNA strand driven by the DNA polymerase, until completion. The process is repeated over many cycles until the desired amount of DNA is synthesized.</p>

            <div class="my-6 text-center">
                <img src="images/image2.png" alt="PCR steps diagram" class="rounded-lg shadow-md mx-auto block max-w-full w-auto" onerror="this.onerror=null; this.src='https://placehold.co/200x500/e2e8f0/4a5568?text=Figure+3:+PCR+Steps'; this.alt='Placeholder: PCR Steps';">
                <p class="text-sm text-gray-600 mt-2"><strong>Figure 3.</strong> Steps employed during a PCR for obtaining large amounts of a specific DNA sequence using specific primers. (Modified from Lodish et al. Molecular Cell Biology, 5th ed.)</p>
            </div>

            <p>After the desired PCR product is obtained, it may be introduced into an expression vector, usually a plasmid. The plasmid one chosen depends on the application of interest. Some possibilities include: mammalian expression vectors, reporter gene vectors, vectors for protein production in bacteria, etc. Regardless of their specific purpose, however, all plasmid expression vectors contain at least 3 specific components: 1) A bacterial replication origin, 2) a selection gene, and 3) a polylinker or multiple cloning site (MCS) as shown in Figure 4.</p>

            <div class="my-6 text-center">
                <img src="images/image3.png" alt="Basic components of a plasmid cloning vector" class="rounded-lg shadow-md mx-auto block max-w-full w-auto" onerror="this.onerror=null; this.src='https://placehold.co/400x250/e2e8f0/4a5568?text=Figure+4:+Plasmid+Components'; this.alt='Placeholder: Plasmid Components';">
                <p class="text-sm text-gray-600 mt-2"><strong>Figure 4.</strong> Basic components of a plasmid cloning vector for amplification in E. coli. The replication origin (ORI) enables the bacteria to produce many copies of the plasmid as they grow and reproduce. A selection gene like the β-lactamase gene (amp<sup>r</sup>) confers resistance to the antibiotic ampicillin. A polylinker region containing multiple restriction enzyme sites allows for the insertion of DNA sequences using a variety of restriction enzymes. (Modified from Lodish et al. Molecular Cell Biology, 5th ed.)</p>
            </div>

            <div class="interactive-box">
                <h4>Interactive: Essential Plasmid Components</h4>
                <p class="text-sm mb-3">Which three components must ALL plasmid expression vectors contain?</p>
                <div class="grid grid-cols-1 gap-2 text-xs">
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" class="plasmid-component" data-correct="true" data-component="origin">
                        <span>Bacterial replication origin</span>
                    </label>
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" class="plasmid-component" data-correct="false" data-component="promoter">
                        <span>Eukaryotic promoter</span>
                    </label>
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" class="plasmid-component" data-correct="true" data-component="selection">
                        <span>Selection gene (antibiotic resistance)</span>
                    </label>
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" class="plasmid-component" data-correct="true" data-component="mcs">
                        <span>Multiple cloning site (MCS)</span>
                    </label>
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" class="plasmid-component" data-correct="false" data-component="reporter">
                        <span>Reporter gene</span>
                    </label>
                </div>
                <button id="check-plasmid-components" class="mt-2 text-sm px-3 py-1.5">Check Answer</button>
                <div id="plasmid-components-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <h4 class="styled-h4">GG8/Gibson Assembly:</h4>
            <div class="highlight-note">
                <p><strong>Note:</strong> Text below needs to be adapted based on specific course requirements.</p>
            </div>

            <h3>Restriction digestion</h3>
            <p>Restriction enzymes are fundamental tools in molecular biology, which in combination with PCR constitute the basis for most of the techniques available. In general, restriction enzymes are endonucleases able to recognize short palindromic sequences in double stranded DNA molecules and produce a cut or separation. The cutting can produce either "sticky" or blunt ends depending on the restriction enzyme of choice (Figure 5).</p>

            <div class="my-6 text-center">
                <img src="images/image4.png" alt="Examples of restriction endonucleases and their cuts" class="rounded-lg shadow-md mx-auto block max-w-full w-auto" onerror="this.onerror=null; this.src='https://placehold.co/300x200/e2e8f0/4a5568?text=Figure+5:+Restriction+Enzymes'; this.alt='Placeholder: Restriction Enzymes';">
                <p class="text-sm text-gray-600 mt-2"><strong>Figure 5.</strong> Examples of the main kinds of endonucleases, their recognition sequences, and the resulting ends generated on the double-stranded DNA molecule. EcoRI and KpnI, for example, produce sticky ends, whilst SmaI generates blunt ends. (Modified from Lodish et al. Molecular Cell Biology, 5th ed.)</p>
            </div>

            <p>The most straightforward strategy for inserting a fragment of DNA into a plasmid is to cut or "digest" both the sequence to be inserted (the "insert") and the plasmid vector with the same pair of RE. In this way it is easy to introduce the insert in the appropriate orientation. Alternatively, it is possible to use just one restriction enzyme to produce the same sticky end on both ends. Using this method, however, the insert may be randomly oriented in either of two directions in the final expression plasmid. Thus, an additional screening of subsequent products is necessary. A similar situation arises when cloning is performed using restriction enzymes that produce blunt ends.</p>

            <h3>Ligation</h3>
            <p>Following restriction digestion of both insert and plasmid vector, these are fused together in a ligation reaction. In this reaction, depicted in Figure 6, the ligase enzyme catalyzes the fusion of free ends on the plasmid and insert, producing a new plasmid that contains the DNA sequence of interest.</p>

            <div class="my-6 text-center">
                <img src="images/image5.png" alt="Ligation of restriction fragments with complementary sticky ends" class="rounded-lg shadow-md mx-auto block max-w-full w-auto" onerror="this.onerror=null; this.src='https://placehold.co/300x400/e2e8f0/4a5568?text=Figure+6:+DNA+Ligation'; this.alt='Placeholder: DNA Ligation';">
                <p class="text-sm text-gray-600 mt-2"><strong>Figure 6.</strong> Ligation of restriction fragments with complementary sticky ends. After the plasmid vector and DNA fragment of interest have both been digested with the same or compatible REs, those ends bearing complementary sequences will bind to each other, providing the substrate for the T4 DNA ligase. The ligase hydrolyzes two ATP molecules and fuses the double stranded DNA molecules together. (Modified from Lodish et al. Molecular Cell Biology, 5th ed.)</p>
            </div>

            <h3>Transformation</h3>
            <p>Once a recombinant plasmid has been generated, it is transformed into E. coli and amplified as depicted in Figure 7. Transformed bacteria are plated onto nutrient agar plates containing a toxin (e.g., ampicillin). Only bacteria that have taken up the recombinant plasmid and express the selection gene conferring resistance to this toxin will survive and replicate, allowing for amplification of the recombinant plasmid.</p>

            <div class="my-6 text-center">
                <img src="images/image6.png" alt="Basic protocol for cloning and transformation" class="rounded-lg shadow-md mx-auto block max-w-full w-auto" onerror="this.onerror=null; this.src='https://placehold.co/250x550/e2e8f0/4a5568?text=Figure+7:+Transformation+Protocol'; this.alt='Placeholder: Transformation Protocol';">
                <p class="text-sm text-gray-600 mt-2"><strong>Figure 7.</strong> Basic protocol illustrating the cloning of a DNA sequence to generate a recombinant plasmid, its introduction into competent E. coli, known as transformation, and the positive selection of the bacteria colonies containing the recombinant plasmid by taking advantage of their ability to grow in the presence of the selection antibiotic. (Modified from Lodish et al. Molecular Cell Biology, 5th ed.)</p>
            </div>

            <div class="interactive-box">
                <h4>Interactive: Transformation Selection</h4>
                <p class="text-sm mb-3">Why do we use antibiotic selection after transformation?</p>
                <div id="transformation-selection-quiz" class="space-y-1">
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">To kill all the bacteria</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="true">To select only bacteria that took up the plasmid</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">To make bacteria more competent</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">To help the plasmid replicate faster</button>
                </div>
                <div id="transformation-selection-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>
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

function checkPlasmidComponents() {
    const checkboxes = document.querySelectorAll('.plasmid-component');
    const feedbackDiv = document.getElementById('plasmid-components-feedback');
    
    let allCorrect = true;
    let correctCount = 0;
    let incorrectSelections = [];
    
    checkboxes.forEach(checkbox => {
        const isCorrect = checkbox.dataset.correct === 'true';
        const isChecked = checkbox.checked;
        
        if (isCorrect && isChecked) {
            correctCount++;
        } else if (!isCorrect && isChecked) {
            incorrectSelections.push(checkbox.parentElement.textContent.trim());
            allCorrect = false;
        } else if (isCorrect && !isChecked) {
            allCorrect = false;
        }
    });
    
    feedbackDiv.classList.remove('hidden');
    
    if (allCorrect && correctCount === 3) {
        feedbackDiv.innerHTML = '<strong>Correct!</strong> The three essential components are: bacterial replication origin, selection gene, and multiple cloning site (MCS).';
        feedbackDiv.className = 'feedback-message text-xs mt-2 p-1.5 rounded-md bg-green-100 text-green-800';
    } else {
        let message = '<strong>Not quite right.</strong> ';
        if (incorrectSelections.length > 0) {
            message += `You selected some non-essential components. `;
        }
        if (correctCount < 3) {
            message += `Make sure to select all three essential components. `;
        }
        message += 'The three essential components are: bacterial replication origin, selection gene, and multiple cloning site (MCS).';
        feedbackDiv.innerHTML = message;
        feedbackDiv.className = 'feedback-message text-xs mt-2 p-1.5 rounded-md bg-red-100 text-red-800';
    }
}

export default function initModule4(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-4';
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
            <p class="text-sm text-gray-600 mb-4">Test your knowledge of molecular cloning concepts.</p>
            <div id="quiz-container-module-4"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);

    // 3. Attach event listeners for interactive elements
    // Cloning steps quiz
    const cloningStepsContainer = document.getElementById('cloning-steps-quiz');
    if (cloningStepsContainer) {
        cloningStepsContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.dataset.correct === 'true';
                const correctFeedback = "<strong>Correct!</strong> PCR amplification is the first step to make many copies of your target DNA sequence.";
                const incorrectFeedback = "<strong>Not quite.</strong> You need to first amplify your target DNA using PCR before you can clone it.";
                handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }

    // Plasmid components checker
    document.getElementById('check-plasmid-components')?.addEventListener('click', checkPlasmidComponents);

    // Transformation selection quiz
    const transformationContainer = document.getElementById('transformation-selection-quiz');
    if (transformationContainer) {
        transformationContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.dataset.correct === 'true';
                const correctFeedback = "<strong>Correct!</strong> Antibiotic selection ensures only bacteria with the plasmid (containing resistance gene) survive and grow.";
                const incorrectFeedback = "<strong>Not quite.</strong> We use antibiotic selection to identify which bacteria successfully took up our plasmid.";
                handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }
    
    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-4');
}
