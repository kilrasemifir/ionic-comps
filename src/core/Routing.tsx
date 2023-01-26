import { IonRouterOutlet } from "@ionic/react";
import { Route, Redirect } from "react-router";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";

export const AppRouter = () => {
    return (
        <IonRouterOutlet>
          <Route exact path="/tab1" component={Tab1}/>
        </IonRouterOutlet>
    )
}
    