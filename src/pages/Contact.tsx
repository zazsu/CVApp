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
  IonItem,
  IonLabel, 
  IonList, 
  IonMenuButton, 
  IonPage,
  IonRow, 
  IonTitle, 
  IonToolbar } from '@ionic/react';
import { mailSharp, globeSharp} from 'ionicons/icons';

import Menu from '../components/Menu'

const Contact: React.FC = () => {
  return (
    <>
      <Menu></Menu>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton color="primary"/>
            </IonButtons>
            <IonTitle color="primary">Contact</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>
              <IonIcon slot="start" icon={mailSharp} />
              <IonLabel>
                <h2>eeva.mattila@gmail.com</h2>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={globeSharp} />
              <IonLabel>
                <h2>eevamattila.com</h2>
              </IonLabel>
            </IonItem>
          </IonList>
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
                <IonButton class="buttonItem" fill="solid" expand="full" routerLink="/skills">
                  Skills
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

export default Contact;