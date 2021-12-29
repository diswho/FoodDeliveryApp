import React, { useEffect } from "react";
import { Button, Text } from "react-native";
import Animated from "react-native-reanimated";
import { COLORS, constants, SIZES } from "../constants";
import { Home, Cart, Notification, Search, Favourite } from "../screens";
// import { Header } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setSelectTab } from "../stores/tabSlice";

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
}) => {
  const tabSelect = useSelector(setSelectTab);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(`=== MainLayout === ${JSON.stringify(tabSelect)}`);
  // }, [tabSelect]);

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...drawerAnimationStyle,
      }}
    >
      {/* Header */}
      
      {/* Content */}
      <Text>Content</Text>
      {/* Footer */}
      <Text>Footer</Text>
    </Animated.View>
  );
};
export default MainLayout;
