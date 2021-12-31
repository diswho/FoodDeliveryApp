import React, { useEffect } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { COLORS, constants, SIZES, icons, dummyData } from "../constants";
import { Home, Cart, Notification, Search, Favourite } from "../screens";
// import { Header } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setSelectTab } from "../stores/tabSlice";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
// import LinearGradient from "react-native-linear-gradient";

const MainLayout = ({ drawerAnimationStyle, navigation }) => {
  const tabSelect = useSelector(setSelectTab);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelectTab(constants.screen.home));
  }, []);
  var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: "Gill Sans",
      textAlign: "center",
      margin: 10,
      color: "#ffffff",
      backgroundColor: "transparent",
    },
  });
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
      {/* Header */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        title={tabSelect.payload.tab.selectTab.toUpperCase()}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Image
              source={dummyData.profile_image}
              style={{ borderRadius: SIZES.radius, width: 40, height: 40 }}
            />
          </TouchableOpacity>
        }
      />
      {/* Content */}
      <View style={{ flex: 1 }}>
        <Text>Content</Text>
      </View>
      {/* Footer */}
      {/* <View style={{ height: 100, justifyContent: "flex-end" }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.lightGray]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
      </View> */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 4 }}
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={{
          // position: "absolute",
          padding: 15,
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "#ffffff" }}>Sign in with Facebook</Text>
      </LinearGradient>
    </Animated.View>
  );
};
export default MainLayout;
