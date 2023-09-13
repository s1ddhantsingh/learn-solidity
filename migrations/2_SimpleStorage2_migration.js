const SimpleStorage2 = artifacts.require("../build/contracts/SimpleContract2");

module.exports = function (deployer) {
	deployer.deploy(SimpleStorage2);
};
