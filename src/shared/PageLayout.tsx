import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react"
interface Props {
    titre: string,
    children: any
}
export const PageLayout = (props: Props) => {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>{props.titre}
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            {props.children}
        </IonContent>
    </IonPage>
}