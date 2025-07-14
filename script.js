// Romantic messages
const messages = [
  "Hey my love ❤️",
  "Every day with you is a blessing...",
  "Your smile is my favorite sunset",
  // Add all 20 messages here
];

let currentMessageIndex = 0;
const messageElement = document.getElementById('message');
const nextButton = document.getElementById('next-btn');
const bgMusic = document.getElementById('bg-music');

// Initialize first message
messageElement.textContent = messages[currentMessageIndex];

// Next button click handler
nextButton.addEventListener('click', () => {
  // Play music on first click
  if (currentMessageIndex === 0) {
    bgMusic.volume = 0.5;
    bgMusic.play().catch(e => console.log("Play error:", e));
  }

  // Show next message or final animation
  currentMessageIndex++;
  if (currentMessageIndex < messages.length) {
    messageElement.textContent = messages[currentMessageIndex];
  } else {
    document.getElementById('message-container').classList.add('hidden');
    document.getElementById('final-animation').classList.remove('hidden');
  }
});