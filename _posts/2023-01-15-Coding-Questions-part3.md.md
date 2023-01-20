---
title: Some Algorithms Questions You Will Need For Applied ML Scientist Roles - Part III
tags: [Algorithms]
style: fill
color: light
image_cover: '../media/posts/AS_algorithms_part3/cover.png'
description: A series of most important data structure and algorithms questions that you may encounter during applying to applied machine learning scientist roles.


---



​                                                                     **THIS POST IS UNDER CONSTRUCTION, STAY TUNED!**



#### 1. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)

**Description**

**Solution Intuition**

```python
def removeNthFromEnd(head, n):
    
    window_size = n  # window size where the deleted node will be in the middle
    distance = n - 1
    i_slow = head
    j_fast = head

    # first we will move the fast pointer so that the distance between
    # fast - slow = window size

    for _ in range(window_size):
        j_fast = j_fast.next
    # print(i_slow.val)
    # print(j_fast.val)

    if not j_fast:
        return i_slow.next
    while j_fast.next:
        j_fast = j_fast.next
        i_slow = i_slow.next

    # print("slow", i_slow.val)
    # print("fast", j_fast.val)
    i_slow.next = i_slow.next.next

    return head
```

#### 2. [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

**Description**

**Solution Intuition**

```python
def swapPairs(head):
    if not head or not head.next:
        return head

    sentinel_node = ListNode()
    sentinel_node.next = head
    prev = sentinel_node
    i = head
    j = head.next

    while prev.next and prev.next.next:
        # finish here
        j = i.next
        # code logically starts from here
        i.next = j.next
        j.next = i
        prev.next = j

        prev = j.next
        i = i.next

    return sentinel_node.next`
```

#### 3. [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)

**Description**

**Solution Intuition**