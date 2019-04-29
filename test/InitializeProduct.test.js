
const InitializeProduct = artifacts.require('./InitializeProduct.sol');

contract('InitializeProduct', () => {
    before(async () => {
      this.InitializeProduct = await InitializeProduct.deployed()
    })
  
    it('Deploys successfully', async () => {
      const address = await this.InitializeProduct.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
})