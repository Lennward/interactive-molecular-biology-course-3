const TITLE = "Module 6: Cloning of DNA-Plasmids";
const QUIZ_DATA = [        
    {
        question: "During agarose gel electrophoresis, which lanes should show DNA bands if your PCR was successful?",
        options: [
            "All lanes including negative controls",
            "Only the DNA ladder lane",
            "Test reactions 1 & 2 for both insert and backbone PCR, but not the negative controls",
            "Only the backbone PCR reactions"
        ],
        answer: "Test reactions 1 & 2 for both insert and backbone PCR, but not the negative controls",
        type: "mcq",
        explanation: "Successful PCR reactions with template DNA should show bands, while negative controls (no template) should show no bands, confirming the reactions worked properly."
    },
    {
        question: "What is the key advantage of BsaI (Type IIS enzyme) in Golden Gate Assembly compared to traditional restriction enzymes?",
        options: [
            "It cuts DNA faster than other enzymes",
            "It cuts outside its recognition sequence, allowing custom overhang design",
            "It requires lower temperatures to function",
            "It doesn't require ATP for activity"
        ],
        answer: "It cuts outside its recognition sequence, allowing custom overhang design",
        type: "mcq",
        explanation: "BsaI cuts outside its recognition sequence, enabling the design of custom 4-base overhangs that are independent of the enzyme's binding site, which is essential for directed assembly."
    },
    {
        question: "True or False: After successful Golden Gate Assembly, BsaI will still be able to cut the final assembled plasmid.",
        options: ["True", "False"],
        answer: "False",
        type: "tf",
        explanation: "During Golden Gate Assembly, the BsaI recognition sites are removed/consumed in the ligation process, so the final assembled product cannot be cut by BsaI, which helps confirm successful assembly."
    },
    {
        question: "Why is heat shock at exactly 42°C for 30 seconds critical during bacterial transformation?",
        options: [
            "To activate the restriction enzymes in the plasmid",
            "To create temporary pores in bacterial cell walls allowing DNA uptake",
            "To denature any contaminating proteins",
            "To activate the antibiotic resistance gene"
        ],
        answer: "To create temporary pores in bacterial cell walls allowing DNA uptake",
        type: "mcq",
        explanation: "Heat shock creates temporary pores in the bacterial cell membrane, allowing the plasmid DNA to enter the competent cells during transformation."
    },
    {
        question: "Which verification method would be most appropriate for the final confirmation before using your cloned plasmid in transfection experiments?",
        options: [
            "Colony PCR only",
            "Restriction digestion analysis only", 
            "DNA sequencing",
            "Visual inspection of bacterial colonies"
        ],
        answer: "DNA sequencing",
        type: "mcq",
        explanation: "DNA sequencing provides the most comprehensive verification by confirming the exact sequence, detecting any mutations or errors that other methods might miss, making it essential before important applications like transfection."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 6: Cloning of DNA-Plasmids</h2>
            
            <h3>Cloning</h3>
            
            <h4 class="styled-h4">Learning objectives</h4>
            <p>At the end of this part of the practical, you should be able to:</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Execute and know the principles behind the main procedures for copy-and-paste molecular cloning.</li>
                <li>Describe the principal steps for polymerase chain reaction (PCR).</li>
                <li>Know how to use commercial restriction enzymes.</li>
                <li>Plan, perform, and analyze results obtained using agarose gel electrophoresis.</li>
                <li>Describe the main ingredients of a golden gate reaction</li>
                <li>Identify the major steps in a plasmid purification (miniprep).</li>
            </ul>

            <h4 class="styled-h4">Brief summary</h4>
            
            <h5><strong>Our specific goal</strong></h5>
            <p>Our specific goal during this portion of the practical is to clone our gene of interest (GOI) into our plasmid. The GOI is 3xFLAG-LMNB1 from the Addgene plasmid qTAG-N-Blast-3xFLAG-LMNB1 and needs to be cloned into the plasmid plR006_FKBP-CD28TM-ZipEE (<strong>not</strong> commercially available as plasmid). Note: Feel free to use a different plasmid instead. The general goal is just to successfully introduce a new DNA fragment that contains a FLAG-tag or similar protein-tag into the original plasmid. This can be done with any plasmid as long as it does not already have a FLAG tag. In general, plasmids can be bought from companies like Addgene.</p>

            <p>If our cloning is successful, the plasmid obtained will drive the expression of 3xFLAG-LMNB1 under control of a promoter. This plasmid can be used in subsequent experiments to transfect mammalian HEK293-cells and perform an immunocytochemistry (ICC) experiment. The results of this will be investigated microscopically, whereby the distribution and expression strength of the protein transcribed and translated from our plasmid can be studied.</p>

            <p>We will use our gene of interest (GOI) as the template to generate a PCR product. Our GOI is currently on a different plasmid. The goal is to take the sequence of the GOI out of its original plasmid and add it into the plR006_FKBP-CD28TM-ZipEE to generate the plL001_3xFLAG-LMNB1 plasmid. As we will perform a Golden Gate Assembly we first also need to conduct a PCR whereby the part of plasmid plR006_FKBP-CD28TM-ZipEE that should serve as backbone of the new plasmid plL001_3xFLAG-LMNB1 needs to be amplified.</p>

            <p>The vector plasmid we will use for cloning is plR006_FKBP-CD28TM-ZipEE (introduced during the module of the course titled "In Silico Cloning"). A map of this plasmid is shown in the following figure.</p>

            <div class="my-6 text-center">
                <img src="images/image0601.png" alt="Map of plasmid plR006_FKBP-CD28TM-ZipEE" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[500px]" onerror="this.onerror=null; this.src='https://placehold.co/500x500/e2e8f0/4a5568?text=plR006+Vector+Map'; this.alt='Placeholder: plR006 Vector Map';">
                <p class="text-sm text-gray-600 mt-2">The figure shows the map of plasmid plR006_FKBP-CD28TM-ZipEE (Obtained from SnapGene Viewer).</p>
            </div>

            <p>In the section of this practical titled "In Silico Cloning," you amplified by PCR (in silico) the GOI 3xFLAG-LMNB1 (insert) and plR006_FKBP-CD28TM-ZipEE (backbone) with primers that provide BsaI recognition sites on the 5' and 3' end. In this section of the practical, you will amplify the GOI 3xFLAG-LMNB1 (<em>in vitro</em>) from the plasmid qTAG-N-Blast-3xFLAG-LMNB1 and the remaining backbone of plR006_FKBP-CD28TM-ZipEE using the same primers. For this, these primers need to be purchased online. Different companies offer the possibility to purchase primers. Both the expression vector, plR006_FKBP-CD28TM-ZipEE, and the 3xFLAG-LMNB1 amplicon will then be digested using the restriction enzyme BsaI, and the 3xFLAG-LMNB1 will be inserted into the plR006_FKBP-CD28TM-ZipEE plasmid. At the end of the cloning, you will therefore produce the plasmid, plL001_3xFLAG-LMNB1. The plasmid map of the final plasmid, which you should have generated during the section of the practical titled "In Silico Cloning" is shown in the following figure.</p>

            <div class="my-6 text-center">
                <img src="images/image0602.png" alt="Map of final plasmid plL001_3xFLAG-LMNB1" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[500px]" onerror="this.onerror=null; this.src='https://placehold.co/500x500/e2e8f0/4a5568?text=plL001+Final+Map'; this.alt='Placeholder: plL001 Final Map';">
                <p class="text-sm text-gray-600 mt-2">The figure shows the map of plL001_3xFLAG-LMNB1 (Obtained from SnapGene Viewer).</p>
            </div>

            <p>The specific steps that we will follow to generate plL001_3xFLAG-LMNB1 are shown in the following figure.</p>

            <div class="my-6 text-center">
                <img src="images/image0603.png" alt="Overview of Golden Gate Assembly cloning steps" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[500px]" onerror="this.onerror=null; this.src='https://placehold.co/500x600/e2e8f0/4a5568?text=Golden+Gate+Cloning+Overview'; this.alt='Placeholder: Golden Gate Cloning Overview';">
                <p class="text-sm text-gray-600 mt-2">The figure shows the overview of the cloning steps we will employ to generate plL001_3xFLAG-LMNB1. The schematic representation of the steps involved in molecular cloning using golden gate assembly can be seen. The PCRed vector backbone and the PCRed insert are digested with suitable restriction enzymes to create cohesive ends which subsequently anneal to each other, all in one step during the golden gate assembly (with standard cloning several steps are needed for this). The recombinant DNA is transformed into bacteria and the bacteria are plated onto selection plates for identification of positive clones. Putative positive clones are subsequently collected to inoculate miniprep cultures. Plasmid DNA is purified from the miniprep cultures and subsequently analyzed to identify positive clones. Figure adapted from <a href="https://goldbio.com/articles/article/cloning-overview" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">goldbio.com</a> with elements from BioRender.com.</p>
            </div>

            <h3>1. PCR of our GOI (= 3xFLAG-LMNB1) from the plasmid qTAG-N-Blast-3xFLAG-LMNB1 and of our backbone from plR006_FKBP-CD28TM-ZipEE</h3>
            
            <p>We will perform two PCRs. The insert (3xFLAG-LMNB1) (first PCR) and the backbone (second PCR) will be amplified with specific oligonucleotide primers (= 4 primers in total). For each PCR, two such primers, normally about 17–30 nucleotides in length, are designed to bind at either end of the sequence to be amplified, one to the top strand and one to the bottom strand of DNA (Figure 17).</p>

            <div class="my-6 text-center">
                <img src="images/image0604.png" alt="Overview of polymerase chain reaction (PCR)" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/600x250/e2e8f0/4a5568?text=PCR+Overview'; this.alt='Placeholder: PCR Overview';">
                <p class="text-sm text-gray-600 mt-2">The figure shows the overview of a polymerase chain reaction (PCR). In addition to buffer and water, the reaction mix contains a DNA template containing the sequence of interest, sense and antisense primers, dNTPs, and a DNA polymerase (A). The reaction is initially heated to a temperature of 94-96 °C to heat activate the DNA polymerase. In the first step of the cycling reaction, double-stranded DNA is heated to 94-98 °C. This causes DNA melting, or denaturation, yielding two single-stranded DNA molecules (B). In the next step, the reaction temperature is lowered to 50-65 °C, allowing annealing of the sense and antisense primers to each of the single stranded DNA templates (C). The reaction temperature is then raised, typically to 72 °C (although the reaction temperature may vary depending on the specific polymerase used), to allow for elongation of the new DNA strand by the polymerase starting from the primer binding site (D). Steps B-D constitute a single PCR cycle. In subsequent steps, copies of both the original DNA template and its daughters are generated (E,F). Two new copies are generated for each set of double-stranded templates in each cycle, such that the final yield is approximately 2n copies, where n is the total number of cycles (G). Figure modified from <a href="https://en.wikipedia.org/wiki/Polymerase_chain_reaction" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">Wikipedia</a></p>
            </div>

            <p>When the amplified sequence is to be used for cloning, primer sequences typically also contain (a) a restriction site for the cloning (in this case, BsaI) and (b) 3-6 additional nucleotides* to facilitate restriction enzyme binding and functionality.</p>

            <p class="text-sm">*Most restriction enzymes do not work well unless the restriction site is flanked on both sides by at least a few base pairs. For more information, see: <a href="https://www.neb.com/tools-and-resources/usage-guidelines/cleavage-close-to-the-end-of-dna-fragments" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">NEB cleavage guidelines</a>.</p>

            <h4 class="styled-h4">Procedure</h4>
            
            <p><strong>General:</strong></p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Use 0.2 ml PCR tubes. Use one tube for each reaction.</li>
                <li>Prepare three reactions for each, insert and backbone PCR (= six in total): two complete reactions with all ingredients and one control reaction without the template (DNA) = negative control.</li>
                <li>Refer to the table for the amounts of ingredients necessary in each reaction.</li>
                <li>Remember to label each tube.</li>
                <li>Maintain all components (particularly the master mix) on ice.</li>
                <li>!! Calculate the water volume for each reaction and add it to the chart !!</li>
            </ul>

            <h5><strong>Prepare the PCR reaction:</strong></h5>
            <p>1. Pipette the components listed below in the following order: first water, then master mix, then DNA, then primers.</p>

            <p>PCR amplification of the subsequent insert 3xFLAG-LMNB1 (GOI) and plR006_FKBP-CD28TM-ZipEE backbone (perform both simultaneously):</p>

            <div class="pcr-tables-container">
    <div class="pcr-table-section">
        <h6><strong>For insert:</strong></h6>
        <table class="w-full border-collapse border border-gray-300 bg-white rounded-md shadow-sm mb-4">
            <thead>
                <tr class="bg-purple-100">
                    <th class="border border-gray-300 p-2 text-left font-semibold">Component</th>
                    <th class="border border-gray-300 p-2 text-center font-semibold">Test 1</th>
                    <th class="border border-gray-300 p-2 text-center font-semibold">Test 2</th>
                    <th class="border border-gray-300 p-2 text-center font-semibold">Negative control</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-gray-300 p-2">2x Q5 HF PCR master mix*</td>
                    <td class="border border-gray-300 p-2 text-center">10 µl</td>
                    <td class="border border-gray-300 p-2 text-center">10 µl</td>
                    <td class="border border-gray-300 p-2 text-center">10 µl</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">qTAG-N-Blast-3xFLAG-LMNB1 (40 ng) (e.g. c = 50 ng/µl**)</td>
                    <td class="border border-gray-300 p-2 text-center"><input type="number" step="0.1" id="insert-dna-test1" class="pcr-input" placeholder="µl"></td>
                    <td class="border border-gray-300 p-2 text-center"><input type="number" step="0.1" id="insert-dna-test2" class="pcr-input" placeholder="µl"></td>
                    <td class="border border-gray-300 p-2 text-center">-</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">Sense Primer (for insert; 10 µM)</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">Antisense Primer (for insert; 10 µM)</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">H2O</td>
                    <td class="border border-gray-300 p-2 text-center" id="insert-h2o-test1">REST = 6.5 µl</td>
                    <td class="border border-gray-300 p-2 text-center" id="insert-h2o-test2">REST = 6.5 µl</td>
                    <td class="border border-gray-300 p-2 text-center" id="insert-h2o-neg">REST = 7.3 µl</td>
                </tr>
                <tr class="bg-orange-50">
                    <td class="border border-gray-300 p-2 font-semibold">Total Volume</td>
                    <td class="border border-gray-300 p-2 text-center font-semibold">20.0 µl</td>
                    <td class="border border-gray-300 p-2 text-center font-semibold">20.0 µl</td>
                    <td class="border border-gray-300 p-2 text-center font-semibold">20.0 µl</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="pcr-table-section">
        <h6><strong>For backbone:</strong></h6>
        <table class="w-full border-collapse border border-gray-300 bg-white rounded-md shadow-sm mb-4">
            <thead>
                <tr class="bg-purple-100">
                    <th class="border border-gray-300 p-2 text-left font-semibold">Component</th>
                    <th class="border border-gray-300 p-2 text-center font-semibold">Test 1</th>
                    <th class="border border-gray-300 p-2 text-center font-semibold">Test 2</th>
                    <th class="border border-gray-300 p-2 text-center font-semibold">Negative control</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-gray-300 p-2">2x Q5 HF PCR master mix*</td>
                    <td class="border border-gray-300 p-2 text-center">10 µl</td>
                    <td class="border border-gray-300 p-2 text-center">10 µl</td>
                    <td class="border border-gray-300 p-2 text-center">10 µl</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">plR006_FKBP-CD28TM-ZipEE (40 ng) (e.g. c = 50 ng/µl**)</td>
                    <td class="border border-gray-300 p-2 text-center"><input type="number" step="0.1" id="backbone-dna-test1" class="pcr-input" placeholder="µl"></td>
                    <td class="border border-gray-300 p-2 text-center"><input type="number" step="0.1" id="backbone-dna-test2" class="pcr-input" placeholder="µl"></td>
                    <td class="border border-gray-300 p-2 text-center">-</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">Sense Primer (for backbone; 10 µM)</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">Antisense Primer (for backbone; 10 µM)</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                    <td class="border border-gray-300 p-2 text-center">1.25 µl</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 p-2">H2O</td>
                    <td class="border border-gray-300 p-2 text-center" id="backbone-h2o-test1">REST = 6.5 µl</td>
                    <td class="border border-gray-300 p-2 text-center" id="backbone-h2o-test2">REST = 6.5 µl</td>
                    <td class="border border-gray-300 p-2 text-center" id="backbone-h2o-neg">REST = 7.3 µl</td>
                </tr>
                <tr class="bg-orange-50">
                    <td class="border border-gray-300 p-2 font-semibold">Total Volume</td>
                    <td class="border border-gray-300 p-2 text-center font-semibold">20.0 µl</td>
                    <td class="border border-gray-300 p-2 text-center font-semibold">20.0 µl</td>
                    <td class="border border-gray-300 p-2 text-center font-semibold">20.0 µl</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

            <p class="text-sm">*The master mix contains reaction buffer, dNTPs, polymerase, and a GC enhancer.</p>
            <p class="text-sm">**This is just an example. Use the specific concentration of your sample.</p>

            <p>2. Mix by pipetting up and down without generating bubbles.</p>
            <p>3. Briefly ("touch") centrifuge the liquid to the bottom of the tubes.</p>

            <h5><strong>Run the PCR reaction in a thermocycler:</strong></h5>
            <p>4. Run all the six PCRs in a thermocycler using the following program:</p>

            <table class="w-full border-collapse border border-gray-300 bg-slate-100 rounded-md shadow-sm my-4">
                <thead>
                    <tr class="bg-purple-100">
                        <th class="border border-gray-300 p-2 text-left font-semibold">Steps</th>
                        <th class="border border-gray-300 p-2 text-center font-semibold"></th>
                        <th class="border border-gray-300 p-2 text-center font-semibold">Temperature</th>
                        <th class="border border-gray-300 p-2 text-center font-semibold">Time</th>
                        <th class="border border-gray-300 p-2 text-center font-semibold">Cycles</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 p-2">Initialization</td>
                        <td class="border border-gray-300 p-2"></td>
                        <td class="border border-gray-300 p-2 text-center">98 °C</td>
                        <td class="border border-gray-300 p-2 text-center">30 s</td>
                        <td class="border border-gray-300 p-2 text-center">1</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2" rowspan="3">Amplification</td>
                        <td class="border border-gray-300 p-2">Denaturation</td>
                        <td class="border border-gray-300 p-2 text-center">98 °C</td>
                        <td class="border border-gray-300 p-2 text-center">10 s</td>
                        <td class="border border-gray-300 p-2 text-center" rowspan="3">42</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2">Annealing</td>
                        <td class="border border-gray-300 p-2 text-center">62 °C</td>
                        <td class="border border-gray-300 p-2 text-center">30 s</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2">Elongation</td>
                        <td class="border border-gray-300 p-2 text-center">72 °C</td>
                        <td class="border border-gray-300 p-2 text-center">30 s</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2">Final Elongation</td>
                        <td class="border border-gray-300 p-2"></td>
                        <td class="border border-gray-300 p-2 text-center">72 °C</td>
                        <td class="border border-gray-300 p-2 text-center">2 min</td>
                        <td class="border border-gray-300 p-2 text-center">1</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2">Final Hold</td>
                        <td class="border border-gray-300 p-2"></td>
                        <td class="border border-gray-300 p-2 text-center">4 °C</td>
                        <td class="border border-gray-300 p-2 text-center">forever</td>
                        <td class="border border-gray-300 p-2 text-center">1</td>
                    </tr>
                </tbody>
            </table>

            <h5><strong>Prepare the reaction product for agarose gel electrophoresis.</strong></h5>
            <p>5. After the PCR is complete, add _____ μl of 6x loading buffer to each tube.</p>

            <p>How should the 6x loading buffer be diluted? If your sample contains X μl, then you need to add Y μl of 6x loading buffer so that the final loading buffer concentration is 1x:</p>

            <div class="my-4 text-center">
                <img src="images/image0605.png" alt="Loading buffer dilution calculation diagram" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[200px]" onerror="this.onerror=null; this.src='https://placehold.co/200x200/e2e8f0/4a5568?text=Loading+Buffer+Calc'; this.alt='Placeholder: Loading Buffer Calculation';">
            </div>

            <div class="interactive-box">
    <h4>Loading Buffer Calculation</h4>
    <p class="text-sm mb-3">Calculate the volume of loading buffer needed for your PCR reaction:</p>
    <div class="calculator">
        <label>Sample volume: <input type="number" id="sample-volume" value="20"> µl</label><br>
        <label>Stock concentration: <input type="number" id="stock-concentration" value="6">x</label><br>
        <button onclick="calculateLoadingBuffer()">Calculate</button>
        <div id="loading-buffer-result" class="solution-details hidden mt-2"></div>
    </div>
</div>

            <p>The 6x loading buffer that you added to your samples is viscous and dense, allowing the mixture with DNA to sink to the bottom of the well of an agarose gel.</p>

            <p>6. Store samples on ice or at 4 °C until further use. (Samples will be examined using agarose gel electrophoresis later).</p>

            <h4 class="styled-h4">Questions/Tasks:</h4>
<div class="practice-problem-box">
    <h4>Analysis Questions</h4>
    <ul class="list-disc list-inside space-y-2">
        <li>Next, you will run your PCR products on a gel to analyze the bands. For which reactions do you expect to see bands?</li>
        <li>Do you expect all bands to have the same intensity? Why or why not?</li>
    </ul>
    
    <div class="mt-4">
        <button class="practice-toggle">Show Answer Guidelines</button>
        <div class="practice-answer hidden mt-2">
            <p><strong>Expected Results:</strong></p>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li><strong>Bands expected:</strong> Test reactions 1 & 2 for both insert and backbone PCR should show bands (template DNA present)</li>
                <li><strong>No bands expected:</strong> Negative controls should show no bands (no template DNA)</li>
                <li><strong>Intensity variation:</strong> Band intensity may vary due to differences in amplification efficiency, template quality, or primer binding kinetics</li>
            </ul>
        </div>
    </div>
</div>
            <h3>2. Agarose gel electrophoresis of the PCR products (insert and backbone)</h3>
            
            <h4 class="styled-h4">Background</h4>
            <p>Agarose gel electrophoresis is the standard tool for the analysis of DNA. Agarose gels are made by boiling agarose in water. Buffer is added either prior to or—for heat-sensitive buffers—after boiling. Once the agarose mixture cools, it sets and builds an "obstacle course" for the DNA. Small pieces of DNA can pass through the gel rapidly, while large pieces of DNA move slowly. The more concentrated the agarose, the more tightly spaced is the obstacle course mesh, and the more difficult it is for the DNA to move. Thus, for large fragments (greater than 4 kb), we use a gel containing a small percentage (mass per volume) of agarose; for small DNA fragments, a high percentage agarose gel is used. There are different types of agarose that differ in their degree of purity, best suitability for different DNA sizes, and melting temperature.</p>

            <h5><strong>Plasmid conformations:</strong></h5>
            <ul class="list-disc list-inside ml-4 space-y-2">
                <li><strong>Supercoiled:</strong> the native conformation of plasmid DNA in vivo. Its small, compact structure allows it to easily run through the tiny pores in an agarose gel matrix. This conformation of full-length plasmid DNA runs the FASTEST for its molecular weight.</li>
                <li><strong>Linear:</strong> plasmid DNA with cuts in both strands</li>
                <li><strong>Nicked circular:</strong> plasmid DNA with cuts or "nicks" in one or both strands; this releases the supercoiling and leaves a large, floppy circle with low mobility in agarose compared to the linearized or supercoiled plasmids.</li>
            </ul>

            <div class="my-6 text-center">
                <img src="images/image0606.png" alt="Plasmid conformations and their migration patterns in agarose gel" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/600x350/e2e8f0/4a5568?text=Plasmid+Conformations'; this.alt='Placeholder: Plasmid Conformations';">
                <p class="text-sm text-gray-600 mt-2">Different plasmid conformations and their migration patterns in agarose gel electrophoresis.</p>
            </div>

            <h5><strong>Reading gels:</strong></h5>
            <p>When bands don't appear as simple as predicted, consider</p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Conformation</li>
                <li>Partial digestion</li>
                <li>Multimers</li>
            </ul>

            <p>Multimers are fused products of several plasmids recombined together. Multimer formation occurs naturally when plasmids are cultivated in recA+ strains of bacteria. These plasmids are several times larger than the individual plasmid and therefore run very slowly in agarose (regardless of their conformation).</p>

            <p>We use a Tris-based buffer with pH 8.3, in which the phosphate groups of the DNA have a negative charge. The DNA is induced to move through the gel by placing an electric field across it. Because DNA is negatively charged, it migrates through the gel towards the positive pole (red electrode).</p>

            <h4 class="styled-h4">Procedure</h4>
            
            <p><strong>General:</strong></p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li>We will make a 1% (w/v) agarose gel that will allow us to visualize the PCR fragments.</li>
                <li>You should have six samples: three insert PCR products and three backbone PCR products.</li>
                <li>IMPORTANT: Always include at least one well with 5 μl of marker DNA (= DNA-ladder) during each run. We will use the 1 kb plus DNA ladder from NEB.</li>
            </ul>

            <div class="my-6 text-center">
                <img src="images/image0607.png" alt="1 kb Plus DNA Ladder from NEB" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[300px]" onerror="this.onerror=null; this.src='https://placehold.co/300x400/e2e8f0/4a5568?text=DNA+Ladder+NEB'; this.alt='Placeholder: DNA Ladder NEB';">
                <p class="text-sm text-gray-600 mt-2">1 kb Plus DNA Ladder (NEB)</p>
            </div>

            <h5><strong>Steps:</strong></h5>
            
            <h6><strong>Prepare a 1% agarose gel.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2">
                <li>Weigh 0.5 g of agarose in a clean Schott glass bottle.</li>
                <li>Add 50 ml of 1x TBE buffer and mix. If you don't know how to prepare TBE buffer, take a look <a href="https://www.sigmaaldrich.com/DE/en/technical-documents/protocol/protein-biology/gel-electrophoresis/tae-and-tbe-running-buffers-recipe" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">here</a></li>
                <li>Cook in a microwave until the agarose powder is completely dissolved. Swing the flask in between heating to support the melting processes. CAUTION: when boiling, solution and flask become extremely hot. ALWAYS carefully watch agarose solution during the boiling process to prevent it from spilling over. Use a sufficiently large vessel for the same reason.</li>
                <li>Swirl and check whether all of the agarose has dissolved.</li>
                <li>Allow the agarose to cool down for a few minutes. While you wait for the agarose to cool down, prepare the gel chamber by inserting the dams and combs.</li>
                <li>When the agarose has cooled to pouring temperature (around 55 °C), add 2.5 μl nucleic acid stain solution (e.g. SYBR Safe) and carefully swirl to mix (avoid air bubbles).</li>
                <li>Pour the gel into the gel chamber.</li>
                <li>Allow the gel to solidify at room temperature.</li>
            </ol>

            <div class="interactive-box">
                <h4>Safety Note: Agarose Gel Preparation</h4>
                <p class="text-sm mb-3">Why is it important to watch the agarose solution carefully while microwaving?</p>
                <div id="agarose-safety-quiz" class="space-y-1">
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">To ensure even heating</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="true">To prevent dangerous spill-over of boiling solution</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">To monitor complete dissolution</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">To control the temperature precisely</button>
                </div>
                <div id="agarose-safety-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <h6><strong>Load and run the gel.</strong></h6>
            <p>9. Pipette your samples into the wells of the agarose gel ("load the gel") as follows:</p>

            <table class="w-full border-collapse border border-gray-300 bg-white rounded-md shadow-sm my-4">
                <thead>
                    <tr class="bg-purple-100">
                        <th class="border border-gray-300 p-2 text-center font-semibold">Lane</th>
                        <th class="border border-gray-300 p-2 text-center font-semibold">Volume</th>
                        <th class="border border-gray-300 p-2 text-left font-semibold">Sample</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 p-2 text-center">1</td>
                        <td class="border border-gray-300 p-2 text-center">5 µl</td>
                        <td class="border border-gray-300 p-2">DNA ladder: Quick-Load 1 kb Plus DNA Ladder (NEB)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 text-center">2</td>
                        <td class="border border-gray-300 p-2 text-center">all (24 µl)</td>
                        <td class="border border-gray-300 p-2">Insert PCR sample 1</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 text-center">3</td>
                        <td class="border border-gray-300 p-2 text-center">all (24 µl)</td>
                        <td class="border border-gray-300 p-2">Insert PCR sample 2</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 text-center">4</td>
                        <td class="border border-gray-300 p-2 text-center">all (24 µl)</td>
                        <td class="border border-gray-300 p-2">Insert PCR sample 3 (negative control)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 text-center">5</td>
                        <td class="border border-gray-300 p-2 text-center">-</td>
                        <td class="border border-gray-300 p-2">-</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 text-center">6</td>
                        <td class="border border-gray-300 p-2 text-center">all (24 µl)</td>
                        <td class="border border-gray-300 p-2">Backbone PCR sample 1</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 text-center">7</td>
                        <td class="border border-gray-300 p-2 text-center">all (24 µl)</td>
                        <td class="border border-gray-300 p-2">Backbone PCR sample 2</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 text-center">8</td>
                        <td class="border border-gray-300 p-2 text-center">all (24 µl)</td>
                        <td class="border border-gray-300 p-2">Backbone PCR sample 3 (negative control)</td>
                    </tr>
                </tbody>
            </table>

            <ol class="list-decimal list-inside ml-4 space-y-2" start="10">
                <li>Run the gel at 100-120 V for 30–45 minutes (stop it the latest before the tracking dyes do migrate off the gel!).</li>
            </ol>

            <h6><strong>Identify and excise the bands containing your DNA fragments of interest.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="11">
                <li>At the end of the run, examine the gel using an illuminator.</li>
                <li>Obtain and label a photograph of the gel for your lab notebook. Describe anything that you think is interesting.</li>
                <li>Excise the band(s) you want using a clean scalpel or razor blade, and transfer the gel slice to a sterile, labeled Eppendorf tube.</li>
                <li>Determine the mass in mg of each gel slice, and record this value in your lab notebook and on the tube.</li>
            </ol>

            <p class="text-sm text-gray-600 ml-4">Use an empty microcentrifuge tube to set the balance to ZERO.</p>

            <ol class="list-decimal list-inside ml-4 space-y-2" start="16">
                <li>Store the tube at 4 °C overnight or proceed with the next step.</li>
            </ol>

            <h4 class="styled-h4">Questions/Tasks:</h4>
<div class="practice-problem-box">
    <h4>Gel Analysis Questions</h4>
    <ul class="list-disc list-inside space-y-2">
        <li>For which PCR reactions do you expect to see bands?</li>
        <li>Why is it important to verify both PCR products before Golden Gate assembly?</li>
    </ul>
    
    <div class="mt-4">
        <button class="practice-toggle">Show Analysis Guidelines</button>
        <div class="practice-answer hidden mt-2">
            <p><strong>Expected Results:</strong></p>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li><strong>Bands expected:</strong> Lanes 2, 3, 6, 7 (test reactions with template)</li>
                <li><strong>No bands expected:</strong> Lanes 4, 8 (negative controls)</li>
                <li><strong>Verification importance:</strong> Both fragments must be verified for correct size and purity before proceeding to Golden Gate assembly to ensure successful cloning</li>
            </ul>
        </div>
    </div>
</div>

            <h3>3. Purification of PCR products (insert and backbone) from an agarose gel</h3>
            
            <h4 class="styled-h4">Background</h4>
            <p>Both the insert PCR product and the backbone PCR product must be gel-purified before Golden Gate assembly. There are many different methods for purifying DNA out of agarose gels. You can, in order of increasing expense:</p>

            <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Melt the agarose slice (containing your DNA fragment of interest) and phenol-extract the DNA.</li>
                <li>Spin the chopped-up slice of agarose over glass wool and collect the flow-through; phenolextract the DNA.</li>
                <li>Bind the DNA to DEAE paper, by electrophoresis. (The paper is placed just in front of the DNA band).</li>
                <li>Electro-elute the DNA out of the gel slice into a special chamber.</li>
                <li>Bind the DNA to special tiny glass beads, wash the beads multiple times, then elute with salt.</li>
                <li>Extract the DNA using a miniature ion-exchange column.</li>
            </ul>

            <p>Some of these methods take a long time, involve the use of toxic/aggressive components (phenol, for example), or involve many manipulations, so can only be recommended if you have very few samples that have to be extremely clean. We will use the miniature ion-exchange column method.</p>

            <p>There are several commercial kits available for purifying DNA from agarose gels using this method. All follow the same principles. First, the gel is melted in an appropriate buffer solution at an elevated temperature. The volume of buffer solution that is used is determined according to the mass of the excised band and the percentage of agarose in the cell (e.g., 200 μl of solubilization buffer for each 100 mg of agarose in a 2% agarose gel). An affinity column is then used to separate the DNA from the rest of the solution. The column is washed to remove contaminants, and finally, the DNA is eluted from the columns for further use. We will use the GeneJET Gel extraction Kit from Thermo Scientific.</p>

            <h4 class="styled-h4">Procedure</h4>
            
            <p><strong>General:</strong></p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li>All purification steps should be carried out at room temperature.</li>
                <li>All centrifugations should be carried out in a table-top microcentrifuge at >12000 rpm.</li>
                <li>If you use a different Gel extraction Kit make sure to follow the manufacturer's instructions for steps 1-10 (may be similar to this protocol).</li>
            </ul>

            <h5><strong>Steps:</strong></h5>
            
            <h6><strong>Dissolve the gel in buffer solution.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2">
                <li>Set a heat block or water bath to 56 °C.</li>
                <li>Add an appropriate volume of Binding Buffer each tube containing agarose depending on the weight of your excised band.</li>
            </ol>

            <p class="ml-4 text-sm">Use 100 μl of Binding Buffer for each 100 mg of agarose.</p>

            <ol class="list-decimal list-inside ml-4 space-y-2" start="3">
                <li>Incubate for 10–15 minutes at 56 °C.</li>
            </ol>

            <p class="ml-4 text-sm"><strong>IMPORTANT:</strong> The agarose has to dissolve completely before moving to the next step. You can mix the tube by inversion every few minutes to facilitate the melting process.</p>

            <ol class="list-decimal list-inside ml-4 space-y-2" start="4">
                <li>Allow the gel mixture to cool down to room temperature.</li>
            </ol>

            <div class="interactive-box">
                <h4>Buffer Volume Calculation</h4>
                <p class="text-sm mb-3">If you have a gel slice weighing 150 mg, how much Binding Buffer should you add?</p>
                <div class="calculator">
                    <label>Gel slice weight: <input type="number" id="gel-weight" value="150"> mg</label><br>
                    <label>Buffer ratio: 100 μl per 100 mg agarose</label><br>
                    <button onclick="calculateBindingBuffer()">Calculate</button>
                    <div id="binding-buffer-result" class="solution-details hidden mt-2"></div>
                </div>
            </div>

            <h6><strong>Load and wash the affinity column.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="5">
                <li>Transfer up to 800 μl of the solubilized gel solution to the GeneJET purification column, and centrifuge for 1 min. Discard the flow-through and place the column back into the same collection tube. If the total volume of gel solution exceeds 800 μl, repeat this step until there is no gel solution left.</li>
                <li>Add 500 μl of Binding Buffer to the column, and centrifuge for 1 min. Discard the flow-through and place the column back into the same collection tube.</li>
                <li>Add 700 μl of Wash Buffer to the column, and incubate at room temperature for 5 min. Centrifuge for 1 min. Discard the flow-through and place the column back into the same collection tube.</li>
                <li>Centrifuge the empty GeneJET purification column for an additional 2 min to completely remove any residual Wash Buffer.</li>
            </ol>

            <p class="ml-4 text-sm">Wash Buffer contains ethanol. The presence of ethanol in the final eluate can inhibit downstream reactions.</p>

            <h6><strong>Elute the DNA and measure its concentration.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="9">
                <li>Transfer the GeneJET purification column to a new, clean, 1.5 ml microcentrifuge tube. Add 30 μl nuclease free water to the center of the column membrane, wait 1 min, and then centrifuge for 1 min.</li>
                <li>Optional: to increase DNA yield, repeat step 8 again with the eluate obtained after centrifugation.</li>
                <li>Using a NanoDrop UV/Vis spectrophotometer, determine the concentration in ng/μl of your purified DNA.</li>
                <li>Calculate the total yield in μg of your purified product. Since you know the amount of DNA you put in your digestion reaction, you can also determine the percentage of DNA that was recovered from the gel.</li>
            </ol>

            <h4 class="styled-h4">Questions/Tasks:</h4>
            <div class="practice-problem-box">
                <h4>Purification Analysis</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>What was the yield of your purified DNA from the gel in μg?</li>
                    <li>What amount of DNA (in percent) did you lose from the total that had been used for the digestion?</li>
                </ul>
                
                <div class="mt-4">
                    <button class="practice-toggle">Show Calculation Help</button>
                    <div class="practice-answer hidden mt-2">
                        <p><strong>Yield Calculation Example:</strong></p>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Total yield (μg) =</strong> Concentration (ng/μl) × Volume (μl) ÷ 1000</li>
                            <li><strong>Recovery (%) =</strong> (Amount recovered / Amount input) × 100</li>
                            <li><strong>Typical recovery:</strong> 60-80% for gel purification is normal</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3>4. Golden Gate Assembly</h3>
            
            <h4 class="styled-h4">Background</h4>
            <p>During Golden Gate Assembly, we will combine the purified PCR products (insert and backbone), BsaI restriction enzyme, and DNA ligase in a single reaction tube. Unlike traditional cloning, Golden Gate Assembly uses <strong>thermocycling</strong> to alternate between temperatures that favor restriction enzyme digestion (37°C) and DNA ligase activity (16°C). This cycling process ensures that incorrectly assembled products are continuously digested while correctly assembled constructs accumulate.</p>

            <h5><strong>BsaI: The Key to Golden Gate Efficiency</strong></h5>
            <p>In our case Golden Gate Assembly relies on <strong>BsaI</strong>, a Type IIS restriction enzyme that recognizes the sequence 5'-GGTCTC-3' but cuts 1 nucleotide downstream, creating programmable 4-base overhangs. Unlike traditional restriction enzymes (such as BglII and HindIII) that cut within their recognition sequences, BsaI's unique cutting pattern allows us to design any 4-base overhang independent of the enzyme's binding site. This is why our PCR primers contain BsaI sites followed by custom overhangs that direct specific assembly.</p>

            <h5><strong>Optimized Reaction Conditions</strong></h5>
            <p>Restriction enzyme activity is measured in units (U), where 1U digests 1 μg of DNA in one hour under optimal conditions. For this reaction, we will manually combine T4 DNA ligase buffer, BsaI restriction enzyme, and T4 DNA ligase. Unlike pre-made master mixes, this approach allows us to optimize concentrations for our specific fragments.</p>

            <h5><strong>Assembly Mechanism</strong></h5>
            <p>The custom 4-base overhangs created by BsaI digestion were designed during the PCR primer step to be complementary between insert and backbone fragments. These complementary overhangs anneal by hydrogen bonding, and ligase catalyzes the formation of phosphodiester bonds in the DNA sugar-phosphate backbone between 5'-phosphorylated and 3'-hydroxylated ends (see the following figure). The beauty of Golden Gate is that <strong>digestion and ligation occur simultaneously</strong>, with the thermocycling protocol alternating between optimal temperatures for each enzyme (BsaI restriction enzyme and T4 DNA ligase), driving the reaction toward the correctly assembled product.</p>

            <div class="my-6 text-center">
                <img src="images/image0608.png" alt="Three-step pathway of nick sealing by DNA ligase" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[400px]" onerror="this.onerror=null; this.src='https://placehold.co/400x450/e2e8f0/4a5568?text=DNA+Ligase+Mechanism'; this.alt='Placeholder: DNA Ligase Mechanism';">
                <p class="text-sm text-gray-600 mt-2">The figure describes the three-step pathway of nick sealing by DNA ligase. Figure from Shuman, JBC 2000: doi.org/10.1074/jbc.R900017200.</p>
            </div>

            <h5><strong>Calculating Fragment Ratios</strong></h5>
            <p>In Golden Gate Assembly, the molar ratio of insert DNA to backbone DNA should typically be between 1:1 and 3:1, but optimal ratios can be determined empirically. For this reaction, we will use a ratio of 2:1 insert DNA to backbone DNA. Our purified insert PCR product has a length of <strong>X</strong> base pairs (bp), and our purified backbone PCR product has a length of <strong>Y</strong> bp (Length of PCR products can be looked up in SnapGene). Thus, for every 1 ng of vector backbone DNA we include in the reaction, we should add <strong>Z</strong> ng of insert DNA:</p>

            <p class="formula">1 ng backbone × (2/1) × (<strong>X</strong> bp/<strong>Y</strong> bp) = <strong>Z</strong> ng insert needed.</p>

            <p>We will use 75 ng backbone, so the obtained insert mass needs to be multiplied by 75 as well.</p>

            <div class="interactive-box">
                <h4>Molar Ratio Calculation</h4>
                <p class="text-sm mb-3">Calculate the insert mass needed for Golden Gate Assembly:</p>
                <div class="calculator">
                    <label>Insert length: <input type="number" id="insert-length" placeholder="bp"> bp</label><br>
                    <label>Backbone length: <input type="number" id="backbone-length" placeholder="bp"> bp</label><br>
                    <label>Backbone amount: <input type="number" id="backbone-amount" value="75"> ng</label><br>
                    <label>Molar ratio (insert:backbone): <input type="number" id="molar-ratio" value="2">:1</label><br>
                    <button onclick="calculateInsertMass()">Calculate Insert Mass</button>
                    <div id="insert-mass-result" class="solution-details hidden mt-2"></div>
                </div>
            </div>

            <h4 class="styled-h4">Procedure</h4>
            <p>We will use the gel-purified PCR products (insert and backbone) in a Golden Gate Assembly reaction using BsaI, T4 DNA ligase, and T4 DNA ligase buffer.</p>

            <p><strong>General:</strong></p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li>Use 0.2 ml PCR tubes</li>
                <li>Prepare two reactions: one complete assembly reaction and one negative control without insert</li>
                <li>Remember to label each tube</li>
            </ul>

            <h5><strong>Steps:</strong></h5>
            
            <h6><strong>Prepare the Golden Gate Assembly reaction.</strong></h6>
            <p>1. Calculate the volumes you need for the assembly reaction.</p>

            <p>Golden Gate Assembly of purified insert and backbone PCR products:</p>

            <table class="w-full border-collapse border border-gray-300 bg-white rounded-md shadow-sm my-4">
    <thead>
        <tr class="bg-purple-100">
            <th class="border border-gray-300 p-2 text-left font-semibold">Component</th>
            <th class="border border-gray-300 p-2 text-center font-semibold">Amount needed</th>
            <th class="border border-gray-300 p-2 text-center font-semibold">Complete Assembly</th>
            <th class="border border-gray-300 p-2 text-center font-semibold">No-insert control</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-gray-300 p-2">T4 Ligase Buffer (10x)</td>
            <td class="border border-gray-300 p-2 text-center">1x</td>
            <td class="border border-gray-300 p-2 text-center">2 µl</td>
            <td class="border border-gray-300 p-2 text-center">2 µl</td>
        </tr>
        <tr>
            <td class="border border-gray-300 p-2">Purified Backbone PCR product (m = 75 ng)</td>
            <td class="border border-gray-300 p-2 text-center">calculated based on conc.</td>
            <td class="border border-gray-300 p-2 text-center"><input type="number" step="0.1" id="gg-backbone-complete" class="pcr-input" placeholder="µl"></td>
            <td class="border border-gray-300 p-2 text-center"><input type="number" step="0.1" id="gg-backbone-control" class="pcr-input" placeholder="µl"></td>
        </tr>
        <tr>
            <td class="border border-gray-300 p-2">Purified Insert PCR product (m = needs to be calculated)</td>
            <td class="border border-gray-300 p-2 text-center">calculated based on conc.</td>
            <td class="border border-gray-300 p-2 text-center"><input type="number" step="0.1" id="gg-insert-complete" class="pcr-input" placeholder="µl"></td>
            <td class="border border-gray-300 p-2 text-center">-</td>
        </tr>
        <tr>
            <td class="border border-gray-300 p-2">BsaI restriction enzyme</td>
            <td class="border border-gray-300 p-2 text-center">0.5 µl/reaction</td>
            <td class="border border-gray-300 p-2 text-center">0.5 µl</td>
            <td class="border border-gray-300 p-2 text-center">0.5 µl</td>
        </tr>
        <tr>
            <td class="border border-gray-300 p-2">T4 DNA Ligase</td>
            <td class="border border-gray-300 p-2 text-center">0.5 µl/reaction</td>
            <td class="border border-gray-300 p-2 text-center">0.5 µl</td>
            <td class="border border-gray-300 p-2 text-center">0.5 µl</td>
        </tr>
        <tr>
            <td class="border border-gray-300 p-2">H₂O</td>
            <td class="border border-gray-300 p-2 text-center">to final volume</td>
            <td class="border border-gray-300 p-2 text-center" id="gg-h2o-complete">REST = 17.0 µl</td>
            <td class="border border-gray-300 p-2 text-center" id="gg-h2o-control">REST = 17.0 µl</td>
        </tr>
        <tr class="bg-orange-50">
            <td class="border border-gray-300 p-2 font-semibold">Total Volume</td>
            <td class="border border-gray-300 p-2 text-center">-</td>
            <td class="border border-gray-300 p-2 text-center font-semibold">20 µl</td>
            <td class="border border-gray-300 p-2 text-center font-semibold">20 µl</td>
        </tr>
    </tbody>
</table>

            <ol class="list-decimal list-inside ml-4 space-y-2" start="2">
                <li>Pipette the components in the following order: first water, then buffer, then backbone, then insert, and finally BsaI and T4 DNA ligase.</li>
                <li>Mix by pipetting up and down gently.</li>
                <li>Briefly ("touch") centrifuge the liquid to the bottom of the tubes.</li>
            </ol>

            <h6><strong>Run the Golden Gate thermocycling protocol.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="5">
                <li>Place tubes in a thermocycler and run the following program:</li>
            </ol>

            <ul class="list-disc list-inside ml-8 space-y-1">
                <li>30 cycles of: 37°C for 1 minute, 16°C for 1 minute</li>
                <li>Final step: 37°C for 5 minutes (inactivates BsaI)</li>
                <li>Hold at 4°C</li>
            </ul>

            <ol class="list-decimal list-inside ml-4 space-y-2" start="6">
                <li>When the reaction is complete, place tubes on ice/in the fridge until transformation.</li>
            </ol>

            <h4 class="styled-h4">Questions/Tasks:</h4>
            <div class="practice-problem-box">
                <h4>Golden Gate Assembly Understanding</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>Why does Golden Gate Assembly use thermocycling instead of a single temperature incubation?</li>
                    <li>How do the designed overhangs ensure that fragments assemble only in the correct orientation?</li>
                    <li>What advantage does the simultaneous digestion-ligation process provide over traditional cloning methods?</li>
                    <li>Why is BsaI's Type IIS cutting pattern essential for Golden Gate Assembly to work?</li>
                </ul>
                
                <div class="mt-4">
                    <button class="practice-toggle">Show Answer Guidelines</button>
                    <div class="practice-answer hidden mt-2">
                        <p><strong>Key Concepts:</strong></p>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Thermocycling:</strong> Alternates between optimal temperatures for BsaI (37°C) and T4 ligase (16°C), ensuring efficient digestion and ligation</li>
                            <li><strong>Designed overhangs:</strong> Custom 4-base sequences ensure fragments only ligate in the correct order and orientation</li>
                            <li><strong>Simultaneous process:</strong> Eliminates separate purification steps between digestion and ligation, reducing time and loss</li>
                            <li><strong>Type IIS pattern:</strong> Cuts outside recognition sequence, allowing custom overhang design independent of enzyme binding site</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3>5. Transformation of Escherichia coli DH5α</h3>
            
            <p>The ligation reaction product will be used to transform competent E. coli DH5α cells and to select for colonies that transmit the desired recombinant plasmids conferring antibiotic resistance. Most labs have a protocol for making competent E. coli for transformation; it involves various incubations with buffers containing calcium and rubidium chloride. We typically make competent E. coli in large batches and store them at –80°C. Competent cells can also be purchased, but this is more expensive.</p>

            <p>How to perform a transformation and everything needed for this technique is also explained in a video of our Wetlab series.</p>

            <div class="highlight-note">
                <p><strong>[Wetlab series video Transformation]</strong></p>
            </div>

            <h4 class="styled-h4">Procedure</h4>
            
            <h5><strong>Steps:</strong></h5>
            
            <h6><strong>Preparation:</strong></h6>
            <ul class="list-disc list-inside ml-4 space-y-2">
                <li>First you need to prepare LB-Agar-plates on which we will later plate our bacteria. Further we also need LB-Medium for the next day.</li>
                <li>To prepare these things you need LB-powder and Agar-powder. Further you also need an antibiotic that will be added to the LB-Agar plates for selection of our plasmid.</li>
                <li>To prepare LB-Agar plates you need 15 g/l Agar and 20 g/l LB-Medium. 250 ml will be more than enough for us, so use 3.75 g Agar-Powder and 5 g LB-powder and add 250 ml dH2O to it. If it is possible you can also autoclave the mixture before usage (recommended). The flask with Agar, LB and dH2O in it needs to be put in a microwave to heat and liquify the Agar. Be careful! You need to open the lid of the flask and let the open lid lay on the flask. Otherwise the flask can explode in the microwave!!! also always check that the agar does not spill out of the flask. If it starts cooking and you see bubbles then you can take it out and check if the whole agar is liquified. Continue until this is the case. Then let it cool down until 55°C and add the respective antibiotic, e.g. ampicillin. Which antibiotic you should use depends on the antibiotic resistance gene that your plasmid has e.g. an ampicillin resistance gene means you should use ampicillin. The concentration of antibiotics you should use can be found <a href="https://www.addgene.org/protocols/pouring-lb-agar-plates/" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">here</a>. Then you can pour the LB-Agar into petri dishes on which we will plate the cells later on.</li>
                <li>You need 20 g/l LB for 1 l LB-Medium. In our case 500 ml LB will be more than enough. So take a 1 l glass flask and add 10 g LB-powder to it and subsequently 500 ml of dH2O. If it is possible you can also autoclave the mixture before usage (recommended).</li>
                <li>Now you can split the LB-Medium equally into <strong>two</strong> flasks. To <strong>one</strong> of the flasks we will now add an antibiotic e.g. Ampicillin. The concentration of antibiotics you should use can be found <a href="https://www.addgene.org/protocols/pouring-lb-agar-plates/" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">here</a>. It is important to <strong>not</strong> add antibiotics to the second LB-Medium flask.</li>
                <li>You can store both, LB-Media and LB-Agar-plates in the fridge.</li>
            </ul>

            <div class="interactive-box">
                <h4>Media Preparation Safety</h4>
                <p class="text-sm mb-3">Why must you leave the flask lid open (but placed on top) when microwaving LB-Agar?</p>
                <div id="media-safety-quiz" class="space-y-1">
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">To allow even heating</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="true">To prevent pressure buildup that could cause explosion</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">To monitor agar dissolution</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">To prevent contamination</button>
                </div>
                <div id="media-safety-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <h6><strong>Thaw competent cells on ice.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2">
                <li>Thaw a tube containing 50 μl of competent cells on ice for 10 min. (A protocol for making cells competent can be found <a href="https://www.embl.org/groups/protein-expression-purification/protocols/preparation-of-chemically-competent-e-coli-cells/" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">here</a>)</li>
                <li>Label an Eppendorf tube and place it on ice.</li>
            </ol>

            <h6><strong>Incubate the DNA with competent cells on ice.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="3">
                <li>Briefly ("touch") centrifuge your ligation product.</li>
                <li>Pipette 2 µl of the ligation product into the tube containing the cells.</li>
                <li>Gently tap the tube 4-5 times to mix, and place it on ice for 30 min (do not vortex). Do not mix. Do not disturb.</li>
                <li>While the cells are incubating, set a heat block to EXACTLY 42°C.</li>
            </ol>

            <h6><strong>Heat shock the competent cells.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="7">
                <li>Place the tubes into the heat block for exactly 30 seconds, then return them to ice.</li>
                <li>Incubate the tubes for 5 minutes on ice.</li>
            </ol>

            <h6><strong>Outgrowth incubation: the cells recover and develop antibiotic resistance.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="9">
                <li>Add 250 µl LB-Medium (without antibiotics!) to the tube and incubate (shaking) on a heat block at 37°C for 30 min.</li>
            </ol>

            <h6><strong>Plate the cells.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="11">
                <li>Label LB-agar-plates on the bottom, NOT the lid. Include your initials, date, the plasmid and bacteria strain e.g. DH5-alpha.</li>
            </ol>

            <p class="text-sm text-gray-600 ml-4">If only the lids were labeled, and the lids were to become separated from the plates, you would no longer be able to identify which plate was which.</p>

            <ol class="list-decimal list-inside ml-4 space-y-2" start="12">
                <li>Dispense the bacterial solution onto a LB-agar-plate.</li>
                <li>Spread the bacteria evenly onto each plate using an inoculation loop or glass beads.</li>
                <li>Leave the plates slightly open on the bench for 5 minutes.</li>
            </ol>

            <p class="text-sm text-gray-600 ml-4">This short incubation time allows the medium in which the bacteria were suspended to be absorbed by the LB-agar.</p>

            <h6><strong>Incubate the plates overnight.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="18">
                <li>Lid the plates and place them lid-side-down in the 37°C incubator for overnight incubation.</li>
            </ol>

            <h4 class="styled-h4">Questions/Tasks:</h4>
            <div class="practice-problem-box">
                <h4>Transformation Questions</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>Why do you think it is necessary to heat-shock the bacteria during transformation?</li>
                    <li>Why do we add ampicillin to the LB-agar plates?</li>
                </ul>
                
                <div class="mt-4">
                    <button class="practice-toggle">Show Answer Guidelines</button>
                    <div class="practice-answer hidden mt-2">
                        <p><strong>Key Concepts:</strong></p>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Heat shock:</strong> Creates temporary pores in bacterial cell walls, allowing DNA uptake</li>
                            <li><strong>Antibiotic selection:</strong> Only bacteria that took up the plasmid (with resistance gene) can survive and grow</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3>6. Inoculation of cultures</h3>
            
            <h4 class="styled-h4">Procedure</h4>
            
            <h6><strong>Examine the selection plates.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2">
                <li>Examine your bacterial selection plate, and count the number of colonies. Record the number of colonies on the plate and here:</li>
            </ol>

            <div class="interactive-box">
    <h4>Colony Count Recording</h4>
    <div class="calculator">
        <label>Sample: <input type="text" id="sample-name" placeholder="Enter sample name"></label><br>
        <label>Colonies: <input type="number" id="colony-count" placeholder="Number of colonies"></label><br>
        <button onclick="recordColonyCount()">Record Count</button>
        <div id="colony-count-result" class="solution-details hidden mt-2"></div>
    </div>
    
    <div class="mt-4">
        <h5><strong>Recorded Samples:</strong></h5>
        <table class="w-full border-collapse border border-gray-300 bg-white rounded-md shadow-sm mt-2">
            <thead>
                <tr class="bg-purple-100">
                    <th class="border border-gray-300 p-2 text-left font-semibold">Sample</th>
                    <th class="border border-gray-300 p-2 text-center font-semibold">Number of Colonies</th>
                </tr>
            </thead>
            <tbody id="colony-count-table">
                <tr><td class="border border-gray-300 p-2 text-gray-400">No data recorded</td><td class="border border-gray-300 p-2 text-center text-gray-400">-</td></tr>
                <tr><td class="border border-gray-300 p-2"></td><td class="border border-gray-300 p-2"></td></tr>
                <tr><td class="border border-gray-300 p-2"></td><td class="border border-gray-300 p-2"></td></tr>
                <tr><td class="border border-gray-300 p-2"></td><td class="border border-gray-300 p-2"></td></tr>
                <tr><td class="border border-gray-300 p-2"></td><td class="border border-gray-300 p-2"></td></tr>
                <tr><td class="border border-gray-300 p-2"></td><td class="border border-gray-300 p-2"></td></tr>
                <tr><td class="border border-gray-300 p-2"></td><td class="border border-gray-300 p-2"></td></tr>
                <tr><td class="border border-gray-300 p-2"></td><td class="border border-gray-300 p-2"></td></tr>
                <tr><td class="border border-gray-300 p-2"></td><td class="border border-gray-300 p-2"></td></tr>
                <tr><td class="border border-gray-300 p-2"></td><td class="border border-gray-300 p-2"></td></tr>
            </tbody>
        </table>
    </div>
</div>

<h5><strong>Questions/Tasks:</strong></h5>
<p>• Why do you see many/few/no colonies? Think about answers for each scenario.</p>

<div class="practice-problem-box">
    <h4>Colony Count Analysis</h4>
    <p>Consider the different scenarios you might observe:</p>
    
    <div class="mt-4">
        <button class="practice-toggle">Show Scenario Analysis</button>
        <div class="practice-answer hidden mt-2">
            <p><strong>Colony Count Scenarios:</strong></p>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li><strong>Many colonies (>100):</strong> Successful transformation with high competency cells, optimal DNA concentration, or possible contamination</li>
                <li><strong>Few colonies (10-50):</strong> Normal transformation efficiency, appropriate for clone selection and analysis</li>
                <li><strong>Very few colonies (1-10):</strong> Low transformation efficiency due to poor competent cells, suboptimal DNA concentration, or harsh selection conditions</li>
                <li><strong>No colonies:</strong> Failed transformation due to incompetent cells, no DNA uptake, lethal selection pressure, or incorrect antibiotic concentration</li>
            </ul>
        </div>
    </div>
</div>

            <h6><strong>Inoculate miniprep cultures.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="2">
                <li>Prepare a 15 ml tube with 5 ml LB (with antibiotic; this medium was already prepared!)</li>
                <li>Label 2 tubes, with bacteria carrying plL001_3xFLAG-LMNB1 and in addition to the plasmid name, your initials and the date also write C1 or C2 (= clone1 or clone2) on them.</li>
                <li>For each tube, pick a single colony with a sterile P200/P20 pipette tip, and throw the tip into the tube.</li>
                <li>Place the tubes at 37°C for 12–16 hours (overnight) with vigorous shaking (~200 rpm) into a multitron.</li>
            </ol>
            <h3>7. Plasmid DNA purification (miniprep)</h3>
            
            <p>The aim of the following procedure is to purify a small quantity ("miniprep") of highly pure plasmid DNA. The miniprep procedure we are using for this practical course is based on well-established alkaline lysis protocols, with the exception that an ion exchange purification column containing a silica matrix is used to isolate the plasmid DNA in the last steps (see following Figure).</p>

            <div class="my-6 text-center">
                <img src="images/image0609.png" alt="Overview of miniprep procedure steps" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/600x500/e2e8f0/4a5568?text=Miniprep+Overview'; this.alt='Placeholder: Miniprep Overview';">
                <p class="text-sm text-gray-600 mt-2">The figure shows an overview of the steps involved in small-scale plasmid DNA purification (miniprep). Figure modified from biorender.com.</p>
            </div>

            <p>How to perform a miniprep to purify plasmid DNA from bacteria cultures is also explained in another video of our Wetlab series.</p>

            <div class="highlight-note">
                <p><strong>[Wetlab series video Miniprep]</strong></p>
            </div>

            <h4 class="styled-h4">Procedure</h4>
            <p>For this practical course, we will purify plasmid DNA using the commercially available Monarch Plasmid Miniprep Kit from New England BioLabs according to the manufacturer's instructions. If you are using a different Miniprep Kit make sure to conduct the steps according to the manufacturer's instructions of your kit (may be similar to the steps down here).</p>

            <h5><strong>Steps:</strong></h5>
            
            <h6><strong>Harvest and lyse bacteria.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2">
                <li>Label two 2 ml microcentrifuge tubes (one for each of your overnight bacterial cultures).</li>
                <li>Carefully pipette 2.0 ml of the overnight culture from the 15 ml tubes into each microcentrifuge tube (= Eppendorf tube).</li>
            </ol>

            <div class="my-4 text-center">
                <img src="images/image0610.png" alt="Pipetting bacterial culture into microcentrifuge tube" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[250px]" onerror="this.onerror=null; this.src='https://placehold.co/250x150/e2e8f0/4a5568?text=Culture+Transfer'; this.alt='Placeholder: Culture Transfer';">
            </div>

            <ol class="list-decimal list-inside ml-4 space-y-2" start="3">
                <li>Pellet the bacteria by centrifugation at maximum speed for 1 minute.</li>
                <li>Remove the supernatant by decanting into a glass beaker.</li>
            </ol>

            <div class="my-4 text-center">
                <img src="images/image0611.png" alt="Bacterial pellet after centrifugation" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[300px]" onerror="this.onerror=null; this.src='https://placehold.co/300x250/e2e8f0/4a5568?text=Bacterial+Pellet'; this.alt='Placeholder: Bacterial Pellet';">
            </div>

            <div class="highlight-note">
                <p><strong>Important:</strong> This solution comprises biological waste and will be autoclaved prior to subsequent disposal. Do NOT dispose of the supernatant in the sink!!</p>
            </div>

            <p class="ml-4">Then repeat steps 2-4 again and add 2 ml from the <strong>same</strong> 15 ml tube to the <strong>same</strong> microcentrifuge tube.</p>

            <ol class="list-decimal list-inside ml-4 space-y-2" start="5">
                <li>Resuspend the bacterial pellet in 200 μl Plasmid Resuspension Buffer (B1). Pipette well to ensure that the cells are completely resuspended. There should be no visible clumps.</li>
                <li>Lyse cells by adding 200 μl Plasmid Lysis Buffer (B2). Invert the tube immediately and gently 5–6 times. Do not vortex! Incubate for one minute.</li>
            </ol>

            <p class="text-sm text-gray-600 ml-4">The color should change to dark pink, and the solution will become transparent and viscous.</p>

            <h6><strong>Prepare cleared lysate.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="7">
                <li>Neutralize the lysate by adding 400 μl of Plasmid Neutralization Buffer (B3). Gently invert the tube until a precipitate forms. It will be a bit like flakes of snow. Do not vortex! Incubate for 2 minutes.</li>
            </ol>

            <p class="text-sm text-gray-600 ml-4">Be careful not to shear DNA by vortexing or vigorous shaking. Firmly inverting the tube promotes good mixing, which is important for full neutralization. The sample is neutralized when the color is uniformly yellow and a precipitate forms.</p>

            <ol class="list-decimal list-inside ml-4 space-y-2" start="8">
                <li>Clarify the lysate by centrifuging for 5 minutes at maximum speed.</li>
            </ol>

            <div class="interactive-box">
    <h4>Miniprep Understanding</h4>
    <p class="text-sm mb-3">What is the primary purpose of the neutralization step (step 7) in the miniprep procedure?</p>
    <div id="miniprep-neutralization-quiz" class="space-y-1">
        <button class="quiz-option text-xs sm:text-sm" data-correct="false">To precipitate the plasmid DNA</button>
        <button class="quiz-option text-xs sm:text-sm" data-correct="true">To neutralize the alkaline lysis and precipitate proteins/genomic DNA</button>
        <button class="quiz-option text-xs sm:text-sm" data-correct="false">To wash away cellular debris</button>
        <button class="quiz-option text-xs sm:text-sm" data-correct="false">To activate the binding column</button>
    </div>
    <div id="miniprep-neutralization-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
</div>

            <h6><strong>Bind plasmid DNA to the column and wash to remove contaminants.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="9">
                <li>Carefully transfer the supernatant to the binding column placed in a collection tube and centrifuge for 1 minute. Discard the flow-through into a glass beaker.</li>
            </ol>

            <div class="my-4 text-center">
                <img src="images/image0612.png" alt="Transferring supernatant to binding column" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[200px]" onerror="this.onerror=null; this.src='https://placehold.co/200x150/e2e8f0/4a5568?text=Column+Transfer'; this.alt='Placeholder: Column Transfer';">
            </div>

            <ol class="list-decimal list-inside ml-4 space-y-2" start="10">
                <li>Place the column back into the collection tube and add 200 μl of Plasmid Wash Buffer 1. Centrifuge for 1 minute. Discard the flow-through. Plasmid Wash Buffer 1 removes RNA, protein, and endotoxins.</li>
                <li>Add 400 μl of Plasmid Wash Buffer 2 to the column, and centrifuge for 1 minute. Plasmid Wash Buffer 2 removes salts.</li>
                <li>Discard the flow-through and place the column back into the collection tube. Centrifuge the column for an additional 1 minute to dry the column.</li>
            </ol>

            <p class="text-sm text-gray-600 ml-4">Plasmid Wash Buffer 2 contains ethanol. The presence of ethanol in the final eluate can inhibit downstream reactions. Therefore it is important to completely remove the ethanol from the sample.</p>

            <h6><strong>Elute the purified plasmid DNA.</strong></h6>
            <ol class="list-decimal list-inside ml-4 space-y-2" start="13">
                <li>Transfer the column to a clean 1.5 ml microcentrifuge tube. Add ≥ 30 μl DNA Elution Buffer (or nuclease-free water) to the center of the matrix. Wait for 1 minute, then centrifuge for 1 minute to elute the purified plasmid DNA.</li>
                <li>Optional: to increase DNA yield, repeat step 13 again with the eluate obtained after centrifugation.</li>
            </ol>

            <div class="my-4 text-center">
                <img src="images/image0613.png" alt="Final elution step with purified plasmid DNA" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[300px]" onerror="this.onerror=null; this.src='https://placehold.co/300x150/e2e8f0/4a5568?text=DNA+Elution'; this.alt='Placeholder: DNA Elution';">
            </div>

            <h3>8. Analysis of Putative Plasmid Clones</h3>
            
            <h4 class="styled-h4">Overview of Verification Methods</h4>
            <p>After Golden Gate assembly and transformation, we need to verify that our cloning was successful and that the purified plasmid DNA matches our desired sequence. The three main verification methods are sequencing, colony PCR and restriction digestion analysis, each with distinct advantages.</p>

            <p><strong>Why Verification is Critical:</strong> Golden Gate assembly can produce several outcomes: successful assembly of the desired construct, re-ligation of the backbone without insert (especially if BsaI digestion was incomplete during assembly), or incorporation of contaminating DNA.</p>

            <h4 class="styled-h4">Method 1: DNA Sequencing (Primary Verification Method)</h4>
            <p><strong>Principle:</strong> DNA sequencing provides the definitive verification by determining the exact nucleotide sequence of the cloned region. This method can detect not only the presence or absence of the insert but also any point mutations, small insertions/deletions, or errors introduced during PCR amplification.</p>

            <p><strong>Advantages:</strong> Most reliable and comprehensive method; detects all types of errors<br>
            <strong>Disadvantages:</strong> Most expensive; requires 24-48 hours for results</p>

            <p><strong>Procedure:</strong> You can send the putative plasmid clone to a company for sequencing. Companies like Microsynth or Eurofins (and many others) offer services for sequencing. The necessary steps to send a putative plasmid clone to sequencing are explained in the following video, which is also part of our Wetlab series.</p>

            <div class="highlight-note">
                <p><strong>[Wetlab series video Sequencing]</strong></p>
            </div>

            <p><strong>When to use:</strong> Sequencing can be performed directly or subsequently to a colony PCR or a restriction digestion analysis as it is the most reliable of all verification methods but also more expensive. In general it is always recommended as the final verification step, especially before important downstream applications like in our case transfection experiments.</p>

            <h4 class="styled-h4">Method 2: Colony PCR (Rapid Screening Method)</h4>
            <p><strong>Theoretical Background:</strong> Colony PCR exploits the fact that bacterial colonies contain multiple copies of the plasmid, providing sufficient template for PCR amplification directly from crude cell lysates. The method relies on designing primers that will only produce a specific-sized product if the correct insert is present.</p>

            <p><strong>Primer Design Strategy:</strong></p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>Option A:</strong> One primer in the vector backbone, one in the insert → produces a band only if insert is present</li>
                <li><strong>Option B:</strong> Both primers flanking the insertion site → produces different sized bands depending on insert presence</li>
            </ul>

            <p><strong>Why It Works:</strong> The initial denaturation step (95°C) lyses bacterial cells and releases plasmid DNA, eliminating the need for plasmid purification. Taq polymerase is robust enough to function despite the presence of cellular debris and salts.</p>

            <p><strong>Expected Results:</strong></p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>Positive clone:</strong> Band of expected size (insert + flanking regions)</li>
                <li><strong>Negative clone:</strong> No band (primers don't match) or different sized band (backbone only)</li>
                <li><strong>Negative control:</strong> No band (no template)</li>
            </ul>

            <p><strong>Advantages:</strong> Fast (3-4 hours), inexpensive, can screen many colonies<br>
            <strong>Disadvantages:</strong> Cannot detect point mutations or sequence errors</p>

            <h4 class="styled-h4">Method 3: Restriction Digestion Analysis (Pattern Recognition)</h4>
            <p><strong>Theoretical Background:</strong> This method exploits the fact that successful Golden Gate assembly creates a new restriction pattern compared to the original backbone. By choosing appropriate restriction enzymes, we can generate diagnostic fragment patterns that differ between positive and negative clones.</p>

            <p><strong>Critical Considerations for Golden Gate Products:</strong></p>
            <ul class="list-disc list-inside ml-4 space-y-1">
                <li><strong>BsaI sites are consumed:</strong> During Golden Gate assembly, BsaI sites are removed, so BsaI will not cut the final product</li>
                <li><strong>New junction sequences:</strong> The assembly creates new sequences at junction points that may create or destroy other restriction sites</li>
                <li><strong>Insert-specific sites:</strong> The insert may contain restriction sites not present in the original backbone</li>
            </ul>

            <p><strong>Enzyme Selection Strategy:</strong> Choose enzymes that produce clearly different patterns between the desired construct, original backbone, and possible re-ligation products.</p>

            <p><strong>Advantages:</strong> Relatively fast, inexpensive, can detect large rearrangements<br>
            <strong>Disadvantages:</strong> Cannot detect point mutations; requires careful enzyme selection</p>

            <div class="interactive-box">
                <h4>Verification Method Comparison</h4>
                <p class="text-sm mb-3">Which verification method would be best for initial screening of many colonies?</p>
                <div id="verification-method-quiz" class="space-y-1">
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">DNA sequencing</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="true">Colony PCR</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">Restriction digestion analysis</button>
                    <button class="quiz-option text-xs sm:text-sm" data-correct="false">All methods simultaneously</button>
                </div>
                <div id="verification-method-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <h4 class="styled-h4">Questions/Tasks:</h4>
            <div class="practice-problem-box">
                <h4>Verification Analysis</h4>
                <ul class="list-disc list-inside space-y-2">
                    <li>Why doesn't BsaI cut the assembled Golden Gate product, and how does this help confirm successful assembly?</li>
                    <li>What are the advantages and limitations of each verification method?</li>
                </ul>
                
                <div class="mt-4">
                    <button class="practice-toggle">Show Answer Guidelines</button>
                    <div class="practice-answer hidden mt-2">
                        <p><strong>Key Concepts:</strong></p>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li><strong>BsaI consumption:</strong> Golden Gate assembly removes BsaI sites during ligation, so successful products won't be cut by BsaI</li>
                            <li><strong>Method comparison:</strong> Colony PCR (fast screening) → Restriction analysis (confirmation) → Sequencing (final verification)</li>
                            <li><strong>Cost vs. accuracy trade-off:</strong> Each method balances speed, cost, and information content</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

       
        <style>
        /* PCR Tables Styling */
        .pcr-tables-container {
            margin: 1.5rem 0;
        }
        
        .pcr-table-section {
            margin-bottom: 2rem;
        }
        
        .pcr-table-section h6 {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--purple-dark);
            margin-bottom: 0.75rem;
            background-color: rgba(212, 43, 233, 0.1);
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            border-left: 3px solid var(--purple-light);
        }
        
        /* Practice toggle functionality */
        .practice-toggle {
            background-color: var(--orange-medium);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            border: none;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }
        
        .practice-toggle:hover {
            background-color: var(--orange-dark);
        }
        
        .practice-answer {
            background-color: var(--background-light);
            border-left: 3px solid var(--orange-medium);
            padding: 0.75rem;
            margin-top: 0.75rem;
            border-radius: 0.25rem;
        }

        /* Calculator styling */
        .calculator {
            background-color: var(--background-light);
            border: 1px solid var(--border-light);
            border-radius: 0.5rem;
            padding: 1rem;
            margin: 1rem 0;
        }

        .calculator label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        .calculator input, .calculator select {
            margin-left: 0.5rem;
            padding: 0.25rem 0.5rem;
            border: 1px solid var(--border-light);
            border-radius: 0.25rem;
        }

        .calculator button {
            background-color: var(--orange-medium);
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
            margin-top: 0.5rem;
        }

        .calculator button:hover {
            background-color: var(--orange-dark);
        }

        .solution-details {
            font-size: 0.9rem;
            color: var(--text-primary);
            background-color: var(--background-light);
            border-left: 3px solid var(--orange-medium);
            padding: 0.75rem;
            margin-top: 0.75rem;
            border-radius: 0.25rem;
        }

        /* PCR Input styling */
.pcr-input {
    width: 60px;
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--border-light);
    border-radius: 0.25rem;
    text-align: center;
    font-size: 0.9rem;
}

.pcr-input:focus {
    outline: none;
    border-color: var(--orange-medium);
    box-shadow: 0 0 0 2px rgba(251, 136, 37, 0.2);
}

/* Colony count table styling */
#colony-count-table tr:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.02);
}

#colony-count-table td:empty {
    height: 2.5rem;
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

function calculateLoadingBuffer() {
    const sampleVolume = parseFloat(document.getElementById('sample-volume').value);
    const stockConcentration = parseFloat(document.getElementById('stock-concentration').value);
    const resultDiv = document.getElementById('loading-buffer-result');
    
    if (isNaN(sampleVolume) || sampleVolume <= 0) {
        resultDiv.innerHTML = '<p class="text-red-600">Please enter a valid sample volume.</p>';
        resultDiv.classList.remove('hidden');
        return;
    }
    
    if (isNaN(stockConcentration) || stockConcentration <= 1) {
        resultDiv.innerHTML = '<p class="text-red-600">Please enter a valid stock concentration greater than 1.</p>';
        resultDiv.classList.remove('hidden');
        return;
    }
    
    // Calculate loading buffer volume needed
    const loadingBufferVolume = sampleVolume / (stockConcentration - 1);
    const finalVolume = sampleVolume + loadingBufferVolume;
    
    resultDiv.innerHTML = `
        <p><strong>Calculation:</strong></p>
        <p>Sample volume: ${sampleVolume} µl</p>
        <p>Add: ${loadingBufferVolume.toFixed(1)} µl of ${stockConcentration}x loading buffer</p>
        <p>Final volume: ${finalVolume.toFixed(1)} µl at 1x concentration</p>
    `;
    resultDiv.classList.remove('hidden');
}

function calculateBindingBuffer() {
    const gelWeight = parseFloat(document.getElementById('gel-weight').value);
    const resultDiv = document.getElementById('binding-buffer-result');
    
    if (isNaN(gelWeight) || gelWeight <= 0) {
        resultDiv.innerHTML = '<p class="text-red-600">Please enter a valid gel weight.</p>';
        resultDiv.classList.remove('hidden');
        return;
    }
    
    // Calculate binding buffer volume: 100 μl per 100 mg
    const bufferVolume = gelWeight; // 1:1 ratio (100 μl per 100 mg = 1 μl per mg)
    
    resultDiv.innerHTML = `
        <p><strong>Calculation:</strong></p>
        <p>Gel weight: ${gelWeight} mg</p>
        <p>Binding Buffer needed: ${bufferVolume} μl</p>
        <p>Formula: 100 μl per 100 mg agarose</p>
    `;
    resultDiv.classList.remove('hidden');
}

function calculateInsertMass() {
    const insertLength = parseFloat(document.getElementById('insert-length').value);
    const backboneLength = parseFloat(document.getElementById('backbone-length').value);
    const backboneAmount = parseFloat(document.getElementById('backbone-amount').value);
    const molarRatio = parseFloat(document.getElementById('molar-ratio').value);
    const resultDiv = document.getElementById('insert-mass-result');
    
    if (isNaN(insertLength) || isNaN(backboneLength) || isNaN(backboneAmount) || isNaN(molarRatio)) {
        resultDiv.innerHTML = '<p class="text-red-600">Please enter valid numbers for all fields.</p>';
        resultDiv.classList.remove('hidden');
        return;
    }
    
    const insertMass = backboneAmount * molarRatio * (insertLength / backboneLength);
    
    resultDiv.innerHTML = `
        <p><strong>Calculation:</strong></p>
        <p>Formula: ${backboneAmount} ng × (${molarRatio}/1) × (${insertLength} bp/${backboneLength} bp)</p>
        <p><strong>Insert mass needed: ${insertMass.toFixed(1)} ng</strong></p>
    `;
    resultDiv.classList.remove('hidden');
}


// PCR calculation functions (newly added)
function updatePCRCalculations() {
    // Insert PCR calculations
    const insertDnaTest1 = parseFloat(document.getElementById('insert-dna-test1')?.value) || 0.8;
    const insertDnaTest2 = parseFloat(document.getElementById('insert-dna-test2')?.value) || 0.8;
    
    const insertH2oTest1 = 20 - 10 - insertDnaTest1 - 1.25 - 1.25;
    const insertH2oTest2 = 20 - 10 - insertDnaTest2 - 1.25 - 1.25;
    const insertH2oNeg = 20 - 10 - 1.25 - 1.25;
    
    document.getElementById('insert-h2o-test1').textContent = `REST = ${insertH2oTest1.toFixed(1)} µl`;
    document.getElementById('insert-h2o-test2').textContent = `REST = ${insertH2oTest2.toFixed(1)} µl`;
    document.getElementById('insert-h2o-neg').textContent = `REST = ${insertH2oNeg.toFixed(1)} µl`;
    
    // Backbone PCR calculations
    const backboneDnaTest1 = parseFloat(document.getElementById('backbone-dna-test1')?.value) || 0.8;
    const backboneDnaTest2 = parseFloat(document.getElementById('backbone-dna-test2')?.value) || 0.8;
    
    const backboneH2oTest1 = 20 - 10 - backboneDnaTest1 - 1.25 - 1.25;
    const backboneH2oTest2 = 20 - 10 - backboneDnaTest2 - 1.25 - 1.25;
    const backboneH2oNeg = 20 - 10 - 1.25 - 1.25;
    
    document.getElementById('backbone-h2o-test1').textContent = `REST = ${backboneH2oTest1.toFixed(1)} µl`;
    document.getElementById('backbone-h2o-test2').textContent = `REST = ${backboneH2oTest2.toFixed(1)} µl`;
    document.getElementById('backbone-h2o-neg').textContent = `REST = ${backboneH2oNeg.toFixed(1)} µl`;
}

// Golden Gate calculation functions
function updateGoldenGateCalculations() {
    const ggBackboneComplete = parseFloat(document.getElementById('gg-backbone-complete')?.value) || 0;
    const ggBackboneControl = parseFloat(document.getElementById('gg-backbone-control')?.value) || 0;
    const ggInsertComplete = parseFloat(document.getElementById('gg-insert-complete')?.value) || 0;
    
    const h2oComplete = 20 - 2 - ggBackboneComplete - ggInsertComplete - 0.5 - 0.5;
    const h2oControl = 20 - 2 - ggBackboneControl - 0.5 - 0.5;
    
    document.getElementById('gg-h2o-complete').textContent = `REST = ${h2oComplete.toFixed(1)} µl`;
    document.getElementById('gg-h2o-control').textContent = `REST = ${h2oControl.toFixed(1)} µl`;
}

// Updated record colony count function
let colonyCountData = [];

function recordColonyCount() {
    const sampleName = document.getElementById('sample-name').value;
    const colonyCount = document.getElementById('colony-count').value;
    const resultDiv = document.getElementById('colony-count-result');
    
    if (!sampleName || !colonyCount) {
        resultDiv.innerHTML = '<p class="text-red-600">Please enter both sample name and colony count.</p>';
        resultDiv.classList.remove('hidden');
        return;
    }
    
    // Add to data array
    colonyCountData.push({ sample: sampleName, count: colonyCount });
    
    // Update table
    updateColonyCountTable();
    
    resultDiv.innerHTML = `
        <p><strong>Recorded:</strong></p>
        <p>Sample: ${sampleName}</p>
        <p>Colonies: ${colonyCount}</p>
        <p class="text-sm text-gray-600">Data added to table below!</p>
    `;
    resultDiv.classList.remove('hidden');
    
    // Clear inputs
    document.getElementById('sample-name').value = '';
    document.getElementById('colony-count').value = '';
}

function updateColonyCountTable() {
    const tableBody = document.getElementById('colony-count-table');
    if (!tableBody) return;
    
    // Clear existing rows
    tableBody.innerHTML = '';
    
    // Add data rows
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        if (i < colonyCountData.length) {
            row.innerHTML = `
                <td class="border border-gray-300 p-2">${colonyCountData[i].sample}</td>
                <td class="border border-gray-300 p-2 text-center">${colonyCountData[i].count}</td>
            `;
        } else {
            row.innerHTML = `
                <td class="border border-gray-300 p-2"></td>
                <td class="border border-gray-300 p-2 text-center"></td>
            `;
        }
        tableBody.appendChild(row);
    }
    
    // Add "No data" message if empty
    if (colonyCountData.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = `
            <td class="border border-gray-300 p-2 text-gray-400">No data recorded</td>
            <td class="border border-gray-300 p-2 text-center text-gray-400">-</td>
        `;
        tableBody.insertBefore(emptyRow, tableBody.firstChild);
    }
}


