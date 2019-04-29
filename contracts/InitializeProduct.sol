//Oppretter nytt produkt
//Hasher informasjonen
//Lagrer hashet informasjon i mappingen "products"
//Sender signal om at nytt produkt er opprettet til firebase
//Åpner kommunikasjonskanal med Firbase
//Sender "product"-informasjon til firebase
pragma solidity ^0.5.0; 

contract InitializeProduct {
    uint public productCount = 0;

    mapping(string => bytes32) private products;

    function getProductById(string memory _id) public view returns(bytes32){
        return products[_id];
    }

    function deleteProductById(string memory _id) public {
        delete products[_id];
    }


    function newProduct(string memory _batchID, string memory _productDescription, string memory _id, string memory _origin) public {
        products[_id] = createChecksum(_batchID, _productDescription, _id, _origin);
    }

    function createChecksum(string memory _batchID, string memory _productDescription, string memory _id, string memory _origin) public pure returns (bytes32){
        return keccak256(abi.encodePacked(_batchID, _productDescription, _id, _origin));
        
    }
}