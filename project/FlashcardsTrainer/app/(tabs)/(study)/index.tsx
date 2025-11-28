import { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { FlashContext } from "../../../src/contexts/FlashContext";

export default function StudyScreen() {
  const { decks } = useContext(FlashContext);

  const favorites = Object.values(decks)
    .flatMap((deck) => deck.cards.map((c) => ({ ...c, deckTitle: deck.title })))
    .filter((c) => c.favorite);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}> Study Favorites</Text>

      {favorites.length === 0 ? (
        <Text>No favorite cards yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 16,
                marginBottom: 8,
                backgroundColor: "#f0f0f0",
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 16 }}>{item.question}</Text>
              <Text style={{ color: "gray" }}>Deck: {item.deckTitle}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
