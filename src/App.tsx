import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { CompetencesPage } from './features/competences/pages/CompetencesPage';
import { PersonnesPage } from './features/personnes/pages/PersonnesPage';
import { triangle, ellipse } from 'ionicons/icons';
import { CompetencesDetailPage } from './features/competences/pages/CompetencesDetailPage';
import { CompetenceFormulaire } from './features/competences/pages/CompetenceFomulaire';
import { PersonneDetailPage } from './features/personnes/pages/PersonneDetailPage';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/competences" component={CompetencesPage} />
          <Route exact path="/competences/new" component={CompetenceFormulaire} />
          <Route exact path="/competences/detail/:id" component={CompetencesDetailPage} />
          <Route exact path="/personnes/detail/:id" component={PersonneDetailPage} />
          <Route exact path="/personnes" component={PersonnesPage} />
          <Redirect exact from="/" to="/personnes" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
            <IonTabButton tab="competences" href="/competences">
                <IonIcon icon={triangle} />
                <IonLabel>Compétences</IonLabel>
            </IonTabButton>
            <IonTabButton tab="personnes" href="/personnes">
                <IonIcon icon={ellipse} />
                <IonLabel>Personnes</IonLabel>
            </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
