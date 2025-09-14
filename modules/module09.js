const TITLE = "Module 9: Transfection - Introduction of plasmids into mammalian cells";
const QUIZ_DATA = [
    {
        question: "In our case, after transfection, what type of transfection will we perform?",
        options: ["Transient transfection", "Stable transfection"],
        answer: "Transient transfection",
        type: "mcq",
        explanation: "After transfection, the plasmid is not permanently integrated into the genome, but remains in the cell nucleus as a free DNA molecule where it is read by the cell's own RNA polymerase."
    },
    {
        question: "Which method would be most suitable for expressing proteins quickly and cost-effectively in robust HEK293 cells?",
        options: ["Lipofection (e.g., Lipofectamine)", "Electroporation", "Calcium Phosphate Precipitation", "Viral transduction (e.g. with lentiviruses)"],
        answer: "Calcium Phosphate Precipitation",
        type: "mcq",
        explanation: "The calcium phosphate method is an established, cost-effective method well-suited for transfecting adherent cells like HEK293 and is ideal for our course objectives."
    },
    {
        question: "Your cells look very unhappy after transfection, and many have detached. What could be a primary reason related to the CaPi method?",
        options: ["Too little DNA was used", "The precipitates were too fine or incubated for too short a time", "The pH of the BBS was too high, leading to coarse, toxic precipitates, or precipitates were left on cells too long", "Cells were not confluent enough"],
        answer: "The pH of the BBS was too high, leading to coarse, toxic precipitates, or precipitates were left on cells too long",
        type: "mcq",
        explanation: "Coarse CaPi precipitates formed due to incorrect pH or overly long incubation with cells can be quite toxic, leading to cell stress and detachment."
    },
    {
        question: "You see hardly any GFP-positive cells 24-48 hours post-transfection. Which is a common critical factor to check first for CaPi transfections?",
        options: ["The incubator temperature was 36°C instead of 37°C", "The pH of the 2x BBS solution was incorrect", "You used 0.5 µg of DNA instead of 0.3 µg", "The cells were only 50% confluent"],
        answer: "The pH of the 2x BBS solution was incorrect",
        type: "mcq",
        explanation: "The pH of the BBS is extremely critical for forming the right kind of fine precipitate for efficient uptake. Incorrect pH is a very common reason for CaPi transfection failure."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 9: Transfection - Introduction of plasmids into mammalian cells</h2>
            
            <p>Welcome to the fascinating world of transfection! In this module, you'll learn how to introduce foreign genetic material into mammalian cells, a cornerstone technique in molecular biology that allows us to study gene function, produce proteins, and much more. It's like giving cells a new set of instructions!</p>
            
            <h3>What does transfection mean?</h3>
            <p>Transfection is a powerful biotechnological process used to introduce foreign nucleic acids – most commonly plasmid DNA – into eukaryotic cells. This allows scientists to manipulate the genetic makeup of cells in a controlled manner.</p>
            
            <h4 class="styled-h4">Goals of Transfection</h4>
            <p>The primary goals include:</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div class="goal-box"><strong>Gene Expression</strong><p class="text-sm">Introducing a gene to produce a specific protein (e.g., a fluorescent marker like GFP, or a therapeutic protein).</p></div>
                <div class="goal-box"><strong>Gene Silencing/Knockdown</strong><p class="text-sm">Introducing constructs (like siRNA or shRNA) to reduce or eliminate the expression of a specific endogenous gene.</p></div>
                <div class="goal-box"><strong>Reporter Assays</strong><p class="text-sm">Studying the activity of promoters or other regulatory elements by linking them to a reporter gene.</p></div>
                <div class="goal-box"><strong>Protein Production</strong><p class="text-sm">Using cells as factories to produce large quantities of a desired protein.</p></div>
            </div>
            
            <h4 class="styled-h4">Transient vs. Stable Transfection</h4>
            <p>Transfection can be either transient or stable:</p>
            <ul class="list-disc list-inside ml-4">
                <li><strong>Transient Transfection:</strong> The introduced nucleic acid (e.g., plasmid) enters the cell and is expressed for a limited period (typically 24-96 hours). It is not integrated into the host cell's genome and is eventually lost or diluted out as cells divide. This is useful for rapid gene expression studies.</li>
                <li><strong>Stable Transfection:</strong> The introduced nucleic acid is integrated into the host cell's genome. This results in long-term, stable expression of the gene, which is passed on to daughter cells during cell division. Creating stable cell lines requires selection methods (e.g., using antibiotic resistance markers).</li>
            </ul>
            
            <p>In our case: After transfection, the plasmid is not permanently integrated into the genome, but remains in the cell nucleus as a free DNA molecule. There it is read by the cell's own RNA polymerase, and the encoded protein is then produced in the cytoplasm.</p>
            
            <div class="interactive-box">
                <h4>Quick Check: Type of Transfection</h4>
                <p class="text-sm mb-2">So we will perform a:</p>
                <div id="transfection-type-quiz" class="space-y-1">
                    <button class="quiz-option text-sm" data-correct="true">Transient transfection</button>
                    <button class="quiz-option text-sm" data-correct="false">Stable transfection</button>
                </div>
                <div id="transfection-type-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>
            
            <img src="images/image091.png" alt="Transfection overview diagram" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-lg w-auto" onerror="this.onerror=null; this.src='https://placehold.co/500x300/e2e8f0/4a5568?text=Image+91:+Transfection+Overview'; this.alt='Placeholder: Transfection Overview';">

            <h3>B. Overview of Transfection Methods</h3>
            <p><strong>The Variety of Methods:</strong><br>
            There are numerous ways to get nucleic acids into cells, broadly categorized as:</p>
            
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
            
            <p>In this course, we will use the <strong>Calcium Phosphate Precipitation</strong> method!</p>

            <div class="interactive-box">
                <h4>Interactive Box 1: The Agony of Choice: Which Method for Which Purpose?</h4>
                <p class="text-sm mb-2">Scenario: Imagine you want to express proteins quickly and cost-effectively in robust HEK293 cells. Which of the following methods would be most suitable for this project and our course?</p>
                <div id="transfection-method-choice-quiz" class="space-y-1"></div>
                <div id="transfection-method-choice-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <h3>C. In Detail: Calcium Phosphate Transfection</h3>
            <p>The calcium phosphate method relies on a simple chemical trick. Negatively charged plasmid DNA (DNA is always negatively charged) is mixed with calcium chloride (CaCl₂). When a phosphate-buffered saline solution (like 2x BBS - HEPES Buffered Saline) is added, insoluble calcium phosphate-DNA co-precipitates form. These fine, crystalline DNA/Ca₃(PO₄)₂-particles are pipetted onto adherent cells. Cells naturally take up these crystals through endocytosis (a process where the cell membrane engulfs external material). Once inside the cell, some of the plasmids make their way to the nucleus, where genes of the transfected DNA can be transcribed and subsequently translated in the cytoplasm to produce the desired protein (e.g., in our case GFP or FLAG-tagged protein).</p>
            
            <img src="images/image092.png" alt="Calcium phosphate transfection mechanism" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-lg w-auto" onerror="this.onerror=null; this.src='https://placehold.co/500x300/e2e8f0/4a5568?text=Image+92:+CaPi+Mechanism'; this.alt='Placeholder: CaPi Mechanism';">

            <h4 class="styled-h4">The Protocol – Step by Step to Success</h4>
            
            <h4 class="styled-h4">Materials</h4>
            <ul class="bg-slate-100 p-3 rounded-md shadow-sm">
                <li>HEK293-cells in 24-well-plate (roughly 70% confluency)</li>
                <li><strong>Plasmids:</strong>
                    <ul class="list-disc list-inside ml-4">
                        <li>pH2B-GFP (Concentration: e.g. 680 ng/µl - *please use the actual concentration from your stock tube label*)</li>
                        <li>pRKV-FLAG (Concentration: e.g. 1015 ng/µl - *please use the actual concentration from your stock tube label*)</li>
                    </ul>
                </li>
                <li><strong>Transfection reagents:</strong>
                    <ul class="list-disc list-inside ml-4">
                        <li>0.25 M CaCl₂ solution</li>
                        <li>2x BBS (BES-Buffered Saline Solution)</li>
                    </ul>
                </li>
                <li>Sterile filter tips, Eppendorf tubes (1.5 ml), laminar flow hood</li>
                <li>Pipettes (P20, P200, P1000)</li>
                <li>Incubator (37°C, 5% CO₂)</li>
                <li>Timer, marker</li>
            </ul>
            
            <div class="highlight-note">
                <h4>2x BBS pH 6.95 (100mL)</h4>
                <ul class="text-sm">
                    <li>280mM NaCl: 1.637g</li>
                    <li>50mM BES: 1.0665g</li>
                    <li>1.5mM Na₂HPO₄: 0.027g</li>
                </ul>
                <p class="text-sm mt-2">Adjust pH very precisely → sterile filter → store @ 4°C</p>
            </div>

            <div class="interactive-box">
                <h4>Interactive Box 3: Experimental Plate Setup</h4>
                <p class="text-sm mb-2">Before you begin with your experiment you need to plan your experiment! Our goal is to transfect our cells in different wells of a 24 well plate. For all experiments it is always important to have proper controls (e.g. a negative control, meaning a condition in which nothing is transfected). Also it is useful to test different conditions in parallel in different wells. Additionally to that, it is important to have duplicates (or even higher repetitions) for each condition to be able to draw more meaningful conclusions and to be able to exclude outliers.</p>
                
                <p class="text-sm mb-2"><strong>This is a conceptual representation. In the lab, you'd map out which wells get which plasmids or serve as controls.</strong> Design a pipetting scheme for the 24-well plate.</p>
                
                <img src="images/image093.png" alt="24-well plate pipetting scheme" class="my-2 rounded-lg shadow-md mx-auto block max-w-xs w-auto" onerror="this.onerror=null; this.src='https://placehold.co/300x200/e2e8f0/4a5568?text=Image+93:+24-Well+Plate+Scheme'; this.alt='Placeholder: 24-Well Plate Scheme';">
                
                <p class="text-sm text-gray-600 mt-2"><strong>Figure 3: Pipetting scheme for the 24-well plate.</strong></p>
                
                <p class="text-sm mt-2"><strong>Example Conditions:</strong></p>
                <ul class="text-xs list-disc list-inside ml-4">
                    <li>A1-2: Plasmid pH2B-GFP</li>
                    <li>B1-4: Plasmid pRKV-FLAG (B3-4 for control with only secondary antibody)</li>
                    <li>C1-2: Plasmid pH2B-GFP + Plasmid pRKV-FLAG</li>
                    <li>D1-2: negative control (no plasmid) (control for GFP (or rather general transfection))</li>
                </ul>
            </div>
            
            <div class="highlight-note">
                <p><strong>The following protocol is for transfecting one well of a 24-well plate. Remember to scale up your calculations for the total number of wells you plan to transfect for each plasmid, and always prepare a little extra (e.g., 10%) to account for pipetting inaccuracies!</strong></p>
            </div>
            
            <div class="highlight-note">
                <p><strong>Crucial Reminder:</strong> Always prepare all solutions for the required number of wells PLUS 10% extra volume to account for pipetting errors!</p>
            </div>
            
            <div class="highlight-note">
                <p><strong>Note:</strong> Calcium phosphate precipitates can be toxic or stressful to cells. If you plan to transfect both plasmids into the same well i.e. to the same cells, then prepare separate reactions (i.e. one tube per plasmid) and add a total of 50 µl of your DNA-calcium phosphate co-precipitate solutions (i.e. only 25 µl of each tube) to the cells.</p>
            </div>

            <h4 class="styled-h4">1. Transfection</h4>
            <p><strong>Prepare Solution (per well):</strong></p>
            
            <ul class="list-disc list-inside ml-4 space-y-2">
                <li>In a sterile 1.5 mL microcentrifuge tube (Eppendorf tube), add <strong>25 µL of 0.25 M CaCl₂</strong>.</li>
                <li><strong>Add Plasmid DNA:</strong> Add <strong>0.3 µg</strong> of your desired plasmid (pH2B-GFP or pRKV-FLAG) to the CaCl₂. 
                    <div class="p-2 mt-1 bg-amber-50 border-l-4 border-amber-400 text-amber-700 text-xs rounded-r-md">
                        <p><strong>Attention, Pipetting Pros!</strong> Pipetting volumes less than 0.5 µL is highly inaccurate. That's why you usually prepare a dilution of your plasmid to e.g. 0.1 µg/µl (= 100 ng/µl) in nuclease free H₂O (if not available in dH₂O).</p>
                        <p class="mt-1"><strong>Storage & Handling:</strong> Plasmids should be kept in the freezer and only be taken out on ice.</p>
                    </div>
                </li>
            </ul>

            <div class="interactive-box">
                <h4>Interactive Box 2: "Plasmid Calculation Wizards Wanted!"</h4>
                <h5 class="font-semibold mb-2">Plasmid Calculation Practice</h5>
                
                <p class="text-sm mb-2"><strong>Scenario 1: Volume Calculation</strong><br>You want to use 0.4 µg of Plasmid pH2B.GFP. Its stock concentration is 682.3 ng/µl. How many µl of the stock solution do you need to prepare a dilution that contains 100 ng/µl plasmid-DNA?</p>
                
                <p class="text-sm mb-2">How many µl of this dilution do you need to use for your transfection to end up with the desired mass of your plasmid?</p>
                
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

                <p class="text-sm mb-2 mt-4"><strong>Scenario 2: Handling Small Volumes</strong><br>The calculated volume from Scenario 1 is approximately 0.416 µL. Can this be pipetted accurately and directly with standard lab pipettes? (Select Yes or No)</p>
                <div id="small-volume-quiz" class="space-y-1 mb-2">
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">Yes, it's fine</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="true">No, it's too small for accurate direct pipetting</button>
                </div>
                <div id="small-volume-feedback" class="feedback-message text-xs mt-1 p-1.5 rounded-md hidden"></div>
            </div>
            
            <ol class="list-decimal list-inside ml-4 space-y-2" start="3">
                <li>Add <strong>25 µL of 2x BBS</strong> to the tube containing the CaCl₂-DNA mixture *Critical: Add BBS to DNA/CaCl₂, not the other way around for optimal precipitate formation.*</li>
                <li>Gently invert the tube 4-5 times to mix (= turn it upside down) (do not vortex!)</li>
                <li>Use a centrifuge and centrifuge for 1 min at 2000rpm</li>
                <li>Incubate the mixture for 15 min at room temperature (RT). This allows the DNA-calcium phosphate co-precipitates to form properly.</li>
                <li>Carefully add <strong>50 µL of this suspension dropwise</strong> onto the cells in one well of a 24-well plate. Take the pipetting scheme into account. The existing medium should remain on the cells. 
                    <div class="p-2 mt-1 bg-orange-50 border-l-4 border-orange-400 text-orange-700 text-xs rounded-r-md">
                        <p><strong>Note:</strong> Keep in mind what was mentioned above. If you want to transfect both plasmids into the same well then add a total of 50 µl solution to the cells (meaning 25 µl of each plasmid DNA-calcium phosphate co-precipitate solution) as <strong>Calcium phosphate precipitates can be toxic to the cells.</strong></p>
                    </div>
                </li>
                <li>After adding the precipitate to all designated wells, gently swirl the plate in a "figure-eight" motion or rock it back-and-forth and side-to-side a few times to ensure an even distribution of the precipitates over the cell monolayer. Avoid vigorous shaking.</li>
                <li>Place the plate carefully into the incubator with 37°C and 5% CO₂ and incubate overnight (typically 16-24 hours).</li>
            </ol>
            
            <p class="mt-4">The next day (or starting a few hours post-transfection), check your cells under a phase-contrast microscope or light microscope. Calcium phosphate precipitates appear as small, dark granules on or around the cells. Also, look for signs of contamination.</p>
            
            <img src="images/image094.png" alt="HEK cells after calcium phosphate transfection" class="my-4 rounded-lg shadow-md mx-auto block max-w-full sm:max-w-lg w-auto" onerror="this.onerror=null; this.src='https://placehold.co/500x300/e2e8f0/4a5568?text=Image+94:+HEK+Cells+Post-Transfection'; this.alt='Placeholder: HEK Cells Post-Transfection';">

            <h3>D. Important Tips & Troubleshooting Corner</h3>
            <p>Successful transfection is an art as much as a science! Here are some key factors and common pitfalls:</p>
            
            <ul class="list-disc list-inside ml-4 space-y-2">
                <li><strong>Cell Confluency:</strong> Cells should be actively dividing and not too sparse or too dense. For HEK293 cells with CaPi, a confluency of around 70% at the time of transfection is often optimal. Overly confluent cells transfect poorly.</li>
                <li><strong>DNA Quality & Quantity:</strong> Use high-purity plasmid DNA (e.g., endotoxin-free). The amount of DNA needs to be optimized; too little results in low efficiency, too much can be toxic.</li>
                <li><strong>pH of BBS:</strong> This is CRITICAL for the calcium phosphate method. The pH of the 2x BBS solution directly influences the size and quality of the precipitate. Even slight deviations can drastically affect efficiency. Typically, a pH between 7.05 and 7.12 is required.</li>
                <li><strong>Pipetting Skills:</strong> Accuracy, especially with small volumes of plasmids and reagents, is paramount.</li>
                <li><strong>Cleanliness and Sterility:</strong> As always in cell culture, maintain strict aseptic technique to avoid contamination, which can ruin your experiment.</li>
            </ul>

            <div class="interactive-box">
                <h4>Interactive Box 4: What Went Wrong? – Transfection Troubleshooting</h4>
                <div id="transfection-troubleshooting-quiz"></div>
            </div>
            
            <h4 class="styled-h4">Comparison Table: Transient vs. Stable Transfection</h4>
            <table class="w-full border-collapse border border-gray-300 bg-slate-100 p-3 rounded-md shadow-sm mb-4">
                <thead>
                    <tr class="bg-purple-100">
                        <th class="border border-gray-300 p-2 text-left font-semibold">Feature</th>
                        <th class="border border-gray-300 p-2 text-left font-semibold">Transient Transfection (as in this experiment)</th>
                        <th class="border border-gray-300 p-2 text-left font-semibold">Stable Transfection</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">DNA integration</td>
                        <td class="border border-gray-300 p-2">No; DNA remains episomal (non-integrated)</td>
                        <td class="border border-gray-300 p-2">Yes; DNA integrates into host genome</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Duration of expression</td>
                        <td class="border border-gray-300 p-2">Short-term (1–4 days)</td>
                        <td class="border border-gray-300 p-2">Long-term (weeks to permanent)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Selection required?</td>
                        <td class="border border-gray-300 p-2">No</td>
                        <td class="border border-gray-300 p-2">Yes (e.g. with antibiotics to select stable clones)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Speed</td>
                        <td class="border border-gray-300 p-2">Fast (results in 1–2 days)</td>
                        <td class="border border-gray-300 p-2">Slow (weeks of clone selection)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Use case</td>
                        <td class="border border-gray-300 p-2">Protein expression, imaging, short-term assays</td>
                        <td class="border border-gray-300 p-2">Stable protein production, long-term studies</td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="styled-h4">Key Questions and Answers</h4>
            <div class="space-y-4">
                <div class="highlight-note">
                    <p><strong>How does the DNA get into the cell?</strong></p>
                    <p class="text-sm mt-1">In calcium phosphate transfection, DNA is mixed with calcium chloride and then added to a phosphate buffer, forming a fine calcium phosphate-DNA precipitate. This precipitate settles onto the cell membrane, where it is taken up by the cells—mainly via endocytosis or pinocytosis. Once inside, the DNA can reach the nucleus and be transiently expressed.</p>
                </div>
                
                <div class="highlight-note">
                    <p><strong>What other possibilities are there to introduce foreign DNA into cells?</strong></p>
                    <p class="text-sm mt-1">In addition to calcium phosphate, several other methods exist:</p>
                    <ul class="text-sm mt-2 list-disc list-inside ml-4">
                        <li><strong>Chemical methods:</strong> Lipofection (lipid-based transfection reagents), PEI (polyethylenimine-based methods)</li>
                        <li><strong>Physical methods:</strong> Electroporation (electric pulses create temporary pores in the membrane), Microinjection (direct injection into the cell or nucleus), Gene gun (mainly for tissues or plant cells)</li>
                        <li><strong>Biological methods:</strong> Viral transduction (e.g., using lentivirus or adenovirus to deliver DNA)</li>
                    </ul>
                    <p class="text-sm mt-2">Each method varies in efficiency, toxicity, and suitability for different cell types.</p>
                </div>
                
                <div class="highlight-note">
                    <p><strong>What are the potential problems with transfection? (especially Calcium phosphate)</strong></p>
                    <ul class="text-sm mt-2 list-disc list-inside ml-4">
                        <li><strong>Inconsistency:</strong> Calcium phosphate precipitation is sensitive to pH and temperature, which can lead to batch-to-batch variability.</li>
                        <li><strong>Low efficiency:</strong> Particularly in primary cells or hard-to-transfect lines.</li>
                        <li><strong>Toxicity:</strong> Large precipitates or long incubation times can be harmful to cells.</li>
                        <li><strong>Precipitate size:</strong> If the precipitate is too coarse, it won't be taken up efficiently.</li>
                        <li><strong>Limited reproducibility:</strong> Small changes in mixing or timing can affect results.</li>
                    </ul>
                </div>
                
                <div class="highlight-note">
                    <p><strong>How can the transfection efficiency be influenced? (especially Calcium phosphate)</strong></p>
                    <ul class="text-sm mt-2 list-disc list-inside ml-4">
                        <li><strong>Precise pH control:</strong> Optimal pH for precipitate formation is usually around 7.05–7.12. Slight deviations can strongly affect efficiency.</li>
                        <li><strong>Precipitate quality:</strong> A fine, even precipitate increases uptake—this depends on mixing speed and incubation time before adding to cells.</li>
                        <li><strong>DNA amount and purity:</strong> Using clean, endotoxin-free DNA in the right concentration improves results.</li>
                        <li><strong>Cell confluency:</strong> Ideal confluency is 50–80%—cells that are too sparse or too confluent transfect less efficiently.</li>
                        <li><strong>Incubation time with precipitate:</strong> Typically 4–8 hours, but too long can cause toxicity.</li>
                        <li><strong>Glycerol shock or DMSO shock (optional):</strong> Brief exposure after transfection can boost efficiency.</li>
                    </ul>
                </div>
            </div>
            
            <h4 class="styled-h4">Plasmid Maps</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div class="text-center">
                    <img src="images/image095.png" alt="pH2B-GFP plasmid map" class="rounded-lg shadow-md mx-auto block max-w-full w-auto" onerror="this.onerror=null; this.src='https://placehold.co/300x300/e2e8f0/4a5568?text=Image+95:+pH2B-GFP+Plasmid'; this.alt='Placeholder: pH2B-GFP Plasmid Map';">
                    <p class="text-sm mt-2 font-semibold">Figure 5: Plasmid map of pH2B-GFP used in the practical course</p>
                </div>
                <div class="text-center">
                    <img src="images/image096.png" alt="pRKV-FLAG plasmid map" class="rounded-lg shadow-md mx-auto block max-w-full w-auto" onerror="this.onerror=null; this.src='https://placehold.co/300x300/e2e8f0/4a5568?text=Image+96:+pRKV-FLAG+Plasmid'; this.alt='Placeholder: pRKV-FLAG Plasmid Map';">
                    <p class="text-sm mt-2 font-semibold">Figure 6: Plasmid map of pRKV-FLAG used in the practical course</p>
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

export default function initModule9(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-9';
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
            <div id="quiz-container-module-9"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);

    // 3. Attach event listeners and run init logic
    // Transfection type quiz
    const transfectionTypeContainer = document.getElementById('transfection-type-quiz');
    if (transfectionTypeContainer) {
        transfectionTypeContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.dataset.correct === 'true';
                const correctFeedback = "<strong>Correct!</strong> After transfection, the plasmid remains in the cell nucleus as a free DNA molecule.";
                const incorrectFeedback = "<strong>Incorrect!</strong> We perform transient transfection - the plasmid is not permanently integrated.";
                handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }
    
    // Interactive Box 1: Transfection Method Choice
    const methodChoiceContainer = document.getElementById('transfection-method-choice-quiz');
    if (methodChoiceContainer) {
        const methodQuizData = {
            options: ["Lipofection (e.g., Lipofectamine)", "Electroporation", "Calcium Phosphate Precipitation", "Viral transduction (e.g. with lentiviruses)"],
            answer: "Calcium Phosphate Precipitation",
            feedback_correct: "Exactly! The calcium phosphate method is an established, cost-effective method well-suited for transfecting adherent cells like HEK293 and is ideal for our course objectives.",
            feedback_incorrect: "Not quite. The calcium phosphate method is an established, cost-effective method well-suited for transfecting adherent cells like HEK293 and is ideal for our course objectives."
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
                 const correctFeedback = "<strong>Correct!</strong> 0.416 µL is generally too small to pipette accurately with standard P2 or P10 pipettes. A good strategy is to prepare a master mix or a working dilution of the plasmid.";
                 const incorrectFeedback = "<strong>Not quite.</strong> 0.416 µL is generally too small to pipette accurately with standard P2 or P10 pipettes. A good strategy is to prepare a master mix or a working dilution of the plasmid.";
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
    renderQuiz(QUIZ_DATA, 'quiz-container-module-9');
}
