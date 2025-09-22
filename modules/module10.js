const TITLE = "Module 10: Fluorescence Microscopy of GFP as proof of fluorophore expression";
const QUIZ_DATA = [
    {
        question: "Why is GFP used in this experiment?",
        options: ["To provide nutrients to the cells", "As a reporter molecule to visualize gene/protein expression", "To help cells attach to the plate", "To increase transfection efficiency"],
        answer: "As a reporter molecule to visualize gene/protein expression",
        type: "mcq",
        explanation: "GFP serves as a reporter molecule to visualize the expression of a specific gene or protein, indicating whether the plasmid has been successfully introduced into the cells."
    },
    {
        question: "What would happen if you used the wrong filter on the fluorescence microscope?",
        options: ["The cells would die", "No signal or only a very weak signal would be visible", "The GFP would change color", "The microscope would break"],
        answer: "No signal or only a very weak signal would be visible",
        type: "mcq",
        explanation: "If the wrong filter is used (one that doesn't match GFP's excitation/emission wavelengths), GFP won't be stimulated properly or the emitted light won't be detected."
    },
    {
        question: "Where in the cell do you expect to see the H2B-GFP signal?",
        options: ["Throughout the entire cell", "Only in the cytoplasm", "Only in the cell nucleus", "Only at the cell membrane"],
        answer: "Only in the cell nucleus",
        type: "mcq",
        explanation: "Since H2B-GFP is coupled to histone protein H2B, which is part of the chromatin structure, the GFP signal is only visible in the cell nucleus, often appearing patchy as it reflects DNA organization."
    },
    {
        question: "True or False: All cells in a well transfected with GFP will express GFP.",
        options: ["True", "False"],
        answer: "False",
        type: "tf",
        explanation: "Not all cells take up the plasmid during transfection or express GFP efficiently. You typically see a mixture of GFP-positive and non-fluorescent cells, depending on transfection efficiency, plasmid quality, and culture conditions."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 10: Fluorescence Microscopy of GFP as proof of fluorophore expression</h2>
            
            <p>Congratulations, you've theoretically performed a transfection! What's next? After sufficient incubation time (usually 24-48 hours for transient expression), the real fun begins: analyzing your results! For this, we will:</p>
            
            <ul class="list-disc list-inside ml-4 mb-4">
                <li>Observe cells under a fluorescence microscope to detect GFP expression (green fluorescence).</li>
                <li>Calculate transfection efficiency (percentage of GFP-positive cells).</li>
            </ul>

            <h3>Theoretical Background</h3>
            
            <h4 class="styled-h4">What is fluorescence?</h4>
            <p>Fluorescence describes the ability of certain molecules to absorb short-wavelength light (e.g., UV or blue light) and emit longer-wavelength light (e.g., visible light). This phenomenon is based on the excitation of electrons: when a fluorophore is excited by absorbed light, the electrons of the fluorophore briefly jump to a higher energy level. When they fall back to their ground state, they release this energy in the form of visible light (longer wavelength).</p>
            
            <p>Many dyes—known as fluorophores—use this principle. In molecular biology, they are used to make proteins, cell structures, or DNA visible in a targeted manner.</p>
            
            <img src="images/image101.png" alt="The image shows the basic principle of fluorescence" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-lg w-auto" onerror="this.onerror=null; this.src='https://placehold.co/500x400/e2e8f0/4a5568?text=Image+101:+Fluorescence+Principle'; this.alt='Placeholder: Fluorescence Principle';">
            <p class="text-sm text-center text-gray-600 -mt-2 mb-4">The image shows the basic principle of fluorescence. Image from <a href="https://www.photonics.com/images/Web/Articles/2023/6/20/Feat_FluorMic_Fig_3.jpg" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">here</a>.</p>

            <h4 class="styled-h4">What is GFP?</h4>
            <p><strong>GFP</strong> (green fluorescent protein) is a fluorescent protein from the jellyfish <em>Aequorea victoria</em>. It is one of the best-known reporter genes in cell and molecular biology. GFP fluoresces green when excited by blue light (approx. 488 nm).</p>
            
            <p>Genetic engineering methods can be used to link GFP to another protein. When this protein is then expressed in cells, it is possible to see directly under the microscope whether and where it has been produced.</p>
            
            <div class="highlight-note">
                <p><strong>→ GFP therefore serves as a visible indicator of successful transfection and gene expression.</strong></p>
            </div>

            <h4 class="styled-h4">How does a fluorescence microscope work?</h4>
            <p>A fluorescence microscope is specially designed to make fluorophores visible. It uses targeted light sources, such as LEDs or lasers, to irradiate the sample with light of a precisely defined <strong>excitation wavelength</strong>—i.e., exactly the wavelength that the fluorophore used can absorb.</p>
            
            <p>The optical system consists of mirrors and filters that direct the light in a specific way:</p>
            <ul class="list-disc list-inside ml-4">
                <li>Only the <strong>excitation light</strong> hits the sample.</li>
                <li>Only the <strong>emitted fluorescence light</strong>—generated by the fluorophore—reaches the camera or eyepiece.</li>
                <li>An <strong>emission filter</strong> blocks the original excitation light and allows only the fluorescence signal to pass through.</li>
            </ul>
            
            <img src="images/image102.png" alt="How a fluorescence microscope works" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-md w-auto" onerror="this.onerror=null; this.src='https://placehold.co/400x400/e2e8f0/4a5568?text=Image+102:+Fluorescence+Microscope'; this.alt='Placeholder: Fluorescence Microscope';">
            <p class="text-sm text-center text-gray-600 -mt-2 mb-4">The image shows how a fluorescence microscope works. Image from <a href="https://microbeonline.com/wp-content/uploads/2020/05/Fluorescence-Microscope-working-mechanism.png" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">here</a>.</p>

            
            <p>This creates a bright, high-contrast image of fluorescent structures that stands out clearly against the dark background.</p>
            
            <p>Fluorescence microscopy can be used to visualize individual proteins or cell structures that would not be visible with conventional microscopy.</p>
            
            <ul class="list-disc list-inside ml-4 mb-4">
                <li>It enables both the spatial localization of molecules and the observation of cellular processes and molecular interactions.</li>
                <li>In addition to qualitative representation, it also allows quantitative analyses, e.g., of expression strength—especially when using reporter proteins such as GFP or fluorescence-labeled antibodies.</li>
            </ul>

            <h3>Practical Procedure</h3>
            
            <h4 class="styled-h4">Materials</h4>
            <ul class="bg-slate-100 p-3 rounded-md shadow-sm">
                <li>Already transfected HEK293 cells (16–24 hours after transfection)</li>
                <li>PBS (phosphate-buffered saline)</li>
                <li>4% paraformaldehyde (PFA) for fixation</li>
                <li>Hoechst33258</li>
                <li>Fluorescence microscope with GFP filter set (Ex: 488 nm, Em: 510 nm)</li>
                <li>Digital camera with imaging software</li>
            </ul>
            
            <h4 class="styled-h4">Steps</h4>
            
            <div class="space-y-6">
                <div>
                    <h5 class="font-semibold text-purple-700 mb-2">1. Fixation of cells</h5>
                    <div class="highlight-note">
                        <p><strong>The fixation keeps the proteins in place!</strong></p>
                    </div>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li>Carefully take the culture plates out of the incubator.</li>
                        <li>Check cells for adherence, density and morphology under the microscope.</li>
                        <li>Carefully remove the culture medium with a pipette and wash the cells with 0.5 ml 1x PBS. 
                            <div class="p-2 mt-1 bg-amber-50 border-l-4 border-amber-400 text-amber-700 text-xs rounded-r-md">
                                <p><strong>Caution:</strong> Tilt the plate relatively far and do not touch the bottom of the well so that the cells are not disturbed. Instead, pipette only at the side of the well by holding the pipette at an angle. Also, pipette very slowly! This applies in general to any major pipetting step in which the entire liquid is removed or added (medium change, washing, etc.) in the 24-well plates, regardless of whether pipetting up or down! Always pipette on the same side/to the same spot!</p>
                            </div>
                        </li>
                        <li><strong>Next steps under the fume hood (not the cell culture hood!)!</strong></li>
                        <li>Remove the 1x PBS and add 500 µl 4% PFA (= fixation buffer; Caution: carcinogenic), incubate for 15 minutes at room temperature in the dark (= fixation).</li>
                        <li>Then remove the PFA and wash the cells twice with PBS (500 µl PBS per wash step) and leave the PBS in the wells after the last wash step.</li>
                        <li>Now you no longer need to work under the fume hood.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 class="font-semibold text-purple-700 mb-2">2. Hoechst staining of GFP-expressing cells</h5>
                    <div class="highlight-note">
                        <p><strong>Important:</strong> Only cells that will not be used for ICC the next day can now be stained with Hoechst33258. All cells (wells) that contain the FLAG-tagged protein will be used for ICC and are stained with Hoechst33258 on the next day.</p>
                    </div>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li>Wash 2 x 5 min with 200 μL 1 x PBS</li>
                        <li>Leave 200 μL PBS in each well after the second washing step</li>
                        <li>Remove the PBS and add 200 µl Hoechst33258 (Caution: stains DNA, carcinogenic) (usual stock concentration = 10 mg/ml; use it 1:5000 = 2 µg/ml) in 1x PBS <strong>per well</strong>, first prepare a 1:5 dilution of Hoechst33258 in PBS (2 µl Hoechst33258 in 8 µl PBS) and then dilute this solution 1:1000 in PBS (10 µl of this solution in 10 ml PBS). Vortex the PBS/Hoechst mixture thoroughly to ensure even distribution of Hoechst in the solution. Incubate for 5 min at RT in the dark.</li>
                        <li>Wash 2 x 5 min with 200 μL 1 x PBS.</li>
                        <li>Leave 200 μL PBS in each well after the second washing step.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 class="font-semibold text-purple-700 mb-2">3. Microscopy</h5>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li>Turn on the fluorescence microscope</li>
                        <li>Set up the microscope: select the appropriate objective (20x or 40x) and adjust the light source correctly</li>
                        <li>First observe the cells in phase contrast (total cell count visible)</li>
                        <li>Switch to the fluorescence channel and activate the appropriate filter set for GFP with an excitation at 488 nm (= blue/UV) and an emission at 510 nm (= green). Now cells transfected with GFP should be visible.</li>
                        <li>Change to the appropriate filter set for Hoechst33258 with excitation at 352 nm (UV light) and emission at 454 nm (blue).</li>
                        <li>Adjust the exposure time and focus so that the image is sharp and clearly recognizable.</li>
                        <li>Take at least 5 different images per well. Use a constant exposure time and resolution.</li>
                        <li>Note any special observations, such as unusual fluorescence distribution or cell morphologies.</li>
                        <li><strong>After microscopy, place the 24-well plate with the fixed cells in PBS in the fridge (overnight).</strong></li>
                    </ul>
                </div>
                
                <div>
                    <h5 class="font-semibold text-purple-700 mb-2">4. Documentation & Image Analysis</h5>
                    <ul class="list-disc list-inside ml-4 space-y-2">
                        <li>Note all relevant parameters (filter, exposure time, lenses used)</li>
                        <li>Merge the images in the software of the microscope (if possible) and drag the raw images and merged images onto a USB drive.</li>
                        <li>Now we will work with the software ImageJ (Fiji). You can download it for free on the internet.</li>
                        <li>Using the ImageJ (Fiji) software, we can now easily determine the transfection efficiency. The "Multi-point" tool can be used for this purpose. This makes it easy to count the cells. Count the successfully transfected (=GFP-expressing) cells as well as the Hoechst-stained cells. The Hoechst staining indicates the total number of cells. By simple division, we now obtain the transfection efficiency. This can be stated as a percentage.</li>
                        <li>Compare the fluorescence intensity of the different wells or conditions.</li>
                        <li>Assess the efficiency of the transfection (e.g., proportion of fluorescent cells per image). Is it high/low?</li>
                    </ul>
                </div>
            </div>

            <div class="interactive-box">
                <h4>Interactive: Transfection Efficiency Calculator</h4>
                <p class="text-sm mb-3">Calculate the transfection efficiency based on your cell counts:</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 items-center">
                    <div>
                        <label for="gfp-positive-cells" class="block text-sm font-medium text-gray-700">GFP-positive cells:</label>
                        <input type="number" id="gfp-positive-cells" placeholder="e.g., 45" class="w-full mt-1">
                    </div>
                    <div>
                        <label for="total-hoechst-cells" class="block text-sm font-medium text-gray-700">Total Hoechst-stained cells:</label>
                        <input type="number" id="total-hoechst-cells" placeholder="e.g., 150" class="w-full mt-1">
                    </div>
                    <div class="sm:col-span-2 mt-2">
                        <button id="calculate-efficiency-btn" class="text-sm w-full">Calculate Transfection Efficiency (%)</button>
                    </div>
                </div>
                <p id="efficiency-output" class="mt-3 font-semibold text-green-700"></p>
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

function calculateTransfectionEfficiency() {
    const gfpCells = parseInt(document.getElementById('gfp-positive-cells').value);
    const totalCells = parseInt(document.getElementById('total-hoechst-cells').value);
    const outputP = document.getElementById('efficiency-output');
    if (!outputP) return;

    if (isNaN(gfpCells) || isNaN(totalCells) || gfpCells < 0 || totalCells <= 0) {
        outputP.textContent = "Please enter valid, positive numbers.";
        return;
    }
    
    if (gfpCells > totalCells) {
        outputP.textContent = "GFP-positive cells cannot exceed total cells.";
        return;
    }
    
    const efficiency = (gfpCells / totalCells) * 100;
    outputP.innerHTML = `Transfection Efficiency: <strong>${efficiency.toFixed(1)}%</strong> (${gfpCells} GFP+ cells out of ${totalCells} total cells)`;
}

export default function initModule10(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-10';
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
            <div id="quiz-container-module-10"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);
    
    // 3. Attach event listeners
    document.getElementById('calculate-efficiency-btn')?.addEventListener('click', calculateTransfectionEfficiency);

    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-10');
}
