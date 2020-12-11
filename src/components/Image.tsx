import React from 'react';
import { 
  IonImg,
  IonText
} from '@ionic/react';
import image from '../assets/eeva.jpg'
import './Image.css'

const Image: React.FC = () => {
  return (
    <IonImg className="image" src={image}></IonImg>
  );
};

export default Image;