export default function initModule6(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-6';
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
            <p class="text-sm text-gray-600 mb-4">Test your knowledge of Golden Gate Assembly PCR procedures.</p>
            <div id="quiz-container-module-6"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);

    // 3. Attach event listeners for interactive elements
    // Practice toggle buttons
    rootEl.querySelectorAll('.practice-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const answerDiv = button.parentElement.querySelector('.practice-answer');
            if (answerDiv.classList.contains('hidden')) {
                answerDiv.classList.remove('hidden');
                button.textContent = 'Hide Answer Guidelines';
            } else {
                answerDiv.classList.add('hidden');
                button.textContent = 'Show Answer Guidelines';
            }
        });
    });

    // Agarose safety quiz
    const agaroseSafetyContainer = document.getElementById('agarose-safety-quiz');
    if (agaroseSafetyContainer) {
        agaroseSafetyContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.dataset.correct === 'true';
                const correctFeedback = "<strong>Correct!</strong> Boiling agarose can suddenly bubble over and cause severe burns. Careful monitoring prevents dangerous spills.";
                const incorrectFeedback = "<strong>Not quite.</strong> The main safety concern is preventing dangerous spill-over of extremely hot boiling solution that can cause severe burns.";
                handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }

    // Media safety quiz
    const mediaSafetyContainer = document.getElementById('media-safety-quiz');
    if (mediaSafetyContainer) {
        mediaSafetyContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.dataset.correct === 'true';
                const correctFeedback = "<strong>Correct!</strong> An open but covered flask prevents pressure buildup while still allowing steam to escape, preventing dangerous explosions.";
                const incorrectFeedback = "<strong>Not quite.</strong> The main safety concern is preventing pressure buildup that could cause the flask to explode in the microwave.";
                handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }

   
    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-6');
    

    // Miniprep neutralization quiz
