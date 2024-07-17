import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function AlignItemsButtons({ onPress, activeButton }) {
  const alignItemsOptions = [
    "flex-start",
    "flex-end",
    "center",
    "stretch",
    "baseline",
  ];

  return (
    <View style={styles.buttonContainer}>
      {alignItemsOptions.map((position) => (
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
});
