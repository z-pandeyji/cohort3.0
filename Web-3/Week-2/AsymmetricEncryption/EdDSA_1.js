// Using @noble/ed25519

import * as ed from "@noble/ed25519";
import { createHash, randomBytes, webcrypto } from 'crypto';

// Polyfill for the Web Crypto API
if (!globalThis.crypto) {
    globalThis.crypto = webcrypto;
  } else if (!globalThis.crypto.subtle) {
    globalThis.crypto.subtle = {
      digest: async (algorithm, data) => {
        const hash = createHash(algorithm.toLowerCase().replace("-", ""));
        hash.update(Buffer.from(data));
        return new Uint8Array(hash.digest());
      },
    };
  }

async function main() {
  // Generate a secure random private key (32 bytes)
  const privKey = randomBytes(32);

  // Convert the message "hello world" to a Uint8Array
  const message = new TextEncoder().encode("hello world");

  // Generate the public key from the private key
  const pubKey = await ed.getPublicKeyAsync(privKey);

  // Sign the message
  const signature = await ed.signAsync(message, privKey);

  // Verify the signature
  const isValid = await ed.verifyAsync(signature, message, pubKey);

  // Output the result
  console.log("Using @noble/ed25519", isValid); // Should print `true` if the signature is valid
}

main();
