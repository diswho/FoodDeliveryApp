import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES, icons, FONTS } from "../constants";

export const HorizontalFoodCard = ({
  containerStyle,
  imageStyle,
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray,
        ...containerStyle,
      }}
    >
      {/* =============== Image */}
      <Image
        source={item.image}
        style={{
          marginRight: SIZES.radius,
          ...imageStyle,
        }}
      />

      {/* =============== Infor  */}
      <View
        style={{
          flex: 1,
        }}
      >
        {/* name */}
        <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>
        {/* description */}
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
          }}
        >
          {item.description}
        </Text>
        {/* price */}
        <Text style={{ marginTop: SIZES.base, ...FONTS.h2 }}>
          ${item.price}
        </Text>
      </View>
      {/* =============== Calories */}
      <View
        style={{
          flexDirection: "row",
          right: SIZES.radius,
          top: 5,
          position: "absolute",
        }}
      >
        <Image source={icons.fire} style={{ height: 20, width: 20 }} />
        <Text style={{ ...FONTS.body5 }}> {item.calories} Calories</Text>
      </View>
    </TouchableOpacity>
  );
};
