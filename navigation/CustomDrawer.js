import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  COLORS,
  FONTS,
  icons,
  images,
  SIZES,
  dummyData,
  constants,
} from "../constants";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Animated from "react-native-reanimated";
import MainLayout from "../screens/MainLayout";
import { setSelectTab } from "../stores/tabSlice";
import { Notification } from "../screens";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 35,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        style={{ width: 20, height: 20, tintColor: COLORS.black }}
      />
      <Text style={{ marginLeft: 15, fontSize: SIZES.h3 }}>{label}</Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  const dispatch = useDispatch();
  const tabSelect = useSelector(setSelectTab);
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
      >
        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{
                height: 35,
                width: 35,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginTop: SIZES.radius,
              alignItems: "center",
            }}
            onPress={() => console.log("Profile")}
          >
            <Image
              // source={dummyData.myProfile?.profile_image}
              source={dummyData.profile_image}
              style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
            />
            <View style={{ marginLeft: SIZES.radius }}>
              <Text style={{ color: COLORS.black, fontSize: SIZES.h3 }}>
                Sabuydee
              </Text>
              <Text style={{ color: COLORS.black, fontSize: SIZES.body4 }}>
                Friends
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, marginTop: SIZES.padding }}>
          {/* <CustomDrawerItem label="constants.screen.home" icon={icons.home} /> */}
          <CustomDrawerItem
            label={constants.screen.home}
            icon={icons.home}
            isFocused={tabSelect.payload.tab.selectTab == constants.screen.home}
            onPress={() => {
              dispatch(setSelectTab(constants.screen.home));
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={constants.screen.wallet}
            icon={icons.wallet}
            isFocused={
              tabSelect.payload.tab.selectTab == constants.screen.wallet
            }
            onPress={() => {
              dispatch(setSelectTab(constants.screen.wallet));
              navigation.navigate("MainLayout");
            }}
          />

          <CustomDrawerItem
            label={constants.screen.notification}
            icon={icons.notification}
            isFocused={
              tabSelect.payload.tab.selectTab == constants.screen.notification
            }
            onPress={() => {
              dispatch(setSelectTab(constants.screen.notification));
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={constants.screen.favourite}
            icon={icons.favourite}
            isFocused={
              tabSelect.payload.tab.selectTab == constants.screen.favourite
            }
            onPress={() => {
              dispatch(setSelectTab(constants.screen.favourite));
              navigation.navigate("MainLayout");
            }}
          />
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              backgroundColor: COLORS.black,
              marginLeft: SIZES.radius,
            }}
          />
          <CustomDrawerItem label="Track your Order" icon={icons.location} />
          <CustomDrawerItem label="Coupons" icon={icons.coupon} />
          <CustomDrawerItem label="Setting" icon={icons.settings} />
          <CustomDrawerItem label="Invite a friend" icon={icons.invite} />
          <CustomDrawerItem label="Call Center" icon={icons.help} />
        </View>
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <CustomDrawerItem label="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
const CustomDrawer = () => {
  // console.log(`=========== CustomDrawer: ${selectedTab}`);
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      {/* <Drawer.Navigator>
        <Drawer.Screen
          name="MainLayout"
          component={MainLayout}
          options={{ title: "My Main", headerShown: false }}
        />
        <Drawer.Screen
          name="Article"
          component={Notification}
          options={{ title: "My Article", headerShown: false }}
        />
      </Drawer.Navigator> */}
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
        backgroundColor={COLORS.primary}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => (
            <MainLayout {...props} drawerAnimationStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};
export default CustomDrawer;
