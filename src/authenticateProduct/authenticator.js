import '../../global';
import axios from 'axios';
import { createNewChecksum, fetchEthChecksum } from '../helperFunctions/updatedCheckSums';
import { isAuthentic } from '../helperFunctions/isAuthentic';

export const authenticator = async (data) => {
  const jsonFromScan = JSON.parse(data);
  const responseFromFirebase = await axios.get('https://authicateserver.firebaseio.com/products/' + `${jsonFromScan.id}` + '.json') 
  if(responseFromFirebase.data == null) {
    return 'Product does not exist in our database.';
  }

  const newUpdatedCheckSum = await createNewChecksum(responseFromFirebase);
  const ethUpdatedCheckSum = await fetchEthChecksum(jsonFromScan);
  const numIntermediaries = ethUpdatedCheckSum.length;
  console.log(newUpdatedCheckSum, ethUpdatedCheckSum)
  const numAuthentic = ethUpdatedCheckSum.filter(value => newUpdatedCheckSum.includes(value)).length
  // for(var i = 0; i < numIntermediaries;){
  //   if(ethUpdatedCheckSum.filter(value => newUpdatedCheckSum.includes(value))){
  //     numAuthenticc++;
  //   }
  //   if(isAuthentic(newUpdatedCheckSum[i], ethUpdatedCheckSum[i])){
  //     numAuthentic++;
  //   }
  //   i++;
  // }
  return `Out of the ${numIntermediaries} transit points this product has been processed, it is deemed authentic at ${numAuthentic} of them.` 
};
