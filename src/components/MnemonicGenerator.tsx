import { generateMnemonic } from 'bip39';

interface Props {
  mnemonic: string;
  setMnemonic: (mnemonic: string) => void;
}

export default function MnemonicGenerator({ mnemonic, setMnemonic }: Props) {
  const handleGenerate = async () => {
    const mn = await generateMnemonic();
    setMnemonic(mn);
  };

  return (
    <div className="mnemonic-generator">
      <button onClick={handleGenerate} className="generate-button">Generate Mnemonic</button>
      <div className="mnemonic-display">
        <input type="text" value={mnemonic} readOnly className="mnemonic-input" />
        <button
          className="copy-button"
          onClick={() => navigator.clipboard.writeText(mnemonic)}
          disabled={!mnemonic}
        >
          Copy
        </button>
      </div>
    </div>
  );
}
