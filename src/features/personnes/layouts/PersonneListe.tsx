import { IonList, IonItem } from "@ionic/react"
import { PersonneCard } from "../PersonneCard"

interface Props {
    personnes: any[],
}

export const PersonneListe = (props: Props) => {
    return <IonList>
        {
            props.personnes.map((personne, index) => {
                return <IonItem key={index} routerLink={`/personnes/detail/${personne.id}`}>
                    <PersonneCard personne={personne}></PersonneCard>
                </IonItem>
            })
        }
    </IonList>  
}