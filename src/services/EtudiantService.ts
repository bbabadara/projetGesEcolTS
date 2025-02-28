import { Etudiant } from "../interfaces/Etudiant";

const etudiants: Etudiant[] = [];

export function ajouterEtudiant(etudiant: Etudiant) {
  etudiant.id = etudiants.length + 1;
  etudiants.push(etudiant);
  console.log("✅ Étudiant ajouté avec succès !");
}

export function listerEtudiants() {
  console.log("\n===== Liste des Étudiants =====");
  console.table(etudiants);
}
