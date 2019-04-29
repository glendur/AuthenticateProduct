import axios from 'axios';

export const createProductOnFirebase = (json) => {
    return axios.put('https://authicateserver.firebaseio.com/products/' + `${json.id}` + '.json',
    { "id": `${json.id}`, "description": `${json.description}`, "origin": `${json.origin}`,"batchID": `${json.batchID}` });
};