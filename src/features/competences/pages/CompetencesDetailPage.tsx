import { IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useParams } from "react-router-dom"
import { PageLayout } from "../../../shared/PageLayout"
import { Personne } from "../../personnes/Personne"
import { CompetenceCard } from "../components/CompetenceCard"
import { NiveauxListe } from "../layouts/NiveauxListe"

export const CompetencesDetailPage = () => {

    const {id} = useParams<{id: string}>()
    const competence = {
        id: id,
        nom: "Ionic",
        description: "Framework pour créer des applications mobiles",
        image: "https://ionicframework.com/docs/assets/icons/logo-ionic.svg"
    }

    const personnes: Personne[] = [
        {
            id: 1,
            nom: "Rober",
            prenom: "Doe",
            niveaux: [
                {
                    niveau: 3,
                    competence: {
                        id: 1,
                        nom: "Ionic",
                        description: "Framework pour créer des applications mobiles",
                        image: "https://ionicframework.com/docs/assets/icons/logo-ionic.svg"
                    }
                },
            ]
        }
    ]
    return <PageLayout titre={competence.nom}>
        <CompetenceCard competence={competence} />
        <IonTitle>Personne ayant cette competence</IonTitle>
        <NiveauxListe personnes={personnes} competenceId={id} />
    </PageLayout>
}