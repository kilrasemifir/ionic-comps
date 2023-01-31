import { IonList, IonItem } from "@ionic/react";
import { Link } from "react-router-dom";
import { BaseCard } from "../../../shared/BaseCard";
import { Personne } from "../Personne";

interface Props {
    personne?: Personne
}

export const PersonneNiveauListe = (props: Props) => {
    return <IonList>
        {
            props.personne?.niveaux.map((niveau, index) => {
                return <IonItem key={index} routerLink={`/competences/detail/${niveau.competence.id}`}>
                    <BaseCard
                        redirect="/personnes"
                        left={niveau.competence.nom}
                        right={""+niveau.niveau}
                    />
                </IonItem>
            })
        }
    </IonList>
}
