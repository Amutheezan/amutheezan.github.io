---
type: posts
title: Simulation of Tomasulo Algorithm
author: Amutheezan Sivagnanam

---

I have extended a simple simulation for tomasulo algorithm as a part of assignment for **COSC 6385** course in University of Houston. 

This works is extension for [existing implementation](https://github.com/qingyangqing/Tomasulo) of tomasulo algorithm with 1-issue to n-issues where n = 1,2,3,4. 


## Tomasulo Algorithm
Tomasulo’s algorithm is used for dynamic scheduling of instructions that allows out-of-order execution and enables more efficient use of multiple execution units.

In this Implementation I have done following,

1. Modified the existing python implementation of tomasulo algorithm to support issuing multiple instructions, write-back multiple completed instructions and committing multiple instructions. (supports variable issue width)
 2. I have tested my modification with a set of hard-ware configurations and sample test-cases.

#### What Works


* Supports for multiple issue, write-back, and commit.
* Functional units are pipe-lined.
* Implemented in-order execution, with multiple issue.
* This implementation supports multiple functional units and multiple load-store units; thus, changing configuration with functional units and load-store units more than one will also work. 

#### Limitations

* This implementation doesn't support the branch-predictions, so inputs with branch commands such as ```beq``` and ```bne`` fail when the issue-width is greater than 1.
* Load store unit is not pipe-lined.


WORK IN PROGRESS
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyMjcyMzgyNzEsLTc0NTYxNjE5N119
-->