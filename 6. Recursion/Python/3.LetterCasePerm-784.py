# /**
#  * @param {string} s
#  * @return {string[]}
#  */
# var letterCasePermutation = function (s) {
#   const result = [];
#   calculatePermutaions(0, "", result, s);

#   return result;
# };

# function calculatePermutaions(index, curr, result, str) {
#   if (index == str.length) {
#     result.push(curr)
#     return
#   }
#   const char = str[index];

#   if (/[a-zA-Z]/.test(char)) {
#     calculatePermutaions(index + 1, curr + char.toLowerCase(), result, str)
#     calculatePermutaions(index + 1, curr + char.toUpperCase(), result, str)
#   } else {
#     calculatePermutaions(index + 1, curr + char, result, str)
#   }
# }

# // height = n
# // in. worst case it is a perfect binary tree
# // N = 2^(h+1) - 1 = 2^(n+1)
# // Leaf Nodes  =  2^n
# // Intermittent Nodes  =  2^n

# // T(c) for leaves = 2^n * O(1)
# // T(c) for intermittent leaves = 2^n * O(n)
# // Total = 2^n + 2^n * O(n) = 2^n * O(n)

# // S(c) = h * AR = n * (AR for leaves + AR for intermittent)
# //               = n * (O(1) + O(n)) = O(n^2)


# // Better solution

# /**
#  * @param {string} s
#  * @return {string[]}
#  */
# var letterCasePermutation = function (s) {
#   const result = [];
#   calculatePermutaions(0, [], result, s);

#   return result;
# };

# function calculatePermutaions2(index, curr, result, str) {
#   if (index == str.length) {
#     result.push(curr.join(''))
#     return
#   }
#   const char = str[index];

#   if (/^[a-zA-Z]$/.test(char)) {
#     curr.push(char.toLowerCase())
#     calculatePermutaions(index + 1, curr, result, str)
#     curr.pop()

#     curr.push(char.toUpperCase())
#     calculatePermutaions(index + 1, curr, result, str)
#     curr.pop()
#   } else {
#     curr.push(char)
#     calculatePermutaions(index + 1, curr, result, str)
#     curr.pop()
#   }
# }