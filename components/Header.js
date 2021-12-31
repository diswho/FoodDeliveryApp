import React from "react";
import { Text, View } from "react-native";
import { SIZES } from "../constants";
const Header = ({ containerStyle, title, leftComponent, rightComponent }) => {
  // let _style = { flexDirection: "row", ...containerStyle };
  // console.log({ _style });
  return (
    <View style={{ flexDirection: "row", ...containerStyle }}>
      {/* Left */}
      {leftComponent}
      {/* Title */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: SIZES.body3 }}>{title}</Text>
      </View>
      {/* Right */}
      {rightComponent}
    </View>
  );
};
export default Header;
