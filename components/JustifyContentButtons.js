import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function JustifyContentButtons({ onPress, activeButton }) {
  const justifyContentOptions = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ];

  return (
    <View style={styles.buttonContainer}>
      {justifyContentOptions.map((position) => (
        <Pressable
          key={position}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
            activeButton === position && styles.buttonActive,
          ]}
          onPressIn={() => onPress(position)}
          onPressOut={() => onPress(null)}
          onPress={() => onPress(position)}
        >
          <Text style={styles.buttonText}>{position}</Text>
        </Pressable>
      ))}
    </View>
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
    marginBottom: 10,
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
