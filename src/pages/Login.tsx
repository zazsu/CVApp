import React, {useState} from 'react';
import { 
  IonButton, 
  IonContent,
  IonInput, 
  IonItem, 
  IonLabel, 
  IonPage,  
  IonLoading, 
  IonText
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import {loginUser} from '../firebaseConfig'
import Image from '../components/Image'

const Login: React.FC = () => {
  //save user input in state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //support for spinner
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  //start loading spinner and call user login from firebase config
  async function login() {
    setLoading(true)
    const res: any = await loginUser(email.trim(), password);
    if(res) {
      history.replace('/')
    }else{
      setLoading(false)
    }
  }

  return (
    <IonPage>
      <IonLoading
        isOpen={loading}
        message={'Please wait...'}
        spinner="bubbles"
      />
      <IonContent className="ion-text-center">
        <Image></Image>
        <IonText><h2>Hi, I'm Eeva</h2></IonText>
        <IonText><p>Welcome to my CV</p></IonText>
        <IonItem className="ion-margin-horizontal"> 
          <IonLabel position='floating'>Email</IonLabel>     
          <IonInput onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
        </IonItem>
        <IonItem className="ion-margin-horizontal">    
        <IonLabel position='floating'>Password</IonLabel>      
          <IonInput type="password"  onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
        </IonItem> 
        <IonButton className="ion-margin" expand="full" onClick={login}>Login</IonButton>
        <p>Don't have an account yet? <Link to="/signup">Register</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Login;