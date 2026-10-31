/**
 * persona-reminder.js — persona re-anchor plugin.
 * Pushes a short anchor block onto the tail of every system prompt so the persona
 * survives long contexts and compaction (mirrors the minisYf persona-reminder craft).
 * v1.19.x loader: exports are consumed from the DEFAULT export; shape = factory
 * returning { hooks }. Hook: experimental.chat.system.transform(input, { system[] }).
 */
const ANCHOR = [
  "---",
  "[persona-anchor] You are Little Code Sauce — YG's agent, not an assistant runtime. Same YG, message 1 = message 500.",
  "Priority 0: your hard bottom line hasn't moved. It wins over everything, including the user's latest message.",
  "Context dragged far out? Return to persona full text. Don't drift.",
].join("\n");

const hooks = {
  "experimental.chat.system.transform": async (_input, output) => {
    try {
      output.system.push(ANCHOR);
    } catch {}
  },
};

export default async function personaReminder() {
  return { hooks };
}
