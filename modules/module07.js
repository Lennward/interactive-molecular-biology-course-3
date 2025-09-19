const TITLE = "Module 7: Introduction to Cell Culture & work with mammalian cells";
const QUIZ_DATA = [
    {
        question: "What is the primary purpose of heat-inactivating serum (e.g., FBS/FCS) for cell culture?",
        options: ["To sterilize the serum by killing all microbes", "To inactivate complement proteins that could harm cells", "To enhance the activity of growth factors in the serum", "To remove any residual antibiotics from the serum"],
        answer: "To inactivate complement proteins that could harm cells",
        type: "mcq",
        explanation: "Heat inactivation (typically 56°C for 30 minutes) denatures complement proteins, which can otherwise cause cell lysis or activate immune responses in culture."
    },
    {
        question: "A cell culture medium containing Phenol Red as a pH indicator appears bright yellow. This most likely indicates the medium is:",
        options: ["Too alkaline (pH too high)", "Too acidic (pH too low)", "Perfectly neutral (pH 7.4)", "Contaminated with mold"],
        answer: "Too acidic (pH too low)",
        type: "mcq",
        explanation: "Phenol Red turns yellow at acidic pH (below ~6.8), often due to excessive cell metabolism producing lactic acid or bacterial contamination producing acidic byproducts."
    },
    {
        question: "Mycoplasma contamination is notoriously difficult to detect in cell cultures because:",
        options: ["They are very large and thus easily filtered out during media preparation", "They cause rapid, visible cloudiness (turbidity) in the culture medium within hours", "They are extremely small, lack a cell wall, can pass through standard 0.22 μm sterilization filters, and often do not cause obvious visual changes like turbidity", "They only grow optimally at room temperature, not in a 37°C incubator"],
        answer: "They are extremely small, lack a cell wall, can pass through standard 0.22 μm sterilization filters, and often do not cause obvious visual changes like turbidity",
        type: "mcq",
        explanation: "Mycoplasma are among the smallest self-replicating organisms and their lack of a cell wall makes them resistant to some antibiotics and flexible enough to pass through filters. They often cause subtle changes in cell behavior rather than obvious turbidity."
    },
    {
        question: "What do cells need to grow?",
        options: ["Building materials: amino acids for protein synthesis, sugars as an energy source for cell wall synthesis, fatty acids for membrane synthesis, and nucleotides for RNA and DNA synthesis", "Energy in the form of ATP", "Water as a solvent for biochemical reactions and for maintaining intracellular pressure", "Ions for enzyme functions, osmoregulation, and signal transmission", "Growth factors and nutrient availability", "Optimal temperature, pH value, oxygen supply", "All of the above"],
        answer: "All of the above",
        type: "mcq",
        explanation: "Cells require all these components for proper growth: building materials, energy, water, ions, growth factors, and optimal environmental conditions."
    }
];

