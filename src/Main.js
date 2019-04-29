import React from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import  { creator } from './createProduct/creator';
import { authenticator } from './authenticateProduct/authenticator';


export default class Main extends React.Component {
  state = {
    hasCameraPermission: null,
    id: null, 
    origin: null, 
    description: null, 
    batchID: null, 
    auth: true,
    create: false 
  }

  async componentDidMount() {
    /* @info Before we can use the BarCodeScanner we need to ask the user for permission to access their camera. <a href='permissions.html'>Read more about Permissions.</a> */
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    /* @end */
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <View style ={styles.horizontalAlign}>
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ create: false, auth: true })}
          >
          <Text> Authenticate </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({ create: true, auth: false })}
          >
          <Text> Create Product </Text>
          </TouchableOpacity>
        </View>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={{ flex: 5 }}
        />
        <View style ={{ flex: 2, margin: 10 }}>
          <Text style={styles.titleText}>
            Product Information  
          </Text>
          <View>
            <Text style={styles.baseText}>ID: {this.state.id}</Text>
            <Text style={styles.baseText}>Description: {this.state.description}</Text>
            <Text style={styles.baseText}>Origin: {this.state.origin}</Text>
            <Text style={styles.baseText}>BatchID: {this.state.batchID} </Text>
          </View>
        </View>
      </View>
    );
  }

  handleBarCodeScanned = ({ data }) => {
    if(this.state.create){
      Alert.alert(
        'New Product',
        `Are you sure you want to create a new product with the ID: ${JSON.parse(data).id}?`,
        [
          { text: "Lukk" },
          { text: "Ok", onPress: () => creator(data)
            .then(res => this.setState({ id: res.data.id, batchID: res.data.batchID, description: res.data.description, origin: res.data.origin  })) 
          }
        ]
      );
      return; 
    }
    Alert.alert(
      'Authenticate Product',
      `Authenticating product with ID: ${JSON.parse(data).id}?`,
      [
        { text: "Lukk" },
        { text: "Ok", onPress: () => authenticator(data).then(console.log('Authentic Product'))}
      ]
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10, 
    margin: 10,
    marginTop: 35, 
  },
  horizontalAlign: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
  }
});