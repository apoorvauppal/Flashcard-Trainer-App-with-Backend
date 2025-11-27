// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { FlashProvider } from "./src/context/FlashContext";
import Tabs from "./src/navigation/Tabs";

export default function App() {
  return (
    <FlashProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </FlashProvider>
  );
}

