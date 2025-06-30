import { initShart } from ".";

initShart();

// Example crash:
setTimeout(() => {
  throw new Error("Boom 💥");
}, 1000);
