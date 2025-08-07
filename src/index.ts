import { join } from "path";
import { readdirSync } from "fs";
import { platform } from "os";
import chalk from "chalk";
import { execa } from "execa";
import { __dirnameSafe } from "./dirname";

async function playSound(filePath: string) {
  const os = platform();

  try {
    if (os === "darwin") {
      await execa("afplay", [filePath]);
    } else if (os === "win32") {
      await execa("powershell", [
        "-c",
        `Start-Process -FilePath "${filePath}" -WindowStyle Hidden`,
      ]);
    } else {
      // Try common Linux players in order
      const players = ["paplay", "aplay", "mpg123", "mplayer", "play"];
      let played = false;

      for (const cmd of players) {
        try {
          await execa(cmd, [filePath]);
          played = true;
          break;
        } catch {}
      }

      if (!played) {
        console.error("🔇 No compatible audio player found.");
      }
    }
  } catch (err) {
    console.error("💩 Failed to play fart sound:", err);
  }
}

async function playFart() {
  const fartDir = join(__dirnameSafe, "..", "farts");

  const files = readdirSync(fartDir).filter((file) => file.endsWith(".wav"));

  if (files.length === 0) {
    console.error("💨 No fart files found.");
    return;
  }

  const selected = files[Math.floor(Math.random() * files.length)];
  const fartPath = join(fartDir, selected);

  await playSound(fartPath);
}

function printMessage(err: any) {
  console.error(chalk.redBright.bold("💩 UNHANDLED ERROR 💩"));
  console.error(chalk.red(err?.stack || err?.message || err));
}

export function initShart() {
  process.on("uncaughtException", async (err) => {
    await playFart();
    printMessage(err);
    process.exit(1);
  });

  process.on("unhandledRejection", async (reason) => {
    await playFart();
    printMessage(reason);
    process.exit(1);
  });
}
