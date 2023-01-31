import { Competence } from "../competences/Competence";

export interface Personne {
    id: number;
    nom: string;
    prenom: string;
    niveaux: Niveau[];
}

export interface Niveau {
    competence: Competence;
    niveau: number;
}