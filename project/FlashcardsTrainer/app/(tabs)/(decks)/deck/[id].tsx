import { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { FlashContext } from "../../../../src/contexts/FlashContext";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function DeckDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { decks, toggleFavorite } = useContext(FlashContext);
  const router = useRouter();

  const deck = id ? decks[id] : undefined;
  if (!deck) return <Text>Deck not found</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>{deck.title}</Text>

      <FlatList
        data={deck.cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 16,
              marginBottom: 8,
              backgroundColor: "#f0f0f0",
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 16 }}>{item.question}</Text>
              <Text style={{ color: "gray" }}>{item.answer}</Text>
            </View>
            <Text
              style={{ fontSize: 20 }}
              onPress={() => toggleFavorite(deck.id, item.id)}
            >
              {item.favorite === true ? "❤️" : "🤍"}
            </Text>
          </View>
        )}
      />

      {/* Floating Action Button for adding a card */}
      <TouchableOpacity
        onPress={() => router.push(`/(modals)/create-card?deckId=${deck.id}`)}
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          backgroundColor: "#34C759",
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 32, lineHeight: 32 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}