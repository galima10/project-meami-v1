import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="menu"
        options={{
          headerShown: false,
          // tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          headerShown: false,
          // tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="stock"
        options={{
          headerShown: false,
          // tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="infos"
        options={{
          headerShown: false,
          // tabBarStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}
