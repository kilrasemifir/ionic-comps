import { IonList, IonItem, IonLabel, IonInput, IonButton, IonTextarea } from "@ionic/react"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { PageLayout } from "../../../shared/PageLayout"
import { competenceService } from "../services/CompetenceService"

interface Props {
}

export const CompetenceFormulaire = (props: Props) => {
    const [nom, setNom] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const history = useHistory()

    const submit = () => {
        if (!nom || !description) {
            alert("Veuillez remplir tous les champs")
            return
        }
        const competence = {nom,description}
        competenceService.sauvegarderCompetence(competence).then((competence) => {
            history.go(-1)
        })
    }


    return <PageLayout titre="Nouvelle Compétence">
        <IonList>
            <IonItem target={undefined} button={undefined} color={undefined} disabled={undefined} fill={undefined} lines={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} counter={undefined} counterFormatter={undefined} detail={undefined} detailIcon={undefined}>
                <IonLabel position="floating">Nom</IonLabel>
                <IonInput 
                    onIonChange={(event:any)=>setNom(event.target.value)}/>
            </IonItem>
            <IonItem target={undefined} button={undefined} color={undefined} disabled={undefined} fill={undefined} lines={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} counter={undefined} counterFormatter={undefined} detail={undefined} detailIcon={undefined}>
                <IonLabel position="floating">Description</IonLabel>
                <IonTextarea 
                    onIonChange={(event:any)=>setDescription(event.target.value)}/>
            </IonItem>
            <IonItem target={undefined} button={undefined} color={undefined} disabled={undefined} fill={undefined} lines={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} counter={undefined} counterFormatter={undefined} detail={undefined} detailIcon={undefined}>
                <IonButton onClick={submit} target={undefined} form={undefined} strong={undefined} color={undefined} disabled={undefined} fill={undefined} mode={undefined} type={undefined} routerAnimation={undefined} href={undefined} rel={undefined} download={undefined} shape={undefined} size={undefined} expand={undefined} onIonBlur={undefined} onIonFocus={undefined} buttonType={undefined}>Submit</IonButton>
            </IonItem>
        </IonList>
    </PageLayout>
}
