
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BossCardProps {
  name: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Legendary';
  gameColor: string;
}

export const BossCard = ({ name, description, difficulty, gameColor }: BossCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-600';
      case 'Medium': return 'bg-yellow-600';
      case 'Hard': return 'bg-orange-600';
      case 'Legendary': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <Badge className={`${getDifficultyColor(difficulty)} text-white border-0`}>
            {difficulty}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
