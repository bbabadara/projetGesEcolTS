import { Filiere } from "../interfaces/Filiere";

export const filieres: Filiere[] = [];

export function ajouterFiliere(filiere: Filiere) {
  filiere.id = filieres.length + 1;
  filieres.push(filiere);
  console.log("✅ Filière ajoutée avec succès !");
}

export function listerFilieres() {
  console.log("\n===== Liste des Filières =====");
  console.table(filieres);
}

export function checkFiliere(id: number) : boolean {
  return filieres.some((f) => f.id === id);
}


