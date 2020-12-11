import React, {useState, useEffect} from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { logOutSharp, homeSharp } from 'ionicons/icons';

//pages
import Home from './pages/Home';
import Logout from './pages/Logout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Loading from './pages/Loading';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import { getCurrentUser } from './firebaseConfig';

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

const App: React.FC = () => {
  const [initializing, setInitializing] = useState(true);

  //if a user has authenticated direct them to home page
  //if there is no user redirect to login
  //show splash screen while figuring this stuff out (it is just a loader)
  useEffect(() => {
    setInitializing(true);
    getCurrentUser().then((user: any) => {
      if(user) {
        window.history.replaceState({},'', '/')  
      } else {
       window.history.replaceState({},'', '/login')    
      }
      setInitializing(false);
    })
  }, []);

  //show loader while figuring out if anyone is authenticated
  if (initializing) return <Loading></Loading>;

  return(
    <IonApp>
      <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} />
              <Route path="/logout" component={Logout} />
              <Route path="/education" component={Education} />
              <Route path="/skills" component={Skills} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={homeSharp} />
              </IonTabButton>
              <IonTabButton tab="logout" href="/logout">
                <IonIcon icon={logOutSharp} />
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
          <Route path="/login" component={Login} exact={true} />
          <Route path="/signup" component={SignUp} exact={true} />
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
