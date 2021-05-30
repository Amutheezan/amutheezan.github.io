
---
type: posts
title: Verification of Futurebus+ Cache Coherence Protocol
author: Amutheezan Sivagnanam

---
I have implemented a simple verification for Futurebus+ cache coherence protocol as a part of assignment for COSC 6385 course in University of Houston.

In the above code, I structure code in the following structure,
\begin{itemize}
    \item constants - to define constants such as number of processor, number of values
    \item type - define types such as processor states using enumeration which represents all the states in Futurebus+ proctcol, message types as enumeration which includes different message used to send between the states either bus or cpu call, finally the message type.
    \item variables - the global variables represents the system.
    \item procedures - contains the function used by the verification.
    \item ruleset - define the set of rules that can be used to model the systems.
   * start-state - define the start state of the system.
 * invariants - define the cases which determine the correct states of the system, or checking the validity of the system.
\end{itemize}

WORK IN PROGRESS
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTkxMDcxOTU4OF19
-->