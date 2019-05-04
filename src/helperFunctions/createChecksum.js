import { provider } from '../provider';
var Tx = require('ethereumjs-tx');
import { productContract } from '../variables/ethVariables';



export const createChecksum = async (response) => {
    console.log(response.data.manufacturer)
    const newCheckSum = await productContract.methods.createChecksum(
        `${response.data.batchID}`, 
        `${response.data.description}`, 
        `${response.data.id}`, 
        `${response.data.origin}`, 
        `${response.data.manufacturer}`, 
        `${response.data.transitpoint}`)
        .call();
    return newCheckSum;
};