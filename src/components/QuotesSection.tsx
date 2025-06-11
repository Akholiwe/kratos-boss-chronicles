
import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface KratosQuote {
  text: string;
  game: string;
  context?: string;
}

const quotes: KratosQuote[] = [
  {
    text: "The cycle ends here. We must be better than this.",
    game: "God of War (2018)",
    context: "To Atreus about breaking cycles of vengeance"
  },
  {
    text: "I am what the gods have made me!",
    game: "God of War (2005)",
    context: "Kratos' defiant declaration"
  },
  {
    text: "You will always be a monster.",
    game: "God of War (2018)",
    context: "Freya's words that haunt Kratos"
  },
  {
    text: "The hands of death could not defeat me. The sisters of fate could not hold me. And you will not see the end of this day!",
    game: "God of War II",
    context: "Kratos facing Zeus"
  },
  {
    text: "Do not mistake my silence for lack of grief.",
    game: "God of War (2018)",
    context: "About losing his wife Faye"
  },
  {
    text: "Hope is what makes us strong. It is why we are here.",
    game: "God of War III",
    context: "The power of hope against despair"
  },
  {
    text: "Boy! Control your temper.",
    game: "God of War (2018)",
    context: "Teaching Atreus discipline"
  },
  {
    text: "We are gods, boy, and that comes with responsibility.",
    game: "God of War Ragnarök",
    context: "Kratos teaching Atreus about their nature"
  }
];

export const QuotesSection = () => {
  return (
    <section className="mt-16 mb-16">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-6">
          <Quote className="w-8 h-8 text-amber-400 mr-3" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
            Words of the Ghost of Sparta
          </h2>
          <Quote className="w-8 h-8 text-amber-400 ml-3 rotate-180" />
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Memorable quotes from Kratos throughout his epic journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-card/80 border-border/20 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
            <CardContent className="p-6">
              <div className="flex flex-col h-full">
                <Quote className="w-6 h-6 text-amber-400 mb-4" />
                <blockquote className="text-lg font-medium mb-4 flex-grow italic">
                  "{quote.text}"
                </blockquote>
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-amber-400 mb-1">
                    {quote.game}
                  </p>
                  {quote.context && (
                    <p className="text-xs text-muted-foreground">
                      {quote.context}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