function getContent() {
    return `
        <div class="module-content">
            <h2>Module 7: Introduction to Cell Culture & work with mammalian cells</h2>
            
            <h3>Cell Culture Deep Dive</h3>
            <p>In the lab, cells derived from a wide variety of tissues and organisms can be cultivated. Cell culture is the process by which cells (especially mammalian cells) are grown under controlled conditions in the lab, generally outside their natural environment which is referred to as <em>"in vitro"</em>. Cell culture technology makes it possible to establish long-term or permanent cultures that can serve as "in vitro" models for cells in vivo (in living organisms).</p>

            <p>Cells can be grown as:</p>
<div class="interactive-terms-grid">
    <div class="interactive-term" data-term="Adherent cell cultures">
        <div class="term-title">Adherent cell cultures</div>
        <div class="term-explanation">Cells grow attached to a surface (e.g., flask, plate). Adherent cells are derived from specific tissues and organs such as the liver, kidneys, muscles, nerves, endothelium, and epithelium.</div>
    </div>
    <div class="interactive-term" data-term="Suspension (non-adherent) cell cultures">
        <div class="term-title">Suspension (non-adherent) cell cultures</div>
        <div class="term-explanation">Cells float freely in the culture medium. Immune system cells and their precursors, on the other hand, are cultivated as a suspension.</div>
    </div>
</div>
            
            <h4 class="styled-h4">Primary Cell Cultures vs. Cell Lines</h4>
            <table class="w-full border-collapse border border-gray-300 bg-slate-100 p-3 rounded-md shadow-sm mb-4">
                <thead>
                    <tr class="bg-purple-100">
                        <th class="border border-gray-300 p-2 text-left font-semibold">Feature</th>
                        <th class="border border-gray-300 p-2 text-left font-semibold">Primary Cell Cultures</th>
                        <th class="border border-gray-300 p-2 text-left font-semibold">Cell Lines</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Origin</td>
                        <td class="border border-gray-300 p-2">Directly from tissues/organs</td>
                        <td class="border border-gray-300 p-2">Immortalized cells (e.g., tumor-derived, virally transformed)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Lifespan</td>
                        <td class="border border-gray-300 p-2">Limited (finite)</td>
                        <td class="border border-gray-300 p-2">Unlimited (infinite)</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Properties</td>
                        <td class="border border-gray-300 p-2">More representative of in vivo state</td>
                        <td class="border border-gray-300 p-2">May have altered characteristics, easier to grow</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">Examples</td>
                        <td class="border border-gray-300 p-2">Neurons, fibroblasts from biopsy</td>
                        <td class="border border-gray-300 p-2">HEK293, HeLa</td>
                    </tr>
                </tbody>
            </table>

            <h4 class="styled-h4">Cell Culture Environment & Media</h4>
            <p>Most cultured mammalian (and human) cells require the following for optimal growth:</p>
<div class="interactive-terms-grid environment-conditions">
    <div class="interactive-term" data-term="Temperature">
        <div class="term-title">Temperature</div>
        <div class="term-explanation">Typically 37°C for mammalian cells (= body temperature).</div>
    </div>
    <div class="interactive-term" data-term="CO₂">
        <div class="term-title">CO₂</div>
        <div class="term-explanation">Usually 5% in the incubator to work with the NaHCO₃ buffer system in the medium to maintain physiological pH of 7.2-7.4.</div>
    </div>
    <div class="interactive-term" data-term="Humidity">
        <div class="term-title">Humidity</div>
        <div class="term-explanation">High (70-100%) to prevent evaporation of medium.</div>
    </div>
    <div class="interactive-term" data-term="Sterility">
        <div class="term-title">Sterility</div>
        <div class="term-explanation">Essential to prevent contamination.</div>
    </div>
</div>

            <p>Suitable temperature, CO₂ and humidity are provided by an incubator.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                <img src="images/image071.png" alt="Incubator closed" class="rounded-lg shadow-md mx-auto block max-w-full w-auto enlarged-image">
                <img src="images/image072.png" alt="Incubator open" class="rounded-lg shadow-md mx-auto block max-w-full w-auto enlarged-image">
                <img src="images/image073.png" alt="Incubator interior" class="rounded-lg shadow-md mx-auto block max-w-full w-auto enlarged-image">
            </div>

            <p>On the pictures you can see an incubator in different states (open & closed). It has 2 doors that need to be opened to place vessels with cells inside/take them out of the incubator; the outer door and another glass door.</p>
            
            <p>Therefore, the (mammalian) cells are stored in the incubator all the time. Only if a step of an experiment is conducted the (mammalian) cells are taken out of the incubator.</p>

            <h4 class="styled-h4">Culture Media</h4>
            <p><strong>Culture Media:</strong> Provides nutrients for cell growth.</p>
            <p>The culture medium for cell culture must be such that it enables the cells to proliferate and grow and, if necessary, also to differentiate and perform typical cell functions. The first successful chemically defined medium was created by Harry Eagle in 1955, after previous work had been done with culture media that contained complex organic additives and were not standardized.</p>

           <div class="interactive-box">
    <h4>Interactive: Media Prep Station</h4>
    <p class="text-sm mb-3"><strong>You are preparing complete DMEM. Click on each component you would add to the basal DMEM to learn more about it.</strong></p>
    
    <div id="media-components" class="space-y-3">
        <div class="media-component-info-box hidden bg-blue-50 border-l-4 border-blue-400 p-3" id="component-1">
            <h5 class="font-semibold text-blue-800">Basal DMEM (salts, amino acids, vitamins, glucose)</h5>
            <p class="text-sm text-blue-700">Basal DMEM (Dulbecco's Modified Eagle's Medium): Contains a mixture of inorganic salts (for osmotic balance and membrane potential), L-amino acids (building blocks for proteins), vitamins (cofactors for enzymes), D-glucose (energy source), and often sodium pyruvate (additional energy source). This is the foundation of your complete medium.</p>
        </div>
        <div class="media-component-info-box hidden bg-green-50 border-l-4 border-green-400 p-3" id="component-2">
            <h5 class="font-semibold text-green-800">Fetal Bovine Serum (FBS/FCS) - typically 10%</h5>
            <p class="text-sm text-green-700">Fetal Bovine Serum (FBS) or Fetal Calf Serum (FCS): Typically added at 5-20% (10% is common). It's a complex mixture providing growth factors, hormones, attachment factors, transport proteins, and trace elements. Crucial for the growth of many cell lines. Batch-to-batch variability is a concern. Can be heat-inactivated (56°C for 30 min) to destroy complement proteins that might lyse cells.</p>
        </div>
        <div class="media-component-info-box hidden bg-yellow-50 border-l-4 border-yellow-400 p-3" id="component-3">
            <h5 class="font-semibold text-yellow-800">L-Glutamine (or GlutaMAX™) - typically 2-4 mM</h5>
            <p class="text-sm text-yellow-700">L-Glutamine: An essential amino acid required by cells in culture, serving as a nitrogen source for nucleotide and amino acid synthesis, and an energy source. It's unstable in liquid media at 37°C, degrading over time (half-life ~1 week). Often added fresh or a stable dipeptide form like GlutaMAX™ is used. Typical concentration is 2-4 mM.</p>
        </div>
        <div class="media-component-info-box hidden bg-purple-50 border-l-4 border-purple-400 p-3" id="component-4">
            <h5 class="font-semibold text-purple-800">Penicillin-Streptomycin (optional, but common) - typically 1%</h5>
            <p class="text-sm text-purple-700">Penicillin-Streptomycin (Pen-Strep): An antibiotic/antimycotic solution typically added at 1% (final concentration ~100 U/mL Penicillin, ~100 µg/mL Streptomycin). Used to prevent bacterial contamination. While common, routine use can mask poor aseptic technique and may lead to antibiotic-resistant strains or affect cell physiology. Should be used judiciously.</p>
        </div>
        <div class="media-component-info-box hidden bg-red-50 border-l-4 border-red-400 p-3" id="component-5">
            <h5 class="font-semibold text-red-800">Phenol Red</h5>
            <p class="text-sm text-red-700">A pH indicator. Medium is typically reddish-orange at pH 7.4. It turns yellow if acidic (e.g., due to excessive cell metabolism or bacterial contamination) and purple if alkaline.</p>
        </div>
        <div class="media-component-info-box hidden bg-indigo-50 border-l-4 border-indigo-400 p-3" id="component-6">
            <h5 class="font-semibold text-indigo-800">Other Additives (depending on cell type/media)</h5>
            <p class="text-sm text-indigo-700">Sodium Bicarbonate (NaHCO₃ - primary buffering component with incubator CO₂), HEPES buffer (alternative non-CO₂ dependent buffer), non-essential amino acids, specific growth factors.</p>
        </div>
    </div>
    
    <div class="grid grid-cols-3 gap-2 mt-4">
        <button class="media-component-button px-3 py-2 rounded text-sm text-white transition-colors" data-component="1">1. Basal DMEM</button>
        <button class="media-component-button px-3 py-2 rounded text-sm text-white transition-colors" data-component="2">2. FBS/FCS (10%)</button>
        <button class="media-component-button px-3 py-2 rounded text-sm text-white transition-colors" data-component="3">3. L-Glutamine</button>
        <button class="media-component-button px-3 py-2 rounded text-sm text-white transition-colors" data-component="4">4. Pen-Strep</button>
        <button class="media-component-button px-3 py-2 rounded text-sm text-white transition-colors" data-component="5">5. Phenol Red</button>
        <button class="media-component-button px-3 py-2 rounded text-sm text-white transition-colors" data-component="6">6. Other Additives</button>
    </div>
</div>

            <h4 class="styled-h4">Vessels for storing the cells</h4>
            <p>Animal cells are cultured in sterile plastic vessels (bottles, plates and dishes) that have undergone special surface treatment.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <img src="images/image074.png" alt="Flask with cells and medium" class="rounded-lg shadow-md mx-auto block max-w-full w-auto enlarged-image">
                <img src="images/image075.png" alt="Cell culture vessels" class="rounded-lg shadow-md mx-auto block max-w-full w-auto enlarged-image">
            </div>
            <p>The pictures show a flask that contains cells (not visible) and growth medium.</p>

            <p>Flasks, plates and dishes are the three main types of cell culture vessels. All of them are available in different sizes. Thus, they have different growth areas and need different volumes of culture medium. The common vessels for cell culture and their needed volume of culture medium as well as their growth area are shown in the following table.</p>
            
            <table class="w-full border-collapse border border-gray-300 bg-slate-100 p-3 rounded-md shadow-sm mb-4">
                <thead>
                    <tr class="bg-purple-100">
                        <th class="border border-gray-300 p-2 text-left font-semibold">Vessel Type</th>
                        <th class="border border-gray-300 p-2 text-left font-semibold">Size/Volume</th>
                        <th class="border border-gray-300 p-2 text-left font-semibold">Growth Area (cm²)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                    </tr>
                    <tr>
                        <td class="border border-gray-300 p-2 font-medium">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                        <td class="border border-gray-300 p-2">XXXX</td>
                    </tr>
                </tbody>
            </table>

            <h4 class="styled-h4">Aseptic Technique & Sterilization</h4>
            <p>Aseptic technique refers to the practices used to prevent contamination (especially of mammalian cells with e.g. bacteria). For this the most important thing is that all work is performed aseptically under a laminar flow hood which provides a sterile environment. This includes experiments but also everything else that comes into contact with the cells e.g. culture media preparation. Thereby each culture media component is added aseptically under the laminar flow hood.</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <img src="images/image077.png" alt="Laminar flow hood exterior" class="rounded-lg shadow-md mx-auto block max-w-full w-auto enlarged-image">
                <img src="images/image078.png" alt="Working in laminar flow hood" class="rounded-lg shadow-md mx-auto block max-w-full w-auto enlarged-image">
            </div>
            <p>The left picture shows the theory of a laminar flow hood's airflow. On the right picture a real laminar flow hood in the cell culture room can be seen. Left image from <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROi7BIO591EaISDUqK7cwWF5Vkw7dA24fi7w&s" target="_blank" rel="noopener noreferrer" style="color: var(--orange-medium); text-decoration: underline; font-weight: 600;">here</a></p>

            <h4 class="styled-h4">Laminar Flow Hood Principle</h4>
            <p>A laminar flow hood's principle relies on:</p>
            
            <div class="laminar-flow-steps">
                <div class="laminar-step" data-step="1">
                    <div class="step-header">
                        <span class="step-number">1</span>
                        <span class="step-title">Air Intake & Pre-Filtration</span>
                        <span class="step-indicator">▼</span>
                    </div>
                    <div class="step-content hidden">
                        A fan or blower draws ambient room air into the cabinet. This air first passes through a pre-filter, which traps larger particles.
                    </div>
                </div>
                
                <div class="laminar-step" data-step="2">
                    <div class="step-header">
                        <span class="step-number">2</span>
                        <span class="step-title">HEPA Filtration</span>
                        <span class="step-indicator">▼</span>
                    </div>
                    <div class="step-content hidden">
                        The air then moves through a High-Efficiency Particulate Air (HEPA) filter, which captures almost all remaining microscopic particles, such as bacteria, fungi, and other contaminants.
                    </div>
                </div>
                
                <div class="laminar-step" data-step="3">
                    <div class="step-header">
                        <span class="step-number">3</span>
                        <span class="step-title">Unidirectional Airflow</span>
                        <span class="step-indicator">▼</span>
                    </div>
                    <div class="step-content hidden">
                        The now particle-free air flows out of the HEPA filter and across the work surface in a consistent, single direction -- either horizontally or vertically.
                    </div>
                </div>
                
                <div class="laminar-step" data-step="4">
                    <div class="step-header">
                        <span class="step-number">4</span>
                        <span class="step-title">Sterile Workspace</span>
                        <span class="step-indicator">▼</span>
                    </div>
                    <div class="step-content hidden">
                        This constant, uniform flow of clean air physically sweeps the work area, preventing airborne particles from settling on samples or equipment.
                    </div>
                </div>
                
                <div class="laminar-step" data-step="5">
                    <div class="step-header">
                        <span class="step-number">5</span>
                        <span class="step-title">Contamination Prevention</span>
                        <span class="step-indicator">▼</span>
                    </div>
                    <div class="step-content hidden">
                        The enclosed nature of the cabinet, with its side panels, ensures a constant positive air pressure, preventing external, contaminated air from entering the workspace.
                    </div>
                </div>
            </div>

            <h4 class="styled-h4">Fundamental rules for sterile work in cell culture</h4>
            <div class="space-y-4">
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">1.</span>
                        <span class="rule-title">Check cultures for contamination before starting work</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        Check cultures for contamination before starting work (cloudiness of the medium, microscopically).
                    </div>
                </div>
                
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">2.</span>
                        <span class="rule-title">Keep your work surface tidy and disinfect it</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        Always keep your work surface tidy and disinfect it before starting work.
                    </div>
                </div>
                
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">3.</span>
                        <span class="rule-title">Use sterile glass or disposable plastic pipettes</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        Essentially, sterile glass or disposable plastic pipettes are used in cell culture. To take glass pipettes out of the metal box, open it, shake it gently, and hold it downwards so that the pipettes stick out a little from the box. Then you can grab a single pipette at the top (and only there!) without touching the others, which you should definitely avoid to prevent contamination.
                    </div>
                </div>
                
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">4.</span>
                        <span class="rule-title">Pipette without touching storage bottles or culture vessels</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        Pipetting should be carried out without touching the storage bottle or culture vessels if possible. Changing the pipette more frequently reduces the risk of contamination of both the cultures and the medium in the storage bottle. If liquid gets into the cotton wool during pipetting or if the pipette is accidentally knocked against an object, it must be replaced. To remove media and buffers from the culture vessels, pipette out the corresponding supernatants.
                    </div>
                </div>
                
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">5.</span>
                        <span class="rule-title">Wear proper protective equipment and disinfect regularly</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        Wear a lab coat and gloves, and disinfect gloves with 80% ethanol. Disinfect gloves regularly, especially when coming into contact with materials outside the sterile workbench!
                    </div>
                </div>
                
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">6.</span>
                        <span class="rule-title">Disinfect devices and bottles with ethanol</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        Disinfect devices and bottles on the outside with 80% ethanol.
                    </div>
                </div>
                
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">7.</span>
                        <span class="rule-title">Never work over open sterile containers</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        Never work over open sterile containers. To remove medium from the storage bottle, unscrew the lid and hold it between your index and middle fingers so that the inside with the thread faces away from the bottle when you hold it in your hand. After completing the task, put the lid back on the bottle (it does not need to be screwed on). If it is not possible to hold the cap in your hand, place it in the sterile area at the back.
                    </div>
                </div>
                
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">8.</span>
                        <span class="rule-title">Only use sterile equipment and solutions</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        Only sterile equipment and solutions are used for all cell culture activities. If sterile items come into contact with non-sterile areas, use new glass/plastic ware.
                    </div>
                </div>
                
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">9.</span>
                        <span class="rule-title">Prepare your workspace properly</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        Only the materials required for the respective experiment are placed under the laminar flow hood, and they are sprayed or wiped with 80% ethanol before being placed there. Note on 80% Ethanol: Ethanol is only effective as a bactericide when it contains a certain amount of water. Absolute alcohol, on the other hand, has a preservative effect on bacterial spores and is therefore not suitable for disinfection.
                    </div>
                </div>
                
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">10.</span>
                        <span class="rule-title">Clean up spills immediately</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        Wipe up spilled solutions immediately with an alcohol-soaked tissue.
                    </div>
                </div>
                
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">11.</span>
                        <span class="rule-title">Remove waste and utensils properly</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        Waste and utensils that are no longer needed are removed from the experiment room and disposed of in the designated containers, if necessary.
                    </div>
                </div>
                
                <div class="sterile-rule">
                    <div class="rule-header">
                        <span class="rule-number">12.</span>
                        <span class="rule-title">Work within the sterile area</span>
                        <span class="expand-icon">+</span>
                    </div>
                    <div class="rule-details hidden">
                        All activities must be carried out within the sterile area. The sterile area of the workbench begins behind the front air vents and ends in front of the air vents on the rear wall → Air vents in the worktop remain open.
                    </div>
                </div>
            </div>

            <h4 class="styled-h4">Sterilization Methods</h4>
            <p><strong>Sterilization aims to kill or inactivate all viable microorganisms.</strong></p>
            
            <div class="sterilization-methods">
                <div class="sterilization-method" data-method="flaming">
                    <div class="method-header">
                        <span class="method-title">Flaming</span>
                        <span class="method-indicator">ℹ</span>
                    </div>
                    <div class="method-details hidden">
                        Sterilizing bottle necks, metal tools.
                    </div>
                </div>
                
                <div class="sterilization-method" data-method="uv">
                    <div class="method-header">
                        <span class="method-title">UV Light (254nm)</span>
                        <span class="method-indicator">ℹ</span>
                    </div>
                    <div class="method-details hidden">
                        Surface sterilization (e.g., inside laminar flow hoods). Max 30cm distance. Safety hazard (burns, mutagenesis).
                    </div>
                </div>
                
                <div class="sterilization-method" data-method="filtration">
                    <div class="method-header">
                        <span class="method-title">Sterile Filtration (0.22 μm filter)</span>
                        <span class="method-indicator">ℹ</span>
                    </div>
                    <div class="method-details hidden">
                        For heat-sensitive liquids like media and serum.
                    </div>
                </div>
                
                <div class="sterilization-method" data-method="autoclave">
                    <div class="method-header">
                        <span class="method-title">Autoclaving (Steam Sterilization)</span>
                        <span class="method-indicator">ℹ</span>
                    </div>
                    <div class="method-details hidden">
                        High pressure and temperature (e.g., 121°C, 15 psi, 15-20 min) for liquids (not media with sensitive components), glassware, and some plastics.
                    </div>
                </div>
                
                <div class="sterilization-method" data-method="radiation">
                    <div class="method-header">
                        <span class="method-title">Gamma Radiation</span>
                        <span class="method-indicator">ℹ</span>
                    </div>
                    <div class="method-details hidden">
                        For pre-sterilized plastic consumables (flasks, pipettes).
                    </div>
                </div>
            </div>

            <h4 class="styled-h4">Contamination in Cell Culture</h4>
            <p>Contamination is a major issue in cell culture. Common types include:</p>
            
            <div class="contamination-types">
                <div class="contamination-type" data-type="bacteria">
                    <div class="contamination-header">
                        <span class="contamination-icon">🦠</span>
                        <span class="contamination-title">Bacteria</span>
                        <span class="contamination-indicator">+</span>
                    </div>
                    <div class="contamination-details hidden">
                        <strong>Description:</strong> Tiny, single-celled prokaryotes.<br>
                        <strong>Spot them by:</strong> Rapid medium turbidity (cloudiness), sudden pH drop (medium turns yellow), and sometimes a "storm" of moving particles visible under the microscope.
                    </div>
                </div>
                
                <div class="contamination-type" data-type="yeasts">
                    <div class="contamination-header">
                        <span class="contamination-icon">🍄</span>
                        <span class="contamination-title">Yeasts</span>
                        <span class="contamination-indicator">+</span>
                    </div>
                    <div class="contamination-details hidden">
                        <strong>Description:</strong> Single-celled eukaryotic fungi.<br>
                        <strong>Spot them by:</strong> Medium may become slightly turbid; individual ovoid or budding particles visible under microscope, often appearing as small, distinct dots or clusters.
                    </div>
                </div>
                
                <div class="contamination-type" data-type="molds">
                    <div class="contamination-header">
                        <span class="contamination-icon">🌿</span>
                        <span class="contamination-title">Molds (Fungi)</span>
                        <span class="contamination-indicator">+</span>
                    </div>
                    <div class="contamination-details hidden">
                        <strong>Description:</strong> Multicellular eukaryotic fungi that grow as hyphae (filaments).<br>
                        <strong>Spot them by:</strong> Visible fuzzy or cotton-like colonies, often on the surface of the medium or flask, and a network of filaments seen under the microscope.
                    </div>
                </div>
                
                <div class="contamination-type" data-type="mycoplasma">
                    <div class="contamination-header">
                        <span class="contamination-icon">🔬</span>
                        <span class="contamination-title">Mycoplasma</span>
                        <span class="contamination-indicator">+</span>
                    </div>
                    <div class="contamination-details hidden">
                        <strong>Description:</strong> Very small bacteria lacking a cell wall, making them hard to see and filter.<br>
                        <strong>Spot them by:</strong> Often no visible turbidity; signs include slower cell growth, changes in cell morphology, premature yellowing of medium, or a "milky way-like fog" around nuclei when stained with DAPI.
                    </div>
                </div>
                
                <div class="contamination-type" data-type="viruses">
                    <div class="contamination-header">
                        <span class="contamination-icon">⚡</span>
                        <span class="contamination-title">Viruses</span>
                        <span class="contamination-indicator">+</span>
                    </div>
                    <div class="contamination-details hidden">
                        <strong>Description:</strong> Submicroscopic infectious agents replicating only inside living cells.<br>
                        <strong>Spot them by:</strong> Often no immediate visible signs; may cause cytopathic effects (CPE) like cell rounding or lysis, but diagnosis usually requires specific assays (e.g., ELISA, PCR).
                    </div>
                </div>
                
                <div class="contamination-type" data-type="cross">
                    <div class="contamination-header">
                        <span class="contamination-icon">🔄</span>
                        <span class="contamination-title">Cross-contamination (other cell lines)</span>
                        <span class="contamination-indicator">+</span>
                    </div>
                    <div class="contamination-details hidden">
                        <strong>Description:</strong> Unwanted presence of a different cell line in the culture.<br>
                        <strong>Spot them by:</strong> Unexpected changes in cell morphology, growth rate, or experimental results; requires specific testing like STR profiling for confirmation.
                    </div>
                </div>
            </div>

            <div class="interactive-box">
                <h4>Interactive: Contamination Detective!</h4>
                <p class="mb-3"><strong>What type of contamination is most likely described in each scenario?</strong></p>
                
                <div id="contamination-scenarios" class="space-y-4">
                    <div class="contamination-scenario">
                        <p class="font-medium mb-2">1. Your cell culture medium has suddenly become cloudy, and under the microscope, you see tiny, fast-moving rod-shaped or spherical particles between your cells. The medium has also turned yellow quickly.</p>
                        <div class="space-y-1">
                            <button class="quiz-option" data-scenario="1" data-correct="false">Mycoplasma</button>
                            <button class="quiz-option" data-scenario="1" data-correct="false">Yeast</button>
                            <button class="quiz-option" data-scenario="1" data-correct="true">Bacteria</button>
                            <button class="quiz-option" data-scenario="1" data-correct="false">Viral</button>
                        </div>
                        <div class="feedback-message mt-1 p-1 rounded-md hidden" id="feedback-1"></div>
                    </div>

                    <div class="contamination-scenario">
                        <p class="font-medium mb-2">2. You notice a 'milky way-like fog' or tiny specks around the nuclei of your cells when stained with DAPI. Cell growth has slowed, and the medium turns yellow faster than usual, but there's no visible cloudiness.</p>
                        <div class="space-y-1">
                            <button class="quiz-option" data-scenario="2" data-correct="false">Fungal (mold)</button>
                            <button class="quiz-option" data-scenario="2" data-correct="true">Mycoplasma</button>
                            <button class="quiz-option" data-scenario="2" data-correct="false">Cross-contamination with other cells</button>
                            <button class="quiz-option" data-scenario="2" data-correct="false">Bacteria</button>
                        </div>
                        <div class="feedback-message mt-1 p-1 rounded-md hidden" id="feedback-2"></div>
                    </div>

                    <div class="contamination-scenario">
                        <p class="font-medium mb-2">3. You see fuzzy, filamentous structures growing in your flask, some of which might be floating on the surface of the medium. Some areas might have a cottony appearance.</p>
                        <div class="space-y-1">
                            <button class="quiz-option" data-scenario="3" data-correct="false">Yeast</button>
                            <button class="quiz-option" data-scenario="3" data-correct="false">Bacteria</button>
                            <button class="quiz-option" data-scenario="3" data-correct="true">Fungal (mold)</button>
                            <button class="quiz-option" data-scenario="3" data-correct="false">Mycoplasma</button>
                        </div>
                        <div class="feedback-message mt-1 p-1 rounded-md hidden" id="feedback-3"></div>
                    </div>
                </div>
            </div>
        </div>

        <style>
        .interactive-terms-grid.environment-conditions {
            grid-template-columns: repeat(2, 1fr);
            max-width: 600px;
            margin: 1.5rem auto;
        }

        @media (max-width: 600px) {
            .interactive-terms-grid.environment-conditions {
                grid-template-columns: 1fr;
            }
        }
        
        .media-component-button {
            background-color: rgba(133, 39, 158, 0.7) !important;
            border: 1px solid rgba(133, 39, 158, 0.5) !important;
            color: white !important;
        }

        .media-component-button:hover {
            background-color: rgba(133, 39, 158, 0.9) !important;
        }

        .media-component-button.selected {
            background-color: var(--purple-dark) !important;
            color: var(--text-secondary) !important;
            font-weight: bold !important;
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
        
        /* Laminar Flow Steps Styling */
        .laminar-flow-steps {
            background: linear-gradient(135deg, rgba(212, 43, 233, 0.05), rgba(255, 208, 0, 0.05));
            border: 1px solid var(--purple-light);
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin: 1.5rem 0;
        }
        
        .laminar-step {
            margin-bottom: 1rem;
            border-left: 3px solid var(--orange-medium);
            background: white;
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }
        
        .laminar-step:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transform: translateY(-2px);
        }
        
        .laminar-step:last-child {
            margin-bottom: 0;
        }
        
        .step-header {
            display: flex;
            align-items: center;
            padding: 1rem;
            cursor: pointer;
            background: linear-gradient(135deg, rgba(133, 39, 158, 0.1), rgba(255, 208, 0, 0.1));
            transition: all 0.3s ease;
        }
        
        .step-header:hover {
            background: linear-gradient(135deg, rgba(133, 39, 158, 0.15), rgba(255, 208, 0, 0.15));
        }
        
        .step-number {
            background: var(--orange-medium);
            color: white;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 1rem;
            flex-shrink: 0;
        }
        
        .step-title {
            flex-grow: 1;
            font-weight: 600;
            color: var(--purple-dark);
            font-size: 1.05rem;
        }
        
        .step-indicator {
            color: var(--orange-medium);
            font-weight: bold;
            transition: transform 0.3s ease;
        }
        
        .laminar-step.expanded .step-indicator {
            transform: rotate(180deg);
        }
        
        .step-content {
            padding: 1rem 1rem 1.5rem 4rem;
            color: var(--text-primary);
            line-height: 1.6;
            background: white;
        }
        
        /* Sterile Rules Styling */
        .sterile-rule {
            background: linear-gradient(135deg, rgba(246, 75, 204, 0.08), rgba(255, 208, 0, 0.08));
            border: 1px solid var(--orange-light);
            border-radius: 0.5rem;
            margin-bottom: 0.75rem;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .sterile-rule:hover {
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            transform: translateY(-1px);
        }
        
        .rule-header {
            display: flex;
            align-items: center;
            padding: 0.8rem 1rem;
            cursor: pointer;
            background: rgba(255, 208, 0, 0.1);
            transition: background-color 0.3s ease;
        }
        
        .rule-header:hover {
            background: rgba(255, 208, 0, 0.15);
        }
        
        .rule-number {
            background: var(--orange-accent);
            color: var(--purple-dark);
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 0.75rem;
            flex-shrink: 0;
            font-size: 0.9rem;
        }
        
        .rule-title {
            flex-grow: 1;
            font-weight: 600;
            color: var(--purple-dark);
            font-size: 1rem;
        }
        
        .expand-icon {
            color: var(--orange-medium);
            font-weight: bold;
            font-size: 1.2rem;
            transition: transform 0.3s ease;
        }
        
        .sterile-rule.expanded .expand-icon {
            transform: rotate(45deg);
        }
        
        .rule-details {
            padding: 0.75rem 1rem 1rem 3.5rem;
            color: var(--text-primary);
            line-height: 1.6;
            background: white;
        }
        
        /* Sterilization Methods Styling */
        .sterilization-methods {
            display: grid;
            gap: 0.75rem;
            margin: 1.5rem 0;
        }
        
        .sterilization-method {
            background: white;
            border: 1px solid var(--purple-light);
            border-radius: 0.5rem;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .sterilization-method:hover {
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            border-color: var(--orange-medium);
        }
        
        .method-header {
            display: flex;
            align-items: center;
            padding: 0.75rem 1rem;
            cursor: pointer;
            background: linear-gradient(135deg, rgba(133, 39, 158, 0.1), rgba(212, 43, 233, 0.1));
            transition: background-color 0.3s ease;
        }
        
        .method-header:hover {
            background: linear-gradient(135deg, rgba(133, 39, 158, 0.15), rgba(212, 43, 233, 0.15));
        }
        
        .method-title {
            flex-grow: 1;
            font-weight: 600;
            color: var(--purple-dark);
            font-size: 1rem;
        }
        
        .method-indicator {
            background: var(--orange-medium);
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.8rem;
        }
        
        .method-details {
            padding: 0.75rem 1rem;
            color: var(--text-primary);
            line-height: 1.6;
            background: rgba(255, 255, 255, 0.8);
        }
        
        /* Contamination Types Styling */
        .contamination-types {
            display: grid;
            gap: 0.75rem;
            margin: 1.5rem 0;
        }
        
        .contamination-type {
            background: white;
            border: 1px solid var(--purple-light);
            border-radius: 0.5rem;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .contamination-type:hover {
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
            border-color: var(--orange-medium);
        }
        
        .contamination-header {
            display: flex;
            align-items: center;
            padding: 0.75rem 1rem;
            cursor: pointer;
            background: linear-gradient(135deg, rgba(246, 75, 204, 0.08), rgba(255, 208, 0, 0.08));
            transition: background-color 0.3s ease;
        }
        
        .contamination-header:hover {
            background: linear-gradient(135deg, rgba(246, 75, 204, 0.12), rgba(255, 208, 0, 0.12));
        }
        
        .contamination-icon {
            font-size: 1.5rem;
            margin-right: 0.75rem;
            flex-shrink: 0;
        }
        
        .contamination-title {
            flex-grow: 1;
            font-weight: 600;
            color: var(--purple-dark);
            font-size: 1rem;
        }
        
        .contamination-indicator {
            color: var(--orange-medium);
            font-weight: bold;
            font-size: 1.2rem;
            transition: transform 0.3s ease;
        }
        
        .contamination-type.expanded .contamination-indicator {
            transform: rotate(45deg);
        }
        
        .contamination-details {
            padding: 0.75rem 1rem;
            color: var(--text-primary);
            line-height: 1.6;
            background: rgba(255, 255, 255, 0.8);
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

// Helper functions for this module
function handleMediaComponent(componentNumber) {
    // Hide all component info boxes
    document.querySelectorAll('.media-component-info-box').forEach(box => {
        box.classList.add('hidden');
    });
    
    // Remove selected state from all buttons
    document.querySelectorAll('.media-component-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Show selected component info
    const selectedComponent = document.getElementById(`component-${componentNumber}`);
    if (selectedComponent) {
        selectedComponent.classList.remove('hidden');
    }
    
    // Add selected state to clicked button
    const selectedButton = document.querySelector(`[data-component="${componentNumber}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}

function handleContaminationScenario(button, scenario, isCorrect) {
    const scenarioDiv = button.closest('.contamination-scenario');
    const allButtons = scenarioDiv.querySelectorAll('.quiz-option');
    const feedbackDiv = document.getElementById(`feedback-${scenario}`);
    
    // Disable all buttons in this scenario
    allButtons.forEach(btn => btn.disabled = true);
    
    // Style the clicked button
    if (isCorrect) {
        button.classList.add('correct');
        feedbackDiv.innerHTML = '<strong>Correct!</strong>';
        feedbackDiv.className = 'feedback-message mt-1 p-1 rounded-md bg-green-100 text-green-800';
    } else {
        button.classList.add('incorrect');
        // Find and highlight the correct answer
        const correctButton = scenarioDiv.querySelector('[data-correct="true"]');
        if (correctButton) {
            correctButton.classList.add('correct');
        }
        feedbackDiv.innerHTML = `<strong>Incorrect.</strong> The correct answer is: <strong>${correctButton ? correctButton.textContent : 'Unknown'}</strong>`;
        feedbackDiv.className = 'feedback-message mt-1 p-1 rounded-md bg-red-100 text-red-800';
    }
    
    feedbackDiv.classList.remove('hidden');
}

function initializeInteractiveTerms(rootElement) {
    // Handle interactive term clicks - scoped to this module only
    rootElement.querySelectorAll('.interactive-term').forEach(term => {
        term.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle expanded state
            const isExpanded = term.classList.contains('expanded');
            
            // Close all other expanded terms IN THIS MODULE ONLY
            rootElement.querySelectorAll('.interactive-term.expanded').forEach(otherTerm => {
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
        if (!e.target.closest('.interactive-term') || !rootElement.contains(e.target)) {
            rootElement.querySelectorAll('.interactive-term.expanded').forEach(term => {
                term.classList.remove('expanded', 'active');
            });
        }
    });

    // Close expanded terms on escape key - scoped to this module
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            rootElement.querySelectorAll('.interactive-term.expanded').forEach(term => {
                term.classList.remove('expanded', 'active');
            });
        }
    });
}

function initializeLaminarSteps(rootElement) {
    rootElement.querySelectorAll('.laminar-step').forEach(step => {
        const header = step.querySelector('.step-header');
        const content = step.querySelector('.step-content');
        
        header.addEventListener('click', () => {
            const isExpanded = step.classList.contains('expanded');
            
            // Close all other steps
            rootElement.querySelectorAll('.laminar-step').forEach(otherStep => {
                if (otherStep !== step) {
                    otherStep.classList.remove('expanded');
                    otherStep.querySelector('.step-content').classList.add('hidden');
                }
            });
            
            // Toggle current step
            if (isExpanded) {
                step.classList.remove('expanded');
                content.classList.add('hidden');
            } else {
                step.classList.add('expanded');
                content.classList.remove('hidden');
            }
        });
    });
}

function initializeSterileRules(rootElement) {
    rootElement.querySelectorAll('.sterile-rule').forEach(rule => {
        const header = rule.querySelector('.rule-header');
        const details = rule.querySelector('.rule-details');
        
        header.addEventListener('click', () => {
            const isExpanded = rule.classList.contains('expanded');
            
            // Toggle current rule
            if (isExpanded) {
                rule.classList.remove('expanded');
                details.classList.add('hidden');
            } else {
                rule.classList.add('expanded');
                details.classList.remove('hidden');
            }
        });
    });
}

function initializeSterilizationMethods(rootElement) {
    rootElement.querySelectorAll('.sterilization-method').forEach(method => {
        const header = method.querySelector('.method-header');
        const details = method.querySelector('.method-details');
        
        header.addEventListener('click', () => {
            const isExpanded = !details.classList.contains('hidden');
            
            // Close all other methods
            rootElement.querySelectorAll('.sterilization-method').forEach(otherMethod => {
                if (otherMethod !== method) {
                    otherMethod.querySelector('.method-details').classList.add('hidden');
                }
            });
            
            // Toggle current method
            if (isExpanded) {
                details.classList.add('hidden');
            } else {
                details.classList.remove('hidden');
            }
        });
    });
}

function initializeContaminationTypes(rootElement) {
    rootElement.querySelectorAll('.contamination-type').forEach(type => {
        const header = type.querySelector('.contamination-header');
        const details = type.querySelector('.contamination-details');
        
        header.addEventListener('click', () => {
            const isExpanded = type.classList.contains('expanded');
            
            // Toggle current type
            if (isExpanded) {
                type.classList.remove('expanded');
                details.classList.add('hidden');
            } else {
                type.classList.add('expanded');
                details.classList.remove('hidden');
            }
        });
    });
}

export default function initModule7(rootEl, sidebarEl) {
    // 1. Add sidebar link
    const link = document.createElement('a');
    link.href = '#module-7';
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
            <div id="quiz-container-module-7"></div>
        </div>`;
    rootEl.insertAdjacentHTML('beforeend', quizHtml);
    
    // 3. Attach event listeners
    // Media component buttons
    document.querySelectorAll('.media-component-button').forEach(button => {
        button.addEventListener('click', () => {
            const componentNumber = button.getAttribute('data-component');
            handleMediaComponent(componentNumber);
        });
    });
    
    // Contamination scenario buttons
    document.querySelectorAll('#contamination-scenarios .quiz-option').forEach(button => {
        button.addEventListener('click', () => {
            const scenario = button.getAttribute('data-scenario');
            const isCorrect = button.getAttribute('data-correct') === 'true';
            handleContaminationScenario(button, scenario, isCorrect);
        });
    });

    // 4. Render main module quiz
    renderQuiz(QUIZ_DATA, 'quiz-container-module-7');

    // 5. Initialize all interactive functionalities
    initializeInteractiveTerms(rootEl);
    initializeLaminarSteps(rootEl);
    initializeSterileRules(rootEl);
    initializeSterilizationMethods(rootEl);
    initializeContaminationTypes(rootEl);
}
