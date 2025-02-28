import { Niveau } from "../interfaces/Niveau";

const niveaux: Niveau[] = [];

export function ajouterNiveau(niveau: Niveau) {
  niveau.id = niveaux.length + 1;
  niveaux.push(niveau);
  console.log("✅ Niveau ajouté avec succès !");
}

export function listerNiveaux() {
  console.log("\n===== Liste des Niveaux =====");
  console.table(niveaux);
}
