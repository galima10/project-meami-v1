import { Tabs } from "expo-router";
import TabBar from "@components/organisms/TabBar";
import TopButton from "@components/molecules/TopButtonNavigation";
import { Image } from "expo-image";
import { View } from "react-native";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import { usePathname } from "expo-router";
import TopButtonAction from "@components/molecules/TopButtonAction";

export default function TabLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="menuViews"
          options={{
            headerTitleAlign: "center",
            headerLeft: () => {
              const pathname = usePathname();

              // headerLeft différent si on est sur liste des recettes du menu
              if (pathname.endsWith("menuViews/recipesList")) {
                return (
                  <View
                    style={{ flexDirection: "row", gap: 10, marginLeft: 16 }}
                  >
                    {/* <TopButtonAction icon="ingredientsMenu" withStroke /> */}
                    <TopButton
                      routeName="menuViews/recipesList"
                      icon="ingredientsMenu"
                      green
                      withStroke
                    />
                  </View>
                );
              }

              // headerRight par défaut
              return (
                <View style={{ flexDirection: "row", gap: 10, marginLeft: 16 }}>
                  <TopButton
                    routeName="menuViews/calendar"
                    icon="calendar"
                    withStroke
                  />
                  <TopButton
                    routeName="menuViews/list"
                    icon="list"
                    withStroke
                  />
                </View>
              );
            },
            headerTitle: () => (
              <Image
                source={require("@assets/images/precharged/logos/logo_text.png")}
                style={{ width: 100, height: 100 }}
              />
            ),
            headerRight: () => {
              const pathname = usePathname();

              // headerRight différent si on est sur modify
              if (pathname.endsWith("menuViews/modify")) {
                return (
                  <View
                    style={{ flexDirection: "row", gap: 10, marginRight: 16 }}
                  >
                    <TopButton
                      routeName="menuViews/recipesList"
                      icon="recipesMenu"
                      green
                      withStroke
                    />
                  </View>
                );
              } else if (pathname.endsWith("menuViews/recipesList")) {
                return (
                  <View
                    style={{ flexDirection: "row", gap: 10, marginRight: 16 }}
                  >
                    <TopButton icon="return" green withStroke goBack />
                  </View>
                );
              }

              // headerRight par défaut
              return (
                <View
                  style={{ flexDirection: "row", gap: 10, marginRight: 16 }}
                >
                  <TopButton
                    routeName="menuViews/modify"
                    icon="modify"
                    green
                    withStroke
                  />
                </View>
              );
            },
            headerStyle: {
              backgroundColor: theme.properties.darkOrange,
              borderColor: theme.properties.orangeBorder,
              borderWidth: 1.5,
              height: 100,
              ...globalStyles.bigShadow,
            },
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="cartViews"
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                source={require("@assets/images/precharged/logos/logo_text.png")}
                style={{ width: 100, height: 100 }}
              />
            ),
            headerRight: () => {
              const pathname = usePathname();

              // headerRight différent si on est sur modify
              if (pathname.endsWith("cartViews/modify")) {
                return (
                  <View
                    style={{ flexDirection: "row", gap: 10, marginRight: 16 }}
                  >
                    <TopButton icon="validate" green withStroke goBack />
                  </View>
                );
              }

              // headerRight par défaut
              return (
                <View
                  style={{ flexDirection: "row", gap: 10, marginRight: 16 }}
                >
                  <TopButton
                    routeName="cartViews/modify"
                    icon="modify"
                    green
                    withStroke
                  />
                </View>
              );
            },
            headerStyle: {
              backgroundColor: theme.properties.darkOrange,
              height: 100,
              borderColor: theme.properties.orangeBorder,
              borderWidth: 1.5,
              ...globalStyles.bigShadow,
            },
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="stockViews"
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                source={require("@assets/images/precharged/logos/logo_text.png")}
                style={{ width: 100, height: 100 }}
              />
            ),
            headerRight: () => {
              const pathname = usePathname();

              // headerRight différent en fonction de la vue
              if (
                !pathname.endsWith("stockViews") &&
                !pathname.includes("modify")
              ) {
                return (
                  <View
                    style={{ flexDirection: "row", gap: 10, marginRight: 16 }}
                  >
                    <TopButton
                      routeName={`stockViews/modify/${pathname
                        .split("/")
                        .pop()}`}
                      icon="add"
                      green
                      withStroke
                      params={{ mode: "create" }}
                    />
                  </View>
                );
              } else if (pathname.includes("modify")) {
                return (
                  <View
                    style={{ flexDirection: "row", gap: 10, marginRight: 16 }}
                  >
                    <TopButton icon="return" green withStroke goBack />
                  </View>
                );
              }
            },
            headerLeft: () => {
              const pathname = usePathname();

              // headerRight différent si on est sur modify
              if (
                pathname.endsWith("stockViews/ingredients") ||
                pathname.endsWith("stockViews/recipes")
              ) {
                return (
                  <View
                    style={{ flexDirection: "row", gap: 10, marginLeft: 16 }}
                  >
                    <TopButton
                      routeName="stockViews/recipes"
                      icon="recipes"
                      withStroke
                    />
                    <TopButton
                      routeName="stockViews/ingredients"
                      icon="ingredients"
                      withStroke
                    />
                  </View>
                );
              }
            },
            headerStyle: {
              backgroundColor: theme.properties.darkOrange,
              height: 100,
              borderColor: theme.properties.orangeBorder,
              borderWidth: 1.5,
              ...globalStyles.bigShadow,
            },
            tabBarStyle: { display: "none" },
          }}
        />
        <Tabs.Screen
          name="infosViews"
          options={{
            headerTitleAlign: "center",
            headerTitle: () => (
              <Image
                source={require("@assets/images/precharged/logos/logo_text.png")}
                style={{ width: 100, height: 100 }}
              />
            ),
            headerRight: () => {
              const pathname = usePathname();

              // headerRight différent en fonction de la vue
              if (!pathname.endsWith("infosViews")) {
                return (
                  <View
                    style={{ flexDirection: "row", gap: 10, marginRight: 16 }}
                  >
                    <TopButtonAction icon="add" />
                  </View>
                );
              }
            },
            headerLeft: () => {
              const pathname = usePathname();

              // headerRight différent si on est sur modify
              if (!pathname.endsWith("/infosViews")) {
                return (
                  <View
                    style={{ flexDirection: "row", gap: 10, marginLeft: 16 }}
                  >
                    <TopButton
                      routeName="infosViews/storage"
                      icon="storage"
                      withStroke
                    />
                    <TopButton
                      routeName="infosViews/cooking"
                      icon="cooking"
                      withStroke
                    />
                  </View>
                );
              }
            },
            headerStyle: {
              backgroundColor: theme.properties.darkOrange,
              height: 100,
              borderColor: theme.properties.orangeBorder,
              borderWidth: 1.5,
              ...globalStyles.bigShadow,
            },
            tabBarStyle: { display: "none" },
          }}
        />
      </Tabs>
      <TabBar />
    </>
  );
}
