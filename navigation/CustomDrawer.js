import { View } from "react-native";
import MainLayout from "../screens/MainLayout";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function CustomDrawer() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
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
      >
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
}
