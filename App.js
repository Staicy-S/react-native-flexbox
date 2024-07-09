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
        <Pressable
          style={styles.button}
          onPress={() => handleButtonClick("flex-start")}
        >
          <Text style={styles.buttonText}>flex-start</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => handleButtonClick("flex-end")}
        >
          <Text style={styles.buttonText}>flex-end</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => handleButtonClick("center")}
        >
          <Text style={styles.buttonText}>center</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => handleButtonClick("space-between")}
        >
          <Text style={styles.buttonText}>space-between</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => handleButtonClick("space-around")}
        >
          <Text style={styles.buttonText}>space-around</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => handleButtonClick("space-evenly")}
        >
          <Text style={styles.buttonText}>space-evenly</Text>
        </Pressable>
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
  buttonText: {
    fontSize: 17,
  },
});
