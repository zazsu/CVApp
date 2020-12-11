import React from 'react';
import 
{ 
  IonButton, 
  IonButtons, 
  IonCol, 
  IonContent, 
  IonGrid, 
  IonHeader,
  IonMenuButton, 
  IonPage, 
  IonRow, 
  IonText, 
  IonTitle, 
  IonToolbar } from '@ionic/react';
import Menu from '../components/Menu'

const Education: React.FC = () => {
  return (
    <>
      <Menu></Menu>
      <IonPage>
        <IonHeader>
          <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton color="primary"/>
          </IonButtons>
            <IonTitle color="primary">Education</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent >
          <IonText>
            <h2 className="ion-padding-horizontal">Laurea University of Applied Sciences</h2>
            <h4 className="ion-padding-horizontal">2019-2022</h4>
            <p className="ion-padding-horizontal">Bachelor of Business Administration (BBA), Bachelor's Degree Programme in Business Information Technology</p>
            <p className="ion-padding-horizontal">With heavy emphasis on application development and security. </p>
          </IonText>
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

export default Education;