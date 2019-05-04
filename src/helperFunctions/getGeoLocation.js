import '../../global';

function getPosition() {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej);
    });
};

export async function getGeoLocation() {
    const position = await getPosition(); 
    return position; 
}


