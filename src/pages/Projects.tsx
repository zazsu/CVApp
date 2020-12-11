import React from 'react';
import 
{
  IonButton, 
  IonButtons, 
  IonCol, 
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonIcon,
  IonMenuButton, 
  IonPage, 
  IonRow, 
  IonText, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import { logoGithub, globeSharp } from 'ionicons/icons';

import Menu from '../components/Menu'

const Projects: React.FC = () => {
  return (
    <>
      <Menu></Menu>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton color="primary"/>
            </IonButtons>
            <IonTitle color="primary">Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonText>
            <h5 className="ion-padding-horizontal">You can check out my work and school projects in github and my website</h5>
          </IonText>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton color="success" class="buttonItem" fill="solid" expand="full"
                onClick={() => {window.open('https://github.com/zazsu', '_system')}}>
                <IonIcon slot="start" icon={logoGithub} />
                 <IonText>GitHub</IonText>
                </IonButton>
                <IonButton color="success" class="buttonItem" fill="solid" expand="full"
                onClick={() => {window.open('https://eevamattila.com/', '_system')}}>
                <IonIcon slot="start" icon={globeSharp} />
                 <IonText>eevamattila.com</IonText>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton class="buttonItem" fill="solid" expand="full" routerLink="/home">
                  About Me
                </IonButton>
                <IonButton class="buttonItem" fill="solid" expand="full" routerLink="/projects">
                  Projects
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton class="buttonItem" fill="solid" expand="full" routerLink="/education">
                  Education
                </IonButton>
                <IonButton class="buttonItem" fill="solid" expand="full" routerLink="/contact">
                  Contact
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Projects;