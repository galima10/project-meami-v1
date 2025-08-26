import { Tabs } from "expo-router";
import TabBar from "@components/organisms/TabBar";
import TopButton from "@components/molecules/TopButton";
import { Image } from "expo-image";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <>
      {/* <TopBar /> */}
      <Tabs>
        <Tabs.Screen
          name="menu"
          options={{
            headerTitleAlign: "center",
            headerLeft: () => (
              <View style={{ flexDirection: "row", gap: 8 }}>
                <TopButton routeName="infos" />
                <TopButton routeName="infos" />
              </View>
            ),
            headerTitle: () => (
              <Image
                source={require("@assets/images/precharged/logos/logo_text.png")}
                style={{ width: 100, height: 100 }}
              />
            ),
            headerRight: () => (
              <View style={{ width: 50 }} /> // espace réservé
            ),
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
          name="stock"
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="infos"
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
