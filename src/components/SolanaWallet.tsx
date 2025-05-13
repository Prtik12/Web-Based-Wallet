import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

interface Props {
  mnemonic: string;
}

export function SolanaWallet({ mnemonic }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState<string[]>([]);

  const handleAddWallet = async () => {
    if (!mnemonic) {
      return;
    }

    const seed = await mnemonicToSeed(mnemonic);

    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString('hex')).key;

    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);

    setCurrentIndex(currentIndex + 1);
    setPublicKeys([...publicKeys, keypair.publicKey.toBase58()]);
  };

  return (
    <div className="solana-wallet">
      <button onClick={handleAddWallet} disabled={!mnemonic} className="generate-wallet-button">
        Add Wallet
      </button>

      {publicKeys.length > 0 && (
        <div className="public-keys">
          {publicKeys.map((key, index) => (
            <div key={index} className="public-key-item">
              <input type="text" value={key} readOnly className="public-key-input" />
              <button
                className="copy-button"
                onClick={() => navigator.clipboard.writeText(key)}
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
