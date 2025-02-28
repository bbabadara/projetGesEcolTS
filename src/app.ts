import * as readline from "readline";
import { ajouterEtudiant, listerEtudiants } from "./services/EtudiantService";
import { ajouterClasse, listerClasses } from "./services/ClasseService";
import { ajouterFiliere, listerFilieres } from "./services/FiliereService";
import { ajouterNiveau, listerNiveaux } from "./services/NiveauService";
import { ajouterCours, listerCours } from "./services/CoursService";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function afficherMenu() {
  console.log("\n===== MENU =====");
  console.log("1. Ajouter un étudiant");
  console.log("2. Lister les étudiants");
  console.log("3. Ajouter une classe");
  console.log("4. Lister les classes");
  console.log("5. Ajouter une filière");
  console.log("6. Lister les filières");
  console.log("7. Ajouter un niveau");
  console.log("8. Lister les niveaux");
  console.log("9. Ajouter un cours");
  console.log("10. Lister les cours");
  console.log("0. Quitter");
  rl.question("Choisissez une option : ", (choix) => {
    switch (choix) {
      case "1":
        rl.question("Nom : ", (nom) => {
          rl.question("Prénom : ", (prenom) => {
            rl.question("Adresse : ", (adresse) => {
              rl.question("Date de naissance (YYYY-MM-DD) : ", (dateNaissance) => {
                rl.question("ID de la classe : ", (idClasse) => {
                  ajouterEtudiant({ id: 0, nom, prenom, adresse, dateNaissance:new Date(dateNaissance), idClasse: Number(idClasse) });
                  afficherMenu();
                });
              });
            });
          });
        });
        break;
      case "2":
        listerEtudiants();
        afficherMenu();
        break;
      case "3":
        rl.question("Nom de la classe : ", (nom) => {
          rl.question("ID de la filière : ", (idFiliere) => {
            rl.question("ID du niveau : ", (idNiveau) => {
              ajouterClasse({ id: 0, nom, idFiliere: Number(idFiliere), idNiveau: Number(idNiveau) });
              afficherMenu();
            });
          });
        });
        break;
      case "4":
        listerClasses();
        afficherMenu();
        break;
      case "5":
        rl.question("Libellé de la filière : ", (libelle) => {
          ajouterFiliere({ id: 0, libelle });
          afficherMenu();
        });
        break;
      case "6":
        listerFilieres();
        afficherMenu();
        break;
      case "7":
        rl.question("Libellé du niveau : ", (libelle) => {
          ajouterNiveau({ id: 0, libelle });
          afficherMenu();
        });
        break;
      case "8":
        listerNiveaux();
        afficherMenu();
        break;
      case "9":
        rl.question("Date du cours : ", (date) => {
          rl.question("Heure de début : ", (heureDebut) => {
            rl.question("Heure de fin : ", (heureFin) => {
              rl.question("ID de la classe : ", (idClasse) => {
                ajouterCours({ id: 0, date:new Date(date), heureDebut, heureFin, idClasse: Number(idClasse) });
                afficherMenu();
              });
            });
          });
        });
        break;
      case "10":
        listerCours();
        afficherMenu();
        break;
      case "0":
        console.log("Fermeture du programme.");
        rl.close();
        break;
      default:
        console.log("Option invalide.");
        afficherMenu();
    }
  });
}

afficherMenu();
