import React from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView , Platform} from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { authenticator } from './authenticateProduct/authenticator';
import { updater } from './updateProduct/updater';
import { isJson } from './helperFunctions/isJson';


export default class Main extends React.Component {
  state = {
    hasCameraPermission: null,
    id: null, 
    origin: null, 
    description: null, 
    batchID: null, 
    auth: true,
    update: null,
    authentic: null, 
    intermediaryInput: null,
    txHash: null,
    ethStatus: null
  }

  nullifyState(res) { 
    this.setState({
      id: null, 
      origin: null, 
      description: null, 
      batchID: null, 
      auth: true, 
      ethStatus: null,
      txHash: null,
      authentic: res, 
    });
  }

  async componentDidMount() {
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
      <KeyboardAvoidingView style={styles.container} behaviour={Platform.OS === "ios" ? "padding" : null} >
          <View style={{ flex: 1 }}>
          <View style ={styles.horizontalAlign}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ auth: true, update: false })}
            >
            <Text> Authenticate </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ auth: false, update: true })}
            >
            <Text> Update Product </Text>
            </TouchableOpacity>
          </View>
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            style={{ flex: 4 }}
          />
          <View style ={{ flex: 3, margin: 10 }}>
            <View>
              <TextInput         
                style={styles.baseText}
                placeholder="Transporter"
                onChangeText={(intermediaryInput) => this.setState({intermediaryInput})}
              >
              Transporter: </TextInput>
              <Text style={styles.titleText}>Product Information </Text>
              <Text style={styles.baseText}>Authenticity: {this.state.authentic} </Text>
              <Text style={styles.baseText}>ID: {this.state.id}</Text>
              <Text style={styles.baseText}>Description: {this.state.description}</Text>
              <Text style={styles.baseText}>Origin: {this.state.origin}</Text>
              <Text style={styles.baseText}>BatchID: {this.state.batchID} </Text>
              <Text style={styles.baseText}>Successfull: {this.state.ethStatus}</Text>      
              <Text style={styles.baseText}>Transaction Hash: {this.state.txHash}</Text>
            </View>
          </View>
          </View>
      </KeyboardAvoidingView>
    );
  }

  handleBarCodeScanned = ({ data }) => {
    if(isJson(data)){
      if(this.state.update){
        if(this.state.intermediaryInput !== null){
          Alert.alert(
            'Update Product',
            `Are you sure you want to update the product with the ID: ${JSON.parse(data).id}?`,
            [
              { text: "Lukk" },
              { text: "Ok", onPress: () => updater(data, this.state.intermediaryInput)
                .then(res =>
                    this.setState({ 
                    id: res[0].data.id, 
                    batchID: res[0].data.batchID, 
                    description: res[0].data.description, 
                    origin: res[0].data.origin,
                    txHash: res[1].transactionHash, 
                    ethStatus: `${res[1].status}`,
                    authentic: null

                  }) 
              )}
            ]
          );
          return; 
        }return; 
      }
      Alert.alert(
        'Authenticate Product',
        `Authenticating product with ID: ${JSON.parse(data).id}?`,
        [
          { text: "Lukk" },
          { text: "Ok", onPress: () => authenticator(data).then(res => this.nullifyState(res))
          
          }
        ]
      );
    }       
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
  },
  redInputText: {
    fontFamily: 'Cochin',
    color: 'red',
    height: 40
  },
  container: {
    flex: 1,
  }
});