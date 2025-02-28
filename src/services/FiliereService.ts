import { Filiere } from '../interfaces/Filiere';

const filieres: Filiere[] = [];

export function ajouterFiliere(filiere: Filiere) {
  filiere.id = filieres.length + 1;
  filieres.push(filiere);
  console.log("✅ Filière ajoutée avec succès !");
}

export function listerFilieres() {
  console.log("\n===== Liste des Filières =====");
  console.table(filieres);
}

export function findFiliereById(id: number): Filiere | undefined {
    const filiere = filieres.find((filiere) => filiere.id === id);
    
    if (!filiere) {
      console.log(`❌ Filiere avec l'ID ${id} non trouvé.`);
    }
    
    return filiere;
}

