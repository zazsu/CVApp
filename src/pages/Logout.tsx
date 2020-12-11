import React from 'react';
import 
{
  IonButton, 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonText, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import { useHistory } from 'react-router';

import { logoutUser} from '../firebaseConfig';
import Menu from '../components/Menu'



const Tab3: React.FC = () => {
  const history = useHistory();

  //logout the user and redirect to login
  async function logout () {
    const res: any = await logoutUser();
    if(res) {
      history.replace('/login')
    }
  }

  return (
    <>
    <Menu></Menu>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton color="primary"/>
          </IonButtons>
          <IonTitle color="primary">Logout</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding-horizontal" >
        <IonText >
          <h5 className="ion-padding-vertical" >Thank you for checking out my CV</h5>
        </IonText>
        <IonButton expand="full" onClick={() => logout()}>Logout</IonButton>
      </IonContent>
    </IonPage>
    </>
  );
};

export default Tab3;
