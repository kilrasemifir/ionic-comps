import { IonList, IonItem, IonLabel } from "@ionic/react"
import { Competence } from "../Competence"
import { CompetenceCard } from "./CompetenceCard"
interface Props {
    competences: Competence[]
}

export const CompetenceListe = (props: Props) => {
    return <IonList>
        {props.competences.map((competence, index) => {
            return <IonItem key={index} target={undefined} button={undefined} color={undefined} disabled={undefined} fill={undefined} lines={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} counter={undefined} counterFormatter={undefined} detail={undefined} detailIcon={undefined}>
                <CompetenceCard competence={competence} />
            </IonItem>
            })
        }
        </IonList>
}