import { useState } from "react";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "./components/SolanaWallet";
import "./App.css";

const App = () => {
  const [mnemonic, setMnemonic] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const generateNewMnemonic = async () => {
    const newMnemonic = await generateMnemonic();
    setMnemonic(newMnemonic);
    setCopied(false); // Reset copy status when a new mnemonic is generated
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="app-container">
      <h1>Solana Web Wallet (Devnet)</h1>
      
      <button onClick={generateNewMnemonic} className="generate-button">
        Generate Mnemonic
      </button>

      <div className="wallet-display-container">
        <div className="wallet-display">
          <input
            type="text"
            value={mnemonic}
            readOnly
            className="mnemonic-input"
          />
          <button
            className="copy-button"
            onClick={() => copyToClipboard(mnemonic)}
            disabled={!mnemonic}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      <SolanaWallet mnemonic={mnemonic} />
    </div>
  );
};

export default App;
