import React from "react";
import { Text, View } from "react-native";

export default function Greet({ name }) {
  console.log(name);
  return (
    <View>
      <Text>Hello GooD MorninG {name}</Text>
    </View>
  );
}
