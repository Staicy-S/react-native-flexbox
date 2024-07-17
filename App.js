import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
} from "react-native";

export default function App() {
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [pressedButton, setPressedButton] = useState(null);

  const justifyContentOptions = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ];

  function handleButtonClick(position) {
    setJustifyContent(position);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: justifyContent, flex: 1 }}>
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

      <View style={styles.buttonContainer}>
        {justifyContentOptions.map((position) => (
          <Pressable
            key={position}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
              pressedButton === position && styles.buttonActive,
            ]}
            onPressIn={() => setPressedButton(position)}
            onPressOut={() => setPressedButton(null)}
            onPress={() => handleButtonClick(position)}
          >
            <Text style={styles.buttonText}>{position}</Text>
          </Pressable>
        ))}
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 8,
    margin: 5,
    borderRadius: 5,
    borderColor: "blue",
    borderWidth: 1,
  },
  buttonPressed: {
    backgroundColor: "deepskyblue",
  },
  buttonActive: {
    borderColor: "darkblue",
  },
  buttonText: {
    fontSize: 17,
  },
});
