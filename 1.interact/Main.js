/*
const ethers = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('http://localhost:7545');

const contractABI = [...];
const contractAddress = '0x...';

const contract = new ethers.Contract(contractAddress, contractABI, provider);

async function readFromContract() {
  const data = await contract.someFunction();
  console.log('Data from contract:', data);
}

async function writeToContract() {
  const signer = provider.getSigner(0);
  const contractWithSigner = contract.connect(signer);

  const tx = await contractWithSigner.someFunction(args);
  console.log('Transaction:', tx);

  await tx.wait();
  console.log('Transaction confirmed');
}

readFromContract();
writeToContract();
*/

const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545"); // Ganache RPC URL

const contractABIJSON = require("../build/contracts/SimpleStorage.json");
const contractABI = contractABIJSON.abi;
const contractAddress =
	"0x4619d3967d8fd436b64a1e02fa0b3cb3bbbd109d038b716da24ef282e9e9f5fa"; // Replace with your contract's address

const myContract = new web3.eth.Contract(contractABI, contractAddress);

async function callGet() {
	const accounts = await web3.eth.getAccounts();
	const result = await myContract.methods.get().call({ from: accounts[0] });
	console.log("Result from contract:", result);
}

callGet().catch(console.error);
