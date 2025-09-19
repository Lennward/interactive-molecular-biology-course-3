const TITLE = "Module 7: Introduction to Cell Culture & work with mammalian cells";
const QUIZ_DATA = [
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
        options: ["They are very large and thus easily filtered out during media preparation", "They cause rapid, visible cloudiness (turbidity) in the culture medium within hours", "They are extremely small, lack a cell wall, can pass through standard 0.22 μm sterilization filters, and often do not cause obvious visual changes like turbidity", "They only grow optimally at room temperature, not in a 37°C incubator"],
        answer: "They are extremely small, lack a cell wall, can pass through standard 0.22 μm sterilization filters, and often do not cause obvious visual changes like turbidity",
        type: "mcq",
        explanation: "Mycoplasma are among the smallest self-replicating organisms and their lack of a cell wall makes them resistant to some antibiotics and flexible enough to pass through filters. They often cause subtle changes in cell behavior rather than obvious turbidity."
    },
    {
        question: "What do cells need to grow?",
        options: ["Building materials: amino acids for protein synthesis, sugars as an energy source for cell wall synthesis, fatty acids for membrane synthesis, and nucleotides for RNA and DNA synthesis", "Energy in the form of ATP", "Water as a solvent for biochemical reactions and for maintaining intracellular pressure", "Ions for enzyme functions, osmoregulation, and signal transmission", "Growth factors and nutrient availability", "Optimal temperature, pH value, oxygen supply", "All of the above"],
        answer: "All of the above",
        type: "mcq",
        explanation: "Cells require all these components for proper growth: building materials, energy, water, ions, growth factors, and optimal environmental conditions."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 7: Introduction to Cell Culture & work with mammalian cells</h2>
            
            <h3>Cell Culture Deep Dive</h3>
            <p>In the lab, cells derived from a wide variety of tissues and organisms can be cultivated. Cell culture is the process by which cells (especially mammalian cells) are grown under controlled conditions in the lab, generally outside their natural environment which is referred to as <em>"in vitro"</em>. Cell culture technology makes it possible to establish long-term or permanent cultures that can serve as "in vitro" models for cells in vivo (in living organisms).</p>

            <p>Cells can be grown as:</p>
            <ul>
                <li><strong>Adherent cell cultures:</strong> Cells grow attached to a surface (e.g., flask, plate). Adherent cells are derived from specific tissues and organs such as the liver, kidneys, muscles, nerves, endothelium, and epithelium.</li>
                <li><strong>Suspension (non-adherent) cell cultures:</strong> Cells float freely in the culture medium. Immune system cells and their precursors, on the other hand, are cultivated as a suspension.</li>
            </ul>

            <h4 class="styled-h4">Primary Cell Cultures vs. Cell Lines</h4>
            <table class="w-full border-collapse border border-gray-300 bg-slate-100 p-3 rounded-md shadow-sm mb-4">
                <thead>
                    <tr class="bg-purple-100">
                        <th class="border border-gray-300 p-2 text-left font-semibold">Feature</th>
                        <th class="border border-gray-300 p-2 text-left font-semibold">Primary Cell Cultures</th>
                        <th class="border border-gray-300 p-2 text-left font-semibold">Cell Lines</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Origin</td>
                        <td class="border border-gray-300 p-2">Directly from tissues/organs</td>
                        <td class="border border-gray-300 p-2">Immortalized cells (e.g., tumor-derived, virally transformed)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Lifespan</td>
                        <td class="border border-gray-300 p-2">Limited (finite)</td>
                        <td class="border border-gray-300 p-2">Unlimited (infinite)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Properties</td>
                        <td class="border border-gray-300 p-2">More representative of in vivo state</td>
                        <td class="border border-gray-300 p-2">May have altered characteristics, easier to grow</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Examples</td>
                        <td class="border border-gray-300 p-2">Neurons, fibroblasts from biopsy</td>
                        <td class="border border-gray-300 p-2">HEK293, HeLa</td>
                    </tr>
                </tbody>
            </table>

            <h4 class="styled-h4">Cell Culture Environment & Media</h4>
            <p>Most cultured mammalian (and human) cells require the following for optimal growth:</p>
            <ul class="bg-slate-100 p-3 rounded-md shadow-sm">
                <li><strong>Temperature:</strong> Typically 37°C for mammalian cells (= body temperature).</li>
                <li><strong>CO₂:</strong> Usually 5% in the incubator to work with the NaHCO₃ buffer system in the medium to maintain physiological pH of 7.2-7.4.</li>
                <li><strong>Humidity:</strong> High (70-100%) to prevent evaporation of medium.</li>
                <li><strong>Sterility:</strong> Essential to prevent contamination.</li>
            </ul>

            <p>Suitable temperature, CO₂ and humidity are provided by an incubator.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                <img src="images/image071.png" alt="Incubator closed" class="rounded-lg shadow-md mx-auto block max-w-full w-auto">
                <img src="images/image072.png" alt="Incubator open" class="rounded-lg shadow-md mx-auto block max-w-full w-auto">
                <img src="images/image073.png" alt="Incubator interior" class="rounded-lg shadow-md mx-auto block max-w-full w-auto">
            </div>

            <p>On the pictures you can see an incubator in different states (open & closed). It has 2 doors that need to be opened to place vessels with cells inside/take them out of the incubator; the outer door and another glass door.</p>
            
            <p>Therefore, the (mammalian) cells are stored in the incubator all the time. Only if a step of an experiment is conducted the (mammalian) cells are taken out of the incubator.</p>

            <h4 class="styled-h4">Culture Media</h4>
            <p><strong>Culture Media:</strong> Provides nutrients for cell growth.</p>
            <p>The culture medium for cell culture must be such that it enables the cells to proliferate and grow and, if necessary, also to differentiate and perform typical cell functions. The first successful chemically defined medium was created by Harry Eagle in 1955, after previous work had been done with culture media that contained complex organic additives and were not standardized.</p>

            <div class="interactive-box">
                <h4>Interactive: Media Prep Station</h4>
                <p class="text-sm mb-3"><strong>You are preparing complete DMEM. Click on each component you would add to the basal DMEM to learn more about it.</strong></p>
                
                <div id="media-components" class="space-y-3">
                    <div class="media-component-info-box hidden bg-blue-50 border-l-4 border-blue-400 p-3" id="component-1">
                        <h5 class="font-semibold text-blue-800">Basal DMEM (salts, amino acids, vitamins, glucose)</h5>
                        <p class="text-sm text-blue-700">Basal DMEM (Dulbecco's Modified Eagle's Medium): Contains a mixture of inorganic salts (for osmotic balance and membrane potential), L-amino acids (building blocks for proteins), vitamins (cofactors for enzymes), D-glucose (energy source), and often sodium pyruvate (additional energy source). This is the foundation of your complete medium.</p>
                    </div>
                    <div class="media-component-info-box hidden bg-green-50 border-l-4 border-green-400 p-3" id="component-2">
                        <h5 class="font-semibold text-green-800">Fetal Bovine Serum (FBS/FCS) - typically 10%</h5>
                        <p class="text-sm text-green-700">Fetal Bovine Serum (FBS) or Fetal Calf Serum (FCS): Typically added at 5-20% (10% is common). It's a complex mixture providing growth factors, hormones, attachment factors, transport proteins, and trace elements. Crucial for the growth of many cell lines. Batch-to-batch variability is a concern. Can be heat-inactivated (56°C for 30 min) to destroy complement proteins that might lyse cells.</p>
                    </div>
                    <div class="media-component-info-box hidden bg-yellow-50 border-l-4 border-yellow-400 p-3" id="component-3">
                        <h5 class="font-semibold text-yellow-800">L-Glutamine (or GlutaMAX™) - typically 2-4 mM</h5>
                        <p class="text-sm text-yellow-700">L-Glutamine: An essential amino acid required by cells in culture, serving as a nitrogen source for nucleotide and amino acid synthesis, and an energy source. It's unstable in liquid media at 37°C, degrading over time (half-life ~1 week). Often added fresh or a stable dipeptide form like GlutaMAX™ is used. Typical concentration is 2-4 mM.</p>
                    </div>
                    <div class="media-component-info-box hidden bg-purple-50 border-l-4 border-purple-400 p-3" id="component-4">
                        <h5 class="font-semibold text-purple-800">Penicillin-Streptomycin (optional, but common) - typically 1%</h5>
                        <p class="text-sm text-purple-700">Penicillin-Streptomycin (Pen-Strep): An antibiotic/antimycotic solution typically added at 1% (final concentration ~100 U/mL Penicillin, ~100 µg/mL Streptomycin). Used to prevent bacterial contamination. While common, routine use can mask poor aseptic technique and may lead to antibiotic-resistant strains or affect cell physiology. Should be used judiciously.</p>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-2 mt-4">
                    <button class="media-component-button px-3 py-2 rounded text-sm text-white transition-colors" data-component="1">1. Basal DMEM</button>
                    <button class="media-component-button px-3 py-2 rounded text-sm text-white transition-colors" data-component="2">2. FBS/FCS (10%)</button>
                    <button class="media-component-button px-3 py-2 rounded text-sm text-white transition-colors" data-component="3">3. L-Glutamine</button>
                    <button class="media-component-button px-3 py-2 rounded text-sm text-white transition-colors" data-component="4">4. Pen-Strep</button>
                </div>
            </div>

            <p><strong>Phenol Red:</strong> A pH indicator. Medium is typically reddish-orange at pH 7.4. It turns yellow if acidic (e.g., due to excessive cell metabolism or bacterial contamination) and purple if alkaline.</p>
            <p><strong>Other Additives (depending on cell type/media):</strong> Sodium Bicarbonate (NaHCO₃ - primary buffering component with incubator CO₂), HEPES buffer (alternative non-CO₂ dependent buffer), non-essential amino acids, specific growth factors.</p>

            <h4 class="styled-h4">Vessels for storing the cells</h4>
            <p>Animal cells are cultured in sterile plastic vessels (bottles, plates and dishes) that have undergone special surface treatment.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <img src="images/image074.png" alt="Flask with cells and medium" class="rounded-lg shadow-md mx-auto block max-w-full w-auto">
                <img src="images/image075.png" alt="Cell culture vessels" class="rounded-lg shadow-md mx-auto block max-w-full w-auto">
            </div>

            <p>Flasks, plates and dishes are the three main types of cell culture vessels. All of them are available in different sizes. Thus, they have different growth areas and need different volumes of culture medium.</p>
            
            <img src="images/image076.png" alt="Different cell culture vessel types and sizes" class="my-4 rounded-lg shadow-md mx-auto block max-w-full w-auto">

            <h4 class="styled-h4">Aseptic Technique & Sterilization</h4>
            <p>Aseptic technique refers to the practices used to prevent contamination (especially of mammalian cells with e.g. bacteria). For this the most important thing is that all work is performed aseptically under a laminar flow hood which provides a sterile environment. This includes experiments but also everything else that comes into contact with the cells e.g. culture media preparation. Thereby each culture media component is added aseptically under the laminar flow hood.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <img src="images/image077.png" alt="Laminar flow hood exterior" class="rounded-lg shadow-md mx-auto block max-w-full w-auto">
                <img src="images/image078.png" alt="Working in laminar flow hood" class="rounded-lg shadow-md mx-auto block max-w-full w-auto">
            </div>

            <h4 class="styled-h4">Laminar Flow Hood Principle</h4>
            <p>A laminar flow hood's principle relies on:</p>
            <ol class="list-decimal list-inside space-y-2 bg-slate-100 p-3 rounded-md shadow-sm">
                <li><strong>Air Intake & Pre-Filtration:</strong> A fan or blower draws ambient room air into the cabinet. This air first passes through a pre-filter, which traps larger particles.</li>
                <li><strong>HEPA Filtration:</strong> The air then moves through a High-Efficiency Particulate Air (HEPA) filter, which captures almost all remaining microscopic particles, such as bacteria, fungi, and other contaminants.</li>
                <li><strong>Unidirectional Airflow:</strong> The now particle-free air flows out of the HEPA filter and across the work surface in a consistent, single direction -- either horizontally or vertically.</li>
                <li><strong>Sterile Workspace:</strong> This constant, uniform flow of clean air physically sweeps the work area, preventing airborne particles from settling on samples or equipment.</li>
                <li><strong>Contamination Prevention:</strong> The enclosed nature of the cabinet, with its side panels, ensures a constant positive air pressure, preventing external, contaminated air from entering the workspace.</li>
            </ol>

            <h4 class="styled-h4">Fundamental rules for sterile work in cell culture</h4>
            <div class="space-y-4">
                <div class="highlight-note">
                    <p><strong>1. Check cultures for contamination before starting work (cloudiness of the medium, microscopically).</strong></p>
                </div>
                <div class="highlight-note">
                    <p><strong>2. Always keep your work surface tidy and disinfect it before starting work.</strong></p>
                </div>
                <div class="highlight-note">
                    <p><strong>3. Essentially, sterile glass or disposable plastic pipettes are used in cell culture.</strong></p>
                    <p class="text-sm mt-1"><em>Clickable Info:</em> To take glass pipettes out of the metal box, open it, shake it gently, and hold it downwards so that the pipettes stick out a little from the box. Then you can grab a single pipette at the top (and only there!) without touching the others, which you should definitely avoid to prevent contamination.</p>
                </div>
                <div class="highlight-note">
                    <p><strong>4. Pipetting should be carried out without touching the storage bottle or culture vessels if possible.</strong></p>
                    <p class="text-sm mt-1"><em>Clickable Info:</em> Changing the pipette more frequently reduces the risk of contamination of both the cultures and the medium in the storage bottle. If liquid gets into the cotton wool during pipetting or if the pipette is accidentally knocked against an object, it must be replaced. To remove media and buffers from the culture vessels, pipette out the corresponding supernatants.</p>
                </div>
                <div class="highlight-note">
                    <p><strong>5. Wear a lab coat and gloves, and disinfect gloves with 80% ethanol.</strong> Disinfect gloves regularly, especially when coming into contact with materials outside the sterile workbench!</p>
                </div>
                <div class="highlight-note">
                    <p><strong>6. Disinfect devices and bottles on the outside with 80% ethanol.</strong></p>
                </div>
                <div class="highlight-note">
                    <p><strong>7. Never work over open sterile containers.</strong></p>
                    <p class="text-sm mt-1"><em>Clickable Info:</em> To remove medium from the storage bottle, unscrew the lid and hold it between your index and middle fingers so that the inside with the thread faces away from the bottle when you hold it in your hand. After completing the task, put the lid back on the bottle (it does not need to be screwed on). If it is not possible to hold the cap in your hand, place it in the sterile area at the back.</p>
                </div>
                <div class="highlight-note">
                    <p><strong>8. Only sterile equipment and solutions are used for all cell culture activities.</strong> If sterile items come into contact with non-sterile areas, use new glass/plastic ware.</p>
                </div>
                <div class="highlight-note">
                    <p><strong>9. Only the materials required for the respective experiment are placed under the laminar flow hood,</strong> and they are sprayed or wiped with 80% ethanol before being placed there.</p>
                    <p class="text-sm mt-1"><em>Note on 80% Ethanol:</em> Ethanol is only effective as a bactericide when it contains a certain amount of water. Absolute alcohol, on the other hand, has a preservative effect on bacterial spores and is therefore not suitable for disinfection.</p>
                </div>
                <div class="highlight-note">
                    <p><strong>10. Wipe up spilled solutions immediately with an alcohol-soaked tissue.</strong></p>
                </div>
                <div class="highlight-note">
                    <p><strong>11. Waste and utensils that are no longer needed are removed from the experiment room</strong> and disposed of in the designated containers, if necessary.</p>
                </div>
                <div class="highlight-note">
                    <p><strong>12. All activities must be carried out within the sterile area.</strong></p>
                    <p class="text-sm mt-1"><em>Clickable Info:</em> The sterile area of the workbench begins behind the front air vents and ends in front of the air vents on the rear wall -> Air vents in the worktop remain open.</p>
                </div>
            </div>

            <h4 class="styled-h4">Sterilization Methods</h4>
            <p><strong>Sterilization aims to kill or inactivate all viable microorganisms.</strong></p>
            <ul class="bg-slate-100 p-3 rounded-md shadow-sm">
                <li><strong>Flaming:</strong> Sterilizing bottle necks, metal tools.</li>
                <li><strong>UV Light (254nm):</strong> Surface sterilization (e.g., inside laminar flow hoods). Max 30cm distance. Safety hazard (burns, mutagenesis).</li>
                <li><strong>Sterile Filtration (0.22 μm filter):</strong> For heat-sensitive liquids like media and serum.</li>
                <li><strong>Autoclaving (Steam Sterilization):</strong> High pressure and temperature (e.g., 121°C, 15 psi, 15-20 min) for liquids (not media with sensitive components), glassware, and some plastics.</li>
                <li><strong>Gamma Radiation:</strong> For pre-sterilized plastic consumables (flasks, pipettes).</li>
            </ul>

            <h4 class="styled-h4">Contamination in Cell Culture</h4>
            <p>Contamination is a major issue in cell culture. Common types include:</p>
            <ul class="space-y-3">
                <li><strong>Bacteria:</strong> Tiny, single-celled prokaryotes.<br>
                <em>Spot them by:</em> Rapid medium turbidity (cloudiness), sudden pH drop (medium turns yellow), and sometimes a "storm" of moving particles visible under the microscope.</li>
                <li><strong>Yeasts:</strong> Single-celled eukaryotic fungi.<br>
                <em>Spot them by:</em> Medium may become slightly turbid; individual ovoid or budding particles visible under microscope, often appearing as small, distinct dots or clusters.</li>
                <li><strong>Molds (Fungi):</strong> Multicellular eukaryotic fungi that grow as hyphae (filaments).<br>
                <em>Spot them by:</em> Visible fuzzy or cotton-like colonies, often on the surface of the medium or flask, and a network of filaments seen under the microscope.</li>
                <li><strong>Mycoplasma:</strong> Very small bacteria lacking a cell wall, making them hard to see and filter.<br>
                <em>Spot them by:</em> Often no visible turbidity; signs include slower cell growth, changes in cell morphology, premature yellowing of medium, or a "milky way-like fog" around nuclei when stained with DAPI.</li>
                <li><strong>Viruses:</strong> Submicroscopic infectious agents replicating only inside living cells.<br>
                <em>Spot them by:</em> Often no immediate visible signs; may cause cytopathic effects (CPE) like cell rounding or lysis, but diagnosis usually requires specific assays (e.g., ELISA, PCR).</li>
                <li><strong>Cross-contamination (other cell lines):</strong> Unwanted presence of a different cell line in the culture.<br>
                <em>Spot them by:</em> Unexpected changes in cell morphology, growth rate, or experimental results; requires specific testing like STR profiling for confirmation.</li>
            </ul>

            <div class="interactive-box">
                <h4>Interactive: Contamination Detective!</h4>
                <p class="text-sm mb-3">What type of contamination is most likely described in each scenario?</p>
                
                <div id="contamination-scenarios" class="space-y-4">
                    <div class="contamination-scenario">
                        <p class="font-medium text-sm mb-2">1. Your cell culture medium has suddenly become cloudy, and under the microscope, you see tiny, fast-moving rod-shaped or spherical particles between your cells. The medium has also turned yellow quickly.</p>
                        <div class="space-y-1">
                            <button class="quiz-option text-xs" data-scenario="1" data-correct="false">Mycoplasma</button>
                            <button class="quiz-option text-xs" data-scenario="1" data-correct="false">Yeast</button>
                            <button class="quiz-option text-xs" data-scenario="1" data-correct="true">Bacteria</button>
                            <button class="quiz-option text-xs" data-scenario="1" data-correct="false">Viral</button>
                        </div>
                        <div class="feedback-message text-xs mt-1 p-1 rounded-md hidden" id="feedback-1"></div>
                    </div>

                    <div class="contamination-scenario">
                        <p class="font-medium text-sm mb-2">2. You notice a 'milky way-like fog' or tiny specks around the nuclei of your cells when stained with DAPI. Cell growth has slowed, and the medium turns yellow faster than usual, but there's no visible cloudiness.</p>
                        <div class="space-y-1">
                            <button class="quiz-option text-xs" data-scenario="2" data-correct="false">Fungal (mold)</button>
                            <button class="quiz-option text-xs" data-scenario="2" data-correct="true">Mycoplasma</button>
                            <button class="quiz-option text-xs" data-scenario="2" data-correct="false">Cross-contamination with other cells</button>
                            <button class="quiz-option text-xs" data-scenario="2" data-correct="false">Bacteria</button>
                        </div>
                        <div class="feedback-message text-xs mt-1 p-1 rounded-md hidden" id="feedback-2"></div>
                    </div>

                    <div class="contamination-scenario">
                        <p class="font-medium text-sm mb-2">3. You see fuzzy, filamentous structures growing in your flask, some of which might be floating on the surface of the medium. Some areas might have a cottony appearance.</p>
                        <div class="space-y-1">
                            <button class="quiz-option text-xs" data-scenario="3" data-correct="false">Yeast</button>
                            <button class="quiz-option text-xs" data-scenario="3" data-correct="false">Bacteria</button>
                            <button class="quiz-option text-xs" data-scenario="3" data-correct="true">Fungal (mold)</button>
                            <button class="quiz-option text-xs" data-scenario="3" data-correct="false">Mycoplasma</button>
                        </div>
                        <div class="feedback-message text-xs mt-1 p-1 rounded-md hidden" id="feedback-3"></div>
                    </div>
                </div>
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

// Helper functions for this module
function handleMediaComponent(componentNumber) {
    // Hide all component info boxes
    document.querySelectorAll('.media-component-info-box').forEach(box => {
        box.classList.add('hidden');
    });
    
    // Remove selected state from all buttons
    document.querySelectorAll('.media-component-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Show selected component info
    const selectedComponent = document.getElementById(`component-${componentNumber}`);
    if (selectedComponent) {
        selectedComponent.classList.remove('hidden');
    }
    
    // Add selected state to clicked button
    const selectedButton = document.querySelector(`[data-component="${componentNumber}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}

function handleContaminationScenario(button, scenario, isCorrect) {
    const scenarioDiv = button.closest('.contamination-scenario');
    const allButtons = scenarioDiv.querySelectorAll('.quiz-option');
    const feedbackDiv = document.getElementById(`feedback-${scenario}`);
    
    // Disable all buttons in this scenario
    allButtons.forEach(btn => btn.disabled = true);
    
    // Style the clicked button
    if (isCorrect) {
        button.classList.add('correct');
        feedbackDiv.innerHTML = '<strong>Correct!</strong>';
        feedbackDiv.className = 'feedback-message text-xs mt-1 p-1 rounded-md bg-green-100 text-green-800';
    } else {
        button.classList.add('incorrect');
        // Find and highlight the correct answer
        const correctButton = scenarioDiv.querySelector('[data-correct="true"]');
        if (correctButton) {
            correctButton.classList.add('correct');
        }
        feedbackDiv.innerHTML = `<strong>Incorrect.</strong> The correct answer is: <strong>${correctButton ? correctButton.textContent : 'Unknown'}</strong>`;
        feedbackDiv.className = 'feedback-message text-xs mt-1 p-1 rounded-md bg-red-100 text-red-800';
    }
    
    feedbackDiv.classList.remove('hidden');
}

export default function initModule7(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-7';
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
            <p class="text-sm text-gray-600 mb-4">Test your knowledge from this module.</p>
            <div id="quiz-container-module-7"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);
    
    // 3. Attach event listeners
    // Media component buttons
    document.querySelectorAll('.media-component-button').forEach(button => {
        button.addEventListener('click', () => {
            const componentNumber = button.getAttribute('data-component');
            handleMediaComponent(componentNumber);
        });
    });
    
    // Contamination scenario buttons
    document.querySelectorAll('#contamination-scenarios .quiz-option').forEach(button => {
        button.addEventListener('click', () => {
            const scenario = button.getAttribute('data-scenario');
            const isCorrect = button.getAttribute('data-correct') === 'true';
            handleContaminationScenario(button, scenario, isCorrect);
        });
    });

    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-7');
}
