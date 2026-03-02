import React from 'react';
import './Mole.css';

interface MoleProps {
  isActive: boolean;
  onWhack: () => void;
}

const Mole: React.FC<MoleProps> = ({ isActive, onWhack }) => {
  return (
    <div className="mole-hole">
      <div 
        className={`mole ${isActive ? 'active' : ''}`}
        onClick={isActive ? onWhack : undefined}
      >
        {isActive && '🦫'}
      </div>
    </div>
  );
};

export default Mole;
