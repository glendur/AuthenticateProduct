import { provider } from '../provider';
var Tx = require('ethereumjs-tx');





export const createProductOnEthereum = (json) => {
    //her vil newProduct kalles
    const account = '0x5a2C2A9eD358CD3C3C05139A7738bb2d35250E4C';
    const privKey = Buffer.from('BED217785B22F3D654EF450A4FAD67DA009275B65B8B97F4145487037CFE47B9', 'hex')
    
    const contractAddress = '0xD1608F8e549C78B4A4F514d2EB43A1Db21E11B65'
    const contract = new provider.eth.Contract([{ "constant": true, "inputs": [], "name": "productCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xe0f6ef87" }, { "constant": true, "inputs": [ { "name": "_id", "type": "string" } ], "name": "getProductById", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x2352d4aa" }, { "constant": false, "inputs": [ { "name": "_batchID", "type": "string" }, { "name": "_productDescription", "type": "string" }, { "name": "_id", "type": "string" }, { "name": "_origin", "type": "string" } ], "name": "newProduct", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x18651f58" }, { "constant": true, "inputs": [ { "name": "_batchID", "type": "string" }, { "name": "_productDescription", "type": "string" }, { "name": "_id", "type": "string" }, { "name": "_origin", "type": "string" } ], "name": "createChecksum", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "pure", "type": "function", "signature": "0x9fcf5a6a" } ], contractAddress);


    provider.eth.getTransactionCount(account, (err, txCount) => {

        const txObject = {
          nonce:    provider.utils.toHex(txCount),
          gasLimit: provider.utils.toHex(80000), 
          gasPrice: provider.utils.toHex(provider.utils.toWei('10', 'gwei')),
          to: contractAddress,
          data: contract.methods.newProduct(`${json.batchID}`, `${json.description}`, `${json.id}`, `${json.origin}`).encodeABI()
        }
      
        const tx = new Tx(txObject)
        tx.sign(privKey)
      
        const serializedTx = tx.serialize()
        const raw = '0x' + serializedTx.toString('hex')

        //Remove before release
        provider.eth.sendSignedTransaction(raw, (err, txHash) => {
          console.log('err:', err, 'txHash:', txHash)
        })
    })
};