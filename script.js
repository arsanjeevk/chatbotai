document.addEventListener('DOMContentLoaded', () => {
  // Scroll animations
  const animatedSections = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedSections.forEach((section) => {
    observer.observe(section);
  });

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Close nav menu when clicking link (mobile)
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  });
});















// chatbot

  const chatbotBtn = document.getElementById('tryChatbotBtn');
  const chatbotWidget = document.getElementById('chatbotWidget');
  const closeBtn = document.getElementById('closeChatbotBtn');
  const sendBtn = document.getElementById('sendBtn');
  const chatInput = document.getElementById('chatInput');
  const chatHistory = document.getElementById('chatHistory');

  chatbotBtn.addEventListener('click', () => {
    chatbotWidget.classList.remove('chatbot-hidden');
  });

  closeBtn.addEventListener('click', () => {
    chatbotWidget.classList.add('chatbot-hidden');
  });

  sendBtn.addEventListener('click', sendMessage);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    chatInput.value = '';

    setTimeout(() => {
      appendMessage(`Echo: ${text}`, 'bot');
    }, 600);
  }

  function appendMessage(message, sender) {
    const msg = document.createElement('div');
    msg.className = 'chatbot-message ' + (sender === 'user' ? 'user' : '');
    msg.textContent = message;
    chatHistory.appendChild(msg);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }




  // testimonial
const slider = document.getElementById("slider");
const testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;
const total = testimonials.length;

function showNext() {
  currentIndex = (currentIndex + 1) % total;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNext, 4000);



