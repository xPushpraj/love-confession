const app = document.getElementById("app");
const question = document.getElementById("question");
const emoji = document.getElementById("emoji");
const buttons = document.getElementById("buttons");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

let currentStep = 0;

const steps = [
  {
    question: "I am loving you. You also or not? ❤️",
    emoji: "🥰",
    onYes: () => endProgram("I knew it! ❤️ You are my love! 🎉"),
    onNo: () => nextStep(),
  },
  {
    question: "Please confirm, I am loving you very much. You also or not? 😍",
    emoji: "❤️",
    onYes: () => endProgram("I knew it! ❤️ You are my love! 🎉"),
    onNo: () => nextStep(),
  },
  {
    question: "I am asking again, please say yes dear. 🙏",
    emoji: "🥺",
    onYes: () => endProgram("I knew it! ❤️ You are my love! 🎉"),
    onNo: () => nextStep(),
  },
  {
    question: "Are you sure? My heart is breaking! 💔 Please reconsider.",
    emoji: "😢",
    onYes: () => endProgram("Yay! You're finally mine. 💕"),
    onNo: () => nextStep(),
  },
  {
    question: "This is really the last window. I won't ask again, promise! 😢",
    emoji: "😞",
    onYes: () => endProgram("In the end you aceepted my proposal,and you are mine, my love.!! 🎉"),
    onNo: () => makeButtonMove(true),
  },
];

function nextStep() {
  currentStep = Math.min(currentStep + 1, steps.length - 1);
  loadStep();
}

function loadStep() {
  const step = steps[currentStep];
  question.textContent = step.question;
  emoji.textContent = step.emoji;

  yesBtn.onclick = step.onYes;
  noBtn.onclick = step.onNo;
}

function endProgram(message) {
  question.textContent = message;
  emoji.textContent = "🎉";
  buttons.style.display = "none";
  question.classList.add("celebration");
}

function makeButtonMove(restart = false) {
  if (!noBtn.classList.contains("moving")) {
    noBtn.classList.add("moving");
    setInterval(() => {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 100);
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }, 500);
  }
  if (restart) {
    noBtn.onclick = () => {
      question.textContent = "Restarting...!";
      setTimeout(() => (currentStep = 0), 1000);
    };
  }
}

loadStep();
