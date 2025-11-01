// Word lists for generating memorable passwords
const wordLists = {
    common: ['swift', 'brave', 'smart', 'quick', 'cool', 'star', 'dash', 'zoom', 'glow', 'bolt', 'wave', 'fire', 'sky', 'moon', 'sun', 'wind', 'rain', 'snow', 'peak', 'flow'],
    tech: ['cyber', 'pixel', 'code', 'data', 'cloud', 'hack', 'byte', 'link', 'node', 'sync'],
    nature: ['ocean', 'forest', 'river', 'tiger', 'eagle', 'lion', 'wolf', 'bear', 'fox', 'hawk'],
    action: ['jump', 'fly', 'run', 'climb', 'dive', 'race', 'rush', 'soar', 'leap', 'dash']
};

// Get DOM elements
const userInput = document.getElementById('userInput');
const generateBtn = document.getElementById('generateBtn');
const resultSection = document.getElementById('resultSection');
const generatedPassword = document.getElementById('generatedPassword');
const copyBtn = document.getElementById('copyBtn');
const copyNotification = document.getElementById('copyNotification');
const validationMessage = document.getElementById('validationMessage');
const usedEmail = document.getElementById('usedEmail');

// Gmail criteria elements
const criteriaElements = {
    length: document.getElementById('criteria-length'),
    letters: document.getElementById('criteria-letters'),
    numbers: document.getElementById('criteria-numbers'),
    symbols: document.getElementById('criteria-symbols'),
    strong: document.getElementById('criteria-strong')
};

// Validate input against Gmail patterns
function validateInput(input) {
    const validationMsg = document.getElementById('validationMessage');
    
    if (!input || input.trim() === '') {
        validationMsg.textContent = '⚠️ Please enter your email or username';
        validationMsg.className = 'validation-message error';
        return false;
    }
    
    // Check if it looks like an email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmail = emailPattern.test(input);
    
    if (input.includes('@') && !isEmail) {
        validationMsg.textContent = '⚠️ Please enter a valid email format';
        validationMsg.className = 'validation-message error';
        return false;
    }
    
    if (input.length < 3) {
        validationMsg.textContent = '⚠️ Input should be at least 3 characters';
        validationMsg.className = 'validation-message error';
        return false;
    }
    
    validationMsg.textContent = '✓ Valid input! Ready to generate password';
    validationMsg.className = 'validation-message success';
    return true;
}

// Check Gmail password criteria
function checkGmailCriteria(password) {
    const criteria = {
        length: password.length >= 8 && password.length <= 100,
        letters: /[a-z]/.test(password) && /[A-Z]/.test(password),
        numbers: /[0-9]/.test(password),
        symbols: /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
        strong: !/^(password|12345678|qwerty|abc123|letmein)$/i.test(password)
    };
    
    // Update UI for each criteria
    Object.keys(criteria).forEach(key => {
        const element = criteriaElements[key];
        if (criteria[key]) {
            element.classList.add('checked');
            element.querySelector('.criteria-icon').textContent = '✓';
        } else {
            element.classList.remove('checked');
            element.querySelector('.criteria-icon').textContent = '○';
        }
    });
    
    return Object.values(criteria).every(val => val);
}

// Generate password based on user input
function generatePassword(input) {
    if (!validateInput(input)) {
        return null;
    }

    // Clean the input - extract useful parts
    let cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Extract base word from input
    let baseWord = '';
    if (cleanInput.length >= 3) {
        baseWord = cleanInput.substring(0, Math.min(cleanInput.length, 4));
    } else {
        baseWord = cleanInput;
    }

    // Get a random word from word lists
    const allWords = [...wordLists.common, ...wordLists.tech, ...wordLists.nature, ...wordLists.action];
    const randomWord = allWords[Math.floor(Math.random() * allWords.length)];

    // Combine base with random word
    let passwordBase = baseWord + randomWord;
    
    // If too short, add another word
    if (passwordBase.length < 6) {
        const additionalWord = allWords[Math.floor(Math.random() * allWords.length)];
        passwordBase = passwordBase + additionalWord.substring(0, 3);
    }

    // Take only what we need (leaving room for capital, @, and numbers)
    passwordBase = passwordBase.substring(0, 6);

    // Capitalize first letter
    passwordBase = passwordBase.charAt(0).toUpperCase() + passwordBase.slice(1);

    // Generate 2-3 random numbers
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const num3 = Math.floor(Math.random() * 10);

    // Build password: Capital letter + lowercase letters + @ + numbers
    // Format: Xxxxxx@NNN (10 characters)
    let password = passwordBase + '@' + num1 + num2 + num3;

    // Ensure exactly 10 characters
    if (password.length > 10) {
        password = password.substring(0, 10);
    } else if (password.length < 10) {
        // Add more random numbers if needed
        while (password.length < 10) {
            password += Math.floor(Math.random() * 10);
        }
    }

    // Verify Gmail criteria
    checkGmailCriteria(password);

    return password;
}

