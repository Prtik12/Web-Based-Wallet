# Solana Wallet Generator (Devnet)

A simple web-based tool built with **React + TypeScript** to generate a mnemonic (seed phrase) and derive Solana wallet addresses using the BIP-44 path format, specifically for **Solana Devnet**.

---

## Features

- Generate BIP-39 compliant mnemonic (seed phrase)
- Derive Solana wallet public keys using BIP-44 path
- Built on Devnet for safe testing

---

## Preview

<p align="center">
  <img width="555" alt="App Preview" src="https://github.com/user-attachments/assets/e562c285-225e-4392-9d13-275785803690" />
</p>

---

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Solana Web3.js](https://solana-labs.github.io/solana-web3.js/)
- [bip39](https://github.com/bitcoinjs/bip39)
- [tweetnacl](https://github.com/dchest/tweetnacl-js)
- [ed25519-hd-key](https://github.com/paulmillr/ed25519-hd-key)

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/solana-wallet-generator
   cd solana-wallet-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Visit the app**

   ```
   http://localhost:5173
   ```

---

## Folder Structure

```
src/
├── components/
│   ├── MnemonicGenerator.tsx
│   └── SolanaWallet.tsx
├── services/
│   └── solanaUtils.ts
├── App.tsx
└── App.css
```

---

