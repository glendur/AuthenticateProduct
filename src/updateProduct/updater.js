//Trengs import global?
import '../../global';
import { updateProductOnEthereum } from './updateProductOnEthereum';
import { updateProductOnFirebase } from './updateProductOnFirebase';
import { getGeoLocation } from '../helperFunctions/getGeoLocation';




export const updater = async (data, intermediaryInput) => {
  const json = JSON.parse(data);
  const intermediary = JSON.parse(`{ "name": "${intermediaryInput}"}`)
  const transitPoint = await getGeoLocation();


  //Dagens oppgave er altså å bygge ut denne updater-funksjonen slik at objektene 
  //blir oppdatert både i firebase og ethereum.
  //Her må det bygges en "isEthereumUpdated()-funksjon som sjekker at eth er oppdatert før man oppdaterer
  //firebase. Dette er fordi hvis en scanner flere ganger kjapt etter hverandre, 
  //vil firebase bli oppdatert, mens ethereum bare blir
  //oppdatert med den første scannen." 
  updateProductOnEthereum(json, transitPoint, intermediary)
  return updateProductOnFirebase(json, transitPoint, intermediary)
  
};
