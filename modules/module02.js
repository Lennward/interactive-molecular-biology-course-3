const TITLE = "Module 2: Mastering Dilutions & Concentrations";

const QUIZ_DATA = [
    {
        question: "If you have a stock solution of 10M NaOH and you want to make 500 mL of 0.5M NaOH, how much of the stock solution do you need?",
        options: ["2.5 mL", "25 mL", "50 mL", "5 mL"],
        answer: "25 mL",
        type: "mcq",
        explanation: "Using C<sub>1</sub>V<sub>1</sub> = C<sub>2</sub>V<sub>2</sub>: (10M)(V<sub>1</sub>) = (0.5M)(500mL). So, V<sub>1</sub> = (0.5 × 500) / 10 = 250 / 10 = 25 mL."
    },
    {
        question: "To make 50 mL of a 200 μM solution from a 10 mM stock, how much stock solution is required?",
        options: ["10 µl", "100 µl", "1 ml", "0.1 µl"],
        answer: "1 ml",
        type: "mcq",
        explanation: "First, ensure units are consistent. 10 mM = 10,000 μM. C1 = 10,000 μM, V1 = ?, C2 = 200 μM, V2 = 50 mL. V1 = (200 μM × 50 mL) / 10,000 μM = 1 mL."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>${TITLE}</h2>

            <p>In molecular biology research, it is often necessary to prepare samples in different concentrations. Volume and concentration play a key role here. Dilution series are a common method for obtaining and analyzing accurate concentrations. This module will guide you through essential concepts and practical applications.</p>

            <h3>Units and Conversions</h3>
            <p>Understanding and converting between different units of volume and concentration is crucial for accurate lab work.</p>

            <h4 class="styled-h4">Volume (V)</h4>
            <p>Volume is the space occupied by a liquid and is usually measured in liters (L), milliliters (mL), or microliters (µL). When diluting, it is important to know the exact volume of the solution to be diluted (= what is being diluted, e.g., a plasmid) and the diluent (= what is being used to dilute, e.g., H<sub>2</sub>O).</p>

            <ul>
                <li>1 Liter (L) = 1000 milliliters (mL)</li>
                <li>1 milliliter (mL) = 1000 microliters (µL)</li>
                <li>Therefore, 1 Liter (L) = 1,000,000 microliters (µL)</li>
            </ul>

            <div class="interactive-box">
                <h4>Interactive: Unit Converter</h4>
                <p class="text-sm mb-2">Practice converting milliliters (mL) to microliters (µL). Enter a value in mL and click "Convert".</p>
                <div class="flex flex-wrap items-center gap-2">
                    <input type="number" id="ml-input" placeholder="Enter mL" class="border p-2 rounded w-32 text-sm">
                    <button id="unit-convert-btn" class="text-sm">Convert to µL</button>
                </div>
                <p id="ul-output" class="mt-2 text-sm font-medium text-purple-700"></p>
            </div>

            <h4 class="styled-h4">Concentration (c)</h4>
            <p>Concentration indicates how much of a particular substance is present in a solution and is often expressed as molarity (M = mol/L), milligrams per milliliter (mg/mL), or micrograms per microliter (µg/µL).</p>

            <ul>
                <li>1 Molar (M) = 1000 millimolar (mM)</li>
                <li>1 millimolar (mM) = 1000 micromolar (µM)</li>
                <li>1 M = 1,000,000 µM</li>
                <li>1 M = 1 mmol/mL = 1 µmol/µL</li>
                <li>1 g/L = 1 mg/mL = 1 µg/µL</li>
                <li>1 mg/mL = 1000 µg/mL</li>
                <li>1 µg/µL = 1000 ng/µL</li>
                <li>% = g/100mL, mL/100mL or g/100g depending on the substance</li>
            </ul>

            <p><strong>Interactive: Molarity Converter</strong> — Practice converting molar (M) to micromolar (µM).</p>
    `;
}
    return `
        ...
        <h3>The Dilution Formula: <span class="formula">c<sub>1</sub> × V<sub>1</sub> = c<sub>2</sub> × V<sub>2</sub></span></h3>
        <p>This is the cornerstone formula for calculating dilutions. It states that the product of the initial concentration and the initial volume is equal to the product of the final concentration and the final volume.</p>
        <ul>
            <li><strong>c<sub>1</sub></strong>: Initial concentration</li>
            <li><strong>V<sub>1</sub></strong>: Initial volume</li>
            <li><strong>c<sub>2</sub></strong>: Final concentration</li>
            <li><strong>V<sub>2</sub></strong>: Final volume</li>
        </ul>
        <p><strong>Example:</strong> To prepare 10 mL of 0.1 mg/mL solution from a 1 mg/mL stock:</p>
        <p><span class="formula">V<sub>1</sub> = (0.1 × 10) / 1 = 1 mL</span> ⇒ Add 9 mL diluent to reach 10 mL.</p>

        <p>This formula also helps in dilution series. Example:</p>
        <ul>
            <li>Step 1: 1 mL stock + 9 mL diluent = 1:10</li>
            <li>Step 2: 1 mL of 1:10 + 9 mL diluent = 1:100</li>
            <li>Step 3: 1 mL of 1:100 + 9 mL diluent = 1:1000</li>
        </ul>

        <div class="interactive-box">
            <h4>Interactive: Dilution Calculator</h4>
            <p class="text-sm mb-3">Enter 3 values (c1, V1, c2, V2). The calculator will determine the missing one.</p>
            <!-- calculator fields preserved from original file -->
            <div class="calculator grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 items-end">
                <div><label for="c1_calc">C<sub>1</sub>:</label><input type="number" id="c1_calc" class="w-full mt-1"></div>
                <div><label for="v1_calc">V<sub>1</sub>:</label><input type="number" id="v1_calc" class="w-full mt-1"></div>
                <div><label for="c2_calc">C<sub>2</sub>:</label><input type="number" id="c2_calc" class="w-full mt-1"></div>
                <div><label for="v2_calc">V<sub>2</sub>:</label><input type="number" id="v2_calc" class="w-full mt-1"></div>
                <div class="sm:col-span-1">
                    <label for="calc_units_conc">Concentration Units:</label>
                    <select id="calc_units_conc" class="w-full mt-1">
                        <option value="M">M (Molar)</option>
                        <option value="mM">mM (millimolar)</option>
                        <option value="µM">µM (micromolar)</option>
                        <option value="mg/mL">mg/mL</option>
                        <option value="µg/mL">µg/mL</option>
                        <option value="%">% (percent)</option>
                    </select>
                </div>
                <div class="sm:col-span-1">
                    <label for="calc_units_vol">Volume Units:</label>
                    <select id="calc_units_vol" class="w-full mt-1">
                        <option value="mL">mL</option>
                        <option value="µL">µL</option>
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
        <p>Test your understanding with these scenarios. Enter your answers and click "Check Answer".</p>
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
                    allOptions.forEach(btn => {
                        if (btn.textContent === q.answer) btn.classList.add('correct');
                    });
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

export default function initModule2(rootEl, sidebarEl) {
    const link = document.createElement('a');
    link.href = '#module-2';
    link.textContent = TITLE;
    link.className = 'sidebar-link block px-3 py-2 rounded-md';
    sidebarEl.querySelector('#sidebar-links').appendChild(link);

    rootEl.innerHTML = getContent();

    const quizHtml = `
        <div class="mt-8 pt-6 border-t-2 border-purple-300">
            <h3 class="text-xl font-semibold text-purple-700 mb-4">Module Quiz!</h3>
            <p class="text-sm text-gray-600 mb-4">Test your knowledge from this module.</p>
            <div id="quiz-container-module-2"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);

    document.getElementById('unit-convert-btn')?.addEventListener('click', () => {
        const ml = parseFloat(document.getElementById('ml-input').value);
        document.getElementById('ul-output').innerHTML = isNaN(ml) ? "Enter a valid number" : `${ml} mL = <strong>${ml * 1000} µL</strong>`;
    });

    document.getElementById('dilution-calc-btn')?.addEventListener('click', calculateDilution);

    renderQuiz(QUIZ_DATA, 'quiz-container-module-2');
}