// Real-time input validation
function handleInputValidation() {
    const input = userInput.value;
    
    if (input.length === 0) {
        validationMessage.textContent = '';
        validationMessage.className = 'validation-message';
        return;
    }
    
    validateInput(input);
}

// Add input animation
userInput.addEventListener('focus', function() {
    this.parentElement.style.transform = 'scale(1.02)';
});

userInput.addEventListener('blur', function() {
    this.parentElement.style.transform = 'scale(1)';
});

// Generate button click handler
generateBtn.addEventListener('click', function() {
    const input = userInput.value;
    const password = generatePassword(input);
    
    if (password) {
        // Add loading animation
        generateBtn.classList.add('loading');
        generateBtn.disabled = true;
        
        // Simulate generation delay for better UX
        setTimeout(() => {
            generatedPassword.value = password;
            usedEmail.textContent = input; // Display the email/username used
            resultSection.classList.remove('hidden');
            
            // Smooth scroll to result section without page jump
            setTimeout(() => {
                resultSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center',
                    inline: 'nearest'
                });
            }, 100);
            
            // Remove loading state
            generateBtn.classList.remove('loading');
            generateBtn.disabled = false;
            
            // Add animation to password display
            generatedPassword.style.animation = 'none';
            setTimeout(() => {
                generatedPassword.style.animation = 'fadeIn 0.5s ease-out';
            }, 10);
        }, 800);
    }
});

// Allow Enter key to generate password
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generateBtn.click();
    }
});

// Copy to clipboard functionality
copyBtn.addEventListener('click', function() {
    const password = generatedPassword.value;
    
    // Copy to clipboard
    navigator.clipboard.writeText(password).then(() => {
        // Show notification
        copyNotification.classList.add('show');
        
        // Add success animation to button
        copyBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            copyBtn.style.transform = 'scale(1)';
        }, 100);
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            copyNotification.classList.remove('show');
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy password. Please copy manually.');
    });
});

// Add typing effect with validation
let typingTimer;
userInput.addEventListener('input', function() {
    clearTimeout(typingTimer);
    this.style.borderColor = 'rgba(99, 102, 241, 0.5)';
    
    typingTimer = setTimeout(() => {
        handleInputValidation();
        if (this.value.length > 0) {
            this.style.borderColor = 'var(--success-color)';
        } else {
            this.style.borderColor = 'rgba(99, 102, 241, 0.3)';
        }
    }, 500);
});

// Add particle effect on button click
generateBtn.addEventListener('click', function(e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Create particles
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.borderRadius = '50%';
        particle.style.background = 'rgba(255, 255, 255, 0.8)';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 6;
        const velocity = 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let opacity = 1;
        let x = 0;
        let y = 0;
        
        const animate = () => {
            opacity -= 0.02;
            x += vx * 0.02;
            y += vy * 0.02;
            
            particle.style.opacity = opacity;
            particle.style.transform = `translate(${x}px, ${y}px)`;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                document.body.removeChild(particle);
            }
        };
        
        animate();
    }
});

// Initialize - focus on input and set initial criteria state
window.addEventListener('load', () => {
    userInput.focus();
    
    // Set initial criteria state (unchecked)
    Object.values(criteriaElements).forEach(element => {
        element.classList.remove('checked');
        element.querySelector('.criteria-icon').textContent = '○';
    });
});
