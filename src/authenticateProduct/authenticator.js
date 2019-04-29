import { provider } from '../provider';
import { Alert } from 'react-native';
import '../../global';
import axios from 'axios';

export const authenticator = (data) => {
    // Legg til funksjonalitet for å kontakte Ethereum via Web3.js
    // Koble opp mot firebase, få tilbake informasjon om produktet
    // Kjør "createCheckSum" (mulig det må opprettes egen fil her, blir mye kode)
    // Deretter sjekk checkSum som blir returnert hit, mot checkSum som ligger i mappingen på chainen


    var json = JSON.parse(data);
    axios.get('https://authicateserver.firebaseio.com/products/' + `${json.id}` + '.json', 
    { "description": `${json.description}`, "origin": `${json.origin}`,"batchID": `${json.batchID}` })
      .then((response) => {
        console.log(response.data)
        Alert.alert(`Informasjonen om produkt med ID: ${json.id} er oppdatert.`)
    });
};
