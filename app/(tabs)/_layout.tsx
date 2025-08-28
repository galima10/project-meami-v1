import { Tabs } from "expo-router";
import TabBar from "@components/organisms/TabBar";
import TopButton from "@components/molecules/TopButton";
import { Image } from "expo-image";
import { View } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";

export default function TabLayout() {

  return (
    <>
      {/* <TopBar /> */}
      <Tabs>
        <Tabs.Screen
          name="menuViews"
          options={{
            headerTitleAlign: "center",
            headerLeft: () => (
              <View style={{ flexDirection: "row", gap: 10, marginLeft: 16 }}>
                <TopButton routeName="infos" icon="calendar" />
                <TopButton routeName="infos" icon="list" />
              </View>
            ),
            headerTitle: () => (
              <Image
                source={require("@assets/images/precharged/logos/logo_text.png")}
                style={{ width: 100, height: 100 }}
              />
            ),
            headerRight: () => (
              // <View style={{ width: 50 }} /> // espace réservé
              <View style={{ flexDirection: "row", gap: 10, marginRight: 16 }}>
                <TopButton routeName="infos" icon="modify" green />
              </View>
            ),
            headerStyle: {
              backgroundColor: theme.properties.darkOrange,
              height: 100,
              ...globalStyles.bigShadow,
            },
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="stockViews"
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="infosViews"
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        />
      </Tabs>
      <TabBar />
    </>
  );
}
