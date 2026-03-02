# Whack-a-Mole Game 🦫

A fun and interactive Whack-a-Mole game built with TypeScript, React, and Vite with multiple difficulty levels.

## Features

- **3 Difficulty Levels**: Easy, Medium, and Hard modes
- **3x3 Game Board**: Nine holes where moles randomly appear
- **Dynamic Gameplay**: Difficulty adjusts spawn rate and visibility time
- **Click to Whack**: Click on moles to increase your score
- **Score Tracking**: Real-time score display
- **Countdown Timer**: Time limit varies by difficulty
- **Game States**: Start screen with difficulty selection, active gameplay, and game over screen
- **Smooth Animations**: Pop-up animations and hover effects
- **Responsive Design**: Beautiful gradient background and colorful UI

## Difficulty Levels

| Difficulty | Spawn Rate | Visible Time | Game Duration | Challenge |
|-----------|-----------|--------------|---------------|-----------|
| 🐢 **Easy** | 1.2s | 1.5s | 45s | Perfect for beginners |
| 🐇 **Medium** | 0.8s | 1.0s | 30s | Balanced challenge |
| 🚀 **Hard** | 0.5s | 0.7s | 30s | Fast-paced action! |

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the local URL (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## How to Play

1. **Select Difficulty**: Choose between Easy 🐢, Medium 🐇, or Hard 🚀
2. Click the **Start Game** button
3. Moles (represented by 🦫) will randomly appear in the holes
4. Click on the moles as quickly as possible to whack them
5. Each successful hit increases your score by 1
6. The game timer counts down based on your chosen difficulty
7. Try to get the highest score possible!
8. Click **Play Again** to restart with a new difficulty

## Game Configuration

You can modify the difficulty settings in `src/Game.tsx`:

```typescript
const DIFFICULTY_SETTINGS: Record<Difficulty, DifficultySettings> = {
  easy: {
    moleAppearInterval: 1200,   // ms between mole spawns
    moleVisibleTime: 1500,      // ms mole stays visible
    gameDuration: 45,           // game length in seconds
  },
  // ... medium and hard settings
};
```

## Technologies Used

- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **CSS3**: Styling with animations

## Project Structure

```
src/
├── components/
│   ├── GameBoard.tsx/css         # 3x3 grid layout
│   ├── Mole.tsx/css              # Individual mole hole
│   ├── ScoreDisplay.tsx/css      # Score counter
│   ├── Timer.tsx/css             # Countdown timer
│   └── DifficultySelector.tsx/css # Difficulty selection UI
├── types/
│   └── index.ts                  # TypeScript interfaces
├── Game.tsx/css                  # Main game component
├── App.tsx                       # App entry point
└── main.tsx                      # React root
```

## License

MIT

---

Made with ❤️ using React, TypeScript, and Vite
