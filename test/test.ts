import { initShart } from "../dist/index.js";

initShart();

function test() {
  throw new Error("Testing fart 💨");
}

test();
