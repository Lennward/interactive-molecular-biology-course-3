const TITLE = "Module 2: Mastering Dilutions & Concentratiosns";
const QUIZ_DATA = [
    {
        question: "If you have a stock solution of 10M NaOH and you want to make 500 mL of 0.5M NaOH, how much of the stock solution do you need?",
        options: ["2.5 mL", "25 mL", "50 mL", "5 mL"],
        answer: "25 mL",
        type: "mcq",
        explanation: "Using c<sub>1</sub>V<sub>1</sub> = c<sub>2</sub>V<sub>2</sub>: (10M)(V<sub>1</sub>) = (0.5M)(500mL). So, V<sub>1</sub> = (0.5 &times; 500) / 10 = 250 / 10 = 25 mL."
    },
    {
        question: "To make 50 mL of a 200 &mu;M solution from a 10 mM stock, how much stock solution is required?",
        options: ["10 &mu;L", "100 &mu;L", "1 mL", "0.1 &mu;L"],
        answer: "1 mL",
        type: "mcq",
        explanation: "First, ensure units are consistent. 10 mM = 10,000 &mu;M. c<sub>1</sub> = 10,000 &mu;M, V<sub>1</sub> = ?, c<sub>2</sub> = 200 &mu;M, V<sub>2</sub> = 50 mL. V<sub>1</sub> = (200 &mu;M &times; 50 mL) / 10,000 &mu;M = 10,000 / 10,000 mL = 1 mL."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 2: Mastering Dilutions & Concentrations</h2>
            <p>In molecular biology research, it is often necessary to prepare samples in different concentrations. Volume and concentration play a key role here. Dilution series are a common method for obtaining and analyzing accurate concentrations. This module will guide you through essential concepts and practical applications.</p>

            <h3>Units and Conversions</h3>
            <p>Understanding and converting between different units of volume and concentration is crucial for accurate lab work.</p>
            
            <h4>Volume (V):</h4>
            <p>Volume is the space occupied by a liquid and is usually measured in liters (L), milliliters (mL), or microliters (µL). When diluting, it is important to know the exact volume of the solution to be diluted (= what is being diluted, e.g., a plasmid) and the diluent (= what is being used to dilute, e.g., H₂O).</p>
            
            <ul>
                <li><strong>Volume:</strong> Liters (L), milliliters (mL), microliters (&mu;L)
                    <ul class="list-inside list-disc ml-4 bg-slate-100 p-3 rounded-md shadow-sm">
                        <li>1 Liter (L) = 1000 milliliters (mL)</li>
                        <li>1 milliliter (mL) = 1000 microliters (&mu;L)</li>
                        <li>Therefore, 1 Liter (L) = 1,000,000 microliters (&mu;L)</li>
                    </ul>
                </li>
            </ul>
            
            <div class="interactive-box">
                <h4>Interactive: Unit Converter</h4>
                <p class="text-sm mb-2">Practice converting milliliters (mL) to microliters (&mu;L). Enter a value in mL and click "Convert".</p>
                <div class="flex flex-wrap items-center gap-2">
                    <label for="ml-input" class="sr-only">Milliliters:</label>
                    <input type="number" id="ml-input" placeholder="Enter mL" class="border p-2 rounded w-32 text-sm">
                    <button id="unit-convert-btn" class="text-sm">Convert to &mu;L</button>
                </div>
                <p id="ul-output" class="mt-2 text-sm font-medium text-purple-700"></p>
            </div>

            <h4>Concentration (c):</h4>
            <p>Concentration indicates how much of a particular substance is present in a solution and is often expressed as molarity (M = mol/L), milligrams per milliliter (mg/mL), or micrograms per microliter (µg/µL).</p>
            
            <ul class="bg-slate-100 p-3 rounded-md shadow-sm">
                <li><strong>Concentration:</strong> Molarity (M = moles/Liter), mg/mL, &mu;g/&mu;L, percentages (%)</li>
                <li class="mt-2">1 Molar (M = mol/l) = 1000 millimolar (mM = mmol/l)</li>
                <li>1 millimolar (mM = mmol/l) = 1000 micromolar (&mu;M = µmol/l)</li>
                <li>Therefore, 1 Molar (M) = 1,000,000 micromolar (&mu;M)</li>
                <li class="mt-2"><strong>Also important to know is that:</strong></li>
                <li>1 Molar (M = 1 mol/l) = 1 mmol/ml = 1 µmol/µl</li>
                <li>1 g/l = 1 mg/ml = 1µg/µl</li>
                <li>1 mg/ml = 1000 µg/ml</li>
                <li>1 µg/µl = 1000 ng/µl</li>
                <li>% = g/100 ml or ml/100 ml or g/100 g (depends on used substances)</li>
            </ul>

            <div class="interactive-box">
                <h4>Interactive: Unit Converter</h4>
                <p class="text-sm mb-2">Practice converting molar (M) to micromolar (&mu;M). Enter a value in M and click "Convert".</p>
                <div class="flex flex-wrap items-center gap-2">
                    <label for="m-input" class="sr-only">Molar:</label>
                    <input type="number" id="m-input" placeholder="Enter M" class="border p-2 rounded w-32 text-sm">
                    <button id="molar-convert-btn" class="text-sm">Convert to &mu;M</button>
                </div>
                <p id="um-output" class="mt-2 text-sm font-medium text-purple-700"></p>
            </div>

            <h3>The Dilution Formula: <span class="formula">c<sub>1</sub> &times; V<sub>1</sub> = c<sub>2</sub> &times; V<sub>2</sub></span></h3>
            <p>This is the cornerstone formula for calculating dilutions. It states that the product of the initial concentration and the initial volume is equal to the product of the final concentration and the final volume.</p>
            <ul class="bg-slate-100 p-3 rounded-md shadow-sm">
                <li><strong>c<sub>1</sub></strong> = Initial concentration (concentration of your stock solution)</li>
                <li><strong>V<sub>1</sub></strong> = Initial volume (the volume of stock solution you need to take)</li>
                <li><strong>c<sub>2</sub></strong> = Final concentration (the desired concentration of your diluted solution)</li>
                <li><strong>V<sub>2</sub></strong> = Final volume (the total volume of your desired diluted solution)</li>
            </ul>
            <p class="mt-2"><strong>Example:</strong> You need to prepare 10 mL of a 0.1 mg/mL solution from a 1 mg/mL stock solution.</p>
            <ul class="text-sm">
                <li>c<sub>1</sub> = 1 mg/mL (stock concentration)</li>
                <li>c<sub>2</sub> = 0.1 mg/mL (desired final concentration)</li>
                <li>V<sub>2</sub> = 10 mL (desired final volume)</li>
            </ul>
            <p>We need to find V<sub>1</sub> (the volume of stock to use).</p>
            <p>Rearranging the formula: <span class="formula">V<sub>1</sub> = (c<sub>2</sub> &times; V<sub>2</sub>) / c<sub>1</sub></span></p>
            <p><span class="formula">V<sub>1</sub> = (0.1 mg/mL &times; 10 mL) / 1 mg/mL = 1 mL</span></p>
            <p><strong>Conclusion:</strong> You would take 1 mL of the 1 mg/mL stock solution and add 9 mL of diluent (e.g., water or buffer) to make a total final volume of 10 mL with a concentration of 0.1 mg/mL.</p>
            
            <h4>This formula can also be used to calculate dilution series:</h4>
            <p>A dilution series is a method for gradually diluting a starting solution. In this process, a solution is diluted by a constant factor in several steps.</p>
            
            <h4>Preparation of a dilution series:</h4>
            <p>To prepare a dilution series, you can proceed step by step. For example, you can prepare a 1:10 dilution of the initial solution, then a 1:10 dilution of this dilution, and so on, to obtain a dilution series.</p>
            <ul class="bg-slate-100 p-3 rounded-md shadow-sm">
                <li>Step 1: 1 ml of the stock solution + 9 ml of diluent = 1:10 dilution</li>
                <li>Step 2: 1 ml of the 1:10 dilution + 9 ml of diluent = 1:100 dilution</li>
                <li>Step 3: 1 ml of the 1:100 dilution + 9 ml of diluent = 1:1000 dilution</li>
            </ul>
            
            <div class="interactive-box">
                <h4>Interactive: Dilution Calculator</h4>
                <p class="text-sm mb-3">Enter any three values (c1, V1, c2, V2) and the units for concentration and volume. The calculator will determine the missing value.</p>
                <div class="calculator grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 items-end">
                    <div>
                        <label for="c1_calc" class="block text-sm font-medium text-gray-700">c<sub>1</sub> (Stock Conc.):</label>
                        <input type="number" id="c1_calc" placeholder="e.g., 10" class="w-full mt-1"> 
                    </div>
                    <div>
                        <label for="v1_calc" class="block text-sm font-medium text-gray-700">V<sub>1</sub> (Stock Vol.):</label>
                        <input type="number" id="v1_calc" placeholder="e.g., ?" class="w-full mt-1"> 
                    </div>
                    <div>
                        <label for="c2_calc" class="block text-sm font-medium text-gray-700">c<sub>2</sub> (Final Conc.):</label>
                        <input type="number" id="c2_calc" placeholder="e.g., 1" class="w-full mt-1"> 
                    </div>
                    <div>
                        <label for="v2_calc" class="block text-sm font-medium text-gray-700">V<sub>2</sub> (Final Vol.):</label>
                        <input type="number" id="v2_calc" placeholder="e.g., 100" class="w-full mt-1"> 
                    </div>
                    <div class="sm:col-span-1">
                        <label for="calc_units_conc" class="block text-sm font-medium text-gray-700">Concentration Units:</label>
                        <select id="calc_units_conc" class="w-full mt-1">
                            <option value="M">M (Molar)</option>
                            <option value="mM">mM (millimolar)</option>
                            <option value="&mu;M">&mu;M (micromolar)</option>
                            <option value="mg/mL">mg/mL</option>
                            <option value="&mu;g/mL">&mu;g/mL</option>
                            <option value="ng/&mu;L">ng/&mu;L</option>
                            <option value="%">% (percent)</option>
                            <option value="X">X (fold, e.g. 10X stock)</option>
                        </select>
                    </div>
                    <div class="sm:col-span-1">
                        <label for="calc_units_vol" class="block text-sm font-medium text-gray-700">Volume Units:</label>
                        <select id="calc_units_vol" class="w-full mt-1">
                            <option value="mL">mL (milliliters)</option>
                            <option value="&mu;L">&mu;L (microliters)</option>
                            <option value="L">L (liters)</option>
                        </select>
                    </div>
                    <div class="sm:col-span-2 mt-2">
                        <button id="dilution-calc-btn" class="w-full py-2">Calculate Missing Value</button>
                    </div>
                </div>
                <div id="dilution-result-container" class="mt-3 p-3 bg-white rounded-md shadow hidden">
                    <p id="dilution-result" class="font-semibold text-purple-700"></p>
                    <p id="dilution-steps" class="mt-1 text-sm text-gray-600"></p>
                </div>
            </div>

            <h3>Practice Problems</h3>
            <p>Test your understanding with these common lab scenarios. Enter your answers and click "Check Answer".</p>
            <div id="practice-problems-container" class="space-y-6">
                <div class="practice-problem-box">
                    <p class="font-semibold">1. BSA Dilution:</p>
                    <p>You need to prepare 1 mL of 5% BSA (Bovine Serum Albumin) solution in PBS from a 100% (w/v) BSA stock. How much stock BSA and PBS do you need?</p>
                    <div class="mt-2 space-y-2 sm:space-y-0 sm:flex sm:items-end sm:gap-3">
                        <div>
                            <label for="bsa-stock-input" class="block text-xs font-medium text-gray-600">Stock BSA (&mu;L):</label>
                            <input type="number" id="bsa-stock-input" placeholder="e.g., 50" class="text-sm p-1 w-28">
                        </div>
                        <div>
                            <label for="pbs-input" class="block text-xs font-medium text-gray-600">PBS (&mu;L):</label>
                            <input type="number" id="pbs-input" placeholder="e.g., 950" class="text-sm p-1 w-28">
                        </div>
                        <button id="check-bsa-btn" class="text-sm px-3 py-1.5">Check Answer</button>
                    </div>
                    <div id="bsa-dilution-feedback" class="practice-feedback text-sm mt-2 hidden"></div>
                    <div id="bsa-dilution-solution" class="solution-details hidden">
                        <strong>Detailed Solution:</strong><br>
                        Using c<sub>1</sub>V<sub>1</sub> = c<sub>2</sub>V<sub>2</sub>:<br>
                        c<sub>1</sub> (Stock Conc.) = 100%<br>
                        c<sub>2</sub> (Final Conc.) = 5%<br>
                        V<sub>2</sub> (Final Vol.) = 1 mL<br>
                        V<sub>1</sub> (Stock BSA Vol.) = (c<sub>2</sub> &times; V<sub>2</sub>) / c<sub>1</sub> = (5% &times; 1 mL) / 100% = 0.05 mL.<br>
                        Convert to &mu;L: 0.05 mL &times; 1000 &mu;L/mL = <strong>50 &mu;L of 100% BSA stock</strong>.<br>
                        Volume of PBS (Diluent) = V<sub>2</sub> - V<sub>1</sub> = 1 mL - 0.05 mL = 0.95 mL.<br>
                        Convert to &mu;L: 0.95 mL &times; 1000 &mu;L/mL = <strong>950 &mu;L of PBS</strong>.
                    </div>
                </div>

                <div class="practice-problem-box">
                    <p class="font-semibold">2. Triton X-100 Dilution:</p>
                    <p>You need to prepare 10 mL of 0.1% Triton X-100 solution from a 10% (v/v) stock solution. How much stock Triton X-100 and diluent do you need?</p>
                    <div class="mt-2 space-y-2 sm:space-y-0 sm:flex sm:items-end sm:gap-3">
                        <div>
                            <label for="triton-stock-input" class="block text-xs font-medium text-gray-600">Stock Triton X-100 (&mu;L):</label>
                            <input type="number" id="triton-stock-input" placeholder="e.g., 100" class="text-sm p-1 w-36">
                        </div>
                        <div>
                            <label for="triton-diluent-input" class="block text-xs font-medium text-gray-600">Diluent (mL):</label>
                            <input type="number" step="0.1" id="triton-diluent-input" placeholder="e.g., 9.9" class="text-sm p-1 w-28">
                        </div>
                        <button id="check-triton-btn" class="text-sm px-3 py-1.5">Check Answer</button>
                    </div>
                    <div id="triton-dilution-feedback" class="practice-feedback text-sm mt-2 hidden"></div>
                    <div id="triton-dilution-solution" class="solution-details hidden">
                        <strong>Detailed Solution:</strong><br>
                        Using c<sub>1</sub>V<sub>1</sub> = c<sub>2</sub>V<sub>2</sub>:<br>
                        c<sub>1</sub> (Stock Conc.) = 10%<br>
                        c<sub>2</sub> (Final Conc.) = 0.1%<br>
                        V<sub>2</sub> (Final Vol.) = 10 mL<br>
                        V<sub>1</sub> (Stock Triton Vol.) = (c<sub>2</sub> &times; V<sub>2</sub>) / c<sub>1</sub> = (0.1% &times; 10 mL) / 10% = 0.1 mL.<br>
                        Convert to &mu;L: 0.1 mL &times; 1000 &mu;L/mL = <strong>100 &mu;L of 10% Triton X-100 stock</strong>.<br>
                        Volume of Diluent = V<sub>2</sub> - V<sub>1</sub> = 10 mL - 0.1 mL = <strong>9.9 mL</strong>.
                    </div>
                </div>

                <div class="practice-problem-box">
                    <p class="font-semibold">3. Secondary Antibody Dilution (for 6 wells):</p>
                    <p>You need to prepare a secondary antibody solution for 6 wells of a plate. Each well requires 200 &mu;L of antibody solution at a 1:1000 dilution from a concentrated stock. How much antibody stock and buffer do you need for exactly 6 wells?</p>
                    <div class="mt-2 space-y-2 sm:space-y-0 sm:flex sm:items-end sm:gap-3">
                        <div>
                            <label for="antibody-stock-input" class="block text-xs font-medium text-gray-600">Antibody Stock (&mu;L):</label>
                            <input type="number" step="0.1" id="antibody-stock-input" placeholder="e.g., 1.2" class="text-sm p-1 w-32">
                        </div>
                        <div>
                            <label for="antibody-buffer-input" class="block text-xs font-medium text-gray-600">Buffer (&mu;L):</label>
                            <input type="number" step="0.1" id="antibody-buffer-input" placeholder="e.g., 1198.8" class="text-sm p-1 w-32">
                        </div>
                        <button id="check-antibody-btn" class="text-sm px-3 py-1.5">Check Answer</button>
                    </div>
                    <div id="antibody-dilution-feedback" class="practice-feedback text-sm mt-2 hidden"></div>
                    <div id="antibody-dilution-solution" class="solution-details hidden">
                        <strong>Detailed Solution (for 6 wells exactly):</strong><br>
                        Total volume needed (V<sub>final</sub>) = Number of wells &times; Volume per well = 6 wells &times; 200 &mu;L/well = 1200 &mu;L.<br>
                        Dilution factor = 1000.<br>
                        Volume of antibody stock (V<sub>stock</sub>) = V<sub>final</sub> / Dilution factor = 1200 &mu;L / 1000 = <strong>1.2 &mu;L</strong>.<br>
                        Volume of buffer = V<sub>final</sub> - V<sub>stock</sub> = 1200 &mu;L - 1.2 &mu;L = <strong>1198.8 &mu;L</strong>.<br>
                        <em>(Note: In practice, you'd prepare a bit extra, e.g., for 6.5 or 7 wells, to account for pipetting inaccuracies.)</em>
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

// Helper functions specific to this module
function convertUnits() {
    const mlInput = document.getElementById('ml-input');
    const outputP = document.getElementById('ul-output');
    if (!mlInput || !outputP) return;
    const mlVal = parseFloat(mlInput.value);
    if (!isNaN(mlVal)) {
        outputP.innerHTML = `${mlVal} mL = <span class="font-bold">${mlVal * 1000} &mu;L</span>`;
    } else {
        outputP.textContent = 'Please enter a valid number for mL.';
    }
}

function convertMolar() {
    const mInput = document.getElementById('m-input');
    const outputP = document.getElementById('um-output');
    if (!mInput || !outputP) return;
    const mVal = parseFloat(mInput.value);
    if (!isNaN(mVal)) {
        outputP.innerHTML = `${mVal} M = <span class="font-bold">${mVal * 1000000} &mu;M</span>`;
    } else {
        outputP.textContent = 'Please enter a valid number for M.';
    }
}

function calculateDilution() {
    const c1El = document.getElementById('c1_calc'), v1El = document.getElementById('v1_calc');
    const c2El = document.getElementById('c2_calc'), v2El = document.getElementById('v2_calc');
    const resultP = document.getElementById('dilution-result'), stepsP = document.getElementById('dilution-steps');
    const resultContainer = document.getElementById('dilution-result-container');
    const concUnits = document.getElementById('calc_units_conc').value;
    const volUnits = document.getElementById('calc_units_vol').value;

    if (!c1El || !v1El || !c2El || !v2El || !resultP || !stepsP || !resultContainer) return;

    const c1 = parseFloat(c1El.value), v1 = parseFloat(v1El.value);
    const c2 = parseFloat(c2El.value), v2 = parseFloat(v2El.value);
    
    let missingCount = [c1, v1, c2, v2].filter(v => isNaN(v)).length;

    resultContainer.classList.remove('hidden');
    if (missingCount !== 1) {
        resultP.textContent = "Error: Please provide exactly 3 values.";
        stepsP.innerHTML = "";
        return;
    }

    let calculatedValueStr = "", calculationStepsStr = "";

    if (isNaN(c1)) {
        if (v1 === 0) { resultP.textContent = "Error: V1 cannot be zero."; return; }
        const val = (c2 * v2) / v1;
        calculatedValueStr = `Calculated Stock Concentration (c<sub>1</sub>) = <strong>${val.toFixed(3)} ${concUnits}</strong>`;
    } else if (isNaN(v1)) {
        if (c1 === 0) { resultP.textContent = "Error: c1 cannot be zero."; return; }
        const val = (c2 * v2) / c1;
        calculatedValueStr = `Calculated Stock Volume (V<sub>1</sub>) = <strong>${val.toFixed(3)} ${volUnits}</strong>`;
        calculationStepsStr = `You need ${val.toFixed(3)} ${volUnits} of stock and ${(v2 - val).toFixed(3)} ${volUnits} of diluent.`;
    } else if (isNaN(c2)) {
        if (v2 === 0) { resultP.textContent = "Error: V2 cannot be zero."; return; }
        const val = (c1 * v1) / v2;
        calculatedValueStr = `Calculated Final Concentration (c<sub>2</sub>) = <strong>${val.toFixed(3)} ${concUnits}</strong>`;
    } else if (isNaN(v2)) {
        if (c2 === 0) { resultP.textContent = "Error: c2 cannot be zero."; return; }
        const val = (c1 * v1) / c2;
        calculatedValueStr = `Calculated Final Volume (V<sub>2</sub>) = <strong>${val.toFixed(3)} ${volUnits}</strong>`;
    }
    
    resultP.innerHTML = calculatedValueStr;
    stepsP.innerHTML = calculationStepsStr;
}

function checkPracticeAnswer(problemId, correctAnswers, inputIds) {
    const feedbackDiv = document.getElementById(`${problemId}-feedback`);
    const solutionDiv = document.getElementById(`${problemId}-solution`);
    const inputElements = inputIds.map(id => document.getElementById(id));
    if (!feedbackDiv || !solutionDiv || inputElements.some(el => !el)) return;

    let allCorrect = true;
    inputElements.forEach((inputEl, index) => {
        const userAnswer = parseFloat(inputEl.value);
        inputEl.classList.remove('correct-answer', 'incorrect-answer');
        if (Math.abs(userAnswer - correctAnswers[index]) > 0.011) {
            allCorrect = false;
            inputEl.classList.add('incorrect-answer');
        } else {
            inputEl.classList.add('correct-answer');
        }
    });

    feedbackDiv.classList.remove('hidden');
    solutionDiv.classList.remove('hidden');
    if (allCorrect) {
        feedbackDiv.textContent = 'Correct!';
    } else {
        feedbackDiv.innerHTML = 'One or more answers are incorrect. Please review the solution below.';
    }
}

export default function initModule2(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-2';
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
            <div id="quiz-container-module-2"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);
    
    // 3. Attach event listeners
    document.getElementById('unit-convert-btn')?.addEventListener('click', convertUnits);
    document.getElementById('molar-convert-btn')?.addEventListener('click', convertMolar);
    document.getElementById('dilution-calc-btn')?.addEventListener('click', calculateDilution);
    document.getElementById('check-bsa-btn')?.addEventListener('click', () => checkPracticeAnswer('bsa-dilution', [50, 950], ['bsa-stock-input', 'pbs-input']));
    document.getElementById('check-triton-btn')?.addEventListener('click', () => checkPracticeAnswer('triton-dilution', [100, 9.9], ['triton-stock-input', 'triton-diluent-input']));
    document.getElementById('check-antibody-btn')?.addEventListener('click', () => checkPracticeAnswer('antibody-dilution', [1.2, 1198.8], ['antibody-stock-input', 'antibody-buffer-input']));

    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-2');
}
