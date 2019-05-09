import { provider } from '../provider';
var Tx = require('ethereumjs-tx');
import { productContract, accountAddress, productContractAddress, privKey } from '../variables/ethVariables';




export const updateProductOnEthereum = async (json, transitPoint, intermediary) => {
   // _transporter, _geoLocation, _time, _manufacturer
    const txCount =  await provider.eth.getTransactionCount(accountAddress, (err, txCount) => {
      return txCount;
    })

    const txObject = {
      nonce:    provider.utils.toHex(txCount),
      gasLimit: provider.utils.toHex(80000), 
      gasPrice: provider.utils.toHex(provider.utils.toWei('10', 'gwei')),
      to: productContractAddress,
      data: productContract.methods.updateProduct(
        `${json.batchID}`, 
        `${json.description}`, 
        `${json.id}`, 
        `${json.origin}`,
        `${intermediary.name}`,
        `${transitPoint.coords.latitude} ${transitPoint.coords.longitude}`,
        `${transitPoint.timestamp}`
        ).encodeABI()
    }
  
    const tx = new Tx(txObject)
    tx.sign(privKey)
  
    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

      //Remove before release

    return await provider.eth.sendSignedTransaction(raw, (err, txHash) => {  
      return txHash;
    });
}