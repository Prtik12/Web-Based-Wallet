import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

const connection = new Connection(clusterApiUrl('devnet'));

export async function getSolBalance(publicKey: PublicKey): Promise<number> {
  const lamports = await connection.getBalance(publicKey);
  return lamports / 1e9;
}
