import { ajouterEtudiant, listerEtudiants } from "./services/EtudiantService";
import { ajouterClasse, listerClasses } from "./services/ClasseService";
import { ajouterFiliere, listerFilieres } from "./services/FiliereService";
import { ajouterNiveau, listerNiveaux } from "./services/NiveauService";
import { ajouterCours, listerCours } from "./services/CoursService";
import { askQuestion } from "../src/utils/readlineUtils"; 

async function afficherMenu() {
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

  const choix = await askQuestion("Choisissez une option : ");
  
  switch (choix) {
    case "1":
      const nom = await askQuestion("Nom : ");
      const prenom = await askQuestion("Prénom : ");
      const adresse = await askQuestion("Adresse : ");
      const dateNaissance = await askQuestion("Date de naissance (YYYY-MM-DD) : ");
      const idClasse = await askQuestion("ID de la classe : ");
      ajouterEtudiant({ id: 0, nom, prenom, adresse, dateNaissance: new Date(dateNaissance), idClasse: Number(idClasse) });
      break;

    case "2":
      listerEtudiants();
      break;

    case "3":
      const nomClasse = await askQuestion("Nom de la classe : ");
      const idFiliere = await askQuestion("ID de la filière : ");
      const idNiveau = await askQuestion("ID du niveau : ");
      ajouterClasse({ id: 0, nom: nomClasse, idFiliere: Number(idFiliere), idNiveau: Number(idNiveau) });
      break;

    case "4":
      listerClasses();
      break;

    case "5":
      const libelleFiliere = await askQuestion("Libellé de la filière : ");
      ajouterFiliere({ id: 0, libelle: libelleFiliere });
      break;

    case "6":
      listerFilieres();
      break;

    case "7":
      const libelleNiveau = await askQuestion("Libellé du niveau : ");
      ajouterNiveau({ id: 0, libelle: libelleNiveau });
      break;

    case "8":
      listerNiveaux();
      break;

    case "9":
      const dateCours = await askQuestion("Date du cours : ");
      const heureDebut = await askQuestion("Heure de début : ");
      const heureFin = await askQuestion("Heure de fin : ");
      const idClasseCours = await askQuestion("ID de la classe : ");
      ajouterCours({ id: 0, date: new Date(dateCours), heureDebut, heureFin, idClasse: Number(idClasseCours) });
      break;

    case "10":
      listerCours();
      break;

    case "0":
      console.log("Fermeture du programme.");
      return; 

    default:
      console.log("Option invalide.");
  }

  afficherMenu(); 
}

afficherMenu();
