import { Alert } from 'react-native';

export const isJson = (data) => {
    try {
        const json = JSON.parse(data);
        console.log(data.id);
        return true;
    }
    catch(err) {
        Alert.alert(
            'Error',
            'The scanned QR-code is not recognized as a product.',
            [
              { text: "Lukk" },
              { text: "Ok"  }
            ]
          );
    }
}

