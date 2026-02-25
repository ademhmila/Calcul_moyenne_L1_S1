document.getElementById('averageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get all inputs for the 10 modules
    let analysisExam = parseFloat(document.getElementById('analysis_exam').value) || 0;
    let analysisDS = parseFloat(document.getElementById('analysis_ds').value) || 0;
    let analysisTP = parseFloat(document.getElementById('analysis_tp').value) || 0;

    let algebraExam = parseFloat(document.getElementById('algebra_exam').value) || 0;
    let algebraDS = parseFloat(document.getElementById('algebra_ds').value) || 0;
    let algebraTP = parseFloat(document.getElementById('algebra_tp').value) || 0;

    let algorithmExam = parseFloat(document.getElementById('algorithm_exam').value) || 0;
    let algorithmDS = parseFloat(document.getElementById('algorithm_ds').value) || 0;
    let algorithmTP = parseFloat(document.getElementById('algorithm_tp').value) || 0;

    let workshopExam = parseFloat(document.getElementById('workshop_exam').value) || 0;
    let workshopDS = parseFloat(document.getElementById('workshop_ds').value) || 0;
    let workshopTP = parseFloat(document.getElementById('workshop_tp').value) || 0;

    let architectureExam = parseFloat(document.getElementById('architecture_exam').value) || 0;
    let architectureDS = parseFloat(document.getElementById('architecture_ds').value) || 0;
    let architectureTP = parseFloat(document.getElementById('architecture_tp').value) || 0;

    let logicExam = parseFloat(document.getElementById('logic_exam').value) || 0;
    let logicDS = parseFloat(document.getElementById('logic_ds').value) || 0;
    let logicTP = parseFloat(document.getElementById('logic_tp').value) || 0;

    let osExam = parseFloat(document.getElementById('os_exam').value) || 0;
    let osDS = parseFloat(document.getElementById('os_ds').value) || 0;
    let osTP = parseFloat(document.getElementById('os_tp').value) || 0;

    let multimediaExam = parseFloat(document.getElementById('multimedia_exam').value) || 0;
    let multimediaDS = parseFloat(document.getElementById('multimedia_ds').value) || 0;
    let multimediaTP = parseFloat(document.getElementById('multimedia_tp').value) || 0;

    let englishDS1 = parseFloat(document.getElementById('english_ds1').value) || 0;
    let englishDS2 = parseFloat(document.getElementById('english_ds2').value) || 0;
    let englishORL = parseFloat(document.getElementById('english_orl').value) || 0;

    let businessDS1 = parseFloat(document.getElementById('business_ds1').value) || 0;
    let businessDS2 = parseFloat(document.getElementById('business_ds2').value) || 0;
    let businessORL = parseFloat(document.getElementById('business_orl').value) || 0;

    // Calculate each module average
    let averageAnalysis = (analysisExam * 0.7) + (analysisDS * 0.2) + (analysisTP * 0.1);
    let averageAlgebra = (algebraExam * 0.7) + (algebraDS * 0.2) + (algebraTP * 0.1);
    let averageAlgorithm = (algorithmExam * 0.7) + (algorithmDS * 0.2) + (algorithmTP * 0.1);
    let averageWorkshop = (workshopExam * 0.7) + (workshopDS * 0.15) + (workshopTP * 0.15);
    let averageArchitecture = (architectureExam * 0.7) + (architectureDS * 0.15) + (architectureTP * 0.15);
    let averageLogic = (logicExam * 0.7) + (logicDS * 0.2) + (logicTP * 0.1);
    let averageOS = (osExam * 0.7) + (osDS * 0.15) + (osTP * 0.15);
    let averageMultimedia = (multimediaExam * 0.7) + (multimediaDS * 0.15) + (multimediaTP * 0.15);
    let averageEnglish = (englishDS1 * 0.4) + (englishDS2 * 0.4) + (englishORL * 0.2);
    let averageBusiness = (businessDS1 * 0.4) + (businessDS2 * 0.4) + (businessORL * 0.2);

    // Calculate final average
    let totalAverage = ((averageAnalysis * 1.5) + (averageAlgebra * 1.5)+ (averageAlgorithm *2) + (averageWorkshop *1.5) + 
                        (averageArchitecture * 2) +(averageLogic *1.5)+ (averageOS *1.5) + (averageMultimedia *1.5) + 
                        averageEnglish + averageBusiness) / 15;

    // Display the result
    document.getElementById('averageResult').textContent = totalAverage.toFixed(2);
});
