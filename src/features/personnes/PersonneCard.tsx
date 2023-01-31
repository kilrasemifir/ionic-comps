import { IonCard, IonCardContent, IonCardHeader } from "@ionic/react"
import { Personne } from "./Personne"

interface Props {
    personne?: Personne
}

export const PersonneCard = (props: Props) => {
    return <IonCard>
        <IonCardHeader>
            <h1>Personne</h1>
        </IonCardHeader>
        <IonCardContent>

        </IonCardContent>
    </IonCard>
}
