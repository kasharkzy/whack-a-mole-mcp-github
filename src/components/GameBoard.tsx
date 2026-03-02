import React from 'react';
import Mole from './Mole';
import type { MoleState } from '../types';
import './GameBoard.css';

interface GameBoardProps {
  moles: MoleState[];
  onWhack: (id: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ moles, onWhack }) => {
  return (
    <div className="game-board">
      {moles.map((mole) => (
        <Mole
          key={mole.id}
          isActive={mole.isActive}
          onWhack={() => onWhack(mole.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
