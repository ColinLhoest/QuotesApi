# Quotes API

## Description
Quotes API est une application Node.js qui fournit une API pour récupérer des citations aléatoires. L'application utilise Express.js et est écrite en TypeScript. Elle comprend une interface utilisateur frontale simple pour afficher les citations et un bouton "Next" pour charger une nouvelle citation.

## Prérequis
- Node.js
- npm (Node Package Manager)
- TypeScript (recommandé d'installer globalement)

## Installation
Pour installer le projet, suivez ces étapes :

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/username/QuotesApi.git

2. Installez les modules :
   ```bash
   npm i

3. Compilez la solution :
   ```bash
   npm run rebuild

4. Démarrez le serveur local :
   ```bash
   npm run start

## Utilisation
Appeler l'api déployée localement en lançant une requete à l'adresse suivante :
   ```bash
   http://localhost:3000/api/quotes/random/

Le paramètre limite est optionnel et permet d'accéder à X citations aléatoire:
   ```bash
   http://localhost:3000/api/quotes/random/3
récupérera 3 citations aléatoires.
