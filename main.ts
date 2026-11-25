import { mkdirSync, writeFileSync } from "node:fs";

// One-line pickup line aimed at a robot / AI, built from named parts
// so the setup, the turn and the punch each stay readable.
const SETUP = "Are you a git commit?";
const TURN = " Because you've got 'initial' written all over you,";
const PUNCH = " and I want to push straight to main with you.";

const LINE = SETUP + TURN + PUNCH;

// The gate wants 1 to 200 characters of real text: fail loudly
// instead of writing an entry the scorer would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
