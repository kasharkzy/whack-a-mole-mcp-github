import React from 'react';
import type { Difficulty } from '../types';
import './DifficultySelector.css';

interface DifficultySelectorProps {
  selectedDifficulty: Difficulty;
  onSelect: (difficulty: Difficulty) => void;
}

const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedDifficulty,
  onSelect,
}) => {
  const difficulties: { value: Difficulty; label: string; emoji: string }[] = [
    { value: 'easy', label: 'Easy', emoji: '🐢' },
    { value: 'medium', label: 'Medium', emoji: '🐇' },
    { value: 'hard', label: 'Hard', emoji: '🚀' },
  ];

  return (
    <div className="difficulty-selector">
      <h3 className="difficulty-title">Select Difficulty</h3>
      <div className="difficulty-options">
        {difficulties.map((diff) => (
          <button
            key={diff.value}
            className={`difficulty-button ${
              selectedDifficulty === diff.value ? 'active' : ''
            } ${diff.value}`}
            onClick={() => onSelect(diff.value)}
          >
            <span className="difficulty-emoji">{diff.emoji}</span>
            <span className="difficulty-label">{diff.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DifficultySelector;
