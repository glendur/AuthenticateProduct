import axios from 'axios';

export const productExistsOnFirebase = async (json) => {
    const resp = await axios.get('https://authicateserver.firebaseio.com/products/' + `${json.id}` + '.json')
    if(resp.data !== null){
        return true;
    }
    return false; 
    
};

