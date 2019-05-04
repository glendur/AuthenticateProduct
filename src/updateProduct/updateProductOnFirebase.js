import axios from 'axios';
import { productExistsOnFirebase } from '../helperFunctions/productExistsOnFirebase';
import Alert from 'react-native';
import { createProductOnFirebase } from '../helperFunctions/createProductOnFirebase';

export const updateProductOnFirebase = async (json, transitPoint, intermediary) => {
    
    //Når man kommuniserer med firebase, må man levere inn riktig del av "intermediary-arrayet"
    //Henter inn informasjonen, endrer den, og pusher
    
    const res = await axios.get('https://authicateserver.firebaseio.com/products/' + `${json.id}` +  '.json')
    //Gets called if no element with json.id exists in firebase
    if(res.data === null){
        return await createProductOnFirebase(json, transitPoint, intermediary); 
    }
    const arry = res.data.intermediary;
    arry.unshift({
        "name": `${intermediary.name}`, 
        "latitude": `${transitPoint.coords.latitude}`, 
        "longitude": `${transitPoint.coords.longitude}`,
        "timestamp": `${transitPoint.timestamp}`
    })

    //Dette funker. Oppdaterer med det nye arrayet. 
    //Hvordan blir det med authentication nå?
    //Authenticator må endres til å hente ut det siste entriet i arrayet 
    //(evt kan man endre her, slik at man ikke array.push elementet på slutten, 
    //men heller legger det inn først. Slik at man kan hente ut elementet man trenger
    //for å autentisere med array[0])
    //Ved autentisering bør man gjennom hele historien til produktet, 
    //aka getProductHistory(id), og sjekke alle checksums, mot checksums man lager
    //ved å iterere seg gjennom
    return await axios.put('https://authicateserver.firebaseio.com/products/' + `${json.id}` +  '.json',
    {
        "id": `${res.data.id}`, 
        "description": `${res.data.description}`, 
        "origin": `${res.data.origin}`,
        "batchID": `${res.data.batchID}`, 
        "manufacturer": `${res.data.manufacturer}`,
        "transitpoint": `${res.data.transitpoint}`,
        "intermediary": arry
    }
    );
  
};

