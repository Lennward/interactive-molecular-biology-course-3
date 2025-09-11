const TITLE = "Module 10: Fluorescence Microscopy of GFP as proof of fluorophore expression";
const QUIZ_DATA = [
    {
        question: "What is the primary purpose of adding 2x BBS in the calcium phosphate transfection method?",
        options: ["To provide nutrients to the cells", "To permeabilize the cell membrane", "To form a DNA-calcium phosphate co-precipitate", "To select for transfected cells"],
        answer: "To form a DNA-calcium phosphate co-precipitate",
        type: "mcq",
        explanation: "2x BBS (Buffered Saline Solution) provides the phosphate ions that react with calcium chloride and DNA to form the fine precipitate that cells can take up."
    },
    {
        question: "True or False: For optimal calcium phosphate transfection, cells should ideally be 100% confluent.",
        options: ["True", "False"],
        answer: "False",
        type: "tf",
        explanation: "Cells should be actively dividing and typically at a confluency of 50-70% for efficient calcium phosphate transfection. 100% confluency often leads to lower efficiency."
    },
    {
        question: "Which of the following is NOT a critical factor for successful calcium phosphate transfection?",
        options: ["pH of the BBS solution", "Quality and quantity of plasmid DNA", "Vigorous vortexing after adding BBS", "Cell health and confluency"],
        answer: "Vigorous vortexing after adding BBS",
        type: "mcq",
        explanation: "Vigorous vortexing after adding BBS can lead to large, irregular precipitates and shear DNA, reducing transfection efficiency. Gentle mixing by inversion is recommended."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 3: Cellular Alchemy: The Art of Transfection</h2>
            <p>Welcome to the fascinating world of transfection! In this module, you'll learn how to introduce foreign genetic material into cells, a cornerstone technique in molecular biology that allows us to study gene function, produce proteins, and much more. It's like giving cells a new set of instructions!</p>
            
            <h3>I. Module Overview & Learning Objectives</h3>
            <p>This module will guide you through the principles and practical steps of transfecting eukaryotic cells, focusing on the calcium phosphate method.</p>
            <ul class="list-disc list-inside mb-4 bg-sky-50 p-3 rounded-md">
                <li>Understand the definition and goals of transfection.</li>
                <li>Differentiate between transient and stable transfection.</li>
                <li>Get an overview of various transfection methods and their applications.</li>
                <li>Master the calcium phosphate transfection protocol for HEK293 cells.</li>
                <li>Learn to calculate necessary reagent and plasmid amounts.</li>
                <li>Identify key factors for successful transfection and basic troubleshooting.</li>
            </ul>

            <h3>II. Content Sections</h3>
            
            <h4 class="styled-h4">A. Introduction to Transfection</h4>
            <p><strong>What is Transfection?</strong><br>
            Transfection is a powerful biotechnological process used to introduce foreign nucleic acids – most commonly plasmid DNA – into eukaryotic cells. This allows scientists to manipulate the genetic makeup of cells in a controlled manner.</p>
            
            <p><strong>Goals of Transfection:</strong><br>
            The primary goals include:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div class="goal-box"><strong>Gene Expression</strong><p class="text-sm">Introducing a gene to produce a specific protein (e.g., a fluorescent marker like GFP, or a therapeutic protein).</p></div>
                <div class="goal-box"><strong>Gene Silencing/Knockdown</strong><p class="text-sm">Introducing constructs (like siRNA or shRNA) to reduce or eliminate the expression of a specific endogenous gene.</p></div>
                <div class="goal-box"><strong>Reporter Assays</strong><p class="text-sm">Studying the activity of promoters or other regulatory elements by linking them to a reporter gene.</p></div>
                <div class="goal-box"><strong>Protein Production</strong><p class="text-sm">Using cells as factories to produce large quantities of a desired protein.</p></div>
            </div>
            

            <p><strong>Transient vs. Stable Transfection:</strong><br>
            Transfection can be either transient or stable:
            <ul class="list-disc list-inside ml-4">
                <li><strong>Transient Transfection:</strong> The introduced nucleic acid (e.g., plasmid) enters the cell and is expressed for a limited period (typically 24-96 hours). It is not integrated into the host cell's genome and is eventually lost or diluted out as cells divide. This is useful for rapid gene expression studies.</li>
                <li><strong>Stable Transfection:</strong> The introduced nucleic acid is integrated into the host cell's genome. This results in long-term, stable expression of the gene, which is passed on to daughter cells during cell division. Creating stable cell lines requires selection methods (e.g., using antibiotic resistance markers).</li>
            </ul>
            </p>
            <img src="placeholder_transfection_overview.svg" alt="Schematic of plasmid DNA entering a cell and leading to protein expression" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-lg w-auto bg-gray-200 p-4" onerror="this.onerror=null; this.src='https://placehold.co/500x300/e2e8f0/4a5568?text=Placeholder:+Transfection+Overview'; this.alt='Placeholder: Transfection Overview';">

            <h4 class="styled-h4">B. Overview of Transfection Methods</h4>
            <p><strong>The Variety of Methods:</strong><br>
            There are numerous ways to get nucleic acids into cells, broadly categorized as:
            <ul class="list-disc list-inside ml-4">
                <li><strong>Chemical Methods:</strong> These involve using reagents that complex with DNA and facilitate its entry into cells. Examples include:
                    <ul class="list-circle list-inside ml-4">
                        <li><strong>Calcium Phosphate Precipitation:</strong> The method we'll use! DNA is mixed with calcium chloride and phosphate buffer, forming fine DNA-calcium phosphate co-precipitates that are taken up by cells via endocytosis. It's cost-effective and works well for many adherent cell lines like HEK293.</li>
                        <li><strong>Lipid-based (Lipofection):</strong> Cationic lipids form complexes (lipoplexes) with negatively charged DNA, which then fuse with the cell membrane or are endocytosed. Reagents like Lipofectamine™ are common.</li>
                        <li><strong>Cationic Polymers:</strong> Polymers like Polyethylenimine (PEI) or dendrimers bind DNA and form polyplexes, which are then endocytosed.</li>
                    </ul>
                </li>
                <li><strong>Physical Methods:</strong> These use physical force to create transient pores in the cell membrane.
                    <ul class="list-circle list-inside ml-4">
                        <li><strong>Electroporation:</strong> Cells are exposed to a brief electrical pulse, creating temporary pores for DNA entry. Very efficient for many cell types, including those hard to transfect by chemical means.</li>
                        <li><strong>Microinjection:</strong> DNA is directly injected into the cytoplasm or nucleus using a fine glass micropipette. Precise but low-throughput.</li>
                        <li><strong>Gene Gun (Biolistics):</strong> DNA-coated gold or tungsten particles are shot into cells or tissues.</li>
                    </ul>
                </li>
                <li><strong>Viral Methods (Transduction):</strong> Recombinant viruses (e.g., lentiviruses, adenoviruses, AAV) are used as vectors to deliver genetic material. Often very high efficiency, even in primary cells and in vivo, and can be used for stable integration.</li>
            </ul>
            In this course, we will focus on the <strong>Calcium Phosphate Precipitation</strong> method due to its effectiveness with HEK293 cells and its historical significance.
            </p>
            <div class="interactive-box">
                <h4>Interactive Box 1: The Agony of Choice: Which Method for Which Purpose?</h4>
                <p class="text-sm mb-2">Scenario: Imagine you want to express proteins quickly and cost-effectively in robust HEK293 cells. Which of the following methods would be most suitable for this project and our course?</p>
                <div id="transfection-method-choice-quiz" class="space-y-1"></div>
                <div id="transfection-method-choice-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <h4 class="styled-h4">C. In Detail: Calcium Phosphate Transfection</h4>
            <p><strong>The Principle – Magic with Calcium and Phosphate:</strong><br>
            The calcium phosphate method relies on a simple chemical trick. Negatively charged plasmid DNA is mixed with calcium chloride (CaCl₂). When a phosphate-buffered saline solution (like 2x BBS - HEPES Buffered Saline) is added, insoluble calcium phosphate-DNA co-precipitates form. These fine, crystalline particles settle onto adherent cells. Cells naturally take up these particles through endocytosis (a process where the cell membrane engulfs external material). Once inside the cell, some of the DNA escapes the endosomes, makes its way to the nucleus, and can then be transcribed and translated by the cell's machinery to produce the desired protein (e.g., GFP or your FLAG-tagged protein).</p>

            <p><strong>Our Tools and Ingredients:</strong>
            <ul class="list-disc list-inside ml-4">
                <li><strong>Cells:</strong> HEK293 cells (Human Embryonic Kidney cells, adherent).</li>
                <li><strong>Plasmids:</strong>
                    <ul class="list-circle list-inside ml-4">
                        <li>pH2B-GFP (Concentration: e.g., 682.3 ng/µL - *please use the actual concentration from your stock tube label*)</li>
                        <li>pRKV-FLAG (Concentration: 1015 ng/µL - *please use the actual concentration from your stock tube label*)</li>
                    </ul>
                </li>
                <li><strong>Main Reagents:</strong>
                    <ul class="list-circle list-inside ml-4">
                        <li>0.25 M CaCl₂ solution</li>
                        <li>2x BBS (Buffered Saline Solution, typically HEPES-buffered, pH is critical, usually around 7.05-7.12)</li>
                    </ul>
                </li>
            </ul>
            </p>
            <img src="placeholder_calcium_phosphate_mechanism.svg" alt="Schematic of calcium phosphate transfection mechanism" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-lg w-auto bg-gray-200 p-4" onerror="this.onerror=null; this.src='https://placehold.co/500x300/e2e8f0/4a5568?text=Placeholder:+CaPi+Mechanism'; this.alt='Placeholder: CaPi Mechanism';">

            <h4 class="styled-h4">The Protocol – Step by Step to Success:</h4>
            <p class="text-sm italic">The following protocol is for transfecting <strong>one well</strong> of a 24-well plate. Remember to scale up your calculations for the total number of wells you plan to transfect for each plasmid, and always prepare a little extra (e.g., 10%) to account for pipetting inaccuracies!</p>
            
            <div class="highlight-note">
                <p><strong>Crucial Reminder:</strong> Always prepare all solutions for the required number of wells PLUS 10% extra volume to account for pipetting errors!</p>
            </div>

            <ol class="list-decimal list-inside space-y-3">
                <li>
                    <strong>Prepare Solution (per well):</strong>
                    <ul class="list-disc list-inside ml-5 mt-1 text-sm space-y-1">
                        <li>In a sterile 1.5 mL microcentrifuge tube (Eppendorf tube), add <strong>25 µL of 0.25 M CaCl₂</strong>.</li>
                        <li>
                            <strong>Add Plasmid DNA:</strong> Add <strong>0.3 - 0.5 µg</strong> of your desired plasmid (pH2B-GFP or pRKV-FLAG) to the CaCl₂.
                            <div class="p-2 mt-1 bg-amber-50 border-l-4 border-amber-400 text-amber-700 text-xs rounded-r-md">
                                <p><strong>Attention, Pipetting Pros!</strong> Pipetting volumes less than 2 µL is highly inaccurate. If your calculated volume is too small, consider preparing a master mix. For example, if you need 0.5 µL per well and are doing 4 wells, prepare a mix for 4.4 wells (4 wells + 10% extra), so 0.5 µL/well * 4.4 wells = 2.2 µL plasmid in a larger volume of CaCl₂.</p>
                                <p class="mt-1"><strong>Storage & Handling:</strong> Plasmids are stored in the freezer. Always keep plasmids on ice when outside the freezer.</p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Interactive Box 2: "Plasmid Calculation Wizards Wanted!"</strong>
                    <div class="interactive-box">
                        <h4>Plasmid Calculation Practice</h4>
                        <p class="text-sm mb-2"><strong>Scenario 1: Volume Calculation</strong><br>You want to use 0.4 µg of Plasmid pH2B-GFP. Its stock concentration is 682.3 ng/µL. How many µL of the stock solution do you need?</p>
                        <div class="calculator grid grid-cols-1 sm:grid-cols-2 gap-2 items-end mb-4">
                            <div>
                                <label for="desired_mass_pg" class="block text-xs font-medium text-gray-700">Desired Mass (µg):</label>
                                <input type="number" id="desired_mass_pg" value="0.4" class="w-full mt-1 text-sm p-1">
                            </div>
                            <div>
                                <label for="stock_conc_pg" class="block text-xs font-medium text-gray-700">Stock Conc. (ng/µL):</label>
                                <input type="number" id="stock_conc_pg" value="682.3" class="w-full mt-1 text-sm p-1">
                            </div>
                            <div class="sm:col-span-2">
                                <button id="plasmid-calc-btn" class="w-full py-1.5 text-sm">Calculate Volume</button>
                            </div>
                        </div>
                        <div id="plasmid-volume-result-container" class="p-2 bg-white rounded-md shadow text-sm hidden">
                            <p id="plasmid-volume-result" class="font-semibold text-purple-700"></p>
                        </div>

                        <p class="text-sm mb-2 mt-4"><strong>Scenario 2: Handling Small Volumes</strong><br>The calculated volume from Scenario 1 is approximately 0.586 µL. Can this be pipetted accurately and directly with standard lab pipettes? (Select Yes or No)</p>
                        <div id="small-volume-quiz" class="space-y-1 mb-2">
                            <button class="quiz-option text-xs sm:text-sm" data-correct="false">Yes, it's fine.</button>
                            <button class="quiz-option text-xs sm:text-sm" data-correct="true">No, it's too small for accurate direct pipetting.</button>
                        </div>
                        <div id="small-volume-feedback" class="feedback-message text-xs mt-1 p-1.5 rounded-md hidden"></div>
                    </div>
                </li>
                <li>
                    <strong>The Magic Ingredient:</strong> Slowly, while gently vortexing or flicking the tube containing the CaCl₂-DNA mixture, add <strong>25 µL of 2x BBS</strong>. *Critical: Add BBS to DNA/CaCl₂, not the other way around for optimal precipitate formation.*
                </li>
                <li>
                    <strong>Mix Gently:</strong> Immediately after adding BBS, cap the tube and gently invert it 4-5 times to mix. **DO NOT VORTEX** at this stage, as it can shear the DNA or lead to suboptimal precipitate size.
                </li>
                <li>
                    <strong>Patience Test (Precipitate Formation):</strong> Incubate the mixture for <strong>15 minutes at room temperature (RT)</strong>.
                     <div class="text-xs p-2 mt-1 bg-orange-50 border-l-4 border-orange-400 text-orange-700 rounded-r-md">
                        <em>Note on Centrifugation: Some older protocols mention a brief centrifugation. This step is not typical for modern CaPi protocols as it might compact the precipitate too much. We will proceed without centrifugation.</em>
                    </div>
                </li>
                <li>
                    <strong>"Feed" the Cells:</strong> After the 15-minute incubation, gently resuspend the fine precipitate and add <strong>50 µL of this suspension dropwise</strong> onto the cells in one well of a 24-well plate.
                </li>
                <li>
                    <strong>Interactive Box 3: "My Plate Layout – Who Gets What?"</strong>
                    <div class="interactive-box">
                        <h4>Experimental Plate Setup</h4>
                        <p class="text-sm mb-2">Plan your experiment! This is a conceptual representation.</p>
                        <img src="placeholder_24_well_plate_interactive.png" alt="Schematic of a 24-well plate for transfection planning" class="my-2 rounded-lg shadow-md mx-auto block max-w-xs w-auto bg-gray-200 p-2" onerror="this.onerror=null; this.src='https://placehold.co/300x200/e2e8f0/4a5568?text=Placeholder:+24-Well+Plate'; this.alt='Placeholder: 24-Well Plate';">
                        <p class="text-xs text-gray-600">Example conditions: Well A1: Untransfected Control, Well A2: pH2B-GFP, Well A3: pRKV-FLAG.</p>
                    </div>
                </li>
                <li>
                    <strong>Gentle Distribution:</strong> After adding the precipitate, gently swirl the plate in a "figure-eight" motion to ensure even distribution.
                </li>
                <li>
                    <strong>Off to the Incubator:</strong> Place the plate carefully into the 37°C incubator with 5% CO₂ and incubate overnight (16-24 hours).
                </li>
                <li>
                    <strong>Curious Observation:</strong>
                    <p class="text-sm">The next day, check your cells under a phase-contrast microscope. Note any changes in cell morphology. Calcium phosphate precipitates can sometimes be slightly toxic, appearing as small, dark granules on or around them.</p>
                    <img src="placeholder_HEK_cells_CaPi_phase_contrast.jpg" alt="HEK cells under phase contrast after calcium phosphate transfection" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-lg w-auto bg-gray-200 p-4" onerror="this.onerror=null; this.src='https://placehold.co/500x300/e2e8f0/4a5568?text=Placeholder:+HEK+Cells+CaPi'; this.alt='Placeholder: HEK Cells CaPi';">
                </li>
            </ol>

            <h4 class="styled-h4">D. Important Tips & Troubleshooting Corner</h4>
            <p>Successful transfection is an art as much as a science! Here are some key factors:</p>
            <ul class="list-disc list-inside ml-4">
                <li><strong>Cell Confluency:</strong> Aim for 50-70% confluency for optimal results.</li>
                <li><strong>DNA Quality & Quantity:</strong> Use high-purity, endotoxin-free DNA.</li>
                <li><strong>pH of BBS:</strong> This is CRITICAL. A pH between 7.05 and 7.12 is required for proper precipitate formation.</li>
                <li><strong>Pipetting Skills & Sterility:</strong> Accuracy and strict aseptic technique are paramount.</li>
            </ul>
            <div class="interactive-box">
                <h4>Interactive Box 4: What Went Wrong? – Transfection Troubleshooting</h4>
                <div id="transfection-troubleshooting-quiz"></div>
            </div>

            <h4 class="styled-h4">E. Outlook</h4>
            <p>Congratulations, you've theoretically performed a transfection! What's next? After 24-48 hours, you would typically:</p>
            <ul class="list-disc list-inside ml-4">
                <li>Observe cells under a fluorescence microscope to detect GFP expression.</li>
                <li>Perform immunofluorescence staining to detect the FLAG-tagged protein.</li>
                <li>Calculate transfection efficiency.</li>
                <li>Proceed with downstream experiments, such as Western blotting.</li>
            </ul>
        </div>
    `;
}

// Helper functions for this module
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

function calculatePlasmidVolume() {
    const desiredMassUg = parseFloat(document.getElementById('desired_mass_pg').value);
    const stockConcNgUl = parseFloat(document.getElementById('stock_conc_pg').value);
    const resultContainerEl = document.getElementById('plasmid-volume-result-container');
    const resultEl = document.getElementById('plasmid-volume-result');
    if (!resultContainerEl || !resultEl) return;
    
    resultContainerEl.classList.remove('hidden');
    if (isNaN(desiredMassUg) || isNaN(stockConcNgUl) || desiredMassUg <= 0 || stockConcNgUl <= 0) {
        resultEl.innerHTML = "<span class='text-red-500'>Please enter valid positive numbers.</span>";
        return;
    }
    const volumeUl = (desiredMassUg * 1000) / stockConcNgUl;
    resultEl.innerHTML = `Required Volume: <strong>${volumeUl.toFixed(3)} &micro;L</strong>`;
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

function renderInteractiveQuiz(container, quizData) {
    container.innerHTML = '';
    quizData.forEach((q, index) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'quiz-question p-3 mb-2 bg-white rounded-md shadow-sm';
        let optionsHtml = `<p class="font-medium mb-2 text-sm">${index + 1}. ${q.question}</p><div class="space-y-1">`;
        q.options.forEach(optText => {
            optionsHtml += `<button class="quiz-option text-xs">${optText}</button>`;
        });
        optionsHtml += `</div><div class="feedback-message text-xs mt-1 p-1 rounded-md hidden"></div>`;
        qDiv.innerHTML = optionsHtml;
        
        qDiv.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const isCorrect = btn.textContent === q.answer;
                const correctFeedback = `<strong>Correct!</strong> ${q.explanation}`;
                const incorrectFeedback = `<strong>Incorrect.</strong> ${q.explanation}`;
                const parentDiv = btn.parentElement;
                const feedbackEl = parentDiv.nextElementSibling;
                parentDiv.querySelectorAll('.quiz-option').forEach(b => {
                    b.disabled = true;
                    b.classList.remove('correct', 'incorrect');
                });
                if (isCorrect) {
                    btn.classList.add('correct');
                    feedbackEl.innerHTML = correctFeedback;
                } else {
                    btn.classList.add('incorrect');
                    feedbackEl.innerHTML = incorrectFeedback;
                    parentDiv.querySelectorAll('.quiz-option').forEach(opt => {
                         if (opt.textContent === q.answer) opt.classList.add('correct');
                    });
                }
                feedbackEl.classList.remove('hidden');
            });
        });
        container.appendChild(qDiv);
    });
}

export default function initModule3(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-3';
    link.textContent = TITLE;
    link.className = 'sidebar-link block px-3 py-2 rounded-md';
    // NEW, CORRECTED CODE
    sidebarEl.querySelector('#sidebar-links').appendChild(link);;

    // 2. Inject content
    rootEl.innerHTML = getContent();

    // Add quiz container
    const quizHtml = `
        <div class="mt-8 pt-6 border-t-2 border-purple-300">
            <h3 class="text-xl font-semibold text-purple-700 mb-4">Module Quiz!</h3>
            <p class="text-sm text-gray-600 mb-4">Test your knowledge from this module.</p>
            <div id="quiz-container-module-3"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);

    // 3. Attach event listeners and run init logic
    // Interactive Box 1: Transfection Method Choice
    const methodChoiceContainer = document.getElementById('transfection-method-choice-quiz');
    if (methodChoiceContainer) {
        const methodQuizData = {
            options: ["Lipofection (e.g., Lipofectamine)", "Electroporation", "Calcium Phosphate Precipitation", "Viral Transduction (e.g., with lentiviruses)"],
            answer: "Calcium Phosphate Precipitation",
            feedback_correct: "Exactly! The calcium phosphate method is an established, cost-effective method well-suited for transfecting adherent cells like HEK293 and is ideal for our course objectives.",
            feedback_incorrect: "Not quite. While other methods work, CaPi is a great balance of cost and efficiency for this specific purpose. Viral methods are more complex and costly, and Lipofection is often more expensive."
        };
        methodQuizData.options.forEach(optText => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option text-xs sm:text-sm';
            btn.textContent = optText;
            btn.dataset.correct = (optText === methodQuizData.answer).toString();
            btn.addEventListener('click', () => handleSimpleQuiz(btn, optText === methodQuizData.answer, methodQuizData.feedback_correct, methodQuizData.feedback_incorrect));
            methodChoiceContainer.appendChild(btn);
        });
    }

    // Interactive Box 2: Plasmid Calculator and Small Volume Quiz
    document.getElementById('plasmid-calc-btn')?.addEventListener('click', calculatePlasmidVolume);
    const smallVolumeQuizContainer = document.getElementById('small-volume-quiz');
    if(smallVolumeQuizContainer) {
        smallVolumeQuizContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                 const isCorrect = button.dataset.correct === 'true';
                 const correctFeedback = "<strong>Correct!</strong> 0.586 µL is generally too small to pipette accurately. A good strategy is to prepare a master mix or a working dilution.";
                 const incorrectFeedback = "<strong>Not quite.</strong> This volume is very prone to error with standard lab equipment.";
                 handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }

    // Interactive Box 4: Troubleshooting Quiz
    const troubleshootingContainer = document.getElementById('transfection-troubleshooting-quiz');
    if (troubleshootingContainer) {
        const troubleshootingQuizData = [
            {
                question: "Your cells look very unhappy after transfection, and many have detached. What could be a primary reason related to the CaPi method?",
                options: ["Too little DNA was used", "The precipitates were too fine or incubated for too short a time", "The pH of the BBS was too high, leading to coarse, toxic precipitates, or precipitates were left on cells too long", "Cells were not confluent enough"],
                answer: "The pH of the BBS was too high, leading to coarse, toxic precipitates, or precipitates were left on cells too long",
                explanation: "Coarse CaPi precipitates formed due to incorrect pH or overly long incubation with cells can be quite toxic, leading to cell stress and detachment."
            },
            {
                question: "You see hardly any GFP-positive cells 24-48 hours post-transfection. Which is a common critical factor to check first for CaPi transfections?",
                options: ["The incubator temperature was 36°C instead of 37°C", "The pH of the 2x BBS solution was incorrect", "You used 0.5 µg of DNA instead of 0.3 µg", "The cells were only 50% confluent"],
                answer: "The pH of the 2x BBS solution was incorrect",
                explanation: "The pH of the BBS is extremely critical for forming the right kind of fine precipitate for efficient uptake. Incorrect pH is a very common reason for CaPi transfection failure."
            }
        ];
        renderInteractiveQuiz(troubleshootingContainer, troubleshootingQuizData);
    }
    
    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-3');
}
