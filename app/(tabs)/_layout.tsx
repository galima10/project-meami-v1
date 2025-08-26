import { Tabs } from "expo-router";
import TabBar from "@components/organisms/TabBar";
import TopBar from "@components/organisms/TopBar";

export default function TabLayout() {
  return (
    <>
      <TopBar />
      <Tabs>
        <Tabs.Screen
          name="menu"
          options={{
            headerShown: false,
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
