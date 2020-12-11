import React from 'react';
import { 
  IonButton, 
  IonButtons, 
  IonCol, 
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonImg,
  IonMenuButton, 
  IonPage,
  IonRow, 
  IonText, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

import Menu from '../components/Menu'
import Image from '../components/Image'

const Home: React.FC = () => {
  return (
    <>
      <Menu></Menu>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonMenuButton color="primary"/>
            </IonButtons>
            <IonTitle color="primary">About Me</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <Image></Image>
        <div className="ion-padding-top">
          <IonText>
            <p className="ion-padding-horizontal">Hi, I'm Eeva, Bachelor of Business Administration (BBA) with a long-time passion for programming and cybersecurity, eager to apply my skills in a team of like-minded developers.  </p>
            <p className="ion-padding-horizontal">I'm always ready to learn and keep growing as a developer to generate the best possible results in quality, functionality and cost-effectiveness with a user-centered approach. </p>
          </IonText>
          </div>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton class="buttonItem" fill="solid" expand="full" routerLink="/education">
                  Education
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

export default Home;
