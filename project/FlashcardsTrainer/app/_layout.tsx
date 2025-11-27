import { Stack } from "expo-router";
import { FlashProvider } from "../src/contexts/FlashContext";

export default function RootLayout() {
  return (
    <FlashProvider>
      <Stack>
        {/* Tabs Navigator (main app) */}
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />

        {/* Modals */}
        <Stack.Screen
          name=å"(modals)/create-deck"
          options={{
            presentation: "modal",
            title: "Create Deck",
          }}
        />
        <Stack.Screen
          name="(modals)/create-card"
          options={{
            presentation: "modal",
            title: "Create Card",
          }}
        />
      </Stack>
    </FlashProvider>
  );
}