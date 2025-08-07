import { initShart } from "../src/index";

initShart();

async function test() {
  // Trigger an uncaughtException
  setTimeout(() => {
    throw new Error("💥 Uncaught Exception: Shart incoming!");
  }, 100);

  // Trigger an unhandledRejection
  setTimeout(() => {
    Promise.reject(new Error("🤯 Unhandled Rejection: Prepare for blast"));
  }, 200);
}

await test();
