## Apprendre à utiliser GIT

Git est un système de contrôle de version distribué (DVCS) largement utilisé dans le développement de logiciels et d'autres projets collaboratifs. Il permet de suivre, gérer et entregistrer les modifications apportées à un ensemble de fichiers au fil du temps, tout en facilitant la collaboration entre les membres d'une équipe. Conçu en 2005 par Linus Torvalds., Git est conçu pour être rapide, efficace et décentralisé.

Git agit comme un système de suivi ds modifications qui enregistre chacune des modifications, ajout ou suppression de fichiers dans un historique organisé. Il permet aux développeurs de travailler en parallèle sur différentes fonctionalités ou branches de projet, de fusionner leurs contributions et de revenir en arrière en cas de besoin. Cette approche facilite la gestion de projets complexes et la préservation d'un historique complet des évolutions du code source.

Git fonctionne en conservant des instantanés (commits) de l'état des fichiers à différents moments. Ces commits sont orgabisés en une séquence chronologique et peuvent être révisés, fusionnés et partagés avec d'autres membres de l'équipe.

Git est souvent utilisé conjointement avec des plateformes de gestion de code source en ligne telles que GitHub, GitLab, Azure ou BitBucket, qui permettent un stockage distant des dépots Git et la collaboration simplifiée.

## Installer Git

Pour ouvoir être utilisé, Git nécessite d'être installé sur votre OS, vous pourrez trouver les installeurs sur le site officiel:
[Télécharger Git](https://git-scm.com/downloads)

Git est compatible avec macOS, Linux et Windows.

## Premiers pas

Git peut être utilisé via une interface en ligne de commandes ou via interface graphique (comme celle de VSCode par exemple). On privilégiera toutefois le CLI pour sa polyvalence et sa rapidité.
En CLI, toutes les commandes de git commencent par le mot-clé



















Par exemple, pour obtenir l'aide de la commande config: git help config
Pour une documentation plus concice: 'git config -h'

















Le staging, également appelé indexage, est une étape inermédiaire essentielle lors de l'utilisation de Git. C'est le mécanisme qui vous permet de préparer soigneusement les modifications que vous souhaitez inclure  dans votre prochain  commit.
Je peux ajouter les fichiers que je souhaite à mon commit grâce à la commande 'git add "nomdufichier"'

Si je souhaite suivre tous les fichiers présents dans mon dépôt, j'utiliserai 'git add .'

Pour afficher la liste des fichiers qui sont actuellement en staging (indexés) et pre^ts à e^tre inclus dans le prochain commit, vous pouvez la commande 'git status'

Pour retirer un fichier de la staging area (zone d'indexage) sans annuler les modifications apportées au fichier, vous pouvez 'git rm --cached "nomdufichier"' :

```bash
git rm --cached fichiers1.txt
```

## Créer npotre instantané (commit)

Lorsque mes fichiers surveillés sont pr^ts dans la staging area, je peux prendre à tout moment un instantané (commit) de leur état. Ce commit agira commr une sauvegarde à laquelle  je pourrai réaccéder quand je le souhaite. La commande est simplement 'git commit' .

Cela nous ouvre un éditeur de texte pour que nous puissions indiquer le nom de notre commit

---
L'éditeur de texte utilisé de base par Git est Vim. C'st un éditeur très ancien  commandes qui vous seront utiles por écrire un commit.

- Par défault, nous ne sommes pas en mode insertion de caractères, pour entrer dans ce mode, il faut appuyer sur la touche `a` ou la touche `i` , le mode dans lequel vous vous trouvez est spécifié en bas de votre terminal
- Nous pouvons maintenant écrire le nom de notre choix  en première ligne du fichier. pour quitter ce mode insertion ou n'importe quel autre mode, on appuie la touche `Echap` .
- En dehors du mode insertions

- `è`



Pour de très longs noms, cela pourra servir mais de manière générale nous préférons ajouter l'option -m (pour message) à notre commande de commit pour indiquer directement son nom en argument

`` 
