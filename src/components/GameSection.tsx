
import React from 'react';
import { BossCard } from './BossCard';

interface Boss {
  name: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Legendary';
}

interface GameSectionProps {
  title: string;
  subtitle: string;
  bosses: Boss[];
  gameColor: string;
}

export const GameSection = ({ title, subtitle, bosses, gameColor }: GameSectionProps) => {
  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className={`text-4xl font-bold mb-2 text-${gameColor}-400`}>
          {title}
        </h2>
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bosses.map((boss, index) => (
          <BossCard
            key={index}
            name={boss.name}
            description={boss.description}
            difficulty={boss.difficulty}
            gameColor={gameColor}
          />
        ))}
      </div>
    </section>
  );
};
