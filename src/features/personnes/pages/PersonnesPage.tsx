import { IonPage } from "@ionic/react"
import { useEffect, useState } from "react"
import { PageLayout } from "../../../shared/PageLayout"
import { PersonneListe } from "../layouts/PersonneListe"
import { Personne } from "../Personne"
import { personneService } from "../services/PersonneService"

export const PersonnesPage = () => {

    const [personnes, setPersonnes] = useState<Personne[]>([])

    useEffect(() => {
        personneService.getPersonnes().then(setPersonnes)
    })

    return <PageLayout titre="Personnes">
        <PersonneListe personnes={personnes} />
    </PageLayout>
}
