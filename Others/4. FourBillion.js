// 4 billion integers
// i.e. 4bil * 4bytes = 16GB 
// 1 byte is 8 bit
// we have 32 bit integers i.e. 2^32
// instead of storing integers, we store 1 bit per integer
// 2^32/8 = 2^29bytes ~500,000,000 i.e. 512MB
function findInteger(nums) {
  const TOTAL = 2 ** 32;
  const bitmap = new Uint8Array(TOTAL / 8);

  // Mark numbers seen
  for (const num of nums) {
    bitmap[num >> 3] |= (1 << (num & 7));
  }

  // Find first missing number
  for (let num = 0; num < TOTAL; num++) {
    if ((bitmap[num >> 3] & (1 << (num & 7))) === 0) {
      return num;
    }
  }

  return -1;
}