import { View, StyleSheet } from "react-native";
import { AppText } from "@components/atoms/global/Texts";
import AppButton from "@components/molecules/global/AppButton";
import theme from "@themes/index";
import { globalStyles } from "@themes/styles";
import RecipeCard from "@components/molecules/menu/modify/RecipeCard";

interface MomentElementProps {
  moment: "Matin" | "Midi" | "Soir";
  setMomentSelected: (moment: "Matin" | "Midi" | "Soir") => void;
  setIsDarkScreenVisible: (visible: boolean) => void;
  isActive: boolean;
  setSelectedRecipeType?: (type: string | undefined) => void;
  recipes?: {
    id: number;
    name: string;
    type: string;
    image: any;
    number: number;
  }[];
}

export default function MomentElement({
  moment,
  setMomentSelected,
  setIsDarkScreenVisible,
  isActive,
  setSelectedRecipeType,
  recipes,
}: MomentElementProps) {
  return (
    <View
      style={[
        styles.container,
        globalStyles.bigShadow,
        isActive && { borderColor: theme.properties.vibrantOrange },
      ]}
    >
      <View style={styles.header}>
        <AppText style={styles.momentTitle}>{moment}</AppText>
        <AppButton
          icon="add"
          iconSize={26}
          style={styles.addButton}
          orange
          onPress={() => {
            setMomentSelected(moment);
            setIsDarkScreenVisible?.(true);
            setSelectedRecipeType?.("breakfast");
          }}
        />
      </View>
      {recipes && recipes.length > 0 && (
        <View style={styles.body}>
          {recipes.map((recipe) => (
            <View
              style={{ width: 110 }}
              key={recipe.id}
            >
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                selectedRecipeType={recipe.type}
                style={{
                  marginVertical: 0,
                  padding: 0,
                }}
                displayed
              />
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: theme.properties.beigeBorder,
    borderWidth: 1.5,
    overflow: "hidden",
    borderRadius: 16,
    marginVertical: 8,
    width: "100%",
    alignItems: "flex-start",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    paddingHorizontal: 8,
  },
  momentTitle: {
    fontWeight: theme.properties.semibold,
    fontSize: 24,
    lineHeight: 40,
    textTransform: "capitalize",
  },
  addButton: {
    padding: 6,
  },
});
