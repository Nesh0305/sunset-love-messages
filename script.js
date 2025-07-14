// Romantic messages
const messages = [
    "Hey my love ❤️",
    "Every day with you is a blessing...",
    "Your smile is my favorite sunset",
    "I love how you make ordinary moments magical",
    "You're the reason I believe in love",
    "My heart skips a beat when I see you",
    "You're my favorite hello and hardest goodbye",
    "I fall for you more every single day",
    "You're my happy place",
    "Loving you is the best part of my day",
    "You're the missing piece to my puzzle",
    "My favorite sound is your laughter",
    "You're my today and all of my tomorrows",
    "I love you more than words can express",
    "You're my dream come true",
    "Every love story is beautiful, but ours is my favorite",
    "You're my sunshine on the cloudiest days",
    "I cherish every moment with you",
    "You have my whole heart forever",
    "You're my favorite notification ❤️"
];

let currentMessageIndex = 0;
const messageElement = document.getElementById('message');
const nextButton = document.getElementById('next-btn');
const messageContainer = document.getElementById('message-container');
const finalAnimation = document.getElementById('final-animation');
const bgMusic = document.getElementById('bg-music');
const body = document.body;

// Initialize the page
function init() {
    messageElement.textContent = messages[currentMessageIndex];
    createFloatingHearts(15);
    createSunsetElements();
}

// Create floating hearts
function createFloatingHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 20 + 15}px`;
        heart.style.animationDuration = `${Math.random() * 4 + 3}s`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(heart);
    }
}

// Create sunset elements (sun and clouds)
function createSunsetElements() {
    // Create sun
    const sun = document.createElement('div');
    sun.className = 'sun';
    document.body.appendChild(sun);
    
    // Create clouds
    for (let i = 0; i < 5; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.width = `${Math.random() * 100 + 50}px`;
        cloud.style.height = `${Math.random() * 50 + 30}px`;
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.top = `${Math.random() * 30}%`;
        cloud.style.opacity = `${Math.random() * 0.3 + 0.1}`;
        document.body.appendChild(cloud);
    }
}

// Next button click handler
nextButton.addEventListener('click', () => {
    // Heartbeat animation
    nextButton.classList.add('heart-beat');
    setTimeout(() => {
        nextButton.classList.remove('heart-beat');
    }, 500);
    
    // Play music on first click if not already playing
    if (currentMessageIndex === 0 && bgMusic.paused) {
        bgMusic.play().catch(e => console.log("Autoplay prevented:", e));
    }
    
    // Change background gradient slightly
    const colors = [
        ['#ff7e5f', '#feb47b'], // Original sunset
        ['#ff6b6b', '#ffa3a3'], // Pinker
        ['#ff8e53', '#ffce6b'], // Brighter
        ['#ff6e7f', '#bfe9ff'], // Purple-pink
        ['#ff9a9e', '#fad0c4']  // Soft pink
    ];
    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.sunset-background').style.background = 
        `linear-gradient(to bottom, ${randomColors[0]}, ${randomColors[1]})`;
    
    // Move to next message or show final animation
    currentMessageIndex++;
    
    if (currentMessageIndex < messages.length) {
        messageElement.textContent = messages[currentMessageIndex];
    } else {
        messageContainer.classList.add('hidden');
        finalAnimation.classList.remove('hidden');
        // Add more hearts for the finale
        createFloatingHearts(30);
    }
});

// Initialize the page when loaded
window.addEventListener('DOMContentLoaded', init);