# Quotes API

## Description
Quotes API est une application Node.js qui fournit une API pour récupérer des citations aléatoires. L'application utilise Express.js et est écrite en TypeScript. Elle comprend une interface utilisateur frontale simple qui afffichent un nombre déterminé de citations aléatoire.

## Prérequis
- Node.js
- npm (Node Package Manager)
- TypeScript (recommandé d'installer globalement)

## Installation
Pour installer le projet, suivez ces étapes :

1. Clonez le dépôt et checkout sur la branche master :
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
Pour appeler l'API déployée localement, lancez une requête à l'adresse suivante :
```
http://localhost:3030/api/quotes/random
```

Le paramètre `limit` est optionnel et permet d'accéder à un nombre spécifié de citations aléatoires. Par exemple :
```
http://localhost:3030/api/quotes/random/3
```
récupérera 3 citations aléatoires.

