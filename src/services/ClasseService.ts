import { Classe } from "../interfaces/Classe";

const classes: Classe[] = [];

export function ajouterClasse(classe: Classe) {
  classe.id = classes.length + 1;
  classes.push(classe);
  console.log("✅ Classe ajoutée avec succès !");
}

export function listerClasses() {
  console.log("\n===== Liste des Classes =====");
  console.table(classes);
}
