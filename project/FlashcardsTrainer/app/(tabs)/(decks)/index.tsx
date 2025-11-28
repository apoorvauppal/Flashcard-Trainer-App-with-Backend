import { useContext, useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { FlashContext } from "../../../src/contexts/FlashContext";
import DeckCard from "../../../src/components/DeckCard";
import SearchBar from "../../../src/components/SearchBar";

export default function DecksScreen() {
  const { decks } = useContext(FlashContext);
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredDecks = Object.values(decks).filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SearchBar value={search} onChange={setSearch} placeholder="Search decks..." />

      <FlatList
        data={filteredDecks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DeckCard
            title={item.title}
            count={item.cards.length}
            onPress={() => router.push(`/(tabs)/(decks)/deck/${item.id}`)}
          />
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", color: "gray", marginTop: 20 }}>
            {search ? "No decks found." : "No decks yet. Add one!"}
          </Text>
        }
      />

      {/* ➕ Floating Action Button */}
      <TouchableOpacity
        onPress={() => router.push("/(modals)/create-deck")}
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          backgroundColor: "#007AFF",
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 32, lineHeight: 32 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
