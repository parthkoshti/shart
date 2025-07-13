# 🐛 Debugging doesn't have to stink. But it can.

[![npm](https://img.shields.io/npm/v/shartjs?color=%23ff69b4&label=npm)](https://www.npmjs.com/package/shartjs)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D16-blue)](https://nodejs.org/)

>

**`shartjs`** is a tiny Node.js package that plays a random fart sound when your app crashes — consider it a strong motivator to write better error handling.

---

## 🚀 Install

```bash
pnpm add -D shartjs
# or
npm install --save-dev shartjs
# or
yarn add -D shartjs
```

## 🛠 Usage

In your app entry point (index.ts, server.ts, etc.):

```ts
import { initShart } from "shartjs";

initShart();
```

Now, if your app throws an unhandled exception or rejection, shart will:
• 💨 Play a random fart sound
• 💥 Log the error
• ☠️ Exit the process

## 🌱 Dev-Only Mode

Want to keep things professional in production?

if (process.env.NODE_ENV === "development") {
initShart();
}

## 🧪 Example

```ts
import { initShart } from "shart";

initShart();

throw new Error("Oh no I sharted"); // 💩💨
```

## 📦 What’s Included

- ✅ 3 glorious .wav fart files
- ✅ Zero runtime dependencies (except play-sound)
- ✅ Works with Node.js v16+
- ✅ ESM-only support (modern import style)

## 📝 License

MIT © Parth Koshti
