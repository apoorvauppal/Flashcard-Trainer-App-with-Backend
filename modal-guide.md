# Understanding Modals in React Native (Expo Router)

## Overview
A **modal** is a temporary view that appears *on top of the current screen*, allowing the user to perform a quick action without navigating away.  
They are commonly used for short tasks such as **creating a new item**, **editing existing data**, or **displaying confirmations**.

In this assigment, we use **modals** for:
- Adding a **new deck**
- Adding a **new card**

Both are small forms that slide up over the current screen and can be dismissed when done.

---

## How Modals Work in Expo Router

In Expo Router, modals are defined as **separate routes** inside a `(modals)` group.  
You can control their animation and behavior by setting the screen’s `presentation` option.

### Example Project Structure:
```
app/
 ├── (tabs)/
 │    ├── 
 │    
 ├── (modals)/
 │    ├── create-deck.tsx
 │    └── create-card.tsx
 └── _layout.tsx
```

### Defining a Modal in `_layout.tsx`:
```tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(modals)/create-deck"
        options={{ presentation: "modal", title: "New Deck" }}
      />
      <Stack.Screen
        name="(modals)/create-card"
        options={{ presentation: "modal", title: "New Card" }}
      />
    </Stack>
  );
}
```

The `presentation: "modal"` setting tells Expo Router to display this screen with **modal-style animation**:
- On **iOS**: it slides up from the bottom.  
- On **Android**: it fades in above the current view.

---

## Why Use Modals?
- Keeps users focused on a small, single task.  
- Provides a **non-destructive** experience, users can cancel easily.  
- Visually distinguishes short tasks from full-page navigation.

---

## Official Documentation
For in-depth explanations and additional configuration options, see:  
**Expo Router Modals Guide**: [https://docs.expo.dev/router/advanced/modals/](https://docs.expo.dev/router/advanced/modals/)

---
