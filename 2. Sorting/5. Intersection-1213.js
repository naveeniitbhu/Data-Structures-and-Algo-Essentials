
/**
 * @param {list_int32} arr1
 * @param {list_int32} arr2
 * @param {list_int32} arr3
 * @return {list_int32}
 */
function find_intersection(arr1, arr2, arr3) {
  let p = 0;
  let q = 0;
  let r = 0;
  const result = []
  while (p < arr1.length && q < arr2.length && r < arr3.length) {
    const elem1 = arr1[p];
    const elem2 = arr2[q];
    const elem3 = arr3[r];
    console.log(elem1, elem2, elem3)
    if (elem1 == elem2 && elem2 == elem3) {
      result.push(elem1)
      p++;
      q++;
      r++;
    } else {
      if (elem1 <= elem2 && elem1 <= elem3) {
        p++;
      } else if (elem2 <= elem3 && elem2 <= elem1) {
        q++;
      } else if (elem3 <= elem2 && elem3 <= elem1) {
        r++;
      }
    }
  }
  return result.length === 0 ? [-1] : result;
}

// if duplicates not allowd
if (elem1 === elem2 && elem2 === elem3) {
  if (
    result.length === 0 ||
    result[result.length - 1] !== elem1
  ) {
    result.push(elem1);
  }
  p++;
  q++;
  r++;
}