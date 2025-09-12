# Meami - Documentation technique

## Développement

### Liste des features

[1.0.0] - (20/08/2025)

- **Template de base** :
  > Template de base Expo + React Native seulement
  > Configuration pour permettre un déploiement automatisé

[1.1.0] - (23/08/2025)

- **Splash Screen** :
  > Faux splash screen après le vrai splash screen avec le logo principal avec une animation bounce et le slogan avec une animation wave
  > Redirection vers la première page de l'application après 5 secondes (variable)
- **Polices et Images** :
  > Préchargement des polices et des images au lancement de l'application
- **Nouveaux Onglets** :
  > Suppression des écrans de base du templates
  > Ajout de 4 onglets à l'application : Menu, Cart, Stock et Infos

[1.2.0] - (29/08/2025)

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
- **Récupération de la date et de l'heure en temps réel** :
  > Sur l'onglet Menu de la semaine Vue Calendrier, le jour de la semaine, le numéro avec le mois et l'heure sont récupérés et affichés
  > L'heure est mise à jour toutes les minutes ou en changeant d'onglet et en revenant dessus
  > Le moment de la journée : Matin, Midi ou Soir est donc déterminé en fonction de l'heure récupérée et est affiché
  > Sur l'onglet Menu de la semaine Vue Liste, seul le jour de la semaine esr récupéré et affiché

[1.3.0] - (05/09/2025)

- **Menu mocké** :
  > Ajout d'un faux menu pré-rempli
  > Ajout d'un faux menu vide
- **Onglet Menu de la semaine : Vue Calendrier** :
  > Ajout d'un slider pour afficher les jours de la semaine pour voir le (futur) menu
  > La semaine culinaire commence le samedi
  > Chaque jour a un thème de couleur de menu attribué :
            - Samedi : Violet
            - Dimanche : Blanc
            - Lundi : Orange
            - Mardi : Vert
            - Mercredi : Jaune
            - Jeudi : Rouge
            - Vendredi : Rose
        + Bande imagée colorée en fonction de la couleur attribuée pour chaque jour de la semaine avec des variantes pour chaque, matin, midi et soir
        + Icônes en forme d'ingrédients pour chaque fond de menu en fonction de la couleur attribuée
  > Boutons de navigation en haut de la vue avec le jour de la slide, pour naviguer entre chaque slide
    ! Les boutons deviennent clairs si le fond est trop sombre
  > Barre de points de navigation qui indique la slide actuelle et qui permet de naviguer rapidement en bas de la vue
  > Module pour changer le moment de la journée (matin, midi et soir) pour afficher le menu en fonction du moment sélectionné
  > Ajout d'un délai d'inactivité de 15 secondes : si celui-ci tombe à 0, le slider revient au jour et au moment de la journée actuels
    + Met à jour la date et l'heure actuelles
  > Réactualisation vers le jour et le moment de la journée actuels si on quitte et que l'on revient sur l'onglet / la vue
  > Bouton "Aller à aujourd'hui" qui renvoit directement au jour et au moment actuel et qui annule immédiatement le délai d'inactivité
    + Affichage visuel du cooldown sur le bouton
    + Met à jour la date et l'heure actuelles
  > Affichage du menu pour chaque jour et chaque moment
    ! Les recettes sont séparées dans l'affichage :
      - Les Petits déjeuners sont regroupés
      - Les Plats principaux sont regroupés
      - Les Légumes et les Accompagnements sont regroupés ensemble
      - Les Desserts sont regroupés
    ! S'il n'y a aucune recette d'entrée, le message "Non renseigné" est affiché
    + Feedback visuel si on clique sur une recette (aucune action pour l'instant)
- **Onglet Menu de la semaine : Vue Liste** :
  > Bouton pour naviguer vers la vue Liste des recettes ajoutées au menu
    ! Le bouton retour de la vue Liste des recettes ajoutées au menu fait bien un retour en arrière
  > Bouton pour supprimer l'attibution des recettes de la Liste des recettes ajoutées au menu
    ! Le bouton ne fait que changer le menu mocké en "faux menu vide"
    ! La vue Calendrier sera aussi vidée
  > Affichage en cartes stylisées avec un effet glass du menu en ligne de chaque jour et chaque moment
    ! S'il n'y a aucune recette d'entrée, les moments de la journées pour les cartes affichent "----"
  > Le jour actuel a une bordure orange vif
  > Possibilité de scroller verticalement dans la vue
- **Onglet Menu de la semaine : Vue Liste des recettes** :
  > Ajout d'un bouton pour remplir le menu
    ! Le bouton ne fait que changer le menu mocké en "faux menu pré-rempli"
- **Réorganisation de fichiers** :
  > Séparation de la logique métier en hooks des composants
  > Déplacements dans des dossiers séparés

[1.4.0] - (../../....)

- **Fixs** :
  > Suppression de la mise à jour de la date toutes les minutes pour gagner en performances
  > Fixs UI et bugs visuels
  > Changement de condition pour associer les moments de la journée à l'heure actuelle
- **Pop-up de validation** :
  > Ajout d'une pop-up de validation quand on vide le menu dans l'onglet Menu de la semaine : Vue Liste
- **Onglet Menu de la semaine : Vue Modifier le menu** :
  > Ajout d'un slider de jour navigable via des dots de navigation ou en swipant pour chaque jour de la semaine
  > Ajout d'un bouton "Corbeille" pour chaque jour de la vue
    ! Ne fait rien pour le moment
  > Stylisation des slides des jours :
    - 3 moments de la journée peuvent être sélectionnés pour modifier le menu de ce moment via le bouton "+"
      ! Une barre latérale s'affiche sur le côté avec les différentes recettes ajoutées au menu séparées par type
      ! Pour l'instant, seules des recettes mockées y sont présentes
    + Si un moment est sélectionné pour modifier son menu, il apparaît en encadré orange
    ! Affichage mocké des recettes déjà ajoutées au moment "Matin"
  !! Aucune autre fonctionnalité prévue n'est présente pour le moment
- **Onglet Menu de la semaine : Vue Liste des recettes ajoutées au menu** : 
  > Ajout d'un header avec :
    - Le titre de la vue
    - Le nombre d'entrées
    - Un bouton pour vider la liste des recettes ajoutées au menu
      ! Ne fait rien pour l'instant
    - Un bouton pour ajouter une recette à la liste des recettes ajoutées au menu
      ! Ne fait rien pour l'instant
  > Stylisation de la liste des recettes ajoutées au menu avec :
    - Image de la recette
    - Le nom de la recette
    - Un module pour afficher la quantité de la recette dans la liste et des boutons pour augmenter et diminuer la quantité
    ! Pour l'instant, seul une liste mockée est affichée
  > Ajout du panneau pour ajouter une recette à la liste
    > Bouton pour switcher de mode d'affichage : 
      - Possibilité d'effectuer une recherche d'ingrédient
      - Possibilité d'effectuer un tri des ingrédients

### Notes importantes : 
