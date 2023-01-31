import { Personne } from "../Personne";

class PersonneService {

    public async getPersonnes(): Promise<Personne[]> {
        const response = await fetch('http://localhost:3000/personnes');
        return await response.json();
    }

    public async sauvegarderPersonne(personne: Personne): Promise<Personne> {
        const response = await fetch('http://localhost:3000/personnes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(personne)
        });
        return await response.json();
    }

    public async trouverPersonne(id: number|string): Promise<Personne> {
        const response = await fetch(`http://localhost:3000/personnes/${id}`);
        return await response.json();
    }
}

export const personneService = new PersonneService();