var ERC721 = artifacts.require("ERC721");
var ERC721Token = artifacts.require("ERC721Token");
var ERC721TokenMock = artifacts.require("ERC721TokenMock");

// NOTE: Use this file to easily deploy the contracts you're writing.
//   (but make sure to reset this file before committing
//    with `git checkout HEAD -- migrations/2_deploy_contracts.js`)

module.exports = function (deployer) {
  //deployer.deploy(ERC721);
  deployer.deploy(ERC721Token);
  //deployer.deploy(ERC721TokenMock);
};