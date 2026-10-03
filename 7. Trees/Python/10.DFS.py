"""
For your reference:
class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
"""


def postorder(root):
    """
    Args:
     root(BinaryTreeNode_int32)
    Returns:
     list_int32
    """
    if root is None:
        return []
    result = []

    def solve(node):
        if node is None:
            return
        solve(node.left)
        solve(node.right)
        result.append(node.value)

    solve(root)
    return result
