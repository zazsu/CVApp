import React, {useState} from 'react';
import { IonPage, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonLoading } from '@ionic/react';
import { Link } from 'react-router-dom';

const Loading: React.FC = () => {

  return (
    <IonPage>
      <IonContent fullscreen>
      <IonLoading
        isOpen={true}
        message={'Please wait...'}
        spinner="bubbles"
      />
      </IonContent>
    </IonPage>
  );
};

export default Loading;