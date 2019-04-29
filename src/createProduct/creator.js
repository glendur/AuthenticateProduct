import '../../global';
import { createProductOnEthereum } from './createProductOnEthereum';
import { createProductOnFirebase } from './createProductOnFirebase';

export const creator = (data) => {
    const json = JSON.parse(data);
    // var prepareCheckSum = (json.batchID + json.description + json.id + json.origin).replace(/\s/g,'');
    // console.log(prepareCheckSum);
    // console.log(provider.utils.keccak256(prepareCheckSum));
    createProductOnEthereum(json)
    return createProductOnFirebase(json)
};
