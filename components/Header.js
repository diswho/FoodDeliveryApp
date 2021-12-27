import React from "react";
import { Text, View } from "react-native";
import { SIZES } from "../constants";
const Header = ({ containerStyle, title }) => {
  return (
    <View style={{ flexDirection: "row", ...containerStyle }}>
      {/* Left */}

      {/* Title */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: SIZES.body3 }}>{title}</Text>
      </View>
      {/* Right */}
    </View>
  );
};
export default Header;
