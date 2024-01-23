Quotes API
Description
Quotes API est une application Node.js qui fournit une API pour récupérer des citations aléatoires. L'application utilise Express.js et est écrite en TypeScript. Elle comprend une interface utilisateur frontale simple pour afficher les citations et un bouton "Next" pour charger une nouvelle citation.

Prérequis
Node.js
npm (Node Package Manager)
TypeScript (recommandé d'installer globalement)
Installation
Pour installer le projet, suivez ces étapes :

Clonez le dépôt :

bash
Copy code
git clone https://github.com/username/QuotesApi.git
Accédez au dossier du projet :

bash
Copy code
cd QuotesApi
Installez les dépendances :

bash
Copy code
npm install
Compilation TypeScript
Compilez le code TypeScript en JavaScript :

bash
Copy code
npm run build
Lancement du Serveur
Pour lancer le serveur :

bash
Copy code
npm start
Le serveur démarre sur http://localhost:3000. Accédez à cette URL dans votre navigateur pour voir l'interface utilisateur.

Fonctionnalité Principale
GET /api/quotes/random/:limit? : Récupère une ou plusieurs citations aléatoires. Le paramètre limit est optionnel et spécifie le nombre de citations à récupérer.
Structure du Projet
src/ : Contient les fichiers source TypeScript.
app.ts : Le point d'entrée principal de l'application.
routes/ : Dossier pour les routeurs Express.
services/ : Dossier pour la logique métier.
exceptions/ : Dossier pour les classes d'exceptions personnalisées.
public/ : Contient les fichiers statiques pour l'interface utilisateur.
dist/ : Contient les fichiers JavaScript compilés.
tsconfig.json : Configuration du compilateur TypeScript.
Interface Utilisateur
Une interface utilisateur simple est incluse dans le dossier public. Elle affiche les citations et inclut un bouton "Next" pour charger une nouvelle citation.

Contributions
Les contributions sont les bienvenues. Veuillez ouvrir une issue ou une pull request pour proposer des changements ou des ajouts.
