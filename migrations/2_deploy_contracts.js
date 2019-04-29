const Product = artifacts.require("./InitializeProduct.sol");

module.exports = function(deployer) {
  deployer.deploy(Product);
};
