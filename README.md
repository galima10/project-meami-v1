# Meami - Documentation technique

## Développement

### Liste des features

[1.0.0] - (20/08/2025)

- **Template de base** : <br>
  > Template de base Expo + React Native seulement <br>
  > Configuration pour permettre un déploiement automatisé

[1.1.0] - (23/08/2025)

- **Splash Screen** : <br>
  > Faux splash screen après le vrai splash screen avec le logo principal avec une animation bounce et le slogan avec une animation wave <br>
  > Redirection vers la première page de l'application après 5 secondes (variable)
- **Polices et Images** : <br>
  > Préchargement des polices et des images au lancement de l'application
- **Nouveaux Onglets** : <br>
  > Suppression des écrans de base du templates <br>
  > Ajout de 4 onglets à l'application : Menu, Cart, Stock et Infos

[1.2.0] - (29/08/2025)

- **Utilisation d'icônes SVG** : <br>
  > Affichage d'icônes SVG au sein de l'application
- **Tab Bar stylisée** : <br>
  > Ajout d'icônes et de styles globaux (ombres, couleurs) à la Tab Bar et aux boutons de navigation d'écrans
- **Nouvelle couleur de fond** : <br>
  > Couleurs et polices par défaut appliquées : beige au fond, marron aux textes
- **Restructuration de la navigation & Nouveaux Onglets** : <br>
  > Ajout de différentes vues pour chaque onglet : <br>
        - Onglet Menu de la semaine : Vue Calendrier, Vue Liste, Vue Modifier le menu et Vue Liste des recettes entrées dans le menu <br>
        - Onglet Liste de courses : Vue Liste et Vue Modifier la liste <br>
        - Onglet Stock : Vue Liste des Recettes, Vue Liste des Ingrédients, Vue Ajouter/Modifier une Recette ou un Ingrédient <br>
        - Onglet Informations utiles : Vue Informations de Conservation et Vue Informations de Cuisson
- **Top Bar stylisée** : <br>
  > Ajout d'une Top Bar avec le logo textuel de l'application et différents boutons de navigation à travers les différentes vues
- **Nouveaux fonds d'écrans pour chaque onglet** : <br>
  > Chaque onglet a maintenant une image abstraite de fond avec un filtre beige avec une couleur attribuée : <br>
        - Onglet Menu de la semaine : fond orange <br>
        - Onglet Liste des recettes entrées dans le menu : fond rose <br>
        - Onglet Liste de courses : fond vert <br>
        - Onglet Stock : fond jaune <br>
        - Onglet Informations utiles : fond violet
- **Récupération de la date et de l'heure en temps réel** : <br>
  > Sur l'onglet Menu de la semaine Vue Calendrier, le jour de la semaine, le numéro avec le mois et l'heure sont récupérés et affichés <br>
  > L'heure est mise à jour toutes les minutes ou en changeant d'onglet et en revenant dessus <br>
  > Le moment de la journée : Matin, Midi ou Soir est donc déterminé en fonction de l'heure récupérée et est affiché <br>
  > Sur l'onglet Menu de la semaine Vue Liste, seul le jour de la semaine esr récupéré et affiché

[1.3.0] - (05/09/2025)

- **Menu mocké** : <br>
  > Ajout d'un faux menu pré-rempli <br>
  > Ajout d'un faux menu vide
