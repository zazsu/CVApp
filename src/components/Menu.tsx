import React from 'react';
import { 
  IonButton,
  IonContent, 
  IonHeader,
  IonItem, 
  IonList, 
  IonMenu,
  IonMenuToggle,
  IonToolbar 
} from '@ionic/react';

const Menu: React.FC = () => {
  return (
    <IonMenu side="start" contentId="content">
    <IonHeader>
      <IonToolbar >
      </IonToolbar>
    </IonHeader>
    <IonContent id="content">
      <IonList>
        <IonMenuToggle>
          <IonItem>
          <IonButton class="buttonItem" fill="clear" expand="block" routerLink="/home">
                About Me
          </IonButton>
          </IonItem>
          <IonItem>
          <IonButton class="buttonItem" fill="clear" expand="block" routerLink="/education">
                Education
          </IonButton>
          </IonItem>
          <IonItem>
          <IonButton class="buttonItem" fill="clear" expand="block" routerLink="/skills">
                Skills
          </IonButton>
          </IonItem>
          <IonItem>
          <IonButton class="buttonItem" fill="clear" expand="block" routerLink="/projects">
                Projects
          </IonButton>
          </IonItem>
          <IonItem>
          <IonButton class="buttonItem" fill="clear" expand="block" routerLink="/contact">
                Contact
          </IonButton>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>

  );
};

export default Menu;
