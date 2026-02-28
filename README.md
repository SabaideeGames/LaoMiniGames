# 🎮 ສູນກາງເກມ — Lao Mini Games

> **10 ເກມ casual ຫຼິ້ນໄດ້ເລີຍ — ບໍ່ຕ້ອງຕິດຕັ້ງ, ບໍ່ຕ້ອງລົງທະບຽນ**

A collection of 10 casual browser-based mini games with a **Lao (ລາວ) language** interface. All games are built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies, no build step.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Mobile Friendly](https://img.shields.io/badge/Mobile-Friendly-22C55E?style=flat)
![Offline](https://img.shields.io/badge/Offline-Ready-7C3AED?style=flat)

---

## 🕹️ Games

### ⚡ Quick Games (ເກມໄວ)

| #   | Game                        | Description                                    |
| --- | --------------------------- | ---------------------------------------------- |
| 🏗️  | **ຫໍຄອຍ (Stack Tower)**     | Tap to place blocks — stack as high as you can |
| 🎨  | **ສີສະທ້ອນ (Color Reflex)** | Tap the matching color — test your reflexes    |
| 🎵  | **ຈັງຫວະ (Rhythm Tap)**     | Tap to the beat — build combos                 |

### 🧩 Puzzle Games (ເກມປິດສະໜາ)

| #   | Game                           | Description                                 |
| --- | ------------------------------ | ------------------------------------------- |
| 🔢  | **ເກມຕົວເລກ (Number Puzzle)**  | Guess the 4-digit number — new puzzle daily |
| 🧩  | **ລວມບລ໋ອກ 2048 (Merge 2048)** | Slide and merge — reach 2048                |
| 🧱  | **ຈິກຊໍ (Block Puzzle)**       | Place blocks — fill rows to clear           |
| 🃏  | **ຈື່ບັດ (Memory Cards)**      | Flip cards and match pairs — 5 levels       |
| 🔤  | **ຊອກຫາຄຳ (Word Hunt)**        | Drag letters — form words                   |

### 🕹️ Classic Games (ເກມ Classic)

| #   | Game                          | Description                            |
| --- | ----------------------------- | -------------------------------------- |
| 🐍  | **ງູ (Snake)**                | Eat food and avoid collisions          |
| 🍪  | **ກົດຄຸກກີ (Cookie Clicker)** | Click, upgrade, prestige — endless fun |

---

## 📂 Project Structure

```
Game/
├── index.html              # 🏠 Game Hub (main menu)
├── shared/                 # 🔧 Shared resources
│   ├── styles.css          #    Common styles
│   └── utils.js            #    Utility functions
├── stack-tower/            # 🏗️ Stack Tower
│   └── index.html
├── color-reflex/           # 🎨 Color Reflex
│   └── index.html
├── rhythm-tap/             # 🎵 Rhythm Tap
│   └── index.html
├── number-puzzle/          # 🔢 Number Puzzle
│   └── index.html
├── merge-2048/             # 🧩 Merge 2048
│   └── index.html
├── block-puzzle/           # 🧱 Block Puzzle
│   └── index.html
├── memory-cards/           # 🃏 Memory Cards
│   └── index.html
├── word-hunt/              # 🔤 Word Hunt
│   └── index.html
├── snake/                  # 🐍 Snake
│   └── index.html
└── cookie-clicker/         # 🍪 Cookie Clicker
    └── index.html
```

---

## 🚀 Getting Started

No installation required! Simply open the project in a browser:

### Option 1: Open directly

```
Double-click on index.html
```

### Option 2: Use a local server

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

---

## ✨ Features

- 🌐 **100% Browser-based** — Runs entirely in the browser, no server needed
- 📱 **Mobile First** — Optimized for touch devices and mobile screens
- 🔌 **Offline Ready** — Play without an internet connection
- 🚫 **No Ads** — Zero advertisements, zero distractions
- 🔒 **No Data Collection** — Your privacy is respected, no tracking
- 🎨 **Modern Dark UI** — Sleek glassmorphism design with gradient accents
- 🇱🇦 **Lao Language** — Full interface in Lao (ພາສາລາວ)
- ⚡ **Zero Dependencies** — Pure HTML, CSS, and JavaScript

---

## 🛠️ Tech Stack

| Technology        | Purpose                                    |
| ----------------- | ------------------------------------------ |
| **HTML5**         | Game structure and semantics               |
| **CSS3**          | Styling, animations, glassmorphism effects |
| **Vanilla JS**    | Game logic, interactions, audio            |
| **Google Fonts**  | Noto Sans Lao typography                   |
| **Web Audio API** | Sound effects and music                    |

---

## 📱 Browser Support

| Browser          | Support |
| ---------------- | ------- |
| Chrome / Edge    | ✅ Full |
| Firefox          | ✅ Full |
| Safari (iOS)     | ✅ Full |
| Samsung Internet | ✅ Full |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to add a new game or improve an existing one:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-game`)
3. Add your game in a new directory with an `index.html` file
4. Update the Game Hub (`index.html`) to include your game
5. Submit a pull request

---

## 📄 License

This project is open source. Feel free to use, modify, and distribute.

---

<p align="center">
  ❤️ ສ້າງດ້ວຍ HTML, CSS, JS<br>
  ຫຼິ້ນໄດ້ offline · ບໍ່ມີໂຄສະນາ · ບໍ່ເກັບຂໍ້ມູນ
</p>
