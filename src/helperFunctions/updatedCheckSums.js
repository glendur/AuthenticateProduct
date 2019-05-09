var Tx = require('ethereumjs-tx');
import { productContract } from '../variables/ethVariables';

//tidligere kalt createUpdatedChecksum
export const createNewChecksum = async (response) => {
    var t0 = Date.now();
    const checkSumArray = []; 
    for(var i = 0; i < response.data.intermediary.length;){
        const newUpdatedCheckSum = await productContract.methods.updateChecksum(
        `${response.data.batchID}`, 
        `${response.data.description}`, 
        `${response.data.id}`, 
        `${response.data.origin}`, 
        `${response.data.intermediary[i].name}`, 
        `${response.data.intermediary[i].latitude} ${response.data.intermediary[i].longitude}`,
        `${response.data.intermediary[i].timestamp}`
        ).call();
        var t1 = Date.now();
        i++;
        checkSumArray.unshift(newUpdatedCheckSum);
    }
    console.log("Call to createUpdatedChecksum took " + (t1 - t0) + " milliseconds.")
    return checkSumArray;
};

//tidligere kalt fetchUpdatedChecksum
export const fetchEthChecksum = async (jsonFromScan) => {
    return await productContract.methods.getProductHistory(`${jsonFromScan.id}`).call();  

};