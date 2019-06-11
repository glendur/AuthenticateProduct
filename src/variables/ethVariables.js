import { provider } from "../provider";


export const accountAddress = '0x5a2C2A9eD358CD3C3C05139A7738bb2d35250E4C';
export const privKey = Buffer.from('BED217785B22F3D654EF450A4FAD67DA009275B65B8B97F4145487037CFE47B9', 'hex')
export const productContractABI = [{ "constant": false, "inputs": [ { "name": "_batchID", "type": "string" }, { "name": "_productDescription", "type": "string" }, { "name": "_id", "type": "string" }, { "name": "_origin", "type": "string" }, { "name": "_transporter", "type": "string" }, { "name": "_geoLocation", "type": "string" }, { "name": "_time", "type": "string" } ], "name": "updateProduct", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_id", "type": "string" } ], "name": "getNumUpdates", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_id", "type": "string" } ], "name": "getProductById", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_id", "type": "string" } ], "name": "getProductHistory", "outputs": [ { "name": "", "type": "bytes32[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "productCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_batchID", "type": "string" }, { "name": "_productDescription", "type": "string" }, { "name": "_id", "type": "string" }, { "name": "_origin", "type": "string" }, { "name": "_transporter", "type": "string" }, { "name": "_geoLocation", "type": "string" }, { "name": "_time", "type": "string" } ], "name": "updateChecksum", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "pure", "type": "function" } ]
export const productContractAddress = '0xa565b741319af789dd501a4ecec509d1e6254507'

export const productContract = new provider.eth.Contract(productContractABI, productContractAddress);

// V1: export const InitializeProductAddress = '0xD1608F8e549C78B4A4F514d2EB43A1Db21E11B65';
// V1: const initializeProductContractABI = [{ "constant": true, "inputs": [], "name": "productCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xe0f6ef87" }, { "constant": true, "inputs": [ { "name": "_id", "type": "string" } ], "name": "getProductById", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x2352d4aa" }, { "constant": false, "inputs": [ { "name": "_batchID", "type": "string" }, { "name": "_productDescription", "type": "string" }, { "name": "_id", "type": "string" }, { "name": "_origin", "type": "string" } ], "name": "newProduct", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x18651f58" }, { "constant": true, "inputs": [ { "name": "_batchID", "type": "string" }, { "name": "_productDescription", "type": "string" }, { "name": "_id", "type": "string" }, { "name": "_origin", "type": "string" } ], "name": "createChecksum", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "pure", "type": "function", "signature": "0x9fcf5a6a" }]

// V2: export const productContractABI = [{ "constant": false, "inputs": [ { "name": "_batchID", "type": "string" }, { "name": "_productDescription", "type": "string" }, { "name": "_id", "type": "string" }, { "name": "_origin", "type": "string" }, { "name": "_manufacturer", "type": "string" }, { "name": "_transitPoint", "type": "string" } ], "name": "newProduct", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_batchID", "type": "string" }, { "name": "_productDescription", "type": "string" }, { "name": "_id", "type": "string" }, { "name": "_origin", "type": "string" }, { "name": "_transporter", "type": "string" }, { "name": "_geoLocation", "type": "string" }, { "name": "_time", "type": "string" }, { "name": "_manufacturer", "type": "string" } ], "name": "updateProduct", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_batchID", "type": "string" }, { "name": "_productDescription", "type": "string" }, { "name": "_id", "type": "string" }, { "name": "_origin", "type": "string" }, { "name": "_manufacturer", "type": "string" }, { "name": "_transitPoint", "type": "string" } ], "name": "createChecksum", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [ { "name": "_id", "type": "string" } ], "name": "getNumUpdates", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_id", "type": "string" } ], "name": "getProductById", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_id", "type": "string" } ], "name": "getProductHistory", "outputs": [ { "name": "", "type": "bytes32[]" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "productCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_batchID", "type": "string" }, { "name": "_productDescription", "type": "string" }, { "name": "_id", "type": "string" }, { "name": "_origin", "type": "string" }, { "name": "_transporter", "type": "string" }, { "name": "_geoLocation", "type": "string" }, { "name": "_time", "type": "string" }, { "name": "_manufacturer", "type": "string" } ], "name": "updateChecksum", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "stateMutability": "pure", "type": "function" } ]
// V2: export const productContractAddress = '0x4fb5bdB9100d4aA5c1dD36550F534D7AF49403fE'