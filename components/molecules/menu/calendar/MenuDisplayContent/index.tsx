import { View, StyleSheet } from "react-native";
import { DayMomentType } from "@app-types/DayMomentType";
import { AppText } from "@components/atoms/global/Texts";
import theme from "@themes/index";
import RecipesContainer from "../RecipesContainer";
import { useMenuDisplayContent } from "@hooks/menu/list/useMenuDisplayContent";

interface MenuDisplayProps extends DayMomentType {
  menu: {
    matin: { name: string; type: string }[];
    midi: { name: string; type: string }[];
    soir: { name: string; type: string }[];
  };
  handleInteraction: () => void;
}

export default function MenuDisplayContent({
  momentSelected,
  menu,
  handleInteraction,
}: MenuDisplayProps) {
  const {
    desserts,
    legumesAccompagnements,
    platsPrincipaux,
    petitDej,
    lengthMenu,
  } = useMenuDisplayContent(momentSelected, menu);

  return (
    <View style={styles.menuContainer}>
      {lengthMenu > 0 ? (
        momentSelected === "morning" ? (
          <RecipesContainer meals={petitDej} handleInteraction={handleInteraction} />
        ) : (
          <>
            <RecipesContainer meals={platsPrincipaux} handleInteraction={handleInteraction} />
            {legumesAccompagnements.length > 0 && (
              <>
                <View style={styles.separator} />
                <RecipesContainer meals={legumesAccompagnements} handleInteraction={handleInteraction} />
              </>
            )}
            {desserts.length > 0 && (
              <>
                <View style={styles.separator} />
                <RecipesContainer meals={desserts} handleInteraction={handleInteraction} />
              </>
            )}
          </>
        )
      ) : (
        <AppText style={{ fontSize: 16 }}>Non renseigné</AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  separator: {
    height: 1,
    width: "60%",
    backgroundColor: theme.properties.brown,
  },
});
