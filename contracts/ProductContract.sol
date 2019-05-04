//Oppretter nytt produkt
//Hasher informasjonen
//Lagrer hashet informasjon i mappingen "products"
//Sender signal om at nytt produkt er opprettet til firebase
//Åpner kommunikasjonskanal med Firbase
//Sender "product"-informasjon til firebase
pragma solidity ^0.5.0; 

contract ProductContract {
    uint public productCount = 0;


    mapping(string => bytes32[]) private products;

    function getProductById(string memory _id) public view returns(bytes32){
        return products[_id][products[_id].length-1];
    }

    function getProductHistory(string memory _id) public view returns(bytes32[] memory){
        return products[_id];
    }

    /*
    function newProduct(string memory _batchID, string memory _productDescription, string memory _id, string memory _origin, string memory _manufacturer, string memory _transitPoint) public {
        //Legge inn 'if products[_id].length == 0. Man kan kun oprette nytt produkt om det ikke allerede er oppdater
        products[_id].push(createChecksum(_batchID, _productDescription, _id, _origin, _manufacturer, _transitPoint));
    }

    function createChecksum(string memory _batchID, string memory _productDescription, string memory _id, string memory _origin, string memory _manufacturer, string memory _transitPoint) public pure returns (bytes32){
        return keccak256(abi.encodePacked(_batchID, _productDescription, _id, _origin, _manufacturer, _transitPoint));
        
    }*/

    /*
    Is called upon when a user scans a QR-code in "write-mode".
    When called upon, it looks at the _pID of the {"product.data"}. 
    The information is hashed, and checked against the checksum 
    (value of the _pID key in products mapping). 
    This is in order to ensure that the information you are updating, are in fact authentic. 
    THis can be done simply by calling the "authenticate(data)"-function. 

    - If the _pID is found in the products mapping, the old entry is deleted. 
    (It might emit information to the front end, saying "Authentic product - entering update mode")
        - The new information, passed to this SC by the front end, is then hashed,
          and a new entry is pushed to the mapping. 
        - Firebase is updated with the same information, the same way its done in createProductOnFB, this function could 
            be abstracted into a helper-class, if the parameters will allow it.  

    If the _pID is not found in the mapping, it means that the product is not registered in the database.
        - This in turn means that it is not possible to update the product. 
        - The user is notified that the product is not currently registered, and has to be before updating.

    */

    //Updates the product
    function getNumUpdates(string memory _id) public view returns (uint) {
        return products[_id].length-1;
    }
    //Updates the product if product instance exists, returns true if updated, false otherwise
    function updateProduct(string memory _batchID, string memory _productDescription, string memory _id, string memory _origin, string memory _transporter, string memory _geoLocation, string memory _time) public returns (bool) {
        products[_id].push(updateChecksum(_batchID, _productDescription, _id, _origin, _transporter, _geoLocation, _time));
    }

    function updateChecksum(string memory _batchID, string memory _productDescription, string memory _id, string memory _origin,  string memory _transporter, string memory _geoLocation, string memory _time) public pure returns (bytes32){
        return keccak256(abi.encodePacked(_batchID, _productDescription, _id, _origin, _transporter, _geoLocation, _time));
    }
}