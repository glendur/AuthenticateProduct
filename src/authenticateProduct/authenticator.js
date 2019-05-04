import '../../global';
import axios from 'axios';
import { createChecksum } from '../helperFunctions/createChecksum';
import { fetchCheckSum } from '../helperFunctions/fetchCheckSum';
import { createUpdatedChecksum, fetchUpdatedCheckSum } from '../helperFunctions/updatedCheckSums';
import { isAuthentic } from '../helperFunctions/isAuthentic';
import { productContract } from '../variables/ethVariables'
import { auth } from 'firebase';

export const authenticator = async (data) => {
  const jsonFromScan = JSON.parse(data);
  const responseFromFirebase = await axios.get('https://authicateserver.firebaseio.com/products/' + `${jsonFromScan.id}` + '.json') 
  if(responseFromFirebase.data == null) {
    return 'Product does not exist in our database.';
  }
  // console.log('FB: ' + responseFromFirebase.data.intermediary.length)
  // console.log(await productContract.methods.getProductHistory(`${jsonFromScan.id}`).call())
   

  //Her må arrays tas inn, og arrays sendes tilbake
  //responseFromFirebase.data.intermediary er et array
  //fetchUpdatedChecksum tar inn en enkelt jsonFromScan.id  og returnerer et array
  //isAuthentic tar inn to arrays, og sjekker hver entry mot hverandre
  const newUpdatedCheckSum = await createUpdatedChecksum(responseFromFirebase);
  const ethUpdatedCheckSum = await fetchUpdatedCheckSum(jsonFromScan);
  var numAuthentic = 0;
  const numIntermediaries = ethUpdatedCheckSum.length;
  for(var i = 0; i < numIntermediaries;){
    if(isAuthentic(newUpdatedCheckSum[i], ethUpdatedCheckSum[i])){
      numAuthentic++;
    }
    i++;
  }
  return `Out of the ${numIntermediaries} transitpoints this product has been processed, it is deemed authentic at ${numAuthentic} of them.` 
};
