import React, { useEffect, useRef } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { COLORS, constants, SIZES, icons, dummyData } from "../constants";
import { Home, Cart, Notification, Search, Favourite } from "../screens";

import { useDispatch, useSelector } from "react-redux";
import { setSelectTab } from "../stores/tabSlice";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";

const TabButton = ({
  label,
  icon,
  isFocused,
  outerContainerStyle,
  innerContainerStyle,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          },
          outerContainerStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: "row",
              width: "80%",
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 25,
            },
            innerContainerStyle,
          ]}
        >
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocused ? COLORS.white : COLORS.gray,
            }}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: isFocused ? COLORS.white : COLORS.gray,
                fontSize: SIZES.h3,
              }}
            >
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const MainLayout = ({ drawerAnimationStyle, navigation }) => {
  const flatListRef = useRef();
  // reanimated shared value
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  const homeFlexStyle = useAnimatedStyle(() => {
    return { flex: homeTabFlex.value };
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: homeTabColor.value };
  });

  const searchFlexStyle = useAnimatedStyle(() => {
    return { flex: searchTabFlex.value };
  });
  const searchColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: searchTabColor.value };
  });
  const cartFlexStyle = useAnimatedStyle(() => {
    return { flex: cartTabFlex.value };
  });
  const cartColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: cartTabColor.value };
  });
  const favouriteFlexStyle = useAnimatedStyle(() => {
    return { flex: favouriteTabFlex.value };
  });
  const favouriteColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: favouriteTabColor.value };
  });
  const notificationFlexStyle = useAnimatedStyle(() => {
    return { flex: notificationTabFlex.value };
  });
  const notificationColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: notificationTabColor.value };
  });

  const tabSelect = useSelector(setSelectTab);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectTab(constants.screen.home));
  }, []);

  useEffect(() => {
    if (tabSelect.payload.tab.selectTab == constants.screen.home) {
      flatListRef?.current?.scrollToIndex({ index: 0, animated: false });
      homeTabFlex.value = withTiming(4, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    if (tabSelect.payload.tab.selectTab == constants.screen.search) {
      flatListRef?.current?.scrollToIndex({ index: 1, animated: false });
      searchTabFlex.value = withTiming(4, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    if (tabSelect.payload.tab.selectTab == constants.screen.cart) {
      flatListRef?.current?.scrollToIndex({ index: 2, animated: false });
      cartTabFlex.value = withTiming(4, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    if (tabSelect.payload.tab.selectTab == constants.screen.favourite) {
      flatListRef?.current?.scrollToIndex({ index: 3, animated: false });
      favouriteTabFlex.value = withTiming(4, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      favouriteTabFlex.value = withTiming(1, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
    if (tabSelect.payload.tab.selectTab == constants.screen.notification) {
      flatListRef?.current?.scrollToIndex({ index: 4, animated: false });
      notificationTabFlex.value = withTiming(4, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.primary, {
        duration: 500,
      });
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }
  }, [tabSelect]);

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
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View style={{ width: SIZES.width, height: SIZES.height }}>
                {item.label == constants.screen.home && <Home />}
                {item.label == constants.screen.search && <Search />}
                {item.label == constants.screen.cart && <Cart />}
                {item.label == constants.screen.favourite && <Favourite />}
                {item.label == constants.screen.notification && (
                  <Notification />
                )}
              </View>
            );
          }}
        />
      </View>
      {/* Footer */}
      <View style={{ height: 100, justifyContent: "flex-end" }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.black]}
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
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: COLORS.white,
          }}
        >
          <TabButton
            label={constants.screen.home}
            icon={icons.home}
            isFocused={tabSelect.payload.tab.selectTab == constants.screen.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => {
              dispatch(setSelectTab(constants.screen.home));
            }}
          />
          <TabButton
            label={constants.screen.search}
            icon={icons.search}
            isFocused={
              tabSelect.payload.tab.selectTab == constants.screen.search
            }
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            onPress={() => {
              dispatch(setSelectTab(constants.screen.search));
            }}
          />
          <TabButton
            label={constants.screen.cart}
            icon={icons.cart}
            isFocused={tabSelect.payload.tab.selectTab == constants.screen.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => {
              dispatch(setSelectTab(constants.screen.cart));
            }}
          />
          <TabButton
            label={constants.screen.favourite}
            icon={icons.favourite}
            isFocused={
              tabSelect.payload.tab.selectTab == constants.screen.favourite
            }
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            onPress={() => {
              dispatch(setSelectTab(constants.screen.favourite));
            }}
          />
          <TabButton
            label={constants.screen.notification}
            icon={icons.notification}
            isFocused={
              tabSelect.payload.tab.selectTab == constants.screen.notification
            }
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() => {
              dispatch(setSelectTab(constants.screen.notification));
            }}
          />
        </View>
      </View>
    </Animated.View>
  );
};
export default MainLayout;
