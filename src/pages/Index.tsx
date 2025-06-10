
import React from 'react';
import { Header } from '@/components/Header';
import { GameSection } from '@/components/GameSection';
import { godOfWarBosses } from '@/data/bosses';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M30%2030c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 pb-16">
          <GameSection
            title={godOfWarBosses.gow1.title}
            subtitle={godOfWarBosses.gow1.subtitle}
            bosses={godOfWarBosses.gow1.bosses}
            gameColor={godOfWarBosses.gow1.gameColor}
          />
          
          <GameSection
            title={godOfWarBosses.gow2.title}
            subtitle={godOfWarBosses.gow2.subtitle}
            bosses={godOfWarBosses.gow2.bosses}
            gameColor={godOfWarBosses.gow2.gameColor}
          />
          
          <GameSection
            title={godOfWarBosses.gow3.title}
            subtitle={godOfWarBosses.gow3.subtitle}
            bosses={godOfWarBosses.gow3.bosses}
            gameColor={godOfWarBosses.gow3.gameColor}
          />
          
          <GameSection
            title={godOfWarBosses.ascension.title}
            subtitle={godOfWarBosses.ascension.subtitle}
            bosses={godOfWarBosses.ascension.bosses}
            gameColor={godOfWarBosses.ascension.gameColor}
          />
          
          <GameSection
            title={godOfWarBosses.ghostOfSparta.title}
            subtitle={godOfWarBosses.ghostOfSparta.subtitle}
            bosses={godOfWarBosses.ghostOfSparta.bosses}
            gameColor={godOfWarBosses.ghostOfSparta.gameColor}
          />
          
          <GameSection
            title={godOfWarBosses.ragnarok.title}
            subtitle={godOfWarBosses.ragnarok.subtitle}
            bosses={godOfWarBosses.ragnarok.bosses}
            gameColor={godOfWarBosses.ragnarok.gameColor}
          />
        </main>
        
        <footer className="text-center py-8 border-t border-border/20">
          <p className="text-muted-foreground">
            "The cycle ends here. We must be better than this." - Kratos
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
