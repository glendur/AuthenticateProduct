var Tx = require('ethereumjs-tx');
import { productContract } from '../variables/ethVariables';



export const fetchCheckSum = async (jsonFromScan) => {
    return await productContract.methods.getProductById(`${jsonFromScan.id}`).call();  
};