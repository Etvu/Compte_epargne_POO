import { compteEpargne } from './CompteEpargne.js';
const COMPTE_ETHAN = new compteEpargne(1000, 0.03) 
COMPTE_ETHAN.ajouterArgent(200)
COMPTE_ETHAN.retirerArgent(150)
COMPTE_ETHAN.tauxInteret = 0.05
COMPTE_ETHAN.retirerArgent(500)
COMPTE_ETHAN.ajouterArgent(800)
console.log("Solde final :" +COMPTE_ETHAN.solde + "euros");
COMPTE_ETHAN.afficherOperations()
