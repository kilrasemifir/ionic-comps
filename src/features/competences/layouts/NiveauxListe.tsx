import { IonItem, IonList } from "@ionic/react"
import { BaseCard } from "../../../shared/BaseCard"

interface Props {
    personnes: any[],
    competenceId: string
}

export const NiveauxListe = (props: Props) => {
    return <IonList>
        {
            props.personnes.map((personne, index) => {
                return <IonItem key={index} >
                    <BaseCard
                        redirect="/personnes"
                        left={personne.nom}
                        right="Debutant"
                    ></BaseCard>
                </IonItem>
            })
        }
    </IonList>
}