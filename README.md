# Meami - Documentation technique

## Développement

### Liste des features

[1.0.0]
- **Template de base** :
    > Template de base Expo + React Native seulement
    > Configuration pour permettre un déploiement automatisé

[1.1.0]
- **Splash Screen** :
    > Faux splash screen après le vrai splash screen avec le logo principal avec une animation bounce et le slogan avec une animation wave
    > Redirection vers la première page de l'application après 5 secondes (variable)
- **Polices et Images** : 
    > Préchargement des polices et des images au lancement de l'application
- **Nouveaux Onglets** : 
    > Suppression des écrans de base du templates
    > Ajout de 4 onglets à l'application : Menu, Cart, Stock et Infos

[1.2.0]
- **Utilisation d'icônes SVG** :
    > Affichage d'icônes SVG au sein de l'application
- **Tab Bar stylisée** :
    > Ajout d'icônes et de styles globaux (ombres, couleurs) à la Tab Bar et aux boutons de navigation d'écrans
- **Nouvelle couleur de fond** :
    > Couleurs et polices par défaut appliquées : beige au fond, marron aux textes
- **Restructuration de la navigation & Nouveaux Onglets** :
    > Ajout de différentes vues pour chaque onglet : 
        - Onglet Menu de la semaine : Vue Calendrier, Vue Liste, Vue Modifier le menu et Vue Liste des recettes entrées dans le menu
        - Onglet Liste de courses : Vue Liste et Vue Modifier la liste
        - Onglet Stock : Vue Liste des Recettes, Vue Liste des Ingrédients, Vue Ajouter/Modifier une Recette ou un Ingrédient
        - Onglet Informations utiles : Vue Informations de Conservation et Vue Informations de Cuisson
- **Top Bar stylisée** :
    > Ajout d'une Top Bar avec le logo textuel de l'application et différents boutons de navigation à travers les différentes vues
- **Nouveaux fonds d'écrans pour chaque onglet** :
    > Chaque onglet a maintenant une image abstraite de fond avec un filtre beige avec une couleur attribuée :
        - Onglet Menu de la semaine : fond orange
        - Onglet Liste des recettes entrées dans le menu : fond rose
        - Onglet Liste de courses : fond vert
        - Onglet Stock : fond jaune
        - Onglet Informations utiles : fond violet