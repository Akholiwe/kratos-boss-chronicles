
import React from 'react';
import { Sword } from 'lucide-react';

export const Header = () => {
  return (
    <header className="text-center py-16 bg-gradient-to-b from-amber-900/20 to-transparent">
      <div className="flex justify-center items-center mb-6">
        <Sword className="w-12 h-12 text-amber-400 mr-4" />
        <h1 className="text-6xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
          GOD OF WAR
        </h1>
        <Sword className="w-12 h-12 text-amber-400 ml-4 rotate-180" />
      </div>
      <p className="text-2xl text-muted-foreground mb-4">Legendary Bosses Collection</p>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Journey through the epic battles that defined Kratos' path from vengeful Spartan warrior to the God of War
      </p>
    </header>
  );
};
