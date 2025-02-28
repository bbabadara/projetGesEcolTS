import { Cours } from "../interfaces/Cours";

const coursList: Cours[] = [];

export function ajouterCours(cours: Cours) {
  cours.id = coursList.length + 1;
  coursList.push(cours);
  console.log("✅ Cours ajouté avec succès !");
}

export function listerCours() {
  console.log("\n===== Liste des Cours =====");
  console.table(coursList);
}


export function checkCours(id: number) : boolean {
  return coursList.some((c) => c.id === id);
}