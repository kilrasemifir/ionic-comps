import { Competence } from "../Competence";

class CompetenceService {

    private baseUrl = 'http://localhost:3000/competences';

    public async getCompetences(): Promise<Competence[]> {
        const response = await fetch(this.baseUrl);
        return await response.json();
    }

    public async sauvegarderCompetence(competence: Competence): Promise<Competence> {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(competence)
        });
        return await response.json();
    }


}

export const competenceService = new CompetenceService();