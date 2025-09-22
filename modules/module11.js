const TITLE = "Module 11: Immunocytochemistry (ICC) for the detection of a protein with FLAG tag";
const QUIZ_DATA = [
    {
        question: "What is the primary purpose of permeabilization in ICC?",
        options: ["To fix the cells permanently", "To enable antibodies to access the cell interior", "To visualize the nuclei", "To prevent non-specific binding"],
        answer: "To enable antibodies to access the cell interior",
        type: "mcq",
        explanation: "Permeabilization opens cell membranes using detergents like Triton X-100, allowing antibodies to enter cells and bind to intracellular targets."
    },
    {
        question: "What is the purpose of the blocking step in ICC?",
        options: ["To wash away unbound antibodies", "To permeabilize the cell membrane", "To prevent non-specific binding of antibodies", "To conjugate the fluorophore to the antibody"],
        answer: "To prevent non-specific binding of antibodies",
        type: "mcq",
        explanation: "Blocking with BSA or serum reduces background signal by preventing non-specific binding of antibodies to unwanted sites."
    },
    {
        question: "True or False: In the indirect ICC method, the secondary antibody binds directly to the target protein.",
        options: ["True", "False"],
        answer: "False",
        type: "tf",
        explanation: "In indirect ICC, the secondary antibody binds to the primary antibody, not directly to the target protein. The primary antibody binds to the target protein."
    },
    {
        question: "Which of the following is NOT an essential control for antibody staining?",
        options: ["No primary antibody control", "Secondary-only control", "Positive control sample", "High concentration antibody control"],
        answer: "High concentration antibody control",
        type: "mcq",
        explanation: "High concentration antibody control is not a standard control. Essential controls include no primary antibody, secondary-only, positive control, and negative control samples."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 11: Immunocytochemistry (ICC) for the detection of a protein with FLAG tag</h2>
            
            <p>After we analyzed our GFP transfection efficiency, we will now perform an immunocytochemistry (ICC) experiment 24-48 hrs after the transfection. In this module we will:</p>
            
            <ul class="list-disc list-inside ml-4 mb-4 bg-sky-50 p-3 rounded-md">
                <li>Perform immunofluorescence staining to detect the FLAG-tagged protein</li>
                <li>Observe cells under a fluorescence microscope to indirectly detect FLAG expression (red fluorescence).</li>
                <li>Calculate transfection efficiency (percentage of FLAG-positive cells).</li>
            </ul>

            <h3>Theoretical Background</h3>
            
            <h4 class="styled-h4">What is ICC?</h4>
            <p><strong>Immunocytochemistry (ICC)</strong> is a method that can be used to visualize specific proteins in cells. This is done using antibodies that bind specifically to the desired target protein. These antibodies are often recognized by so-called secondary antibodies (indirect method), which are coupled with a fluorescent dye or other marker. This allows the location of the protein within the cell to be seen clearly under the microscope. ICC is used on fixed (i.e., no longer living) cells and helps to examine cell structures, signaling pathways, and the distribution pattern of proteins in detail.</p>
            
            <img src="images/image111.png" alt="The direct and indirect verification method of ICC" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-lg w-auto" onerror="this.onerror=null; this.src='https://placehold.co/500x200/e2e8f0/4a5568?text=Figure+4:+Direct+and+Indirect+ICC+Methods'; this.alt='Placeholder: Direct and Indirect ICC Methods';">
            <p class="text-sm text-center text-gray-600 -mt-2 mb-4">The image shows the direct and indirect verification method of ICC. Image from <a href="https://ruo.mbl.co.jp/bio/e/support/method/images/ic01_e.png" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">here</a>.</p>
                      
            <h4 class="styled-h4">Why is ICC an important tool?</h4>
            <p>In cell and molecular biology, ICC is a key method for not only confirming the presence of a protein, but also for investigating its distribution within the cell. In research, it is used for diagnostics, confirming transfection, and characterizing cell lines, among other things.</p>

            <h4 class="styled-h4">What is the FLAG tag?</h4>
            <p>The FLAG tag is a short peptide marker that is bound to a target protein and can be used to label this protein. This tag can be made visible using a specific anti-FLAG antibody. This allows the expression and localization of the labeled protein in the cell to be detected.</p>

            <h4 class="styled-h4">Overview of the procedure</h4>
            <ol class="list-decimal list-inside ml-4 space-y-2 bg-slate-100 p-3 rounded-md shadow-sm">
                <li><strong>Permeabilization</strong> of cells with detergents to enable antibodies to enter the cell interior</li>
                <li><strong>Blocking</strong> of non-specific binding sites</li>
                <li><strong>Incubation</strong> with primary and then secondary antibody
                    <ul class="list-disc list-inside ml-4 mt-1">
                        <li>Primary antibody binds target protein</li>
                        <li>Secondary antibody binds to the primary antibody and is coupled to a detectable marker (usually a fluorescent dye; in our case Alexa Fluor 594 (red fluorescent))</li>
                    </ul>
                </li>
                <li><strong>Hoechst33258 staining</strong> of nuclei to determine the total cell count</li>
                <li><strong>Fluorescence microscopic evaluation</strong></li>
            </ol>

            <h3>Materials</h3>
            <ul class="bg-slate-100 p-3 rounded-md shadow-sm">
                <li>Already transfected, fixed HEK293 cells</li>
                <li>PBS (phosphate-buffered saline) for washing</li>
                <li>0.1% Triton X-100 for permeabilization</li>
                <li>Blocking solution (e.g., 5% BSA or FCS in PBS)</li>
                <li>Primary Rabbit anti-FLAG antibody (stock concentration: 600 µg/ml; stock concentration can differ)</li>
                <li>Secondary antibody conjugated with Alexa Fluor 594 fluorophore (goat anti-rabbit 594) (stock concentration 0.5 mg/ml; stock concentration can differ)</li>
                <li>Hoechst33258</li>
                <li>Fluorescence microscope with appropriate filter (Alexa Fluor 594 excited at  561 nm or even better at 594 nm)</li>
                <li>Pipettes, sterile pipette tips</li>
            </ul>
            
            <div class="highlight-note">
                <p><strong>Note:</strong> Only take AB stocks out of the freezer when needed! Dilutions (aliquots) can be stored at 6°C.</p>
            </div>

            <h3>Protocol Steps</h3>
            
            <div class="space-y-6">
                <div>
                    <h4 class="styled-h4">1. Permeabilization of cells</h4>
                    <div class="highlight-note">
                        <p><strong>Permeabilization opens cell membranes!</strong></p>
                    </div>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li>Take the 24-well plates with the cells out of the refrigerator.</li>
                        <li>Remove the PBS from all wells used for ICC (= those that have not yet been stained with Hoechst before). 
                            <div class="p-2 mt-1 bg-amber-50 border-l-4 border-amber-400 text-amber-700 text-xs rounded-r-md">
                                <p><strong>Caution:</strong> Tilt the plate at a relatively steep angle and do not touch the bottom of the well so as not to disturb the cells. Instead, pipette only at the side of the well by holding the pipette at an angle. Also, pipette extremely slowly!!! Always pipette on the same side/in the same place!</p>
                            </div>
                        </li>
                        <li>Add 0.5 ml of a 0.1% Triton X-100 solution in 1x PBS per well to the cells.</li>
                        <li>Incubate for 5-10 minutes.</li>
                        <li>After permeabilization, wash again twice with PBS (500 µl each time).</li>
                    </ul>
                </div>

                <div>
                    <h4 class="styled-h4">2. Blocking of unspecific binding sites</h4>
                    <div class="highlight-note">
                        <p><strong>Blocking reduces the background signal!</strong></p>
                    </div>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li>Remove PBS and add approximately 300 µl of blocking solution (5% BSA in PBS) per well to the cells.</li>
                        <li>Incubate for 30-45 minutes at room temperature to block unspecific binding sites.</li>
                    </ul>
                </div>

                <div>
                    <h4 class="styled-h4">3. Primary antibody</h4>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li>Prepare a dilution of the primary antibody (rabbit anti-FLAG) in a ratio of 1:100 or 1:200 in blocking solution (depending on the manufacturer's recommendation) (= antibody solution).</li>
                        <li>Remove the blocking solution from the cells and add 200 µl of the primary antibody solution per well. Care must be taken to ensure that the cells are evenly covered. 
                            <div class="p-2 mt-1 bg-orange-50 border-l-4 border-orange-400 text-orange-700 text-xs rounded-r-md">
                                <p><strong>Note:</strong> There should also be wells that serve as negative controls and contain only the 2nd antibody but no 1st antibody. These wells that serve as negative controls will only receive blocking solution in this step and no 1st antibody.</p>
                            </div>
                        </li>
                        <li>Incubate the cells for 2 hours at room temperature.</li>
                        <li>Then remove the primary antibody from the wells. 
                            <div class="p-2 mt-1 bg-orange-50 border-l-4 border-orange-400 text-orange-700 text-xs rounded-r-md">
                                <p><strong>Note:</strong> The primary antibody is expensive and can also be reused. Just save it in a tube and store it at 6°C in the fridge. There it is stable for a couple of weeks. Similarly, the blocking solution is also removed from the negative control wells.</p>
                            </div>
                        </li>
                        <li>Wash twice for 5 minutes with 200 µl PBS to remove unbound antibodies.</li>
                    </ul>
                </div>

                <div>
                    <h4 class="styled-h4">4. Secondary antibody</h4>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li>Prepare a dilution of the fluorophore-conjugated secondary antibody (goat anti-rabbit 594) in a ratio of 1:250, 1:500 or 1:1000 in blocking solution (depending on the manufacturer's recommendation).</li>
                        <li>Add 200 µl of secondary antibody solution per well to the cells and incubate for 1 hour at room temperature in the dark (protection from light is necessary as the fluorophore conjugates are light-sensitive).</li>
                    </ul>
                </div>

                <div>
                    <h4 class="styled-h4">5. Hoechst staining of fixed cells</h4>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li>Remove the secondary antibody solution and add 200 µl Hoechst33258 (Caution: stains DNA, carcinogenic!) (stock = 10 mg/ml; use it 1:5000 = 2 µg/ml) in 1x PBS <strong>per well</strong>. To do this, first prepare a 1:5 dilution of Hoechst33258 in PBS (2 µl Hoechst33258 in 8 µl PBS) and then dilute this solution 1:1000 in PBS (10 µl of this solution in 10 ml PBS). Vortex the PBS/Hoechst mixture thoroughly to ensure even distribution of Hoechst in the solution.</li>
                        <li>Incubate for 5 min at RT in the dark</li>
                        <li>Wash 2 x 5 min with 200 μL 1 x PBS</li>
                        <li>Leave 200 μL PBS in each well after the second washing step</li>
                    </ul>
                </div>

                <div>
                    <h4 class="styled-h4">6. Microscopy</h4>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li>Place the 24-well plate in a suitable microscopy chamber.</li>
                        <li>Set the fluorescence microscope to the appropriate channel for the fluorophore used. → Alexa Fluor 594 excited using the 561 nm or even better at 594 nm laser lines</li>
                        <li>Search for the immunostained cells and document the results by taking images. Take at least 3-5 images per well</li>
                        <li>Hoechst- and GFP-stained cells can also be searched for (GFP should only be present in co-transfection = wells to which GFP-Plasmid and FLAG tag-Plasmid was added).</li>
                        <li><strong>Filter specifications:</strong>
                            <ul class="list-circle list-inside ml-4 text-sm">
                                <li>Hoechst33258 excitation at 352 nm (UV light) and emission at 454 nm</li>
                                <li>GFP (excitation at 488 nm (= blue/UV), emission at 510 nm (= green))</li>
                                <li>Alexa Fluor 594 (excitation at 594 nm, emission at 617 nm (= red))</li>
                            </ul>
                        </li>
                        <li>Record all parameters (e.g., filters used, objective, exposure time)</li>
                    </ul>
                </div>

                <div>
                    <h4 class="styled-h4">7. Documentation & Analysis</h4>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li>Using ImageJ (Fiji) software, we can now easily determine transfection efficiency. The "Multi-point" tool can be used for this purpose. This makes it easy to count the cells.</li>
                        <li>Count the cells that show FLAG-tag proteins made visible by ICC (red-fluorescent cells), as well as GFP-expressing cells and Hoechst-stained cells.</li>
                        <li>The Hoechst staining indicates the total cell count. By simple division, we now obtain the transfection efficiency of the FLAG-tag expressing plasmid and the GFP-expressing plasmid. This can be indicated as a percentage.</li>
                        <li>Note all steps, pay attention to any peculiarities in the fluorescence distribution and to possible confounding factors.</li>
                    </ul>
                </div>
            </div>

            <div class="highlight-note">
                <p><strong>Important:</strong> Make sure to work in the dark as much as possible when handling fluorescent antibodies—this will preserve the signal and prevent bleaching!</p>
            </div>

            <div class="interactive-box">
                <h4>Interactive: ICC Transfection Efficiency Calculator</h4>
                <p class="text-sm mb-3">Calculate transfection efficiencies for both FLAG-tagged and GFP-expressing cells:</p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-3 items-center">
                    <div>
                        <label for="flag-positive-cells" class="block text-sm font-medium text-gray-700">FLAG-positive cells (red):</label>
                        <input type="number" id="flag-positive-cells" placeholder="e.g., 32" class="w-full mt-1">
                    </div>
                    <div>
                        <label for="gfp-positive-cells-icc" class="block text-sm font-medium text-gray-700">GFP-positive cells (green):</label>
                        <input type="number" id="gfp-positive-cells-icc" placeholder="e.g., 28" class="w-full mt-1">
                    </div>
                    <div>
                        <label for="total-hoechst-cells-icc" class="block text-sm font-medium text-gray-700">Total Hoechst-stained cells:</label>
                        <input type="number" id="total-hoechst-cells-icc" placeholder="e.g., 150" class="w-full mt-1">
                    </div>
                    <div class="sm:col-span-3 mt-2">
                        <button id="calculate-icc-efficiency-btn" class="text-sm w-full">Calculate Transfection Efficiencies (%)</button>
                    </div>
                </div>
                <div id="icc-efficiency-output" class="mt-3 space-y-2"></div>
            </div>

            <h3>Questions for Reflection</h3>
            
            <div class="space-y-4">
                <div class="highlight-note">
                    <p><strong>11. What are the essential steps for antibody staining?</strong></p>
                    <div class="text-sm mt-2">
                        <p><strong>Essential Steps for Antibody Staining:</strong></p>
                        <ul class="list-disc list-inside ml-4 mt-2 space-y-1">
                            <li><strong>Fixation:</strong> Preserves cell/tissue structure and immobilizes antigens. Common fixatives: paraformaldehyde (PFA), methanol.</li>
                            <li><strong>Permeabilization (if intracellular targets):</strong> Allows antibodies to enter the cells. Common reagents: Triton X-100, saponin.</li>
                            <li><strong>Blocking:</strong> Prevents non-specific binding of antibodies. Common blockers: BSA, serum, or commercial blocking buffers.</li>
                            <li><strong>Primary antibody incubation:</strong> Antibody binds to the specific target (antigen). Incubation time/temperature depends on the antibody (e.g., 1 h RT or overnight 4°C).</li>
                            <li><strong>Washing:</strong> Removes unbound primary antibody to reduce background.</li>
                            <li><strong>Secondary antibody incubation:</strong> Binds to the primary antibody and is usually conjugated to a fluorophore or enzyme.</li>
                            <li><strong>Washing:</strong> Again, to reduce background signal.</li>
                            <li><strong>Counterstaining (optional):</strong> e.g., nuclear staining with DAPI or Hoechst.</li>
                            <li><strong>Mounting and Imaging:</strong> Use appropriate mounting medium and acquire images with a fluorescence or confocal microscope.</li>
                        </ul>
                    </div>
                </div>
                
                <div class="highlight-note">
                    <p><strong>12. What are possible sources of error during staining and how could appropriate control experiments look like?</strong></p>
                    
                    <h5 class="font-semibold mt-3 mb-2">Possible Sources of Error:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                                <tr class="bg-purple-100">
                                    <th class="border border-gray-300 p-2 text-left font-semibold">Error Type</th>
                                    <th class="border border-gray-300 p-2 text-left font-semibold">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-2 font-medium">Non-specific binding</td>
                                    <td class="border border-gray-300 p-2">Antibodies bind to unintended targets or background</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 font-medium">Poor fixation</td>
                                    <td class="border border-gray-300 p-2">Leads to loss of target protein or poor morphology</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 font-medium">Insufficient washing</td>
                                    <td class="border border-gray-300 p-2">Causes high background signal</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 font-medium">Wrong antibody dilution</td>
                                    <td class="border border-gray-300 p-2">Too concentrated: high background; too dilute: weak/no signal</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 font-medium">Cross-reactivity</td>
                                    <td class="border border-gray-300 p-2">Secondary antibody binds to endogenous immunoglobulins</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 font-medium">Photobleaching</td>
                                    <td class="border border-gray-300 p-2">Fluorophores fade during imaging</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h5 class="font-semibold mt-4 mb-2">Control Experiments:</h5>
                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                                <tr class="bg-green-100">
                                    <th class="border border-gray-300 p-2 text-left font-semibold">Control Type</th>
                                    <th class="border border-gray-300 p-2 text-left font-semibold">Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-2 font-medium">No primary antibody control</td>
                                    <td class="border border-gray-300 p-2">Detects background caused by secondary antibody alone</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 font-medium">Isotype control</td>
                                    <td class="border border-gray-300 p-2">Uses a non-specific antibody of the same class as the primary; tests for non-specific Fc binding</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 font-medium">Positive control sample</td>
                                    <td class="border border-gray-300 p-2">A sample known to express the target antigen ensures the staining worked</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 font-medium">Negative control sample</td>
                                    <td class="border border-gray-300 p-2">A sample that lacks the target protein verifies specificity</td>
                                </tr>
                                <tr>
                                    <td class="border border-gray-300 p-2 font-medium">Secondary-only control</td>
                                    <td class="border border-gray-300 p-2">Apply only secondary antibody to check for cross-reactivity or background fluorescence</td>
                                </tr>
                            </tbody>
                        </table>
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

function calculateICCEfficiency() {
    const flagCells = parseInt(document.getElementById('flag-positive-cells').value);
    const gfpCells = parseInt(document.getElementById('gfp-positive-cells-icc').value);
    const totalCells = parseInt(document.getElementById('total-hoechst-cells-icc').value);
    const outputDiv = document.getElementById('icc-efficiency-output');
    if (!outputDiv) return;

    if (isNaN(totalCells) || totalCells <= 0) {
        outputDiv.innerHTML = '<p class="text-red-600">Please enter a valid total cell count.</p>';
        return;
    }
    
    let results = [];
    
    if (!isNaN(flagCells) && flagCells >= 0) {
        if (flagCells > totalCells) {
            results.push('<p class="text-red-600">FLAG-positive cells cannot exceed total cells.</p>');
        } else {
            const flagEfficiency = (flagCells / totalCells) * 100;
            results.push(`<p class="font-semibold text-red-600">FLAG Transfection Efficiency: <strong>${flagEfficiency.toFixed(1)}%</strong> (${flagCells} FLAG+ cells out of ${totalCells} total cells)</p>`);
        }
    }
    
    if (!isNaN(gfpCells) && gfpCells >= 0) {
        if (gfpCells > totalCells) {
            results.push('<p class="text-red-600">GFP-positive cells cannot exceed total cells.</p>');
        } else {
            const gfpEfficiency = (gfpCells / totalCells) * 100;
            results.push(`<p class="font-semibold text-green-600">GFP Transfection Efficiency: <strong>${gfpEfficiency.toFixed(1)}%</strong> (${gfpCells} GFP+ cells out of ${totalCells} total cells)</p>`);
        }
    }
    
    if (results.length === 0) {
        outputDiv.innerHTML = '<p class="text-gray-600">Please enter at least one type of positive cell count.</p>';
    } else {
        outputDiv.innerHTML = results.join('');
    }
}

export default function initModule11(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-11';
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
            <div id="quiz-container-module-11"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);
    
    // 3. Attach event listeners
    document.getElementById('calculate-icc-efficiency-btn')?.addEventListener('click', calculateICCEfficiency);

    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-11');
}