const miniprepNeutralizationContainer = document.getElementById('miniprep-neutralization-quiz');
if (miniprepNeutralizationContainer) {
    miniprepNeutralizationContainer.querySelectorAll('.quiz-option').forEach(button => {
        button.addEventListener('click', () => {
            const isCorrect = button.dataset.correct === 'true';
            const correctFeedback = "<strong>Correct!</strong> The neutralization buffer stops the alkaline lysis and precipitates proteins and genomic DNA while keeping plasmid DNA in solution.";
            const incorrectFeedback = "<strong>Not quite.</strong> The neutralization step neutralizes the alkaline conditions and selectively precipitates proteins and genomic DNA.";
            handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
        });
    });
}

// Add event listeners for PCR calculations
document.addEventListener('input', function(e) {
    if (e.target.classList.contains('pcr-input')) {
        updatePCRCalculations();
        updateGoldenGateCalculations();
    }
});

// Initialize calculations on load
setTimeout(() => {
    updatePCRCalculations();
    updateGoldenGateCalculations();
}, 100);

    // Verification method quiz
    const verificationMethodContainer = document.getElementById('verification-method-quiz');
    if (verificationMethodContainer) {
        verificationMethodContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.dataset.correct === 'true';
                const correctFeedback = "<strong>Correct!</strong> Colony PCR is fast, inexpensive, and perfect for initial screening of many colonies before using more expensive verification methods.";
                const incorrectFeedback = "<strong>Not quite.</strong> Colony PCR is the best choice for initial screening because it's fast and inexpensive, allowing you to test many colonies quickly.";
                handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }
    // Make all functions globally available
window.calculateLoadingBuffer = calculateLoadingBuffer;
window.calculateBindingBuffer = calculateBindingBuffer;
window.calculateInsertMass = calculateInsertMass;
window.recordColonyCount = recordColonyCount;
window.updatePCRCalculations = updatePCRCalculations;
window.updateGoldenGateCalculations = updateGoldenGateCalculations;
}
