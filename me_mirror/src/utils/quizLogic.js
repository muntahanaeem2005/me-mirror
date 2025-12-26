// src/utils/quizlogic.js

// 🧠 Personality dimensions
export const DIMENSIONS = {
  ENERGY: "energy",
  DECISION: "decision",
  SOCIAL: "social",
  EMOTION: "emotion",
};

// 🧩 Question bank (logic-focused, not UI)
export const quizQuestions = [
  {
    id: 1,
    question: "You feel most energized when:",
    options: [
      { text: "Spending time alone", score: { ENERGY: -1 } },
      { text: "With close friends", score: { ENERGY: 1 } },
      { text: "Helping others", score: { SOCIAL: 2 } },
    ],
  },
  {
    id: 2,
    question: "You make decisions mostly based on:",
    options: [
      { text: "Logic & facts", score: { DECISION: -1 } },
      { text: "Emotions & values", score: { EMOTION: 2 } },
      { text: "Gut instinct", score: { DECISION: 1 } },
    ],
  },
  {
    id: 3,
    question: "When stressed, you usually:",
    options: [
      { text: "Withdraw quietly", score: { ENERGY: -2 } },
      { text: "Talk it out", score: { SOCIAL: 2 } },
      { text: "Distract yourself", score: { EMOTION: -1 } },
    ],
  },
];

// 🧮 Calculate personality score
export function calculateResult(answers = []) {
  const scores = {
    ENERGY: 0,
    DECISION: 0,
    SOCIAL: 0,
    EMOTION: 0,
  };

  answers.forEach((answer) => {
    Object.keys(answer).forEach((key) => {
      scores[key] += answer[key];
    });
  });

  return scores;
}

// 🪞 Interpret personality
export function interpretResult(scores) {
  const insights = [];

  if (scores.ENERGY > 1) insights.push("You gain energy from connection 🌱");
  else insights.push("You recharge best in solitude 🌙");

  if (scores.DECISION > 0)
    insights.push("You trust your instincts and flexibility 🧭");
  else insights.push("You prefer structure and logic 📐");

  if (scores.SOCIAL > 1)
    insights.push("You are naturally empathetic and supportive 💞");

  if (scores.EMOTION > 1)
    insights.push("You are emotionally aware and expressive 🎨");

  return insights;
}

// 🌟 Final personality summary
export function getPersonalityType(scores) {
  if (scores.SOCIAL > 2 && scores.EMOTION > 2)
    return "The Nurturer 🌸";

  if (scores.DECISION > 2)
    return "The Thinker 🧠";

  if (scores.ENERGY < 0)
    return "The Reflector 🌙";

  return "The Explorer ✨";
}
