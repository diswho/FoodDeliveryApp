import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

export const TwoPointSlider = ({
  values,
  min,
  max,
  prefix,
  postfix,
  onValueChange,
}) => {
  return (
    <MultiSlider
      // enabledTwo={true}
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 20}
      min={min}
      max={max}
      step={1}
      markerOffsetY={20}
      selectedStyle={{ backgroundColor: COLORS.primary }}
      trackStyle={{
        height: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray,
      }}
      minMarkerOverlapDistance={50}
      customMarker={(e) => {
        return (
          <View
            style={{
              height: 60,
              width:60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                borderWidth: 4,
                borderColor: COLORS.white,
                backgroundColor: COLORS.primary,
                ...styles.shadow,
              }}
            />
            <Text style={{ marginTop: 5, color: COLORS.gray, ...FONTS.body3 }}>
              {prefix} {e.currentValue} {postfix}
            </Text>
          </View>
        );
      }}
      onValuesChange={(values) => onValueChange(values)}
    />
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
});
