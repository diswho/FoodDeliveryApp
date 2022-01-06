import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";

export const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
  // console.log(item);
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray,
        ...containerStyle,
      }}
    >
      {/* Calories and Favourite */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image source={icons.fire} style={{ width: 20, height: 20 }} />
          <Text style={{ color: COLORS.lightGray2, ...FONTS.body5 }}>
            {item.calories} Calories
          </Text>
        </View>
        <Image
          source={icons.like}
          style={{
            width: 20,
            height: 20,
            tintColor: item.isFavourite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>
      {/* Image */}
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={item.image} style={{ height: "100%", width: "100%" }} />
      </View>
      {/* Info */}
      <View
        style={{
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.lightGray2,
            textAlign: "center",
          }}
        >
          {item.description}
        </Text>
        <Text style={{ marginTop: SIZES.radius, ...FONTS.h2 }}>
          ₭ {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
