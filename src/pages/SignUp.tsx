import React, {useState} from 'react';
import { 
  IonButton, 
  IonContent, 
  IonImg, 
  IonInput, 
  IonItem, 
  IonLabel, 
  IonLoading, 
  IonPage, 
  IonText
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import {registerUser, loginUser} from '../firebaseConfig'
import Image from '../components/Image'

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  /* const [user, setUser] = useState(); */
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  //start loading spinner and call user signup from firebase config
  //stop spinners if anything goes wrong
  async function register () {
    //check if the passwords match
    if ( password !== cpassword)
    {
      alert('passwords need to match')
      return
    }
    //start spinner
    setLoading(true)
    const res: any = await registerUser(email.trim(), password)
    if(res) {
      const response: any = await loginUser(email.trim(), password);
      //if signup is successfull then log the user in
      if(response) {
        history.replace('/')
      } else {
        setLoading(false)
      }
    } else {
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
      <IonContent className=" ion-text-center">
        <Image></Image>
        <IonText><h2>Hi, I'm Eeva</h2></IonText>
        <IonText><p>Welcome to my CV</p></IonText>
        <IonItem className="ion-margin-horizontal">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
        </IonItem>
        <IonItem className="ion-margin-horizontal">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
        </IonItem>
        <IonItem className="ion-margin-horizontal">
          <IonLabel position="floating">Confirm Password</IonLabel>
          <IonInput type="password" onIonChange={(e: any) => setCpassword(e.target.value)}></IonInput>
        </IonItem>
        <IonButton className="ion-margin" expand="full" onClick={register}>Register</IonButton>
          <p>Already have an account? <Link to="/login">Login</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;