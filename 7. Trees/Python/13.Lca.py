def lca(root, a, b):
    if root is None:
        return None
    if root is a or root is b:
        return root
    left = lca(root.left, a, b)
    right = lca(root.right, a, b)

    if left and right:
        return root

    return left or right
