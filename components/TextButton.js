import { Text, TouchableOpacity } from "react-native";
import { JumpingTransition } from "react-native-reanimated";
import { FONTS, COLORS } from "../constants";

export const TextButton = ({
  label,
  labelStyle,
  buttonContainerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
