import React, { createContext, useState } from "react";

type Card = {
  id: string;
  question: string;
  answer: string;
  favorite?: boolean;
};

type Deck = {
  id: string;
  title: string;
  cards: Card[];
};

type FlashContextType = {
  decks: Record<string, Deck>;
  createDeck: (title: string) => void;
  addCardToDeck: (deckId: string, card: { question: string; answer: string }) => void;
  toggleFavorite: (deckId: string, cardId: string) => void;
  getFavorites: () => Array<{
    id: string;
    question: string;
    answer: string;
    deckId: string;
    deckTitle: string;
  }>;
};

export const FlashContext = createContext<FlashContextType>({
  decks: {},
  createDeck: () => {},
  addCardToDeck: () => {},
  toggleFavorite: () => {},
  getFavorites: () => [],
});

export const FlashProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [decks, setDecks] = useState<Record<string, Deck>>({
    "sample-deck": {
      id: "sample-deck",
      title: "Sample Deck",
      cards: [],
    },
  });

  const createDeck = (title: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setDecks((d) => ({ ...d, [id]: { id, title, cards: [] } }));
  };

  const addCardToDeck = (deckId: string, card: { question: string; answer: string }) => {
    const newCard = {
      id: Math.random().toString(36).substring(2, 9),
      ...card,
      favorite: false,
    };
    setDecks((d) => {
      const deck = d[deckId];
      if (!deck) return d;
      return {
        ...d,
        [deckId]: { ...deck, cards: [...deck.cards, newCard] },
      };
    });
  };

  const toggleFavorite = (deckId: string, cardId: string) => {
    setDecks((d) => {
      const deck = d[deckId];
      if (!deck) return d;

      return {
        ...d,
        [deckId]: {
          ...deck,
          cards: deck.cards.map((c) =>
            c.id === cardId ? { ...c, favorite: !c.favorite } : c
          ),
        },
      };
    });
  };

  const getFavorites = () => {
    const favs: any[] = [];
    Object.values(decks).forEach((deck) =>
      deck.cards.forEach((c) => {
        if (c.favorite) {
          favs.push({
            id: c.id,
            question: c.question,
            answer: c.answer,
            deckId: deck.id,
            deckTitle: deck.title,
          });
        }
      })
    );
    return favs;
  };

  return (
    <FlashContext.Provider
      value={{ decks, createDeck, addCardToDeck, toggleFavorite, getFavorites }}
    >
      {children}
    </FlashContext.Provider>
  );
};