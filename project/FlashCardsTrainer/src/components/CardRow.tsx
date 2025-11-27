import React from "react";
import { View, Text } from "react-native";

type CardRowProps = {
  question: string;
  answer: string;
  favorite: boolean;
  onToggleFavorite: () => void;
};

export default function CardRow({ question, answer, favorite, onToggleFavorite }: CardRowProps) {
  return (
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
        <Text style={{ fontSize: 16 }}>{question}</Text>
        <Text style={{ color: "gray" }}>{answer}</Text>
      </View>
      <Text style={{ fontSize: 20 }} onPress={onToggleFavorite}>
        {favorite ? "❤️" : "🤍"}
      </Text>
    </View>
  );
}