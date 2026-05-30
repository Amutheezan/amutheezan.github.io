---
type: posts
title: Verilog Basics
author: Amutheezan Sivagnanam
category: Integrated Computer Engineering
date: 2017-04-04
last_modified_at: 2017-07-02
tags:
- verilog

---
Verilog was used to resolve the complexity of handling gate-level representation. This was first released as a
proprietary language in 1985, and later it became publicly available under IEEE standards.

These are simple examples I did during the practical session for the Hardware Description Language Module

1. Sequence/Pattern Detector.
   This was a simple example used to detect the pattern ```1101``` using the Mealy method. The mealy method has fewer
   states than the Moore model. For this, we have four states using the Mealy Model.
   S1 = Reset state which comes at initial and in case of the wrong pattern matches like 10, 1100.
   S2 = the Second state which comes after the initial step with only 1; it also comes after S4.
   S3 = Third state which comes only after S2 and S3 itself; thus when 111 occurs, it will interpret again as 11.
   S4 = Last state which only comes after S3.

2. D Flip Flops
   This was a simple d flip flops. Using the following methods.
    1. Synchronous Reset
    2. Asynchronous Reset
    3. If/Wait Statement

3. Shift Register
   This was to shift register values based on the inputs. This particular register will shift the bits by 4 clock cycles.
   Thus a particular input arrives after 4 clock cycles and also has an asynchronous reset.

4. Frequency Divider
   Here I divide the main clock frequency by 3(```2'b010```), thus after every 6 clock cycle, one pulse will come from
   the new clock.
   For this, I have used a counter which counts 0 to 2 and after that toggles the clock value.

5. ALU
   This was a simple ALU that contains a set of 16 operations with +, -, AND, OR, NAND, NOR, XOR, XNOR, and NOT gate.
   This is divided into sub-modules as
    1. Arithmetic Unit ( operation with +, -)
    2. Logic Unit ( operation with AND, OR, NAND, NOR, XOR, XNOR, and NOT gates )
    3. Mux ( to choose Arithmetic or logic based on the operation selection )

6. Sample Process
   This was a simple process designed with the help of the following units
    1. Alu unit (for both Arithmetic and logical calculation)
    2. Shift unit (shifting values)
    3. Register (storing values)
    4. Mux (toggle between values)

7. Counter
   This was a simple example of a down-counter that counts from 8 to 3 and notifies when it becomes 5. This works with a
   clock, a load 8 function, which updates the counter values to eight and an enable function with common general
   meaning. Instead of previous examples, I have used a new approach based on what I learned recently. It contains three
   modules
    1. For main counter operation
    2. For testing purposes; thus the inputs and outputs of the original counter are reversed here
    3. For test bench to make the connection between test and counter

This was quite an innovative way to provide some examples of Verilog and give some basic understanding. This is strictly
for beginners. Checkout my Github Repo on [Verilog Examples](https://amutheezan.com/blog/integrated-computer-engineering/verilogbasics/).
