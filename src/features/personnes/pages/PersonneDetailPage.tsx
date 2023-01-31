import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PageLayout } from "../../../shared/PageLayout"
import { PersonneNiveauListe } from "../layouts/PersonneNiveauListe"
import { Personne } from "../Personne"
import { PersonneCard } from "../PersonneCard"
import { personneService } from "../services/PersonneService"

export const PersonneDetailPage = () => {

    const {id} = useParams<{id: string}>();
    const [personne, setPersonne] = useState<Personne>()
    
    useEffect(() => {
        personneService.trouverPersonne(id).then(setPersonne)
    })

    return <PageLayout titre="Personne">
        <PersonneCard personne={personne} />
        <PersonneNiveauListe personne={personne} />
    </PageLayout>
}