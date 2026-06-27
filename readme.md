# snnr

[![npm version](https://img.shields.io/npm/v/snnr.svg)](https://www.npmjs.com/package/snnr)
[![license](https://img.shields.io/npm/l/snnr.svg)](./LICENSE)

A tiny TUI "business card" for **Sinan Nar**. Run it with `npx` and you'll get
my avatar, a short blurb, and an interactive menu to open one of my profiles
right from your terminal. ✨

> Just for fun — no install, no signup, no telemetry.

## 🚀 Usage

Run it directly with `npx` (no installation required):

```bash
npx snnr
```

Or install it globally if you want it always on hand:

```bash
npm install -g snnr
snnr
```

## 🖥 What you'll see

When you run the command the terminal will:

1. Render my GitHub avatar as ASCII / pixel art.
2. Print a summary card — title, stack, talks, and community involvement.
3. Show an interactive list — pick an option and the matching profile opens
   in your default browser.

```
 ┌─────────────────────────────────────────────────────────┐
 │  Sinan Nar — Senior Software Engineer · Microsoft MVP   │
 └─────────────────────────────────────────────────────────┘

 Consultant focused on Apps and AI at ARINCO, a Microsoft & GitHub partner.
 Co-organiser of Aotearoa Azure Meetup, Auckland .NET UG, and NZ GitHub UG.

 Stack
 .NET & C#      .NET 6+ · .NET Aspire · ASP.NET · EF Core
 Azure          App Services · Functions · Container Apps · AKS · Service Bus
 Frontend       TypeScript · Angular · Ionic · Node.js
 ...

 ? Where would you like to go? (Use arrow keys)
 ❯ GitHub
   LinkedIn
   Blog
   Meetups
```

## 🔗 Links

- GitHub — <https://github.com/sinannar>
- LinkedIn — <https://www.linkedin.com/in/sinannar>
- Blog — <https://sinannar.github.io/blog/>

## 🧰 Requirements

- Node.js **>= 14** (the package uses ES modules and top-level `await`)
- A terminal that supports images and hyperlinks for the best experience
  (iTerm2, Kitty, WezTerm, modern Windows Terminal, etc.). It still works in
  basic terminals — you just get a graceful fallback.

## 🛠 Built with

- [chalk](https://www.npmjs.com/package/chalk) — terminal colors
- [inquirer](https://www.npmjs.com/package/inquirer) — interactive prompt
- [terminal-image](https://www.npmjs.com/package/terminal-image) — render the avatar
- [terminal-link](https://www.npmjs.com/package/terminal-link) — clickable links
- [got](https://www.npmjs.com/package/got) — fetch the avatar
- [open](https://www.npmjs.com/package/open) — open the selected profile

## 💡 Inspiration

Inspired by [Fatih Kadir Akın](https://github.com/f)'s runnable npm card.
Go give him a star — and if there's a **Buy Me A Coffee** button, click it. ☕

## 📜 License

[MIT](./LICENSE) © Sinan Nar
