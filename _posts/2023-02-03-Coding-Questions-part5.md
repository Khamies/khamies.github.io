

#### 1. [Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/description/)

```python
def inorderTraversal(root):
    def traversal(root, bag):

        if root:
            traversal(root.left, bag)
            bag.append(root.val)
            traversal(root.right, bag)

        return bag

    if root is None:
        return []
    else:

        bag = []

        traversal(root, bag)

        return bag

```



#### 2. [Same Tree](https://leetcode.com/problems/same-tree/description/)

```python
def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
    def is_same(p, q):

        if not p and not q:
            return True  # check for the end of both trees.
        if not p or not q:
            return False  # Check for the height similarity.
        if p.val != q.val:
            return False  # check for the values similarity.

        return is_same(p.left, q.left) and is_same(p.right, q.right)

    return is_same(p, q)

```



#### 3. [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/description/)

```python
def isSymmetric(root):
    def check(left, right):

        if not left and not right:
            return True
        if not left or not right:
            return False
        if left.val != right.val:
            return False

        return check(left.right, right.left) and check(left.left, right.right)

    return check(root.left, root.right)

```



#### 4. [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)

```python
def maxDepth(root):
    def get_depth(root):

        if not root:
            return 0
        if not root.left and not root.right:
            return 1
        if not root.left:
            return 1 + get_depth(root.right)
        if not root.right:
            return 1 + get_depth(root.left)

        return 1 + max(get_depth(root.right), get_depth(root.left))

    return get_depth(root)

```





#### 5. [Path Sum](https://leetcode.com/problems/path-sum/description/)

```python
def hasPathSum(root, targetSum):
    def path_sum(root, current_sum):

        if not root:
            return False
        if not root.left and not root.right and current_sum == root.val:
            return True

        return path_sum(root.left, current_sum - root.val) or path_sum(
            root.right, current_sum - root.val
        )

    if not root:
        return False

    currentSum = targetSum

    return path_sum(root, currentSum)

```



#### 6. [Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/description/)

```python
def minDepth(root):
    def shortest_path(root):

        if not root:
            return 0
        if not root.left and not root.right:
            return 1
        if not root.left:
            return 1 + shortest_path(root.right)
        if not root.right:
            return 1 + shortest_path(root.left)

        return 1 + min(shortest_path(root.left), shortest_path(root.right))

    return shortest_path(root)
```





#### 7. [Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/description/)

```python
def binaryTreePaths(root):
    def get_paths(root, path, result):

        if not root:
            return
        if not root.left and not root.right:
            return result.append(path + str(root.val))
        if not root.left:
            return get_paths(root.right, path + str(root.val) + "->", result)
        if not root.right:
            return get_paths(root.left, path + str(root.val) + "->", result)

        get_paths(root.left, path + str(root.val) + "->", result)
        get_paths(root.right, path + str(root.val) + "->", result)

    result = []
    path = ""
    get_paths(root, path, result)

    return result
```
