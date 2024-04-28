import { useState } from 'react';
import React from 'react';

import { useOnChainVerification } from '../hooks/useOnChainVerification.jsx';
import { useProofGeneration } from '../hooks/useProofGeneration.jsx';
import { useOffChainVerification } from '../hooks/useOffChainVerification.jsx';
import { initializeCommitment } from '../utils/generateCommit.js';
import { bytesToBigInt, bytesToHex, hexToBigInt, hexToNumber, toHex } from 'viem';

function Component() {
  // const [input, setInput] = useState<{ x: string; y: string } | undefined>();
  const [input, setInput] = useState<
    { name: string; nationality: string; kyc_id: string; kyc_hash: string } | undefined
  >();
  const { noir, proofData } = useProofGeneration(input);
  useOffChainVerification(noir, proofData);
  useOnChainVerification(proofData);

  function toHexString(byteArray) {
    return Array.from(byteArray, function (byte) {
      return ('0' + (byte & 0xff).toString(16)).slice(-2);
    }).join('');
  }

  const convertToByte = (val: string) => {
    const utf8Encoder = new TextEncoder();
    const byteArray = utf8Encoder.encode(val as unknown as string);
    console.log('fullname hash', byteArray);
    return byteArray;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    if (!elements) return;

    // const x = elements.namedItem('x') as HTMLInputElement;
    // const y = elements.namedItem('y') as HTMLInputElement;

    const fullname = elements.namedItem('fullname') as HTMLInputElement;
    const nationality = elements.namedItem('nationality') as HTMLInputElement;
    const kycId = elements.namedItem('kycId') as HTMLInputElement;
    // const kycHash = initializeCommitment([fullname, nationality, kycId]);

    // 'byteArray' is a Uint8Array containing the encoded bytes

    // setInput({ x: x.value, y: y.value });
    const fullnameBytes = convertToByte(fullname.value);
    const nationalityBytes = convertToByte(nationality.value);
    const kycIdBytes = convertToByte(kycId.value);
    const fullnameBytesInt = BigInt(fullnameBytes.toString().replaceAll(',', ''));
    const nationalityBytesInt = BigInt(nationalityBytes.toString().replaceAll(',', ''));
    const kycIdBytesInt = BigInt(kycIdBytes.toString().replaceAll(',', ''));
    console.log(fullnameBytesInt, nationalityBytesInt, kycIdBytesInt);
    console.log(toHexString(fullnameBytes));
    console.log(bytesToHex(fullnameBytes));
    console.log(hexToNumber(`${bytesToHex(fullnameBytes)}`));
    console.log(hexToBigInt(`${bytesToHex(fullnameBytes)}`));
    const kh = await initializeCommitment([
      bytesToBigInt(fullnameBytes),
      bytesToBigInt(nationalityBytes),
      bytesToBigInt(kycIdBytes),
    ]);
    console.log(kh);
    console.log(bytesToHex(kh.value));
    console.log(bytesToHex(fullnameBytes), bytesToHex(nationalityBytes), bytesToHex(kycIdBytes));
    setInput({
      name: bytesToHex(fullnameBytes),
      nationality: bytesToHex(nationalityBytes),
      kyc_id: bytesToHex(kycIdBytes),
      kyc_hash: bytesToHex(kh.value),
    });
  };

  return (
    <form className="container" onSubmit={submit}>
      <h1>Example starters</h1>
      <h2>This circuit checks that x and y agdre different (yey!)</h2>
      <p>Try it!</p>
      {/* <input name="x" type="text" />
      <input name="y" type="text" /> */}
      <input name="fullname" type="text" />
      <input name="nationality" type="text" />
      <input name="kycId" type="text" />
      <button type="submit">Calculate proof</button>
    </form>
  );
}

export default Component;
