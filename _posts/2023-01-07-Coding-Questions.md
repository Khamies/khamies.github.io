---
title: Some Coding Questions You Will Need For Applied Scientist Role
tags: [Algorithms]
style: fill
color: white
description: Some Coding Questions You Will Need For Applied Scientist Role.
---

​																							**This post is under construction! ***

#### 6.  Container With Most Water

- Description

  The problem is about finding the maximum area that a water container can hold if you are given a list of heights,  where these heights represent all possible heights of the sides of that container.

  ![code](../media/posts/code6.jpg)

- Solution Intuition

  1. Brute Force Solution

     we will make two for-loops, an outer loop which is represented by variable **i** and an inner loop which is represented by variable **j**. at each iteration of the outer loop, we will try to find the maximum area between height[i] and height [j].

- Code

  ```python
  def max_water_area(height):
  
      n = len(height)
      area = 0
      for i in range(n):
          for j in range(i + 1, n):
  
              h = min(height[i], height[j])
              w = j - i
              area = max(area, h * w)
  
      return area
  ```

Problem with solution:  Time Complexity: O(n^2)

**How we can optimize this solution?**  

Two pointers!.

What if we set two pointers, left pointer that points at the beginning of the list of heights and right pointer that points at the end of the list. Then, we will move one of the two pointer depending if the value that corresponding to that pointer is less than the other one. why? imagine if one of the container sides has height 10 and the other is 5 and the distance between the two sides is 7, then:

area = min(5, 10) x 7 = 35 



```python
def max_water_area(height):

    n = len(height)
    left = 0
    right = n - 1
    area = 0

    while left < right:
        w = right - left	# container width

        if height[left] <= height[right]: 
            h = height[left]	# Take the short left side as container height
            area = max(area, h * w)	# Calculate the area and take the maximum between current area and the previous one.

            left += 1	# move the left pointer by 1
        else:
            h = height[right]	# Take the short right side as container height
            area = max(area, h * w)

            right -= 1	# move the right pointer by 1, but in the opposite direction.

    return area
```

