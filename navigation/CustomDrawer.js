import { Image, Text, TouchableOpacity, View } from "react-native";
import MainLayout from "../screens/MainLayout";
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
import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
  // console.log(`=== CustomDrawerItem === ${label} - ${isFocused}`);
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

const CustomDrawerContent = ({ navigation, selectedTab }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
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
            isFocused={selectedTab == constants.screen.home}
            onPress={() => {
              setSelectedTab(constants.screen.home);
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={constants.screen.my_wallet}
            icon={icons.wallet}
            isFocused={selectedTab == constants.screen.my_wallet}
            onPress={() => {
              setSelectedTab(constants.screen.my_wallet);
              navigation.navigate("MainLayout");
            }}
          />

          <CustomDrawerItem
            label={constants.screen.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screen.notification}
            onPress={() => {
              setSelectedTab(constants.screen.notification);
              navigation.navigate("MainLayout");
            }}
          />
          <CustomDrawerItem
            label={constants.screen.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screen.favourite}
            onPress={() => {
              setSelectedTab(constants.screen.favourite);
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
const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
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
          // console.log(`=== Drawer.Navigator ${selectedTab}`);
          return (
            <CustomDrawerContent
              navigation={props.navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
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

function mapStateToProps(state) {
  // console.log(`=== mapStateToProps ===${state}`);
  return {
    setSelectedTab: state.tabReducer.selectedTab,
  };
}
function mapDispatchToProps(dispatch) {
  // console.log("=== mapDispatchToProps ===");
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
