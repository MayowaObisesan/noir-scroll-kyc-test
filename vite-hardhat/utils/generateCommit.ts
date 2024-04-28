// @ts-ignore -- no types
import { Barretenberg, BarretenbergSync } from '@aztec/bb.js';
// @ts-ignore -- no types
import { Fr } from '@aztec/bb.js';
// import { cpus } from 'os';

//const bb = await Barretenberg.new(cpus().length);
export async function initializeCommitment(inputs) {
  const bb = await Barretenberg.new({ threads: 8 });
  // const bb = await BarretenbergSync.new();
  //const bba = await BarretenbergApi.new(cpus().length);
  //   console.log(cpus().length);
  // console.log(Object.keys(bb));
  //console.log(bba);

  // if (bb) {
  //	bb.pedersenInit();
  // }

  // await bb.pedersenInit();
  // let hashRes = await bb.pedersenPlookupCommit([2000]);
  //let hashRes = await bb.pedersenCommit([2000]);
  // let hashRes = await bb.pedersenHashMultiple([2000]);
  // let hashRes = await bb.pedersenHash(["Mayowa", BigInt(2000), "askdhgahsgdhkasd"], 1);
  // let hashRes = await bb.pedersenHash([BigInt(1000), BigInt(2000)], 1);
  let hashRes = await bb.pedersenCommit(inputs);
  console.log(hashRes.x, hashRes.x.toString());
  return hashRes.x;
  //await pedersenHash(bb);
}

// async function pedersenHash(bb) {
//   await bb.pedersenInit();
//   let hashRes = await bb.pedersenPlookupCommit([2000]);
//   return hashRes;
// }

// initialize();
//console.log(pedersenHash());
