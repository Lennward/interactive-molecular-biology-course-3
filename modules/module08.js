const TITLE = "Module 8: Passaging and Seeding of mammalian cells";
const QUIZ_DATA = [
    {
        question: "You count an average of 60 live cells per large square in a Neubauer hemocytometer. Your cells were diluted 1:2 with Trypan Blue before counting. What is the concentration of live cells in your original sample (cells/mL)?",
        options: ["0.6 × 10⁴ cells/mL", "1.2 × 10⁵ cells/mL", "6.0 × 10⁵ cells/mL", "1.2 × 10⁶ cells/mL"],
        answer: "1.2 × 10⁶ cells/mL",
        type: "mcq",
        explanation: "Cells/mL = (Avg cells per square) × Dilution Factor × 10⁴ = 60 × 2 × 10⁴ = 120 × 10⁴ = 1.2 × 10⁶ cells/mL."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 8: Passaging and Seeding of mammalian cells</h2>
            
            <p>In order to use cells for experiments, they are kept in culture and must be cared for. Every 3-4 days, cells are passaged, i.e., only a certain portion of the cells is used for further cultivation, and they are given new nutrients. During passaging, some of the cells that are no longer needed for further cultivation can be used for experiments. To do this, this portion of the cells is seeded in plates or dishes after the first steps of passaging.</p>
            
            <p>In this course we will work with HEK293 cells.</p>
            
            <div class="interactive-terms-grid hek-cells-section">
                <div class="interactive-term" data-term="HEK293 cells">
                    <div class="term-title">HEK293 cells are...</div>
                    <div class="term-explanation">eukaryotes derived from <u><strong>H</strong></u>uman <u><strong>E</strong></u>mbryonic <u><strong>K</strong></u>idney cells. The number 293 refers to the specific cell line that was produced in the 1970s by transformation with a fragment of adenovirus type 5. HEK293 cells are among the most frequently used cell lines in molecular biology. They are adherent epithelial cells commonly used for their high transfection efficiency and protein production capabilities.</div>
                </div>
            </div>

            <p>Adherent cells grow as a monolayer (a single layer) until they reach confluence, meaning that the cells form a continuous layer without gaps. The cells then stop growing because they are subject to contact inhibition.</p>

            <p>At this point at the latest, the cells should be passaged/split, i.e., divided. To do this, they are detached from the culture vessel using trypsin, a protease, and resuspended in serum-containing medium (the serum inhibits trypsin). In order to track the age of a cell culture, the number of subcultures is noted on the culture dish. Subcultivation is often referred to as "passaging" in laboratory jargon, which is why the age is indicated in the form of "passages," e.g., "P21."</p>

            <div class="highlight-note-module8">
                <p><strong>Confluency:</strong> Proportion of the vessel's surface that is covered by cells. Cells should be split when they are at 70% confluency.</p>
            </div>

            <img src="images/image0801.png" alt="Cell confluency diagram showing different confluence levels" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-md w-auto enlarged-image">

            <p>The image shows examples of how the cell density looks at different percentages in confluency. A higher percentage in confluency indicates a higher cell density.</p>
            
            <h3>Cell Counting with a Hemocytometer (Neubauer Chamber)</h3>
            <p>A hemocytometer is a specialized counting chamber slide used to determine the concentration of cells in a liquid sample.</p>

            <img src="images/image0802.png" alt="Neubauer chamber counting grid with example cells" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-md w-auto enlarged-image">
            <p class="text-xs text-center text-gray-500 -mt-2 mb-4">Example of cell counting in <strong>one big</strong> square of a Neubauer grid. Green checks indicate cells to count; red X's indicate cells not to count based on a common counting rule (e.g., count cells on top and left lines, exclude bottom and right).</p>

            <h4 class="styled-h4">General Procedure</h4>
            <ol class="list-decimal list-inside bg-slate-100 p-3 rounded-md shadow-sm">
                <li>Under a microscope (typically at 10x objective), focus on the grid lines.</li>
                <li>Count the cells in the 4 large corner squares (each 1mm × 1mm, subdivided into 16 smaller squares). For consistency, establish a counting rule whereby cells touching the top and left lines are counted, but not the cells touching the bottom and right lines.</li>
            </ol>

            <h4 class="styled-h4">Calculation</h4>
            <p><span class="formula">Cells/mL = (Average cells per large square) × Dilution Factor × 10⁴</span></p>
            <p>The dilution factor is only important if you diluted the cell suspension. This is often done in Trypan Blue, as this reagent stains dead cells blue. A typical dilution would be 1:10 or 1:2, i.e. dilution factor 10 or 2.</p>
            <p>10⁴ is the conversion factor since each large square is 10⁻⁴ mL resulting from the size of the counting chamber, since the area of a square is 1 mm x 1 mm = 1 mm² and the depth is 0.1 mm -> volume = 0.1 mm³ = 1 × 10⁻⁴ ml.</p>

            <div class="interactive-box">
                <h4>Interactive: Cell Count Calculator</h4>
                <p class="text-sm mb-3">Enter the total number of live (unstained) cells counted in the <strong>4 large</strong> corner squares and the dilution factor used. (Note: for calculating the cell count the average cell number per large square is taken i.e. cells counted in the 4 large corner squares divided by 4.)</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 items-center">
                    <div>
                        <label for="cells-counted-8" class="block text-sm font-medium text-gray-700">Total live cells in <strong>4</strong> large squares:</label>
                        <input type="number" id="cells-counted-8" placeholder="e.g., 240" class="w-full mt-1">
                    </div>
                    <div>
                        <label for="dilution-factor-8" class="block text-sm font-medium text-gray-700">Dilution factor (e.g., 2 for 1:2 mix):</label>
                        <input type="number" id="dilution-factor-8" value="2" class="w-full mt-1">
                    </div>
                    <div class="sm:col-span-2 mt-2">
                        <button id="cell-density-btn-8" class="text-sm w-full">Calculate Cell Density (cells/mL)</button>
                    </div>
                </div>
                <p id="cell-density-output-8" class="mt-3 font-semibold text-green-700"></p>
            </div>

            <div class="practice-problem-box">
                <p class="font-semibold">Practice Problem: Cell Plating</p>
                <p>You have a cell stock with a concentration of 1 × 10⁶ cells/mL. You want to plate 2 × 10⁵ cells into each well. What volume of your cell stock do you need to add to each well?</p>
                <div class="mt-2 space-y-2 sm:space-y-0 sm:flex sm:items-end sm:gap-3">
                    <div>
                        <label for="cell-plating-input-8" class="block text-xs font-medium text-gray-600">Cell Stock Volume per well (μL):</label>
                        <input type="number" id="cell-plating-input-8" class="text-sm p-1 w-48">
                    </div>
                    <button id="check-plating-btn-8" class="text-sm px-3 py-1.5">Check Answer</button>
                </div>
                <div id="cell-plating-feedback-8" class="practice-feedback text-sm mt-2 hidden"></div>
                <div id="cell-plating-solution-8" class="solution-details hidden">
                    <strong>Detailed Solution:</strong><br>
                    Desired cells per well = 2 × 10⁵ cells.<br>
                    Stock concentration = 1 × 10⁶ cells/mL.<br>
                    Volume needed per well = (Desired cells per well) / (Stock concentration)<br>
                    Volume = (2 × 10⁵ cells) / (1 × 10⁶ cells/mL) = 0.2 mL.<br>
                    Convert to μL: 0.2 mL × 1000 μL/mL = <strong>200 μL per well</strong>.
                </div>
            </div>

            <h3>Materials</h3>
            <ul class="bg-slate-100 p-3 rounded-md shadow-sm">
                <li>Waste bottle</li>
                <li>5mL serological plastic or glass pipettes</li>
                <li>New small cell culture bottle (T25 flask)</li>
                <li>Culture medium with additives (see Module "Introduction to Cell Culture"), trypsin</li>
                <li>15mL Falcon</li>
                <li>Pipettes P1000 / P200 and corresponding filter tips</li>
                <li>Pipetboy</li>
            </ul>

            <h3>Protocol</h3>
            <div class="space-y-4">
                <div class="highlight-note-module8">
                    <p>Before starting, warm up the medium, PBS, and trypsin in the incubator for at least 30 minutes (in a glass beaker to collect condensation and slightly loosen the lid of the Falcon tube with medium).</p>
                </div>

                <ol class="list-decimal list-inside space-y-3">
                    <li>Before starting work, generously disinfect the work surface with 80% EtOH.</li>
                    <li>Disinfect all necessary materials with 80% EtOH and place them in the sterile workbench.</li>
                    <li>Further preparation in the sterile workbench: Unscrew the medium bottle caps, but do not remove them; open the pipette box for the glass pipettes; prepare the waste bottle.</li>
                    <li>Remove the cells from the incubator and check: Are the cells alive? Are the cells sitting at the bottom or floating in the medium? Is the medium clear and bright red?</li>
                    <li>Place the cell culture bottle in the sterile workbench and disinfect your gloves.</li>
                    <li>Loosen the lid of the cell culture bottle.</li>
                    <li>Take a serological pipette in a sterile manner (do not touch anything) and remove and discard the old medium using a Pipet-Boy. Place the glass pipette in the waste container.</li>
                    <li>Add 4 mL of 1xPBS (washing solution) to the bottle (without detaching the cells, drop onto the other side of the bottle) and tilt over the cell layer to "wash" the cells, remove the PBS and discard.</li>
                    <li>Add 1 mL trypsin to the bottle and tilt gently (!) so that all cells are/were in contact with trypsin, then incubate for 2-5 min at 37°C to detach the cells from the bottom (the vessel may require a few gentle taps). Cell detachment can be verified microscopically.</li>
                    <li>Rinse the cells from the bottle wall with 4 mL of fresh medium until no cell lawn is visible.</li>
                    <li>Separate the cells by slow (!) resuspension.</li>
                    <li>Transfer to a new 15 mL Falcon tube and centrifuge for 2 min at 2000 rpm.</li>
                </ol>

                <div class="highlight-note-module8">
                    <p><strong>Afterwards, cells can be passaged (and plated if necessary). The protocol differs at this point!</strong></p>
                </div>
            </div>

            <h4 class="styled-h4">Option 1: Passaging cells</h4>
            <ul class="list-disc list-inside ml-4 space-y-2">
                <li>Meanwhile, prepare a new cell culture bottle, label it with the cell line, date, initials, passage number and add 5 mL of fresh medium to this bottle.</li>
                <li>After centrifugation, discard the supernatant (pour it into the waste container, but do not touch it) and resuspend the cell pellet in 1 mL of fresh medium.</li>
                <li>Transfer 250 μL of cells (split factor: 1:4) to the new prepared cell culture bottle (several new bottles can also be prepared).</li>
                <li>Swirl "in a cross" so that the cells are evenly distributed on the bottom and place in the incubator.</li>
            </ul>

            <h4 class="styled-h4">Option 2: Plate cells</h4>
            <p>We are using a 24 well plate (see Module "Introduction to Cell Culture" for growth area & volume of culture medium)</p>

            <ol class="list-decimal list-inside space-y-2">
                <li>After centrifugation, discard the supernatant (pour it into the waste container, but do not touch it) and resuspend the cell pellet in 1 mL of fresh medium.</li>
                <li>Take a new Eppi and mix 10 μL of cell suspension 1:10 with trypan blue (= 90 μl), flick the tube briefly and place 10 μL of the mixture in a Neubauer counting chamber and determine the number of cells
                    <ul class="list-disc list-inside ml-4 mt-2">
                        <li>for this you need a light microscope and a Neubauer counting chamber</li>
                    </ul>
                </li>
            </ol>

            <img src="images/image0803.png" alt="Neubauer counting chamber under the microscope" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-md w-auto enlarged-image">
            <p class="text-xs text-center text-gray-500 -mt-2 mb-4">Fig.: Neubauer counting chamber under the microscope</p>

            <ol class="list-decimal list-inside space-y-2" start="3">
                <li>Moisten the bridges of the Neubauer counting chamber with water (or breathe on them), place the cover glass on top and press down until it sticks to the counting chamber (and the "Newton's rings" (rainbow-like) are visible).</li>
                <li>Carefully fill one side of the Neubauer counting chamber with 10 μL of the 1:10 trypan blue diluted cell suspension (as described above).</li>
                <li>If cell clumps are still present, then the cell suspension has not yet been adequately triturated/mixed → triturate cell suspension (pipette up and down) 10-20 times and use a new Eppi and dilute cell suspension in trypan blue as before and check again.</li>
                <li>Many dead cells mean that the trituration was too coarse.</li>
                <li>Count the cells under the microscope (10x/20x objective). Count the round/spherical (living) cells in the 4×4 squares (see L).</li>
                <li>These are colorless = alive, while blue cells are dead (do not count blue cells!). Trypan blue is a cell-impermeant, blue-colored dye that binds strongly to proteins. Accordingly, it weakly labels the membrane of living cells, and strongly labels proteinaceous debris as well as the cytoplasm of dead and dying cells whose plasma membranes are no longer intact.</li>
            </ol>

            <h4 class="styled-h4">Calculation for adjusting the cell count</h4>
            <p>The total number of cells in the 4 squares (L) is divided by 4 to determine the mean value.</p>

            <div class="interactive-box">
                <h4>Cell Counting Worksheet</h4>
                <table class="w-full border-collapse border border-gray-300 mb-4">
                    <thead>
                        <tr class="bg-purple-100">
                            <th class="border border-gray-300 p-2 text-left font-semibold">Large square (L)</th>
                            <th class="border border-gray-300 p-2 text-left font-semibold">Number of cells (cells/square)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 p-2">1</td>
                            <td class="border border-gray-300 p-2">
                                <input type="number" id="square1" class="w-full p-1 border rounded" placeholder="Count">
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 p-2">2</td>
                            <td class="border border-gray-300 p-2">
                                <input type="number" id="square2" class="w-full p-1 border rounded" placeholder="Count">
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 p-2">3</td>
                            <td class="border border-gray-300 p-2">
                                <input type="number" id="square3" class="w-full p-1 border rounded" placeholder="Count">
                            </td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 p-2">4</td>
                            <td class="border border-gray-300 p-2">
                                <input type="number" id="square4" class="w-full p-1 border rounded" placeholder="Count">
                            </td>
                        </tr>
                        <tr class="bg-gray-50">
                            <td class="border border-gray-300 p-2 font-semibold">Average</td>
                            <td class="border border-gray-300 p-2">
                                <span id="average-result" class="font-semibold">---</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button id="calculate-average" class="mb-4">Calculate Average</button>
                
                <div id="calculation-results" class="hidden bg-blue-50 p-4 rounded-md">
                    <p class="font-semibold mb-2">Calculation Results:</p>
                    <p class="text-sm">L₁ + L₂ + L₃ + L₄ = L_total</p>
                    <p class="text-sm">L_total ÷ 4 = L_mean</p>
                    <p class="text-sm">L_mean = <span id="mean-value" class="font-semibold">---</span></p>
                    <p class="text-sm mt-2"><strong>Final calculation:</strong></p>
                    <p class="text-sm">mean × dilution factor (Trypan blue) × 10⁴ = <span id="final-calculation" class="font-semibold">---</span> × 10⁴ cells/mL = <span id="final-result" class="font-semibold">---</span> × 10⁶ cells/mL</p>
                    <p class="text-xs text-gray-600 mt-2">(10⁴ = Constant factor resulting from the size of the counting chamber, since the area of a square (L) is 1 mm × 1 mm = 1 mm² and the depth is 0.1 mm → volume = 0.1 mm³ = 1 × 10⁻⁴ ml and you want to calculate cells/ml)</p>
                </div>
            </div>

            <h4 class="styled-h4">Final Steps</h4>
            <ul class="list-disc list-inside space-y-2">
                <li>Dilute your total cell suspension so that in 500 μL you have 1×10⁵ cells.
                    <ul class="list-disc list-inside ml-4">
                        <li>1×10⁵ cells / (n cells/ml) = volume cell-suspension per well</li>
                        <li>dilute in DMEM to a total volume of 500 μL per well</li>
                        <li>multiply by number of wells and prepare around 10% more to allow for volume losses during pipetting</li>
                    </ul>
                </li>
                <li>Seed 500 μL of the cell suspension per 24-well (see scheme 24-well plate)</li>
                <li>Label your plate with initials, date and cell line</li>
                <li>Mix carefully making moves in shape of number 8 - no circular movements!</li>
                <li>Now the cells are incubated for 24 h at 37 °C and afterwards the experiment continues with the transfection</li>
            </ul>
        </div>

        <style>
        /* HEK Cells Interactive Terms - scoped to this module */
        .hek-cells-section {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 1.5rem 0;
            padding: 0.5rem;
            max-width: 800px;
        }

        .hek-cells-section .interactive-term {
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

        .hek-cells-section .term-title {
            font-weight: 600;
            font-size: 1.1em;
            color: inherit;
        }

        .hek-cells-section .term-explanation {
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

        .hek-cells-section .interactive-term.expanded {
            min-height: auto;
            padding: 20px;
        }

        .hek-cells-section .interactive-term.expanded .term-explanation {
            opacity: 1;
            max-height: 200px;
            margin-top: 12px;
        }

        .hek-cells-section .interactive-term::before {
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

        .hek-cells-section .interactive-term:hover::before {
            left: 100%;
        }

        .hek-cells-section .interactive-term:hover {
            transform: translateY(-4px) scale(1.02);
            border-color: var(--purple-light);
            box-shadow: 0 8px 25px rgba(212, 43, 233, 0.25),
                        0 3px 12px rgba(0, 0, 0, 0.1);
            background: linear-gradient(145deg, #ffffff 0%, rgba(246, 75, 204, 0.08) 100%);
        }

        .hek-cells-section .interactive-term:active {
            transform: translateY(-2px) scale(1.01);
            transition: transform 0.1s ease;
        }

        .hek-cells-section .interactive-term.active {
            background: linear-gradient(145deg, var(--purple-light), var(--purple-accent));
            border-color: var(--purple-accent);
            box-shadow: 0 6px 20px rgba(212, 43, 233, 0.4),
                        0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .hek-cells-section .interactive-term.active .term-title {
            color: white;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            font-weight: 700;
        }

        .hek-cells-section .interactive-term.active .term-explanation {
            color: rgba(255, 255, 255, 0.95);
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        }

        /* Module 8 specific highlight note styling */
        .highlight-note-module8 {
            background-color: rgba(212, 43, 233, 0.1); /* Purple light with alpha */
            border-left: 4px solid var(--purple-light);
            padding: 0.75rem 1rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            border-radius: 0.25rem;
        }

        .highlight-note-module8 p {
            margin-bottom: 0 !important;
        }

        /* Enlarged images */
        .enlarged-image {
            max-width: 100% !important;
            height: auto !important;
            width: 350px !important;
        }
        
        @media (max-width: 640px) {
            .enlarged-image {
                width: 100% !important;
                max-width: 300px !important;
            }
        }

        /* Responsive adjustments for HEK cells section */
        @media (max-width: 768px) {
            .hek-cells-section .interactive-term {
                padding: 12px 16px;
                font-size: 1em;
            }

            .hek-cells-section .term-title {
                font-size: 1em;
            }

            .hek-cells-section .term-explanation {
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

// Helper functions specific to this module
function calculateCellDensity8() {
    const cellsCounted = parseInt(document.getElementById('cells-counted-8').value);
    const dilutionFactor = parseFloat(document.getElementById('dilution-factor-8').value);
    const outputP = document.getElementById('cell-density-output-8');
    if (!outputP) return;

    if (isNaN(cellsCounted) || isNaN(dilutionFactor) || cellsCounted < 0 || dilutionFactor <= 0) {
        outputP.textContent = "Please enter valid, positive numbers.";
        return;
    }
    const avgCellsPerSquare = cellsCounted / 4;
    const cellsPerMilliLiter = avgCellsPerSquare * dilutionFactor * 10000;
    outputP.innerHTML = `Calculated Cell Density: <strong>${cellsPerMilliLiter.toExponential(2)} cells/mL</strong>`;
}

function checkPracticeAnswer8(correctAnswer, inputId, feedbackId, solutionId) {
    const inputEl = document.getElementById(inputId);
    const feedbackDiv = document.getElementById(feedbackId);
    const solutionDiv = document.getElementById(solutionId);
    
    if (!inputEl || !feedbackDiv || !solutionDiv) return;

    const userAnswer = parseFloat(inputEl.value);
    inputEl.classList.remove('correct-answer', 'incorrect-answer');
    
    feedbackDiv.classList.remove('hidden');
    solutionDiv.classList.remove('hidden');
    
    if (Math.abs(userAnswer - correctAnswer) < 0.1) {
        inputEl.classList.add('correct-answer');
        feedbackDiv.textContent = 'Correct!';
        feedbackDiv.className = 'practice-feedback text-sm mt-2 text-green-700';
    } else {
        inputEl.classList.add('incorrect-answer');
        feedbackDiv.innerHTML = 'Incorrect. Please review the solution below.';
        feedbackDiv.className = 'practice-feedback text-sm mt-2 text-red-700';
    }
}

function calculateAverage() {
    const square1 = parseFloat(document.getElementById('square1').value) || 0;
    const square2 = parseFloat(document.getElementById('square2').value) || 0;
    const square3 = parseFloat(document.getElementById('square3').value) || 0;
    const square4 = parseFloat(document.getElementById('square4').value) || 0;
    
    const total = square1 + square2 + square3 + square4;
    const average = total / 4;
    
    document.getElementById('average-result').textContent = average.toFixed(1);
    
    // Show calculation results
    const resultsDiv = document.getElementById('calculation-results');
    const meanSpan = document.getElementById('mean-value');
    const finalCalcSpan = document.getElementById('final-calculation');
    const finalResultSpan = document.getElementById('final-result');
    
    meanSpan.textContent = average.toFixed(1);
    
    // Assuming 1:10 dilution factor (10) for trypan blue
    const dilutionFactor = 10;
    const finalCalc = average * dilutionFactor;
    const finalResult = finalCalc / 10; // Convert to ×10⁶ format
    
    finalCalcSpan.textContent = finalCalc.toFixed(1);
    finalResultSpan.textContent = finalResult.toFixed(2);
    
    resultsDiv.classList.remove('hidden');
}

function initializeInteractiveTerms(rootElement) {
    // Handle interactive term clicks - scoped to this module only
    rootElement.querySelectorAll('.hek-cells-section .interactive-term').forEach(term => {
        term.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle expanded state
            const isExpanded = term.classList.contains('expanded');
            
            // Close all other expanded terms IN THIS MODULE ONLY
            rootElement.querySelectorAll('.hek-cells-section .interactive-term.expanded').forEach(otherTerm => {
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

    // Close expanded terms when clicking outside - scoped to this module
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.hek-cells-section .interactive-term') || !rootElement.contains(e.target)) {
            rootElement.querySelectorAll('.hek-cells-section .interactive-term.expanded').forEach(term => {
                term.classList.remove('expanded', 'active');
            });
        }
    });

    // Close expanded terms on escape key - scoped to this module
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            rootElement.querySelectorAll('.hek-cells-section .interactive-term.expanded').forEach(term => {
                term.classList.remove('expanded', 'active');
            });
        }
    });
}

export default function initModule8(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-8';
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
            <div id="quiz-container-module-8"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);
    
    // 3. Attach event listeners
    document.getElementById('cell-density-btn-8')?.addEventListener('click', calculateCellDensity8);
    document.getElementById('check-plating-btn-8')?.addEventListener('click', () => 
        checkPracticeAnswer8(200, 'cell-plating-input-8', 'cell-plating-feedback-8', 'cell-plating-solution-8')
    );
    document.getElementById('calculate-average')?.addEventListener('click', calculateAverage);

    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-8');

    // 5. Initialize interactive terms functionality
    initializeInteractiveTerms(rootEl);
}
