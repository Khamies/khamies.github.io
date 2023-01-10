---
title: Some Coding Questions You Will Need For Applied ML Scientist Role - Part I
tags: [Algorithms]
style: fill
color: primary
description: A series of most important data structure and algorithms questions that I personally encountered during applying to applied machine learning scientist role.
---

​																							**This post is under construction! ***

#### 2. 3Sum

- Description

  The problem is that we are given a list of integers, and we want to find three numbers that add up to zero. In such way, the triplets should be all unique.

- Solution Intuition

  ##### 1. Brute force solution

  The intuitive approach to solve the problem is by making three for-loops (i, j, k), then iteratively, we look for a combination of a three numbers that add up to zero.

```python
def threeSum(nums):

    n = len(nums)
    target = 0
    result = []
    for i in range(n):
        for j in range(i + 1, n):
            for k in range(j + 1, n):

                sum_num = nums[i] + nums[j] + nums[k]
                sum_comb = [nums[i], nums[j], nums[k]]

                if (
                    sum_num == target
                    and i != j
                    and j != k
                    and i != k
                    and sorted(sum_comb) not in result
                ):
                    result.append(sorted(sum_comb))

    return result

```

Problem with solution is the time Complexity is O(n^3) and Space Complexity is O(n), which is not practical in real-world applications. So the question here: **Can we do better and optimize this time complexity?**

The answer is yes!, and by using "Two Pointers" approach. The idea is as following:

1. Sort the array of integers in increasing order.
2. Create a result set to hold the combinations of triplets.
3. While looping over the array using variable (i)
   1. Initialize two pointers, left pointer and has value i+1, and right pointer which has value equal to n-1, where n = array size.
   2. Make another loop and traverse the array using the two pointers, if nums[left] + nums[right] + nums[i] equals to zero, we will add this to the set of results. if nums[left] + nums[right] + nums[i] < zero, that means we need to increase the left pointer to increase the value of this summation. And finally, if f nums[left] + nums[right] + nums[i] > 0, that means we need to decrease the right pointer to decrease the value of the summation and push it towards being zero.
4. Finally, we return the set of result.

**Note**: I use set data structure to hold the combination of the triplets, to work around the duplication requirement.

```python
def threeSum(nums):

    nums = sorted(nums)
    n = len(nums)
    result = set()

    for i in range(n):

        left = i + 1
        right = n - 1
        target = 0 - nums[i]

        while left < right:

            combination_sum = nums[left] + nums[right]
            if combination_sum == target:
                result.add((nums[i], nums[left], nums[right]))
                left += 1
                right -= 1

            elif combination_sum < target:
                left += 1
            else:
                right -= 1

    return result
```



#### 6.  Container With Most Water

- Description

  The problem is about finding the maximum area that a water container can hold if you are given a list of heights,  where these heights represent all possible heights of the sides of that container.

  ![code](../media/posts/code6.jpg)

- Solution Intuition

  1. Brute Force Solution

     we will make two for-loops, an outer loop which is represented by variable **i** and an inner loop which is represented by variable **j**. at each iteration of the outer loop, we will try to find the maximum area between height[i] and height [j].

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

