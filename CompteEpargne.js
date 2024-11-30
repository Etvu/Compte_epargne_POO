
class compteEpargne{
    //Properties
    #solde = 0;          
    #tauxInteret = 0.03; 
    operations = [];
    //constructor
    constructor(solde, tauxInteret){
        this.#solde = solde
        this.#tauxInteret = tauxInteret
    }
    //method
    ajouterArgent(montant){
        if (montant>0){ //si le montant est négatif on peut pas faire la transaction
            this.#solde += montant
            console.log("Vous avez déposé " + montant + " euros. Nouveau solde : "+this.#solde+ " euros.")
            this.ajouterOperation("depot", montant);
        }else{
            console.log("Montant négatif, transaction impossible")
        }
    }
    retirerArgent(montant){
        if (montant>0){ //si le montant est négatif on peut pas faire la transaction
            this.#solde-=montant
            console.log("Vous avez retiré " + montant + " euros. Nouveau solde : "+this.#solde+ " euros.")
            this.ajouterOperation("retrait", montant);
        }else{
            console.log("Montant négatif, transaction impossible")
        }
    }
    ajouterOperation(type, montant){
        this.operations.push({
            type: type,
            montant: montant,
            date: new Date().toLocaleString() //la date 
        });
    }
    afficherOperations() {
        console.log("Historique des opérations :");
        this.operations.forEach((op, index) => {
            console.log(op.date +"-"+ op.type +" : " +op.montant + "euros");
        });
    }
    ajouterInteret(){
        const interet = this.#solde * this.#tauxInteret;
        this.#solde += interet;
        console.log("intéret de " + this.#tauxInteret+" ajoutés");
        this.ajouterOperation("intérêt", interet);
    }

    //getters
    get solde(){
        return this.#solde
    }
    get tauxInteret(){
        return this.#tauxInteret
    }
    //setters
    set solde(nouveauSolde){
        this.#solde = nouveauSolde;
    }
    set tauxInteret(nouveauTaux){
        this.#tauxInteret = nouveauTaux;
        this.ajouterInteret()
    }
}

export { compteEpargne };