const Web3 = require('web3');

export const provider = new Web3(
    new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/17618d04841743129f0b878d7365fccf'),
    //new Web3.providers.HttpProvider('http://192.168.39.143:7545')
  );