import React from "react";
import { TextInput, View } from "react-native";

type SearchBarProps = {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
};

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <View style={{ marginBottom: 16 }}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder || "Search..."}
        style={{
          padding: 12,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 8,
          fontSize: 16,
        }}
      />
    </View>
  );
}