const TITLE = "Module 1: Cell & Molecular Biology Fundamentals";
const QUIZ_DATA = [
    {
        question: "Which of these is NOT a typical component of a plasmid used in molecular cloning for expression in eukaryotic cells?",
        options: ["Origin of Replication (ori)", "Eukaryotic Promoter (e.g., CMV)", "Selectable Marker (e.g., antibiotic resistance)", "Ribosome (the organelle)"],
        answer: "Ribosome (the organelle)",
        type: "mcq",
        explanation: "Plasmids contain DNA sequences like promoters and origins of replication. Ribosomes are cellular machinery for protein synthesis and are not part of the plasmid DNA itself."
    },
    {
        question: "What is the primary purpose of heat-inactivating serum (e.g., FBS/FCS) for cell culture?",
        options: ["To sterilize the serum by killing all microbes", "To inactivate complement proteins that could harm cells", "To enhance the activity of growth factors in the serum", "To remove any residual antibiotics from the serum"],
        answer: "To inactivate complement proteins that could harm cells",
        type: "mcq",
        explanation: "Heat inactivation (typically 56°C for 30 minutes) denatures complement proteins, which can otherwise cause cell lysis or activate immune responses in culture."
    },
    {
        question: "A cell culture medium containing Phenol Red as a pH indicator appears bright yellow. This most likely indicates the medium is:",
        options: ["Too alkaline (pH too high)", "Too acidic (pH too low)", "Perfectly neutral (pH 7.4)", "Contaminated with mold"],
        answer: "Too acidic (pH too low)",
        type: "mcq",
        explanation: "Phenol Red turns yellow at acidic pH (below ~6.8), often due to excessive cell metabolism producing lactic acid or bacterial contamination producing acidic byproducts."
    },
    {
        question: "Mycoplasma contamination is notoriously difficult to detect in cell cultures because:",
        options: ["They are very large and thus easily filtered out during media preparation.", "They cause rapid, visible cloudiness (turbidity) in the culture medium within hours.", "They are extremely small, lack a cell wall, can pass through standard 0.22 &mu;m sterilization filters, and often do not cause obvious visual changes like turbidity.", "They only grow optimally at room temperature, not in a 37&deg;C incubator."],
        answer: "They are extremely small, lack a cell wall, can pass through standard 0.22 &mu;m sterilization filters, and often do not cause obvious visual changes like turbidity.",
        type: "mcq",
        explanation: "Mycoplasma are among the smallest self-replicating organisms and their lack of a cell wall makes them resistant to some antibiotics and flexible enough to pass through filters. They often cause subtle changes in cell behavior rather than obvious turbidity."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 1: Fundamentals of Cell & Molecular Biology & Cell Culture</h2>
            
            <h3>Part A: Core Biology</h3>
            <h4 class="styled-h4">Prokaryotes vs. Eukaryotes</h4>
            <p>Living organisms are made of cells. The two main types are:</p>
            <ul>
                <li><strong>Prokaryotes:</strong> Simple cells (e.g., bacteria) lacking a true nucleus. Their DNA is located in the cytoplasm.</li>
                <li><strong>Eukaryotes:</strong> Complex cells (e.g., animal, plant, fungal cells) with a true nucleus enclosing the DNA, and various membrane-bound organelles like mitochondria and endoplasmic reticulum.</li>
            </ul>

            <h4 class="styled-h4">Plasmids</h4>
            <p>A plasmid is a small, circular, double-stranded DNA molecule that is distinct from a cell's chromosomal DNA. Plasmids naturally exist in bacterial cells and they also occur in some eukaryotes. In the lab, scientists use plasmids to introduce new genes into cells.</p>
            <p><strong>Key Components of a Lab Plasmid:</strong></p>
            <div class="interactive-box">
                <h4>Interactive: Plasmid Components</h4>
                <p class="text-sm mb-2">Imagine a circular plasmid. Click on the names to learn about each part.</p>
                <div id="plasmid-components-buttons" class="flex flex-wrap gap-2">
                    <button class="plasmid-component-btn bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-full text-xs sm:text-sm" data-info="Origin of Replication (ori): The DNA sequence where replication of the plasmid begins, allowing it to be copied within the host cell.">Origin of Replication (ori)</button>
                    <button class="plasmid-component-btn bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-full text-xs sm:text-sm" data-info="Promoter: A DNA sequence that initiates transcription of a particular gene. It's located near the transcription start sites of genes. E.g., CMV promoter for strong expression in mammalian cells.">Promoter</button>
                    <button class="plasmid-component-btn bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-full text-xs sm:text-sm" data-info="Multiple Cloning Site (MCS) / Polylinker: A short segment of DNA which contains many (up to ~20) restriction enzyme sites - a standard feature of engineered plasmids. This allows easy insertion of your gene of interest using restriction enzymes.">Multiple Cloning Site (MCS)</button>
                    <button class="plasmid-component-btn bg-purple-500 hover:bg-purple-600 text-white py-1 px-3 rounded-full text-xs sm:text-sm" data-info="Gene of Interest: The specific gene that you want to study or express in the host cells (e.g., a gene coding for GFP, a therapeutic protein, or a regulatory RNA).">Gene of Interest</button>
                    <button class="plasmid-component-btn bg-yellow-500 hover:bg-yellow-600 text-black py-1 px-3 rounded-full text-xs sm:text-sm" data-info="Selection Marker: A gene that confers a trait suitable for artificial selection. For example, an antibiotic resistance gene (like Ampicillin or Kanamycin resistance) allows only cells that have successfully taken up the plasmid to grow in the presence of that antibiotic.">Selection Marker</button>
                    <button class="plasmid-component-btn bg-pink-500 hover:bg-pink-600 text-white py-1 px-3 rounded-full text-xs sm:text-sm" data-info="Tag (e.g., GFP, FLAG, His-tag): A short DNA sequence fused to the gene of interest that, when expressed, adds a peptide tag to the protein. This tag can be used for detection (e.g., GFP for fluorescence, FLAG for antibody detection) or purification (e.g., His-tag for affinity chromatography).">Tag (e.g., GFP, FLAG)</button>
                </div>
                <div id="plasmid-component-info" class="plasmid-info-box mt-3 p-3 rounded bg-blue-100 border border-blue-300 text-sm text-blue-800" style="display: none;">Select a component to see its description.</div>
                <p class="mt-2 text-xs text-gray-600">Note: DNA is negatively charged due to its phosphate backbone.</p>
            </div>

            <h3>Part B: Cell Culture Deep Dive</h3>
            <h4 class="styled-h4">Introduction to Cell Culture</h4>
            <p>Cell culture is the process by which cells are grown under controlled conditions, generally outside their natural environment (<em>in vitro</em>). Cells can be grown as:</p>
            <ul>
                <li><strong>Adherent cultures:</strong> Cells grow attached to a surface (e.g., flask, plate).</li>
                <li><strong>Suspension cultures:</strong> Cells float freely in the culture medium.</li>
            </ul>

            <h4 class="styled-h4">Primary Cultures vs. Cell Lines</h4>
            <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 my-4 border">
                <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr><th scope="col" class="px-4 py-2 sm:px-6 sm:py-3">Feature</th><th scope="col" class="px-4 py-2 sm:px-6 sm:py-3">Primary Cultures</th><th scope="col" class="px-4 py-2 sm:px-6 sm:py-3">Cell Lines</th></tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b"><td class="px-4 py-2 sm:px-6 sm:py-4">Origin</td><td class="px-4 py-2 sm:px-6 sm:py-4">Directly from tissues/organs</td><td class="px-4 py-2 sm:px-6 sm:py-4">Immortalized cells (e.g., tumor-derived, virally transformed)</td></tr>
                    <tr class="bg-gray-50 border-b"><td class="px-4 py-2 sm:px-6 sm:py-4">Lifespan</td><td class="px-4 py-2 sm:px-6 sm:py-4">Limited (finite)</td><td class="px-4 py-2 sm:px-6 sm:py-4">Unlimited (continuous)</td></tr>
                    <tr class="bg-white border-b"><td class="px-4 py-2 sm:px-6 sm:py-4">Properties</td><td class="px-4 py-2 sm:px-6 sm:py-4">More representative of in vivo state</td><td class="px-4 py-2 sm:px-6 sm:py-4">May have altered characteristics, easier to grow</td></tr>
                    <tr class="bg-gray-50"><td class="px-4 py-2 sm:px-6 sm:py-4">Examples</td><td class="px-4 py-2 sm:px-6 sm:py-4">Neurons, fibroblasts from biopsy</td><td class="px-4 py-2 sm:px-6 sm:py-4">HEK293, HeLa, CHO</td></tr>
                </tbody>
            </table>
            </div>
            <p><strong>HEK293 Cells:</strong> Human Embryonic Kidney cells, transformed with Adenovirus 5 DNA. They are adherent epithelial cells commonly used for their high transfection efficiency and protein production capabilities.</p>

            <h4 class="styled-h4">Cell Culture Environment & Media</h4>
            <p>Cells need a controlled environment:</p>
            <ul>
                <li><strong>Temperature:</strong> Typically 37&deg;C for mammalian cells.</li>
                <li><strong>CO<sub>2</sub>:</strong> Usually 5% in the incubator to work with the NaHCO<sub>3</sub> buffer system in the medium to maintain physiological pH.</li>
                <li><strong>Humidity:</strong> High (70-100%) to prevent evaporation of medium.</li>
                <li><strong>Sterility:</strong> Essential to prevent contamination.</li>
            </ul>
            <p><strong>Culture Media:</strong> Provides nutrients for cell growth.</p>
            <div class="interactive-box">
                <h4>Interactive: Media Prep Station</h4>
                <p class="text-sm mb-2">You are preparing complete DMEM. Click on each component you would add to the basal DMEM to learn more about it.</p>
                <div id="media-components-list" class="my-2 space-y-1">
                    <button class="media-component-button block w-full text-left p-2 rounded hover:bg-blue-200 text-xs sm:text-sm" data-info="Basal DMEM (Dulbecco's Modified Eagle's Medium): Contains a mixture of inorganic salts (for osmotic balance and membrane potential), L-amino acids (building blocks for proteins), vitamins (cofactors for enzymes), D-glucose (energy source), and often sodium pyruvate (additional energy source). This is the foundation of your complete medium.">1. Basal DMEM (salts, amino acids, vitamins, glucose)</button>
                    <button class="media-component-button block w-full text-left p-2 rounded hover:bg-blue-200 text-xs sm:text-sm" data-info="Fetal Bovine Serum (FBS) or Fetal Calf Serum (FCS): Typically added at 5-20% (10% is common). It's a complex mixture providing growth factors, hormones, attachment factors, transport proteins, and trace elements. Crucial for the growth of many cell lines. Batch-to-batch variability is a concern. Can be heat-inactivated (56°C for 30 min) to destroy complement proteins that might lyse cells.">2. Fetal Bovine Serum (FBS/FCS) - typically 10%</button>
                    <button class="media-component-button block w-full text-left p-2 rounded hover:bg-blue-200 text-xs sm:text-sm" data-info="L-Glutamine: An essential amino acid required by cells in culture, serving as a nitrogen source for nucleotide and amino acid synthesis, and an energy source. It's unstable in liquid media at 37°C, degrading over time (half-life ~1 week). Often added fresh or a stable dipeptide form like GlutaMAX™ is used. Typical concentration is 2-4 mM.">3. L-Glutamine (or GlutaMAX&trade;) - typically 2-4 mM</button>
                    <button class="media-component-button block w-full text-left p-2 rounded hover:bg-blue-200 text-xs sm:text-sm" data-info="Penicillin-Streptomycin (Pen-Strep): An antibiotic/antimycotic solution typically added at 1% (final concentration ~100 U/mL Penicillin, ~100 µg/mL Streptomycin). Used to prevent bacterial contamination. While common, routine use can mask poor aseptic technique and may lead to antibiotic-resistant strains or affect cell physiology. Should be used judiciously.">4. Penicillin-Streptomycin (optional, but common) - typically 1%</button>
                </div>
                <div id="media-prep-component-info" class="media-component-info-box mt-3 p-3 rounded bg-green-100 border border-green-300 text-sm text-green-800" style="display: none;">Click a component to see its description.</div>
                <p class="text-sm mt-2">Each component is added aseptically under the laminar flow hood.</p>
            </div>
            <ul>
                <li><strong>Phenol Red:</strong> A pH indicator. Medium is typically reddish-orange at pH 7.4. It turns yellow if acidic (e.g., due to excessive cell metabolism or bacterial contamination) and purple if alkaline.</li>
                <li><strong>Other Additives (depending on cell type/media):</strong> Sodium Bicarbonate (NaHCO<sub>3</sub> - primary buffering component with incubator CO<sub>2</sub>), HEPES buffer (alternative non-$CO_2$ dependent buffer), non-essential amino acids, specific growth factors.</li>
            </ul>
            
            <h4 class="styled-h4">Sterilization & Aseptic Technique</h4>
            <p>Sterilization aims to kill or inactivate all viable microorganisms. Aseptic technique refers to the practices used to prevent contamination.</p>
            <ul>
                <li><strong>Flaming:</strong> Sterilizing bottle necks, metal tools.</li>
                <li><strong>UV Light (254nm):</strong> Surface sterilization (e.g., inside hoods). Max 30cm distance. Safety hazard (burns, mutagenesis).</li>
                <li><strong>Sterile Filtration (0.22 &mu;m filter):</strong> For heat-sensitive liquids like media and serum.</li>
                <li><strong>Autoclaving (Steam Sterilization):</strong> High pressure and temperature (e.g., 121&deg;C, 15 psi, 15-20 min) for liquids (not media with sensitive components), glassware, and some plastics.</li>
                <li><strong>Gamma Radiation:</strong> For pre-sterilized plastic consumables (flasks, pipettes).</li>
            </ul>

            <h4 class="styled-h4">Contamination in Cell Culture</h4>
            <p>Contamination is a major issue in cell culture. Common types include:</p>
            <ul class="list-none pl-0">
                <li class="mb-2 p-3 border-l-4 border-red-500 bg-red-50 rounded-r-md">
                    <strong>Bacteria:</strong> Tiny, single-celled prokaryotes.
                    <br><span class="text-xs text-gray-600">Spot them by: Rapid medium turbidity (cloudiness), sudden pH drop (medium turns yellow), and sometimes a "storm" of moving particles visible under the microscope.</span>
                </li>
                <li class="mb-2 p-3 border-l-4 border-orange-500 bg-orange-50 rounded-r-md">
                    <strong>Yeasts:</strong> Single-celled eukaryotic fungi.
                    <br><span class="text-xs text-gray-600">Spot them by: Medium may become slightly turbid; individual ovoid or budding particles visible under microscope, often appearing as small, distinct dots or clusters.</span>
                </li>
                <li class="mb-2 p-3 border-l-4 border-yellow-500 bg-yellow-50 rounded-r-md">
                    <strong>Molds (Fungi):</strong> Multicellular eukaryotic fungi that grow as hyphae (filaments).
                    <br><span class="text-xs text-gray-600">Spot them by: Visible fuzzy or cotton-like colonies, often on the surface of the medium or flask, and a network of filaments seen under the microscope.</span>
                </li>
                <li class="mb-2 p-3 border-l-4 border-purple-500 bg-purple-50 rounded-r-md">
                    <strong>Mycoplasma:</strong> Very small bacteria lacking a cell wall, making them hard to see and filter.
                    <br><span class="text-xs text-gray-600">Spot them by: Often no visible turbidity; signs include slower cell growth, changes in cell morphology, premature yellowing of medium, or a "milky way-like fog" around nuclei when stained with DAPI.</span>
                </li>
                 <li class="mb-2 p-3 border-l-4 border-teal-500 bg-teal-50 rounded-r-md">
                    <strong>Viruses:</strong> Submicroscopic infectious agents replicating only inside living cells.
                    <br><span class="text-xs text-gray-600">Spot them by: Often no immediate visible signs; may cause cytopathic effects (CPE) like cell rounding or lysis, but diagnosis usually requires specific assays (e.g., ELISA, PCR).</span>
                </li>
                 <li class="mb-2 p-3 border-l-4 border-gray-500 bg-gray-100 rounded-r-md">
                    <strong>Cross-contamination (other cell lines):</strong> Unwanted presence of a different cell line in the culture.
                    <br><span class="text-xs text-gray-600">Spot them by: Unexpected changes in cell morphology, growth rate, or experimental results; requires specific testing like STR profiling for confirmation.</span>
                </li>
            </ul>
            <div class="interactive-box">
                <h4>Interactive: Contamination Detective!</h4>
                <p class="text-sm mb-2">What type of contamination is most likely described in each scenario?</p>
                <div id="contamination-quiz-module1" class="space-y-4"></div>
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

export default function initModule1(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-1';
    link.textContent = TITLE;
    link.className = 'sidebar-link block px-3 py-2 rounded-md';
    sidebarEl.appendChild(link);

    // 2. Inject content
    rootEl.innerHTML = getContent();
    
    // Add quiz container
    const quizHtml = `
        <div class="mt-8 pt-6 border-t-2 border-purple-300">
            <h3 class="text-xl font-semibold text-purple-700 mb-4">Module Quiz!</h3>
            <p class="text-sm text-gray-600 mb-4">Test your knowledge from this module.</p>
            <div id="quiz-container-module-1"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);

    // 3. Attach event listeners and run init logic
    
    // Plasmid Components Interaction
    const plasmidButtonsContainer = document.getElementById('plasmid-components-buttons');
    const plasmidInfoDiv = document.getElementById('plasmid-component-info');
    if (plasmidButtonsContainer && plasmidInfoDiv) {
        const plasmidButtons = plasmidButtonsContainer.querySelectorAll('.plasmid-component-btn');
        plasmidButtons.forEach(button => {
            button.addEventListener('click', () => {
                plasmidInfoDiv.innerHTML = button.dataset.info;
                plasmidInfoDiv.style.display = 'block';
                plasmidButtons.forEach(btn => btn.classList.remove('ring-2', 'ring-offset-2', 'ring-blue-700', 'scale-105'));
                button.classList.add('ring-2', 'ring-offset-2', 'ring-blue-700', 'scale-105');
            });
        });
    }

    // Media Prep Station Interaction
    const mediaButtonsContainer = document.getElementById('media-components-list');
    const mediaPrepInfoDiv = document.getElementById('media-prep-component-info');
    if (mediaButtonsContainer && mediaPrepInfoDiv) {
        const mediaButtons = mediaButtonsContainer.querySelectorAll('.media-component-button');
        mediaButtons.forEach(button => {
            button.addEventListener('click', () => {
                mediaPrepInfoDiv.innerHTML = button.dataset.info;
                mediaPrepInfoDiv.style.display = 'block';
                mediaButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            });
        });
    }
    
    // Contamination Detective Quiz for Module 1
    const contaminationQuizDataModule1 = [
        {
            description: "Your cell culture medium has suddenly become cloudy, and under the microscope, you see tiny, fast-moving rod-shaped or spherical particles between your cells. The medium has also turned yellow quickly.",
            options: ["Mycoplasma", "Yeast", "Bacteria", "Viral"],
            answer: "Bacteria"
        },
        {
            description: "You notice a 'milky way-like fog' or tiny specks around the nuclei of your cells when stained with DAPI. Cell growth has slowed, and the medium turns yellow faster than usual, but there's no visible cloudiness.",
            options: ["Fungal (mold)", "Mycoplasma", "Cross-contamination with other cells", "Bacteria"],
            answer: "Mycoplasma"
        },
        {
            description: "You see fuzzy, filamentous structures growing in your flask, some of which might be floating on the surface of the medium. Some areas might have a cottony appearance.",
            options: ["Yeast", "Bacteria", "Fungal (mold)", "Mycoplasma"],
            answer: "Fungal (mold)"
        }
    ];
    const quizContainerModule1 = document.getElementById('contamination-quiz-module1');
    if (quizContainerModule1) {
        quizContainerModule1.innerHTML = '';
        contaminationQuizDataModule1.forEach((q, index) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'quiz-question p-4 mb-3 bg-white rounded-lg shadow';
            let optionsHtml = `<p class="font-medium mb-2 text-sm">${index + 1}. ${q.description}</p><div class="space-y-1">`;
            q.options.forEach(opt => {
                optionsHtml += `<button class="quiz-option text-xs sm:text-sm" data-answer="${q.answer}">${opt}</button>`;
            });
            optionsHtml += `</div><div class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>`;
            qDiv.innerHTML = optionsHtml;

            qDiv.querySelectorAll('.quiz-option').forEach(optButton => {
                optButton.addEventListener('click', () => {
                    const parentQuestionDiv = optButton.closest('.quiz-question');
                    parentQuestionDiv.querySelectorAll('.quiz-option').forEach(btn => {
                        btn.disabled = true;
                        btn.classList.remove('correct', 'incorrect');
                    });
                    const feedbackEl = parentQuestionDiv.querySelector('.feedback-message');
                    
                    if (optButton.textContent === q.answer) {
                        optButton.classList.add('correct');
                        feedbackEl.innerHTML = '<strong>Correct!</strong>';
                    } else {
                        optButton.classList.add('incorrect');
                        feedbackEl.innerHTML = `<strong>Incorrect.</strong> Correct answer: ${q.answer}`;
                        parentQuestionDiv.querySelectorAll('.quiz-option').forEach(btn => {
                            if (btn.textContent === q.answer) btn.classList.add('correct');
                        });
                    }
                    feedbackEl.classList.remove('hidden');
                });
            });
            quizContainerModule1.appendChild(qDiv);
        });
    }

    // 4. Render the main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-1');
}
