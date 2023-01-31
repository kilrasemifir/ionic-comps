import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useEffect, useState } from "react"
import { PageLayout } from "../../../shared/PageLayout"
import { CompetenceListe } from "../components/CompetenceListe"
import { competenceService } from "../services/CompetenceService"

export const CompetencesPage = () => {
    const [competences, setCompetences] = useState<any[]>([])

    useEffect(() => {
        competenceService.getCompetences().then(setCompetences)
    })

    return <PageLayout titre="Compétences">
        <IonButton routerLink="/competences/new">Ajouter une compétence</IonButton>
            <CompetenceListe competences={competences} />
    </PageLayout>
}