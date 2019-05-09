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


    function getNumUpdates(string memory _id) public view returns (uint) {
        return products[_id].length-1;
    }
    
    function updateProduct(string memory _batchID, string memory _productDescription, string memory _id, string memory _origin, string memory _transporter, string memory _geoLocation, string memory _time) public returns (bool) {
        products[_id].push(updateChecksum(_batchID, _productDescription, _id, _origin, _transporter, _geoLocation, _time));
    }

    function updateChecksum(string memory _batchID, string memory _productDescription, string memory _id, string memory _origin,  string memory _transporter, string memory _geoLocation, string memory _time) public pure returns (bytes32){
        return keccak256(abi.encodePacked(_batchID, _productDescription, _id, _origin, _transporter, _geoLocation, _time));
    }
}