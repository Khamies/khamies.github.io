---
title: Some Algorithms Questions You Will Need For Applied ML Scientist Roles - Part 3
tags: [Algorithms]
style: fill
color: light
image_cover: '../media/posts/AS_algorithms_part3/cover.png'
external_url: https://blog.waleedkhamies.com
description: Part 3 of a series of most important data structure and algorithms questions that you will need if you are applying to applied machine learning scientist role.


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



#### 4. Linked List Cycle

```python
def hasCycle(head):

    p = head
    nodes = []

    while p:

        if p in nodes:
            return True

        nodes.append(p)
        p = p.next
    return False

```





```python
def hasCycle(head):

    slow = head
    fast = head

    while fast and fast.next:

        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return True

    return False
```



#### Linked List Cycle II

**Bruteforce**

```python
def detectCycle(head):
    p = head
    nodes = []

    while p:

        if p in nodes:
            return p

        nodes.append(p)
        p = p.next
    return None
```



Floyed's cycle detection algorithm.

![](/home/waleed/Téléchargements/Capture d'écran de 2023-02-02 19-08-24.png)

```python
def detectCycle(head):
    
    def has_cycle(head):
        slow = head
        fast = head

        while fast and fast.next:

            slow = slow.next
            fast = fast.next.next

            if slow == fast:
                return slow
            
        return None

    def cycle_starting_point(head, meeting_point):

        p = head
        q = meeting_point

        while p != q:
            p = p.next
            q = q.next

        return p

    meeting_point = has_cycle(head)

    if not meeting_point:
        return None

    else:

        return cycle_starting_point(head, meeting_point)

```



resources:

- https://www.youtube.com/watch?v=zbozWoMgKW0&
- https://www.youtube.com/watch?v=LUm2ABqAs1w