import { fileURLToPath } from "url";
import { dirname, join } from "path";
import chalk from "chalk";
import player from "play-sound";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fartPlayer = player();

function playFart() {
  const number = Math.floor(Math.random() * 2) + 1;
  const fartPath = join(__dirname, "..", "farts", `fart${number}.wav`);
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
