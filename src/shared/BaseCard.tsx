import { IonCard, IonCardHeader, IonCardContent, IonText, IonItem } from "@ionic/react"
import { Link } from "react-router-dom"

interface Props {
    redirect: string
    left: String
    right: String
}

export const BaseCard = (props: Props) => {
    return <Link to={props.redirect}>
        <IonCard>
            <IonCardContent >
                <IonItem  lines="full" style={{display:"flex"}} >
                    <IonText slot="start" >{props.left}</IonText>
                    <IonText slot="end" >{props.right}</IonText>
                </IonItem>
            </IonCardContent>
        </IonCard>
    </Link>
}