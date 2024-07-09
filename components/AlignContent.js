import { useState } from "react";
import { Text } from "react-native";

export function AlignContent() {
  const [alignContent, setAlignContent] = useState("flex-start");

  function handleButtonClick(position) {
    setAlignContent(position);
  }

  return <Text>Im the align content</Text>;
}
