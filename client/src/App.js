import "./App.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Upload from "../src/artifacts/contracts/Upload.sol/Upload.json";
import FileUpload from "./components/FileUpload";
import Modal from "./components/Display";
import Display from "./components/Display";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const wallet = async () => {
      if (provider) {
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        console.log(address);
        setAccount(address);

        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );

        console.log(contract);
        setContract(contract);
        setProvider(signer);
      } else {
        alert("metaMask Not Installed");
      }
    };

    provider && wallet();
  }, []);

  return (
    <div className="App">
      <h1>Gdrive 3.0</h1>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <p></p>
      <FileUpload />
      <Display />
    </div>
  );
}

export default App;
