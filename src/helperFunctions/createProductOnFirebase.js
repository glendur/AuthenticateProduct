import axios from 'axios';

export const createProductOnFirebase = async (json, transitPoint, intermediary) => {
    return axios.put('https://authicateserver.firebaseio.com/products/' + `${json.id}` + '.json',
    { 
        "id": `${json.id}`, 
        "description": `${json.description}`, 
        "origin": `${json.origin}`,
        "batchID": `${json.batchID}`, 
        "manufacturer": `${json.manufacturer}`,
        "transitpoint": `${json.transitpoint}`,
        "intermediary": 
        [{
            "name": `${intermediary.name}`,
            "latitude": `${transitPoint.coords.latitude}`, 
            "longitude": `${transitPoint.coords.longitude}`,
            "timestamp": `${transitPoint.timestamp}`
        }]
    });
};