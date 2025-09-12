const TITLE = "Module 1: Fundamentals of Cell & Molecular Biology";

const QUIZ_DATA = [
    {
        question: "Which of these is NOT a typical component of a plasmid used in molecular cloning for expression in eukaryotic cells?",
        options: [
            "Origin of Replication (ori)",
            "Eukaryotic Promoter (e.g., CMV)",
            "Selectable Marker (e.g., antibiotic resistance)",
            "Ribosome (the organelle)"
        ],
        answer: "Ribosome (the organelle)",
        type: "mcq",
        explanation: "Plasmids contain DNA sequences like promoters and origins of replication. Ribosomes are cellular machinery for protein synthesis and are not part of the plasmid DNA itself."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 1: Fundamentals of Cell & Molecular Biology</h2>
            
            <h3>Part A: Core Biology</h3>
            <h4 class="styled-h4">Prokaryotes vs. Eukaryotes</h4>
            <p>Living organisms are made of cells. The two main types are:</p>
            <ul>
                <li><strong>Prokaryotes:</strong> Simple cells (e.g., bacteria) lacking a nucleus. Their DNA is located in the cytoplasm. They are usually smaller and simpler in design.</li>
                <li><strong>Eukaryotes:</strong> Complex cells (e.g., animal including human, plant, fungal cells) with a nucleus enclosing the DNA, and various membrane-bound organelles like mitochondria and endoplasmic reticulum (ER).</li>
            </ul>
            <p>In this course, we will work with prokaryotic cells (E. coli bacteria) and eukaryotic cells (HEK293), which are used as standard model organisms in molecular biology and are particularly well suited for molecular biological studies.</p>

            <h4 class="styled-h4">The Canonical Dogma</h4>
            <p>This practical course is based on the central dogma of molecular biology, whereby DNA is transcribed to make RNA, and then, via the process of translation, proteins are synthesized. This dogma includes the following four steps in eukaryotes:</p>
            <ul>
                <li><strong>Activation:</strong> Transcription factors bind to promoter-specific sequences, allowing for the binding and assembly of the transcriptional machinery.</li>
                <li><strong>Transcription:</strong> RNA polymerase II produces a new mRNA molecule using the coding region of the DNA sequence as a template.</li>
                <li><strong>Processing:</strong> Pre-mRNA molecules are edited to produce mature mRNA molecules.</li>
                <li><strong>Translation:</strong> Ribosomes produce a new polypeptide encoded in the mRNA by translating it from the start to the stop codon.</li>
            </ul>
            <p>(Modified from Lodish et al. Molecular Cell Biology, 5th ed.)</p>
            
            <!-- Broad Canonical Dogma Image -->
            <img src="images/image01.png" alt="Broad Canonical Dogma" class="my-4 w-full max-w-xl mx-auto" />
            
            <p>This canonical dogma has four main steps in eukaryotes: activation, transcription, processing, and translation (Figure 1).</p>

            <!-- Detailed Canonical Dogma Image -->
            <img src="images/image02.png" alt="Detailed Canonical Dogma in the Cell" class="my-4 w-full max-w-xl mx-auto" />

            <h4 class="styled-h4">Plasmids</h4>
            <p>A plasmid is a small, circular, double-stranded DNA molecule that is distinct from a cell's chromosomal DNA. It serves as a carrier of genetic information. Plasmids naturally exist in bacterial cells and they also occur in some eukaryotes. In the lab, scientists use plasmids to introduce new genes into cells. First, a plasmid needs to be cloned using bacteria. Afterwards, the functional plasmid can be introduced (=transfected) into mammalian cells. For both organisms (bacteria and mammalian cells), different components of a plasmid are needed.</p>

            <h4 class="styled-h4">Key Components of a Lab Plasmid</h4>
            <p>A functional plasmid typically contains the following components:</p>
            <ul>
                <li><strong>Origin of Replication (ori):</strong> The DNA sequence where replication of the plasmid begins, allowing it to be copied within the host cell (bacteria).</li>
                <li><strong>Promoter:</strong> A DNA sequence that initiates transcription of a particular gene. For example, the CMV promoter for strong expression in mammalian cells (eukaryotes).</li>
                <li><strong>Multiple Cloning Site (MCS) aka Polylinker:</strong> A short segment of DNA containing many restriction enzyme sites. This allows targeted insertion of a new gene (the gene of interest) using restriction enzymes.</li>
                <li><strong>Gene of Interest (GOI):</strong> The specific gene you want to study or express in host cells (e.g., a gene coding for a therapeutic protein or regulatory RNA).</li>
                <li><strong>Selection Marker:</strong> A gene conferring a trait for artificial selection, e.g., an antibiotic resistance gene (like Ampicillin or Kanamycin resistance), allowing only cells that have successfully taken up the plasmid to grow in the presence of the antibiotic.</li>
                <li><strong>Tag:</strong> A short DNA sequence fused to the gene of interest, which can be used for protein detection or purification. Examples include GFP (Green Fluorescent Protein) for fluorescence and His-tag for affinity chromatography.</li>
            </ul>
            
            <h4 class="styled-h4">General Plasmid Map</h4>
            <img src="images/image03.png" alt="Plasmid Map" class="my-4 w-full max-w-xl mx-auto" />

            <h3>Module Quiz</h3>
            <div id="quiz-container"></div>
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

export default function initModule1(rootEl, sidebarEl) {
    // Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-1';
    link.textContent = TITLE;
    link.className = 'sidebar-link block px-3 py-2 rounded-md';
    sidebarEl.querySelector('#sidebar-links').appendChild(link);

    // Inject content
    rootEl.innerHTML = getContent();
    
    // Add quiz container
    renderQuiz(QUIZ_DATA, 'quiz-container');
}
