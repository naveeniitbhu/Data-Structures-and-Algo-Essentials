
/**
 * @param {int64} a
 * @param {int64} b
 * @return {int32}
 */
function calculate_power(a, b) {
  let ans = 1;
  const mod = 1000000007;
  for (let i = 1; i <= b; i++) {
    ans = (ans * a) % mod;
  }

  return ans % mod;
}

function calculate_power_2(a, b) {
  if (b == 0) return 1;
  const mod = 1000000007;

  a = a % mod

  return (a * calculate_power(a, b - 1)) % mod;
}


// bigint can be an issue
function calculate_power(a, b) {
    if(b==0) return 1;
    const mod = 1000000007;
    
    let tmp = calculate_power(a, Math.floor(b/2))
    if(b%2 ==0) {
        return (tmp * tmp)%mod;
    }
    return (tmp * tmp * a)%mod
}

/**
 * @param {int64} a
 * @param {int64} b
 * @return {int32}
 */

function calculate_power(a, b) {
    const mod = 1000000007n;

    function power(a, b) {
        if (b === 0n) return 1n;

        a = a % mod;

        let tmp = power(a, b / 2n);

        tmp = (tmp * tmp) % mod;

        if (b % 2n === 0n) {
            return tmp;
        }

        return (tmp * a) % mod;
    }

    return Number(power(BigInt(a), BigInt(b)));
}