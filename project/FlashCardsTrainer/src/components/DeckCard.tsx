import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type DeckCardProps = {
  title: string;
  count: number;
  onPress: () => void;
};

export default function DeckCard({ title, count, onPress }: DeckCardProps) {
  return (
    <TouchableOpacity
      style={{
        padding: 16,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        marginBottom: 8,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 18 }}>{title}</Text>
      <Text style={{ color: "gray" }}>{count} cards</Text>
    </TouchableOpacity>
  );
}