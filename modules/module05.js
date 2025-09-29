const TITLE = "Module 5: In silico Cloning of DNA-Plasmids";
const QUIZ_DATA = [
    {
        question: "What does 'in silico' cloning mean?",
        options: [
            "Cloning performed in bacterial cells",
            "Cloning performed in mammalian cells", 
            "Cloning performed using computer simulation",
            "Cloning performed in test tubes"
        ],
        answer: "Cloning performed using computer simulation",
        type: "mcq",
        explanation: "In silico cloning refers to computer-based simulation and design of cloning strategies before performing the actual laboratory work."
    },
    {
        question: "What is the recommended length range for PCR primers?",
        options: ["10-15 nucleotides", "18-30 nucleotides", "35-40 nucleotides", "45-50 nucleotides"],
        answer: "18-30 nucleotides",
        type: "mcq",
        explanation: "The optimal primer length is generally 18-30 nucleotides to ensure specificity while maintaining good binding properties."
    },
    {
        question: "What should be the melting temperature (Tm) range for primers?",
        options: ["50-60°C", "65-75°C", "80-90°C", "95-100°C"],
        answer: "65-75°C",
        type: "mcq",
        explanation: "Primers should have a melting temperature between 65-75°C and within 5°C of each other for optimal PCR performance."
    },
    {
        question: "True or False: Primers should end with A or T bases at the 3' end for better binding.",
        options: ["True", "False"],
        answer: "False",
        type: "tf",
        explanation: "Primers should preferably end in C or G at the 3' end to promote stronger binding due to the three hydrogen bonds in G-C pairs."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 5: <em>In silico</em> Cloning of DNA-Plasmids</h2>
            
            <p>Now you have a broad grasp of the principle behind cloning.</p>
            
            <p>In this module you will learn how to perform an <em>in silico</em> cloning to change the sequence of a DNA-plasmid by inserting the sequence of your gene of interest (GOI) into the plasmid.</p>

            <h3><em>In silico</em> cloning:</h3>
            <p>First, a cloning needs to be performed "<em>in silico</em>" meaning based on computer simulation.</p>
            
            <p>With this it is possible to identify the sequences of commercial plasmids (e.g. the plasmid that you are using as template for your cloning) from company websites and other DNA sequences (e.g. the sequence of your GOI) from online databases. Further <em>in silico</em> cloning is especially useful to design <span class="clickable-term" data-term="primers">primers</span> which are needed for a PCR. In addition, <em>in silico</em> cloning enables you to identify restriction enzyme sites and edit plasmid vector sequences.</p>

            
            <div class="interactive-box">
                <h4>Quick Check: What is in silico cloning?</h4>
                <p class="text-sm mb-2">Select the best definition:</p>
                <div id="in-silico-quiz" class="space-y-1">
                    <button class="quiz-option text-sm" data-correct="false">Physical cloning in bacteria</button>
                    <button class="quiz-option text-sm" data-correct="true">Computer-based cloning simulation</button>
                    <button class="quiz-option text-sm" data-correct="false">Manual DNA manipulation</button>
                    <button class="quiz-option text-sm" data-correct="false">Cell-free cloning system</button>
                </div>
                <div id="in-silico-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <h3>Finding commercial plasmid vectors</h3>
            <p>A good place to find commercially available plasmids for specific applications is <a href="http://www.addgene.org/" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">http://www.addgene.org/</a>. Addgene is a commercial depository where researchers from all over the world can make their expression vectors available for the scientific community.</p>

            <p>Plasmid documentation and sequences are available for all vectors prior to purchase. The following screenshots show an <strong>example</strong> of a plasmid and its sequence.</p>

            <div class="my-6 text-center">
                <img src="images/image0501.png" alt="Addgene plasmid page example" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[650px]" onerror="this.onerror=null; this.src='https://placehold.co/500x300/e2e8f0/4a5568?text=Image+51:+Addgene+Plasmid+Page'; this.alt='Placeholder: Addgene Plasmid Page';">
                <p class="text-sm text-gray-600 mt-2">Screenshot showing an example plasmid page on Addgene with detailed information and sequence data.</p>
            </div>

            <p>Specific features of the plasmid, such as promoter regions, coding regions, and restriction sites can be visualized using the Map tool on Addgene. One can also download the sequence and analyze it using a sequence editing and analysis program (see below).</p>

            <div class="my-6 text-center">
                <img src="images/image0502.png" alt="Addgene plasmid map visualization" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[650px]" onerror="this.onerror=null; this.src='https://placehold.co/500x350/e2e8f0/4a5568?text=Image+52:+Plasmid+Map+Tool'; this.alt='Placeholder: Plasmid Map Tool';">
                <p class="text-sm text-gray-600 mt-2">The Map tool on Addgene allows visualization of plasmid features including promoters, coding regions, and restriction sites.</p>
            </div>

            <h3>Identifying restriction enzyme sites and editing plasmid vector sequences</h3>
            <p>Once a plasmid vector and insert sequence have been identified, any of several free programs like Benchling, Serial Cloner, SnapGene, or ApE can be used to define a cloning strategy. Restriction enzyme selection, primer design, and documentation of each newly designed plasmid are all possible with such programs. In this practical session we will use SnapGene software, which is commercially licensed, but which offers a 1-month free trial with full features. In order to download and install SnapGene on your laptop, you will be asked to register first on the SnapGene web page (<a href="https://www.snapgene.com" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">https://www.snapgene.com</a>).</p>

            <p>With SnapGene, as with other similar programs, it is possible to copy, paste, and edit entire nucleic acid sequences, including plasmids. These sequences can be set to be linear or circular. It is possible to scan for specific features and display them using a graphic plasmid map. New features not listed in the database can be manually defined when required (e.g., multicloning sites (MCS), regulatory sequences, and coding sequences). Restriction enzyme sites can also be easily identified and displayed.</p>

            <h3>Designing primers</h3>
            <p>Once a sequence of nucleotides for cloning has been selected, the next step is to design a set of primers that will enable the amplification by PCR of this sequence and its subsequent insertion into an expression vector. Good primer design is essential for a successful PCR reaction. There are many factors to take into account when designing the optimal primers for a gene of interest, and a number of programs (e.g., vector-NTI, SnapGene) and online sites (e.g., primer3plus.com) that offer informatics tools for primer design. Regardless of whether primers are designed by hand or with the help of a program, however, some general guidelines for primer design to consider include the following (from thermofisher.com):</p>

            <div class="primer-guidelines">
                <h4 class="styled-h4">Primer Design Guidelines</h4>
                <ul class="space-y-3 bg-slate-100 p-4 rounded-md shadow-sm">
                    <li>• In general, a length of 18–30 nucleotides for primers is preferred.</li>
                    <li>• Try to make the melting temperature (Tm) of the primers between 65°C and 75°C, and within 5°C of each other.</li>
                    <li>• If the Tm of your primer is very low, try to find a sequence with more GC content, or extend the length of the primer a little.</li>
                    <li>• Aim for the GC content to be between 40 and 60%, with the 3' of a primer ending in C or G to promote binding.</li>
                    <li>• Typically, 3 to 6 nucleotides are added 5' of the restriction enzyme site in the primer to allow for efficient cutting.</li>
                    <li>• Try to avoid regions having secondary structure, and try to have a balanced distribution of GC-rich and AT-rich domains.</li>
                    <li>• Try to avoid runs of 4 or more of one base or dinucleotide repeats (for example, ACCCC or ATATATAT).</li>
                    <li>• Avoid intra-primer homology (more than 3 bases that complement within the primer) or inter-primer homology (forward and reverse primers having complementary sequences). These circumstances can cause the primers to form self-dimers or primer-dimers instead of annealing to the desired DNA sequences.</li>
                    <li>• If you are using the primers for mutagenesis, try to have the mismatched bases towards the middle of the primer.</li>
                </ul>
            </div>

            <div class="interactive-box">
                <h4>Interactive: Primer Design Knowledge Check</h4>
                <p class="text-sm mb-3">Which of these primer characteristics is most important for successful PCR?</p>
                <div id="primer-design-quiz" class="space-y-1">
                    <button class="quiz-option text-sm" data-correct="false">Primer length > 40 nucleotides</button>
                    <button class="quiz-option text-sm" data-correct="true">Tm between 65-75°C with primers within 5°C of each other</button>
                    <button class="quiz-option text-sm" data-correct="false">High AT content at 3' end</button>
                    <button class="quiz-option text-sm" data-correct="false">Many repetitive sequences</button>
                </div>
                <div id="primer-design-feedback" class="feedback-message text-xs mt-2 p-1.5 rounded-md hidden"></div>
            </div>

            <h4 class="styled-h4">Non-specific binding sites</h4>
            <p>Even the best-designed primers sometimes result in the amplification of undesired DNA sequences. Therefore, after designing primers to amplify a gene of interest, one additional step is required to control for their sequence specificity to the target DNA. Specifically, one should examine whether primers bind to other, undesired regions within the template DNA. One means to do this is by using the BLAST tool in the NCBI web site. BLAST basically aligns your short DNA sequences to whole genomes (or to another DNA sequence) and shows to which sites your primers can bind. To use it you can copy your primer sequence (without restriction enzyme sites) into the search bar and see to how many different sites it binds.</p>

            <div class="my-6 text-center">
                <img src="images/image0503.png" alt="BLAST search interface for primer specificity" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[550px]" onerror="this.onerror=null; this.src='https://placehold.co/400x200/e2e8f0/4a5568?text=Image+53:+BLAST+Search'; this.alt='Placeholder: BLAST Search Interface';">
                <p class="text-sm text-gray-600 mt-2">BLAST search interface for checking primer specificity against genomic sequences.</p>
            </div>

            <p>The results page will provide information about other possible primer binding sites, including their locations within the genome (or other DNA sequence), their length, and their degree of overlap with a given primer.</p>

            <h4 class="styled-h4">Melting temperature</h4>
            <p>The simplest formula for determining primer melting temperatures (Tm) is <span class="formula">Tm = 2×(A+T) + 4×(C+G)</span>. However, salt concentrations and other physicochemical factors may also influence Tm. There are many commercial sites offering online tools for Tm calculations that take these factors into account (e.g., <a href="http://tmcalculator.neb.com/#!/" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">http://tmcalculator.neb.com/#!/</a>). These sites typically allow one to insert primer sequences and concentrations, and the polymerase and buffers used in order to obtain a recommended annealing temperature for use in the PCR cycling protocol.</p>

            <div class="my-6 text-center">
                <img src="images/image0504.png" alt="Tm calculator tool interface" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[550px]" onerror="this.onerror=null; this.src='https://placehold.co/400x180/e2e8f0/4a5568?text=Image+54:+Tm+Calculator'; this.alt='Placeholder: Tm Calculator Tool';">
                <p class="text-sm text-gray-600 mt-2">Online Tm calculator tool for determining optimal annealing temperatures for PCR primers.</p>
            </div>

            <h4 class="styled-h4">Secondary structure</h4>
            <p>To analyze primers for unwanted secondary structures or primer-dimers that could interfere with the PCR, we can use online tools available on the Integrated DNA Technologies website (<a href="https://eu.idtdna.com/calc/analyzer" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">https://eu.idtdna.com/calc/analyzer</a>) or others like <a href="https://www.biosyn.com/gizmo/tools/oligo/oligonucleotide%20properties%20calculator.htm" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">https://www.biosyn.com/gizmo/tools/oligo/oligonucleotide%20properties%20calculator.htm</a>. With this tool, it is possible to examine primers for hairpin, self-dimer and hetero-dimer formation. BLAST search and Tm mismatch analyses are also possible from this website.</p>

            <div class="my-6 text-center">
                <img src="images/image0505.png" alt="IDT primer analysis tool showing secondary structure prediction" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[550px]" onerror="this.onerror=null; this.src='https://placehold.co/400x220/e2e8f0/4a5568?text=Image+55:+IDT+Primer+Analysis'; this.alt='Placeholder: IDT Primer Analysis Tool';">
                <p class="text-sm text-gray-600 mt-2">IDT primer analysis tool interface showing secondary structure predictions and dimer formation analysis.</p>
            </div>

            <div class="highlight-note">
                <p><strong>Key Takeaway:</strong> Successful <em>in silico</em> cloning requires careful consideration of primer design, specificity checking, and thorough analysis of secondary structures to ensure optimal PCR performance and successful cloning outcomes.</p>
            </div>
            <h3>Practical Exercise: Golden Gate Assembly in SnapGene</h3>
            <p>Now let's put the theory into practice! In this exercise, we will clone the gene for lamin B1 with a 3xFLAG-tag (3xFLAG-LMNB1) into the plR006_FKBP-CD28TM-ZipEE plasmid using a Golden Gate Assembly strategy.</p>

            <div class="goal-box">
                <strong>🎯 Learning Goal:</strong>
                <p>Learn to perform in silico Golden Gate Assembly cloning using SnapGene software</p>
            </div>

            <h4 class="styled-h4">Step-by-Step SnapGene Tutorial</h4>
            
            <div class="procedure-steps">
                <div class="procedure-step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h5>Download and Open Source Plasmid</h5>
                        <p>Download the sequence of addgene plasmid qTAG-N-Blast-3xFLAG-LMNB1 and open the .dna file in SnapGene.</p>
                        <div class="my-4 text-center">
                            <img src="images/image0506.png" alt="qTAG-N-Blast-3xFLAG-LMNB1 plasmid map" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/500x400/e2e8f0/4a5568?text=Image+056:+Source+Plasmid+Map'; this.alt='Placeholder: Source Plasmid Map';">
                            <p class="text-sm text-gray-600 mt-2">The map of plasmid qTAG-N-Blast-3xFLAG-LMNB1 contains the gene of interest (GOI) that we want to clone into a different plasmid.</p>
                        </div>
                    </div>
                </div>

                <div class="procedure-step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h5>Open Vector (Backbone) Plasmid</h5>
                        <p>Open the sequence of your vector (backbone) in SnapGene. In our case, we're using plR006_FKBP-CD28TM-ZipEE, but you can also use a different plasmid as vector.</p>
                        <div class="my-4 text-center">
                            <img src="images/image0507.png" alt="plR006_FKBP-CD28TM-ZipEE vector plasmid map" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/500x400/e2e8f0/4a5568?text=Image+057:+Vector+Plasmid+Map'; this.alt='Placeholder: Vector Plasmid Map';">
                            <p class="text-sm text-gray-600 mt-2">The map of plasmid plR006_FKBP-CD28TM-ZipEE serves as our vector backbone.</p>
                        </div>
                    </div>
                </div>

                <div class="procedure-step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h5>Create Feature Annotation</h5>
                        <p>Change the view from Map to Sequence and mark the sequence following the 3xFLAG until the stop codon (depicted as *). Go to Features > Add Features and create a new feature called LMNB1.</p>
                        <div class="my-4 text-center">
                            <img src="images/image0508.png" alt="Adding LMNB1 feature annotation in SnapGene" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[650px]" onerror="this.onerror=null; this.src='https://placehold.co/500x300/e2e8f0/4a5568?text=Image+058:+Feature+Annotation'; this.alt='Placeholder: Feature Annotation';">
                            <p class="text-sm text-gray-600 mt-2">Creating a new feature annotation for the LMNB1 gene sequence in SnapGene.</p>
                        </div>
                    </div>
                </div>

                <div class="procedure-step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <h5>Select Vector Sequence to Replace</h5>
                        <p>Golden Gate Assembly requires PCRs of both the GOI (insert) and the vector (backbone). This means we need 4 primers total: 2 for the GOI and 2 for the vector. First, select the part of the coding sequence in your vector that you want to replace with the new insert.</p>
                        <div class="orange-highlight-note">
                            <h4>Golden Gate Assembly Overview</h4>
                            <p>This specific cloning method was described in the "Introduction to molecular cloning" module. It involves:</p>
                            <ul>
                                <li>PCR amplification of the gene of interest (insert)</li>
                                <li>PCR amplification of the vector (backbone)</li>
                                <li>Assembly using a Type IIs restriction enzyme (like BsaI)</li>
                            </ul>
                        </div>
                        <div class="my-4 text-center">
                            <img src="images/image0509.png" alt="Selecting vector sequence to replace in SnapGene" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/500x300/e2e8f0/4a5568?text=Image+059:+Vector+Selection'; this.alt='Placeholder: Vector Selection';">
                            <p class="text-sm text-gray-600 mt-2">Selecting the coding sequence region (shown in blue) that will be replaced with the new insert.</p>
                        </div>
                    </div>
                </div>

                <div class="procedure-step">
                    <div class="step-number">5</div>
                    <div class="step-content">
                        <h5>Initialize Golden Gate Assembly</h5>
                        <p>Go to Actions > Golden Gate Assembly > Insert Fragment. A new window will open for the Golden Gate Assembly setup.</p>
                        <div class="my-4 text-center">
                            <img src="images/image0510.png" alt="Golden Gate Assembly dialog in SnapGene" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/500x400/e2e8f0/4a5568?text=Image+151:+Golden+Gate+Dialog'; this.alt='Placeholder: Golden Gate Dialog';">
                            <p class="text-sm text-gray-600 mt-2">The Golden Gate Assembly dialog window in SnapGene.</p>
                        </div>
                        <p>The vector should already be set correctly, and you can choose the restriction enzyme (Golden Gate enzyme) that you want to use. In our case, we're using <strong>BsaI</strong>.</p>
                        <div class="enzyme-info-box">
                            <h4>BsaI Cutting Site</h4>
                            <div class="text-center my-3">
                                <img src="images/image0406.png" alt="BsaI recognition sequence showing cut site outside recognition sequence" class="rounded-lg shadow-md mx-auto block max-w-full w-auto" style="max-width: 400px;" onerror="this.onerror=null; this.src='https://placehold.co/400x100/e2e8f0/4a5568?text=BsaI+Recognition+Sequence'; this.alt='Placeholder: BsaI Recognition Sequence';">
                            </div>
                            <p class="text-sm">BsaI is a Type IIs restriction enzyme that cuts outside its recognition sequence, creating programmable sticky ends.</p>
                        </div>
                    </div>
                </div>

                <div class="procedure-step">
                    <div class="step-number">6</div>
                    <div class="step-content">
                        <h5>Select Fragment Source</h5>
                        <p>Go to Fragment and at "Source of Fragment" select the plasmid that contains your GOI (gene of interest = insert you want to introduce into the other vector) and select the sequence of your GOI.</p>
                        <div class="my-4 text-center">
                            <img src="images/image0511.png" alt="Selecting fragment source in SnapGene Golden Gate Assembly" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[650px]" onerror="this.onerror=null; this.src='https://placehold.co/500x400/e2e8f0/4a5568?text=Image+152:+Fragment+Selection'; this.alt='Placeholder: Fragment Selection';">
                            <p class="text-sm text-gray-600 mt-2">Selecting the gene of interest (highlighted in blue) from the source plasmid.</p>
                        </div>
                    </div>
                </div>

                <div class="procedure-step">
                    <div class="step-number">7</div>
                    <div class="step-content">
                        <h5>Choose PCR Primers</h5>
                        <p>Go to "Product" and click on "Choose PCR Primers" to let SnapGene design the primers for your cloning reaction.</p>
                        <div class="my-4 text-center">
                            <img src="images/image0512.png" alt="PCR primer selection interface in SnapGene" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/500x400/e2e8f0/4a5568?text=Image+153:+Primer+Selection'; this.alt='Placeholder: Primer Selection';">
                            <p class="text-sm text-gray-600 mt-2">The PCR primer selection interface in SnapGene.</p>
                        </div>
                    </div>
                </div>

                <div class="procedure-step">
                    <div class="step-number">8</div>
                    <div class="step-content">
                        <h5>Generate and Validate Primers</h5>
                        <p>You can leave the settings for the primers as they are and click "Choose Primers". If the generated primers work properly, the indicator in the right corner will turn green.</p>
                        <div class="my-4 text-center">
                            <img src="images/image0513.png" alt="Successful primer generation indicated by green status" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/500x400/e2e8f0/4a5568?text=Image+154:+Primer+Validation'; this.alt='Placeholder: Primer Validation';">
                            <p class="text-sm text-gray-600 mt-2">Green indicator showing successful primer generation and validation.</p>
                        </div>
                    </div>
                </div>

                <div class="procedure-step">
                    <div class="step-number">9</div>
                    <div class="step-content">
                        <h5>Complete the Assembly</h5>
                        <p>Give the file a name and click "Assemble". You now have your new cloned plasmid (in our case plL001_3xFLAG-LMNB1).</p>
                        <div class="my-4 text-center">
                            <img src="images/image0514.png" alt="Final assembled plasmid map plL001_3xFLAG-LMNB1" class="rounded-lg shadow-md mx-auto block max-w-full w-auto w-[600px]" onerror="this.onerror=null; this.src='https://placehold.co/500x400/e2e8f0/4a5568?text=Image+155:+Final+Plasmid+Map'; this.alt='Placeholder: Final Plasmid Map';">
                            <p class="text-sm text-gray-600 mt-2">The map of the final assembled plasmid plL001_3xFLAG-LMNB1.</p>
                        </div>
                    </div>
                </div>

                <div class="procedure-step">
                    <div class="step-number">10</div>
                    <div class="step-content">
                        <h5>Validate Your Primers</h5>
                        <p>You can see the primers for the fragment and the vector in the file for the cloned plasmid if you switch from "Map" to "Primers". Now you can check the primers using the validation criteria described earlier in this module.</p>
                        <p><strong>Next step:</strong> If the primers pass all (or most) of the validation tests, you can order them from a company's website and proceed to the actual molecular cloning in the lab!</p>
                    </div>
                </div>
            </div>

            <div class="interactive-box">
                <h4>Practice Questions</h4>
                <div class="practice-questions">
                    <div class="practice-question-item">
                        <h5>Question 1: Reading Frame</h5>
                        <p><strong>What is meant by the term "reading frame" when referring to a DNA sequence? Why is it important to keep the reading frame in mind when creating constructs to code for fusion proteins?</strong></p>
                        <div class="practice-answer" style="display: none;">
                            <p><strong>Answer:</strong> A reading frame refers to the way nucleotides in DNA are grouped into codons (triplets) for translation. There are three possible reading frames in each direction. When creating fusion proteins, it's crucial to maintain the correct reading frame to ensure:</p>
                            <ul>
                                <li>The protein sequence remains intact</li>
                                <li>No premature stop codons are introduced</li>
                                <li>The fusion maintains proper protein function</li>
                                <li>The tagged protein is expressed at the correct molecular weight</li>
                            </ul>
                        </div>
                        <button class="practice-toggle bg-orange-500 text-white px-3 py-1 rounded text-sm mt-2">Show Answer</button>
                    </div>

                    <div class="practice-question-item">
                        <h5>Question 2: Primer Tm Calculation</h5>
                        <p><strong>Why do we exclude the added restriction enzyme sites and overhangs from the primer's sequence when calculating primer Tm values?</strong></p>
                        <div class="practice-answer" style="display: none;">
                            <p><strong>Answer:</strong> We exclude restriction enzyme sites and overhangs from Tm calculations because:</p>
                            <ul>
                                <li>These sequences don't bind to the template DNA during the initial PCR cycles</li>
                                <li>Only the template-complementary region determines the actual annealing temperature</li>
                                <li>Including non-complementary sequences would give an artificially high Tm</li>
                                <li>Accurate Tm calculation ensures optimal PCR annealing temperature</li>
                            </ul>
                        </div>
                        <button class="practice-toggle bg-orange-500 text-white px-3 py-1 rounded text-sm mt-2">Show Answer</button>
                    </div>
                </div>
            </div>

            <div class="highlight-note">
                <p><strong>Module Complete!</strong> You now understand both the theoretical principles of <em>in silico</em> cloning and have hands-on experience with Golden Gate Assembly using SnapGene. These skills are essential for successful molecular cloning projects in the laboratory.</p>
            </div>
        </div>

        <style>
        /* Interactive Terms Grid for primers - using Module 8 styling */
        .primers-section {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin: 1.5rem 0;
            padding: 0.5rem;
            max-width: 800px;
        }

        .primers-section .interactive-term {
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

        .primers-section .term-title {
            font-weight: 600;
            font-size: 1.1em;
            color: inherit;
        }

        .primers-section .term-explanation {
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

        .primers-section .interactive-term.expanded {
            min-height: auto;
            padding: 20px;
        }

        .primers-section .interactive-term.expanded .term-explanation {
            opacity: 1;
            max-height: 200px;
            margin-top: 12px;
        }

        .primers-section .interactive-term::before {
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

        .primers-section .interactive-term:hover::before {
            left: 100%;
        }

        .primers-section .interactive-term:hover {
            transform: translateY(-4px) scale(1.02);
            border-color: var(--purple-light);
            box-shadow: 0 8px 25px rgba(212, 43, 233, 0.25),
                        0 3px 12px rgba(0, 0, 0, 0.1);
            background: linear-gradient(145deg, #ffffff 0%, rgba(246, 75, 204, 0.08) 100%);
        }

        .primers-section .interactive-term:active {
            transform: translateY(-2px) scale(1.01);
            transition: transform 0.1s ease;
        }

        .primers-section .interactive-term.active {
            background: linear-gradient(145deg, var(--purple-light), var(--purple-accent));
            border-color: var(--purple-accent);
            box-shadow: 0 6px 20px rgba(212, 43, 233, 0.4),
                        0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .primers-section .interactive-term.active .term-title {
            color: white;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            font-weight: 700;
        }

        .primers-section .interactive-term.active .term-explanation {
            color: rgba(255, 255, 255, 0.95);
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        }

        /* Clickable term styling for inline terms */
        .clickable-term {
            color: var(--purple-medium);
            cursor: pointer;
            text-decoration: underline;
            font-weight: 500;
            transition: color 0.2s ease;
        }

        .clickable-term:hover {
            color: var(--purple-dark);
        }

        /* Primer guidelines styling */
        .primer-guidelines ul {
            list-style: none;
            padding-left: 0;
        }

        .primer-guidelines li {
            margin-bottom: 0.75rem;
            padding-left: 1rem;
            position: relative;
        }

        /* Responsive adjustments for primers section */
        @media (max-width: 768px) {
            .primers-section .interactive-term {
                padding: 12px 16px;
                font-size: 1em;
            }

            .primers-section .term-title {
                font-size: 1em;
            }

            .primers-section .term-explanation {
                font-size: 0.85em;
            }
        }
        /* Primer tooltip styling */
        .primer-tooltip {
            position: fixed;
            z-index: 1000;
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }

        .tooltip-content {
            background: white;
            border: 2px solid var(--purple-light);
            border-radius: 12px;
            padding: 1.2rem;
            max-width: 350px;
            min-width: 280px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            position: relative;
            animation: tooltipSlideIn 0.3s ease-out;
        }

        @keyframes tooltipSlideIn {
            from {
                transform: translateY(-10px) scale(0.95);
                opacity: 0;
            }
            to {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
        }

        .tooltip-close {
            position: absolute;
            top: 8px;
            right: 12px;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--purple-medium);
            cursor: pointer;
            transition: color 0.2s ease;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .tooltip-close:hover {
            color: var(--purple-dark);
        }

        .tooltip-text {
            color: var(--text-primary);
            line-height: 1.6;
            font-size: 0.95rem;
            padding-right: 20px;
            margin: 0;
        }
        /* Procedure steps styling */
        .procedure-steps {
            margin: 2rem 0;
        }

        .procedure-step {
            display: flex;
            margin-bottom: 2rem;
            background: white;
            border-radius: 1rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            overflow: hidden;
            border: 2px solid var(--purple-light);
            transition: all 0.3s ease;
        }

        .procedure-step:hover {
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            transform: translateY(-2px);
        }

        .step-number {
            background: linear-gradient(135deg, var(--orange-medium), var(--orange-accent));
            color: white;
            font-weight: bold;
            font-size: 1.5rem;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .step-content {
            padding: 1.5rem;
            flex-grow: 1;
        }

        .step-content h5 {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--purple-dark);
            margin-bottom: 0.75rem;
        }

        .step-content p {
            line-height: 1.6;
            color: var(--text-primary);
            margin-bottom: 1rem;
        }

        /* Enzyme info box styling */
        .enzyme-info-box {
            background: linear-gradient(135deg, rgba(251, 136, 37, 0.1), rgba(253, 172, 19, 0.1));
            border: 2px solid var(--orange-light);
            border-radius: 0.75rem;
            padding: 1rem;
            margin: 1rem 0;
        }

        .enzyme-info-box h4 {
            color: var(--orange-dark);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }


        /* Practice questions styling */
        .practice-questions {
            margin-top: 1rem;
        }

        .practice-question-item {
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid var(--purple-light);
            border-radius: 0.75rem;
            padding: 1.25rem;
            margin-bottom: 1rem;
        }

        .practice-question-item h5 {
            color: var(--purple-dark);
            font-weight: 600;
            margin-bottom: 0.75rem;
        }

        .practice-answer {
            background: var(--background-light);
            border-left: 4px solid var(--orange-medium);
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 0.5rem;
        }

        .practice-answer ul {
            margin-top: 0.5rem;
            padding-left: 1.5rem;
        }

        .practice-answer li {
            margin-bottom: 0.5rem;
        }

        .practice-toggle {
            transition: background-color 0.2s ease;
        }

        .practice-toggle:hover {
            background-color: var(--orange-dark);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .procedure-step {
                flex-direction: column;
            }
            
            .step-number {
                width: 100%;
                padding: 1rem;
                font-size: 1.2rem;
            }
            
            .step-content {
                padding: 1rem;
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

function initializeInteractiveTerms(rootElement) {
    // Handle interactive term clicks - scoped to this module only
    rootElement.querySelectorAll('.primers-section .interactive-term').forEach(term => {
        term.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle expanded state
            const isExpanded = term.classList.contains('expanded');
            
            // Close all other expanded terms IN THIS MODULE ONLY
            rootElement.querySelectorAll('.primers-section .interactive-term.expanded').forEach(otherTerm => {
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

   // Handle clickable inline terms - show tooltip/popup
    rootElement.querySelectorAll('.clickable-term').forEach(clickableTerm => {
        clickableTerm.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Remove any existing tooltips
            document.querySelectorAll('.primer-tooltip').forEach(tooltip => tooltip.remove());
            
            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'primer-tooltip';
            tooltip.innerHTML = `
                <div class="tooltip-content">
                    <button class="tooltip-close">×</button>
                    <h5 style="font-weight: 600; color: var(--purple-dark); margin-bottom: 0.5rem;">Primers</h5>
                    <p class="tooltip-text">A primer is a short nucleic acid sequence that provides a starting point for DNA synthesis. In natural biological processes, like DNA replication, primers are short strands of RNA created by the enzyme primase. However, in laboratory techniques such as the Polymerase Chain Reaction (PCR), short DNA fragments are synthesized and used as primers to target specific DNA sequences for amplification or sequencing.</p>
                </div>
            `;
            
            // Position tooltip
            const rect = clickableTerm.getBoundingClientRect();
            tooltip.style.position = 'fixed';
            tooltip.style.left = Math.min(rect.left, window.innerWidth - 350) + 'px';
            tooltip.style.top = (rect.bottom + 10) + 'px';
            tooltip.style.zIndex = '1000';
            
            document.body.appendChild(tooltip);
            
            // Add close functionality
            tooltip.querySelector('.tooltip-close').addEventListener('click', () => {
                tooltip.remove();
            });
            
            // Close on outside click
            document.addEventListener('click', function closeTooltip(e) {
                if (!tooltip.contains(e.target) && e.target !== clickableTerm) {
                    tooltip.remove();
                    document.removeEventListener('click', closeTooltip);
                }
            });
        });
    });

    // Close expanded terms when clicking outside - scoped to this module
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.primers-section .interactive-term') || !rootElement.contains(e.target)) {
            rootElement.querySelectorAll('.primers-section .interactive-term.expanded').forEach(term => {
                term.classList.remove('expanded', 'active');
            });
        }
    });

    // Close expanded terms on escape key - scoped to this module
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            rootElement.querySelectorAll('.primers-section .interactive-term.expanded').forEach(term => {
                term.classList.remove('expanded', 'active');
            });
        }
    });
}

export default function initModule5(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-5';
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
            <p class="text-sm text-gray-600 mb-4">Test your knowledge of in silico cloning concepts.</p>
            <div id="quiz-container-module-5"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);

    // 3. Attach event listeners for interactive elements
    // In silico quiz
    const inSilicoContainer = document.getElementById('in-silico-quiz');
    if (inSilicoContainer) {
        inSilicoContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.dataset.correct === 'true';
                const correctFeedback = "<strong>Correct!</strong> In silico cloning uses computer simulation to plan cloning strategies before laboratory work.";
                const incorrectFeedback = "<strong>Not quite.</strong> In silico refers to computer-based simulation and design of cloning strategies.";
                handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }

    // Primer design quiz
    const primerDesignContainer = document.getElementById('primer-design-quiz');
    if (primerDesignContainer) {
        primerDesignContainer.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', () => {
                const isCorrect = button.dataset.correct === 'true';
                const correctFeedback = "<strong>Correct!</strong> Optimal melting temperature and primer compatibility are crucial for successful PCR amplification.";
                const incorrectFeedback = "<strong>Not quite.</strong> The most important factor is having Tm between 65-75°C with primers within 5°C of each other for optimal PCR performance.";
                handleSimpleQuiz(button, isCorrect, correctFeedback, incorrectFeedback);
            });
        });
    }
    
    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-5');

    // 5. Initialize interactive terms functionality
    initializeInteractiveTerms(rootEl);
    
    // 6. Initialize practice question toggles
    rootEl.querySelectorAll('.practice-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const answerDiv = button.parentElement.querySelector('.practice-answer');
            if (answerDiv.style.display === 'none') {
                answerDiv.style.display = 'block';
                button.textContent = 'Hide Answer';
                button.classList.remove('bg-orange-500');
                button.classList.add('bg-gray-500');
            } else {
                answerDiv.style.display = 'none';
                button.textContent = 'Show Answer';
                button.classList.remove('bg-gray-500');
                button.classList.add('bg-orange-500');
            }
        });
    });
}
