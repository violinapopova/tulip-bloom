# Tulip Garden Web

An interactive botanical growth simulation that visualizes the lifecycle of tulips from bulbs to full bloom.

![Tulip Garden](https://img.shields.io/badge/React-19.2-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0-646cff?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)

## Overview

Tulip Garden Web lets users step through five stages of tulip growth—from dormant bulbs buried in soil to vibrant blooming flowers. Three tulip varieties (hot pink, violet, and golden) grow in sync, with smooth SVG animations and an informative overlay describing each phase.

## Features

- **5 growth stages**: Bulb → First Sprout → Active Growth → Budding → Full Bloom
- **3 tulip varieties**: Each with distinct colors (pink, purple, gold)
- **Interactive controls**:
  - **Plant Seeds / Water Garden** — Advance one stage at a time
  - **Watch Growth** — Auto-animate through all stages (~2.5s per stage)
  - **Reset Garden** — Return to bulb stage
- **Animated transitions**: Stem drawing effect, leaf fade-in, bud pulse, bloom scale-in
- **Responsive layout**: Adapts to mobile and desktop screens
- **Liquid glass UI**: Translucent, blurred stage info panel

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19.2 | UI framework |
| Vite 8 | Build tool & dev server |
| Tailwind CSS 3.4 | Styling & animations |
| Lucide React | Icons (Sprout, Sun, RotateCcw, Play, Info) |

## Project Structure

```
src/
├── components/
│   ├── Tulip.jsx          # Single tulip SVG (stem, leaves, flower)
│   ├── TulipGarden.jsx    # SVG garden with soil, tulips, bulbs
│   ├── Soil.jsx           # Soil layer paths
│   ├── Bulbs.jsx          # Bulb visuals (stage 0)
│   ├── StageInfo.jsx      # Phase description overlay
│   ├── ProgressBar.jsx    # Stage indicator dots
│   ├── ControlPanel.jsx   # Action buttons
│   └── EnvironmentDecor.jsx # Sun & cloud icons
├── constants/
│   ├── stages.js          # Growth phase definitions
│   └── varieties.js       # Tulip positions & colors
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Growth Stages

| Stage | Name          | Description |
|-------|---------------|-------------|
| 0     | Bulb Stage    | Buried deep in the nutrient-rich soil, the bulbs wait for the warmth of the sun. |
| 1     | First Sprout  | Life begins to stir as tiny green shoots push through the soil surface. |
| 2     | Active Growth | Leaves unfurl and stems reach upward, soaking up every bit of sunlight. |
| 3     | Budding       | Tight pods form at the top, holding the vibrant colors hidden within. |
| 4     | Full Bloom    | The garden awakens in a spectacular display of color and life. |

## Animations

Animations are implemented with **Tailwind CSS** only (no external animation libraries):

- **Stem**: SVG `strokeDashoffset` transition creates a drawing effect
- **Leaves**: `transition-opacity` for fade-in at stage 2
- **Bud**: Built-in `animate-pulse` for a subtle breathing effect
- **Bloom**: Custom `bloom-in` keyframe (scale + rotate + fade) defined in `tailwind.config.js`
Then press `i` for iOS simulator, `a` for Android, or `w` for web.

## License

MIT
