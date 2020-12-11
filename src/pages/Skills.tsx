import React from 'react';
import 
{ 
  IonButton, 
  IonButtons, 
  IonCol, 
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonListHeader, 
  IonMenuButton, 
  IonPage, 
  IonRow, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

import Menu from '../components/Menu'

const Skills: React.FC = () => {
  return (
    <>
      <Menu></Menu>
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton color="primary"/>
          </IonButtons>
            <IonTitle color="primary">Skills</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent >
          <IonListHeader>
            <h5>Languages:</h5>
          </IonListHeader>
          <IonList>
            <IonItem>
                <p>C#, Javascript, HTML, CSS, SQL</p>
            </IonItem>
          </IonList>
          <IonListHeader>
           <h5>Frameworks:</h5> 
          </IonListHeader>
          <IonList>
            <IonItem>
                <p>Gatsby, React, React Native, Ionic, Node.js, Express.js, Wordpress</p>
            </IonItem>
          </IonList>
          <IonListHeader>
            <h5>Other:</h5>
          </IonListHeader>
          <IonList>
            <IonItem>
                <p>Unity, UI and UX design, Google Analytics and Search Console, Netlify</p>
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

export default Skills;