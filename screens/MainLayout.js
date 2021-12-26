import React from "react";
import { Text } from "react-native";
import Animated from "react-native-reanimated";
import { COLORS } from "../constants";

export default function MainLayout({ drawerAnimationStyle }) {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        ...drawerAnimationStyle,
      }}
    >
      <Text>Open up App.js to start working on your app!</Text>
    </Animated.View>
  );
}
