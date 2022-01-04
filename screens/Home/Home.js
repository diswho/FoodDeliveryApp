import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { HorizontalFoodCard } from "../../components";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      {children}
    </View>
  );
};

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);
  const [recommends, setRecommends] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    let selectedRecommend = dummyData.menu.find((a) => a.name == "Recommended");
    // console.log("==== Before ", recommends);
    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);
    setRecommends(
      selectedRecommend?.list.filter((a) => a.categories.includes(categoryId))
    );
    // console.log("==== After ", recommends);
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
  };

  const renderSearch = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginBottom: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray,
        }}
      >
        {/* ======================== Icon ========================*/}
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.black,
          }}
        />
        {/* ======================== Text Input ========================*/}
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholder="Search...."
        />
        {/* ======================== Filter Button ========================*/}
        <TouchableOpacity onPress={() => {}}>
          <Image source={icons.filter} />
        </TouchableOpacity>
      </View>
    );
  };
  // ================================= Menu Type =================================
  const renderMenuType = () => {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: SIZES.padding,
                marginRight:
                  index == dummyData.menu.length - 1 ? SIZES.padding : 0,
              }}
              onPress={() => {
                setSelectedMenuType(item.id);
                handleChangeCategory(selectedCategoryId, item.id);
              }}
            >
              <Text
                style={{
                  color:
                    selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };
  // ================================= Recommended Section =================================
  const renderRecommendedSection = () => (
    <Section
      title="Recommended"
      onPress={() => console.log("Show All Recommend")}
    >
      <FlatList
        data={recommends}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: "center",
              }}
              imageStyle={{
                // marginTop: 10,
                marginLeft: 15,
                height: 130,
                width: 130,
              }}
              item={item}
              onPress={() => console.log("HorizontalFoodCard")}
            />
          );
        }}
      />
    </Section>
  );
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* ================================================== Search ==================================================  */}
      {renderSearch()}
      {/* ================================================== List ==================================================  */}
      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Recommended */}
            {renderRecommendedSection()}
            {/* Menu Type */}
            {renderMenuType()}
          </View>
        }
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                // marginTop: 5,
                marginLeft: 10,
                height: 100,
                width: 100,
              }}
              item={item}
              onPress={() => console.log("HorizontalCard")}
            />
          );
        }}
      />
    </View>
  );
}
