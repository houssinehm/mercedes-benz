function showLogin() {
    const welcome = document.getElementById('welcomePage');
    const login = document.getElementById('loginSteps');
    const leftSection = document.getElementById('leftSection');
    const rightSection = document.getElementById('rightSection');
    
    welcome.classList.remove('visible');
    setTimeout(() => {
        welcome.style.display = 'none';
        login.style.display = 'flex';
        leftSection.classList.remove('hidden');
        rightSection.classList.remove('full-width');
        setTimeout(() => login.classList.add('visible'), 10);
    }, 400);
}

function nextStep(stepNumber) {
    const currentStep = document.querySelector('.form-step.active');
    const nextStep = document.getElementById(`step${stepNumber}`);
    const currentNumber = document.querySelector('.step-number.active');
    const nextNumber = document.querySelector(`.step-number[data-step="${stepNumber}"]`);
    const leftSection = document.getElementById('leftSection');
    const rightSection = document.getElementById('rightSection');
    
    currentStep.classList.add('exiting');
    currentNumber.classList.remove('active');
    if (stepNumber > parseInt(currentNumber.dataset.step)) {
        currentNumber.classList.add('completed');
        document.querySelector(`.step-line[data-line="${currentNumber.dataset.step}"]`).classList.add('completed');
    } else {
        document.querySelector(`.step-line[data-line="${stepNumber}"]`).classList.remove('completed');
        document.querySelector(`.step-number[data-step="${parseInt(stepNumber) + 1}"]`).classList.remove('completed');
    }
    
    setTimeout(() => {
        currentStep.classList.remove('active', 'exiting');
        nextStep.classList.add('active');
        nextNumber.classList.add('active');
        
        // Show/hide left section based on step
        if (stepNumber === 3) {
            leftSection.classList.add('hidden');
            rightSection.classList.add('full-width');
        } else {
            leftSection.classList.remove('hidden');
            rightSection.classList.remove('full-width');
        }
    }, 400);
}

function backToWelcome() {
    const login = document.getElementById('loginSteps');
    const welcome = document.getElementById('welcomePage');
    const stepNumbers = document.querySelectorAll('.step-number');
    const stepLines = document.querySelectorAll('.step-line');
    const leftSection = document.getElementById('leftSection');
    const rightSection = document.getElementById('rightSection');
    
    login.classList.remove('visible');
    setTimeout(() => {
        login.style.display = 'none';
        welcome.style.display = 'block';
        setTimeout(() => {
            welcome.classList.add('visible');
            // Reset steps
            stepNumbers.forEach(num => {
                num.classList.remove('completed', 'active');
            });
            stepLines.forEach(line => {
                line.classList.remove('completed');
            });
            document.querySelector('.step-number[data-step="1"]').classList.add('active');
            document.querySelector('.form-step.active').classList.remove('active');
            document.getElementById('step1').classList.add('active');
            // Reset left section visibility
            leftSection.classList.remove('hidden');
            rightSection.classList.remove('full-width');
        }, 10);
    }, 400);
}