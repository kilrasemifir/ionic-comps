import { IonCard, IonCardContent, IonCardHeader, IonText, IonTitle } from "@ionic/react"
import { Link } from "react-router-dom"
import { Competence } from "../Competence"

interface Props {
    competence: Competence
}

export const CompetenceCard = (props: Props) => {
    return <Link to={`/competences/detail/${props.competence.id}`}>
        <IonCard disabled={undefined} button={undefined} color={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} target={undefined} download={undefined}>
        <IonCardHeader>
            <IonTitle>{props.competence.nom}</IonTitle>
        </IonCardHeader>
        <IonCardContent>
            <IonText>{props.competence.description}</IonText>
        </IonCardContent>
    </IonCard>
    </Link>
    
}