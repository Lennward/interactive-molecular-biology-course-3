const TITLE = "Module 6: Cloning of DNA-Plasmids";
const QUIZ_DATA = [
    {
        question: "In Golden Gate Assembly, how many total PCR reactions do we perform and why?",
        options: [
            "One PCR reaction to amplify the insert only",
            "Two PCR reactions: one for insert and one for backbone",
            "Three PCR reactions for redundancy",
            "Four PCR reactions with different primers"
        ],
        answer: "Two PCR reactions: one for insert and one for backbone",
        type: "mcq",
        explanation: "Golden Gate Assembly requires both the insert (3xFLAG-LMNB1) and the backbone to be linear PCR products with BsaI sites for proper assembly."
    },
    {
        question: "What restriction enzyme is used in this Golden Gate Assembly protocol?",
        options: ["EcoRI", "BamHI", "BsaI", "HindIII"],
        answer: "BsaI",
        type: "mcq",
        explanation: "BsaI is the Type IIS restriction enzyme used in this Golden Gate Assembly protocol."
    },
    {
        question: "How many total reactions should you prepare for this PCR experiment?",
        options: ["3 reactions total", "6 reactions total", "9 reactions total", "12 reactions total"],
        answer: "6 reactions total",
        type: "mcq",
        explanation: "You prepare 3 reactions for insert PCR (2 test + 1 negative control) and 3 reactions for backbone PCR (2 test + 1 negative control) = 6 total."
    },
    {
        question: "True or False: The primers contain BsaI restriction sites plus additional flanking nucleotides.",
        options: ["True", "False"],
        answer: "True",
        type: "tf",
        explanation: "The primers contain BsaI restriction sites plus 3-6 additional nucleotides to facilitate restriction enzyme binding and functionality."
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
                <img src="images/image060.png" alt="Map of plasmid plR006_FKBP-CD28TM-ZipEE" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[500px]" onerror="this.onerror=null; this.src='https://placehold.co/500x500/e2e8f0/4a5568?text=plR006+Vector+Map'; this.alt='Placeholder: plR006 Vector Map';">
                <p class="text-sm text-gray-600 mt-2">The figure shows the map of plasmid plR006_FKBP-CD28TM-ZipEE (Obtained from SnapGene Viewer).</p>
            </div>

            <p>In the section of this practical titled "In Silico Cloning," you amplified by PCR (in silico) the GOI 3xFLAG-LMNB1 (insert) and plR006_FKBP-CD28TM-ZipEE (backbone) with primers that provide BsaI recognition sites on the 5' and 3' end. In this section of the practical, you will amplify the GOI 3xFLAG-LMNB1 (<em>in vitro</em>) from the plasmid qTAG-N-Blast-3xFLAG-LMNB1 and the remaining backbone of plR006_FKBP-CD28TM-ZipEE using the same primers. For this, these primers need to be purchased online. Different companies offer the possibility to purchase primers. Both the expression vector, plR006_FKBP-CD28TM-ZipEE, and the 3xFLAG-LMNB1 amplicon will then be digested using the restriction enzyme BsaI, and the 3xFLAG-LMNB1 will be inserted into the plR006_FKBP-CD28TM-ZipEE plasmid. At the end of the cloning, you will therefore produce the plasmid, plL001_3xFLAG-LMNB1. The plasmid map of the final plasmid, which you should have generated during the section of the practical titled "In Silico Cloning" is shown in the following figure.</p>

            <div class="my-6 text-center">
                <img src="images/image061.png" alt="Map of final plasmid plL001_3xFLAG-LMNB1" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[500px]" onerror="this.onerror=null; this.src='https://placehold.co/500x500/e2e8f0/4a5568?text=plL001+Final+Map'; this.alt='Placeholder: plL001 Final Map';">
                <p class="text-sm text-gray-600 mt-2">The figure shows the map of plL001_3xFLAG-LMNB1 (Obtained from SnapGene Viewer).</p>
            </div>

            <p>The specific steps that we will follow to generate plL001_3xFLAG-LMNB1 are shown in the following figure.</p>

            <div class="my-6 text-center">
                <img src="images/image062.png" alt="Overview of Golden Gate Assembly cloning steps" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[500px]" onerror="this.onerror=null; this.src='https://placehold.co/500x600/e2e8f0/4a5568?text=Golden+Gate+Cloning+Overview'; this.alt='Placeholder: Golden Gate Cloning Overview';">
                <p class="text-sm text-gray-600 mt-2">The figure shows the overview of the cloning steps we will employ to generate plL001_3xFLAG-LMNB1. The schematic representation of the steps involved in molecular cloning using golden gate assembly can be seen. The PCRed vector backbone and the PCRed insert are digested with suitable restriction enzymes to create cohesive ends which subsequently anneal to each other, all in one step during the golden gate assembly (with standard cloning several steps are needed for this). The recombinant DNA is transformed into bacteria and the bacteria are plated onto selection plates for identification of positive clones. Putative positive clones are subsequently collected to inoculate miniprep cultures. Plasmid DNA is purified from the miniprep cultures and subsequently analyzed to identify positive clones. Figure adapted from <a href="https://goldbio.com/articles/article/cloning-overview" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">goldbio.com</a>.</p>
            </div>

            <h3>1. PCR of our GOI (= 3xFLAG-LMNB1) from the plasmid qTAG-N-Blast-3xFLAG-LMNB1 and of our backbone from plR006_FKBP-CD28TM-ZipEE</h3>
            
            <p>We will perform two PCRs. The insert (3xFLAG-LMNB1) (first PCR) and the backbone (second PCR) will be amplified with specific oligonucleotide primers (= 4 primers in total). For each PCR, two such primers, normally about 17–30 nucleotides in length, are designed to bind at either end of the sequence to be amplified, one to the top strand and one to the bottom strand of DNA (Figure 17).</p>

            <div class="my-6 text-center">
                <img src="images/image063.png" alt="Overview of polymerase chain reaction (PCR)" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/600x250/e2e8f0/4a5568?text=PCR+Overview'; this.alt='Placeholder: PCR Overview';">
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
                                <td class="border border-gray-300 p-2 text-center">XXXX</td>
                                <td class="border border-gray-300 p-2 text-center">XXXX</td>
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
                                <td class="border border-gray-300 p-2 text-center">REST</td>
                                <td class="border border-gray-300 p-2 text-center">REST</td>
                                <td class="border border-gray-300 p-2 text-center">REST</td>
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
                                <td class="border border-gray-300 p-2 text-center">XXXX</td>
                                <td class="border border-gray-300 p-2 text-center">XXXX</td>
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
                                <td class="border border-gray-300 p-2 text-center">REST</td>
                                <td class="border border-gray-300 p-2 text-center">REST</td>
                                <td class="border border-gray-300 p-2 text-center">REST</td>
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
                <img src="images/image064.png" alt="Loading buffer dilution calculation diagram" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[200px]" onerror="this.onerror=null; this.src='https://placehold.co/200x200/e2e8f0/4a5568?text=Loading+Buffer+Calc'; this.alt='Placeholder: Loading Buffer Calculation';">
            </div>

            <div class="interactive-box">
                <h4>Loading Buffer Calculation</h4>
                <p class="text-sm mb-3">Calculate the volume of 6x loading buffer needed for your 20 µl PCR reaction:</p>
                <div class="calculator">
                    <label>Sample volume: <input type="number" id="sample-volume" value="20"> µl</label><br>
                    <label>Stock concentration: 
                        <select id="stock-concentration">
                            <option value="6">6x</option>
                        </select>
                    </label><br>
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
                    <li>What size(s) will these bands have?</li>
                    <li>Do you expect all bands to have the same intensity? Why or why not?</li>
                </ul>
                
                <div class="mt-4">
                    <button class="practice-toggle">Show Answer Guidelines</button>
                    <div class="practice-answer hidden mt-2">
                        <p><strong>Expected Results:</strong></p>
                        <ul class="list-disc list-inside space-y-1 text-sm">
                            <li><strong>Bands expected:</strong> Test reactions 1 & 2 for both insert and backbone PCR should show bands (template DNA present)</li>
                            <li><strong>No bands expected:</strong> Negative controls should show no bands (no template DNA)</li>
                            <li><strong>Band sizes:</strong> Calculate based on your specific insert and backbone lengths</li>
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
                <img src="images/image065.png" alt="Plasmid conformations and their migration patterns in agarose gel" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/600x350/e2e8f0/4a5568?text=Plasmid+Conformations'; this.alt='Placeholder: Plasmid Conformations';">
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
                <img src="images/image066.png" alt="1 kb Plus DNA Ladder from NEB" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[300px]" onerror="this.onerror=null; this.src='https://placehold.co/300x400/e2e8f0/4a5568?text=DNA+Ladder+NEB'; this.alt='Placeholder: DNA Ladder NEB';">
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
                    <li>What sizes will the insert and backbone bands have?</li>
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
    
    // Calculate loading buffer volume needed
    // For 1x final concentration from 6x stock: add 1/5 of sample volume
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

    // Make calculateBindingBuffer function globally available
    window.calculateBindingBuffer = calculateBindingBuffer;
   
    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-6');

    // 5. Make calculateLoadingBuffer function globally available
    window.calculateLoadingBuffer = calculateLoadingBuffer;
}
