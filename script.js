
const questions = Array.from({ length: 88 }, (_, i) => ({
  question: `第 ${i + 1} 題：這是一個代表性的問題 ${i + 1}`,
  options: [
    { text: "選項 A", type: "IDF" },
    { text: "選項 B", type: "NSR" },
    { text: "選項 C", type: "TYN" },
    { text: "選項 D", type: "GXV" }
  ]
}));

let current = 0;
let answers = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const backBtn = document.getElementById("backBtn");

function renderQuestion() {
  const q = questions[current];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.type);
    optionsEl.appendChild(btn);
  });
  progressEl.innerText = `第 ${current + 1} / ${questions.length} 題`;
  backBtn.style.display = current > 0 ? "inline-block" : "none";
}

function selectOption(type) {
  answers[current] = type;
  current++;
  if (current >= questions.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function goBack() {
  if (current > 0) {
    current--;
    renderQuestion();
  }
}

function finishQuiz() {
  const result = {};
  for (const type of answers) {
    result[type] = (result[type] || 0) + 1;
  }
  const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
  const topType = sorted[0][0];
  window.location.href = `results/${topType}.html`;
}

renderQuestion();
