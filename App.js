import React, { useState } from "react";
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from "react-native";

import JustifyContentButtons from "./components/JustifyContentButtons";
import AlignItemsButtons from "./components/AlignItemsButtons";

export default function App() {
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [pressedJustifyButton, setPressedJustifyButton] = useState(null);
  const [pressedAlignButton, setPressedAlignButton] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: justifyContent,
          alignItems: alignItems,
          flex: 1,
        }}
      >
        <View style={[styles.box, { backgroundColor: "#006BB8" }]}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#0496FF" }]}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#4BB3FD" }]}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>

      <Text style={styles.title}>Justify Content</Text>
      <JustifyContentButtons
        onPress={(position) => {
          setPressedJustifyButton(position);
          if (position) setJustifyContent(position);
        }}
        activeButton={pressedJustifyButton}
      />

      <Text style={styles.title}>Align Items</Text>
      <AlignItemsButtons
        onPress={(position) => {
          setPressedAlignButton(position);
          if (position) setAlignItems(position);
        }}
        activeButton={pressedAlignButton}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
  },
  box: {
    height: 100,
    width: 100,
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    color: "white",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 8,
    margin: 5,
    borderRadius: 5,
    borderColor: "blue",
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
