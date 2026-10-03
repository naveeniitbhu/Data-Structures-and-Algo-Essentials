# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
def diameterOfBinaryTree(root):
    maxDia = 0

    def getHeight(node):
        nonlocal maxDia
        if node is None:
            return -1
        lh = getHeight(node.left)
        rh = getHeight(node.right)

        d = lh + rh + 2

        if d > maxDia:
            maxDia = d
        return 1 + max(lh, rh)

    getHeight(root)
    return maxDia


def dia(root):
    maxDia = [0]

    def getHeight(node):
        if node is None:
            return -1
        lh = getHeight(node.left)
        rh = getHeight(node.right)

        maxDia[0] = max(maxDia[0], lh + rh + 2)

        return 1 + max(lh, rh)


class Solution:
    def dia(self, root):
        self.maxDia = 0
        self.getHeight(root)
        return self.maxDia

    def getHeight(self, node):
        if node is None:
            return -1
        lh = self.getHeight(node.left)
        rh = self.getHeight(node.right)
        d = lh + rh + 2
        self.maxDia = max(self.maxDia, d)

        return 1 + max(lh, rh)


sol = Solution()
# sol.dia(root)
