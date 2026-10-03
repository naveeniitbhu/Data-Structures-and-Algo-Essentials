# return true or false if has a path
def pathSum(root, tgtSum):
    def solve(node, curr_sum):
        if node is None:
            return False
        curr_sum += node.value
        if node.left is not None and node.right is not None:
            return curr_sum == tgtSum
        return solve(node.left, curr_sum) or solve(node.right, curr_sum)

    return solve(root, 0)


def all_path(root, tgtSum):
    result = []

    def solve(node, slate, curr_sum):
        if node is None:
            return

        curr_sum += node.value
        slate.append(node)

        if node.left is None and node.right is None and curr_sum == tgtSum:
            result.append(slate.copy())

        solve(node.left, slate, curr_sum)
        solve(node.right, slate, curr_sum)
        slate.pop()

    solve(root, [], 0)
    return result
