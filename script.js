// Flip Text App - JavaScript functionality

// Character mapping for upside-down text
const flipMap = {
    'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
    'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
    'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
    'y': 'ʎ', 'z': 'z',
    'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H',
    'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ',
    'Q': 'Q', 'R': 'ᴿ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X',
    'Y': '⅄', 'Z': 'Z',
    '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ',
    '8': '8', '9': '6',
    '!': '¡', '?': '¿', '.': '˙', ',': '\'', ':': ':', ';': '؛', '(': ')', ')': '(',
    '[': ']', ']': '[', '{': '}', '}': '{', '<': '>', '>': '<', '"': '"', "'": "'",
    ' ': ' ', '\n': '\n', '\t': '\t'
};

// DOM elements
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const copyBtn = document.getElementById('copyBtn');
const copyStatus = document.getElementById('copyStatus');
const charCount = document.getElementById('charCount');
const exampleBtns = document.querySelectorAll('.example-btn');

// Function to flip text upside down
function flipText(text) {
    return text.split('').map(char => {
        return flipMap[char] || char;
    }).reverse().join('');
}

// Function to update character count
function updateCharCount() {
    const count = inputText.value.length;
    charCount.textContent = count;
}

// Function to update output text
function updateOutput() {
    const input = inputText.value;
    const flipped = flipText(input);
    outputText.value = flipped;
    
    // Enable/disable copy button based on content
    copyBtn.disabled = !input.trim();
}

// Function to copy text to clipboard
async function copyToClipboard() {
    const text = outputText.value;
    
    if (!text.trim()) {
        showCopyStatus('No text to copy!', 'error');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(text);
        showCopyStatus('Copied to clipboard!', 'success');
        
        // Update button temporarily
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<span class="copy-icon">✅</span> Copied!';
        copyBtn.disabled = true;
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.disabled = !inputText.value.trim();
        }, 2000);
        
    } catch (err) {
        console.error('Failed to copy text: ', err);
        showCopyStatus('Failed to copy. Try selecting and copying manually.', 'error');
    }
}

// Function to show copy status message
function showCopyStatus(message, type) {
    copyStatus.textContent = message;
    copyStatus.className = `copy-status ${type}`;
    
    setTimeout(() => {
        copyStatus.textContent = '';
        copyStatus.className = 'copy-status';
    }, 3000);
}

// Function to handle example button clicks
function handleExampleClick(event) {
    const text = event.target.getAttribute('data-text');
    inputText.value = text;
    updateOutput();
    updateCharCount();
    inputText.focus();
}

// Function to clear all text
function clearText() {
    inputText.value = '';
    outputText.value = '';
    updateCharCount();
    copyBtn.disabled = true;
    inputText.focus();
}

// Event listeners
inputText.addEventListener('input', () => {
    updateOutput();
    updateCharCount();
});

copyBtn.addEventListener('click', copyToClipboard);

// Add example button event listeners
exampleBtns.forEach(btn => {
    btn.addEventListener('click', handleExampleClick);
});

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
    // Ctrl/Cmd + Enter to copy
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        copyToClipboard();
    }
    
    // Ctrl/Cmd + K to clear
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        clearText();
    }
});

// Focus input on page load
window.addEventListener('load', () => {
    inputText.focus();
});

// Add some fun animations
function addFloatingAnimation() {
    const container = document.querySelector('.container');
    container.style.animation = 'fadeInUp 0.6s ease-out';
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    addFloatingAnimation();
    updateCharCount();
    
    // Add some helpful tooltips
    inputText.title = 'Type your text here to see it flipped upside down';
    outputText.title = 'This is your flipped text - click Copy to copy it to clipboard';
    copyBtn.title = 'Copy the flipped text to clipboard (Ctrl+Enter)';
});

// Add keyboard shortcut hints
document.addEventListener('keydown', (event) => {
    if (event.key === 'F1') {
        event.preventDefault();
        alert('Keyboard Shortcuts:\n\n' +
              'Ctrl+Enter: Copy flipped text\n' +
              'Ctrl+K: Clear all text\n' +
              'F1: Show this help');
    }
});
