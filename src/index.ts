import { fileURLToPath } from "url";
import { dirname, join } from "path";
import chalk from "chalk";
import player from "play-sound";
import { readdirSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fartPlayer = player();

function playFart() {
  const fartDir = join(__dirname, "..", "farts");

  // Read all .wav files from the directory
  const files = readdirSync(fartDir).filter((file) => file.endsWith(".wav"));

  if (files.length === 0) {
    console.error("💨 No fart files found.");
    return;
  }

  // Pick a random file
  const selected = files[Math.floor(Math.random() * files.length)];
  const fartPath = join(fartDir, selected);

  // console.error(`🎺 Playing fart: ${selected}`);
  fartPlayer.play(fartPath, (err) => {
    if (err) console.error("💩 Failed to fart:", err);
  });
}

function printMessage(err: any) {
  console.error(chalk.redBright.bold("💩 UNHANDLED ERROR 💩"));
  console.error(chalk.red(err?.stack || err?.message || err));
}

export function initShart() {
  process.on("uncaughtException", (err) => {
    playFart();
    printMessage(err);
    process.exit(1);
  });

  process.on("unhandledRejection", (reason) => {
    playFart();
    printMessage(reason);
    process.exit(1);
  });
}

function test() {
  initShart();
  throw new Error("Testing fart 💨");
}

test();
