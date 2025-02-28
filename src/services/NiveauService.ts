import { Niveau } from "../interfaces/Niveau";

export const niveaux: Niveau[] = [];

export function ajouterNiveau(niveau: Niveau) {
  niveau.id = niveaux.length + 1;
  niveaux.push(niveau);
  console.log("✅ Niveau ajouté avec succès !");
}

export function listerNiveaux() {
  console.log("\n===== Liste des Niveaux =====");
  console.table(niveaux);
}

export function checkNiveau(id: number){
  return niveaux.some((n) => n.id === id);
}
export function checkLibelleNiveau(libelle: string){
  return niveaux.some((n) => n.libelle === libelle);
}