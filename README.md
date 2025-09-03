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
- **Récupération de la date et de l'heure en temps réel** : 
    > Sur l'onglet Menu de la semaine Vue Calendrier, le jour de la semaine, le numéro avec le mois et l'heure sont récupérés et affichés
    > L'heure est mise à jour toutes les minutes ou en changeant d'onglet et en revenant dessus
    > Le moment de la journée : Matin, Midi ou Soir est donc déterminé en fonction de l'heure récupérée et est affiché
    > Sur l'onglet Menu de la semaine Vue Liste, seul le jour de la semaine esr récupéré et affiché

[1.3.0]
- **Vue Calendrier** :
    > Ajout d'un slider pour afficher les jours de la semaine pour voir le (futur) menu
    > Ajout de boutons de navigation pour naviguer entre chaque slide
        > Les boutons deviennent clairs si le fond est trop sombre
    > Ajout d'un module pour changer le moment de la journée (matin, midi et soir) pour afficher le menu en fonction du moment sélectionné
    > Ajout d'un délai d'inactivité de 15 secondes : si celui-ci tombe à 0, le slider revient au jour et au moment de la journée actuels
    > Réactualisation vers le jour et le moment de la journée actuels si on quitte et que l'on revient sur l'onglet / la vue
    > Ajout d'une bande imagée colorée pour chaque jour de la semaine avec des variantes pour chaque, matin, midi et soir : 
        - Lundi : Photographie orange
        - Mardi : Photographie verte
        - Mercredi : Photographie jaune
        - Jeudi : Photographie rouge
        - Vendredi : Photographie rose
        - Samedi : Photographie violette
        - Dimanche : Photographie blanche

### À faire la prochaine fois

- Enlever les consoles logs du délai d'inactivité