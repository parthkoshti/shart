# 🐛 Debugging doesn't have to stink. But it can.

When your app crashes, it farts. That's it.

`shart` is a tiny NodeJs package that plays a random fart sound when your app crashes — because debugging shouldn’t be boring.

---

## 🚀 Install

```bash
pnpm add -D shart
# or
npm install --save-dev shart
# or
yarn add -D shart
```

---

## 🛠 Usage

In your entry file (`index.ts`, `server.ts`, etc.):

```ts
import { initShart } from "shart";

initShart();
```

Now, if your app throws an unhandled exception or rejection, `shart` will:

- 💨 Play a random fart sound
- 💥 Log the error
- ☠️ Exit the process

---

## 🌱 Dev-Only Mode

If you want `shart` to only run in development mode:

```ts
if (process.env.NODE_ENV === "development") {
  initShart();
}
```

## 🧪 Example

```ts
import { initShart } from "shart";
initShart();

throw new Error("Oh no I sharted"); // 💩💨
```

---

## 📦 Includes

- ✅ 2 glorious `.wav` fart files
- ✅ Zero dependencies in production (except `play-sound`)
- ✅ Works with Node.js v16+
- ✅ Supports ESM only

---

## 📝 License

MIT © [Parth Koshti](https://github.com/parthkoshti)
