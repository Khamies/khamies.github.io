---
title: Some Algorithms Questions You Will Need For Applied ML Scientist Role - Part 4
tags: [Algorithms]
style: fill
color: light
image_cover: '../media/posts/AS_algorithms_part4/coding_question_p4_cover.png'
description: A series of most important data structure and algorithms questions that you will need if you are applying to applied machine learning scientist role.

---





#### 1. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/description/) 

```python
def isValid(self, s: str) -> bool:

    dictionary = {")": "(", "}": "{", "]": "[", "SOS": "SOS"}

    stack = ["SOS"]

    for ch in s:

        if ch in dictionary.keys() and dictionary[ch] == stack[-1]:

            stack.pop()

        else:

            stack.append(ch)

    return len(stack) == 1

```