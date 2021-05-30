---
type: posts
title: Simulation of Tomasulo Algorithm
author: Amutheezan Sivagnanam

---

I have extended a simple simulation for tomasulo algorithm as a part of assignment for **COSC 6385** course in University of Houston. 

This works is extension for [existing implementation](https://github.com/qingyangqing/Tomasulo) of tomasulo algorithm with 1-issue to n-issues where n = 1,2,3,4. 


## Tomasulo Algorithm
Tomasulo’s algorithm is used for dynamic scheduling of instructions that allows out-of-order execution and enables more efficient use of multiple execution units.

In this Assignment I have done following,

\begin{itemize}
    \item 1. Modified the existing python implementation of tomasulo algorithm to support issuing multiple instructions, write-back multiple completed instructions and committing multiple instructions. (supports variable issue width)
    \item 2. I have tested my modification with a set of hard-ware configurations and sample test-cases.
\end{itemize}

WORK IN PROGRESS
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTUxNDgxNzkzOSwtNzQ1NjE2MTk3XX0=
-->