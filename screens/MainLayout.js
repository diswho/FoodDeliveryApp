import React, { useEffect } from "react";
import { Text } from "react-native";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { COLORS, constants, SIZES } from "../constants";
import { Home, Cart, Notification, Search, Favourite } from "../screens";
import { Header } from "../components";
import { setSelectedTab } from "../stores/tab/tabActions";

const MainLayout = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  useEffect(() => {
    setSelectedTab(constants.screen.home);
    console.log(`=== MainLayout === ${selectedTab}`);
  }, []);

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
          alignItems: "center",
        }}
        title={selectedTab}
        // title={selectedTab.toUpperCase()}
      ></Header>
      {/* Content */}

      {/* Footer */}
      <Text>MainLayout</Text>
    </Animated.View>
  );
};
// export default MainLayout;
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
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
