pragma solidity ^0.5.0; 

contract UpdateProduct {
    /*
    Is called upon when a user scans a QR-code in "write-mode".
    When called upon, it looks at the _pID of the {"product.data"}. 
    The information is hashed, and checked against the checksum 
    (value of the _pID key in products mapping). 

    - If the _pID is found in the products mapping, the old entry is deleted. 
    (It might emits information to the front end, saying "Authentic product - entering update mode")
        - The new information, passed to this SC by the front end, is then hashed,
          and a new entry is pushed to the mapping. 
        - Firebase is updated with the same information, further passed by this smart contract.
            this firebase call is the same as in "InitializeProduct.sol", this function should 
            be abstracted into a helper-class.  

    If the _pID is not found in the mapping, it means that the product is not registered in the database.
        - This in turn means that it is not possible to update the product. 
        - The user is notified that the product is not currently registered, and has to be before updating.



    */
}