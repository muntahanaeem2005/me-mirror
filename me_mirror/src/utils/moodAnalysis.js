// src/utils/moodanalysis.js

// 🎨 Mood → color mapping
export function getMoodColor(mood) {
  if (mood <= 2) return "#4b5563";      // very low - gray
  if (mood <= 4) return "#3b82f6";      // low - blue
  if (mood <= 6) return "#22c55e";      // neutral - green
  if (mood <= 8) return "#f59e0b";      // good - amber
  return "#ec4899";                     // amazing - pink
}

// 🧠 Mood → emotional label
export function getMoodLabel(mood) {
  if (mood <= 2) return "Overwhelmed 😔";
  if (mood <= 4) return "Low Energy 😕";
  if (mood <= 6) return "Balanced 🙂";
  if (mood <= 8) return "Positive 😊";
  return "Thriving ✨";
}

// ✨ Reflection prompt
export function getReflectionPrompt(mood) {
  if (mood <= 3)
    return "What feels heavy right now? Write without judging yourself.";
  if (mood <= 5)
    return "What small thing could improve your mood today?";
  if (mood <= 7)
    return "What’s helping you stay balanced lately?";
  if (mood <= 9)
    return "What made today feel good?";
  return "How can you carry this energy into tomorrow?";
}

// 🌱 Daily affirmation
export function getAffirmation(mood) {
  if (mood <= 3)
    return "You are allowed to rest. Healing is not linear.";
  if (mood <= 5)
    return "Small steps still move you forward.";
  if (mood <= 7)
    return "You are doing better than you think.";
  if (mood <= 9)
    return "Your positivity is powerful.";
  return "You are aligned, confident, and glowing.";
}

// 📊 Trend analysis (for dashboard)
export function analyzeMoodTrend(history = []) {
  if (history.length < 2) return "Not enough data yet";

  const avg =
    history.reduce((sum, m) => sum + m.value, 0) / history.length;

  if (avg <= 3) return "Mostly Low Mood";
  if (avg <= 5) return "Mixed Mood Pattern";
  if (avg <= 7) return "Generally Stable";
  return "Consistently Positive";
}