- **Onglet Menu de la semaine : Vue Calendrier** : <br>
  > Ajout d'un slider pour afficher les jours de la semaine pour voir le (futur) menu <br>
  > La semaine culinaire commence le samedi <br>
  > Chaque jour a un thème de couleur de menu attribué : <br>
            - Samedi : Violet <br>
            - Dimanche : Blanc <br>
            - Lundi : Orange <br>
            - Mardi : Vert <br>
            - Mercredi : Jaune <br>
            - Jeudi : Rouge <br>
            - Vendredi : Rose <br>
        + Bande imagée colorée en fonction de la couleur attribuée pour chaque jour de la semaine avec des variantes pour chaque, matin, midi et soir <br>
        + Icônes en forme d'ingrédients pour chaque fond de menu en fonction de la couleur attribuée <br>
  > Boutons de navigation en haut de la vue avec le jour de la slide, pour naviguer entre chaque slide <br>
    ! Les boutons deviennent clairs si le fond est trop sombre <br>
  > Barre de points de navigation qui indique la slide actuelle et qui permet de naviguer rapidement en bas de la vue <br>
  > Module pour changer le moment de la journée (matin, midi et soir) pour afficher le menu en fonction du moment sélectionné <br>
  > Ajout d'un délai d'inactivité de 15 secondes : si celui-ci tombe à 0, le slider revient au jour et au moment de la journée actuels <br>
    + Met à jour la date et l'heure actuelles <br>
  > Réactualisation vers le jour et le moment de la journée actuels si on quitte et que l'on revient sur l'onglet / la vue <br>
  > Bouton "Aller à aujourd'hui" qui renvoit directement au jour et au moment actuel et qui annule immédiatement le délai d'inactivité <br>
    + Affichage visuel du cooldown sur le bouton <br>
    + Met à jour la date et l'heure actuelles <br>
  > Affichage du menu pour chaque jour et chaque moment <br>
    ! Les recettes sont séparées dans l'affichage : <br>
      - Les Petits déjeuners sont regroupés <br>
      - Les Plats principaux sont regroupés <br>
      - Les Légumes et les Accompagnements sont regroupés ensemble <br>
      - Les Desserts sont regroupés <br>
    ! S'il n'y a aucune recette d'entrée, le message "Non renseigné" est affiché <br>
    + Feedback visuel si on clique sur une recette (aucune action pour l'instant)
- **Onglet Menu de la semaine : Vue Liste** : <br>
  > Bouton pour naviguer vers la vue Liste des recettes ajoutées au menu <br>
    ! Le bouton retour de la vue Liste des recettes ajoutées au menu fait bien un retour en arrière <br>
  > Bouton pour supprimer l'attibution des recettes de la Liste des recettes ajoutées au menu <br>
    ! Le bouton ne fait que changer le menu mocké en "faux menu vide" <br>
    ! La vue Calendrier sera aussi vidée <br>
  > Affichage en cartes stylisées avec un effet glass du menu en ligne de chaque jour et chaque moment <br>
    ! S'il n'y a aucune recette d'entrée, les moments de la journées pour les cartes affichent "----" <br>
  > Le jour actuel a une bordure orange vif <br>
  > Possibilité de scroller verticalement dans la vue
- **Onglet Menu de la semaine : Vue Liste des recettes** : <br>
  > Ajout d'un bouton pour remplir le menu <br>
    ! Le bouton ne fait que changer le menu mocké en "faux menu pré-rempli"
- **Réorganisation de fichiers** : <br>
  > Séparation de la logique métier en hooks des composants <br>
  > Déplacements dans des dossiers séparés

[1.4.0] - (12/09/2025)

- **Fixs** : <br>
  > Suppression de la mise à jour de la date toutes les minutes pour gagner en performances <br>
  > Fixs UI et bugs visuels <br>
  > Changement de condition pour associer les moments de la journée à l'heure actuelle
- **Pop-up de validation** : <br>
  > Ajout d'une pop-up de validation quand on vide le menu dans l'onglet Menu de la semaine : Vue Liste
- **Onglet Menu de la semaine : Vue Modifier le menu** : <br>
  > Ajout d'un slider de jour navigable via des dots de navigation ou en swipant pour chaque jour de la semaine <br>
  > Ajout d'un bouton "Corbeille" pour chaque jour de la vue <br>
    ! Ne fait rien pour le moment <br>
  > Stylisation des slides des jours : <br>
    - 3 moments de la journée peuvent être sélectionnés pour modifier le menu de ce moment via le bouton "+" <br>
      ! Une barre latérale s'affiche sur le côté avec les différentes recettes ajoutées au menu séparées par type <br>
      ! Pour l'instant, seules des recettes mockées y sont présentes <br>
    + Si un moment est sélectionné pour modifier son menu, il apparaît en encadré orange <br>
    ! Affichage mocké des recettes déjà ajoutées au moment "Matin" <br>
  !! Aucune autre fonctionnalité prévue n'est présente pour le moment
- **Onglet Menu de la semaine : Vue Liste des recettes ajoutées au menu** :  <br>
  > Ajout d'un header avec : <br>
    - Le titre de la vue <br>
    - Le nombre d'entrées <br>
    - Un bouton pour vider la liste des recettes ajoutées au menu <br>
      ! Ne fait rien pour l'instant <br>
    - Un bouton pour ajouter une recette à la liste des recettes ajoutées au menu <br>
      ! Ne fait rien pour l'instant <br>
  > Stylisation de la liste des recettes ajoutées au menu avec : <br>
    - Image de la recette <br>
    - Le nom de la recette <br>
    - Un module pour afficher la quantité de la recette dans la liste et des boutons pour augmenter et diminuer la quantité <br>
    ! Pour l'instant, seul une liste mockée est affichée <br>
  > Ajout du panneau pour ajouter une recette à la liste <br>
    > Bouton pour switcher de mode d'affichage :  <br>
      - Possibilité d'effectuer une recherche d'ingrédient <br>
      - Possibilité d'effectuer un tri des ingrédients

### Notes importantes : 
